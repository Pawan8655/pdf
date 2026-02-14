import { Metadata } from 'next'
import { Card } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'About Us - PDF Tools Online',
  description: 'Learn about our mission to provide free, secure, and easy-to-use PDF tools for everyone.',
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Card className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">About Us</h1>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2>Our Mission</h2>
          <p>
            At PDF Tools Online, our mission is simple: provide free, secure, and easy-to-use PDF tools for everyone. 
            We believe that document management shouldn't cost money or require complicated software installations. 
            That's why we created a comprehensive suite of PDF tools that work directly in your browser.
          </p>

          <h2>Why We Started</h2>
          <p>
            We noticed that most PDF tools either cost money, have file size limits, or compromise on security. 
            Many services store your files permanently or use them for training AI models without your consent. 
            We decided to build something different - a service that respects your privacy and is truly free.
          </p>

          <h2>Our Values</h2>
          
          <h3>Privacy First</h3>
          <p>
            Your documents are your business. We never store your files permanently. All uploads are automatically 
            deleted from our servers immediately after processing. We don't look at your files, and we don't use 
            them for any purpose other than providing the service you requested.
          </p>

          <h3>Truly Free</h3>
          <p>
            No hidden costs, no premium tiers, no credit card required. All our PDF tools are completely free to use. 
            We support the service through unobtrusive advertising, but we never limit functionality or put features 
            behind paywalls.
          </p>

          <h3>Easy to Use</h3>
          <p>
            We believe that powerful tools should be simple to use. Our intuitive interface requires no training or 
            technical knowledge. Just upload your files, click a button, and download the result.
          </p>

          <h3>High Quality</h3>
          <p>
            We use professional-grade PDF processing libraries to ensure the highest quality output. Whether you're 
            merging PDFs, converting formats, or compressing files, you can trust that the result will maintain the 
            quality of your original documents.
          </p>

          <h2>Our Team</h2>
          <p>
            We are a small team of developers and designers passionate about creating useful tools that make people's 
            lives easier. Based remotely around the world, we collaborate to build and maintain this service for 
            millions of users.
          </p>

          <h2>Our Technology</h2>
          <p>
            We use the official iLovePDF API for document processing, combined with modern web technologies like 
            Next.js, TypeScript, and Tailwind CSS. This ensures fast, reliable performance and a smooth user experience 
            across all devices.
          </p>

          <h2>Security</h2>
          <p>
            Security is at the core of everything we do. All connections are encrypted with SSL/TLS. Files are processed 
            in isolated environments and immediately deleted. We implement rate limiting to prevent abuse and regularly 
            audit our systems for vulnerabilities.
          </p>

          <h2>Join Our Community</h2>
          <p>
            We're building a community of users who care about privacy and simplicity. Follow us on social media, 
            share your feedback, and help us improve. Together, we can make document management accessible to everyone.
          </p>

          <h2>Contact Us</h2>
          <p>
            Have questions, suggestions, or just want to say hello? We'd love to hear from you. Visit our 
            <a href="/contact" className="text-primary"> Contact Page</a> to get in touch.
          </p>
        </div>
      </Card>
    </div>
  )
}