import { useState } from 'react'
import GalleryGrid from '../components/GalleryGrid'
import GalleryLightbox from '../components/GalleryLightbox'
import { ALL_IMAGES } from '../data/images'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const total = ALL_IMAGES.length

  const handlePrev = () => setLightboxIndex(i => (i === 0 ? total - 1 : i - 1))
  const handleNext = () => setLightboxIndex(i => (i === total - 1 ? 0 : i + 1))

  return (
    <>
      {/* Page header */}
      <section
        className="pt-36 pb-14 text-center"
        style={{ backgroundColor: '#FAF8F4' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p
            className="text-xs tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: 'Manrope, sans-serif', color: '#C9A96E', fontWeight: 500 }}
          >
            Photography
          </p>
          <h1
            className="text-5xl md:text-6xl font-light mb-5"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: '#1C2B3A', fontStyle: 'italic' }}
          >
            Gallery
          </h1>
          <p
            className="text-sm font-light max-w-md mx-auto leading-relaxed"
            style={{ fontFamily: 'Manrope, sans-serif', color: '#6B7C5C', fontWeight: 300 }}
          >
            Browse all {total} photographs of Villa Leveque — from the pool and terraces to
            the bedrooms and surrounding Kassiopi landscape.
          </p>
        </div>
      </section>

      {/* Gallery */}
      <section className="pb-24 md:pb-32" style={{ backgroundColor: '#FAF8F4' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <GalleryGrid onImageClick={setLightboxIndex} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center" style={{ backgroundColor: '#1C2B3A' }}>
        <div className="max-w-xl mx-auto px-6">
          <div className="w-8 h-px mx-auto mb-8" style={{ backgroundColor: '#C9A96E' }} />
          <h2
            className="text-3xl md:text-4xl font-light mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: '#FAF8F4' }}
          >
            Like What You See?
          </h2>
          <p
            className="text-sm font-light mb-10 leading-relaxed"
            style={{ fontFamily: 'Manrope, sans-serif', color: 'rgba(250,248,244,0.5)', fontWeight: 300 }}
          >
            Check availability for your preferred dates and we'll take care of the rest.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-9 py-4 text-xs tracking-[0.18em] uppercase font-medium transition-all duration-200"
            style={{
              fontFamily: 'Manrope, sans-serif',
              backgroundColor: '#C9A96E',
              color: '#0F1A24',
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#b8935a'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#C9A96E'}
          >
            Check Availability <ArrowRight size={13} />
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
