import { useState } from 'react'
import GalleryGrid from '../components/GalleryGrid'
import GalleryLightbox from '../components/GalleryLightbox'
import { ALL_IMAGES } from '../data/images'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const total = ALL_IMAGES.length

  const handlePrev = () =>
    setLightboxIndex((i) => (i === 0 ? total - 1 : i - 1))
  const handleNext = () =>
    setLightboxIndex((i) => (i === total - 1 ? 0 : i + 1))

  return (
    <>
      {/* Page header */}
      <section className="pt-32 pb-12 bg-[#fdfcfa] text-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <p className="text-xs tracking-widest uppercase font-medium text-[#b89a6b] mb-3">
            Photography
          </p>
          <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#1e2d3d] mb-4">
            Gallery
          </h1>
          <p className="text-[#6b7a5c] text-sm font-light max-w-md mx-auto">
            Browse all {total} photographs of Villa Leveque — from the pool and terraces to
            the bedrooms and surrounding landscape.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-20 lg:pb-28 bg-[#fdfcfa]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <GalleryGrid onImageClick={setLightboxIndex} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#f5f0e8] text-center">
        <div className="max-w-xl mx-auto px-6">
          <h2 className="font-['Playfair_Display'] text-3xl text-[#1e2d3d] mb-4">
            Like What You See?
          </h2>
          <p className="text-[#6b7a5c] text-sm font-light mb-8">
            Check availability for your preferred dates and we'll take care of the rest.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#1e2d3d] text-white text-xs tracking-widest uppercase font-medium hover:bg-[#2a3e55] transition-colors"
          >
            Check Availability <ArrowRight size={14} />
          </Link>
        </div>
      </section>

      {lightboxIndex !== null && (
        <GalleryLightbox
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </>
  )
}
