import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Rate limiting configuration
const RATE_LIMIT = 100 // requests per window
const WINDOW_MS = 60 * 1000 // 1 minute

const rateLimit = new Map()

export function middleware(request: NextRequest) {
  // Only apply to API routes
  if (!request.nextUrl.pathname.startsWith('/api')) {
    return NextResponse.next()
  }

  const ip = request.ip || request.headers.get('x-forwarded-for') || 'anonymous'
  const now = Date.now()
  const windowStart = now - WINDOW_MS

  // Clean up old entries
  for (const [key, timestamp] of rateLimit.entries()) {
    if (timestamp < windowStart) {
      rateLimit.delete(key)
    }
  }

  // Check rate limit
  const requestCount = rateLimit.get(ip) || 0
  if (requestCount >= RATE_LIMIT) {
    return new NextResponse('Too Many Requests', {
      status: 429,
      headers: {
        'Retry-After': String(Math.ceil(WINDOW_MS / 1000)),
      },
    })
  }

  // Update rate limit
  rateLimit.set(ip, requestCount + 1)

  // Security headers
  const response = NextResponse.next()
  
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://pagead2.googlesyndication.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self'; connect-src 'self' https://pagead2.googlesyndication.com;"
  )

  return response
}

export const config = {
  matcher: '/api/:path*',
}