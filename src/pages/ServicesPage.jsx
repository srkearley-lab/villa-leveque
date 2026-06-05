import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Phone, Mail } from 'lucide-react'
import { IMAGES } from '../data/images'

const SERVICES = [
  {
    num: '01',
    title: 'Personal Concierge',
    body: 'Your dedicated concierge is available throughout your stay to arrange anything that makes your holiday more enjoyable — from securing a table at the best restaurant in Kassiopi to organising a private sailing trip along the Albanian coastline. No request is too small or too ambitious.',
    detail: 'Available 7 days a week during your stay.',
    img: IMAGES.views[1],
  },
  {
    num: '02',
    title: 'Private Transfers',
    body: 'Private, air-conditioned transfers between Corfu Airport and Villa Leveque. Your driver meets you at arrivals, takes care of your luggage, and ensures you begin relaxing from the moment you land. Chauffeur services for day trips and restaurant evenings also available.',
    detail: 'Book in advance to guarantee availability.',
    img: IMAGES.exterior[0],
  },
  {
    num: '03',
    title: 'Private Chef',
    body: 'Our private chef service brings exceptional in-villa dining to your stay. Using seasonal, locally sourced ingredients — fresh fish from Kassiopi harbour, organic olive oil from island groves, produce from local farms — your chef creates bespoke menus tailored entirely to your preferences.',
    detail: 'Available on request — enquire at least 48 hours in advance.',
    img: IMAGES.dining[0],
  },
  {
    num: '04',
    title: 'Pre-Arrival Groceries',
    body: "There's nothing more welcoming than arriving to find the fridge full and the kitchen ready. Choose from our curated grocery list — fresh bread, local cheeses, wine, fruit, coffee and more — and we'll have everything waiting for you when you arrive.",
    detail: 'Tailored to your preferences — share your list at least 48 hours before arrival.',
    img: IMAGES.living[2],
  },
]

function ServiceRow({ service, index }) {
  const [hovered, setHovered] = useState(false)
  const imageLeft = index % 2 === 0

  const ImageBlock = (
    <div
      className="relative overflow-hidden"
      style={{ minHeight: 500 }}
    >
      <img
        src={service.img.src}
        alt={service.img.alt}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
        style={{ transform: hovered ? 'scale(1.05)' : 'scale(1.01)' }}
        loading="lazy"
      />
      <div
        className="absolute inset-0"
        style={{ background: 'rgba(15,26,36,0.18)' }}
      />
    </div>
  )

  const ContentBlock = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col justify-center px-10 py-16 md:px-16 md:py-20"
    >
      <span
        className="block mb-5"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '5rem',
          color: '#C9A96E',
          opacity: 0.2,
          fontWeight: 300,
          lineHeight: 1,
        }}
      >
        {service.num}
      </span>

      <div className="w-8 h-px mb-6" style={{ backgroundColor: '#C9A96E' }} />

      <h2
        className="font-light mb-6"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: 'italic',
          color: '#FAF8F4',
          fontSize: 'clamp(1.75rem, 3vw, 2.75rem)',
          lineHeight: 1.1,
        }}
      >
        {service.title}
      </h2>

      <p
        className="mb-5 leading-relaxed"
        style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.9rem', color: 'rgba(250,248,244,0.55)', fontWeight: 300, lineHeight: 1.9 }}
      >
        {service.body}
      </p>

      <p
        className="mb-8 italic"
        style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '0.95rem', color: 'rgba(250,248,244,0.32)' }}
      >
        {service.detail}
      </p>

      <Link
        to="/contact"
        className="inline-flex items-center gap-2 group self-start"
        style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.72rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#C9A96E', fontWeight: 500 }}
      >
        Arrange this service
        <ArrowRight size={12} className="transition-transform duration-200 group-hover:translate-x-1" />
      </Link>
    </motion.div>
  )

  return (
    <div
      className="grid grid-cols-1 lg:grid-cols-5"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {imageLeft ? (
        <>
          <div className="lg:col-span-2">{ImageBlock}</div>
          <div className="lg:col-span-3">{ContentBlock}</div>
        </>
      ) : (
        <>
          <div className="order-2 lg:order-1 lg:col-span-3">{ContentBlock}</div>
          <div className="order-1 lg:order-2 lg:col-span-2">{ImageBlock}</div>
        </>
      )}
    </div>
  )
}

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section
        className="py-32 md:py-40 text-center"
        style={{ backgroundColor: '#1C2B3A' }}
      >
        <div className="max-w-3xl mx-auto px-6">
          <p
            className="uppercase mb-6 text-white/40"
            style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.7rem', fontWeight: 300, letterSpacing: '0.35em' }}
          >
            At Your Service
          </p>
          <div className="w-8 h-px mx-auto mb-8" style={{ backgroundColor: '#C9A96E' }} />
          <h1
            className="font-light mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              color: '#FAF8F4',
              fontSize: 'clamp(3rem, 7vw, 6rem)',
              lineHeight: 1.04,
            }}
          >
            Your Stay, Elevated
          </h1>
          <p
            style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1rem', color: 'rgba(250,248,244,0.42)', fontWeight: 300, lineHeight: 1.8 }}
          >
            Every detail arranged before you arrive.
          </p>
        </div>
      </section>

      {/* Service rows — alternating */}
      <div style={{ backgroundColor: '#1C2B3A' }}>
        {SERVICES.map((service, i) => (
          <div key={service.num} style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
            <ServiceRow service={service} index={i} />
          </div>
        ))}
      </div>

      {/* CTA */}
      <section className="py-24 md:py-32 text-white text-center" style={{ backgroundColor: '#0F1A24' }}>
        <div className="max-w-2xl mx-auto px-6">
          <div className="w-8 h-px mx-auto mb-10" style={{ backgroundColor: '#C9A96E' }} />
          <h2
            className="font-light mb-5"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              color: '#FAF8F4',
              fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
            }}
          >
            Enquire About Services
          </h2>
          <p
            className="font-light leading-relaxed mb-12 max-w-md mx-auto"
            style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.9rem', color: 'rgba(250,248,244,0.42)', fontWeight: 300 }}
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
                className="flex items-center gap-2 transition-colors duration-200"
                style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.875rem', color: 'rgba(250,248,244,0.28)', fontWeight: 300 }}
                onMouseEnter={e => e.currentTarget.style.color = '#C9A96E'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(250,248,244,0.28)'}
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
