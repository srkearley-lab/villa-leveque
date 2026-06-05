import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Wifi, Wind, Waves, Utensils, Car, Tv, BedDouble, ShowerHead } from 'lucide-react'
import AmenityGroups from '../components/AmenityGroups'
import { IMAGES } from '../data/images'

const SectionLabel = ({ children }) => (
  <p
    className="text-xs tracking-[0.2em] uppercase mb-5"
    style={{ fontFamily: 'Manrope, sans-serif', color: '#C9A96E', fontWeight: 500 }}
  >
    {children}
  </p>
)

const BodyText = ({ children }) => (
  <p
    className="text-sm leading-relaxed"
    style={{ fontFamily: 'Manrope, sans-serif', color: '#6B7C5C', fontWeight: 300, lineHeight: 1.9 }}
  >
    {children}
  </p>
)

const TABS = ['Ground Floor', 'First Floor', 'Outdoor Spaces']

const SIDEBAR_AMENITIES = [
  { icon: <BedDouble size={13} />, label: '3 en-suite bedrooms' },
  { icon: <Waves size={13} />, label: 'Private pool & terrace' },
  { icon: <Wind size={13} />, label: 'Air conditioning throughout' },
  { icon: <Wifi size={13} />, label: 'High-speed WiFi' },
  { icon: <Utensils size={13} />, label: 'Fully equipped kitchen' },
  { icon: <Car size={13} />, label: 'Private parking' },
  { icon: <Tv size={13} />, label: 'Satellite TV' },
  { icon: <ShowerHead size={13} />, label: 'Outdoor shower' },
]

function GroundFloorContent() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.45 }}
      >
        <SectionLabel>Ground Floor</SectionLabel>
        <h2
          className="text-3xl md:text-4xl font-light mb-8"
          style={{ fontFamily: "'Cormorant Garamond', serif", color: '#1C2B3A' }}
        >
          Open-Plan Living & Kitchen
        </h2>
        <div className="space-y-5">
          <BodyText>
            The ground floor is conceived as a single, open space where cooking, dining and
            relaxing naturally flow together. The fully equipped kitchen opens directly into the
            dining area, which in turn opens onto the terrace through wide glass doors.
          </BodyText>
          <BodyText>
            The living room is comfortably furnished with a generous sofa, flat-screen television
            and direct access to the outdoor spaces. The layout ensures the terrace feels like a
            natural extension of the ground floor.
          </BodyText>
          <BodyText>
            A guest WC is located on the ground floor alongside useful utility space including a
            washing machine and additional storage.
          </BodyText>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.45 }}
        className="grid grid-cols-2 gap-3"
      >
        {[IMAGES.living[0], IMAGES.living[2], IMAGES.living[3], IMAGES.living[4]].map(img => (
          <div key={img.src} className="overflow-hidden">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full aspect-square object-cover hover:scale-[1.04] transition-transform duration-500"
              loading="lazy"
            />
          </div>
        ))}
      </motion.div>
    </div>
  )
}

function FirstFloorContent() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      <motion.div
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.45 }}
        className="order-2 lg:order-1 grid grid-cols-2 gap-3"
      >
        {[IMAGES.bedrooms[0], IMAGES.bedrooms[1], IMAGES.bedrooms[6], IMAGES.bedrooms[3]].map(img => (
          <div key={img.src} className="overflow-hidden">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full aspect-square object-cover hover:scale-[1.04] transition-transform duration-500"
              loading="lazy"
            />
          </div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.45 }}
        className="order-1 lg:order-2"
      >
        <SectionLabel>First Floor</SectionLabel>
        <h2
          className="text-3xl md:text-4xl font-light mb-8"
          style={{ fontFamily: "'Cormorant Garamond', serif", color: '#1C2B3A' }}
        >
          Three En-Suite Bedrooms
        </h2>
        <div className="space-y-5">
          <BodyText>
            The first floor is home to three beautifully appointed bedrooms, each with its own
            private en-suite bathroom, air conditioning and private terrace or balcony access.
          </BodyText>
          <BodyText>
            The master bedroom faces the sea, offering uninterrupted views towards Albania — a
            remarkable prospect to wake up to each morning. The two further bedrooms are equally
            spacious and share equally beautiful outlooks over the gardens and landscape.
          </BodyText>
          <BodyText>
            All bedrooms are dressed with crisp white linens, quality towels and everything
            needed for a comfortable and restful stay.
          </BodyText>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-2">
          {['Master Bedroom', 'Bedroom 2', 'Bedroom 3'].map(label => (
            <div
              key={label}
              className="text-center p-4"
              style={{ border: '1px solid #E8DFD0', backgroundColor: '#FFFFFF' }}
            >
              <p
                className="text-xs mb-1"
                style={{ fontFamily: 'Manrope, sans-serif', color: '#C9A96E', fontWeight: 500 }}
              >
                {label}
              </p>
              <p
                className="text-xs"
                style={{ fontFamily: 'Manrope, sans-serif', color: '#6B7C5C', fontWeight: 300 }}
              >
                En-suite · A/C
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

function OutdoorContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45 }}
    >
      <div className="text-center mb-12">
        <SectionLabel>Outside</SectionLabel>
        <h2
          className="text-3xl md:text-4xl font-light mb-5"
          style={{ fontFamily: "'Cormorant Garamond', serif", color: '#1C2B3A' }}
        >
          Outdoor Spaces
        </h2>
        <p
          className="text-sm max-w-xl mx-auto leading-relaxed"
          style={{ fontFamily: 'Manrope, sans-serif', color: '#6B7C5C', fontWeight: 300, lineHeight: 1.9 }}
        >
          At Villa Leveque, outdoor living is central to the experience. The terrace, pool and garden
          are designed for long, sun-drenched days and warm Mediterranean evenings.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { img: IMAGES.pool[0], title: 'Private Pool', desc: 'A generous private pool with a broad stone terrace, sun loungers and open views across the landscape.' },
          { img: IMAGES.dining[0], title: 'Outdoor Dining', desc: 'A pergola-shaded dining terrace with seating for eight, perfect for evening meals under the stars.' },
          { img: IMAGES.pool[2], title: 'Terrace & Garden', desc: 'Mature olive and bougainvillea gardens surrounding the terrace create natural privacy and beauty.' },
        ].map(item => (
          <div key={item.title} className="group">
            <div className="overflow-hidden mb-4">
              <img
                src={item.img.src}
                alt={item.img.alt}
                className="w-full aspect-[4/3] object-cover group-hover:scale-[1.04] transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <h3
              className="text-xl font-normal mb-2"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: '#1C2B3A' }}
            >
              {item.title}
            </h3>
            <BodyText>{item.desc}</BodyText>
          </div>
        ))}
      </div>
    </motion.div>
  )
}

export default function VillaPage() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden flex items-end" style={{ height: '70vh', minHeight: '480px' }}>
        <img
          src={IMAGES.pool[0].src}
          alt="Villa Leveque pool and terrace"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(15,26,36,0.15) 0%, rgba(15,26,36,0.75) 100%)' }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pb-16 text-white w-full">
          <p
            className="uppercase mb-5 text-white/45"
            style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 300, fontSize: '0.7rem', letterSpacing: '0.32em' }}
          >
            Villa Leveque
          </p>
          <div className="w-10 h-px mb-6" style={{ backgroundColor: '#C9A96E' }} />
          <h1
            className="font-light"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              fontSize: 'clamp(3rem, 7vw, 5.5rem)',
              lineHeight: 1.04,
            }}
          >
            Inside Villa Leveque
          </h1>
        </div>
      </section>

      {/* Tab navigation */}
      <div
        className="sticky top-0 z-30 border-b overflow-x-auto"
        style={{
          backgroundColor: '#FAF8F4',
          borderColor: '#E8DFD0',
          scrollbarWidth: 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="flex items-center gap-0">
            {TABS.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className="relative px-6 py-5 text-xs tracking-[0.15em] uppercase font-medium transition-colors duration-200 whitespace-nowrap flex-shrink-0"
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  color: activeTab === i ? '#1C2B3A' : '#9aA090',
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                {tab}
                {activeTab === i && (
                  <motion.div
                    layoutId="tab-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5"
                    style={{ backgroundColor: '#C9A96E' }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Tab content with sticky sidebar */}
      <section className="py-16 md:py-24" style={{ backgroundColor: '#FAF8F4' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 xl:grid-cols-[1fr_300px] gap-16">

            {/* Main tab content */}
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.18 }}
                >
                  {activeTab === 0 && <GroundFloorContent />}
                  {activeTab === 1 && <FirstFloorContent />}
                  {activeTab === 2 && <OutdoorContent />}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Sticky sidebar — desktop only */}
            <div className="hidden xl:block">
              <div
                className="sticky top-24 p-8"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E8DFD0',
                  boxShadow: '0 4px 24px rgba(28,43,58,0.06)',
                }}
              >
                <div className="w-6 h-px mb-5" style={{ backgroundColor: '#C9A96E' }} />
                <p
                  className="text-xs tracking-[0.18em] uppercase mb-2"
                  style={{ fontFamily: 'Manrope, sans-serif', color: '#C9A96E', fontWeight: 500 }}
                >
                  Villa Leveque
                </p>
                <h3
                  className="text-2xl font-light mb-1"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: '#1C2B3A' }}
                >
                  At a Glance
                </h3>
                <p
                  className="text-xs mb-6"
                  style={{ fontFamily: 'Manrope, sans-serif', color: '#9aA090', fontWeight: 300 }}
                >
                  Kassiopi, Corfu
                </p>

                <div
                  className="mb-6 pb-6"
                  style={{ borderBottom: '1px solid #E8DFD0' }}
                >
                  {[
                    ['Bedrooms', '3 en-suite'],
                    ['Guests', 'Up to 6'],
                    ['Pool', 'Private'],
                    ['Views', 'Sea & garden'],
                  ].map(([key, val]) => (
                    <div key={key} className="flex justify-between items-baseline mb-3">
                      <span
                        className="text-xs"
                        style={{ fontFamily: 'Manrope, sans-serif', color: '#9aA090', fontWeight: 300 }}
                      >
                        {key}
                      </span>
                      <span
                        className="text-xs font-medium"
                        style={{ fontFamily: 'Manrope, sans-serif', color: '#1C2B3A', fontWeight: 500 }}
                      >
                        {val}
                      </span>
                    </div>
                  ))}
                </div>

                <p
                  className="text-xs tracking-[0.12em] uppercase mb-4"
                  style={{ fontFamily: 'Manrope, sans-serif', color: '#6B7C5C', fontWeight: 500 }}
                >
                  Key Amenities
                </p>
                <ul className="space-y-2.5 mb-8">
                  {SIDEBAR_AMENITIES.map(a => (
                    <li
                      key={a.label}
                      className="flex items-center gap-2.5 text-xs"
                      style={{ fontFamily: 'Manrope, sans-serif', color: '#6B7C5C', fontWeight: 300 }}
                    >
                      <span style={{ color: '#C9A96E', flexShrink: 0 }}>{a.icon}</span>
                      {a.label}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 w-full py-3.5 text-xs tracking-[0.18em] uppercase font-medium transition-all duration-200"
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    backgroundColor: '#C9A96E',
                    color: '#0F1A24',
                  }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = '#b8935a'}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = '#C9A96E'}
                >
                  Enquire Now <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Amenities */}
      <AmenityGroups />

      {/* Booking CTA */}
      <section className="py-24 md:py-28 text-white text-center" style={{ backgroundColor: '#1C2B3A' }}>
        <div className="max-w-2xl mx-auto px-6">
          <div className="w-8 h-px mx-auto mb-8" style={{ backgroundColor: '#C9A96E' }} />
          <h2
            className="text-4xl md:text-5xl font-light mb-5"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Ready to Book?
          </h2>
          <p
            className="text-sm font-light mb-10 leading-relaxed"
            style={{ fontFamily: 'Manrope, sans-serif', color: 'rgba(250,248,244,0.5)', fontWeight: 300 }}
          >
            Submit your preferred dates and we'll confirm availability and everything
            you need for a perfect stay.
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
            Enquire Now <ArrowRight size={13} />
          </Link>
        </div>
      </section>
    </>
  )
}
