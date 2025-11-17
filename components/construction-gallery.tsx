'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const galleryImages = [
  {
    id: 1,
    src: '/islamic-mosque-construction-foundations.jpg',
    alt: 'Fondations de la mosquée',
    category: 'Fondations',
  },
  {
    id: 2,
    src: '/mosque-construction-walls-structure.jpg',
    alt: 'Construction des murs',
    category: 'Structure',
  },
  {
    id: 3,
    src: '/mosque-construction-site-aerial-view.jpg',
    alt: 'Vue aérienne du chantier',
    category: 'Vue d\'ensemble',
  },
  {
    id: 4,
    src: '/islamic-mosque-construction-workers.jpg',
    alt: 'Équipe de construction',
    category: 'Travaux',
  },
  {
    id: 5,
    src: '/mosque-dome-construction-progress.jpg',
    alt: 'Préparation du dôme',
    category: 'Dôme',
  },
  {
    id: 6,
    src: '/mosque-interior-construction.jpg',
    alt: 'Aménagement intérieur',
    category: 'Intérieur',
  },
]

export function ConstructionGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  return (
    <section id="galerie" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* En-tête de section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary font-serif mb-4 text-balance">
              Galerie du Chantier
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-balance">
              Découvrez l'évolution de la construction à travers nos photos et vidéos
            </p>
          </div>

          {/* Carrousel principal */}
          <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl mb-8">
            {/* Image principale */}
            <div className="relative aspect-video">
              <img
                src={galleryImages[currentIndex].src || "/placeholder.svg"}
                alt={galleryImages[currentIndex].alt}
                className="w-full h-full object-cover"
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 to-transparent" />
              
              {/* Catégorie badge */}
              <div className="absolute top-4 left-4 bg-accent text-primary-dark font-semibold px-4 py-2 rounded-lg">
                {galleryImages[currentIndex].category}
              </div>

              {/* Description */}
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-lg md:text-xl font-semibold">
                  {galleryImages[currentIndex].alt}
                </p>
              </div>
            </div>

            {/* Boutons de navigation */}
            <Button
              variant="outline"
              size="icon"
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-0 shadow-lg"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white border-0 shadow-lg"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Indicateurs */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === currentIndex ? 'w-8 bg-accent' : 'w-2 bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Miniatures */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
            {galleryImages.map((image, index) => (
              <button
                key={image.id}
                onClick={() => setCurrentIndex(index)}
                className={`relative aspect-square rounded-lg overflow-hidden transition-all hover:scale-105 ${
                  index === currentIndex ? 'ring-4 ring-primary' : 'opacity-60 hover:opacity-100'
                }`}
              >
                <img src={image.src || "/placeholder.svg"} alt={image.alt} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          {/* Section vidéo */}
          <div className="mt-16">
            <h3 className="text-2xl font-bold text-primary font-serif mb-6 text-center">
              Vidéos du Chantier
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative aspect-video bg-gray-100 rounded-xl overflow-hidden">
                <img
                  src="/construction-site-drone-video-thumbnail.jpg"
                  alt="Vidéo drone du chantier"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary-dark/40 flex items-center justify-center">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-primary-dark border-b-8 border-b-transparent ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Vue Aérienne du Chantier</p>
                  <p className="text-sm opacity-90">Drone - Septembre 2024</p>
                </div>
              </div>
              <div className="relative aspect-video bg-gray-100 rounded-xl overflow-hidden">
                <img
                  src="/mosque-construction-progress-timelapse.jpg"
                  alt="Timelapse de la construction"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary-dark/40 flex items-center justify-center">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-primary-dark border-b-8 border-b-transparent ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold">Timelapse de la Construction</p>
                  <p className="text-sm opacity-90">3 mois en 2 minutes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
