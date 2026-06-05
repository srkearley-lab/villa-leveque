import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import FeatureCards from '../components/FeatureCards'
import BookingEngine from '../components/BookingEngine'
import ServiceCards from '../components/ServiceCards'
import LocationSection from '../components/LocationSection'
import GalleryGrid from '../components/GalleryGrid'
import GalleryLightbox from '../components/GalleryLightbox'
import { IMAGES } from '../data/images'
import { ArrowRight } from 'lucide-react'

const OUTDOOR_IMAGES = [IMAGES.pool[0], IMAGES.pool[1], IMAGES.dining[0]]

const SectionLabel = ({ children }) => (
  <p
    className="text-xs tracking-[0.2em] uppercase mb-5"
    style={{ fontFamily: 'Manrope, sans-serif', color: '#C9A96E', fontWeight: 500 }}
  >
    {children}
  </p>
)

const GoldDivider = () => (
  <div className="flex justify-center py-16">
    <div className="flex items-center gap-4">
      <div className="w-12 h-px" style={{ backgroundColor: '#E8DFD0' }} />
      <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#C9A96E' }} />
      <div className="w-12 h-px" style={{ backgroundColor: '#E8DFD0' }} />
    </div>
  </div>
)

export default function HomePage() {
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const totalImages = 9

  const handlePrev = () => setLightboxIndex(i => (i === 0 ? totalImages - 1 : i - 1))
  const handleNext = () => setLightboxIndex(i => (i === totalImages - 1 ? 0 : i + 1))

  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* Booking engine — overlapping hero bottom */}
      <div style={{ backgroundColor: '#FAF8F4' }}>
        <div className="max-w-4xl mx-auto px-6 lg:px-10 -mt-16 relative z-20 pb-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <BookingEngine compact />
          </motion.div>
        </div>
      </div>

      {/* 2. Intro */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-20" style={{ backgroundColor: '#FAF8F4' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <SectionLabel>Villa Leveque</SectionLabel>
          <blockquote
            className="text-3xl md:text-4xl font-light leading-snug"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              color: '#1C2B3A',
            }}
          >
            &ldquo;Set among olive and cypress trees with views stretching towards the sea and
            Albania beyond, Villa Leveque is designed for slow mornings, sun-filled afternoons
            and relaxed evenings outdoors.&rdquo;
          </blockquote>
        </div>
      </section>

      <GoldDivider />

      {/* 3. Feature Cards */}
      <FeatureCards />

      <GoldDivider />

      {/* 4. Full booking section */}
      <BookingEngine />

      <GoldDivider />

      {/* 5. The Villa Preview */}
      <section className="py-24 md:py-32" style={{ backgroundColor: '#FAF8F4' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <SectionLabel>Inside</SectionLabel>
            <h2
              className="text-4xl md:text-5xl font-light"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: '#1C2B3A' }}
            >
              The Villa
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                img: IMAGES.living[0],
                label: 'Ground Floor',
                title: 'Open-Plan Living & Dining',
                desc: 'A spacious open-plan kitchen, dining and living area with direct access to the terrace and pool. Designed for effortless indoor-outdoor living.',
              },
              {
                img: IMAGES.bedrooms[0],
                label: 'First Floor',
                title: 'Three En-Suite Bedrooms',
                desc: 'Three beautifully appointed bedrooms, each with its own private bathroom and balcony or terrace access with views over the gardens and sea.',
              },
            ].map(({ img, label, title, desc }) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative overflow-hidden group"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <p
                    className="text-xs tracking-[0.2em] uppercase mb-2 text-white/60"
                    style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 400 }}
                  >
                    {label}
                  </p>
                  <h3
                    className="text-2xl md:text-3xl font-light mb-2"
                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                  >
                    {title}
                  </h3>
                  <p
                    className="text-sm text-white/70 leading-relaxed"
                    style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 300 }}
                  >
                    {desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/villa"
              className="inline-flex items-center gap-2 text-sm font-medium transition-all"
              style={{
                fontFamily: 'Manrope, sans-serif',
                color: '#1C2B3A',
                borderBottom: '1px solid #1C2B3A',
                paddingBottom: 2,
              }}
            >
              Explore the Villa <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      <GoldDivider />

      {/* 6. Outdoor Living */}
      <section className="py-24 md:py-32" style={{ backgroundColor: '#E8DFD0' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionLabel>Outdoor Living</SectionLabel>
              <h2
                className="text-4xl md:text-5xl font-light mb-8"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: '#1C2B3A' }}
              >
                The Pool, Terrace<br />& Garden
              </h2>
              <div className="space-y-5">
                {[
                  `The heart of Villa Leveque is its sun-drenched terrace. The private pool stretches alongside a broad stone deck lined with sun loungers, perfectly positioned to catch the afternoon sun and the prevailing sea breeze.`,
                  `A generous pergola provides dappled shade over the outdoor dining table — ideal for long, unhurried lunches and candlelit dinners beneath the stars. The built-in BBQ sits nearby, ready for evening grills.`,
                  `The garden is planted with mature olive, cypress and bougainvillea, creating a natural sense of seclusion without obscuring the sweeping views across the sea.`,
                ].map((para, i) => (
                  <p
                    key={i}
                    className="text-sm leading-relaxed"
                    style={{ fontFamily: 'Manrope, sans-serif', color: '#6B7C5C', fontWeight: 300, lineHeight: 1.9 }}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-3"
            >
              {OUTDOOR_IMAGES.map((img, i) => (
                <div
                  key={img.src}
                  className={`overflow-hidden ${i === 0 ? 'col-span-2' : ''}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className={`w-full object-cover transition-transform duration-700 hover:scale-[1.04] ${i === 0 ? 'aspect-[16/7]' : 'aspect-square'}`}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. Services — dark navy */}
      <ServiceCards />

      {/* 8. Location */}
      <LocationSection />

      {/* Gold divider */}
      <GoldDivider />

      {/* 9. Gallery Preview */}
      <section className="py-24 md:py-32" style={{ backgroundColor: '#FAF8F4' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <SectionLabel>Photography</SectionLabel>
            <h2
              className="text-4xl md:text-5xl font-light"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: '#1C2B3A' }}
            >
              See the Villa
            </h2>
          </div>

          <GalleryGrid limit={9} onImageClick={setLightboxIndex} />

          <div className="text-center mt-14">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-3 px-9 py-4 text-xs tracking-[0.18em] uppercase font-medium border transition-all duration-200"
              style={{
                fontFamily: 'Manrope, sans-serif',
                borderColor: '#1C2B3A',
                color: '#1C2B3A',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = '#1C2B3A'
                e.currentTarget.style.color = '#FAF8F4'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.color = '#1C2B3A'
              }}
            >
              View Full Gallery <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* 10. Final CTA */}
      <section className="py-28 md:py-36 text-white text-center" style={{ backgroundColor: '#0F1A24' }}>
        <div className="max-w-2xl mx-auto px-6">
          <div className="w-8 h-px mx-auto mb-8" style={{ backgroundColor: '#C9A96E' }} />
          <p
            className="text-xs tracking-[0.25em] uppercase mb-6"
            style={{ fontFamily: 'Manrope, sans-serif', color: 'rgba(255,255,255,0.35)', fontWeight: 300 }}
          >
            Corfu, Greece
          </p>
          <h2
            className="text-5xl md:text-6xl font-light mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic' }}
          >
            Ready to Plan<br />Your Corfu Stay?
          </h2>
          <p
            className="text-sm leading-relaxed mb-12 max-w-md mx-auto"
            style={{ fontFamily: 'Manrope, sans-serif', color: 'rgba(255,255,255,0.45)', fontWeight: 300 }}
          >
            Submit your preferred dates and we'll confirm availability and everything you need
            for a perfect stay at Villa Leveque.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-9 py-4 text-xs tracking-[0.18em] uppercase font-medium transition-all duration-200"
              style={{
                fontFamily: 'Manrope, sans-serif',
                backgroundColor: '#C9A96E',
                color: '#0F1A24',
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#b8935a'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#C9A96E'}
            >
              Enquire Now
            </Link>
            <Link
              to="/gallery"
              className="px-9 py-4 text-xs tracking-[0.18em] uppercase font-light border border-white/20 text-white/60 hover:border-white/50 hover:text-white transition-all duration-200"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              View the Gallery
            </Link>
          </div>
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
