import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import { IMAGES } from '../data/images'

const FEATURES = [
  'Private heated pool with stone terrace',
  'Pergola-shaded outdoor dining for eight',
  'Built-in BBQ and al fresco kitchen',
  'Sun loungers with sea and garden views',
  'Mature olive and bougainvillea gardens',
  'Panoramic views towards Albania',
]

export default function OutdoorSection() {
  return (
    <section className="relative overflow-hidden" style={{ minHeight: '600px' }}>
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <img
          src={IMAGES.pool[0].src}
          alt="Private pool and terrace at Villa Leveque"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'rgba(15,26,36,0.35)' }}
        />
      </div>

      {/* Content overlay — panel on the right */}
      <div className="relative z-10 min-h-[600px] flex items-center justify-end">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-24 flex justify-end">
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            className="w-full max-w-md p-10 md:p-12"
            style={{
              backgroundColor: 'rgba(15,26,36,0.88)',
              backdropFilter: 'blur(4px)',
              borderLeft: '1px solid rgba(201,169,110,0.3)',
            }}
          >
            <div className="w-8 h-px mb-6" style={{ backgroundColor: '#C9A96E' }} />

            <p
              className="text-xs tracking-[0.22em] uppercase mb-4"
              style={{ fontFamily: 'Manrope, sans-serif', color: '#C9A96E', fontWeight: 500 }}
            >
              Outdoor Living
            </p>

            <h2
              className="text-4xl md:text-5xl font-light leading-tight mb-6"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: 'italic',
                color: '#FAF8F4',
              }}
            >
              The Pool,<br />Terrace & Garden
            </h2>

            <p
              className="text-sm leading-relaxed mb-8"
              style={{
                fontFamily: 'Manrope, sans-serif',
                color: 'rgba(250,248,244,0.65)',
                fontWeight: 300,
                lineHeight: 1.9,
              }}
            >
              At Villa Leveque, outdoor living is central to the experience — long sun-drenched
              afternoons beside the pool and candlelit evenings beneath the pergola.
            </p>

            <ul className="space-y-2.5 mb-10">
              {FEATURES.map(f => (
                <li
                  key={f}
                  className="flex items-center gap-2.5 text-sm"
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    color: 'rgba(250,248,244,0.7)',
                    fontWeight: 300,
                  }}
                >
                  <Check size={12} style={{ color: '#C9A96E', flexShrink: 0 }} />
                  {f}
                </li>
              ))}
            </ul>

            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase font-medium transition-all duration-200"
              style={{ fontFamily: 'Manrope, sans-serif', color: '#C9A96E' }}
              onMouseEnter={e => e.currentTarget.style.color = '#FAF8F4'}
              onMouseLeave={e => e.currentTarget.style.color = '#C9A96E'}
            >
              Explore the Gallery <ArrowRight size={12} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
