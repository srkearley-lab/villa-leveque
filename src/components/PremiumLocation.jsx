import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Clock, Anchor, Utensils, Plane, Waves } from 'lucide-react'

const FACTS = [
  { icon: <Clock size={14} />, label: '10 min walk', detail: 'to Kassiopi harbour & village' },
  { icon: <Waves size={14} />, label: '5 min drive', detail: 'to Kassiopi beach' },
  { icon: <Anchor size={14} />, label: '15 min drive', detail: 'to Nissaki cove' },
  { icon: <Plane size={14} />, label: '45 min drive', detail: 'from Corfu Airport' },
  { icon: <Utensils size={14} />, label: '5 restaurants', detail: 'within walking distance' },
  { icon: <MapPin size={14} />, label: 'North-east Corfu', detail: 'unspoilt coastline' },
]

export default function PremiumLocation() {
  return (
    <section
      className="py-24 md:py-32"
      style={{ backgroundColor: '#1C2B3A' }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="text-xs tracking-[0.22em] uppercase mb-5"
              style={{ fontFamily: 'Manrope, sans-serif', color: '#C9A96E', fontWeight: 500 }}
            >
              Location
            </p>
            <h2
              className="text-4xl md:text-5xl font-light leading-tight mb-7"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: 'italic',
                color: '#FAF8F4',
              }}
            >
              Above Kassiopi,<br />North-East Corfu
            </h2>
            <p
              className="text-sm leading-relaxed mb-8"
              style={{
                fontFamily: 'Manrope, sans-serif',
                color: 'rgba(250,248,244,0.55)',
                fontWeight: 300,
                lineHeight: 1.9,
              }}
            >
              Villa Leveque sits on the hillside above Kassiopi, one of Corfu's most beautiful
              and unspoilt villages. This part of the island is celebrated for its dramatic
              scenery, clear water and relaxed pace — a favourite for discerning travellers
              who value privacy without losing access to the best the island has to offer.
            </p>
            <p
              className="text-sm leading-relaxed mb-10"
              style={{
                fontFamily: 'Manrope, sans-serif',
                color: 'rgba(250,248,244,0.55)',
                fontWeight: 300,
                lineHeight: 1.9,
              }}
            >
              The harbour is just a ten-minute walk down the hill, lined with tavernas,
              a small supermarket and boats available for day hire along the Albanian coastline.
            </p>

            <Link
              to="/location"
              className="inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase font-medium transition-all duration-200"
              style={{ fontFamily: 'Manrope, sans-serif', color: '#C9A96E' }}
              onMouseEnter={e => e.currentTarget.style.color = '#FAF8F4'}
              onMouseLeave={e => e.currentTarget.style.color = '#C9A96E'}
            >
              Explore the Location <ArrowRight size={12} />
            </Link>
          </motion.div>

          {/* Right — facts + map placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Key location facts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-px mb-6"
              style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}
            >
              {FACTS.map(f => (
                <div
                  key={f.label}
                  className="flex items-start gap-3 p-5"
                  style={{ backgroundColor: '#1C2B3A' }}
                >
                  <span
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: '#C9A96E' }}
                  >
                    {f.icon}
                  </span>
                  <div>
                    <p
                      className="text-sm font-medium mb-0.5"
                      style={{
                        fontFamily: 'Manrope, sans-serif',
                        color: '#FAF8F4',
                        fontWeight: 500,
                      }}
                    >
                      {f.label}
                    </p>
                    <p
                      className="text-xs"
                      style={{
                        fontFamily: 'Manrope, sans-serif',
                        color: 'rgba(250,248,244,0.4)',
                        fontWeight: 300,
                      }}
                    >
                      {f.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map placeholder */}
            {/* TODO: Replace with Google Maps embed — <iframe src="https://maps.google.com/maps?q=Kassiopi,Corfu&output=embed" /> */}
            <div
              className="flex flex-col items-center justify-center gap-3 py-10 cursor-pointer group"
              style={{
                backgroundColor: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(201,169,110,0.15)',
              }}
              onClick={() => window.open('https://maps.google.com/?q=Kassiopi,+Corfu,+Greece', '_blank')}
            >
              <MapPin size={22} style={{ color: '#C9A96E' }} />
              <p
                className="text-sm font-light transition-colors duration-200"
                style={{ fontFamily: 'Manrope, sans-serif', color: 'rgba(250,248,244,0.5)', fontWeight: 300 }}
              >
                Kassiopi, Corfu, Greece
              </p>
              <p
                className="text-xs tracking-widest uppercase transition-colors duration-200 group-hover:text-[#C9A96E]"
                style={{ fontFamily: 'Manrope, sans-serif', color: 'rgba(250,248,244,0.25)', fontWeight: 400 }}
              >
                View on Google Maps
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
