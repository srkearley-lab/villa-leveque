import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
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

export default function VillaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[65vh] min-h-[460px] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMAGES.exterior[0].src})` }}
        />
        <div className="absolute inset-0" style={{ background: 'rgba(15,26,36,0.5)' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-16 text-white w-full">
          <p
            className="text-xs tracking-[0.25em] uppercase mb-4 text-white/50"
            style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 300 }}
          >
            Villa Leveque
          </p>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-light"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic' }}
          >
            Inside the Villa
          </h1>
        </div>
      </section>

      {/* Ground Floor */}
      <section className="py-24 md:py-32" style={{ backgroundColor: '#FAF8F4' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionLabel>Ground Floor</SectionLabel>
              <h2
                className="text-4xl md:text-5xl font-light mb-8"
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
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-3"
            >
              {[IMAGES.living[0], IMAGES.living[2], IMAGES.living[3], IMAGES.living[4]].map(img => (
                <div key={img.src} className="overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full aspect-square object-cover hover:scale-[1.04] transition-transform duration-500"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* First Floor */}
      <section className="py-24 md:py-32" style={{ backgroundColor: '#E8DFD0' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1 grid grid-cols-2 gap-3"
            >
              {[IMAGES.bedrooms[0], IMAGES.bedrooms[1], IMAGES.bedrooms[6], IMAGES.bedrooms[3]].map(img => (
                <div key={img.src} className="overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full aspect-square object-cover hover:scale-[1.04] transition-transform duration-500"
                  />
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <SectionLabel>First Floor</SectionLabel>
              <h2
                className="text-4xl md:text-5xl font-light mb-8"
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

              <div className="mt-10 grid grid-cols-3 gap-3">
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
        </div>
      </section>

      {/* Outdoor Spaces */}
      <section className="py-24 md:py-32" style={{ backgroundColor: '#FAF8F4' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <SectionLabel>Outside</SectionLabel>
            <h2
              className="text-4xl md:text-5xl font-light mb-6"
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
                <div className="overflow-hidden mb-5">
                  <img
                    src={item.img.src}
                    alt={item.img.alt}
                    className="w-full aspect-[4/3] object-cover group-hover:scale-[1.04] transition-transform duration-500"
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
