import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ZoomIn } from 'lucide-react'
import { ALL_IMAGES } from '../data/images'

const CATEGORIES = [
  { key: 'all',      label: 'All'          },
  { key: 'pool',     label: 'Pool & Terrace' },
  { key: 'bedrooms', label: 'Bedrooms'     },
  { key: 'living',   label: 'Living'       },
  { key: 'views',    label: 'Views'        },
  { key: 'dining',   label: 'Outdoor'      },
  { key: 'exterior', label: 'Exterior'     },
]

export default function GalleryGrid({ onImageClick, limit }) {
  const [active, setActive] = useState('all')

  const filtered = (
    active === 'all'
      ? ALL_IMAGES
      : ALL_IMAGES.filter(img => img.category === active)
  ).slice(0, limit ?? Infinity)

  return (
    <div>
      {/* ─── Filter bar ─── */}
      <div className="overflow-x-auto mb-10 no-scrollbar" style={{ borderBottom: '1px solid #E8DFD0' }}>
        <div className="flex items-center justify-start md:justify-center gap-1 pb-0 min-w-max md:min-w-0">
          {CATEGORIES.map(cat => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className="relative px-5 py-4 whitespace-nowrap flex-shrink-0 transition-colors duration-200"
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: '0.75rem',
                fontWeight: active === cat.key ? 600 : 400,
                letterSpacing: '0.14em',
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
                  layoutId="gallery-filter"
                  className="absolute bottom-0 left-4 right-4 h-[2px]"
                  style={{ backgroundColor: '#C9A96E' }}
                  transition={{ type: 'spring', stiffness: 400, damping: 34 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ─── Count ─── */}
      <div className="flex items-center justify-between mb-8">
        <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.8125rem', color: '#C4B9A8', fontWeight: 400 }}>
          {filtered.length} {filtered.length === 1 ? 'photograph' : 'photographs'}
        </p>
        <p className="hidden sm:block" style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.75rem', color: '#C4B9A8', fontWeight: 300 }}>
          Click to open · Arrow keys to navigate · Esc to close
        </p>
      </div>

      {/* ─── Editorial grid — 3-col desktop, 2-col tablet, 1-col mobile ─── */}
      {/* Fixed aspect-ratio cells ensure consistent row heights (no masonry chaos) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5"
        >
          {filtered.map((img) => {
            const globalIndex = ALL_IMAGES.indexOf(img)
            return (
              <div
                key={img.src}
                className="relative overflow-hidden group cursor-zoom-in"
                style={{ aspectRatio: '4 / 3' }}
                onClick={() => onImageClick?.(globalIndex)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />

                {/* Dark hover overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: 'rgba(15,26,36,0.25)' }}
                />

                {/* Zoom icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100">
                  <div
                    className="flex items-center justify-center"
                    style={{ width: 44, height: 44, border: '1px solid rgba(201,169,110,0.8)', color: '#C9A96E' }}
                  >
                    <ZoomIn size={16} />
                  </div>
                </div>

                {/* Caption */}
                <div
                  className="absolute bottom-0 left-0 right-0 px-5 py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                  style={{ background: 'linear-gradient(to top, rgba(15,26,36,0.85) 0%, transparent 100%)' }}
                >
                  <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.8125rem', color: 'rgba(255,255,255,0.75)', fontWeight: 300 }}>
                    {img.alt}
                  </p>
                </div>
              </div>
            )
          })}
        </motion.div>
      </AnimatePresence>

      {filtered.length === 0 && (
        <p className="text-center py-20" style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.9375rem', color: '#C4B9A8', fontWeight: 300 }}>
          No photographs in this category.
        </p>
      )}
    </div>
  )
}
