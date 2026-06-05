import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import GalleryGrid from '../components/GalleryGrid'
import GalleryLightbox from '../components/GalleryLightbox'
import PageHero from '../components/PageHero'
import { ALL_IMAGES, IMAGES } from '../data/images'

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const total = ALL_IMAGES.length

  const handlePrev = () => setLightboxIndex(i => (i === 0 ? total - 1 : i - 1))
  const handleNext = () => setLightboxIndex(i => (i === total - 1 ? 0 : i + 1))

  return (
    <>
      <PageHero
        image={IMAGES.pool[0].src}
        alt="Villa Leveque pool and terrace"
        height="55vh"
        minHeight="400px"
        label="Photography"
        title="Gallery"
        subtitle={`${total} photographs — pool, bedrooms, living areas, views and gardens.`}
      />

      {/* Keyboard hint bar */}
      <div className="py-5 border-b" style={{ backgroundColor: '#FAF8F4', borderColor: '#E8DFD0' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 flex items-center justify-between flex-wrap gap-3">
          <p
            style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.8rem', color: '#9aA090', fontWeight: 300 }}
          >
            Browse all spaces — pool, bedrooms, living areas, views and gardens.
          </p>
          <p
            style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.72rem', color: '#C4B9A8', fontWeight: 300, letterSpacing: '0.06em' }}
          >
            Click to open · Arrow keys to navigate · Esc to close
          </p>
        </div>
      </div>

      {/* Gallery grid */}
      <section className="py-12 md:py-16" style={{ backgroundColor: '#FAF8F4' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <GalleryGrid onImageClick={setLightboxIndex} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center" style={{ backgroundColor: '#1C2B3A' }}>
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
            className="font-light mb-10 leading-relaxed"
            style={{ fontFamily: 'Manrope, sans-serif', color: 'rgba(250,248,244,0.45)', fontWeight: 300, fontSize: '0.9rem' }}
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
