import { Heart, Users, BookOpen, Star } from 'lucide-react'

const benefits = [
  {
    icon: Heart,
    title: 'Sadaqa Jariya',
    description:
      'Une aumône continue qui vous profite dans l\'au-delà. Chaque prière effectuée dans cette mosquée vous rapporte des récompenses.',
  },
  {
    icon: Star,
    title: 'Récompense Divine',
    description:
      'Allah construit une maison au Paradis pour celui qui construit une mosquée, quelque soit sa taille.',
  },
  {
    icon: Users,
    title: 'Impact Communautaire',
    description:
      'Créez un lieu de rassemblement spirituel pour des générations de musulmans dans la région.',
  },
  {
    icon: BookOpen,
    title: 'Éducation Islamique',
    description:
      'Contribuez à la formation religieuse et à l\'apprentissage du Coran pour les jeunes et les adultes.',
  },
]

export function WhyContribute() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* En-tête de section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary font-serif mb-4 text-balance">
              Pourquoi Contribuer ?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-balance">
              Découvrez les mérites spirituels et l'impact positif de votre contribution
            </p>
          </div>

          {/* Citation du Coran */}
          <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 md:p-12 mb-16 text-white text-center">
            <div className="max-w-3xl mx-auto">
              <div className="text-6xl text-accent mb-6">"</div>
              <p className="text-xl md:text-2xl leading-relaxed mb-6 font-serif text-balance">
                Qui fera à Allah un prêt sincère, afin qu'Il le lui multiplie plusieurs fois ? Et c'est
                Allah qui restreint ou étend Ses faveurs. Et c'est à Lui que vous retournerez.
              </p>
              <p className="text-accent text-lg font-semibold">Sourate Al-Baqarah (2:245)</p>
            </div>
          </div>

          {/* Bénéfices */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div
                  key={index}
                  className="bg-gray-50 border border-gray-200 rounded-xl p-8 hover:border-primary transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-white rounded-full p-3 flex-shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-3">{benefit.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Hadith */}
          <div className="bg-accent/10 border-l-4 border-accent rounded-lg p-8">
            <p className="text-lg text-gray-900 leading-relaxed mb-4 italic">
              Le Prophète Muhammad (que la paix soit sur lui) a dit : "Lorsque le fils d'Adam meurt, ses
              œuvres s'arrêtent sauf trois : une aumône continue (Sadaqa Jariya), une science dont les gens
              tirent profit, ou un enfant pieux qui invoque pour lui."
            </p>
            <p className="text-accent-dark font-semibold">Rapporté par Muslim</p>
          </div>
        </div>
      </div>
    </section>
  )
}
