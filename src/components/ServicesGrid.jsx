import { motion } from 'framer-motion'

const SERVICES = [
  {
    num: '01',
    title: 'Personal Concierge',
    desc: 'Your dedicated concierge is on hand throughout your stay — restaurant bookings, boat hire, private tours, and anything that makes your holiday exceptional.',
  },
  {
    num: '02',
    title: 'Private Transfers',
    desc: 'Seamless airport transfers and chauffeur services in a private, air-conditioned vehicle. Arrive and depart in comfort, door to door.',
  },
  {
    num: '03',
    title: 'Private Chef',
    desc: 'Enjoy the ultimate in-villa dining with a private chef creating bespoke menus from the finest local ingredients — from intimate dinners to relaxed poolside lunches.',
  },
  {
    num: '04',
    title: 'Pre-Arrival Groceries',
    desc: "Arrive to a fully stocked kitchen. Choose from our curated grocery list and we'll have your provisions waiting before you step through the door.",
  },
]

export default function ServicesGrid() {
  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: '#1C2B3A' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

        {/* Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            whileInView={{ scaleX: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-8 h-px mx-auto mb-8"
            style={{ backgroundColor: '#C9A96E' }}
          />
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-light mb-4"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              color: '#FAF8F4',
              fontSize: 'clamp(2rem, 4.5vw, 3.25rem)',
            }}
          >
            Your Stay, Elevated
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="text-sm font-light"
            style={{
              fontFamily: 'Manrope, sans-serif',
              color: 'rgba(250,248,244,0.4)',
              fontWeight: 300,
            }}
          >
            Every detail arranged, so you can simply enjoy.
          </motion.p>
        </div>

        {/* 2×2 grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px" style={{ backgroundColor: 'rgba(255,255,255,0.06)' }}>
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="p-10 md:p-12"
              style={{ backgroundColor: '#1C2B3A' }}
            >
              <span
                className="block text-5xl font-light leading-none mb-6"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: '#C9A96E',
                  opacity: 0.45,
                }}
              >
                {s.num}
              </span>
              <h3
                className="text-2xl md:text-3xl font-light mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: '#FAF8F4' }}
              >
                {s.title}
              </h3>
              <p
                className="text-sm leading-relaxed pb-10"
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  color: 'rgba(250,248,244,0.48)',
                  fontWeight: 300,
                  lineHeight: 1.9,
                  borderBottom: '1px solid rgba(201,169,110,0.18)',
                }}
              >
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
