'use client'

import { ReactNode } from 'react'
import { Tool } from '@/lib/constants/tools'
import FileUploader from './FileUploader'
import AdSlot from '../ui/AdSlot'
import { Card } from '../ui/Card'

interface ToolLayoutProps {
  tool: Tool
  children: ReactNode
}

export default function ToolLayout({ tool, children }: ToolLayoutProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          {/* Tool Card */}
          <Card className="mb-8">
            <div className="p-6">
              <h1 className="text-3xl font-bold mb-4">{tool.name}</h1>
              <p className="text-muted-foreground mb-6">{tool.longDescription}</p>
              
              <FileUploader tool={tool} />
            </div>
          </Card>

          {/* In-content Ad Slot */}
          <div className="my-8">
            <AdSlot slot="in-content-ad" className="min-h-[250px]" />
          </div>

          {/* Tool Content */}
          <article className="prose prose-lg dark:prose-invert max-w-none">
            {children}
          </article>
        </div>

        {/* Sidebar (already has ads from layout) */}
        <div className="hidden lg:block">
          {/* Additional content sidebar */}
          <Card className="p-6">
            <h3 className="font-bold text-lg mb-4">Popular Tools</h3>
            <ul className="space-y-2">
              <li><a href="/merge-pdf" className="text-primary hover:underline">Merge PDF</a></li>
              <li><a href="/split-pdf" className="text-primary hover:underline">Split PDF</a></li>
              <li><a href="/compress-pdf" className="text-primary hover:underline">Compress PDF</a></li>
              <li><a href="/pdf-to-word" className="text-primary hover:underline">PDF to Word</a></li>
              <li><a href="/jpg-to-pdf" className="text-primary hover:underline">JPG to PDF</a></li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  )
}