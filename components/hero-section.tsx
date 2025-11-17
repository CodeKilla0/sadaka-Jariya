import { getFundraisingStats } from '@/lib/data'
import { FundraisingCounter } from './fundraising-counter'
import { Button } from '@/components/ui/button'
import { Heart, ArrowRight, Play } from 'lucide-react'
import Image from 'next/image'

export async function HeroSection() {
  const stats = await getFundraisingStats()

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">
      <div className="absolute inset-0 bg-linear-to-br from-emerald-50/40 via-white to-amber-50/30" />
      
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23059669' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }} />

      
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: `url(/background.jpeg)`,
      }} />

      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-emerald-100 rounded-full px-5 py-2">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full animate-pulse" />
                  <span className="text-sm font-bold text-emerald-900 uppercase tracking-wide">Projet en cours</span>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900">
                  Ensemble Construisons un{' '}
                  <span className="relative inline-block">
                    <span className="relative z-10 bg-linear-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                      héritage sacré
                    </span>
                    <div className="absolute bottom-2 left-0 right-0 h-3 bg-accent/50 -rotate-1" />
                  </span>
                </h1>

                <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed font-light max-w-2xl text-pretty">
                  Un lieu de prière pour aujourd'hui, un investissement pour l'éternité. Votre contribution bâtit plus qu'une mosquée.
                </p>
              </div>

              <div className="relative group">
                <div className="absolute inset-0 bg-linear-to-r from-primary via-accent to-primary rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity" />
                <div className="relative bg-linear-to-br from-primary to-primary-dark rounded-2xl p-8 lg:p-10 shadow-2xl border border-primary-light/20">
                  <div className="absolute top-6 left-6 text-8xl text-white/5 font-serif leading-none">"</div>
                  <div className="relative z-10 space-y-4">
                    <p className="text-white text-lg lg:text-xl leading-relaxed font-normal">
                      Celui qui construit une mosquée pour Allah, Allah lui construira une maison au Paradis
                    </p>
                    <div className="flex items-center gap-3">
                      <div className="h-px flex-1 bg-linear-to-r from-transparent via-teal-300/50 to-transparent" />
                      <p className="text-teal-200 font-semibold text-sm">Hadith Sahih</p>
                      <div className="h-px flex-1 bg-linear-to-r from-transparent via-teal-300/50 to-transparent" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-amber-500 hover:bg-amber-600 text-white font-bold text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  <Heart className="mr-2 h-5 w-5" fill="currentColor" />
                  Contribuer maintenant
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 font-bold text-lg px-8 py-6 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  <Play className="mr-2 h-5 w-5" />
                  Découvrir le projet
                </Button>
              </div>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="bg-white rounded-lg px-6 py-3 shadow-md border border-gray-100">
                  <div className="text-2xl font-bold text-emerald-600">{stats.donorsCount}+</div>
                  <div className="text-sm text-gray-600 font-medium">Donateurs</div>
                </div>
                <div className="bg-white rounded-lg px-6 py-3 shadow-md border border-gray-100">
                  <div className="text-2xl font-bold text-amber-600">70M</div>
                  <div className="text-sm text-gray-600 font-medium">Objectif FCFA</div>
                </div>
              </div>
            </div>

            <div className="animate-fade-in-up lg:animate-delay-200">
              <FundraisingCounter stats={stats} />
            </div>
          </div>
        </div>
      </div>

      <div className='py-10'>
      </div>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-emerald-600 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-emerald-600 rounded-full" />
        </div>
      </div>
    </section>
  )
}
