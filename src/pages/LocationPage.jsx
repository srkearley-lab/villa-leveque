import { motion } from 'framer-motion'
import {
  MapPin, Clock, Anchor, Waves, Utensils,
  Ship, ShoppingBag, Sunset, ArrowRight, Check,
} from 'lucide-react'
import PageHero        from '../components/PageHero'
import SectionContainer from '../components/SectionContainer'
import AmenityCard      from '../components/AmenityCard'
import CTAButton        from '../components/CTAButton'
import { IMAGES }       from '../data/images'

// ─── Data ─────────────────────────────────────────────────────────────────────

const HIGHLIGHTS = [
  'Hillside setting above Kassiopi village',
  '10-minute walk to the harbour',
  'Sea views across to Albania',
  'Surrounded by olive and cypress trees',
  'Quiet lane — no through traffic',
  'Close to Bataria and Avlaki beaches',
]

const TRAVEL_TIMES = [
  { place: 'Kassiopi village',   time: '10 min walk'  },
  { place: 'Nearest beach',      time: '5 min drive'  },
  { place: 'Nissaki cove',       time: '15 min drive' },
  { place: 'Corfu Town',         time: '45 min drive' },
  { place: 'Corfu Airport',      time: '50 min drive' },
]

const THINGS_TO_DO = [
  { icon: Anchor,      title: 'Kassiopi Harbour',   desc: 'Waterfront restaurants, bars and boutiques in a charming fishing village setting. The harbour is the heart of village life.' },
  { icon: Waves,       title: 'Beaches Nearby',     desc: 'Bataria, Avlaki and Kalamionas beaches offer clear, calm waters within 5–15 minutes of the villa by car.' },
  { icon: Utensils,    title: 'Restaurants',        desc: 'Fresh seafood and traditional Greek tavernas lining the Kassiopi promenade — some of the best fish on the island.' },
  { icon: Ship,        title: 'Boat Trips',         desc: 'Private boat hire to explore hidden coves along the Corfu coastline and across to the spectacular Albanian riviera.' },
  { icon: Sunset,      title: 'Castle Ruins',       desc: 'Walk up to Kassiopi\'s Byzantine castle ruins for panoramic sunset views across the sea towards Albania.' },
  { icon: ShoppingBag, title: 'Local Shopping',     desc: 'Fresh produce market, local honey, Corfu olive oil, handmade ceramics and genuine island crafts from village shops.' },
]

// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionLabel({ children }) {
  return (
    <p
      className="uppercase mb-4"
      style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.75rem', color: '#C9A96E', fontWeight: 500, letterSpacing: '0.26em' }}
    >
      {children}
    </p>
  )
}

function SectionHeading({ children }) {
  return (
    <h2
      className="font-light leading-tight mb-7"
      style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 4vw, 3.25rem)', color: '#1C2B3A', fontWeight: 300 }}
    >
      {children}
    </h2>
  )
}

function Body({ children }) {
  return (
    <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1rem', color: '#5A6B60', fontWeight: 300, lineHeight: 1.9 }}>
      {children}
    </p>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function LocationPage() {
  return (
    <>
      {/* 1 — Hero */}
      <PageHero
        image={IMAGES.views[4].src}
        alt="Aerial view of Kassiopi bay and coastline, Corfu"
        height="65vh"
        minHeight="440px"
        label="North-East Corfu"
        title="Kassiopi,"
        titleBreak="Northeast Corfu"
        subtitle="One of Corfu's most beautiful and unspoilt villages — clear water, harbour tavernas and unhurried pace."
      />

      {/* 2 — Two-column intro */}
      <SectionContainer bg="cream" spacing="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">

          {/* Left — editorial copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <SectionLabel>Setting</SectionLabel>
            <SectionHeading>The North-Eastern<br />Coast of Corfu</SectionHeading>
            <div className="space-y-5">
              <Body>
                Kassiopi sits at the north-eastern tip of Corfu, where the turquoise waters of the
                Ionian Sea stretch towards the mountains of Albania on the horizon. It is one of the
                island's most beloved villages — lively enough to offer everything you need, yet
                small enough to feel entirely unhurried.
              </Body>
              <Body>
                The harbour is lined with excellent restaurants serving freshly caught fish and
                traditional Greek dishes. Hidden coves and pebble beaches are tucked around the
                headland, and the Venetian castle ruins above the village offer panoramic views that
                reward the short climb.
              </Body>
              <Body>
                Villa Leveque sits just above the village on a quiet lane — close enough for evenings
                out and walks to the harbour, yet sufficiently removed to offer complete peace and privacy.
              </Body>
            </div>
          </motion.div>

          {/* Right — highlights + travel times */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
            <SectionLabel>Villa Location</SectionLabel>

            {/* Location highlights */}
            <ul className="space-y-3.5 mb-10">
              {HIGHLIGHTS.map(item => (
                <li key={item} className="flex items-start gap-3.5">
                  <Check
                    size={13}
                    style={{ color: '#C9A96E', flexShrink: 0, marginTop: 4 }}
                  />
                  <span
                    style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1rem', color: '#1C2B3A', fontWeight: 300, lineHeight: 1.7 }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Getting There card */}
            <div style={{ border: '1px solid #E8DFD0', overflow: 'hidden' }}>
              {/* Card header */}
              <div
                className="flex items-center gap-3 px-6 py-4"
                style={{ backgroundColor: '#1C2B3A' }}
              >
                <Clock size={13} style={{ color: '#C9A96E' }} />
                <p
                  style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.75rem', color: '#C9A96E', fontWeight: 500, letterSpacing: '0.26em', textTransform: 'uppercase' }}
                >
                  Getting There
                </p>
              </div>
              {/* Rows */}
              {TRAVEL_TIMES.map(({ place, time }, i) => (
                <div
                  key={place}
                  className="flex items-center justify-between px-6 py-3.5"
                  style={{
                    borderTop: i === 0 ? 'none' : '1px solid #E8DFD0',
                    backgroundColor: i % 2 === 0 ? '#FFFFFF' : '#FAF8F4',
                  }}
                >
                  <span
                    style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.875rem', color: '#5A6B60', fontWeight: 300 }}
                  >
                    {place}
                  </span>
                  <span
                    style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.9375rem', color: '#C9A96E', fontWeight: 500, letterSpacing: '0.05em' }}
                  >
                    {time}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </SectionContainer>

      {/* 3 — Map placeholder */}
      {/* TODO: Replace with <iframe src="https://maps.google.com/maps?q=Kassiopi,Corfu&output=embed" .../> when ready */}
      <section style={{ backgroundColor: '#E8DFD0', borderTop: '1px solid #D8CFB8', borderBottom: '1px solid #D8CFB8' }}>
        <div
          className="flex flex-col items-center justify-center gap-6"
          style={{
            height: 380,
            backgroundImage: 'linear-gradient(rgba(201,169,110,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.07) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        >
          {/* Concentric rings + pin */}
          <div className="relative flex items-center justify-center" style={{ width: 80, height: 80 }}>
            <div
              className="absolute"
              style={{ width: 80, height: 80, borderRadius: '50%', border: '1px solid rgba(201,169,110,0.22)' }}
            />
            <div
              className="absolute"
              style={{ width: 54, height: 54, borderRadius: '50%', border: '1px solid rgba(201,169,110,0.38)' }}
            />
            <div
              className="relative flex items-center justify-center"
              style={{ width: 32, height: 32, borderRadius: '50%', backgroundColor: 'rgba(201,169,110,0.12)', border: '1px solid #C9A96E' }}
            >
              <MapPin size={15} style={{ color: '#C9A96E' }} />
            </div>
          </div>

          {/* Address */}
          <div className="text-center">
            <p
              className="font-light"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', color: '#1C2B3A' }}
            >
              Villa Leveque
            </p>
            <p
              className="mt-1.5"
              style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.9375rem', color: '#6B7C5C', fontWeight: 300 }}
            >
              Kassiopi, Corfu, Greece
            </p>
            <p
              className="mt-1"
              style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.75rem', color: '#9aA090', fontWeight: 300, letterSpacing: '0.1em' }}
            >
              39°47′ N &nbsp; 19°55′ E
            </p>
          </div>

          <CTAButton
            variant="outline-dark"
            size="md"
            href="https://maps.google.com/?q=Kassiopi,Corfu,Greece"
            external
          >
            Open in Google Maps <ArrowRight size={12} />
          </CTAButton>
        </div>
      </section>

      {/* 4 — Things To Do */}
      <SectionContainer bg="cream" spacing="lg">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <SectionLabel>Nearby</SectionLabel>
          <SectionHeading>Things to Do<br />Around Kassiopi</SectionHeading>
          <p
            className="mx-auto"
            style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1rem', color: '#5A6B60', fontWeight: 300, lineHeight: 1.9, maxWidth: '50ch' }}
          >
            Kassiopi offers an exceptional range of activities within easy reach of the villa —
            from hidden beaches to harbour dining and boat trips.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {THINGS_TO_DO.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.45 }}
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
      </SectionContainer>

      {/* 5 — Full-bleed aerial image break */}
      <section className="relative overflow-hidden" style={{ height: '50vh', minHeight: 320 }}>
        <img
          src={IMAGES.views[3].src}
          alt="Aerial view of Kassiopi coastline and sea"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div
          className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
          style={{ backgroundColor: 'rgba(15,26,36,0.40)' }}
        >
          <p
            className="font-light"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#FAF8F4', lineHeight: 1.1 }}
          >
            Kassiopi, Corfu
          </p>
          <p
            className="mt-3 uppercase"
            style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.75rem', color: 'rgba(250,248,244,0.45)', letterSpacing: '0.28em', fontWeight: 300 }}
          >
            North-Eastern Coast &nbsp;&middot;&nbsp; Greece
          </p>
        </div>
      </section>

      {/* 6 — CTA */}
      <SectionContainer bg="navy" spacing="lg">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="w-8 h-px mx-auto mb-8" style={{ backgroundColor: '#C9A96E' }} />
          <SectionLabel>Availability</SectionLabel>
          <h2
            className="font-light mb-5"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 4vw, 3.25rem)', color: '#FAF8F4', fontWeight: 300 }}
          >
            Discover It for Yourself
          </h2>
          <p
            className="mb-10 mx-auto"
            style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1rem', color: 'rgba(250,248,244,0.45)', fontWeight: 300, lineHeight: 1.9, maxWidth: '40ch' }}
          >
            Check availability for your preferred dates and let us arrange everything else.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton variant="primary" size="lg" to="/contact">
              Check Availability <ArrowRight size={13} />
            </CTAButton>
            <CTAButton variant="outline-light" size="lg" to="/villa">
              Explore the Villa
            </CTAButton>
          </div>
        </motion.div>
      </SectionContainer>
    </>
  )
}
