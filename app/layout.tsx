import type { Metadata } from 'next'
import { Jost, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Jost({ subsets: ['latin'] })
const playfair = Playfair_Display({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Mosquée & Centre Islamique - Projet de Construction',
  description: 'Contribuez à la construction d\'une mosquée et d\'un centre de formation islamique. Prenez part à une Sadaqa Jariya qui vous profitera même après votre mort.',
  keywords: ['mosquée', 'islam', 'sadaqa jariya', 'don', 'construction', 'centre islamique'],
  openGraph: {
    title: 'Mosquée & Centre Islamique - Projet de Construction',
    description: 'Contribuez à la construction d\'une mosquée et d\'un centre de formation islamique.',
    type: 'website',
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
