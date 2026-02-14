export interface Tool {
  name: string
  slug: string
  description: string
  longDescription: string
  icon: string
  acceptedFiles: string[]
  maxFiles: number
  endpoint: string
}

export const tools: Tool[] = [
  {
    name: 'Merge PDF',
    slug: 'merge-pdf',
    description: 'Combine multiple PDF files into one document',
    longDescription: 'Merge multiple PDF files into a single PDF document. Our free PDF merger allows you to combine up to 20 PDF files in any order. Perfect for combining reports, invoices, or any collection of PDFs.',
    icon: 'merge',
    acceptedFiles: ['application/pdf'],
    maxFiles: 20,
    endpoint: '/api/pdf/merge'
  },
  {
    name: 'Split PDF',
    slug: 'split-pdf',
    description: 'Split PDF into multiple files',
    longDescription: 'Split your PDF into multiple files. Extract pages or split by page ranges. Choose to split every page, by page ranges, or extract specific pages from your PDF document.',
    icon: 'split',
    acceptedFiles: ['application/pdf'],
    maxFiles: 1,
    endpoint: '/api/pdf/split'
  },
  {
    name: 'Compress PDF',
    slug: 'compress-pdf',
    description: 'Reduce PDF file size',
    longDescription: 'Compress PDF files to reduce file size while maintaining quality. Our smart compression algorithms optimize your PDF for web sharing, email, or storage without losing important details.',
    icon: 'compress',
    acceptedFiles: ['application/pdf'],
    maxFiles: 1,
    endpoint: '/api/pdf/compress'
  },
  {
    name: 'PDF to Word',
    slug: 'pdf-to-word',
    description: 'Convert PDF to editable Word document',
    longDescription: 'Convert your PDF files to editable Microsoft Word documents (DOCX). Perfect for editing text, fixing typos, or reusing content from PDFs in your documents.',
    icon: 'file-text',
    acceptedFiles: ['application/pdf'],
    maxFiles: 1,
    endpoint: '/api/pdf/pdf-to-word'
  },
  {
    name: 'Word to PDF',
    slug: 'word-to-pdf',
    description: 'Convert Word to PDF',
    longDescription: 'Convert Microsoft Word documents (DOC, DOCX) to PDF format. Create professional PDFs from your Word files with perfect formatting preservation.',
    icon: 'file',
    acceptedFiles: [
      'application/msword',
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ],
    maxFiles: 1,
    endpoint: '/api/pdf/word-to-pdf'
  },
  {
    name: 'JPG to PDF',
    slug: 'jpg-to-pdf',
    description: 'Convert images to PDF',
    longDescription: 'Convert JPG, PNG, and other images to PDF. Create a single PDF from multiple images. Perfect for creating documents from scanned images or photos.',
    icon: 'image',
    acceptedFiles: ['image/jpeg', 'image/png', 'image/jpg'],
    maxFiles: 20,
    endpoint: '/api/pdf/jpg-to-pdf'
  },
  {
    name: 'PDF to JPG',
    slug: 'pdf-to-jpg',
    description: 'Convert PDF pages to images',
    longDescription: 'Convert PDF pages to high-quality JPG images. Extract images from PDF or convert entire documents to image format for easy sharing.',
    icon: 'camera',
    acceptedFiles: ['application/pdf'],
    maxFiles: 1,
    endpoint: '/api/pdf/pdf-to-jpg'
  },
  {
    name: 'Rotate PDF',
    slug: 'rotate-pdf',
    description: 'Rotate PDF pages',
    longDescription: 'Rotate pages in your PDF document. Choose to rotate all pages or specific pages. Perfect for fixing scanned documents with wrong orientation.',
    icon: 'rotate',
    acceptedFiles: ['application/pdf'],
    maxFiles: 1,
    endpoint: '/api/pdf/rotate'
  },
  {
    name: 'Protect PDF',
    slug: 'protect-pdf',
    description: 'Add password protection to PDF',
    longDescription: 'Protect your PDF with a password. Add user and owner passwords to control who can open, edit, or print your PDF documents.',
    icon: 'lock',
    acceptedFiles: ['application/pdf'],
    maxFiles: 1,
    endpoint: '/api/pdf/protect'
  },
  {
    name: 'Unlock PDF',
    slug: 'unlock-pdf',
    description: 'Remove PDF password protection',
    longDescription: 'Remove password protection from PDF files. Unlock secured PDFs to edit, print, or copy content (requires password).',
    icon: 'unlock',
    acceptedFiles: ['application/pdf'],
    maxFiles: 1,
    endpoint: '/api/pdf/unlock'
  }
]