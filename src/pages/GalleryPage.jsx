import { useState } from 'react'
import GalleryGrid from '../components/GalleryGrid'
import GalleryLightbox from '../components/GalleryLightbox'
import { ALL_IMAGES, IMAGES } from '../data/images'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const total = ALL_IMAGES.length

  const handlePrev = () => setLightboxIndex(i => (i === 0 ? total - 1 : i - 1))
  const handleNext = () => setLightboxIndex(i => (i === total - 1 ? 0 : i + 1))

  return (
    <>
      {/* Cinematic header with hero image */}
      <section className="relative flex items-end overflow-hidden" style={{ minHeight: '52vh' }}>
        <img
          src={IMAGES.pool[0].src}
          alt="Villa Leveque pool and terrace"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(10,18,28,0.25) 0%, rgba(10,18,28,0.78) 100%)',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-16 w-full text-white">
          <p
            className="text-xs tracking-[0.28em] uppercase mb-5 text-white/45"
            style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 300 }}
          >
            Photography
          </p>
          <div className="w-8 h-px mb-7" style={{ backgroundColor: '#C9A96E' }} />
          <div className="flex items-end gap-8 flex-wrap">
            <h1
              className="font-light"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: 'italic',
                fontSize: 'clamp(3rem, 7vw, 5.5rem)',
                lineHeight: 1.04,
              }}
            >
              Gallery
            </h1>
            <p
              className="text-sm pb-2 text-white/45"
              style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 300 }}
            >
              {total} photographs
            </p>
          </div>
        </div>
      </section>

      {/* Intro line */}
      <div
        className="py-8 border-b"
        style={{ backgroundColor: '#FAF8F4', borderColor: '#E8DFD0' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <p
            className="text-sm"
            style={{ fontFamily: 'Manrope, sans-serif', color: '#9aA090', fontWeight: 300 }}
          >
            Browse all photographs of Villa Leveque — pool and terraces, bedrooms, living spaces, views and exterior.
            Click any image to view full-screen. Use arrow keys to navigate.
          </p>
        </div>
      </div>

      {/* Gallery */}
      <section className="py-16 md:py-20" style={{ backgroundColor: '#FAF8F4' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <GalleryGrid onImageClick={setLightboxIndex} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center" style={{ backgroundColor: '#1C2B3A' }}>
        <div className="max-w-xl mx-auto px-6">
          <div className="w-8 h-px mx-auto mb-10" style={{ backgroundColor: '#C9A96E' }} />
          <h2
            className="font-light mb-5"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              color: '#FAF8F4',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
            }}
          >
            Like What You See?
          </h2>
          <p
            className="text-sm font-light mb-10 leading-relaxed"
            style={{ fontFamily: 'Manrope, sans-serif', color: 'rgba(250,248,244,0.45)', fontWeight: 300 }}
          >
            Check availability for your preferred dates and we'll take care of the rest.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-4 text-xs tracking-[0.2em] uppercase font-medium transition-all duration-200 min-h-[52px]"
            style={{ fontFamily: 'Manrope, sans-serif', backgroundColor: '#C9A96E', color: '#0F1A24' }}
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
