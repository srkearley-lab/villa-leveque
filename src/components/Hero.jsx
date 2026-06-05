import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Waves, Trees, Eye, MapPin, Star } from 'lucide-react'
import { HERO_IMAGE } from '../data/images'

const PILLS = [
  { icon: <Star size={13} />, label: '3 Bedrooms' },
  { icon: <Waves size={13} />, label: 'Private Pool' },
  { icon: <Eye size={13} />, label: 'Sea Views' },
  { icon: <MapPin size={13} />, label: '10 min to Kassiopi' },
  { icon: <Star size={13} />, label: 'Concierge' },
]

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_IMAGE})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-xs tracking-[0.25em] uppercase font-light mb-5 text-white/70"
        >
          Kassiopi &middot; Corfu &middot; Greece
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-['Playfair_Display'] text-5xl md:text-6xl lg:text-7xl font-medium leading-tight mb-6"
        >
          Where the Olive<br />
          Groves Meet the Sea
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-base md:text-lg font-light text-white/80 max-w-xl mx-auto mb-10 leading-relaxed"
        >
          A private villa with pool and sea views, set among ancient olive trees on the
          north-eastern coast of Corfu.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Link
            to="/contact"
            className="px-8 py-3.5 bg-white text-[#1e2d3d] text-xs tracking-widest uppercase font-medium hover:bg-[#f5f0e8] transition-colors"
          >
            Check Availability
          </Link>
          <Link
            to="/villa"
            className="px-8 py-3.5 border border-white/60 text-white text-xs tracking-widest uppercase font-medium hover:border-white transition-colors"
          >
            Explore the Villa
          </Link>
        </motion.div>

        {/* Highlight pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="flex flex-wrap items-center justify-center gap-2"
        >
          {PILLS.map((pill) => (
            <span
              key={pill.label}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-light tracking-wide"
            >
              {pill.icon}
              {pill.label}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="w-px h-8 bg-white/40" />
        <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
      </motion.div>
    </section>
  )
}
