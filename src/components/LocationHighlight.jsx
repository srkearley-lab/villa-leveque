import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const HIGHLIGHTS = [
  { label: 'Kassiopi village', detail: '10 min walk' },
  { label: 'Nearest beach', detail: '5 min drive' },
  { label: 'Sea views to Albania', detail: 'From every terrace' },
  { label: 'Quiet hillside setting', detail: 'Private & peaceful' },
]

export default function LocationHighlight() {
  return (
    <section
      className="grid grid-cols-1 lg:grid-cols-2"
      style={{ backgroundColor: '#5C6E50', minHeight: '520px' }}
    >
      {/* Left — large headline */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
        className="flex flex-col justify-center px-10 md:px-14 lg:px-20 py-20 md:py-28"
      >
        <p
          className="uppercase mb-5"
          style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.7rem', color: 'rgba(250,248,244,0.5)', fontWeight: 300, letterSpacing: '0.3em' }}
        >
          Northeast Corfu
        </p>
        <div className="w-8 h-px mb-8" style={{ backgroundColor: 'rgba(201,169,110,0.5)' }} />
        <h2
          className="font-light leading-tight"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: 'italic',
            color: '#FAF8F4',
            fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
            lineHeight: 1.1,
          }}
        >
          10 minutes<br />from Kassiopi
        </h2>
        <p
          className="mt-6"
          style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.875rem', color: 'rgba(250,248,244,0.55)', fontWeight: 300, lineHeight: 1.85, maxWidth: '32ch' }}
        >
          Close enough for evenings out in the village,
          far enough for complete peace and privacy.
        </p>
      </motion.div>

      {/* Right — 4 highlights + CTA */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65, delay: 0.12 }}
        className="flex flex-col justify-center px-10 md:px-14 lg:px-16 py-20 md:py-28"
        style={{ borderLeft: '1px solid rgba(250,248,244,0.1)' }}
      >
        <ul className="space-y-0 mb-12" style={{ borderTop: '1px solid rgba(250,248,244,0.1)' }}>
          {HIGHLIGHTS.map(({ label, detail }) => (
            <li
              key={label}
              className="flex items-center justify-between py-5"
              style={{ borderBottom: '1px solid rgba(250,248,244,0.1)' }}
            >
              <span
                style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.875rem', color: 'rgba(250,248,244,0.75)', fontWeight: 300 }}
              >
                {label}
              </span>
              <span
                style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.75rem', color: '#C9A96E', fontWeight: 500, letterSpacing: '0.08em' }}
              >
                {detail}
              </span>
            </li>
          ))}
        </ul>

        <Link
          to="/location"
          className="inline-flex items-center gap-2 group self-start transition-colors duration-200"
          style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(250,248,244,0.55)', fontWeight: 400 }}
          onMouseEnter={e => e.currentTarget.style.color = '#FAF8F4'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(250,248,244,0.55)'}
        >
          Explore Location
          <ArrowRight size={11} className="transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </motion.div>
    </section>
  )
}
