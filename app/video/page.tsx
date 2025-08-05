'use client'

import React, { useState } from 'react'
import Video from '@/components/video'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function VideoPage() {
  const [isPlaying, setIsPlaying] = useState(false)
  
  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2">Video Component Showcase</h1>
        <p className="text-center text-muted-foreground mb-12">
          Explore the features and capabilities of our custom Video component
        </p>

        {/* Basic Video Example */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle>Basic Video</CardTitle>
              <CardDescription>
                A standard video player with controls
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video w-full">
                <Video 
                  src="/videos/gallery-video.mp4"
                  controls={true}
                  autoplay={false}
                  loop={true}
                  muted={false}
                  className="rounded-lg overflow-hidden"
                />
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Background Video Example */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle>Background Video</CardTitle>
              <CardDescription>
                Autoplaying muted looping background video
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video w-full relative rounded-lg overflow-hidden">
                <Video 
                  src="/videos/nature-video.mp4"
                  autoplay={true}
                  loop={true}
                  muted={true}
                  className="absolute inset-0 w-full h-full"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h3 className="text-2xl font-bold mb-2">Background Video</h3>
                    <p className="mb-4">This video plays automatically in the background</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Hover-to-Play Example */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle>Hover-to-Play</CardTitle>
              <CardDescription>
                Video plays only when hovered over the thumbnail
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video w-full">
                <Video 
                  src="/videos/cyberpunk-video.mp4"
                  thumbnail="/images/cyberpunk-image.jpg"
                  playOnHover={true}
                  className="rounded-lg overflow-hidden"
                />
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Interactive Video Example */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle>Interactive Video</CardTitle>
              <CardDescription>
                Control video playback with external buttons
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video w-full mb-4">
                <Video 
                  src="/videos/nature-video.mp4"
                  autoplay={isPlaying}
                  controls={true}
                  loop={true}
                  className="rounded-lg overflow-hidden"
                />
              </div>
              <div className="flex justify-center gap-4">
                <Button onClick={togglePlay}>
                  {isPlaying ? 'Pause' : 'Play'} Video
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Multiple Formats Example */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle>Multiple Formats</CardTitle>
              <CardDescription>
                Supporting different video formats for better compatibility
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="aspect-video w-full">
                <Video 
                  src="/videos/cyberpunk-video.mp4"
                  sources={[
                    { src: "/videos/cyberpunk-video.mp4", type: "video/mp4" },
                    // Add WebM or other formats if available
                  ]}
                  controls={true}
                  className="rounded-lg overflow-hidden"
                />
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Documentation */}
        <section className="mb-16">
          <Card>
            <CardHeader>
              <CardTitle>Component Documentation</CardTitle>
              <CardDescription>
                Key features and props of the Video component
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Core Features</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Background video mode with autoplay</li>
                    <li>Hover-to-play with thumbnail preview</li>
                    <li>Multiple video format support</li>
                    <li>Responsive and accessible design</li>
                    <li>Customizable controls and styling</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Key Props</h3>
                  <ul className="list-disc pl-5 space-y-1">
                    <li><code>src</code> - Video source URL</li>
                    <li><code>thumbnail</code> - Preview image for hover mode</li>
                    <li><code>autoplay</code> - Enable/disable autoplay</li>
                    <li><code>loop</code> - Enable/disable looping</li>
                    <li><code>controls</code> - Show/hide native controls</li>
                    <li><code>playOnHover</code> - Enable hover-to-play mode</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}





