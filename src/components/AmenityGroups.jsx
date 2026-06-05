import { motion } from 'framer-motion'
import {
  BedDouble, Waves, UtensilsCrossed,
  Wind, Wifi, Utensils, Eye, Car, Bell,
} from 'lucide-react'
import SectionContainer from './SectionContainer'
import AmenityCard from './AmenityCard'

const AMENITIES = [
  {
    icon: BedDouble,
    title: '3 En-Suite Bedrooms',
    desc: 'Three beautifully appointed bedrooms, each with a private bathroom, individual air conditioning and terrace or balcony access. King and double beds dressed with premium linen and quality towels.',
  },
  {
    icon: Waves,
    title: 'Private Pool',
    desc: 'A generous private heated pool with a broad stone terrace, sun loungers and open views across the landscape towards the sea. The pool is yours alone for the duration of your stay.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Outdoor Dining',
    desc: 'A pergola-shaded terrace with a dining table for eight and a built-in BBQ grill. The ideal setting for long, relaxed evening meals beneath the stars and summer sky.',
  },
  {
    icon: Wind,
    title: 'Air Conditioning',
    desc: 'Individually controlled air conditioning throughout — all three bedrooms, the living room and kitchen. Keeps the villa cool and comfortable through the warmest Corfu days.',
  },
  {
    icon: Wifi,
    title: 'High-Speed Wi-Fi',
    desc: 'Fibre broadband throughout the villa, reliable in every room. Suitable for remote working, video calls or streaming — coverage extends to the terrace and pool area.',
  },
  {
    icon: Utensils,
    title: 'Fully Equipped Kitchen',
    desc: 'A large modern kitchen with everything needed for self-catering: Nespresso machine, American fridge-freezer, dishwasher, full cookware and quality crockery. No detail overlooked.',
  },
  {
    icon: Eye,
    title: 'Sea & Garden Views',
    desc: 'Panoramic views towards Albania from the pool terrace and master bedroom. Mature olive trees, bougainvillea and fragrant Mediterranean planting frame the setting on all sides.',
  },
  {
    icon: Car,
    title: 'Private Parking',
    desc: 'Secure private parking for two vehicles within the villa grounds, included as standard. Easy access to the villa with no steps on the approach from the parking area.',
  },
  {
    icon: Bell,
    title: 'Concierge Support',
    desc: 'Our team are available throughout your stay to help with anything you need. We can arrange private chefs, yacht charters, car hire, grocery deliveries and curated local recommendations.',
  },
]

export default function AmenityGroups() {
  return (
    <SectionContainer bg="cream" spacing="lg">
      {/* Section header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-14"
      >
        <p
          className="uppercase mb-4"
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: '0.68rem',
            color: '#C9A96E',
            fontWeight: 500,
            letterSpacing: '0.26em',
          }}
        >
          What&apos;s Included
        </p>
        <h2
          className="font-light"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 'clamp(2rem, 4vw, 3.25rem)',
            color: '#1C2B3A',
            fontWeight: 300,
          }}
        >
          Villa Amenities
        </h2>
        <p
          className="mt-4 mx-auto"
          style={{
            fontFamily: 'Manrope, sans-serif',
            fontSize: '0.9rem',
            color: '#5A6B60',
            fontWeight: 300,
            lineHeight: 1.9,
            maxWidth: '44ch',
          }}
        >
          Everything you need for a relaxed private stay in Corfu.
        </p>
      </motion.div>

      {/* 9-card grid — 3 col desktop, 2 col tablet, 1 col mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {AMENITIES.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.45 }}
          >
            <AmenityCard
              icon={item.icon}
              title={item.title}
              desc={item.desc}
              variant="full"
            />
          </motion.div>
        ))}
      </div>

      <p
        className="text-center mt-12"
        style={{
          fontFamily: 'Manrope, sans-serif',
          fontSize: '0.78rem',
          color: '#C4B9A8',
          fontWeight: 300,
        }}
      >
        Full amenity list available on enquiry &nbsp;&middot;&nbsp; Additional services available through our concierge
      </p>
    </SectionContainer>
  )
}
