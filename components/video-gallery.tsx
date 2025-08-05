'use client'

import { useState } from 'react'
import Video from '@/components/video'

interface GalleryItem {
  id: number
  title: string
  description: string
  videoUrl: string
  thumbnailUrl?: string
}

const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'Abstract Motion',
    description: 'Dynamic geometric patterns with flowing movements',
    videoUrl: '/videos/gallery-video.mp4',
    thumbnailUrl: '/images/gallery-image.jpg'
  },
  {
    id: 2,
    title: 'Cyberpunk Glow',
    description: 'Futuristic neon elements with cybernetic movements',
    videoUrl: '/videos/cyberpunk-video.mp4',
    thumbnailUrl: '/images/cyberpunk-image.jpg'
  },
  {
    id: 3,
    title: 'Nature Serenity',
    description: 'Peaceful landscape with gentle water ripples',
    videoUrl: '/videos/nature-video.mp4',
    thumbnailUrl: '/images/nature-image.jpg'
  }
]

export function VideoGallery() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)

  const openModal = (item: GalleryItem) => {
    setSelectedItem(item)
  }

  const closeModal = () => {
    setSelectedItem(null)
  }

  return (
    <section id="video-gallery" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Video Gallery</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my collection of animated videos and motion designs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item) => (
            <div 
              key={item.id}
              className="group cursor-pointer"
              onClick={() => openModal(item)}
            >
              <div className="aspect-video bg-muted overflow-hidden rounded-lg">
                <Video
                  src={item.videoUrl}
                  thumbnail={item.thumbnailUrl}
                  playOnHover={true}
                  className="w-full h-full"
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-muted-foreground mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for enlarged video */}
        {selectedItem && (
          <div 
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <div 
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute -top-12 right-0 text-white text-2xl z-10"
                onClick={closeModal}
              >
                ✕
              </button>
              <div className="aspect-video bg-black rounded-lg overflow-hidden">
                <Video
                  src={selectedItem.videoUrl}
                  autoplay={true}
                  loop={true}
                  controls={true}
                  className="w-full h-full"
                />
              </div>
              <div className="mt-4 text-white">
                <h3 className="text-2xl font-bold">{selectedItem.title}</h3>
                <p className="mt-2">{selectedItem.description}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

