import { motion } from 'framer-motion'
import { Waves, Eye, BedDouble, Wifi, Wind, UtensilsCrossed, Car, Star } from 'lucide-react'

const FEATURES = [
  {
    icon: <BedDouble size={22} />,
    title: '3 En-Suite Bedrooms',
    desc: 'Each bedroom has its own private bathroom, ensuring comfort and privacy for all guests.',
  },
  {
    icon: <Waves size={22} />,
    title: 'Private Pool',
    desc: 'A generous private pool set on a sun-drenched terrace with uninterrupted views.',
  },
  {
    icon: <Eye size={22} />,
    title: 'Sea & Albania Views',
    desc: 'Panoramic views stretching across the Ionian Sea towards the Albanian mountains.',
  },
  {
    icon: <Star size={22} />,
    title: 'Concierge Service',
    desc: 'Your personal concierge handles everything from restaurant reservations to boat hire.',
  },
  {
    icon: <Wind size={22} />,
    title: 'Air Conditioning',
    desc: 'All rooms are fully air-conditioned for a comfortable retreat in the summer heat.',
  },
  {
    icon: <UtensilsCrossed size={22} />,
    title: 'Outdoor Dining',
    desc: 'A pergola-shaded terrace with dining for eight, ideal for long Mediterranean evenings.',
  },
  {
    icon: <Car size={22} />,
    title: '10 Min to Kassiopi',
    desc: 'The charming harbour village of Kassiopi is a short drive away with restaurants and beaches.',
  },
  {
    icon: <Wifi size={22} />,
    title: 'High-Speed WiFi',
    desc: 'Stay connected with fast, reliable WiFi throughout the villa and outdoor areas.',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.07, duration: 0.5 },
  }),
}

export default function FeatureCards() {
  return (
    <section className="py-20 lg:py-28 bg-[#fdfcfa]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs tracking-widest uppercase font-medium text-[#b89a6b] mb-3">
            The Highlights
          </p>
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl text-[#1e2d3d]">
            Everything You Need for a Remarkable Stay
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map((feature, i) => (
            <motion.div
              key={feature.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={cardVariants}
              className="group p-7 border border-[#e8e2d9] hover:border-[#1e2d3d] bg-white transition-all duration-300"
            >
              <div className="text-[#b89a6b] mb-4 group-hover:text-[#1e2d3d] transition-colors">
                {feature.icon}
              </div>
              <h3 className="font-['Playfair_Display'] text-lg text-[#1e2d3d] mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-[#6b7a5c] leading-relaxed font-light">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
