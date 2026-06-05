import { motion } from 'framer-motion'
import { Shield, Headphones, CreditCard, Award } from 'lucide-react'
import { AWARD_BADGE } from '../data/images'

const PILLS = [
  { icon: <Shield size={12} />, label: 'Private & Exclusive' },
  { icon: <Headphones size={12} />, label: 'Concierge Available' },
  { icon: <CreditCard size={12} />, label: 'Direct Booking' },
  { icon: <Award size={12} />, label: 'Award-Winning Property' },
]

export default function TrustBar() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="py-5 border-y"
      style={{
        backgroundColor: '#FAF8F4',
        borderColor: 'rgba(201,169,110,0.18)',
      }}
    >
      <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Award badge */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {AWARD_BADGE && (
              <img
                src={AWARD_BADGE}
                alt="TRA Digital Gallery Award 2025"
                className="h-8 w-auto object-contain opacity-80"
                loading="lazy"
              />
            )}
            <div
              className="h-8 w-px hidden sm:block"
              style={{ backgroundColor: 'rgba(201,169,110,0.25)' }}
            />
          </div>

          {/* Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-0.5"
            style={{ scrollbarWidth: 'none' }}
          >
            {PILLS.map((pill, i) => (
              <span
                key={pill.label}
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs whitespace-nowrap flex-shrink-0"
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  color: '#6B7C5C',
                  fontWeight: 400,
                  letterSpacing: '0.05em',
                  border: '1px solid rgba(201,169,110,0.22)',
                  backgroundColor: 'rgba(201,169,110,0.05)',
                }}
              >
                <span style={{ color: '#C9A96E' }}>{pill.icon}</span>
                {pill.label}
              </span>
            ))}
          </div>

          {/* Right text */}
          <p
            className="text-xs text-right hidden lg:block flex-shrink-0"
            style={{ fontFamily: 'Manrope, sans-serif', color: '#9aA090', fontWeight: 300 }}
          >
            Managed by Our Villa Rentals
          </p>
        </div>
      </div>
    </motion.section>
  )
}
