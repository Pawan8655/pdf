import { ILovePDFApi } from '@ilovepdf/ilovepdf-nodejs'

const publicKey = process.env.ILOVEPDF_PUBLIC_KEY!
const secretKey = process.env.ILOVEPDF_SECRET_KEY!

if (!publicKey || !secretKey) {
  throw new Error('Missing iLovePDF API keys')
}

export const ilovepdf = new ILovePDFApi(publicKey, secretKey)

// Rate limiting configuration
export const RATE_LIMIT = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
}