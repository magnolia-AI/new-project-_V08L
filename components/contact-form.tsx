'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/hooks/use-toast'
import { Mail, Phone, MapPin } from 'lucide-react'

export function ContactForm() {
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false)
      toast({
        title: "Message Sent",
        description: "Thanks for reaching out! I'll get back to you soon.",
      })
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    }, 1500)
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div>
        <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
        <p className="text-muted-foreground mb-8">
          Have a project in mind or want to discuss potential opportunities? 
          Feel free to reach out using the form or through my social media profiles.
        </p>
        
        <div className="space-y-6">
          <div className="flex items-start">
            <Mail className="h-6 w-6 text-primary mt-1 mr-4" />
            <div>
              <h4 className="font-semibold">Email</h4>
              <p className="text-muted-foreground">hello@example.com</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <Phone className="h-6 w-6 text-primary mt-1 mr-4" />
            <div>
              <h4 className="font-semibold">Phone</h4>
              <p className="text-muted-foreground">+1 (555) 123-4567</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <MapPin className="h-6 w-6 text-primary mt-1 mr-4" />
            <div>
              <h4 className="font-semibold">Location</h4>
              <p className="text-muted-foreground">San Francisco, California</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <h4 className="font-semibold mb-4">Follow Me</h4>
          <div className="flex space-x-4">
            <Button variant="outline" size="icon">
              <span className="sr-only">GitHub</span>
              <span className="text-lg">GH</span>
            </Button>
            <Button variant="outline" size="icon">
              <span className="sr-only">LinkedIn</span>
              <span className="text-lg">LI</span>
            </Button>
            <Button variant="outline" size="icon">
              <span className="sr-only">Twitter</span>
              <span className="text-lg">T</span>
            </Button>
            <Button variant="outline" size="icon">
              <span className="sr-only">Dribbble</span>
              <span className="text-lg">D</span>
            </Button>
          </div>
        </div>
      </div>
      
      <div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <Input 
                id="name" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name" 
                required 
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <Input 
                id="email" 
                name="email"
                type="email" 
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com" 
                required 
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium">
              Subject
            </label>
            <Input 
              id="subject" 
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="How can I help you?" 
              required 
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message
            </label>
            <Textarea 
              id="message" 
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message..." 
              rows={5} 
              required 
            />
          </div>

          <Button type="submit" className="w-full" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </div>
  )
} 
