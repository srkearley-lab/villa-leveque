import { motion } from 'framer-motion'

const STATS = [
  '3 En-Suite Bedrooms',
  'Private Pool',
  'Sea Views to Albania',
]

export default function IntroSection() {
  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: '#FAF8F4' }}>
      <div className="max-w-3xl mx-auto px-6 text-center">

        {/* Gold line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-10 h-px mx-auto mb-10"
          style={{ backgroundColor: '#C9A96E' }}
        />

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-light leading-tight mb-8"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: 'italic',
            color: '#1C2B3A',
            fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
          }}
        >
          Mediterranean Living<br />at Its Finest
        </motion.h2>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-sm md:text-base leading-relaxed mb-14 max-w-2xl mx-auto"
          style={{
            fontFamily: 'Manrope, sans-serif',
            color: '#6B7C5C',
            fontWeight: 300,
            lineHeight: 1.95,
          }}
        >
          Set among olive and cypress trees on the hillside above Kassiopi, Villa Leveque
          offers a rare combination of privacy, sea views and village life. Three en-suite
          bedrooms, a private pool and generous terraces make it an ideal retreat for
          families or small groups seeking an unhurried corner of northeast Corfu.
        </motion.p>

        {/* Stat pills */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
        >
          {STATS.map((stat, i) => (
            <span
              key={stat}
              className="inline-flex items-center gap-2 px-6 py-3 text-xs tracking-[0.15em] uppercase"
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontWeight: 500,
                color: '#1C2B3A',
                border: '1px solid rgba(201,169,110,0.35)',
                backgroundColor: 'rgba(201,169,110,0.06)',
              }}
            >
              <span
                className="w-1 h-1 rounded-full flex-shrink-0"
                style={{ backgroundColor: '#C9A96E' }}
              />
              {stat}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
