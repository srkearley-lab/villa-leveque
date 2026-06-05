import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, Waves, BedDouble, Eye, Wifi, Wind, Car, Headphones, Check } from 'lucide-react'
import Hero from '../components/Hero'
import TrustBar from '../components/TrustBar'
import SectionContainer from '../components/SectionContainer'
import AmenityCard from '../components/AmenityCard'
import CTAButton from '../components/CTAButton'
import { IMAGES } from '../data/images'

const AMENITIES = [
  { icon: Waves,      title: 'Private Pool',        desc: 'Heated private pool on the front terrace with sun loungers, pergola seating and panoramic sea views.' },
  { icon: BedDouble,  title: '3 En-Suite Bedrooms', desc: 'Three generous bedrooms with private bathrooms, air conditioning and private terrace or balcony access.' },
  { icon: Eye,        title: 'Sea Views',            desc: 'Uninterrupted views across the Ionian Sea towards the Albanian mountains from every main room.' },
  { icon: Headphones, title: 'Concierge Service',    desc: 'Personal concierge on hand throughout your stay for restaurant bookings, boat hire and more.' },
  { icon: Wifi,       title: 'High-Speed Wi-Fi',     desc: 'Fast Wi-Fi throughout the villa and gardens, plus Sonos audio for poolside listening.' },
  { icon: Wind,       title: 'Air Conditioning',     desc: 'Individual climate control in every bedroom and the main open-plan living space.' },
  { icon: Car,        title: 'Private Parking',      desc: 'Secure off-road parking for two vehicles within the villa grounds.' },
  { icon: BedDouble,  title: 'Direct Booking',       desc: 'Managed exclusively by Our Villa Rentals. Book direct for the best rates and personal service.' },
]

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />

      {/* ── Intro ─────────────────────────────────────────────────── */}
      <SectionContainer bg="cream" size="lg">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="w-10 h-px mx-auto mb-8" style={{ backgroundColor: '#C9A96E' }} />
          <p
            className="uppercase mb-6"
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: '0.75rem',
              color: '#C9A96E',
              fontWeight: 500,
              letterSpacing: '0.26em',
            }}
          >
            Villa Leveque · Kassiopi, Corfu
          </p>
          <h2
            className="font-light leading-tight mb-10"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              color: '#1C2B3A',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            }}
          >
            Mediterranean Living at Its Finest
          </h2>

          {/* Stat bar */}
          <div
            className="grid grid-cols-3 mb-10"
            style={{ borderTop: '1px solid #E8DFD0', borderBottom: '1px solid #E8DFD0' }}
          >
            {[
              ['3 Bedrooms',   'All En-Suite'],
              ['Private Pool', 'Sea-View Terrace'],
              ['Sea Views',    'To Albania'],
            ].map(([v, s], i) => (
              <div
                key={v}
                className="py-6 text-center"
                style={{ borderRight: i < 2 ? '1px solid #E8DFD0' : 'none' }}
              >
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', color: '#1C2B3A', fontWeight: 300 }}>
                  {v}
                </p>
                <p
                  className="mt-1.5"
                  style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.7rem', color: '#9aA090', fontWeight: 300, letterSpacing: '0.1em', textTransform: 'uppercase' }}
                >
                  {s}
                </p>
              </div>
            ))}
          </div>

          <p
            className="mx-auto"
            style={{
              fontFamily: 'Manrope, sans-serif',
              color: '#6B7C5C',
              fontWeight: 300,
              lineHeight: 1.9,
              fontSize: '1.125rem',
              maxWidth: '700px',
            }}
          >
            Set among olive and cypress trees on the hillside above Kassiopi, Villa Leveque offers a rare combination of privacy, sea views and village life. Three en-suite bedrooms, a private pool and generous terraces make it an ideal retreat for families or small groups seeking an unhurried corner of northeast Corfu.
          </p>
        </motion.div>
      </SectionContainer>

      {/* ── Pool split: image left / text right ──────────────────── */}
      <section style={{ backgroundColor: '#FFFFFF', borderTop: '1px solid #E8DFD0' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ minHeight: 600 }}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden order-2 lg:order-1"
            style={{ minHeight: 400 }}
          >
            <img
              src={IMAGES.pool[0].src}
              alt="Private pool at Villa Leveque with sea views, Kassiopi"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="flex flex-col justify-center order-1 lg:order-2"
            style={{ padding: 'clamp(3rem, 5vw, 5rem)' }}
          >
            <p
              className="uppercase mb-4"
              style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.75rem', color: '#C9A96E', fontWeight: 500, letterSpacing: '0.2em' }}
            >
              Outdoor Living
            </p>
            <div className="w-8 h-px mb-7" style={{ backgroundColor: '#C9A96E' }} />
            <h2
              className="font-light leading-tight mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: '#1C2B3A', fontWeight: 300 }}
            >
              Private Pool &amp;<br />Terrace Above the Sea
            </h2>
            <p
              className="mb-8"
              style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1rem', color: '#5A6B60', fontWeight: 300, lineHeight: 1.85, maxWidth: '500px' }}
            >
              The front terrace centres around a fully refurbished private pool with a broad stone surround, sun loungers and a shaded pergola — all with open views across the landscape and out towards Albania.
            </p>
            <ul className="space-y-3 mb-10">
              {['Heated private pool', 'Sun loungers & pergola', 'Outdoor dining for 8', 'Stone-built BBQ', 'Uninterrupted sea views'].map(f => (
                <li
                  key={f}
                  className="flex items-center gap-3"
                  style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.9375rem', color: '#5A6B60', fontWeight: 300, lineHeight: 1.5 }}
                >
                  <Check size={12} style={{ color: '#C9A96E', flexShrink: 0 }} />
                  {f}
                </li>
              ))}
            </ul>
            <div>
              <CTAButton variant="outline-dark" size="md" to="/villa">
                Explore the Villa <ArrowRight size={12} />
              </CTAButton>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Interiors split: text left / bedroom image right ──────── */}
      <section style={{ backgroundColor: '#FAF8F4', borderTop: '1px solid #E8DFD0' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ minHeight: 580 }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="flex flex-col justify-center order-2 lg:order-1"
            style={{ padding: 'clamp(3rem, 5vw, 5rem)' }}
          >
            <p
              className="uppercase mb-4"
              style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.75rem', color: '#C9A96E', fontWeight: 500, letterSpacing: '0.2em' }}
            >
              Interiors
            </p>
            <div className="w-8 h-px mb-7" style={{ backgroundColor: '#C9A96E' }} />
            <h2
              className="font-light leading-tight mb-6"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 3.5vw, 3rem)', color: '#1C2B3A', fontWeight: 300 }}
            >
              Three En-Suite<br />Bedrooms &amp; Open Living
            </h2>
            <p
              className="mb-8"
              style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1rem', color: '#5A6B60', fontWeight: 300, lineHeight: 1.85, maxWidth: '500px' }}
            >
              Across two floors, the villa offers generous, light-filled living spaces. The open-plan ground floor flows from a fully equipped kitchen through dining to the living area — and straight out to the pool terrace. Each en-suite bedroom enjoys private terrace or balcony access with garden and sea views.
            </p>
            <div className="grid grid-cols-2 gap-3 mb-10" style={{ maxWidth: '440px' }}>
              {[
                ['3 Bedrooms', 'All en-suite'],
                ['6 Guests',   'Maximum'],
                ['Air Con',    'Throughout'],
                ['Sea Views',  'Every room'],
              ].map(([v, s]) => (
                <div key={v} className="px-5 py-4" style={{ border: '1px solid #E8DFD0', backgroundColor: '#FFFFFF' }}>
                  <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.9375rem', color: '#1C2B3A', fontWeight: 500 }}>{v}</p>
                  <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.75rem', color: '#9aA090', fontWeight: 300, marginTop: 3 }}>{s}</p>
                </div>
              ))}
            </div>
            <div>
              <CTAButton variant="outline-dark" size="md" to="/villa">
                View All Rooms <ArrowRight size={12} />
              </CTAButton>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden order-1 lg:order-2"
            style={{ minHeight: 400 }}
          >
            <img
              src={IMAGES.bedrooms[0].src}
              alt="Master bedroom at Villa Leveque with sea views"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </div>
      </section>

      {/* ── Amenities grid ──────────────────────────────────────────── */}
      <SectionContainer bg="white" size="lg" style={{ borderTop: '1px solid #E8DFD0' }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p
            className="uppercase mb-4"
            style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.75rem', color: '#C9A96E', fontWeight: 500, letterSpacing: '0.26em' }}
          >
            Included at the Villa
          </p>
          <h2
            className="font-light"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', color: '#1C2B3A', fontSize: 'clamp(2rem, 3.5vw, 2.75rem)' }}
          >
            Everything You Need
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {AMENITIES.map(({ icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
            >
              <AmenityCard icon={icon} title={title} desc={desc} variant="full" />
            </motion.div>
          ))}
        </div>
      </SectionContainer>

      {/* ── Gallery strip ───────────────────────────────────────────── */}
      <SectionContainer bg="cream" size="md" style={{ borderTop: '1px solid #E8DFD0' }}>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10">
          <div>
            <p
              className="uppercase mb-3"
              style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.75rem', color: '#C9A96E', fontWeight: 500, letterSpacing: '0.26em' }}
            >
              Photography
            </p>
            <h2
              className="font-light"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', color: '#1C2B3A', fontSize: 'clamp(1.85rem, 3vw, 2.5rem)' }}
            >
              See the Villa
            </h2>
          </div>
          <CTAButton variant="outline-dark" size="md" to="/gallery">
            Full Gallery <ArrowRight size={12} />
          </CTAButton>
        </div>

        <div
          className="hidden md:grid gap-2"
          style={{ gridTemplateColumns: '3fr 2fr 2.5fr 2fr 3fr', height: 420 }}
        >
          {[IMAGES.pool[0], IMAGES.bedrooms[0], IMAGES.living[0], IMAGES.dining[0], IMAGES.views[1]].map((img, i) => (
            <div key={i} className="relative overflow-hidden group">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        <div
          className="flex gap-2 overflow-x-auto md:hidden"
          style={{ height: 280, scrollbarWidth: 'none' }}
        >
          {[IMAGES.pool[0], IMAGES.bedrooms[0], IMAGES.living[0], IMAGES.dining[0]].map((img, i) => (
            <div key={i} className="relative flex-shrink-0 overflow-hidden" style={{ width: '80vw' }}>
              <img src={img.src} alt={img.alt} className="w-full h-full object-cover" loading="lazy" />
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* ── Location strip ──────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#5C6E50' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2" style={{ minHeight: 460 }}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center px-8 md:px-14 lg:px-20 py-16 md:py-20"
          >
            <p
              className="uppercase mb-5"
              style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.75rem', color: 'rgba(250,248,244,0.5)', fontWeight: 300, letterSpacing: '0.3em' }}
            >
              Northeast Corfu
            </p>
            <div className="w-8 h-px mb-7" style={{ backgroundColor: 'rgba(201,169,110,0.5)' }} />
            <h2
              className="font-light leading-tight"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', color: '#FAF8F4', fontSize: 'clamp(2.25rem, 4.5vw, 3.75rem)', lineHeight: 1.1 }}
            >
              10 Minutes<br />from Kassiopi
            </h2>
            <p
              className="mt-6"
              style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1rem', color: 'rgba(250,248,244,0.55)', fontWeight: 300, lineHeight: 1.85, maxWidth: '34ch' }}
            >
              Close enough for evenings out in the village, far enough for complete peace and privacy.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-center px-8 md:px-14 lg:px-16 py-16 md:py-20"
            style={{ borderLeft: '1px solid rgba(250,248,244,0.1)' }}
          >
            <ul style={{ borderTop: '1px solid rgba(250,248,244,0.1)' }}>
              {[
                ['Kassiopi village',     '10 min walk'],
                ['Nearest beach',        '5 min drive'],
                ['Corfu Airport',        '50 min drive'],
                ['Sea views to Albania', 'From every terrace'],
              ].map(([label, detail]) => (
                <li
                  key={label}
                  className="flex items-center justify-between py-4"
                  style={{ borderBottom: '1px solid rgba(250,248,244,0.1)' }}
                >
                  <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.9375rem', color: 'rgba(250,248,244,0.75)', fontWeight: 300 }}>
                    {label}
                  </span>
                  <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.75rem', color: '#C9A96E', fontWeight: 500, letterSpacing: '0.08em' }}>
                    {detail}
                  </span>
                </li>
              ))}
            </ul>
            <Link
              to="/location"
              className="inline-flex items-center gap-2 mt-8 self-start"
              style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(250,248,244,0.55)', fontWeight: 400 }}
              onMouseEnter={e => e.currentTarget.style.color = '#FAF8F4'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(250,248,244,0.55)'}
            >
              Explore Location <ArrowRight size={11} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────────── */}
      <SectionContainer bg="navy" size="lg">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="w-8 h-px mx-auto mb-8" style={{ backgroundColor: '#C9A96E' }} />
          <p
            className="uppercase mb-5"
            style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.75rem', color: '#C9A96E', fontWeight: 500, letterSpacing: '0.26em' }}
          >
            Corfu · Greece
          </p>
          <h2
            className="font-light mb-6"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 'clamp(2.25rem, 5.5vw, 3.75rem)', color: '#FAF8F4' }}
          >
            Plan Your<br />Corfu Stay
          </h2>
          <p
            className="mb-10 mx-auto"
            style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1.0625rem', color: 'rgba(250,248,244,0.5)', fontWeight: 300, lineHeight: 1.9, maxWidth: '44ch' }}
          >
            Contact us for availability, current rates and tailored options. Villa Leveque is managed exclusively — direct booking welcome.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton variant="primary" size="lg" to="/contact">
              Check Availability <ArrowRight size={13} />
            </CTAButton>
            <CTAButton variant="outline-light" size="lg" href="https://wa.me/306985743536" external>
              WhatsApp Us
            </CTAButton>
          </div>
        </motion.div>
      </SectionContainer>
    </>
  )
}
