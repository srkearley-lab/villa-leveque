import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { HERO_IMAGE } from '../data/images'

const PILLS = [
  '3 En-Suite Bedrooms',
  'Private Heated Pool',
  'Sea Views to Albania',
  'Kassiopi Village',
  'Concierge Service',
]

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current?.getBoundingClientRect().bottom > 0) {
        setScrollY(window.scrollY)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const parallaxOffset = scrollY * 0.3

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden grain"
      style={{ height: '100svh', minHeight: '600px' }}
    >
      {/* Parallax background */}
      <div
        className="absolute inset-x-0 will-change-transform"
        style={{
          top: '-12%',
          height: '124%',
          transform: `translateY(${parallaxOffset}px)`,
          backgroundImage: `url(${HERO_IMAGE})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Cinematic gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(15,26,36,0.15) 0%, rgba(15,26,36,0.55) 100%)',
          zIndex: 1,
        }}
      />

      {/* Content — centred, bottom-aligned */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-end text-center text-white"
        style={{ zIndex: 2 }}
      >
        <div className="w-full px-6 pb-28 md:pb-36 flex flex-col items-center text-center">

          {/* Location label */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="uppercase mb-8 text-white/50"
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontWeight: 300,
              fontSize: '0.75rem',
              letterSpacing: '0.38em',
            }}
          >
            Kassiopi &nbsp;&middot;&nbsp; Corfu &nbsp;&middot;&nbsp; Greece
          </motion.p>

          {/* Gold rule */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="mb-9 origin-center"
            style={{ width: '60px', height: '1px', backgroundColor: '#C9A96E' }}
          />

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
            className="mb-8 text-white text-center"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 'clamp(3.5rem, 7vw, 6.5rem)',
              lineHeight: 1.05,
              letterSpacing: '-0.01em',
              maxWidth: '900px',
            }}
          >
            A Private Villa<br />
            <span style={{ color: '#F0E8D8' }}>Above Kassiopi</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.58 }}
            className="mb-12 text-white/60 text-center"
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontWeight: 300,
              fontSize: 'clamp(0.9375rem, 1.4vw, 1.0625rem)',
              maxWidth: '600px',
              lineHeight: 1.85,
            }}
          >
            Three en-suite bedrooms, a private pool and sea views across to Albania —
            just a short walk from Kassiopi harbour.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.72 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
          >
            <Link
              to="/contact"
              className="inline-flex items-center justify-center whitespace-nowrap transition-all duration-200"
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: '0.75rem',
                fontWeight: 500,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                padding: '1rem 2.5rem',
                minHeight: '52px',
                backgroundColor: '#C9A96E',
                color: '#0F1A24',
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#b8935a'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#C9A96E'}
            >
              Check Availability
            </Link>
            <Link
              to="/villa"
              className="inline-flex items-center justify-center whitespace-nowrap transition-all duration-200"
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: '0.75rem',
                fontWeight: 400,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                padding: '1rem 2.5rem',
                minHeight: '52px',
                border: '1px solid rgba(255,255,255,0.38)',
                color: 'rgba(255,255,255,0.82)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.72)'
                e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.07)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.38)'
                e.currentTarget.style.backgroundColor = 'transparent'
              }}
            >
              Explore the Villa
            </Link>
          </motion.div>

          {/* Pills */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2"
          >
            {PILLS.map((pill, i) => (
              <span
                key={pill}
                className="inline-flex items-center gap-2.5 text-white/45"
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: '0.75rem',
                  fontWeight: 300,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                }}
              >
                {i > 0 && (
                  <span
                    className="w-[3px] h-[3px] rounded-full flex-shrink-0"
                    style={{ backgroundColor: '#C9A96E', opacity: 0.65 }}
                  />
                )}
                {pill}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center"
        style={{ bottom: '1.75rem', zIndex: 3 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.7 }}
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} style={{ color: 'rgba(255,255,255,0.32)' }} />
        </motion.div>
      </motion.div>
    </section>
  )
}
