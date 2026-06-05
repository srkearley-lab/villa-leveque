import { motion } from 'framer-motion'
import { Waves, Eye, BedDouble, Wifi, Wind, UtensilsCrossed, Car, Star } from 'lucide-react'

const FEATURES = [
  {
    icon: <BedDouble size={20} />,
    title: '3 En-Suite Bedrooms',
    desc: 'Each bedroom has its own private bathroom, ensuring comfort and privacy for all guests.',
  },
  {
    icon: <Waves size={20} />,
    title: 'Private Pool',
    desc: 'A generous private pool set on a sun-drenched terrace with uninterrupted sea views.',
  },
  {
    icon: <Eye size={20} />,
    title: 'Sea & Albania Views',
    desc: 'Panoramic views stretching across the Ionian Sea towards the Albanian mountains.',
  },
  {
    icon: <Star size={20} />,
    title: 'Concierge Service',
    desc: 'Your personal concierge handles everything from restaurant reservations to boat hire.',
  },
  {
    icon: <Wind size={20} />,
    title: 'Air Conditioning',
    desc: 'All rooms are fully air-conditioned for a comfortable retreat in the summer heat.',
  },
  {
    icon: <UtensilsCrossed size={20} />,
    title: 'Outdoor Dining',
    desc: 'A pergola-shaded terrace with dining for eight, ideal for long Mediterranean evenings.',
  },
  {
    icon: <Car size={20} />,
    title: '10 Min to Kassiopi',
    desc: 'The charming harbour village of Kassiopi is a short drive away with restaurants and beaches.',
  },
  {
    icon: <Wifi size={20} />,
    title: 'High-Speed WiFi',
    desc: 'Stay connected with fast, reliable WiFi throughout the villa and outdoor areas.',
  },
]

export default function FeatureCards() {
  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: '#FAF8F4' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section header */}
        <div className="text-center mb-16">
          <p
            className="text-xs tracking-[0.2em] uppercase mb-5"
            style={{ fontFamily: 'Manrope, sans-serif', color: '#C9A96E', fontWeight: 500 }}
          >
            The Highlights
          </p>
          <h2
            className="text-4xl md:text-5xl font-light"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: '#1C2B3A' }}
          >
            Everything You Need for a Remarkable Stay
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px"
          style={{ backgroundColor: '#E8DFD0' }}
        >
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              whileHover={{ y: -4 }}
              className="group p-8 lg:p-9 cursor-default transition-all duration-300"
              style={{ backgroundColor: '#FAF8F4' }}
            >
              {/* Icon */}
              <div
                className="mb-5 transition-colors duration-300"
                style={{ color: '#C9A96E' }}
              >
                {feature.icon}
              </div>

              {/* Gold line — appears on hover */}
              <div
                className="w-6 h-px mb-5 transition-all duration-300 group-hover:w-10"
                style={{ backgroundColor: '#C9A96E' }}
              />

              <h3
                className="text-xl font-normal mb-3"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: '#1C2B3A' }}
              >
                {feature.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: 'Manrope, sans-serif', color: '#6B7C5C', fontWeight: 300 }}
              >
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
