import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { BedDouble, Waves, Eye, MapPin, Sparkles, ChevronDown } from 'lucide-react'
import { HERO_IMAGE } from '../data/images'

const PILLS = [
  { icon: <BedDouble size={12} />, label: '3 Bedrooms' },
  { icon: <Waves size={12} />, label: 'Private Pool' },
  { icon: <Eye size={12} />, label: 'Sea Views' },
  { icon: <MapPin size={12} />, label: 'Kassiopi' },
  { icon: <Sparkles size={12} />, label: 'Concierge' },
]

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect()
        // Only apply parallax while hero is in view
        if (rect.bottom > 0) {
          setScrollY(window.scrollY)
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Max 20% movement — image moves at 30% of scroll speed
  const parallaxOffset = Math.min(scrollY * 0.28, window.innerHeight * 0.2)

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Background image with parallax */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage: `url(${HERO_IMAGE})`,
          transform: `translateY(${parallaxOffset}px)`,
          // Extend top so parallax doesn't reveal white
          top: '-10%',
          height: '115%',
        }}
      />

      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(15,26,36,0.42)' }}
      />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[rgba(15,26,36,0.55)] to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto w-full pt-24 pb-36">

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-xs tracking-[0.3em] uppercase font-light mb-8 text-white/60"
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          Kassiopi &nbsp;&middot;&nbsp; Corfu &nbsp;&middot;&nbsp; Greece
        </motion.p>

        {/* Gold accent line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="w-10 h-px mx-auto mb-8"
          style={{ backgroundColor: '#C9A96E' }}
        />

        {/* Headline — Cormorant Garamond italic */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.95, delay: 0.35 }}
          className="text-6xl md:text-7xl lg:text-8xl font-light leading-[1.05] mb-8 tracking-tight"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic' }}
        >
          A Private Villa<br />
          Above Kassiopi
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.52 }}
          className="text-base md:text-lg font-light text-white/75 max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          Three en-suite bedrooms, a private pool and sea views across to Albania —
          just a short drive from Kassiopi harbour.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.67 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <Link
            to="/contact"
            className="px-9 py-4 text-xs tracking-[0.2em] uppercase font-medium transition-all duration-300"
            style={{
              backgroundColor: '#C9A96E',
              color: '#0F1A24',
              fontFamily: 'Manrope, sans-serif',
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#b8935a'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#C9A96E'}
          >
            Check Availability
          </Link>
          <Link
            to="/villa"
            className="px-9 py-4 border border-white/40 text-white text-xs tracking-[0.2em] uppercase font-light hover:border-white/80 transition-all duration-300"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Explore the Villa
          </Link>
        </motion.div>

        {/* Highlight pills — horizontal scroll on mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.82 }}
          className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-1 px-1"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {PILLS.map((pill) => (
            <span
              key={pill.label}
              className="inline-flex items-center gap-1.5 px-4 py-2 border text-white/80 text-xs font-light tracking-wider whitespace-nowrap flex-shrink-0"
              style={{
                borderColor: 'rgba(201,169,110,0.45)',
                fontFamily: 'Manrope, sans-serif',
                backgroundColor: 'rgba(201,169,110,0.08)',
              }}
            >
              <span style={{ color: '#C9A96E' }}>{pill.icon}</span>
              {pill.label}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
        >
          <ChevronDown size={20} className="text-white/35" />
        </motion.div>
      </motion.div>
    </section>
  )
}
