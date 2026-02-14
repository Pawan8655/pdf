'use client'

import { useEffect, useRef } from 'react'

interface AdSlotProps {
  slot: string
  className?: string
  format?: 'auto' | 'rectangle' | 'horizontal' | 'vertical'
}

export default function AdSlot({ slot, className = '', format = 'auto' }: AdSlotProps) {
  const adRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    try {
      // Only run on client and if adsbygoogle is available
      if (typeof window !== 'undefined' && (window as any).adsbygoogle) {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({})
      }
    } catch (error) {
      console.error('AdSense error:', error)
    }
  }, [])

  return (
    <div className={`ad-container ${className}`} ref={adRef}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-xxxxxxxxxxxxx"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  )
}