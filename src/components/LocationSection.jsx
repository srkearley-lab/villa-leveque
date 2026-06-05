import { motion } from 'framer-motion'
import { MapPin, Anchor, Waves, Utensils, Car, Ship } from 'lucide-react'

const NEARBY = [
  {
    icon: <Anchor size={16} />,
    title: 'Kassiopi Harbour',
    desc: 'A charming fishing village with waterfront restaurants, bars and boutiques.',
    time: '10 min drive',
  },
  {
    icon: <Waves size={16} />,
    title: 'Bataria Beach',
    desc: 'A beautiful pebble cove with clear water, just below Kassiopi — perfect for snorkelling.',
    time: '10 min drive',
  },
  {
    icon: <Utensils size={16} />,
    title: 'Dining in Kassiopi',
    desc: 'Fresh seafood, traditional tavernas and modern restaurants line the harbour promenade.',
    time: '10 min drive',
  },
  {
    icon: <Ship size={16} />,
    title: 'Boat Hire',
    desc: 'Explore the Albanian coastline and hidden coves by private boat from Kassiopi marina.',
    time: 'From Kassiopi',
  },
  {
    icon: <MapPin size={16} />,
    title: 'Corfu Town',
    desc: 'The UNESCO Old Town with Venetian architecture, museums and vibrant nightlife.',
    time: '45 min drive',
  },
  {
    icon: <Car size={16} />,
    title: 'Corfu Airport',
    desc: 'Well connected to all major UK and European airports throughout the summer season.',
    time: '50 min drive',
  },
]

export default function LocationSection() {
  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: '#FAF8F4' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

        {/* Two-col intro */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="text-xs tracking-[0.2em] uppercase mb-5"
              style={{ fontFamily: 'Manrope, sans-serif', color: '#C9A96E', fontWeight: 500 }}
            >
              North-East Corfu
            </p>
            <h2
              className="text-4xl md:text-5xl font-light mb-8"
              style={{ fontFamily: "'Cormorant Garamond', serif", color: '#1C2B3A' }}
            >
              Kassiopi &<br />its Surroundings
            </h2>
            <div className="space-y-4">
              {[
                `Kassiopi sits at the north-eastern tip of Corfu, where the turquoise waters of the Ionian Sea stretch towards the mountains of Albania on the horizon. It is one of the island's most beloved villages — lively enough to offer everything you need, yet small enough to feel entirely unhurried.`,
                `The harbour is lined with excellent restaurants serving freshly caught fish and traditional Greek dishes. Hidden coves and pebble beaches are tucked around the headland, and the Venetian castle ruins above the village offer panoramic views that reward the short climb.`,
                `Villa Leveque sits just a ten-minute drive from the village — close enough for evenings out, yet sufficiently removed to offer complete peace and privacy.`,
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
          >
            {/* TODO: Replace with embedded Google Maps once API key is configured */}
            <div
              className="aspect-[4/3] flex flex-col items-center justify-center"
              style={{ backgroundColor: '#E8DFD0', border: '1px solid #d8cfbe' }}
            >
              <MapPin size={28} style={{ color: '#C9A96E', marginBottom: 10 }} />
              <p
                className="text-sm font-medium mb-1"
                style={{ fontFamily: 'Manrope, sans-serif', color: '#1C2B3A' }}
              >
                Villa Leveque
              </p>
              <p
                className="text-xs mb-6"
                style={{ fontFamily: 'Manrope, sans-serif', color: '#6B7C5C', fontWeight: 300 }}
              >
                Kassiopi, Corfu, Greece
              </p>
              <a
                href="https://maps.google.com/?q=Kassiopi,Corfu,Greece"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs tracking-[0.15em] uppercase font-medium px-5 py-2.5 transition-all duration-200"
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  border: '1px solid #1C2B3A',
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
                View on Google Maps
              </a>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-6 mb-14">
          <div className="flex-1 h-px" style={{ backgroundColor: '#E8DFD0' }} />
          <h3
            className="text-2xl md:text-3xl font-light"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: '#1C2B3A' }}
          >
            Nearby
          </h3>
          <div className="flex-1 h-px" style={{ backgroundColor: '#E8DFD0' }} />
        </div>

        {/* Nearby grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {NEARBY.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="flex gap-4 p-6"
              style={{ backgroundColor: '#FFFFFF', border: '1px solid #E8DFD0' }}
            >
              <div className="flex-shrink-0 mt-0.5" style={{ color: '#C9A96E' }}>{item.icon}</div>
              <div>
                <div className="flex items-center justify-between flex-wrap gap-1 mb-2">
                  <h4
                    className="text-base font-normal"
                    style={{ fontFamily: "'Cormorant Garamond', serif", color: '#1C2B3A' }}
                  >
                    {item.title}
                  </h4>
                  <span
                    className="text-xs"
                    style={{ fontFamily: 'Manrope, sans-serif', color: '#C9A96E', fontWeight: 500 }}
                  >
                    {item.time}
                  </span>
                </div>
                <p
                  className="text-xs leading-relaxed"
                  style={{ fontFamily: 'Manrope, sans-serif', color: '#6B7C5C', fontWeight: 300 }}
                >
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
