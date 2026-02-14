import Link from 'next/link'
import AdSlot from '../ui/AdSlot'

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      {/* Footer Ad Slot */}
      <div className="container mx-auto px-4 py-4">
        <AdSlot slot="footer-ad" className="min-h-[90px]" />
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">PDF Tools</h3>
            <p className="text-sm text-muted-foreground">
              Free online PDF tools to merge, split, compress, convert and edit PDF files. 
              Secure, fast, and easy to use.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Tools</h4>
            <ul className="space-y-2">
              <li><Link href="/merge-pdf" className="text-sm text-muted-foreground hover:text-primary">Merge PDF</Link></li>
              <li><Link href="/split-pdf" className="text-sm text-muted-foreground hover:text-primary">Split PDF</Link></li>
              <li><Link href="/compress-pdf" className="text-sm text-muted-foreground hover:text-primary">Compress PDF</Link></li>
              <li><Link href="/pdf-to-word" className="text-sm text-muted-foreground hover:text-primary">PDF to Word</Link></li>
              <li><Link href="/jpg-to-pdf" className="text-sm text-muted-foreground hover:text-primary">JPG to PDF</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
              <li><Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">Terms & Conditions</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary">Privacy</Link></li>
              <li><Link href="/terms" className="text-sm text-muted-foreground hover:text-primary">Terms</Link></li>
              <li><Link href="/cookie-policy" className="text-sm text-muted-foreground hover:text-primary">Cookies</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} PDF Tools Online. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}