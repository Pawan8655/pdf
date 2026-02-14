import { Metadata } from 'next'
import { Card } from '@/components/ui/Card'

export const metadata: Metadata = {
  title: 'Terms and Conditions - PDF Tools Online',
  description: 'Read our terms and conditions for using our free online PDF tools and services.',
}

export default function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <Card className="max-w-4xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>
        <p className="text-muted-foreground mb-8">Last updated: January 1, 2024</p>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <h2>1. Agreement to Terms</h2>
          <p>
            By accessing or using our PDF tools website, you agree to be bound by these Terms and Conditions. 
            If you disagree with any part of the terms, you may not access the service.
          </p>

          <h2>2. Description of Service</h2>
          <p>
            PDF Tools Online provides free online PDF processing tools including merge, split, compress, convert, 
            and edit functionality. All tools are provided "as is" and we make no warranties about the accuracy, 
            reliability, or availability of the service.
          </p>

          <h2>3. User Responsibilities</h2>
          <p>As a user of our service, you agree to:</p>
          <ul>
            <li>Use the service only for lawful purposes and in accordance with these Terms.</li>
            <li>Not use the service to process illegal or copyrighted content without permission.</li>
            <li>Not attempt to gain unauthorized access to our systems.</li>
            <li>Not use the service to distribute malware or harmful content.</li>
            <li>Not interfere with or disrupt the service or servers.</li>
          </ul>

          <h2>4. Intellectual Property Rights</h2>
          <p>
            The service and its original content, features, and functionality are owned by PDF Tools Online and 
            are protected by international copyright, trademark, patent, trade secret, and other intellectual 
            property laws.
          </p>

          <h2>5. User Content</h2>
          <p>
            You retain all rights to any content you submit, post, or display on or through the service. By 
            uploading files, you grant us a temporary license to process your files solely for the purpose of 
            providing the service. Files are automatically deleted after processing.
          </p>

          <h2>6. Disclaimer of Warranties</h2>
          <p>
            The service is provided on an "AS IS" and "AS AVAILABLE" basis. We make no representations or warranties 
            of any kind, express or implied, regarding the operation or availability of the service, or the 
            information, content, and materials included therein.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by applicable law, in no event shall PDF Tools Online be liable for any 
            indirect, punitive, incidental, special, consequential, or exemplary damages, including without 
            limitation damages for loss of profits, goodwill, use, data, or other intangible losses, arising out 
            of or relating to the use of, or inability to use, the service.
          </p>

          <h2>8. Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold harmless PDF Tools Online and its employees, contractors, and 
            agents from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, 
            or fees arising out of or relating to your violation of these Terms or your use of the Service.
          </p>

          <h2>9. Modifications to Service</h2>
          <p>
            We reserve the right to modify or discontinue, temporarily or permanently, the service with or without 
            notice. We shall not be liable to you or any third party for any modification, suspension, or 
            discontinuance of the service.
          </p>

          <h2>10. Governing Law</h2>
          <p>
            These Terms shall be governed and construed in accordance with the laws of [Your Country/State], 
            without regard to its conflict of law provisions.
          </p>

          <h2>11. Changes to Terms</h2>
          <p>
            We reserve the right to update or change our Terms and Conditions at any time. Your continued use of 
            the Service after we post any modifications to the Terms on this page will constitute your 
            acknowledgment of the modifications and your consent to abide and be bound by the modified Terms.
          </p>

          <h2>12. Contact Us</h2>
          <p>
            If you have any questions about these Terms, please contact us:
          </p>
          <ul>
            <li>By email: legal@pdf-tools.com</li>
            <li>By visiting our contact page: <a href="/contact" className="text-primary">Contact Us</a></li>
          </ul>
        </div>
      </Card>
    </div>
  )
}