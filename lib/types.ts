export interface Donation {
  id: string
  name: string
  amount: number
  email?: string
  phone?: string
  paymentMethod: 'mobile_money' | 'card' | 'cash'
  message?: string
  createdAt: Date
}

export interface FundraisingStats {
  currentAmount: number
  goalAmount: number
  donorsCount: number
  percentage: number
}
