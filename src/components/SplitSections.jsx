import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { IMAGES } from '../data/images'

function SplitText({ label, heading, body, cta, ctaTo }) {
  return (
    <div className="flex flex-col justify-center h-full px-10 md:px-14 lg:px-20 py-16 md:py-24">
      <p
        className="text-xs tracking-[0.22em] uppercase mb-5"
        style={{ fontFamily: 'Manrope, sans-serif', color: '#C9A96E', fontWeight: 500 }}
      >
        {label}
      </p>

      <div className="w-8 h-px mb-7" style={{ backgroundColor: '#C9A96E' }} />

      <h2
        className="font-light leading-tight mb-7"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: 'italic',
          color: '#FAF8F4',
          fontSize: 'clamp(1.85rem, 3.5vw, 2.75rem)',
        }}
      >
        {heading}
      </h2>

      <p
        className="text-sm leading-relaxed mb-10"
        style={{
          fontFamily: 'Manrope, sans-serif',
          color: 'rgba(250,248,244,0.58)',
          fontWeight: 300,
          lineHeight: 1.9,
          maxWidth: '34ch',
        }}
      >
        {body}
      </p>

      <Link
        to={ctaTo}
        className="inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase font-medium self-start transition-colors duration-200"
        style={{ fontFamily: 'Manrope, sans-serif', color: '#C9A96E' }}
        onMouseEnter={e => e.currentTarget.style.color = '#FAF8F4'}
        onMouseLeave={e => e.currentTarget.style.color = '#C9A96E'}
      >
        {cta} <ArrowRight size={12} />
      </Link>
    </div>
  )
}

export default function SplitSections() {
  return (
    <>
      {/* Section A — Pool left, dark navy right */}
      <section className="grid grid-cols-1 lg:grid-cols-2" style={{ minHeight: '560px' }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="order-2 lg:order-1 overflow-hidden"
          style={{ minHeight: '400px' }}
        >
          <img
            src={IMAGES.pool[1].src}
            alt="Private pool at Villa Leveque with sea views"
            className="w-full h-full object-cover"
            style={{ minHeight: '400px' }}
            loading="lazy"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="order-1 lg:order-2"
          style={{ backgroundColor: '#1C2B3A' }}
        >
          <SplitText
            label="Outdoor Living"
            heading="Your Private Outdoor Sanctuary"
            body="The front terrace centres around a fully refurbished private pool, surrounded by sun loungers, a shaded pergola lounge, swing chair and deck day bed. At the rear, a stone-built barbecue and al fresco dining area complete the picture."
            cta="View Gallery"
            ctaTo="/gallery"
          />
        </motion.div>
      </section>

      {/* Section B — dark navy left, living room right */}
      <section className="grid grid-cols-1 lg:grid-cols-2" style={{ minHeight: '560px' }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="order-1"
          style={{ backgroundColor: '#0F1A24' }}
        >
          <SplitText
            label="Inside"
            heading="Thoughtfully Designed Interiors"
            body="Across two floors, Villa Leveque offers generous, comfortable living spaces. The open-plan ground floor flows from kitchen through dining to living — and straight out to the pool. Upstairs, three en-suite bedrooms each enjoy access to the first-floor balcony with views across the olive groves to the sea."
            cta="Explore the Villa"
            ctaTo="/villa"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="order-2 overflow-hidden"
          style={{ minHeight: '400px' }}
        >
          <img
            src={IMAGES.living[0].src}
            alt="Open-plan living area at Villa Leveque"
            className="w-full h-full object-cover"
            style={{ minHeight: '400px' }}
            loading="lazy"
          />
        </motion.div>
      </section>
    </>
  )
}
