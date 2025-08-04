'use client'

import { ContactForm } from '@/components/contact-form'

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to discuss potential opportunities? 
            I'd love to hear from you!
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}
