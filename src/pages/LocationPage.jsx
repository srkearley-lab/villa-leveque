import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  MapPin, Eye, Waves, TreePine, Car,
  Anchor, Castle, ArrowRight, Star, Copy, Check,
  Clock,
} from 'lucide-react'
import SectionContainer from '../components/SectionContainer'
import CTAButton        from '../components/CTAButton'
import { IMAGES }       from '../data/images'

// ─── Fade-up animation preset ─────────────────────────────────────────────────
const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport:   { once: true },
  transition: { duration: 0.5, ease: 'easeOut', delay },
})

// ─── Section label ─────────────────────────────────────────────────────────────
function Label({ children, light = false }) {
  return (
    <p
      className="uppercase mb-5 tracking-widest"
      style={{
        fontFamily: 'Manrope, sans-serif',
        fontSize: '0.7rem',
        color: light ? 'rgba(201,169,110,0.85)' : '#C9A96E',
        fontWeight: 500,
        letterSpacing: '0.3em',
      }}
    >
      {children}
    </p>
  )
}

// ─── Section heading ───────────────────────────────────────────────────────────
function SectionHeading({ children, light = false, className = '' }) {
  return (
    <h2
      className={`font-light leading-tight ${className}`}
      style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: 'clamp(2.25rem, 4vw, 3.25rem)',
        color: light ? '#FAF8F4' : '#1C2B3A',
        fontWeight: 300,
      }}
    >
      {children}
    </h2>
  )
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const WHY_CARDS = [
  {
    icon: MapPin,
    title: '10-Minute Walk to Harbour',
    desc:  "Kassiopi's harbour, tavernas and shops are an easy stroll away.",
  },
  {
    icon: Eye,
    title: 'Panoramic Sea Views',
    desc:  'Uninterrupted views across the Ionian towards Albania.',
  },
  {
    icon: TreePine,
    title: 'Quiet Private Setting',
    desc:  'Set among olive trees above the village, away from tourist crowds.',
  },
  {
    icon: Waves,
    title: 'Close to Beaches',
    desc:  'Several beautiful beaches within easy reach by car or on foot.',
  },
]

const DISTANCES = [
  { place: 'Kassiopi Village', time: '10 min walk',  icon: MapPin },
  { place: 'Nearest Beach',   time: '5 min drive',  icon: Waves  },
  { place: 'Nissaki Cove',    time: '15 min drive', icon: Anchor },
  { place: 'Corfu Town',      time: '45 min drive', icon: Car    },
  { place: 'Corfu Airport',   time: '50 min drive', icon: Car    },
]

const NEARBY = [
  {
    img:   IMAGES.views[1],
    title: 'Kassiopi Harbour',
    desc:  'A picturesque fishing harbour with waterfront tavernas, boutique shops and a charming evening atmosphere.',
  },
  {
    img:   IMAGES.pool[0],
    title: 'Bataria Beach',
    desc:  'A sheltered pebble beach a short drive from the villa, popular with families and snorkellers.',
  },
  {
    img:   IMAGES.views[3],
    title: 'Avlaki Beach',
    desc:  'A quiet, unspoilt bay with clear water and a small taverna — perfect for a relaxed afternoon.',
  },
  {
    img:   IMAGES.views[4],
    title: 'Kassiopi Castle',
    desc:  'Byzantine ruins above the village offering commanding views across the northeast coast.',
  },
]

const REVIEWS = [
  {
    quote: '"An exceptional villa in a stunning location. The views from the balcony were breathtaking and Kassiopi harbour was a lovely walk away. We will absolutely return."',
    name:  'Sarah M.',
    loc:   'London',
  },
  {
    quote: '"Perfect in every way. Private, peaceful and beautifully presented. The concierge arranged everything flawlessly. Northeast Corfu at its very best."',
    name:  'James & Claire T.',
    loc:   'Edinburgh',
  },
  {
    quote: '"We have stayed at many villas across Greece but Villa Leveque stands apart. The outdoor spaces, the pool, the views — everything exceeded our expectations."',
    name:  'The Anderson Family',
    loc:   'Dublin',
  },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function LocationPage() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('Kelia, Kassiopi, 49081 Corfu, Greece').catch(() => {})
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <>
      {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
      <section
        className="relative flex items-end overflow-hidden"
        style={{ height: '78vh', minHeight: '520px' }}
      >
        <img
          src={IMAGES.views[4].src}
          alt="Aerial view of Kassiopi bay and coastline, Corfu"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, rgba(15,26,36,0.15) 0%, rgba(15,26,36,0.55) 60%, rgba(15,26,36,0.72) 100%)' }}
        />

        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-6 md:px-10 lg:px-14 pb-16 md:pb-24 text-center">
          <motion.div {...fadeUp(0.1)}>
            <Label light>North-East Corfu</Label>
          </motion.div>

          <motion.div
            className="mx-auto mb-8"
            style={{ width: 50, height: 1, backgroundColor: '#C9A96E' }}
            initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          />

          <motion.h1
            {...fadeUp(0.3)}
            className="mx-auto mb-7"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              fontWeight: 300,
              fontSize: 'clamp(3rem, 6vw, 5.5rem)',
              lineHeight: 1.08,
              color: '#FAF8F4',
              maxWidth: '900px',
            }}
          >
            A Private Escape Above<br />Kassiopi Harbour
          </motion.h1>

          <motion.p
            {...fadeUp(0.45)}
            className="mx-auto mb-10"
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontWeight: 300,
              fontSize: 'clamp(0.9375rem, 1.4vw, 1.0625rem)',
              maxWidth: '600px',
              lineHeight: 1.85,
              color: 'rgba(250,248,244,0.72)',
            }}
          >
            Nestled on the hillside above one of Corfu's most charming harbour villages, Villa Leveque offers the perfect balance of privacy, views and easy access to local life.
          </motion.p>

          <motion.div {...fadeUp(0.55)} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton variant="primary" size="lg" to="/contact">
              Check Availability <ArrowRight size={13} />
            </CTAButton>
            <CTAButton variant="outline-light" size="lg" to="/villa">
              Explore the Villa
            </CTAButton>
          </motion.div>
        </div>
      </section>

      {/* ── 2. WHY GUESTS LOVE KASSIOPI ──────────────────────────────────── */}
      <SectionContainer bg="cream" size="lg">
        <motion.div {...fadeUp(0)} className="text-center mb-14">
          <Label>The Location</Label>
          <SectionHeading className="mb-0">Why Guests Love Kassiopi</SectionHeading>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {WHY_CARDS.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              {...fadeUp(i * 0.1)}
              className="group flex flex-col p-8"
              style={{
                backgroundColor: '#1C2B3A',
                border: '1px solid rgba(201,169,110,0.12)',
                transition: 'border-color 0.25s',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(201,169,110,0.55)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(201,169,110,0.12)'}
            >
              <Icon size={26} style={{ color: '#C9A96E', marginBottom: 20 }} strokeWidth={1.3} />
              <h3
                className="mb-3"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: '1.35rem',
                  color: '#FAF8F4',
                  fontWeight: 300,
                  lineHeight: 1.2,
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: '0.9rem',
                  color: 'rgba(250,248,244,0.5)',
                  fontWeight: 300,
                  lineHeight: 1.8,
                }}
              >
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </SectionContainer>

      {/* ── 3. GETTING AROUND ────────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#1C2B3A' }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-14 py-24 md:py-28 lg:py-32">
          <motion.div {...fadeUp(0)} className="text-center mb-14">
            <Label light>Distances</Label>
            <SectionHeading light className="mb-0">Getting Around</SectionHeading>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {DISTANCES.map(({ place, time, icon: Icon }, i) => (
              <motion.div
                key={place}
                {...fadeUp(i * 0.08)}
                className="flex flex-col"
                style={{
                  backgroundColor: '#FAF8F4',
                  borderTop: '3px solid #C9A96E',
                  padding: '1.75rem 1.5rem',
                }}
              >
                <Icon size={18} style={{ color: '#C9A96E', marginBottom: 16 }} strokeWidth={1.4} />
                <p
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '1.15rem',
                    color: '#1C2B3A',
                    fontWeight: 300,
                    lineHeight: 1.25,
                    marginBottom: 10,
                  }}
                >
                  {place}
                </p>
                <p
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontSize: '0.75rem',
                    color: '#C9A96E',
                    fontWeight: 500,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    marginTop: 'auto',
                  }}
                >
                  {time}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. EXPLORE THE AREA ──────────────────────────────────────────── */}
      <SectionContainer bg="white" size="lg" style={{ borderTop: '1px solid #E8DFD0' }}>
        <motion.div {...fadeUp(0)} className="text-center mb-14">
          <Label>Nearby</Label>
          <SectionHeading className="mb-4">Explore the Area</SectionHeading>
          <p
            className="mx-auto"
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: '1rem',
              color: '#5A6B60',
              fontWeight: 300,
              lineHeight: 1.85,
              maxWidth: '52ch',
            }}
          >
            Kassiopi and the surrounding northeast coast offer some of Corfu's finest beaches, dining and scenery — all within easy reach.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {NEARBY.map(({ img, title, desc }, i) => (
            <motion.div
              key={title}
              {...fadeUp(i * 0.09)}
              className="group flex flex-col overflow-hidden"
              style={{ border: '1px solid #E8DFD0' }}
            >
              <div className="overflow-hidden" style={{ height: 200 }}>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-[1.06]"
                  loading="lazy"
                />
              </div>
              <div className="flex flex-col flex-1 p-6">
                <h3
                  className="mb-3"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '1.3rem',
                    color: '#1C2B3A',
                    fontWeight: 300,
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontSize: '0.875rem',
                    color: '#5A6B60',
                    fontWeight: 300,
                    lineHeight: 1.8,
                  }}
                >
                  {desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionContainer>

      {/* ── 5. AERIAL IMAGE BREAK ────────────────────────────────────────── */}
      <section className="relative overflow-hidden" style={{ height: '45vh', minHeight: 280 }}>
        <img
          src={IMAGES.views[3].src}
          alt="Aerial view of Kassiopi coastline"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
          style={{ backgroundColor: 'rgba(15,26,36,0.42)' }}
        >
          <motion.p
            {...fadeUp(0)}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              color: '#FAF8F4',
              lineHeight: 1.1,
              fontWeight: 300,
            }}
          >
            Kassiopi, Corfu
          </motion.p>
          <p
            className="mt-3 uppercase"
            style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.7rem', color: 'rgba(250,248,244,0.45)', letterSpacing: '0.3em', fontWeight: 300 }}
          >
            North-Eastern Coast &nbsp;&middot;&nbsp; Greece
          </p>
        </div>
      </section>

      {/* ── 6. INTERACTIVE MAP ───────────────────────────────────────────── */}
      <section style={{ backgroundColor: '#FAF8F4', borderTop: '1px solid #E8DFD0' }}>
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-14 pt-16 pb-0">
          <motion.div {...fadeUp(0)} className="mb-8">
            <Label>Location</Label>
            <SectionHeading className="mb-2">Find Villa Leveque</SectionHeading>
            <p
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: '0.9375rem',
                color: '#9aA090',
                fontWeight: 300,
              }}
            >
              Kelia, Kassiopi, 49081 Corfu, Greece
            </p>
          </motion.div>
        </div>

        {/* Full-width map */}
        {/* TODO: Replace with a proper Maps API key for production */}
        <div style={{ height: 420, width: '100%' }}>
          <iframe
            title="Villa Leveque location map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3129.5!2d19.9238!3d39.8021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDQ4JzA3LjYiTiAxOcKwNTUnMjUuNyJF!5e0!3m2!1sen!2sgr!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0, display: 'block', filter: 'grayscale(20%) contrast(95%)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Address + copy */}
        <div className="max-w-[1280px] mx-auto px-6 md:px-10 lg:px-14 py-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
            <div className="flex items-start gap-3">
              <MapPin size={16} style={{ color: '#C9A96E', flexShrink: 0, marginTop: 3 }} strokeWidth={1.5} />
              <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.9375rem', color: '#1C2B3A', fontWeight: 300 }}>
                Kelia, Kassiopi, 49081 Corfu, Greece
              </p>
            </div>
            <button
              onClick={handleCopy}
              className="inline-flex items-center gap-2 transition-all duration-200"
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: '0.75rem',
                color: copied ? '#5C6E50' : '#C9A96E',
                fontWeight: 400,
                letterSpacing: '0.08em',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: 0,
              }}
            >
              {copied ? <Check size={13} /> : <Copy size={13} />}
              {copied ? 'Copied!' : 'Copy address'}
            </button>
          </div>
        </div>
      </section>

      {/* ── 7. GUEST REVIEWS ─────────────────────────────────────────────── */}
      <SectionContainer bg="cream" size="lg" style={{ borderTop: '1px solid #E8DFD0' }}>
        <motion.div {...fadeUp(0)} className="text-center mb-14">
          <Label>Guest Reviews</Label>
          <SectionHeading className="mb-0">What Guests Say</SectionHeading>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map(({ quote, name, loc }, i) => (
            <motion.div
              key={name}
              {...fadeUp(i * 0.1)}
              className="flex flex-col p-8"
              style={{ backgroundColor: '#FFFFFF', border: '1px solid #E8DFD0' }}
            >
              {/* Stars */}
              <div className="flex items-center gap-1 mb-6">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} size={13} fill="#C9A96E" style={{ color: '#C9A96E' }} />
                ))}
              </div>

              {/* Quote */}
              <p
                className="flex-1 mb-7"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: 'italic',
                  fontSize: 'clamp(1.05rem, 1.8vw, 1.2rem)',
                  color: '#1C2B3A',
                  fontWeight: 300,
                  lineHeight: 1.75,
                }}
              >
                {quote}
              </p>

              {/* Attribution */}
              <div style={{ borderTop: '1px solid #E8DFD0', paddingTop: 20 }}>
                <p
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontSize: '0.75rem',
                    color: '#1C2B3A',
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                  }}
                >
                  {name}
                </p>
                <p
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontSize: '0.75rem',
                    color: '#C9A96E',
                    fontWeight: 300,
                    marginTop: 3,
                  }}
                >
                  {loc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionContainer>

      {/* ── 8. FINAL CTA ─────────────────────────────────────────────────── */}
      <SectionContainer bg="navy" size="lg">
        <motion.div {...fadeUp(0)} className="text-center">
          <div className="w-10 h-px mx-auto mb-8" style={{ backgroundColor: '#C9A96E' }} />
          <Label light>Availability</Label>
          <h2
            className="font-light mx-auto mb-6"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              fontSize: 'clamp(2.25rem, 5vw, 4rem)',
              color: '#FAF8F4',
              fontWeight: 300,
              maxWidth: '700px',
              lineHeight: 1.1,
            }}
          >
            Ready for Your Corfu Escape?
          </h2>
          <p
            className="mb-10 mx-auto"
            style={{
              fontFamily: 'Manrope, sans-serif',
              fontSize: '1.0625rem',
              color: 'rgba(250,248,244,0.5)',
              fontWeight: 300,
              lineHeight: 1.9,
              maxWidth: '48ch',
            }}
          >
            Contact us for availability, current rates and tailored stay options. Villa Leveque welcomes direct bookings.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton variant="primary" size="lg" to="/contact">
              Check Availability <ArrowRight size={13} />
            </CTAButton>
            <CTAButton variant="outline-light" size="lg" to="/contact">
              Send an Enquiry
            </CTAButton>
          </div>
        </motion.div>
      </SectionContainer>
    </>
  )
}
