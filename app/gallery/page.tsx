'use client'

import { Navigation } from '@/components/navigation'
import { GallerySection } from '@/components/gallery-section'
import { Footer } from '@/components/footer'

export default function GalleryPage() {
  return (
    <div className="min-h-full">
      <Navigation />
      <GallerySection />
      <Footer />
    </div>
  )
}
