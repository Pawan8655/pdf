import { Metadata } from 'next'
import { Card } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Privacy Policy - PDF Tools Online',
  description: 'Our privacy policy explains how we handle your data and protect your privacy when using our PDF tools.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Card className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: January 1, 2024</p>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2>1. Introduction</h2>
          <p>
            Welcome to PDF Tools Online. We respect your privacy and are committed to protecting your personal data. 
            This privacy policy will inform you about how we look after your personal data when you visit our website 
            and tell you about your privacy rights and how the law protects you.
          </p>

          <h2>2. Data We Collect</h2>
          <p>We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
          <ul>
            <li><strong>Identity Data:</strong> first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data:</strong> email address and telephone numbers.</li>
            <li><strong>Technical Data:</strong> internet protocol (IP) address, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform.</li>
            <li><strong>Usage Data:</strong> information about how you use our website and services.</li>
          </ul>

          <h2>3. How We Use Your Data</h2>
          <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
          <ul>
            <li>To provide and improve our PDF tools service.</li>
            <li>To manage your account and provide customer support.</li>
            <li>To administer and protect our business and website.</li>
            <li>To deliver relevant website content and advertisements.</li>
            <li>To use data analytics to improve our website and services.</li>
          </ul>

          <h2>4. File Processing and Storage</h2>
          <p>
            <strong>Important:</strong> All files uploaded to our PDF tools are automatically deleted from our servers 
            immediately after processing. We do not store, retain, or have any access to your files once the conversion 
            is complete. Files are processed in memory and temporary storage is cleared within minutes.
          </p>

          <h2>5. Cookies and Tracking</h2>
          <p>
            We use cookies and similar tracking technologies to track activity on our service and hold certain information. 
            Cookies are files with small amount of data which may include an anonymous unique identifier. You can instruct 
            your browser to refuse all cookies or to indicate when a cookie is being sent.
          </p>

          <h2>6. Third-Party Services</h2>
          <p>
            We may employ third-party companies and individuals due to the following reasons:
          </p>
          <ul>
            <li>To facilitate our Service;</li>
            <li>To provide the Service on our behalf;</li>
            <li>To perform Service-related services; or</li>
            <li>To assist us in analyzing how our Service is used.</li>
          </ul>
          <p>
            These third-parties have access to your Personal Data only to perform these tasks on our behalf and are 
            obligated not to disclose or use it for any other purpose.
          </p>

          <h2>7. Advertising</h2>
          <p>
            We use Google AdSense to display advertisements on our website. Google AdSense uses cookies to serve ads 
            based on your prior visits to our website or other websites. Google's use of advertising cookies enables 
            it and its partners to serve ads based on your visit to our site and/or other sites on the Internet.
          </p>

          <h2>8. Your Rights</h2>
          <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data:</p>
          <ul>
            <li>The right to access your personal data.</li>
            <li>The right to rectification of your personal data.</li>
            <li>The right to erasure of your personal data.</li>
            <li>The right to restrict processing of your personal data.</li>
            <li>The right to data portability.</li>
            <li>The right to object to processing of your personal data.</li>
          </ul>

          <h2>9. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <ul>
            <li>By email: privacy@pdf-tools.com</li>
            <li>By visiting our contact page: <a href="/contact" className="text-primary">Contact Us</a></li>
          </ul>
        </div>
      </Card>
    </div>
  )
}