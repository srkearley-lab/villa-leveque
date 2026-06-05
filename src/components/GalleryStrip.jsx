import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { IMAGES } from '../data/images'

const STRIP_IMAGES = [
  { img: IMAGES.pool[0],     flex: 3,   label: 'Pool & Terrace' },
  { img: IMAGES.bedrooms[0], flex: 2,   label: 'Master Bedroom' },
  { img: IMAGES.living[0],   flex: 2.5, label: 'Living Area' },
  { img: IMAGES.dining[0],   flex: 2,   label: 'Outdoor Dining' },
  { img: IMAGES.views[1],    flex: 3,   label: 'Sea Views' },
]

export default function GalleryStrip() {
  return (
    <section className="py-20 md:py-28" style={{ backgroundColor: '#FAF8F4' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

        {/* Heading */}
        <div className="text-center mb-12">
          <p
            className="text-xs tracking-[0.22em] uppercase mb-4"
            style={{ fontFamily: 'Manrope, sans-serif', color: '#C9A96E', fontWeight: 500 }}
          >
            Photography
          </p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-light"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              color: '#1C2B3A',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
            }}
          >
            See the Villa
          </motion.h2>
        </div>

        {/* Horizontal strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="flex gap-2 overflow-x-auto"
          style={{
            height: '400px',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {STRIP_IMAGES.map(({ img, flex, label }) => (
            <div
              key={img.src}
              className="relative overflow-hidden flex-shrink-0 group"
              style={{ flex: flex, minWidth: '180px' }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110 group-hover:scale-[1.03]"
                loading="lazy"
              />
              {/* Label on hover */}
              <div
                className="absolute inset-0 flex items-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: 'linear-gradient(to top, rgba(15,26,36,0.6) 0%, transparent 60%)' }}
              >
                <p
                  className="text-xs tracking-widest uppercase text-white/80"
                  style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 300 }}
                >
                  {label}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="text-center mt-12">
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
  )
}
