import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ALL_IMAGES } from '../data/images'
import { Maximize2 } from 'lucide-react'

const CATEGORIES = [
  { key: 'all',      label: 'All Photos' },
  { key: 'pool',     label: 'Pool & Terrace' },
  { key: 'bedrooms', label: 'Bedrooms' },
  { key: 'living',   label: 'Living Spaces' },
  { key: 'views',    label: 'Views' },
  { key: 'dining',   label: 'Outdoor Dining' },
  { key: 'exterior', label: 'Exterior' },
]

export default function GalleryGrid({ onImageClick, limit }) {
  const [active, setActive] = useState('all')

  const filtered = active === 'all'
    ? (limit ? ALL_IMAGES.slice(0, limit) : ALL_IMAGES)
    : ALL_IMAGES.filter(img => img.category === active).slice(0, limit ?? Infinity)

  return (
    <div>
      {/* Filter bar — editorial pill style */}
      <div className="flex flex-wrap gap-1.5 justify-center mb-14">
        {CATEGORIES.map(cat => (
          <button
            key={cat.key}
            onClick={() => setActive(cat.key)}
            className="relative px-5 py-2.5 text-xs transition-all duration-200 overflow-hidden"
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontWeight: active === cat.key ? 500 : 300,
              letterSpacing: active === cat.key ? '0.12em' : '0.1em',
              backgroundColor: active === cat.key ? '#1C2B3A' : 'transparent',
              color: active === cat.key ? '#FAF8F4' : '#6B7C5C',
              border: `1px solid ${active === cat.key ? '#1C2B3A' : 'rgba(107,124,92,0.3)'}`,
              textTransform: 'uppercase',
            }}
          >
            {cat.label}
            {active === cat.key && (
              <motion.span
                layoutId="filter-pill"
                className="absolute inset-0 -z-10"
                style={{ backgroundColor: '#1C2B3A' }}
                transition={{ type: 'spring', stiffness: 380, damping: 32 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Count */}
      <p
        className="text-center text-xs mb-10"
        style={{
          fontFamily: 'Manrope, sans-serif',
          color: '#9aA090',
          fontWeight: 300,
          letterSpacing: '0.08em',
        }}
      >
        {filtered.length} {filtered.length === 1 ? 'photograph' : 'photographs'}
      </p>

      {/* Masonry grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-2 space-y-2">
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
                transition={{ duration: 0.28, ease: 'easeOut' }}
                className="break-inside-avoid cursor-pointer overflow-hidden group relative block"
                onClick={() => onImageClick?.(globalIndex)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full object-cover block transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />

                {/* Hover overlay */}
                <div
                  className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-350"
                  style={{ backgroundColor: 'rgba(15,26,36,0.42)' }}
                >
                  <div
                    className="w-11 h-11 flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-100 scale-90"
                    style={{ border: '1px solid rgba(201,169,110,0.7)', color: '#C9A96E' }}
                  >
                    <Maximize2 size={15} />
                  </div>
                </div>

                {/* Caption strip */}
                <div
                  className="absolute bottom-0 left-0 right-0 px-4 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                  style={{ background: 'linear-gradient(to top, rgba(15,26,36,0.85), transparent)' }}
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
