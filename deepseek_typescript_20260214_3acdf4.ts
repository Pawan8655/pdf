import { NextRequest } from 'next/server'

const rateLimit = new Map()

export function checkRateLimit(
  req: NextRequest,
  windowMs: number = 15 * 60 * 1000,
  max: number = 100
): { success: boolean; remaining?: number } {
  const ip = req.ip || req.headers.get('x-forwarded-for') || 'anonymous'
  const now = Date.now()
  const windowStart = now - windowMs

  // Clean up old entries
  for (const [key, timestamp] of rateLimit.entries()) {
    if (timestamp < windowStart) {
      rateLimit.delete(key)
    }
  }

  // Get current count for this IP
  const count = rateLimit.get(ip) || 0

  if (count >= max) {
    return { success: false }
  }

  rateLimit.set(ip, count + 1)
  return { success: true, remaining: max - count - 1 }
}