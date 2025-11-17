import { MSquare as Mosque, Facebook, Instagram, Youtube, Mail, Phone } from 'lucide-react'

const quickLinks = [
  { name: 'Accueil', href: '#accueil' },
  { name: 'Le Projet', href: '#projet' },
  { name: 'Galerie', href: '#galerie' },
  { name: 'Contribuer', href: '#contribuer' },
  { name: 'Contact', href: '#contact' },
]

const socialLinks = [
  { name: 'Facebook', icon: Facebook, href: '#' },
  { name: 'Instagram', icon: Instagram, href: '#' },
  { name: 'Youtube', icon: Youtube, href: '#' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-dark text-white">
      {/* Section principale */}
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Logo et description */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-accent rounded-full p-3">
                <Mosque className="w-8 h-8 text-primary-dark" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-serif">Mosquée & Centre Islamique</h3>
                <p className="text-sm text-white/70">Projet de construction</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed mb-4 max-w-md">
              Un projet ambitieux pour créer un lieu de culte, d'apprentissage et de rassemblement pour la
              communauté musulmane. Chaque contribution est une Sadaqa Jariya.
            </p>
            {/* Hadith inspirant */}
            <div className="bg-white/10 border-l-4 border-accent rounded p-4 mt-6">
              <p className="text-sm italic text-white/90 leading-relaxed">
                "Les meilleures actions sont celles qui sont durables, même si elles sont peu nombreuses."
              </p>
              <p className="text-accent text-xs mt-2 font-semibold">— Prophète Muhammad (ﷺ)</p>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-accent">Liens Rapides</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-white/80 hover:text-accent transition-colors inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-accent">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white/80">+226 XX XX XX XX</p>
                  <p className="text-white/60 text-sm">Lun - Sam: 8h - 18h</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-white/80">contact@mosquee-projet.bf</p>
              </div>
            </div>
          </div>
        </div>

        {/* Réseaux sociaux */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <p className="text-white/70 text-sm">Suivez-nous:</p>
              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="bg-white/10 hover:bg-accent w-10 h-10 rounded-full flex items-center justify-center transition-colors group"
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5 text-white/80 group-hover:text-primary-dark transition-colors" />
                    </a>
                  )
                })}
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-white/70 text-sm">
                &copy; {currentYear} Mosquée & Centre Islamique. Tous droits réservés.
              </p>
              <div className="flex gap-4 justify-center md:justify-end mt-2">
                <a href="#" className="text-white/60 hover:text-accent text-xs transition-colors">
                  Mentions légales
                </a>
                <span className="text-white/40">•</span>
                <a href="#" className="text-white/60 hover:text-accent text-xs transition-colors">
                  Politique de confidentialité
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Barre finale */}
      <div className="bg-primary-dark/50 border-t border-white/10">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-white/60 text-sm">
            Qu'Allah accepte vos contributions et vous accorde Sa récompense • بارك الله فيكم
          </p>
        </div>
      </div>
    </footer>
  )
}
