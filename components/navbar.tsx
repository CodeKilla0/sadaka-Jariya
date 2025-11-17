'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { name: 'Accueil', href: '#accueil' },
    { name: 'Le Projet', href: '#projet' },
    { name: 'Galerie', href: '#galerie' },
    { name: 'Contribuer', href: '#contribuer' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-gray-200/50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <a href="#accueil" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 group-hover:scale-110 transition-transform duration-300">
              <Image
                src="/logo-ong-qardane-hassana.png"
                alt="ONG Qardane Hassana"
                fill
                className="object-contain"
              />
            </div>
            <div className="hidden lg:block">
              <h1 className="text-lg font-bold text-primary">ONG QARDANE HASSANA</h1>
              <p className="text-xs text-accent font-semibold">Construction de Mosquée</p>
            </div>
          </a>

          {/* Navigation Desktop */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-900 hover:text-primary transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center gap-3">
            <Button className="bg-primary hover:bg-primary-dark text-white font-semibold">
              Faire un don
            </Button>
            
            {/* Menu Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Navigation Mobile */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200/50">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-gray-900 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
