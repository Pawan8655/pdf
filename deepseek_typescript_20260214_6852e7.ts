import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { tools, Tool } from '@/lib/constants/tools'
import ToolLayout from '@/components/tools/ToolLayout'
import { JsonLd } from '@/components/seo/JsonLd'
import { SchemaMarkup } from '@/components/seo/SchemaMarkup'

interface PageProps {
  params: {
    tool: string
  }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const tool = tools.find(t => t.slug === params.tool)
  
  if (!tool) {
    return {
      title: 'Tool Not Found',
      description: 'The requested PDF tool could not be found.'
    }
  }

  return {
    title: `${tool.name} - Free Online PDF Tool`,
    description: tool.description,
    openGraph: {
      title: `${tool.name} - Free Online PDF Tool`,
      description: tool.description,
      url: `https://pdf-tools.vercel.app/${tool.slug}`,
    },
    alternates: {
      canonical: `https://pdf-tools.vercel.app/${tool.slug}`,
    },
  }
}

export async function generateStaticParams() {
  return tools.map((tool) => ({
    tool: tool.slug,
  }))
}

export default function ToolPage({ params }: PageProps) {
  const tool = tools.find(t => t.slug === params.tool)
  
  if (!tool) {
    notFound()
  }

  const toolContent = generateToolContent(tool)

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: `${tool.name} - Free PDF Tool`,
          description: tool.description,
          applicationCategory: 'UtilitiesApplication',
          operatingSystem: 'All',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
          },
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.8',
            ratingCount: '1250',
          },
        }}
      />
      
      <ToolLayout tool={tool}>
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-3xl font-bold mb-6">{tool.name} - Free Online PDF Tool</h1>
          
          <div dangerouslySetInnerHTML={{ __html: toolContent }} />
          
          <SchemaMarkup tool={tool} />
        </div>
      </ToolLayout>
    </>
  )
}

function generateToolContent(tool: Tool): string {
  const contents: Record<string, string> = {
    'merge-pdf': `
      <h2>How to Merge PDF Files Online Free</h2>
      <p>Combine multiple PDF files into one document with our free PDF merger. Perfect for merging reports, invoices, contracts, or any collection of PDF files. Our tool maintains original formatting and quality while creating a single, organized PDF document.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li><strong>Merge up to 20 PDF files</strong> - Combine multiple documents in one go</li>
        <li><strong>Maintain quality</strong> - Original formatting and quality preserved</li>
        <li><strong>Rearrange pages</strong> - Drag and drop to reorder files before merging</li>
        <li><strong>Fast processing</strong> - Get your merged PDF in seconds</li>
        <li><strong>Secure</strong> - Files are automatically deleted after processing</li>
      </ul>

      <h3>How to Merge PDF Files</h3>
      <ol>
        <li>Click the upload area and select your PDF files</li>
        <li>Drag files to arrange them in the desired order</li>
        <li>Click "Merge PDF" to combine the files</li>
        <li>Download your merged PDF document</li>
      </ol>

      <h3>Why Use Our PDF Merger?</h3>
      <p>Our free PDF merger combines the power of professional PDF tools with ease of use. Whether you're combining business documents, academic papers, or personal files, our tool ensures perfect results every time. No registration, no watermarks, and completely free.</p>

      <h3>Frequently Asked Questions</h3>
      
      <h4>Is there a limit on file size?</h4>
      <p>You can merge PDF files up to 100MB each. For larger files, we recommend compressing them first using our PDF compression tool.</p>
      
      <h4>Are my files secure?</h4>
      <p>Yes, all files are automatically deleted from our servers after processing. We never store your documents permanently.</p>
      
      <h4>Can I merge different file types?</h4>
      <p>Our merger only supports PDF files. For merging other file types, first convert them to PDF using our conversion tools.</p>
    `,
    'split-pdf': `
      <h2>How to Split PDF Files Online Free</h2>
      <p>Split your PDF documents into multiple files with our easy-to-use PDF splitter. Extract specific pages, split every page into separate files, or divide by page ranges. Perfect for managing large PDF documents.</p>
      
      <h3>Splitting Options</h3>
      <ul>
        <li><strong>Split every page</strong> - Create separate files for each page</li>
        <li><strong>Split by page ranges</strong> - Divide into custom page groups</li>
        <li><strong>Extract pages</strong> - Select specific pages to extract</li>
        <li><strong>Keep bookmarks</strong> - Preserve document structure when splitting</li>
      </ul>

      <h3>Common Use Cases</h3>
      <ul>
        <li>Extracting chapters from an eBook</li>
        <li>Splitting a large contract into individual sections</li>
        <li>Separating scanned documents into single pages</li>
        <li>Creating individual invoices from a batch</li>
      </ul>

      <h3>How to Split PDF Files</h3>
      <ol>
        <li>Upload your PDF document</li>
        <li>Choose how you want to split the file</li>
        <li>Specify page ranges or extraction points</li>
        <li>Click "Split PDF" and download your files as a ZIP</li>
      </ol>
    `,
    'compress-pdf': `
      <h2>Compress PDF Files Online Free</h2>
      <p>Reduce PDF file size while maintaining quality with our intelligent PDF compression tool. Perfect for email attachments, web uploads, and saving storage space.</p>
      
      <h3>Compression Options</h3>
      <ul>
        <li><strong>Low compression</strong> - Minimal size reduction, best quality</li>
        <li><strong>Medium compression</strong> - Balanced file size and quality</li>
        <li><strong>High compression</strong> - Maximum size reduction</li>
        <li><strong>Custom settings</strong> - Adjust image quality and resolution</li>
      </ul>

      <h3>Benefits of PDF Compression</h3>
      <ul>
        <li>Faster email sending</li>
        <li>Quicker website uploads</li>
        <li>Reduced storage costs</li>
        <li>Better mobile viewing</li>
        <li>Faster document sharing</li>
      </ul>

      <h3>How to Compress PDF</h3>
      <ol>
        <li>Upload your PDF file</li>
        <li>Select compression level</li>
        <li>Click "Compress PDF"</li>
        <li>Download your optimized PDF</li>
      </ol>
    `,
    'pdf-to-word': `
      <h2>Convert PDF to Word Online Free</h2>
      <p>Transform your PDF files into editable Microsoft Word documents (DOCX). Edit text, fix typos, and reuse content from PDFs in your documents with perfect formatting preservation.</p>
      
      <h3>Key Features</h3>
      <ul>
        <li><strong>Text recognition</strong> - OCR for scanned documents</li>
        <li><strong>Formatting preservation</strong> - Maintains layout and styling</li>
        <li><strong>Image extraction</strong> - Keeps images from original PDF</li>
        <li><strong>Table conversion</strong> - Converts tables to editable format</li>
        <li><strong>Font mapping</strong> - Matches fonts as closely as possible</li>
      </ul>

      <h3>Common Use Cases</h3>
      <ul>
        <li>Editing old PDF documents</li>
        <li>Reusing content from PDFs</li>
        <li>Correcting typos in scanned documents</li>
        <li>Creating editable templates from PDFs</li>
        <li>Translating PDF content</li>
      </ul>

      <h3>How to Convert PDF to Word</h3>
      <ol>
        <li>Upload your PDF file</li>
        <li>Choose conversion options</li>
        <li>Click "Convert to Word"</li>
        <li>Download your editable DOCX file</li>
      </ol>
    `,
    'word-to-pdf': `
      <h2>Convert Word to PDF Online Free</h2>
      <p>Convert Microsoft Word documents to professional PDF format with perfect formatting. Create shareable, print-ready PDFs from your DOC and DOCX files.</p>
      
      <h3>Key Benefits</h3>
      <ul>
        <li><strong>Universal compatibility</strong> - PDFs work everywhere</li>
        <li><strong>Formatting preserved</strong> - Looks the same on all devices</li>
        <li><strong>Smaller file size</strong> - Optimized PDF output</li>
        <li><strong>Security ready</strong> - Add passwords after conversion</li>
        <li><strong>Print perfect</strong> - Optimized for printing</li>
      </ul>

      <h3>Perfect For</h3>
      <ul>
        <li>Resumes and CVs</li>
        <li>Business reports</li>
        <li>Academic papers</li>
        <li>Legal documents</li>
        <li>E-books and manuals</li>
      </ul>

      <h3>How to Convert Word to PDF</h3>
      <ol>
        <li>Upload your Word document</li>
        <li>Adjust settings if needed</li>
        <li>Click "Convert to PDF"</li>
        <li>Download your PDF file</li>
      </ol>
    `,
    'jpg-to-pdf': `
      <h2>Convert JPG to PDF Online Free</h2>
      <p>Create PDF documents from your images. Convert JPG, PNG, and other image formats to PDF. Perfect for creating documents from photos, scans, or screenshots.</p>
      
      <h3>Features</h3>
      <ul>
        <li><strong>Multiple images</strong> - Combine up to 20 images</li>
        <li><strong>Page sizing</strong> - Choose paper size (A4, Letter, etc.)</li>
        <li><strong>Image quality</strong> - Adjust compression and quality</li>
        <li><strong>Orientation</strong> - Portrait or landscape</li>
        <li><strong>Margins</strong> - Add or remove page margins</li>
      </ul>

      <h3>Common Uses</h3>
      <ul>
        <li>Creating photo albums</li>
        <li>Scanning documents to PDF</li>
        <li>Making presentations</li>
        <li>Archiving images</li>
        <li>Sending multiple photos in one file</li>
      </ul>

      <h3>How to Convert JPG to PDF</h3>
      <ol>
        <li>Upload your images</li>
        <li>Arrange them in order</li>
        <li>Choose page settings</li>
        <li>Click "Create PDF"</li>
        <li>Download your PDF document</li>
      </ol>
    `,
    'pdf-to-jpg': `
      <h2>Convert PDF to JPG Online Free</h2>
      <p>Extract images from PDF or convert entire pages to high-quality JPG format. Perfect for sharing PDF content on social media, websites, or presentations.</p>
      
      <h3>Conversion Options</h3>
      <ul>
        <li><strong>Extract all images</strong> - Save embedded images separately</li>
        <li><strong>Convert pages</strong> - Turn each page into JPG</li>
        <li><strong>Quality settings</strong> - Choose image quality</li>
        <li><strong>Resolution</strong> - Set DPI for output images</li>
        <li><strong>Batch processing</strong> - Convert entire PDF at once</li>
      </ul>

      <h3>Perfect For</h3>
      <ul>
        <li>Social media sharing</li>
        <li>Website images</li>
        <li>Presentations</li>
        <li>Preview thumbnails</li>
        <li>Image archives</li>
      </ul>

      <h3>How to Convert PDF to JPG</h3>
      <ol>
        <li>Upload your PDF file</li>
        <li>Choose conversion type</li>
        <li>Adjust quality settings</li>
        <li>Click "Convert to JPG"</li>
        <li>Download your images as ZIP</li>
      </ol>
    `,
    'rotate-pdf': `
      <h2>Rotate PDF Pages Online Free</h2>
      <p>Fix upside-down or sideways pages in your PDF documents. Rotate individual pages or entire documents with our easy-to-use PDF rotator.</p>
      
      <h3>Rotation Options</h3>
      <ul>
        <li><strong>All pages</strong> - Rotate entire document</li>
        <li><strong>Specific pages</strong> - Rotate selected pages only</li>
        <li><strong>Page ranges</strong> - Rotate ranges of pages</li>
        <li><strong>Multiple angles</strong> - 90°, 180°, or 270° rotation</li>
      </ul>

      <h3>Common Scenarios</h3>
      <ul>
        <li>Fixing scanned documents</li>
        <li>Correcting camera photos</li>
        <li>Adjusting mixed orientations</li>
        <li>Preparing documents for printing</li>
        <li>Creating consistent layouts</li>
      </ul>

      <h3>How to Rotate PDF Pages</h3>
      <ol>
        <li>Upload your PDF file</li>
        <li>Select pages to rotate</li>
        <li>Choose rotation angle</li>
        <li>Click "Rotate PDF"</li>
        <li>Download your corrected document</li>
      </ol>
    `,
    'protect-pdf': `
      <h2>Protect PDF with Password Online Free</h2>
      <p>Secure your PDF documents with password protection. Add user and owner passwords to control who can open, edit, or print your PDF files.</p>
      
      <h3>Security Options</h3>
      <ul>
        <li><strong>User password</strong> - Required to open the document</li>
        <li><strong>Owner password</strong> - Controls permissions</li>
        <li><strong>Printing</strong> - Allow or restrict printing</li>
        <li><strong>Editing</strong> - Control modification rights</li>
        <li><strong>Copying</strong> - Restrict content copying</li>
      </ul>

      <h3>Best Practices</h3>
      <ul>
        <li>Use strong passwords (mix of letters, numbers, symbols)</li>
        <li>Keep passwords in a secure location</li>
        <li>Consider encryption level (128-bit or 256-bit)</li>
        <li>Test protected PDF before distribution</li>
      </ul>

      <h3>How to Protect PDF</h3>
      <ol>
        <li>Upload your PDF file</li>
        <li>Set user password for opening</li>
        <li>Configure permissions (optional)</li>
        <li>Click "Protect PDF"</li>
        <li>Download your secured document</li>
      </ol>
    `,
    'unlock-pdf': `
      <h2>Unlock PDF Online Free</h2>
      <p>Remove password protection from PDF files. Unlock secured PDFs to edit, print, or copy content (requires original password).</p>
      
      <h3>Removable Restrictions</h3>
      <ul>
        <li><strong>Open password</strong> - Remove password requirement</li>
        <li><strong>Edit restrictions</strong> - Enable editing capability</li>
        <li><strong>Print restrictions</strong> - Allow printing</li>
        <li><strong>Copy restrictions</strong> - Enable content copying</li>
        <li><strong>Permission controls</strong> - Remove all restrictions</li>
      </ul>

      <h3>Important Notes</h3>
      <ul>
        <li>You must have the password to unlock</li>
        <li>Only remove protection from your own files</li>
        <li>Respect copyright and intellectual property</li>
        <li>Some PDFs have permanent restrictions</li>
      </ul>

      <h3>How to Unlock PDF</h3>
      <ol>
        <li>Upload your password-protected PDF</li>
        <li>Enter the document password</li>
        <li>Click "Unlock PDF"</li>
        <li>Download your unrestricted document</li>
      </ol>
    `
  }

  return contents[tool.slug] || '<p>Content coming soon.</p>'
}