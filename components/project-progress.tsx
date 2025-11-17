import { CheckCircle2, Clock, Calendar } from 'lucide-react'

const milestones = [
  {
    title: 'Acquisition du Terrain',
    status: 'completed',
    date: 'Janvier 2024',
    description: 'Achat et sécurisation du terrain de 2000 m²',
  },
  {
    title: 'Fondations',
    status: 'completed',
    date: 'Mars 2024',
    description: 'Excavation et coulage des fondations complétés',
  },
  {
    title: 'Structure et Murs',
    status: 'in-progress',
    date: 'En cours',
    description: 'Construction des murs porteurs et de la structure',
  },
  {
    title: 'Toiture et Couverture',
    status: 'upcoming',
    date: 'À venir',
    description: 'Installation de la toiture et du dôme principal',
  },
  {
    title: 'Aménagements Intérieurs',
    status: 'upcoming',
    date: 'À venir',
    description: 'Finitions, électricité, plomberie et décoration',
  },
  {
    title: 'Inauguration',
    status: 'upcoming',
    date: 'Prévue 2025',
    description: 'Ouverture officielle de la mosquée et du centre',
  },
]

export function ProjectProgress() {
  return (
    <section id="projet" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* En-tête de section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary font-serif mb-4 text-balance">
              Avancement du Projet
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto text-balance">
              Suivez l'évolution de la construction en temps réel et découvrez les différentes étapes du projet
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Ligne verticale */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200" />

            {/* Milestones */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Icône centrale */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center border-4 border-gray-50 ${
                        milestone.status === 'completed'
                          ? 'bg-primary'
                          : milestone.status === 'in-progress'
                          ? 'bg-accent'
                          : 'bg-gray-100'
                      }`}
                    >
                      {milestone.status === 'completed' ? (
                        <CheckCircle2 className="w-8 h-8 text-white" />
                      ) : milestone.status === 'in-progress' ? (
                        <Clock className="w-8 h-8 text-primary-dark" />
                      ) : (
                        <Calendar className="w-8 h-8 text-gray-600" />
                      )}
                    </div>
                  </div>

                  {/* Contenu */}
                  <div className="md:w-1/2 pl-24 md:pl-0">
                    <div
                      className={`bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow ${
                        index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'
                      }`}
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-xl font-bold text-primary font-serif">{milestone.title}</h3>
                        <span
                          className={`text-xs font-semibold px-3 py-1 rounded-full ${
                            milestone.status === 'completed'
                              ? 'bg-primary/10 text-primary'
                              : milestone.status === 'in-progress'
                              ? 'bg-accent/20 text-accent-dark'
                              : 'bg-gray-100 text-gray-600'
                          }`}
                        >
                          {milestone.date}
                        </span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
