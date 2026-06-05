import { useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { ALL_IMAGES } from '../data/images'

export default function GalleryLightbox({ index, onClose, onPrev, onNext }) {
  const image = ALL_IMAGES[index]

  const handleKey = useCallback(
    (e) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'ArrowRight') onNext()
    },
    [onClose, onPrev, onNext]
  )

  useEffect(() => {
    document.addEventListener('keydown', handleKey)
    document.body.classList.add('lightbox-open')
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.classList.remove('lightbox-open')
    }
  }, [handleKey])

  if (index === null || !image) return null

  const NavBtn = ({ onClick, children, label, side }) => (
    <button
      onClick={onClick}
      aria-label={label}
      className="absolute top-1/2 -translate-y-1/2 z-10 flex items-center justify-center transition-all duration-200"
      style={{
        [side]: '20px',
        width: 44,
        height: 44,
        border: '1px solid rgba(255,255,255,0.2)',
        color: 'rgba(255,255,255,0.6)',
        backgroundColor: 'rgba(15,26,36,0.5)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = '#C9A96E'
        e.currentTarget.style.color = '#C9A96E'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
        e.currentTarget.style.color = 'rgba(255,255,255,0.6)'
      }}
    >
      {children}
    </button>
  )

  return (
    <AnimatePresence>
      <motion.div
        key="lightbox"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        className="fixed inset-0 z-[100] flex items-center justify-center"
        style={{ backgroundColor: 'rgba(10,16,22,0.97)' }}
        onClick={onClose}
      >
        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Close lightbox"
          className="absolute top-5 right-5 z-10 flex items-center justify-center transition-all duration-200"
          style={{
            width: 40,
            height: 40,
            border: '1px solid rgba(255,255,255,0.15)',
            color: 'rgba(255,255,255,0.5)',
            backgroundColor: 'rgba(15,26,36,0.5)',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.borderColor = '#C9A96E'
            e.currentTarget.style.color = '#C9A96E'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
            e.currentTarget.style.color = 'rgba(255,255,255,0.5)'
          }}
        >
          <X size={16} />
        </button>

        <NavBtn onClick={e => { e.stopPropagation(); onPrev() }} label="Previous image" side="left">
          <ChevronLeft size={20} />
        </NavBtn>

        <NavBtn onClick={e => { e.stopPropagation(); onNext() }} label="Next image" side="right">
          <ChevronRight size={20} />
        </NavBtn>

        {/* Image */}
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          onClick={e => e.stopPropagation()}
          className="max-w-5xl w-full mx-auto px-16 flex flex-col items-center"
        >
          <img
            src={image.src}
            alt={image.alt}
            className="max-h-[78vh] max-w-full object-contain block"
            style={{ boxShadow: '0 24px 80px rgba(0,0,0,0.6)' }}
          />

          {/* Caption */}
          <div className="mt-5 flex items-center gap-4">
            <div className="h-px w-8 flex-shrink-0" style={{ backgroundColor: '#C9A96E' }} />
            <p
              className="text-xs text-center"
              style={{
                fontFamily: 'Manrope, sans-serif',
                color: 'rgba(255,255,255,0.35)',
                fontWeight: 300,
                letterSpacing: '0.05em',
              }}
            >
              {image.alt}
            </p>
            <div className="h-px w-8 flex-shrink-0" style={{ backgroundColor: '#C9A96E' }} />
          </div>

          <p
            className="text-xs mt-2"
            style={{
              fontFamily: 'Manrope, sans-serif',
              color: 'rgba(255,255,255,0.2)',
              fontWeight: 300,
            }}
          >
            {index + 1} / {ALL_IMAGES.length}
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
