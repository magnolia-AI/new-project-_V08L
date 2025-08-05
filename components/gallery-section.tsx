'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import Image from 'next/image'
import Video from '@/components/video'

interface GalleryItem {
  id: number
  title: string
  description: string
  imageUrl: string
  videoUrl?: string
  category: string
  technologies: string[]
}

export function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: 'React.js Neon Logo',
      description: 'A stylish, neon-blue rendering of the React.js logo on a black background.',
      imageUrl: '/images/images/react-logo-neon.png',
      category: 'logo',
      technologies: ['React', 'Design']
    },
    {
      id: 2,
      title: 'Profile Animation',
      description: 'Animated profile video with subtle movements and lighting effects.',
      imageUrl: '/images/profile-no-hat.jpg',
      videoUrl: '/videos/leonardo_ddpDKuz0y1.mp4',
      category: 'project',
      technologies: ['Animation', 'Video']
    },
    {
      id: 3,
      title: 'Portfolio Background Animation',
      description: 'Animated background with gentle movements and lighting effects.',
      imageUrl: '/images/portfolio-background.jpg',
      videoUrl: '/videos/portfolio-background-animated.mp4',
      category: 'design',
      technologies: ['Animation', 'Background']
    }
    // Additional gallery items can be added here
  ]

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'logo', name: 'Logos' },
    { id: 'design', name: 'Designs' },
    { id: 'project', name: 'Projects' }
  ]

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory)

  return (
    <section id="gallery" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Gallery</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of designs, logos, and visual elements I've created.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex flex-wrap gap-2 p-1 bg-muted rounded-lg">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? 'default' : 'ghost'}
                className="rounded-md"
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <Card className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
                  <div className="aspect-video bg-muted overflow-hidden relative">
                    <div className="w-full h-full flex items-center justify-center bg-black">
                      <Image 
                        src={item.imageUrl} 
                        alt={item.title} 
                        width={300} 
                        height={300} 
                        className="object-contain"
                      />
                      {item.videoUrl && (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="bg-black bg-opacity-50 rounded-full p-2">
                            <svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              className="h-8 w-8 text-white" 
                              viewBox="0 0 24 24" 
                              fill="currentColor"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-3xl">
                <DialogHeader>
                  <DialogTitle>{item.title}</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="aspect-square bg-black rounded-lg flex items-center justify-center">
                    {item.videoUrl ? (
                      <Video 
                        src={item.videoUrl}
                        width="100%"
                        height="100%"
                        controls={true}
                        autoplay={false}
                        loop={true}
                        muted={false}
                        className="rounded-lg"
                      />
                    ) : (
                      <Image 
                        src={item.imageUrl} 
                        alt={item.title} 
                        width={400} 
                        height={400} 
                        className="object-contain"
                      />
                    )}
                  </div>
                  <div className="flex flex-col justify-between">
                    <div>
                      <p className="text-muted-foreground mb-4">{item.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.technologies.map((tech, index) => (
                          <Badge key={index} variant="secondary">{tech}</Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  )
}








