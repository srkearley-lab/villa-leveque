import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { HERO_IMAGE } from '../data/images'

const PILLS = ['3 Bedrooms', 'Private Pool', 'Sea Views', 'Kassiopi', 'Concierge']

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

  const parallaxOffset = Math.min(scrollY * 0.3, window.innerHeight * 0.22)

  return (
    <section
      ref={heroRef}
      className="relative flex flex-col justify-center overflow-hidden grain"
      style={{ minHeight: '100svh' }}
    >
      {/* Background — parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: `url(${HERO_IMAGE})`,
          transform: `translateY(${parallaxOffset}px)`,
          top: '-12%',
          height: '120%',
        }}
      />

      {/* Cinematic multi-stop gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            linear-gradient(to bottom,
              rgba(10,18,28,0.55) 0%,
              rgba(10,18,28,0.15) 35%,
              rgba(10,18,28,0.08) 55%,
              rgba(10,18,28,0.70) 88%,
              rgba(10,18,28,0.92) 100%
            )
          `,
        }}
      />

      {/* Vignette edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 55%, rgba(10,18,28,0.45) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center text-center text-white px-6 pt-32 pb-44 max-w-6xl mx-auto">

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="text-xs tracking-[0.45em] uppercase mb-10 text-white/45"
          style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 300 }}
        >
          Kassiopi &nbsp;&middot;&nbsp; Corfu &nbsp;&middot;&nbsp; Greece
        </motion.p>

        {/* Gold rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="h-px w-12 mb-10 origin-center"
          style={{ backgroundColor: '#C9A96E' }}
        />

        {/* Display headline */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
          className="mb-8 text-white"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: 'italic',
            fontWeight: 300,
            fontSize: 'clamp(4rem, 11vw, 8.5rem)',
            lineHeight: 0.97,
            letterSpacing: '-0.02em',
          }}
        >
          A Private Villa<br />
          <span style={{ color: '#F0E8D8' }}>Above Kassiopi</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="text-base md:text-lg max-w-lg mx-auto mb-14 text-white/65 leading-relaxed"
          style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 300 }}
        >
          Three en-suite bedrooms, a private pool and sea views across to Albania —
          just a short walk from Kassiopi harbour.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16"
        >
          <Link
            to="/contact"
            className="px-12 py-4 text-xs tracking-[0.25em] uppercase font-medium transition-all duration-300 min-h-[52px] flex items-center"
            style={{ backgroundColor: '#C9A96E', color: '#0F1A24', fontFamily: 'Manrope, sans-serif' }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#b8935a'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#C9A96E'}
          >
            Check Availability
          </Link>
          <Link
            to="/villa"
            className="px-12 py-4 border text-xs tracking-[0.25em] uppercase font-light transition-all duration-300 min-h-[52px] flex items-center"
            style={{ borderColor: 'rgba(255,255,255,0.28)', color: 'rgba(255,255,255,0.82)', fontFamily: 'Manrope, sans-serif' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.65)'; e.currentTarget.style.color = '#fff' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.28)'; e.currentTarget.style.color = 'rgba(255,255,255,0.82)' }}
          >
            Explore the Villa
          </Link>
        </motion.div>

        {/* Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.95 }}
          className="flex flex-wrap items-center justify-center gap-2"
        >
          {PILLS.map((pill) => (
            <span
              key={pill}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-light tracking-wider text-white/65"
              style={{
                border: '1px solid rgba(201,169,110,0.32)',
                backgroundColor: 'rgba(201,169,110,0.06)',
                fontFamily: 'Manrope, sans-serif',
              }}
            >
              <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: '#C9A96E' }} />
              {pill}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1.5"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} style={{ color: 'rgba(255,255,255,0.28)' }} />
        </motion.div>
      </motion.div>
    </section>
  )
}
