import { motion } from 'framer-motion'
import { Waves, BedDouble, Eye, Flame, Wifi, Headphones, Car, Armchair } from 'lucide-react'

const AMENITIES = [
  { icon: Waves,      label: 'Private Pool' },
  { icon: BedDouble,  label: '3 Bedrooms' },
  { icon: Eye,        label: 'Sea Views' },
  { icon: Flame,      label: 'BBQ & Dining' },
  { icon: Wifi,       label: 'Wi-Fi & Sonos' },
  { icon: Headphones, label: 'Concierge' },
  { icon: Car,        label: 'Parking' },
  { icon: Armchair,   label: 'Balcony & Terrace' },
]

export default function HomeAmenities() {
  return (
    <section className="py-20 md:py-24" style={{ backgroundColor: '#FAF8F4', borderTop: '1px solid #E8DFD0' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <p
            className="uppercase mb-0"
            style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.72rem', color: '#C9A96E', fontWeight: 500, letterSpacing: '0.28em' }}
          >
            At a Glance
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {AMENITIES.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="flex flex-col items-center gap-4 py-8 px-4 text-center"
              style={{ border: '1px solid #E8DFD0', backgroundColor: '#FFFFFF' }}
            >
              <Icon size={22} style={{ color: '#C9A96E' }} strokeWidth={1.5} />
              <p
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: '0.8rem',
                  color: '#1C2B3A',
                  fontWeight: 400,
                  letterSpacing: '0.04em',
                }}
              >
                {label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
