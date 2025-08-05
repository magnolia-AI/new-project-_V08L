'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ProjectCard } from '@/components/project-card'
import { Badge } from '@/components/ui/badge'

const projects = [
  {
    id: 1,
    title: 'E-commerce Dashboard',
    description: 'A comprehensive dashboard for managing online store operations with real-time analytics.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Redux'],
    imageUrl: '/images/images/react-logo-neon.png',
    demoUrl: '#',
    githubUrl: '#',
    category: 'frontend',
    featured: true
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A productivity application for teams to manage projects and tasks efficiently.',
    technologies: ['Next.js', 'Firebase', 'Material UI'],
    imageUrl: '',
    demoUrl: '#',
    githubUrl: '#',
    category: 'fullstack',
    featured: true
  },
  {
    id: 3,
    title: 'Weather Forecast App',
    description: 'A sleek weather application with location-based forecasts and detailed analytics.',
    technologies: ['React Native', 'Node.js', 'Express'],
    imageUrl: '',
    demoUrl: '#',
    githubUrl: '#',
    category: 'mobile',
    featured: false
  },
  {
    id: 4,
    title: 'Portfolio Website',
    description: 'A responsive portfolio website showcasing projects and skills with modern design.',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    imageUrl: '',
    demoUrl: '#',
    githubUrl: '#',
    category: 'frontend',
    featured: false
  },
  {
    id: 5,
    title: 'Fitness Tracker',
    description: 'An application for tracking workouts, nutrition, and health metrics with data visualization.',
    technologies: ['Vue.js', 'D3.js', 'MongoDB'],
    imageUrl: '',
    demoUrl: '#',
    githubUrl: '#',
    category: 'fullstack',
    featured: false
  },
  {
    id: 6,
    title: 'Chat Application',
    description: 'A real-time messaging application with group chats and file sharing capabilities.',
    technologies: ['React', 'Socket.io', 'Node.js'],
    imageUrl: '',
    demoUrl: '#',
    githubUrl: '#',
    category: 'backend',
    featured: false
  }
]

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'frontend', name: 'Frontend' },
  { id: 'backend', name: 'Backend' },
  { id: 'fullstack', name: 'Full Stack' },
  { id: 'mobile', name: 'Mobile' }
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are some of my recent projects. Each project reflects my passion for creating 
            meaningful digital experiences.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid w-full max-w-md grid-cols-5">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
          
          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects
                  .filter(project => category.id === 'all' || project.category === category.id)
                  .map((project) => (
                    <ProjectCard
                      key={project.id}
                      title={project.title}
                      description={project.description}
                      technologies={project.technologies}
                      imageUrl={project.imageUrl}
                      demoUrl={project.demoUrl}
                      githubUrl={project.githubUrl}
                      featured={project.featured}
                    />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

