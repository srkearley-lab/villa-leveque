import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import AmenityGroups from '../components/AmenityGroups'
import BookingEngine from '../components/BookingEngine'
import { IMAGES } from '../data/images'

export default function VillaPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMAGES.exterior[0].src})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-14 text-white w-full">
          <p className="text-xs tracking-widest uppercase font-light text-white/60 mb-3">
            Villa Leveque
          </p>
          <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl font-medium">
            Inside the Villa
          </h1>
        </div>
      </section>

      {/* Ground Floor */}
      <section className="py-20 lg:py-28 bg-[#fdfcfa]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs tracking-widest uppercase font-medium text-[#b89a6b] mb-4">
                Ground Floor
              </p>
              <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl text-[#1e2d3d] mb-6">
                Open-Plan Living & Kitchen
              </h2>
              <div className="space-y-4 text-[#6b7a5c] text-sm font-light leading-relaxed">
                <p>
                  The ground floor is conceived as a single, open space where cooking, dining
                  and relaxing naturally flow together. The fully equipped kitchen opens directly
                  into the dining area, which in turn opens onto the terrace through wide glass doors.
                </p>
                <p>
                  The living room is comfortably furnished with a generous sofa, flat-screen
                  television and direct access to the outdoor spaces. The layout is designed so
                  that the terrace feels like an extension of the ground floor rather than a
                  separate space.
                </p>
                <p>
                  A guest WC is located on the ground floor alongside useful utility space
                  including a washing machine and additional storage.
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
              {[IMAGES.living[0], IMAGES.living[2], IMAGES.living[3], IMAGES.living[4]].map((img, i) => (
                <div key={img.src} className="overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* First Floor */}
      <section className="py-20 lg:py-28 bg-[#f5f0e8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1 grid grid-cols-2 gap-4"
            >
              {[IMAGES.bedrooms[0], IMAGES.bedrooms[1], IMAGES.bedrooms[6], IMAGES.bedrooms[3]].map((img) => (
                <div key={img.src} className="overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full aspect-square object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <p className="text-xs tracking-widest uppercase font-medium text-[#b89a6b] mb-4">
                First Floor
              </p>
              <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl text-[#1e2d3d] mb-6">
                Three En-Suite Bedrooms
              </h2>
              <div className="space-y-4 text-[#6b7a5c] text-sm font-light leading-relaxed">
                <p>
                  The first floor is home to three beautifully appointed bedrooms, each with
                  its own private en-suite bathroom, air conditioning and private terrace or
                  balcony access.
                </p>
                <p>
                  The master bedroom faces the sea, offering uninterrupted views towards Albania
                  — a remarkable prospect to wake up to each morning. The two further bedrooms
                  are equally spacious and share equally beautiful outlooks over the gardens and
                  surrounding landscape.
                </p>
                <p>
                  All bedrooms are dressed with crisp white linens, quality towels and everything
                  you need for a comfortable and restful stay.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4">
                {['Master Bedroom', 'Bedroom 2', 'Bedroom 3'].map((label, i) => (
                  <div key={label} className="text-center p-4 border border-[#e8e2d9] bg-white">
                    <p className="text-xs text-[#b89a6b] font-medium mb-1">
                      {label}
                    </p>
                    <p className="text-xs text-[#6b7a5c] font-light">En-suite · A/C</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Outdoor Spaces */}
      <section className="py-20 lg:py-28 bg-[#fdfcfa]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-xs tracking-widest uppercase font-medium text-[#b89a6b] mb-3">
              Outside
            </p>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl text-[#1e2d3d] mb-5">
              Outdoor Spaces
            </h2>
            <p className="text-[#6b7a5c] text-sm font-light max-w-xl mx-auto leading-relaxed">
              At Villa Leveque, outdoor living is central to the experience. The terrace,
              pool and garden are designed for long, sun-drenched days and warm Mediterranean evenings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {[
              {
                img: IMAGES.pool[0],
                title: 'Private Pool',
                desc: 'A generous private pool with a broad stone terrace, sun loungers and open views across the landscape.',
              },
              {
                img: IMAGES.dining[0],
                title: 'Outdoor Dining',
                desc: 'A pergola-shaded dining terrace with seating for eight, perfect for evening meals under the stars.',
              },
              {
                img: IMAGES.pool[2],
                title: 'Terrace & Garden',
                desc: 'Mature olive and bougainvillea gardens surrounding the terrace create natural privacy and beauty.',
              },
            ].map((item) => (
              <div key={item.title} className="group overflow-hidden">
                <div className="overflow-hidden mb-5">
                  <img
                    src={item.img.src}
                    alt={item.img.alt}
                    className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-['Playfair_Display'] text-lg text-[#1e2d3d] mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[#6b7a5c] font-light leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities */}
      <AmenityGroups />

      {/* Booking CTA */}
      <section className="py-20 lg:py-24 bg-[#1e2d3d]">
        <div className="max-w-3xl mx-auto px-6 text-center text-white">
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl mb-4">
            Ready to Book?
          </h2>
          <p className="text-white/60 text-sm font-light mb-10 leading-relaxed">
            Submit your preferred dates and we'll confirm availability and everything you
            need for a perfect stay.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[#1e2d3d] text-xs tracking-widest uppercase font-medium hover:bg-[#f5f0e8] transition-colors"
          >
            Enquire Now <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  )
}
