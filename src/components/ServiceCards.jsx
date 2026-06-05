import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const SERVICES = [
  {
    num: '01',
    title: 'Personal Concierge',
    desc: 'Your dedicated concierge is on hand throughout your stay to arrange restaurant reservations, boat hire, private tours, and anything else that makes your holiday exceptional.',
    detail: 'Available 7 days a week',
  },
  {
    num: '02',
    title: 'Private Transfers',
    desc: 'Seamless airport transfers and chauffeur services in a private, air-conditioned vehicle. Arrive and depart in comfort, with no waiting or navigating unfamiliar roads.',
    detail: 'Corfu Airport & beyond',
  },
  {
    num: '03',
    title: 'Private Chef',
    desc: 'Enjoy the ultimate in-villa dining with a private chef who creates bespoke menus using the finest local ingredients. From intimate dinners to relaxed poolside lunches.',
    detail: 'On request',
  },
  {
    num: '04',
    title: 'Pre-Arrival Groceries',
    desc: "Arrive to a fully stocked kitchen. Choose from our curated grocery list and we'll have your provisions ready before you step through the door.",
    detail: 'Tailored to your preferences',
  },
]

export default function ServiceCards() {
  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: '#1C2B3A' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section header */}
        <div className="mb-16">
          <p
            className="text-xs tracking-[0.2em] uppercase mb-5"
            style={{ fontFamily: 'Manrope, sans-serif', color: '#C9A96E', fontWeight: 500 }}
          >
            Premium Services
          </p>
          <h2
            className="text-4xl md:text-5xl font-light"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: '#FAF8F4' }}
          >
            Services Designed Around<br />Your Stay
          </h2>
        </div>

        {/* Numbered list */}
        <div>
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.num}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="grid grid-cols-[auto_1fr_auto] md:grid-cols-[80px_1fr_200px] items-start gap-6 md:gap-10 py-8"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}
            >
              {/* Number */}
              <span
                className="text-4xl md:text-5xl font-light leading-none pt-1"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: '#C9A96E', opacity: 0.6 }}
              >
                {service.num}
              </span>

              {/* Content */}
              <div>
                <h3
                  className="text-2xl md:text-3xl font-light mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: '#FAF8F4' }}
                >
                  {service.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: 'Manrope, sans-serif', color: 'rgba(250,248,244,0.5)', fontWeight: 300 }}
                >
                  {service.desc}
                </p>
              </div>

              {/* Detail */}
              <span
                className="text-xs tracking-wider hidden md:block pt-2 text-right"
                style={{ fontFamily: 'Manrope, sans-serif', color: '#C9A96E', fontWeight: 400 }}
              >
                {service.detail}
              </span>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14">
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 text-xs tracking-[0.18em] uppercase font-medium transition-colors duration-200"
            style={{ fontFamily: 'Manrope, sans-serif', color: '#C9A96E' }}
            onMouseEnter={e => e.currentTarget.style.color = '#FAF8F4'}
            onMouseLeave={e => e.currentTarget.style.color = '#C9A96E'}
          >
            Enquire About Services <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </section>
  )
}
