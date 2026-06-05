import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ZoomIn } from 'lucide-react'
import { ALL_IMAGES } from '../data/images'

const CATEGORIES = [
  { key: 'all',      label: 'All Spaces'    },
  { key: 'pool',     label: 'Pool & Terrace' },
  { key: 'bedrooms', label: 'Bedrooms'       },
  { key: 'living',   label: 'Living'         },
  { key: 'views',    label: 'Views'          },
  { key: 'dining',   label: 'Outdoor'        },
  { key: 'exterior', label: 'Exterior'       },
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
      <div className="overflow-x-auto mb-10" style={{ scrollbarWidth: 'none' }}>
        <div className="flex items-center justify-start md:justify-center gap-0 pb-5 min-w-max md:min-w-0" style={{ borderBottom: '1px solid #E8DFD0' }}>
          {CATEGORIES.map(cat => (
            <button
              key={cat.key}
              onClick={() => setActive(cat.key)}
              className="relative px-5 py-2.5 whitespace-nowrap flex-shrink-0 transition-colors duration-200"
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: '0.7rem',
                fontWeight: active === cat.key ? 500 : 300,
                letterSpacing: '0.2em',
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
                  className="absolute bottom-0 left-4 right-4 h-px"
                  style={{ backgroundColor: '#C9A96E' }}
                  transition={{ type: 'spring', stiffness: 420, damping: 36 }}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* ─── Count + hint ─── */}
      <div className="flex items-center justify-between mb-8">
        <p
          style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.73rem', color: '#C4B9A8', fontWeight: 300, letterSpacing: '0.06em' }}
        >
          {filtered.length} {filtered.length === 1 ? 'photograph' : 'photographs'}
        </p>
        <p
          className="hidden sm:block"
          style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.68rem', color: '#C4B9A8', fontWeight: 300, letterSpacing: '0.06em' }}
        >
          Click to open &nbsp;&middot;&nbsp; Arrow keys to navigate &nbsp;&middot;&nbsp; Esc to close
        </p>
      </div>

      {/* ─── Editorial grid ─── */}
      {/* Fixed aspect-[3/2] on every cell: consistent row heights, elegant crop, no random gaps */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.22 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3"
        >
          {filtered.map((img) => {
            const globalIndex = ALL_IMAGES.indexOf(img)
            return (
              <div
                key={img.src}
                className="relative overflow-hidden group cursor-zoom-in"
                style={{ aspectRatio: '3 / 2' }}
                onClick={() => onImageClick?.(globalIndex)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                />

                {/* Hover overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: 'rgba(15,26,36,0.28)' }}
                />

                {/* ZoomIn icon — centres on hover */}
                <div
                  className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100"
                >
                  <div
                    className="flex items-center justify-center"
                    style={{
                      width: 40,
                      height: 40,
                      border: '1px solid rgba(201,169,110,0.75)',
                      color: '#C9A96E',
                    }}
                  >
                    <ZoomIn size={14} />
                  </div>
                </div>

                {/* Caption — slides in from bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 px-4 py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                  style={{ background: 'linear-gradient(to top, rgba(15,26,36,0.82) 0%, transparent 100%)' }}
                >
                  <p
                    style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.72rem', color: 'rgba(255,255,255,0.65)', fontWeight: 300, lineHeight: 1.4 }}
                  >
                    {img.alt}
                  </p>
                </div>
              </div>
            )
          })}
        </motion.div>
      </AnimatePresence>

      {/* Empty state */}
      {filtered.length === 0 && (
        <p
          className="text-center py-16"
          style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.85rem', color: '#C4B9A8', fontWeight: 300 }}
        >
          No photographs in this category.
        </p>
      )}
    </div>
  )
}
