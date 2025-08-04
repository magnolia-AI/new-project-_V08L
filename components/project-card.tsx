'use client'

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github, Eye } from 'lucide-react'
import Link from 'next/link'

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  imageUrl: string
  demoUrl?: string
  githubUrl?: string
  featured?: boolean
}

export function ProjectCard({ 
  title, 
  description, 
  technologies, 
  imageUrl,
  demoUrl,
  githubUrl,
  featured = false
}: ProjectCardProps) {
  return (
    <Card className={`flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${featured ? 'border-primary' : ''}`}>
      <div className="relative">
        <div className="aspect-video bg-muted overflow-hidden">
          <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
            <div className="text-center p-4">
              <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mx-auto" />
              <p className="mt-2 text-sm text-muted-foreground">Project Image</p>
            </div>
          </div>
        </div>
        {featured && (
          <Badge className="absolute top-3 right-3">Featured</Badge>
        )}
      </div>
      
      <CardHeader className="flex-1">
        <CardTitle>{title}</CardTitle>
        <p className="text-muted-foreground mt-2">{description}</p>
      </CardHeader>
      
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="secondary">{tech}</Badge>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="flex gap-2">
        {demoUrl && (
          <Button asChild variant="outline" size="sm">
            <Link href={demoUrl}>
              <Eye className="mr-2 h-4 w-4" />
              Demo
            </Link>
          </Button>
        )}
        {githubUrl && (
          <Button asChild variant="outline" size="sm">
            <Link href={githubUrl}>
              <Github className="mr-2 h-4 w-4" />
              Code
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
