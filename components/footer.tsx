'use client'

import { Button } from '@/components/ui/button'
import { Heart } from 'lucide-react'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="py-12 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} My Portfolio. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center">
            <p className="text-muted-foreground mr-2">Made with</p>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <p className="text-muted-foreground ml-2">
              using Next.js, Tailwind CSS, and Shadcn/UI
            </p>
          </div>
          
          <div className="mt-4 md:mt-0">
            <Button variant="outline" size="sm" asChild>
              <Link href="#home">Back to Top</Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
