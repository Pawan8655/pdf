# PDF Tools Online

A production-ready PDF tools website built with Next.js, TypeScript, and the official iLovePDF API. Features 10+ PDF processing tools with a modern, responsive UI and SEO optimization.

## Features

- ✅ 10 PDF tools: Merge, Split, Compress, PDF to Word, Word to PDF, JPG to PDF, PDF to JPG, Rotate, Protect, Unlock
- ✅ Drag & drop file upload
- ✅ Dark/light mode toggle
- ✅ Progress indicators
- ✅ Responsive design (mobile first)
- ✅ SEO optimized with meta tags, sitemap, and schema markup
- ✅ AdSense-friendly layout
- ✅ Rate limiting and security headers
- ✅ Automatic file deletion after processing
- ✅ Privacy policy, terms, contact, and about pages

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **PDF Processing:** iLovePDF API
- **Deployment:** Vercel
- **Package Manager:** npm/yarn/pnpm

## Prerequisites

- Node.js 18+ 
- iLovePDF API keys ([Get them here](https://developer.ilovepdf.com/))
- Google AdSense account (optional)

## Environment Variables

Create a `.env.local` file in the root directory:

```env
ILOVEPDF_PUBLIC_KEY=your_public_key
ILOVEPDF_SECRET_KEY=your_secret_key
NEXT_PUBLIC_ADSENSE_CLIENT=ca-pub-xxxxxxxxxxxxx
NEXT_PUBLIC_SITE_URL=https://your-domain.com