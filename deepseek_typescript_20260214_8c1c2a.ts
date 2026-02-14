import Link from 'next/link'
import { tools } from '@/lib/constants/tools'
import { Card } from '@/components/ui/Card'
import { JsonLd } from '@/components/seo/JsonLd'
import AdSlot from '@/components/ui/AdSlot'

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'PDF Tools Online',
          url: 'https://pdf-tools.vercel.app',
          potentialAction: {
            '@type': 'SearchAction',
            target: 'https://pdf-tools.vercel.app/search?q={search_term_string}',
            'query-input': 'required name=search_term_string',
          },
        }}
      />

      <div className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Free Online PDF Tools
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Merge, split, compress, convert and edit your PDF files online for free. 
            No registration required. Secure, fast, and easy to use.
          </p>
        </section>

        {/* Tools Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {tools.map((tool) => (
            <Link key={tool.slug} href={`/${tool.slug}`}>
              <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                <h2 className="text-xl font-semibold mb-3">{tool.name}</h2>
                <p className="text-muted-foreground">{tool.description}</p>
              </Card>
            </Link>
          ))}
        </section>

        {/* In-content Ad Slot */}
        <div className="my-12">
          <AdSlot slot="homepage-in-content" className="min-h-[250px]" />
        </div>

        {/* Features Section */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">Why Choose Our PDF Tools?</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span><strong>100% Free</strong> - No hidden costs or premium tiers</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span><strong>Secure & Private</strong> - Files auto-delete after processing</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span><strong>No Registration</strong> - Use instantly, no account needed</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span><strong>Fast Processing</strong> - Get results in seconds</span>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">✓</span>
                <span><strong>High Quality</strong> - Maintain original quality</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-4">Popular Tools</h2>
            <ul className="space-y-4">
              <li>
                <Link href="/merge-pdf" className="text-primary hover:underline">
                  Merge PDF - Combine multiple PDFs
                </Link>
              </li>
              <li>
                <Link href="/compress-pdf" className="text-primary hover:underline">
                  Compress PDF - Reduce file size
                </Link>
              </li>
              <li>
                <Link href="/pdf-to-word" className="text-primary hover:underline">
                  PDF to Word - Convert to editable format
                </Link>
              </li>
              <li>
                <Link href="/jpg-to-pdf" className="text-primary hover:underline">
                  JPG to PDF - Create PDF from images
                </Link>
              </li>
              <li>
                <Link href="/split-pdf" className="text-primary hover:underline">
                  Split PDF - Extract pages
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  )
}