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

  return (
    <AnimatePresence>
      <motion.div
        key="lightbox"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center"
        onClick={onClose}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-white/70 hover:text-white p-2 transition-colors"
          aria-label="Close lightbox"
        >
          <X size={28} />
        </button>

        {/* Prev */}
        <button
          onClick={(e) => { e.stopPropagation(); onPrev() }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 text-white/70 hover:text-white p-2 transition-colors"
          aria-label="Previous image"
        >
          <ChevronLeft size={36} />
        </button>

        {/* Next */}
        <button
          onClick={(e) => { e.stopPropagation(); onNext() }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 text-white/70 hover:text-white p-2 transition-colors"
          aria-label="Next image"
        >
          <ChevronRight size={36} />
        </button>

        {/* Image */}
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={(e) => e.stopPropagation()}
          className="max-w-5xl max-h-[85vh] mx-auto px-16"
        >
          <img
            src={image.src}
            alt={image.alt}
            className="max-h-[80vh] max-w-full object-contain mx-auto block"
          />
          <p className="text-white/40 text-xs text-center mt-4 tracking-wide">
            {index + 1} / {ALL_IMAGES.length} — {image.alt}
          </p>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
