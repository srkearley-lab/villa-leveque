import { motion } from 'framer-motion'
import CTAButton from './CTAButton'
import { ArrowRight } from 'lucide-react'

/**
 * Alternating image-text split for service pages.
 *
 * imageLeft  — true: image on left, text on right (default)
 *            — false: text on left, image on right
 * bg         — background colour string for the section
 */
export default function ServiceSection({ num, title, body, detail, img, imageLeft = true, bg = '#FAF8F4' }) {
  const ImageCol = (
    <div className="relative aspect-[4/3] lg:aspect-auto" style={{ minHeight: 0 }}>
      <img
        src={img.src}
        alt={img.alt}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      {/* Subtle darkening vignette at edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, rgba(15,26,36,0.08) 0%, transparent 60%)' }}
      />
    </div>
  )

  const ContentCol = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55 }}
      className="flex flex-col justify-center px-8 md:px-12 lg:px-16 xl:px-20 py-14 md:py-18 lg:py-20"
    >
      {/* Number + rule */}
      <div className="flex items-center gap-4 mb-7">
        <span
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '0.9375rem',
            color: '#C9A96E',
            fontWeight: 400,
            letterSpacing: '0.22em',
          }}
        >
          {num}
        </span>
        <div style={{ flexGrow: 1, maxWidth: 40, height: 1, backgroundColor: '#C9A96E' }} />
        <span
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: '0.75rem',
            color: '#C9A96E',
            fontWeight: 500,
            letterSpacing: '0.26em',
            textTransform: 'uppercase',
          }}
        >
          Premium Service
        </span>
      </div>

      {/* Heading */}
      <h2
        className="font-light mb-5 leading-tight"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 'clamp(1.75rem, 3vw, 2.6rem)',
          color: '#1C2B3A',
          fontWeight: 300,
        }}
      >
        {title}
      </h2>

      {/* Body */}
      <p
        className="mb-5 leading-relaxed"
        style={{
          fontFamily: 'Manrope, sans-serif',
          fontSize: '1rem',
          color: '#5A6B60',
          fontWeight: 300,
          lineHeight: 1.9,
          maxWidth: '48ch',
        }}
      >
        {body}
      </p>

      {/* Detail note */}
      <p
        className="mb-9 italic"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '0.95rem',
          color: '#9aA090',
          fontStyle: 'italic',
        }}
      >
        {detail}
      </p>

      <CTAButton variant="outline-dark" size="md" to="/contact">
        Arrange This Service <ArrowRight size={12} />
      </CTAButton>
    </motion.div>
  )

  return (
    <section style={{ backgroundColor: bg, borderTop: '1px solid #E8DFD0' }}>
      <div className="grid grid-cols-1 lg:grid-cols-2" style={{ minHeight: 520 }}>
        {imageLeft ? (
          <>
            {ImageCol}
            {ContentCol}
          </>
        ) : (
          <>
            <div className="order-1 lg:order-2">{ImageCol}</div>
            <div className="order-2 lg:order-1">{ContentCol}</div>
          </>
        )}
      </div>
    </section>
  )
}
