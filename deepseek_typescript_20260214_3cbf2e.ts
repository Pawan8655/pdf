'use client'

import AdSlot from '../ui/AdSlot'
import { Card } from '../ui/Card'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Sidebar() {
  const pathname = usePathname()

  // Don't show sidebar on mobile
  return (
    <aside className="hidden lg:block w-64 fixed right-0 top-16 bottom-0 overflow-y-auto p-4 border-l bg-background">
      <div className="space-y-6">
        {/* Sidebar Ad Slot */}
        <AdSlot slot="sidebar-ad" className="min-h-[600px]" />
        
        {/* Popular Tools */}
        <Card className="p-4">
          <h3 className="font-bold text-lg mb-3">Popular Tools</h3>
          <ul className="space-y-2">
            <li>
              <Link 
                href="/merge-pdf"
                className={`text-sm hover:text-primary ${
                  pathname === '/merge-pdf' ? 'text-primary font-medium' : 'text-muted-foreground'
                }`}
              >
                Merge PDF
              </Link>
            </li>
            <li>
              <Link 
                href="/split-pdf"
                className={`text-sm hover:text-primary ${
                  pathname === '/split-pdf' ? 'text-primary font-medium' : 'text-muted-foreground'
                }`}
              >
                Split PDF
              </Link>
            </li>
            <li>
              <Link 
                href="/compress-pdf"
                className={`text-sm hover:text-primary ${
                  pathname === '/compress-pdf' ? 'text-primary font-medium' : 'text-muted-foreground'
                }`}
              >
                Compress PDF
              </Link>
            </li>
            <li>
              <Link 
                href="/pdf-to-word"
                className={`text-sm hover:text-primary ${
                  pathname === '/pdf-to-word' ? 'text-primary font-medium' : 'text-muted-foreground'
                }`}
              >
                PDF to Word
              </Link>
            </li>
            <li>
              <Link 
                href="/jpg-to-pdf"
                className={`text-sm hover:text-primary ${
                  pathname === '/jpg-to-pdf' ? 'text-primary font-medium' : 'text-muted-foreground'
                }`}
              >
                JPG to PDF
              </Link>
            </li>
          </ul>
        </Card>

        {/* Recent Tools */}
        <Card className="p-4">
          <h3 className="font-bold text-lg mb-3">Recently Used</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/rotate-pdf" className="text-sm text-muted-foreground hover:text-primary">
                Rotate PDF
              </Link>
            </li>
            <li>
              <Link href="/protect-pdf" className="text-sm text-muted-foreground hover:text-primary">
                Protect PDF
              </Link>
            </li>
            <li>
              <Link href="/unlock-pdf" className="text-sm text-muted-foreground hover:text-primary">
                Unlock PDF
              </Link>
            </li>
          </ul>
        </Card>
      </div>
    </aside>
  )
}