import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import GalleryGrid      from '../components/GalleryGrid'
import GalleryLightbox  from '../components/GalleryLightbox'
import PageHero         from '../components/PageHero'
import SectionContainer from '../components/SectionContainer'
import CTAButton        from '../components/CTAButton'
import { ALL_IMAGES, IMAGES } from '../data/images'

const CATEGORY_PREVIEWS = [
  { img: IMAGES.pool[0],     label: 'Pool & Terrace', count: 5  },
  { img: IMAGES.bedrooms[0], label: 'Bedrooms',       count: 11 },
  { img: IMAGES.living[0],   label: 'Living Areas',   count: 8  },
  { img: IMAGES.views[0],    label: 'Views & Aerial', count: 5  },
]

export default function GalleryPage() {
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const total = ALL_IMAGES.length

  const handlePrev = () => setLightboxIndex(i => (i === 0 ? total - 1 : i - 1))
  const handleNext = () => setLightboxIndex(i => (i === total - 1 ? 0 : i + 1))

  return (
    <>
      {/* Hero */}
      <PageHero
        image={IMAGES.views[0].src}
        alt="Aerial view of Villa Leveque, Kassiopi, Corfu"
        height="60vh"
        minHeight="420px"
        label="Photography"
        title="Gallery"
        subtitle={`${total} photographs — pool, bedrooms, living areas, views and gardens.`}
      />

      {/* Category preview */}
      <SectionContainer bg="white" spacing="sm">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {CATEGORY_PREVIEWS.map(({ img, label, count }) => (
            <div key={label} className="relative overflow-hidden group cursor-pointer" style={{ aspectRatio: '3 / 2' }}>
              <img
                src={img.src}
                alt={label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
                loading="eager"
              />
              <div
                className="absolute inset-0 flex flex-col items-start justify-end p-4"
                style={{ background: 'linear-gradient(to top, rgba(15,26,36,0.7) 0%, transparent 60%)' }}
              >
                <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.78rem', color: '#FAF8F4', fontWeight: 500, letterSpacing: '0.06em' }}>
                  {label}
                </p>
                <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.65rem', color: 'rgba(250,248,244,0.55)', fontWeight: 300, marginTop: 2 }}>
                  {count} photos
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Instruction bar */}
      <div style={{ backgroundColor: '#FAF8F4', borderBottom: '1px solid #E8DFD0' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-4 flex items-center justify-between gap-4">
          <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.78rem', color: '#9aA090', fontWeight: 300 }}>
            Filter by room type using the tabs below, or browse the full collection.
          </p>
          <p
            className="hidden md:block flex-shrink-0"
            style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.68rem', color: '#C4B9A8', fontWeight: 300, letterSpacing: '0.06em' }}
          >
            Click any image to open fullscreen
          </p>
        </div>
      </div>

      {/* Gallery grid */}
      <SectionContainer bg="cream" spacing="md">
        <GalleryGrid onImageClick={setLightboxIndex} />
      </SectionContainer>

      {/* CTA */}
      <SectionContainer bg="navy" spacing="lg">
        <div className="text-center">
          <div className="w-8 h-px mx-auto mb-8" style={{ backgroundColor: '#C9A96E' }} />
          <p
            className="uppercase mb-4"
            style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.68rem', color: '#C9A96E', fontWeight: 500, letterSpacing: '0.26em' }}
          >
            Availability
          </p>
          <h2
            className="font-light mb-5"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 4vw, 3.25rem)', color: '#FAF8F4', fontWeight: 300 }}
          >
            Like What You See?
          </h2>
          <p
            className="mb-10 mx-auto"
            style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.9rem', color: 'rgba(250,248,244,0.45)', fontWeight: 300, lineHeight: 1.9, maxWidth: '40ch' }}
          >
            Check availability for your preferred dates and we'll take care of the rest.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton variant="primary" size="lg" to="/contact">
              Check Availability <ArrowRight size={13} />
            </CTAButton>
            <CTAButton variant="outline-light" size="lg" to="/villa">
              Explore the Villa
            </CTAButton>
          </div>
        </div>
      </SectionContainer>

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
