'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'
import { CreditCard, Smartphone, Banknote, Heart, Check } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

const presetAmounts = [5000, 10000, 25000, 50000, 100000, 250000]

const paymentMethods = [
  {
    id: 'mobile_money',
    name: 'Mobile Money',
    icon: Smartphone,
    providers: ['Orange Money', 'MTN Money', 'Moov Money', 'Wave'],
  },
  {
    id: 'card',
    name: 'Carte Bancaire',
    icon: CreditCard,
    providers: ['Visa', 'Mastercard'],
  },
  {
    id: 'cash',
    name: 'Espèces / Virement',
    icon: Banknote,
    providers: ['Contactez-nous'],
  },
]

export function DonationForm() {
  const [amount, setAmount] = useState('')
  const [customAmount, setCustomAmount] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleAmountSelect = (value: number) => {
    setAmount(value.toString())
    setCustomAmount('')
  }

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value)
    setAmount(value)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simuler un appel API
    await new Promise((resolve) => setTimeout(resolve, 2000))

    toast({
      title: 'Merci pour votre générosité !',
      description: `Votre don de ${parseInt(amount).toLocaleString('fr-FR')} FCFA a été reçu. Qu'Allah vous récompense.`,
    })

    // Réinitialiser le formulaire
    setAmount('')
    setCustomAmount('')
    setPaymentMethod('')
    setFormData({ name: '', email: '', phone: '', message: '' })
    setIsSubmitting(false)
  }

  const finalAmount = customAmount || amount

  return (
    <section id="contribuer" className="py-20 bg-linear-to-br from-primary-dark via-primary to-primary-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* En-tête de section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-serif mb-4 text-balance">
              Faire une Contribution
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto text-balance">
              Chaque don compte et contribue à l'édification de cette maison d'Allah
            </p>
          </div>

          {/* Formulaire */}
          <Card className="p-6 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Montants prédéfinis */}
              <div>
                <Label className="text-lg font-semibold text-primary mb-4 block">
                  Choisissez un montant
                </Label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                  {presetAmounts.map((preset) => (
                    <button
                      key={preset}
                      type="button"
                      onClick={() => handleAmountSelect(preset)}
                      className={`p-4 rounded-xl border-2 font-semibold transition-all hover:scale-105 ${
                        amount === preset.toString()
                          ? 'border-primary bg-primary text-white'
                          : 'border-gray-200 hover:border-primary'
                      }`}
                    >
                      {preset.toLocaleString('fr-FR')} FCFA
                    </button>
                  ))}
                </div>
                <div>
                  <Label htmlFor="custom-amount" className="text-sm text-gray-600 mb-2 block">
                    Ou entrez un montant personnalisé
                  </Label>
                  <div className="relative">
                    <Input
                      id="custom-amount"
                      type="number"
                      placeholder="10000"
                      value={customAmount}
                      onChange={(e) => handleCustomAmountChange(e.target.value)}
                      className="text-lg pl-4 pr-16"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 font-medium">
                      FCFA
                    </span>
                  </div>
                </div>
              </div>

              {/* Méthode de paiement */}
              <div>
                <Label className="text-lg font-semibold text-primary mb-4 block">
                  Méthode de paiement
                </Label>
                <div className="grid md:grid-cols-3 gap-4">
                  {paymentMethods.map((method) => {
                    const Icon = method.icon
                    return (
                      <button
                        key={method.id}
                        type="button"
                        onClick={() => setPaymentMethod(method.id)}
                        className={`p-5 rounded-xl border-2 transition-all hover:scale-105 ${
                          paymentMethod === method.id
                            ? 'border-primary bg-primary/5'
                            : 'border-gray-200 hover:border-primary/50'
                        }`}
                      >
                        <div className="flex flex-col items-center gap-3">
                          <div
                            className={`w-12 h-12 rounded-full flex items-center justify-center ${
                              paymentMethod === method.id ? 'bg-primary' : 'bg-gray-100'
                            }`}
                          >
                            <Icon
                              className={`w-6 h-6 ${
                                paymentMethod === method.id ? 'text-white' : 'text-gray-600'
                              }`}
                            />
                          </div>
                          <div className="text-center">
                            <p className="font-semibold text-sm">{method.name}</p>
                            <p className="text-xs text-gray-600 mt-1">
                              {method.providers.join(', ')}
                            </p>
                          </div>
                          {paymentMethod === method.id && (
                            <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center">
                              <Check className="w-3 h-3 text-white" />
                            </div>
                          )}
                        </div>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Informations personnelles */}
              <div className="space-y-4">
                <Label className="text-lg font-semibold text-primary mb-4 block">
                  Vos informations
                </Label>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Nom complet *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Abdoul Aziz"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Téléphone *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+226 XX XX XX XX"
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email (optionnel)</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@exemple.com"
                  />
                </div>
                <div>
                  <Label htmlFor="message">Message (optionnel)</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Partagez vos intentions ou dédicaces..."
                    rows={3}
                  />
                </div>
              </div>

              {/* Récapitulatif */}
              {finalAmount && paymentMethod && (
                <div className="bg-accent/10 border border-accent/30 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-600">Montant de votre don :</span>
                    <span className="text-2xl font-bold text-primary">
                      {parseInt(finalAmount).toLocaleString('fr-FR')} FCFA
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">Méthode de paiement :</span>
                    <span className="font-semibold">
                      {paymentMethods.find((m) => m.id === paymentMethod)?.name}
                    </span>
                  </div>
                </div>
              )}

              {/* Bouton de soumission */}
              <Button
                type="submit"
                size="lg"
                disabled={!finalAmount || !paymentMethod || !formData.name || !formData.phone || isSubmitting}
                className="w-full bg-primary hover:bg-primary-dark text-white font-bold text-lg py-6 rounded-xl shadow-xl hover:scale-105 transition-transform disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <div className="w-5 h-5 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                    Traitement en cours...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Heart className="w-5 h-5" />
                    Confirmer ma contribution
                  </span>
                )}
              </Button>

              <p className="text-xs text-center text-gray-600">
                En contribuant, vous acceptez que vos informations soient utilisées pour le traitement de
                votre don. Vous recevrez un reçu de don par email ou SMS.
              </p>
            </form>
          </Card>

          {/* Note de sécurité */}
          <div className="mt-8 text-center">
            <p className="text-white/80 text-sm">
              Vos informations sont sécurisées et ne seront jamais partagées avec des tiers.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
