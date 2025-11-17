import { Building2, Home, BookOpen, Users } from 'lucide-react'

const features = [
  {
    icon: Home,
    title: 'Salle de Prière',
    description: 'Espace principal pouvant accueillir 500 fidèles',
  },
  {
    icon: BookOpen,
    title: 'Bibliothèque Islamique',
    description: 'Collection de livres et ressources religieuses',
  },
  {
    icon: Users,
    title: 'Salles de Formation',
    description: 'Espaces pour cours et conférences islamiques',
  },
  {
    icon: Building2,
    title: 'Bureaux Administratifs',
    description: 'Gestion et organisation des activités',
  },
]

export function PlansSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* En-tête de section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary font-serif mb-4 text-balance">
              Plans et Maquettes
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-balance">
              Découvrez les plans architecturaux et la vision complète du futur centre
            </p>
          </div>

          {/* Grille de plans */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="/islamic-mosque-architectural-plan-blueprint.jpg"
                alt="Plan architectural de la mosquée"
                className="w-full aspect-video object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">Plan du Rez-de-chaussée</h3>
                <p className="text-gray-600">
                  Vue détaillée de la salle de prière principale et des espaces annexes
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="/mosque-3d-rendering-front-elevation.jpg"
                alt="Élévation de la mosquée"
                className="w-full aspect-video object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">Façade Principale</h3>
                <p className="text-gray-600">
                  Vue de face avec le dôme et les minarets
                </p>
              </div>
            </div>
          </div>

          {/* Maquette 3D */}
          <div className="mb-16">
            <div className="bg-gradient-to-br from-primary-dark to-primary rounded-2xl p-8 md:p-12 text-white">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold font-serif mb-4">Maquette 3D du Projet</h3>
                  <p className="text-white/90 leading-relaxed mb-6">
                    Visualisez le rendu final de la mosquée avec son architecture islamique traditionnelle
                    combinée à des éléments modernes. Le dôme central et les espaces de prière offriront un
                    environnement spirituel apaisant.
                  </p>
                  <div className="flex items-center gap-4">
                    <div className="bg-accent text-primary-dark px-4 py-2 rounded-lg font-semibold">
                      2000 m²
                    </div>
                    <div className="bg-white/20 px-4 py-2 rounded-lg">500 places</div>
                  </div>
                </div>
                <div className="relative aspect-square bg-white/10 rounded-xl overflow-hidden">
                  <img
                    src="/modern-islamic-mosque-3d-model-render.jpg"
                    alt="Maquette 3D de la mosquée"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Caractéristiques */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:border-primary transition-colors"
                >
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-bold text-primary mb-2">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
