import { randomUUID } from 'crypto'
import fs from 'fs/promises'
import path from 'path'

const TMP_DIR = path.join(process.cwd(), 'tmp')

// Ensure tmp directory exists
async function ensureTmpDir() {
  try {
    await fs.access(TMP_DIR)
  } catch {
    await fs.mkdir(TMP_DIR, { recursive: true })
  }
}

export async function saveFile(file: File): Promise<string> {
  await ensureTmpDir()
  
  const bytes = await file.arrayBuffer()
  const buffer = Buffer.from(bytes)
  
  const id = randomUUID()
  const ext = path.extname(file.name)
  const filename = `${id}${ext}`
  const filepath = path.join(TMP_DIR, filename)
  
  await fs.writeFile(filepath, buffer)
  
  return filepath
}

export async function deleteFile(filepath: string) {
  try {
    await fs.unlink(filepath)
  } catch (error) {
    console.error('Error deleting file:', error)
  }
}

export function generateOutputFilename(originalName: string, suffix: string): string {
  const ext = path.extname(originalName)
  const name = path.basename(originalName, ext)
  return `${name}_${suffix}${ext}`
}