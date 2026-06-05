import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, Mail } from 'lucide-react'
import { IMAGES } from '../data/images'

const SERVICES = [
  {
    num: '01',
    title: 'Personal Concierge',
    tagline: 'Your stay, perfectly arranged.',
    body: 'Your dedicated concierge is available throughout your stay to arrange anything that makes your holiday more enjoyable — from securing a table at the best restaurant in Kassiopi to organising a private sailing trip along the Albanian coastline. No request is too small or too ambitious.',
    detail: 'Available 7 days a week during your stay.',
    img: IMAGES.views[1],
  },
  {
    num: '02',
    title: 'Private Transfers',
    tagline: 'Seamless arrivals and departures.',
    body: 'Private, air-conditioned transfers between Corfu Airport and Villa Leveque. Your driver meets you at arrivals, takes care of your luggage, and ensures you begin relaxing from the moment you land. Chauffeur services for day trips and restaurant evenings also available.',
    detail: 'Book in advance to guarantee availability.',
    img: IMAGES.exterior[0],
  },
  {
    num: '03',
    title: 'Private Chef',
    tagline: 'Restaurant-quality dining at home.',
    body: 'Our private chef service brings exceptional in-villa dining to your stay. Using seasonal, locally sourced ingredients — fresh fish from Kassiopi harbour, organic olive oil from island groves, produce from local farms — your chef creates bespoke menus tailored entirely to your preferences.',
    detail: 'Available on request — enquire at least 48 hours in advance.',
    img: IMAGES.dining[0],
  },
  {
    num: '04',
    title: 'Pre-Arrival Groceries',
    tagline: 'Arrive to a fully stocked kitchen.',
    body: "There's nothing more welcoming than arriving to find the fridge full and the kitchen ready. Choose from our curated grocery list — fresh bread, local cheeses, wine, fruit, coffee and more — and we'll have everything waiting for you when you arrive.",
    detail: 'Tailored to your preferences — share your list at least 48 hours before arrival.',
    img: IMAGES.living[2],
  },
]

function ServiceCard({ service, index }) {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.12 }}
      className="relative overflow-hidden group cursor-default"
      style={{ minHeight: 540 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Background image */}
      <img
        src={service.img.src}
        alt={service.img.alt}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out"
        style={{ transform: hovered ? 'scale(1.06)' : 'scale(1.01)' }}
        loading="lazy"
      />

      {/* Gradient overlay — deepens on hover */}
      <div
        className="absolute inset-0 transition-all duration-500"
        style={{
          background: hovered
            ? 'linear-gradient(to top, rgba(8,14,22,0.97) 0%, rgba(8,14,22,0.55) 50%, rgba(8,14,22,0.25) 100%)'
            : 'linear-gradient(to top, rgba(8,14,22,0.90) 0%, rgba(8,14,22,0.35) 55%, rgba(8,14,22,0.12) 100%)',
        }}
      />

      {/* Number — top right */}
      <div className="absolute top-6 right-7">
        <span
          className="leading-none"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: '4.5rem',
            color: '#C9A96E',
            opacity: 0.2,
            fontWeight: 300,
          }}
        >
          {service.num}
        </span>
      </div>

      {/* Content — bottom */}
      <div className="absolute inset-x-0 bottom-0 p-8 md:p-10">
        {/* Gold line */}
        <div
          className="h-px mb-6 transition-all duration-500"
          style={{
            backgroundColor: '#C9A96E',
            width: hovered ? '3rem' : '1.5rem',
          }}
        />

        <p
          className="text-xs tracking-[0.2em] uppercase mb-3"
          style={{ fontFamily: 'Manrope, sans-serif', color: '#C9A96E', fontWeight: 500 }}
        >
          {service.num}
        </p>
        <h2
          className="font-light mb-3 text-white"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: 'italic',
            fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
            lineHeight: 1.1,
          }}
        >
          {service.title}
        </h2>
        <p
          className="text-sm italic mb-4 transition-colors duration-300"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            color: hovered ? '#C9A96E' : 'rgba(250,248,244,0.55)',
          }}
        >
          {service.tagline}
        </p>

        {/* Body — reveals on hover */}
        <div
          className="overflow-hidden transition-all duration-500"
          style={{ maxHeight: hovered ? '200px' : '0px', opacity: hovered ? 1 : 0 }}
        >
          <p
            className="text-sm leading-relaxed mb-4"
            style={{ fontFamily: 'Manrope, sans-serif', color: 'rgba(250,248,244,0.6)', fontWeight: 300, lineHeight: 1.85 }}
          >
            {service.body}
          </p>
          <p
            className="text-xs italic"
            style={{ fontFamily: 'Manrope, sans-serif', color: 'rgba(250,248,244,0.3)', fontWeight: 300 }}
          >
            {service.detail}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export default function ServicesPage() {
  return (
    <>
      {/* Cinematic hero */}
      <section
        className="relative flex items-end overflow-hidden"
        style={{ minHeight: '60vh' }}
      >
        <img
          src={IMAGES.views[0].src}
          alt="Aerial view of Kassiopi and Villa Leveque"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(10,18,28,0.3) 0%, rgba(10,18,28,0.75) 100%)',
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pb-20 w-full text-white">
          <p
            className="text-xs tracking-[0.28em] uppercase mb-5 text-white/45"
            style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 300 }}
          >
            At Your Service
          </p>
          <div className="w-8 h-px mb-7" style={{ backgroundColor: '#C9A96E' }} />
          <h1
            className="font-light"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              fontSize: 'clamp(3rem, 7vw, 5.5rem)',
              lineHeight: 1.04,
            }}
          >
            Services Designed<br />Around Your Stay
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 md:py-24" style={{ backgroundColor: '#FAF8F4' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
            <div>
              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: 'Manrope, sans-serif', color: '#6B7C5C', fontWeight: 300, lineHeight: 1.9 }}
              >
                Villa Leveque is managed by Our Villa Rentals, a specialist villa rental company
                dedicated to exceptional, discreet service. Every aspect of your holiday can be
                arranged through our team — before, during and after your stay.
              </p>
            </div>
            <div className="flex items-center gap-8 lg:justify-end">
              {[
                { label: 'Concierge', sub: 'Available daily' },
                { label: 'Chef', sub: 'On request' },
                { label: 'Transfers', sub: 'All routes' },
              ].map(({ label, sub }) => (
                <div key={label} className="text-center">
                  <p className="text-xs tracking-widest uppercase mb-1" style={{ fontFamily: 'Manrope, sans-serif', color: '#C9A96E', fontWeight: 500 }}>
                    {label}
                  </p>
                  <p className="text-xs" style={{ fontFamily: 'Manrope, sans-serif', color: '#9aA090', fontWeight: 300 }}>
                    {sub}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service cards — 2×2 luxury grid */}
      <section className="pb-0" style={{ backgroundColor: '#FAF8F4' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {SERVICES.map((service, i) => (
              <ServiceCard key={service.num} service={service} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 text-white text-center" style={{ backgroundColor: '#0F1A24' }}>
        <div className="max-w-2xl mx-auto px-6">
          <div className="w-8 h-px mx-auto mb-10" style={{ backgroundColor: '#C9A96E' }} />
          <h2
            className="font-light mb-5 text-white"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
            }}
          >
            Enquire About Services
          </h2>
          <p
            className="text-sm font-light leading-relaxed mb-12 max-w-md mx-auto"
            style={{ fontFamily: 'Manrope, sans-serif', color: 'rgba(250,248,244,0.42)', fontWeight: 300 }}
          >
            Get in touch to discuss your requirements and we'll tailor a package that makes your
            stay truly exceptional.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              to="/contact"
              className="px-10 py-4 text-xs tracking-[0.2em] uppercase font-medium flex items-center gap-2 transition-all duration-200 min-h-[52px]"
              style={{ fontFamily: 'Manrope, sans-serif', backgroundColor: '#C9A96E', color: '#0F1A24' }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#b8935a'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#C9A96E'}
            >
              Send an Enquiry <ArrowRight size={13} />
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            {[
              { href: 'mailto:info@ourvillarentals.com', Icon: Mail, label: 'info@ourvillarentals.com' },
              { href: 'tel:+306985743536', Icon: Phone, label: '+30 6985 743 536' },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-2 text-sm transition-colors duration-200"
                style={{ fontFamily: 'Manrope, sans-serif', color: 'rgba(250,248,244,0.32)', fontWeight: 300 }}
                onMouseEnter={e => e.currentTarget.style.color = '#C9A96E'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(250,248,244,0.32)'}
              >
                <Icon size={13} style={{ color: '#C9A96E' }} />
                {label}
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
