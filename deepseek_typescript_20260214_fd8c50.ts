'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, FileText } from 'lucide-react'
import { useState } from 'react'
import ThemeToggle from './ThemeToggle'
import { tools } from '@/lib/constants/tools'
import AdSlot from '../ui/AdSlot'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        {/* Header Ad Slot */}
        <div className="py-2">
          <AdSlot slot="header-ad" className="min-h-[90px]" />
        </div>

        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <FileText className="h-6 w-6 text-primary" />
            <span className="font-bold text-xl">PDF Tools</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {tools.slice(0, 5).map((tool) => (
              <Link
                key={tool.slug}
                href={`/${tool.slug}`}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === `/${tool.slug}` ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {tool.name}
              </Link>
            ))}
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {tools.map((tool) => (
                <Link
                  key={tool.slug}
                  href={`/${tool.slug}`}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    pathname === `/${tool.slug}` ? 'text-primary' : 'text-muted-foreground'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {tool.name}
                </Link>
              ))}
              <div className="pt-2">
                <ThemeToggle />
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}