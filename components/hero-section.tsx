'use client'

import { Button } from '@/components/ui/button'
import { TypingEffect } from '@/components/typing-effect'
import { ArrowDown } from 'lucide-react'
import Link from 'next/link'
import Video from '@/components/video'

export function HeroSection() {
  const roles = ['Software Engineer', 'Frontend Developer', 'UI/UX Designer', 'Problem Solver']

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden"> 
      {/* Background video */}
      <div className="absolute inset-0 -z-20">
        <Video 
          src="/videos/leonardo_e3ETwAYxyu.mp4"
          loop={true}
          muted={true}
          autoplay={true}
          className="w-full h-full"
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-white">
            Hi, I'm <span className="text-primary">Alex</span>
          </h1>
          
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8 h-16 text-white">
            <span className="inline-block">
              I'm a <TypingEffect texts={roles} />
            </span>
          </div>
          
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-10">
            I create beautiful, functional, and user-centered digital experiences that solve real-world problems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="#contact">Get In Touch</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <Link href="#projects">View My Work</Link>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link href="#projects" className="flex flex-col items-center text-white">
          <span className="text-sm mb-2">Scroll to explore</span>
          <ArrowDown className="h-6 w-6" />
        </Link>
      </div>
    </section>
  )
}
