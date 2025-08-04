'use client'

import { Progress } from '@/components/ui/progress'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Calendar, Download, MapPin } from 'lucide-react'
import Link from 'next/link'

const skills = [
  { name: 'React', level: 95 },
  { name: 'TypeScript', level: 90 },
  { name: 'Next.js', level: 85 },
  { name: 'Node.js', level: 80 },
  { name: 'UI/UX Design', level: 75 },
  { name: 'Tailwind CSS', level: 90 },
]

const experiences = [
  {
    title: 'Senior Frontend Developer',
    company: 'Tech Innovations Inc.',
    period: '2022 - Present',
    description: 'Leading frontend development for enterprise SaaS products.'
  },
  {
    title: 'Frontend Developer',
    company: 'Digital Solutions Ltd.',
    period: '2020 - 2022',
    description: 'Developed responsive web applications for various clients.'
  },
  {
    title: 'Web Developer',
    company: 'Creative Agency',
    period: '2018 - 2020',
    description: 'Created interactive websites and digital experiences.'
  }
]

const education = [
  {
    degree: 'MSc in Computer Science',
    school: 'Tech University',
    period: '2016 - 2018',
    description: 'Specialized in Human-Computer Interaction'
  },
  {
    degree: 'BSc in Software Engineering',
    school: 'State College',
    period: '2012 - 2016',
    description: 'Focus on Web Technologies and Design'
  }
]

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know me better - my background, skills, and journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold mb-6">My Story</h3>
            <p className="text-muted-foreground mb-4">
              I'm a passionate frontend developer with over 6 years of experience creating 
              beautiful and functional web applications. My journey began during my computer 
              science studies where I discovered my love for turning ideas into interactive 
              digital experiences.
            </p>
            <p className="text-muted-foreground mb-4">
              I specialize in React and modern JavaScript frameworks, with a strong focus on 
              user experience and performance. I believe in writing clean, maintainable code 
              and staying up-to-date with the latest industry trends.
            </p>
            <p className="text-muted-foreground mb-6">
              When I'm not coding, you can find me contributing to open-source projects, 
              writing technical articles, or exploring new hiking trails.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center text-muted-foreground">
                <MapPin className="mr-2 h-4 w-4" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center text-muted-foreground">
                <Calendar className="mr-2 h-4 w-4" />
                <span>Available for freelance</span>
              </div>
            </div>

            <Button asChild>
              <Link href="/resume.pdf" download>
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Link>
            </Button>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Experience & Education</h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={`exp-${index}`} className="border-l-2 border-primary pl-4 py-1">
                    <h4 className="font-bold">{exp.title}</h4>
                    <p className="text-sm text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mb-2">{exp.period}</p>
                    <p className="text-sm">{exp.description}</p>
                  </div>
                ))}
                {education.map((edu, index) => (
                  <div key={`edu-${index}`} className="border-l-2 border-primary pl-4 py-1">
                    <h4 className="font-bold">{edu.degree}</h4>
                    <p className="text-sm text-muted-foreground">{edu.school}</p>
                    <p className="text-sm text-muted-foreground mb-2">{edu.period}</p>
                    <p className="text-sm">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

