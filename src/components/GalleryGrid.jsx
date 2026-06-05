import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ALL_IMAGES } from '../data/images'
import { ZoomIn } from 'lucide-react'

const CATEGORIES = [
  { key: 'all',      label: 'All' },
  { key: 'pool',     label: 'Pool & Terrace' },
  { key: 'bedrooms', label: 'Bedrooms' },
  { key: 'living',   label: 'Living Spaces' },
  { key: 'views',    label: 'Views' },
  { key: 'dining',   label: 'Outdoor' },
  { key: 'exterior', label: 'Exterior' },
]

export default function GalleryGrid({ onImageClick, limit }) {
  const [active, setActive] = useState('all')

  const filtered = active === 'all'
    ? (limit ? ALL_IMAGES.slice(0, limit) : ALL_IMAGES)
    : ALL_IMAGES.filter(img => img.category === active).slice(0, limit ?? Infinity)

  return (
    <div>
      {/* Filter bar — underline style */}
      <div
        className="flex flex-wrap items-center justify-center gap-1 mb-4 pb-4"
        style={{ borderBottom: '1px solid #E8DFD0' }}
      >
        {CATEGORIES.map(cat => (
          <button
            key={cat.key}
            onClick={() => setActive(cat.key)}
            className="relative px-4 py-2.5 transition-colors duration-200"
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: '0.72rem',
              fontWeight: active === cat.key ? 500 : 300,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: active === cat.key ? '#1C2B3A' : '#9aA090',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            {cat.label}
            {active === cat.key && (
              <motion.div
                layoutId="filter-underline"
                className="absolute bottom-0 left-3 right-3 h-px"
                style={{ backgroundColor: '#C9A96E' }}
                transition={{ type: 'spring', stiffness: 400, damping: 34 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Count */}
      <p
        className="text-center mb-10"
        style={{
          fontFamily: 'Manrope, sans-serif',
          fontSize: '0.75rem',
          color: '#9aA090',
          fontWeight: 300,
          letterSpacing: '0.08em',
        }}
      >
        {filtered.length} {filtered.length === 1 ? 'photograph' : 'photographs'}
      </p>

      {/* Masonry columns — 3 desktop, 2 tablet, 1 mobile */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((img) => {
            const globalIndex = ALL_IMAGES.indexOf(img)
            return (
              <motion.div
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.26, ease: 'easeOut' }}
                className="break-inside-avoid mb-2 cursor-zoom-in overflow-hidden group relative block"
                onClick={() => onImageClick?.(globalIndex)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full object-cover block transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:brightness-110"
                />

                {/* Hover overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(15,26,36,0.35)' }}
                >
                  <div
                    className="flex items-center justify-center w-10 h-10"
                    style={{ border: '1px solid rgba(201,169,110,0.8)', color: '#C9A96E' }}
                  >
                    <ZoomIn size={14} />
                  </div>
                </div>

                {/* Caption — fades in at bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 px-4 py-3 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-300"
                  style={{ background: 'linear-gradient(to top, rgba(15,26,36,0.88) 0%, transparent 100%)' }}
                >
                  <p
                    className="text-xs text-white/70 leading-snug"
                    style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 300 }}
                  >
                    {img.alt}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </AnimatePresence>
      </div>
    </div>
  )
}
