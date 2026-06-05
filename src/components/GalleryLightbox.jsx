import { useEffect, useCallback, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { ALL_IMAGES } from '../data/images'

export default function GalleryLightbox({ index, onClose, onPrev, onNext }) {
  const image = ALL_IMAGES[index]
  const [touchStart, setTouchStart] = useState(null)

  const handleKey = useCallback((e) => {
    if (e.key === 'Escape') onClose()
    if (e.key === 'ArrowLeft') onPrev()
    if (e.key === 'ArrowRight') onNext()
  }, [onClose, onPrev, onNext])

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    document.body.classList.add('lightbox-open')
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.classList.remove('lightbox-open')
    }
  }, [handleKey])

  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX)
  const handleTouchEnd = (e) => {
    if (touchStart === null) return
    const delta = touchStart - e.changedTouches[0].clientX
    if (Math.abs(delta) > 48) { delta > 0 ? onNext() : onPrev() }
    setTouchStart(null)
  }

  if (index === null || !image) return null

  const PREVIEW_COUNT = 5
  const half = Math.floor(PREVIEW_COUNT / 2)
  const thumbIndexes = Array.from({ length: PREVIEW_COUNT }, (_, i) => {
    const idx = ((index - half + i) % ALL_IMAGES.length + ALL_IMAGES.length) % ALL_IMAGES.length
    return idx
  })

  return (
    <AnimatePresence>
      <motion.div
        key="lightbox-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-[100] flex flex-col"
        style={{ backgroundColor: 'rgba(8,13,20,0.97)' }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-4 flex-shrink-0"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}
        >
          <div className="flex items-center gap-3">
            <div className="h-px w-6" style={{ backgroundColor: '#C9A96E' }} />
            <p
              className="text-xs tracking-widest uppercase text-white/30"
              style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 300 }}
            >
              Villa Leveque &nbsp;&middot;&nbsp; Gallery
            </p>
          </div>
          <div className="flex items-center gap-4">
            <p
              className="text-xs text-white/25"
              style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 300 }}
            >
              {index + 1} / {ALL_IMAGES.length}
            </p>
            <button
              onClick={onClose}
              aria-label="Close lightbox"
              className="flex items-center justify-center w-9 h-9 transition-all duration-200"
              style={{ border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.4)' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = '#C9A96E'; e.currentTarget.style.color = '#C9A96E' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = 'rgba(255,255,255,0.4)' }}
            >
              <X size={14} />
            </button>
          </div>
        </div>

        {/* Main image area */}
        <div className="flex-1 relative flex items-center justify-center px-4 py-6 min-h-0" onClick={onClose}>
          {/* Nav — prev */}
          <button
            onClick={e => { e.stopPropagation(); onPrev() }}
            aria-label="Previous image"
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-12 h-12 transition-all duration-200"
            style={{ border: '1px solid rgba(255,255,255,0.14)', color: 'rgba(255,255,255,0.5)', backgroundColor: 'rgba(15,26,36,0.4)' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#C9A96E'; e.currentTarget.style.color = '#C9A96E' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)'; e.currentTarget.style.color = 'rgba(255,255,255,0.5)' }}
          >
            <ChevronLeft size={20} />
          </button>

          {/* Image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.975 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.985 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="flex flex-col items-center"
              style={{ maxHeight: '100%' }}
              onClick={e => e.stopPropagation()}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="object-contain"
                style={{
                  maxHeight: 'calc(100vh - 220px)',
                  maxWidth: '100%',
                  boxShadow: '0 32px 100px rgba(0,0,0,0.7)',
                }}
              />
              <div className="flex items-center gap-4 mt-5">
                <div className="h-px w-6 flex-shrink-0" style={{ backgroundColor: '#C9A96E', opacity: 0.6 }} />
                <p
                  className="text-xs text-center"
                  style={{ fontFamily: 'Manrope, sans-serif', color: 'rgba(255,255,255,0.3)', fontWeight: 300, letterSpacing: '0.04em' }}
                >
                  {image.alt}
                </p>
                <div className="h-px w-6 flex-shrink-0" style={{ backgroundColor: '#C9A96E', opacity: 0.6 }} />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav — next */}
          <button
            onClick={e => { e.stopPropagation(); onNext() }}
            aria-label="Next image"
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 flex items-center justify-center w-12 h-12 transition-all duration-200"
            style={{ border: '1px solid rgba(255,255,255,0.14)', color: 'rgba(255,255,255,0.5)', backgroundColor: 'rgba(15,26,36,0.4)' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#C9A96E'; e.currentTarget.style.color = '#C9A96E' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.14)'; e.currentTarget.style.color = 'rgba(255,255,255,0.5)' }}
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Thumbnail strip */}
        <div
          className="flex-shrink-0 flex items-center justify-center gap-2 px-6 py-4"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          {thumbIndexes.map((thumbIdx) => (
            <button
              key={thumbIdx}
              onClick={() => {
                if (thumbIdx < index) {
                  const steps = (index - thumbIdx + ALL_IMAGES.length) % ALL_IMAGES.length
                  for (let i = 0; i < steps; i++) onPrev()
                } else if (thumbIdx > index) {
                  const steps = (thumbIdx - index + ALL_IMAGES.length) % ALL_IMAGES.length
                  for (let i = 0; i < steps; i++) onNext()
                }
              }}
              className="flex-shrink-0 overflow-hidden transition-all duration-200"
              style={{
                width: thumbIdx === index ? 56 : 44,
                height: thumbIdx === index ? 40 : 32,
                opacity: thumbIdx === index ? 1 : 0.38,
                border: thumbIdx === index ? '1px solid #C9A96E' : '1px solid transparent',
              }}
            >
              <img
                src={ALL_IMAGES[thumbIdx].src}
                alt=""
                aria-hidden="true"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
