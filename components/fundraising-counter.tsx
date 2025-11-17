'use client'

import { useEffect, useState } from 'react'
import { FundraisingStats } from '@/lib/types'
import { formatCurrency } from '@/lib/data'
import { TrendingUp, Users, Target, Zap } from 'lucide-react'

interface FundraisingCounterProps {
  stats: FundraisingStats
}

export function FundraisingCounter({ stats }: FundraisingCounterProps) {
  const [animatedAmount, setAnimatedAmount] = useState(0)
  const [animatedPercentage, setAnimatedPercentage] = useState(0)

  useEffect(() => {
    // Animation du compteur
    const duration = 2000 // 2 secondes
    const steps = 60
    const stepDuration = duration / steps
    const amountIncrement = stats.currentAmount / steps
    const percentageIncrement = stats.percentage / steps

    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++
      setAnimatedAmount(Math.floor(amountIncrement * currentStep))
      setAnimatedPercentage(percentageIncrement * currentStep)

      if (currentStep >= steps) {
        setAnimatedAmount(stats.currentAmount)
        setAnimatedPercentage(stats.percentage)
        clearInterval(timer)
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [stats])

  return (
    <div className="relative">
      <div className="relative bg-linear-to-br from-white via-white to-gray-50 rounded-4xl p-10 md:p-12 shadow-[0_25px_80px_-20px_rgba(0,0,0,0.25)] border-2 border-gray-100/50 overflow-hidden backdrop-blur-sm">
        <div className="absolute top-0 right-0 w-80 h-80 bg-linear-to-br from-accent/10 via-primary/8 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-linear-to-tr from-primary/10 via-accent/8 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative z-10">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-br from-primary to-primary-dark rounded-2xl blur-lg opacity-50" />
              <div className="relative bg-linear-to-br from-primary via-primary-light to-primary-dark p-4 rounded-2xl shadow-xl">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
            </div>
            <div className="text-left">
              <h3 className="text-2xl font-extrabold text-gray-900">Collecte de Fonds</h3>
              <p className="text-sm text-gray-600 font-semibold">Progression en temps réel</p>
            </div>
          </div>

          <div className="text-center mb-10">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Montant collecté</p>
            <div className="relative inline-block">
              <div className="absolute inset-0 bg-linear-to-r from-primary/20 via-accent/20 to-primary/20 blur-2xl" />
              <p className="relative text-6xl md:text-5xl lg:text-7xl font-black bg-linear-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent">
                {formatCurrency(animatedAmount)}
              </p>
              <div className="absolute -top-3 -right-3 flex items-center justify-center">
                <div className="w-6 h-6 bg-accent rounded-full animate-ping opacity-75" />
                <div className="absolute w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                  <Zap className="w-3 h-3 text-primary-dark" fill="currentColor" />
                </div>
              </div>
            </div>
            <p className="text-gray-600 mt-4 text-base font-semibold">
              sur <span className="font-black text-2xl text-accent">{formatCurrency(stats.goalAmount)}</span>
            </p>
          </div>

          <div className="mb-10">
            <div className="relative">
              <div className="h-6 bg-linear-to-r from-gray-100 via-gray-50 to-gray-100 rounded-full overflow-hidden shadow-inner border-2 border-gray-200">
                <div
                  className="h-full bg-linear-to-r from-primary via-accent to-primary-light transition-all duration-1000 ease-out rounded-full relative overflow-hidden shadow-lg"
                  style={{ width: `${Math.min(animatedPercentage, 100)}%` }}
                >
                  <div className="absolute inset-0 shimmer" />
                  <div className="absolute inset-0 bg-linear-to-t from-white/20 to-transparent" />
                </div>
              </div>
              <div 
                className="absolute -top-12 bg-linear-to-r from-primary to-primary-dark text-white px-4 py-2 rounded-xl text-base font-black shadow-2xl transition-all duration-1000 ease-out border-2 border-accent animate-glow"
                style={{ left: `calc(${Math.min(animatedPercentage, 100)}% - 40px)` }}
              >
                {animatedPercentage.toFixed(1)}%
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-5 pt-8 border-t-2 border-gray-200">
            <div className="text-center p-5 bg-linear-to-br from-primary/5 via-primary/3 to-transparent rounded-2xl hover:scale-110 transition-transform duration-300 border border-primary/10 shadow-lg">
              <div className="flex justify-center mb-3">
                <div className="bg-primary/10 p-3 rounded-xl">
                  <Users className="w-6 h-6 text-primary" />
                </div>
              </div>
              <p className="text-3xl md:text-4xl font-black text-primary mb-1">{stats.donorsCount}</p>
              <p className="text-xs font-bold text-gray-600 uppercase tracking-wide">Donateurs</p>
            </div>
            

            <div className="text-center p-5 bg-linear-to-br from-primary-light/5 via-primary-light/3 to-transparent rounded-2xl hover:scale-110 transition-transform duration-300 border border-primary-light/10 shadow-lg">
              <div className="flex justify-center mb-3">
                <div className="bg-primary-light/10 p-3 rounded-xl">
                  <span className="text-2xl">🎯</span>
                </div>
              </div>
              <p className="text-3xl md:text-4xl font-black text-primary-light mb-1">{stats.donorsCount}+</p>
              <p className="text-xs font-bold text-gray-600 uppercase tracking-wide">Contributeurs</p>
            </div>
          </div>

          {/* <div className="mt-8 relative overflow-hidden bg-linear-to-r from-primary via-primary-dark to-primary rounded-2xl p-6 text-center shadow-xl">
            <div className="absolute inset-0 shimmer opacity-30" />
            <p className="relative text-white font-bold text-base leading-relaxed">
              Rejoignez les <span className="text-accent text-xl font-black">{stats.contributorsCount}+</span> personnes qui construisent leur avenir spirituel
            </p>
          </div> */}
        </div>
      </div>

      <div className="absolute -top-6 -right-6 bg-linear-to-br from-accent via-accent-dark to-accent text-primary-dark px-6 py-3 rounded-2xl shadow-2xl font-black text-base animate-float border-4 border-white">
        🌟 {animatedPercentage.toFixed(0)}% atteint
      </div>
    </div>
  )
}
