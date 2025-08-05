'use client'

import { Navigation } from '@/components/navigation'
import { HeroSection } from '@/components/hero-section'
import { ProjectsSection } from '@/components/projects-section'
import { AboutSection } from '@/components/about-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'
import { VideoGallery } from '@/components/video-gallery'

export default function Home() {
  return (
    <div className="min-h-full">
      <Navigation />
      <HeroSection />
      <ProjectsSection />
      <VideoGallery />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  )
}


