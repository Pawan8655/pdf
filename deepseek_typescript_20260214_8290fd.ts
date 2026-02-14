'use client'

import { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import { Upload, X, File, Loader2 } from 'lucide-react'
import { Tool } from '@/lib/constants/tools'
import { Button } from '../ui/Button'
import ProgressBar from './ProgressBar'
import DownloadButton from './DownloadButton'
import toast from 'react-hot-toast'

interface FileWithPreview extends File {
  preview?: string
}

interface FileUploaderProps {
  tool: Tool
}

export default function FileUploader({ tool }: FileUploaderProps) {
  const [files, setFiles] = useState<FileWithPreview[]>([])
  const [isProcessing, setIsProcessing] = useState(false)
  const [progress, setProgress] = useState(0)
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setError(null)
    setDownloadUrl(null)
    
    // Check file count
    if (acceptedFiles.length > tool.maxFiles) {
      toast.error(`Maximum ${tool.maxFiles} files allowed`)
      return
    }

    // Check file types
    const invalidFiles = acceptedFiles.filter(
      file => !tool.acceptedFiles.includes(file.type)
    )
    
    if (invalidFiles.length > 0) {
      toast.error(`Invalid file type. Please upload ${tool.acceptedFiles.join(', ')}`)
      return
    }

    // Check file size (100MB limit)
    const oversizedFiles = acceptedFiles.filter(file => file.size > 100 * 1024 * 1024)
    if (oversizedFiles.length > 0) {
      toast.error('Files must be less than 100MB')
      return
    }

    setFiles(acceptedFiles.map(file => 
      Object.assign(file, {
        preview: file.type.startsWith('image/') ? URL.createObjectURL(file) : undefined
      })
    ))
  }, [tool.acceptedFiles, tool.maxFiles])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: tool.acceptedFiles.reduce((acc, type) => ({ ...acc, [type]: [] }), {}),
    maxFiles: tool.maxFiles,
  })

  const removeFile = (index: number) => {
    setFiles(prev => {
      const newFiles = [...prev]
      if (newFiles[index].preview) {
        URL.revokeObjectURL(newFiles[index].preview!)
      }
      newFiles.splice(index, 1)
      return newFiles
    })
  }

  const processFiles = async () => {
    if (files.length === 0) {
      toast.error('Please select files first')
      return
    }

    setIsProcessing(true)
    setProgress(0)
    setError(null)

    const formData = new FormData()
    files.forEach(file => formData.append('files', file))

    try {
      // Simulate progress
      const progressInterval = setInterval(() => {
        setProgress(prev => Math.min(prev + 10, 90))
      }, 500)

      const response = await fetch(tool.endpoint, {
        method: 'POST',
        body: formData,
      })

      clearInterval(progressInterval)

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || 'Processing failed')
      }

      setProgress(100)

      // Create download URL
      const blob = await response.blob()
      const url = URL.createObjectURL(blob)
      setDownloadUrl(url)

      toast.success('Processing complete!')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred')
      toast.error(err instanceof Error ? err.message : 'Processing failed')
    } finally {
      setIsProcessing(false)
    }
  }

  const reset = () => {
    files.forEach(file => {
      if (file.preview) URL.revokeObjectURL(file.preview)
    })
    setFiles([])
    setDownloadUrl(null)
    setError(null)
    setProgress(0)
  }

  return (
    <div className="space-y-6">
      {/* Dropzone */}
      {!isProcessing && !downloadUrl && (
        <div
          {...getRootProps()}
          className={`dropzone ${isDragActive ? 'active' : ''}`}
        >
          <input {...getInputProps()} />
          <Upload className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
          {isDragActive ? (
            <p className="text-lg">Drop the files here...</p>
          ) : (
            <div>
              <p className="text-lg mb-2">Drag & drop files here</p>
              <p className="text-sm text-muted-foreground">
                or click to select files (max {tool.maxFiles} files)
              </p>
            </div>
          )}
        </div>
      )}

      {/* File List */}
      {files.length > 0 && !downloadUrl && (
        <div className="space-y-3">
          <h3 className="font-semibold">Selected Files:</h3>
          {files.map((file, index) => (
            <div
              key={`${file.name}-${index}`}
              className="flex items-center justify-between p-3 bg-muted rounded-lg"
            >
              <div className="flex items-center space-x-3">
                <File className="h-5 w-5 text-primary" />
                <div>
                  <p className="font-medium">{file.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {(file.size / 1024 / 1024).toFixed(2)} MB
                  </p>
                </div>
              </div>
              {!isProcessing && (
                <button
                  onClick={() => removeFile(index)}
                  className="p-1 hover:bg-background rounded-full"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Progress Bar */}
      {isProcessing && (
        <div className="space-y-4">
          <ProgressBar progress={progress} />
          <p className="text-center text-sm text-muted-foreground">
            Processing your files...
          </p>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="p-4 bg-destructive/10 text-destructive rounded-lg">
          <p className="font-medium">Error: {error}</p>
          <Button onClick={reset} variant="outline" className="mt-2">
            Try Again
          </Button>
        </div>
      )}

      {/* Action Buttons */}
      {files.length > 0 && !downloadUrl && !isProcessing && (
        <div className="flex space-x-4">
          <Button onClick={processFiles} className="flex-1">
            {tool.name}
          </Button>
          <Button onClick={reset} variant="outline">
            Clear All
          </Button>
        </div>
      )}

      {/* Download Button */}
      {downloadUrl && (
        <div className="space-y-4">
          <DownloadButton url={downloadUrl} filename={`${tool.slug}_output.pdf`} />
          <Button onClick={reset} variant="outline" className="w-full">
            Process Another File
          </Button>
        </div>
      )}
    </div>
  )
}