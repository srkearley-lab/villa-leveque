import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ALL_IMAGES } from '../data/images'
import { ZoomIn } from 'lucide-react'

const CATEGORIES = [
  { key: 'all', label: 'All' },
  { key: 'pool', label: 'Pool & Terrace' },
  { key: 'bedrooms', label: 'Bedrooms' },
  { key: 'living', label: 'Living Spaces' },
  { key: 'views', label: 'Views' },
  { key: 'dining', label: 'Outdoor Dining' },
  { key: 'exterior', label: 'Exterior' },
]

export default function GalleryGrid({ onImageClick, limit }) {
  const [active, setActive] = useState('all')

  const filtered = active === 'all'
    ? (limit ? ALL_IMAGES.slice(0, limit) : ALL_IMAGES)
    : ALL_IMAGES.filter(img => img.category === active).slice(0, limit || Infinity)

  return (
    <div>
      {/* Filter bar */}
      <div className="flex flex-wrap gap-2 justify-center mb-12">
        {CATEGORIES.map(cat => (
          <button
            key={cat.key}
            onClick={() => setActive(cat.key)}
            className="px-5 py-2 text-xs tracking-[0.15em] uppercase transition-all duration-200"
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontWeight: active === cat.key ? 500 : 400,
              backgroundColor: active === cat.key ? '#1C2B3A' : 'transparent',
              color: active === cat.key ? '#FAF8F4' : '#6B7C5C',
              border: `1px solid ${active === cat.key ? '#1C2B3A' : '#E8DFD0'}`,
            }}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Masonry grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 space-y-3">
        <AnimatePresence>
          {filtered.map((img) => (
            <motion.div
              key={img.src}
              layout
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3 }}
              className="break-inside-avoid cursor-pointer overflow-hidden group relative"
              onClick={() => onImageClick?.(ALL_IMAGES.indexOf(img))}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full object-cover block transition-transform duration-700 group-hover:scale-[1.04]"
              />

              {/* Gold hover overlay */}
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: 'rgba(201,169,110,0.18)' }}
              >
                <div
                  className="w-10 h-10 flex items-center justify-center border border-white/60 rounded-full"
                  style={{ backgroundColor: 'rgba(15,26,36,0.35)' }}
                >
                  <ZoomIn size={16} color="white" />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
