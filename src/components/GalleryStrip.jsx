import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import SectionContainer from './SectionContainer'
import { IMAGES } from '../data/images'

const STRIP_IMAGES = [
  { img: IMAGES.pool[0],     label: 'Pool & Terrace' },
  { img: IMAGES.bedrooms[0], label: 'Master Bedroom' },
  { img: IMAGES.living[0],   label: 'Living Area' },
  { img: IMAGES.dining[0],   label: 'Outdoor Dining' },
  { img: IMAGES.views[1],    label: 'Sea Views' },
]

function ImageCell({ img, label, style = {} }) {
  return (
    <div className="relative overflow-hidden group h-full" style={style}>
      <img
        src={img.src}
        alt={img.alt}
        className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-105 group-hover:scale-[1.03]"
        loading="lazy"
      />
      <div
        className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: 'linear-gradient(to top, rgba(15,26,36,0.62) 0%, transparent 60%)' }}
      >
        <p
          className="text-xs tracking-widest uppercase text-white/80"
          style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 300 }}
        >
          {label}
        </p>
      </div>
    </div>
  )
}

export default function GalleryStrip() {
  return (
    <SectionContainer bg="cream" spacing="lg">

      {/* Heading */}
      <div className="text-center mb-10">
        <p
          className="text-xs tracking-[0.22em] uppercase mb-4"
          style={{ fontFamily: 'Manrope, sans-serif', color: '#C9A96E', fontWeight: 500 }}
        >
          Photography
        </p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-light"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: 'italic',
            color: '#1C2B3A',
            fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
          }}
        >
          See the Villa
        </motion.h2>
      </div>

      {/* Desktop: CSS grid — no overflow */}
      <div
        className="hidden md:grid gap-2"
        style={{ gridTemplateColumns: '3fr 2fr 2.5fr 2fr 3fr', height: 420 }}
      >
        {STRIP_IMAGES.map(({ img, label }) => (
          <ImageCell key={img.src} img={img} label={label} />
        ))}
      </div>

      {/* Mobile: horizontal scroll strip */}
      <div
        className="flex gap-2 overflow-x-auto md:hidden"
        style={{ height: 280, scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {STRIP_IMAGES.map(({ img, label }) => (
          <div key={img.src} className="flex-shrink-0 relative" style={{ width: '78vw' }}>
            <ImageCell img={img} label={label} style={{ height: '100%', width: '100%' }} />
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-10">
        <Link
          to="/gallery"
          className="inline-flex items-center gap-3 px-9 py-4 text-xs tracking-[0.18em] uppercase font-medium border transition-all duration-200"
          style={{ fontFamily: 'Manrope, sans-serif', borderColor: '#1C2B3A', color: '#1C2B3A' }}
          onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#1C2B3A'; e.currentTarget.style.color = '#FAF8F4' }}
          onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#1C2B3A' }}
        >
          View Full Gallery <ArrowRight size={13} />
        </Link>
      </div>
    </SectionContainer>
  )
}
