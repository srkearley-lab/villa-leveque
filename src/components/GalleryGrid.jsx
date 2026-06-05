import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ALL_IMAGES } from '../data/images'

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
    : ALL_IMAGES.filter((img) => img.category === active).slice(0, limit || Infinity)

  return (
    <div>
      {/* Filter bar */}
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.key}
            onClick={() => setActive(cat.key)}
            className={`px-4 py-2 text-xs tracking-widest uppercase font-medium transition-all border ${
              active === cat.key
                ? 'bg-[#1e2d3d] text-white border-[#1e2d3d]'
                : 'bg-transparent text-[#6b7a5c] border-[#e8e2d9] hover:border-[#1e2d3d] hover:text-[#1e2d3d]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        <AnimatePresence>
          {filtered.map((img, i) => (
            <motion.div
              key={img.src}
              layout
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.35 }}
              className="break-inside-avoid cursor-pointer overflow-hidden group"
              onClick={() => onImageClick?.(ALL_IMAGES.indexOf(img))}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}
