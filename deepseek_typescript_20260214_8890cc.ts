import { NextRequest, NextResponse } from 'next/server'
import { ilovepdf } from '@/lib/api/ilovepdf'
import { saveFile, deleteFile, generateOutputFilename } from '@/lib/utils/fileHandler'
import { checkRateLimit } from '@/lib/utils/rateLimiter'
import { RATE_LIMIT } from '@/lib/api/ilovepdf'

export async function POST(req: NextRequest) {
  try {
    // Rate limiting
    const rateLimit = checkRateLimit(req, RATE_LIMIT.windowMs, RATE_LIMIT.max)
    if (!rateLimit.success) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      )
    }

    // Parse form data
    const formData = await req.formData()
    const files = formData.getAll('files') as File[]

    if (!files.length) {
      return NextResponse.json(
        { error: 'No files provided' },
        { status: 400 }
      )
    }

    if (files.length > 20) {
      return NextResponse.json(
        { error: 'Maximum 20 files allowed' },
        { status: 400 }
      )
    }

    // Initialize iLovePDF task
    const task = ilovepdf.newTask('merge')
    await task.start()

    // Upload files
    const filepaths: string[] = []
    for (const file of files) {
      if (file.type !== 'application/pdf') {
        // Clean up uploaded files
        await Promise.all(filepaths.map(deleteFile))
        return NextResponse.json(
          { error: 'Only PDF files are allowed' },
          { status: 400 }
        )
      }

      const filepath = await saveFile(file)
      filepaths.push(filepath)
      await task.addFile(filepath)
    }

    // Process files
    await task.process()

    // Download result
    const outputFilename = generateOutputFilename(files[0].name, 'merged')
    const outputFilepath = await task.download()

    // Read file for response
    const fileBuffer = await require('fs').promises.readFile(outputFilepath)

    // Clean up temporary files
    await Promise.all([
      ...filepaths.map(deleteFile),
      deleteFile(outputFilepath)
    ])

    // Return file
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="${outputFilename}"`,
      },
    })
  } catch (error) {
    console.error('Merge PDF error:', error)
    return NextResponse.json(
      { error: 'Failed to merge PDF files' },
      { status: 500 }
    )
  }
}