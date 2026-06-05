import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, Mail } from 'lucide-react'

const SERVICES = [
  {
    num: '01',
    title: 'Personal Concierge',
    intro: 'Your stay, perfectly arranged.',
    body: [
      `Your dedicated concierge is available throughout your stay to arrange anything that makes your holiday more enjoyable. From securing a table at the best restaurant in Kassiopi to organising a private sailing trip along the Albanian coastline — no request is too small or too ambitious.`,
      `We work with a trusted network of local providers and can arrange experiences that go well beyond the typical tourist itinerary, giving you access to the very best that Corfu has to offer.`,
    ],
    detail: 'Available 7 days a week during your stay.',
  },
  {
    num: '02',
    title: 'Private Transfers',
    intro: 'Seamless arrivals and departures.',
    body: [
      `We arrange private, air-conditioned transfers between Corfu Airport and Villa Leveque, as well as throughout your stay. Your driver will meet you at arrivals and take care of your luggage, so you can begin relaxing from the moment you land.`,
      `For those wishing to explore beyond Kassiopi, we can arrange chauffeur services for day trips, restaurant evenings or excursions to Corfu Town and the island's most beautiful beaches.`,
    ],
    detail: 'Book in advance to guarantee availability.',
  },
  {
    num: '03',
    title: 'Private Chef',
    intro: 'Restaurant-quality dining at home.',
    body: [
      `Our private chef service brings the finest in-villa dining experience to your stay. Using the best seasonal and locally sourced ingredients — fresh fish from Kassiopi harbour, organic olive oil from the island's groves and produce from local farms — your chef will create bespoke menus tailored entirely to your preferences.`,
      `Whether you're looking for relaxed poolside lunches, formal dinner-party evenings or a private cooking lesson, we'll match the right chef and the right experience to your group.`,
    ],
    detail: 'Available on request — please enquire at least 48 hours in advance.',
  },
  {
    num: '04',
    title: 'Pre-Arrival Groceries',
    intro: 'Arrive to a fully stocked kitchen.',
    body: [
      `There's nothing more welcoming than arriving to find the fridge full and the kitchen ready. Choose from our curated grocery list — fresh bread, local cheeses, wine, fruit, coffee, and anything else you'd like — and we'll have everything waiting for you when you arrive.`,
      `For families with young children, we can include all the essentials. For those planning to cook, we'll source the best local ingredients. Simply let us know your preferences when you book.`,
    ],
    detail: 'Tailored to your preferences — share your list at least 48 hours before arrival.',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16 text-center" style={{ backgroundColor: '#FAF8F4' }}>
        <div className="max-w-3xl mx-auto px-6">
          <p
            className="text-xs tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: 'Manrope, sans-serif', color: '#C9A96E', fontWeight: 500 }}
          >
            At Your Service
          </p>
          <h1
            className="text-5xl md:text-6xl font-light mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: '#1C2B3A', fontStyle: 'italic' }}
          >
            Services Designed Around<br />Your Stay
          </h1>
          <p
            className="text-sm font-light leading-relaxed max-w-lg mx-auto"
            style={{ fontFamily: 'Manrope, sans-serif', color: '#6B7C5C', fontWeight: 300, lineHeight: 1.9 }}
          >
            Villa Leveque is managed by Our Villa Rentals, a specialist villa rental company
            dedicated to exceptional service. Every aspect of your holiday can be arranged through our team.
          </p>
        </div>
      </section>

      {/* Service sections */}
      {SERVICES.map((service, i) => (
        <motion.section
          key={service.num}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-16 md:py-20"
          style={{ backgroundColor: i % 2 === 0 ? '#FAF8F4' : '#E8DFD0' }}
        >
          <div className="max-w-5xl mx-auto px-6 lg:px-10">
            <div className="flex flex-col md:flex-row gap-10 md:gap-16">
              {/* Number */}
              <div className="flex-shrink-0">
                <span
                  className="text-6xl md:text-7xl font-light leading-none"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: '#C9A96E', opacity: 0.5 }}
                >
                  {service.num}
                </span>
              </div>

              {/* Content */}
              <div className="flex-1">
                <h2
                  className="text-3xl md:text-4xl font-light mb-2"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: '#1C2B3A' }}
                >
                  {service.title}
                </h2>
                <p
                  className="text-sm italic mb-6"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: '#C9A96E' }}
                >
                  {service.intro}
                </p>
                <div className="space-y-4">
                  {service.body.map((para, j) => (
                    <p
                      key={j}
                      className="text-sm leading-relaxed"
                      style={{ fontFamily: 'Manrope, sans-serif', color: '#6B7C5C', fontWeight: 300, lineHeight: 1.9 }}
                    >
                      {para}
                    </p>
                  ))}
                </div>
                <p
                  className="mt-6 text-xs italic"
                  style={{ fontFamily: 'Manrope, sans-serif', color: '#9aA090', fontWeight: 300 }}
                >
                  {service.detail}
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      ))}

      {/* CTA */}
      <section className="py-24 md:py-28 text-white text-center" style={{ backgroundColor: '#0F1A24' }}>
        <div className="max-w-2xl mx-auto px-6">
          <div className="w-8 h-px mx-auto mb-8" style={{ backgroundColor: '#C9A96E' }} />
          <h2
            className="text-4xl md:text-5xl font-light mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif" }}
          >
            Enquire About Services
          </h2>
          <p
            className="text-sm font-light leading-relaxed mb-10 max-w-md mx-auto"
            style={{ fontFamily: 'Manrope, sans-serif', color: 'rgba(250,248,244,0.45)', fontWeight: 300 }}
          >
            Get in touch to discuss your requirements and we'll tailor a package that
            makes your stay truly exceptional.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              to="/contact"
              className="px-9 py-4 text-xs tracking-[0.18em] uppercase font-medium flex items-center gap-2 transition-all duration-200"
              style={{
                fontFamily: 'Manrope, sans-serif',
                backgroundColor: '#C9A96E',
                color: '#0F1A24',
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#b8935a'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#C9A96E'}
            >
              Send an Enquiry <ArrowRight size={13} />
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm">
            {[
              { href: 'mailto:info@ourvillarentals.com', icon: <Mail size={13} />, label: 'info@ourvillarentals.com' },
              { href: 'tel:+306985743536', icon: <Phone size={13} />, label: '+30 6985 743 536' },
            ].map(({ href, icon, label }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-2 transition-colors duration-200"
                style={{ fontFamily: 'Manrope, sans-serif', color: 'rgba(250,248,244,0.35)', fontWeight: 300 }}
                onMouseEnter={e => e.currentTarget.style.color = '#C9A96E'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(250,248,244,0.35)'}
              >
                <span style={{ color: '#C9A96E' }}>{icon}</span>
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
