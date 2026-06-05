import { motion } from 'framer-motion'
import { Waves, BedDouble, Eye, Flame, Wifi, Headphones, Car, Armchair } from 'lucide-react'
import SectionContainer from './SectionContainer'
import AmenityCard from './AmenityCard'

const AMENITIES = [
  {
    icon: Waves,
    title: 'Private Pool',
    desc: 'Heated private pool on the front terrace with sun loungers, pergola seating and panoramic sea views.',
  },
  {
    icon: BedDouble,
    title: '3 En-Suite Bedrooms',
    desc: 'Three generous bedrooms each with private bathroom, air conditioning and terrace or balcony access.',
  },
  {
    icon: Eye,
    title: 'Sea Views',
    desc: 'Uninterrupted views across the Ionian Sea towards the Albanian mountains from every main room.',
  },
  {
    icon: Flame,
    title: 'BBQ & Al Fresco Dining',
    desc: 'Stone-built outdoor kitchen with BBQ and a pergola-shaded dining terrace for eight.',
  },
  {
    icon: Wifi,
    title: 'Wi-Fi & Sonos',
    desc: 'High-speed Wi-Fi throughout the villa and gardens, plus a Sonos system for poolside music.',
  },
  {
    icon: Headphones,
    title: 'Concierge Service',
    desc: 'Personal concierge on hand throughout your stay for restaurant bookings, boat hire and arrangements.',
  },
  {
    icon: Car,
    title: 'Private Parking',
    desc: 'Secure off-road parking for two vehicles within the villa grounds.',
  },
  {
    icon: Armchair,
    title: 'Balcony & Terrace',
    desc: 'First-floor balcony and wraparound terrace with garden, pool and sea outlooks.',
  },
]

export default function HomeAmenities() {
  return (
    <SectionContainer bg="cream" spacing="lg" style={{ borderTop: '1px solid #E8DFD0' }}>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <p
          className="uppercase"
          style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.7rem', color: '#C9A96E', fontWeight: 500, letterSpacing: '0.28em' }}
        >
          Included at the Villa
        </p>
        <h2
          className="font-light mt-4"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: 'italic',
            color: '#1C2B3A',
            fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
          }}
        >
          Everything You Need
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {AMENITIES.map(({ icon, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.055 }}
          >
            <AmenityCard icon={icon} title={title} desc={desc} variant="full" />
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  )
}
