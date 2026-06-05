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

export default function HomePage() {
  const [lightboxIndex, setLightboxIndex] = useState(null)
  const totalImages = 9

  const handlePrev = () =>
    setLightboxIndex((i) => (i === 0 ? totalImages - 1 : i - 1))
  const handleNext = () =>
    setLightboxIndex((i) => (i === totalImages - 1 ? 0 : i + 1))

  return (
    <>
      {/* 1. Hero */}
      <Hero />

      {/* 2. Intro */}
      <section className="py-20 lg:py-28 bg-[#fdfcfa]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs tracking-widest uppercase font-medium text-[#b89a6b] mb-5">
            Villa Leveque
          </p>
          <p className="font-['Playfair_Display'] text-2xl md:text-3xl text-[#1e2d3d] leading-relaxed font-normal italic">
            &ldquo;Set among olive and cypress trees with views stretching towards the sea and
            Albania beyond, Villa Leveque is designed for slow mornings, sun-filled afternoons
            and relaxed evenings outdoors.&rdquo;
          </p>
        </div>
      </section>

      {/* 3. Feature Cards */}
      <FeatureCards />

      {/* 4. Booking */}
      <BookingEngine />

      {/* 5. The Villa Preview */}
      <section className="py-20 lg:py-28 bg-[#fdfcfa]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs tracking-widest uppercase font-medium text-[#b89a6b] mb-3">Inside</p>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl text-[#1e2d3d]">
              The Villa
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Ground Floor */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative overflow-hidden group"
            >
              <img
                src={IMAGES.living[0].src}
                alt="Ground floor living area"
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <p className="text-xs tracking-widest uppercase font-medium text-white/70 mb-2">
                  Ground Floor
                </p>
                <h3 className="font-['Playfair_Display'] text-2xl mb-2">
                  Open-Plan Living & Dining
                </h3>
                <p className="text-sm text-white/80 font-light leading-relaxed">
                  A spacious open-plan kitchen, dining and living area with direct access to
                  the terrace and pool. Designed for effortless indoor-outdoor living.
                </p>
              </div>
            </motion.div>

            {/* First Floor */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative overflow-hidden group"
            >
              <img
                src={IMAGES.bedrooms[0].src}
                alt="First floor master bedroom"
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <p className="text-xs tracking-widest uppercase font-medium text-white/70 mb-2">
                  First Floor
                </p>
                <h3 className="font-['Playfair_Display'] text-2xl mb-2">
                  Three En-Suite Bedrooms
                </h3>
                <p className="text-sm text-white/80 font-light leading-relaxed">
                  Three beautifully appointed bedrooms, each with its own private bathroom
                  and balcony or terrace access with views over the gardens and sea.
                </p>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-10">
            <Link
              to="/villa"
              className="inline-flex items-center gap-2 text-sm text-[#1e2d3d] border-b border-[#1e2d3d] pb-0.5 hover:gap-3 transition-all font-medium"
            >
              Explore the Villa <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. Outdoor Living */}
      <section className="py-20 lg:py-28 bg-[#f5f0e8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs tracking-widest uppercase font-medium text-[#b89a6b] mb-4">
                Outdoor Living
              </p>
              <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl text-[#1e2d3d] mb-6">
                The Pool, Terrace<br />& Garden
              </h2>
              <div className="space-y-4 text-[#6b7a5c] text-sm font-light leading-relaxed">
                <p>
                  The heart of Villa Leveque is its sun-drenched terrace. The private pool
                  stretches alongside a broad stone deck lined with sun loungers, perfectly
                  positioned to catch the afternoon sun and the prevailing sea breeze.
                </p>
                <p>
                  A generous pergola provides dappled shade over the outdoor dining table — ideal
                  for long, unhurried lunches and candlelit dinners beneath the stars. The built-in
                  BBQ sits nearby, ready for evening grills.
                </p>
                <p>
                  The garden is planted with mature olive, cypress and bougainvillea, creating
                  a natural sense of seclusion without obscuring the sweeping views across the sea.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {OUTDOOR_IMAGES.map((img, i) => (
                <div
                  key={img.src}
                  className={`overflow-hidden ${i === 0 ? 'col-span-2' : ''}`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className={`w-full object-cover ${i === 0 ? 'aspect-[16/7]' : 'aspect-square'}`}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 7. Services */}
      <ServiceCards />

      {/* 8. Location */}
      <LocationSection />

      {/* 9. Gallery Preview */}
      <section className="py-20 lg:py-28 bg-[#f5f0e8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs tracking-widest uppercase font-medium text-[#b89a6b] mb-3">
              Gallery
            </p>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl text-[#1e2d3d]">
              See the Villa
            </h2>
          </div>

          <GalleryGrid limit={9} onImageClick={setLightboxIndex} />

          <div className="text-center mt-12">
            <Link
              to="/gallery"
              className="inline-flex items-center gap-2 px-8 py-3.5 border border-[#1e2d3d] text-[#1e2d3d] text-xs tracking-widest uppercase font-medium hover:bg-[#1e2d3d] hover:text-white transition-all"
            >
              View Full Gallery <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* 10. Final CTA */}
      <section className="py-24 lg:py-32 bg-[#1e2d3d] text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-xs tracking-widest uppercase font-light text-white/50 mb-5">
            Corfu, Greece
          </p>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl mb-6 font-medium">
            Ready to Plan Your<br />Corfu Stay?
          </h2>
          <p className="text-white/60 text-sm font-light leading-relaxed mb-10 max-w-md mx-auto">
            Submit your preferred dates and we'll confirm availability and everything you need
            to know for a perfect stay at Villa Leveque.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-3.5 bg-white text-[#1e2d3d] text-xs tracking-widest uppercase font-medium hover:bg-[#f5f0e8] transition-colors"
            >
              Enquire Now
            </Link>
            <Link
              to="/gallery"
              className="px-8 py-3.5 border border-white/30 text-white/80 text-xs tracking-widest uppercase font-medium hover:border-white hover:text-white transition-colors"
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
