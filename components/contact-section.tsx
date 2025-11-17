'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Adresse du Chantier',
    content: 'Secteur 15, Ouagadougou, Burkina Faso',
    link: '#',
  },
  {
    icon: Phone,
    title: 'Téléphone',
    content: '+226 XX XX XX XX',
    link: 'tel:+226XXXXXXXX',
  },
  {
    icon: Mail,
    title: 'Email',
    content: 'contact@mosquee-projet.bf',
    link: 'mailto:contact@mosquee-projet.bf',
  },
  {
    icon: MessageSquare,
    title: 'WhatsApp',
    content: 'Contactez-nous',
    link: 'https://wa.me/226XXXXXXXX',
  },
]

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simuler un appel API
    await new Promise((resolve) => setTimeout(resolve, 1500))

    toast({
      title: 'Message envoyé !',
      description: 'Nous vous répondrons dans les plus brefs délais. Barak Allahu fik.',
    })

    setFormData({ name: '', email: '', subject: '', message: '' })
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* En-tête de section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary font-serif mb-4 text-balance">
              Contactez-Nous
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-balance">
              Des questions sur le projet ? N'hésitez pas à nous contacter
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Informations de contact */}
            <div>
              <h3 className="text-2xl font-bold text-primary font-serif mb-6">
                Informations de Contact
              </h3>
              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon
                  return (
                    <a
                      key={index}
                      href={info.link}
                      className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:border-primary transition-colors group"
                    >
                      <div className="bg-primary/10 rounded-full p-3 group-hover:bg-primary transition-colors">
                        <Icon className="w-5 h-5 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                        <p className="text-gray-600">{info.content}</p>
                      </div>
                    </a>
                  )
                })}
              </div>

              {/* Carte */}
              <Card className="overflow-hidden">
                <div className="relative aspect-video bg-gray-100">
                  <img
                    src="/mosque-construction-site-map.jpg"
                    alt="Localisation du chantier"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
                    <Button className="bg-white text-primary hover:bg-white/90">
                      <MapPin className="mr-2 h-4 w-4" />
                      Voir sur Google Maps
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            {/* Formulaire de contact */}
            <div>
              <h3 className="text-2xl font-bold text-primary font-serif mb-6">Envoyez un Message</h3>
              <Card className="p-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="contact-name">Nom complet *</Label>
                    <Input
                      id="contact-name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Votre nom"
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-email">Email *</Label>
                    <Input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="votre@email.com"
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-subject">Sujet *</Label>
                    <Input
                      id="contact-subject"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Objet de votre message"
                    />
                  </div>
                  <div>
                    <Label htmlFor="contact-message">Message *</Label>
                    <Textarea
                      id="contact-message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Votre message..."
                      rows={6}
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary-dark text-white font-semibold"
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
