import { FundraisingStats } from './types'

// Simuler les données de collecte en temps réel
export async function getFundraisingStats(): Promise<FundraisingStats> {
  // En production, ceci viendrait de votre base de données
  const currentAmount = 12540000 // FCFA
  const goalAmount = 70000000 // FCFA
  const donorsCount = 127
  const percentage = (currentAmount / goalAmount) * 100

  return {
    currentAmount,
    goalAmount,
    donorsCount,
    percentage,
  }
}

// Formater les montants en FCFA
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('fr-FR', {
    style: 'decimal',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount) + ' FCFA'
}
