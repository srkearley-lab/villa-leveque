import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Anchor, Waves, Utensils, Ship, Clock, ShoppingBag, Sunset } from 'lucide-react'
import PageHero from '../components/PageHero'
import { IMAGES } from '../data/images'

const HIGHLIGHTS = [
  'Hillside setting above Kassiopi village',
  '10-minute walk to the harbour',
  'Sea views across to Albania',
  'Surrounded by olive and cypress trees',
  'Quiet lane — no through traffic',
  'Close to Bataria and Kanoni beaches',
]

const THINGS_TO_DO = [
  {
    icon: Anchor,
    title: 'Kassiopi Harbour',
    desc: 'Waterfront restaurants, bars and boutiques in a charming fishing village setting.',
  },
  {
    icon: Waves,
    title: 'Beaches Nearby',
    desc: 'Bataria, Avlaki and Kalamionas — clear waters within 5–15 minutes.',
  },
  {
    icon: Utensils,
    title: 'Restaurants',
    desc: 'Fresh seafood and traditional Greek tavernas lining the Kassiopi promenade.',
  },
  {
    icon: Ship,
    title: 'Boat Trips',
    desc: 'Private boat hire to explore hidden coves and the Albanian coastline.',
  },
  {
    icon: Sunset,
    title: 'Evening Strolls',
    desc: 'Walk up to Kassiopi\'s Byzantine castle ruins for panoramic sunset views.',
  },
  {
    icon: ShoppingBag,
    title: 'Local Shopping',
    desc: 'Fresh produce market, local honey, olive oil and handmade ceramics.',
  },
]

export default function LocationPage() {
  return (
    <>
      <PageHero
        image={IMAGES.views[4].src}
        alt="Aerial view of Kassiopi bay and coastline, Corfu"
        height="65vh"
        minHeight="440px"
        label="North-East Corfu"
        title="Kassiopi,"
        titleBreak="Northeast Corfu"
        subtitle="One of Corfu's most beautiful and unspoilt villages — clear water, harbour tavernas and relaxed pace."
      />

      {/* Section A — Two-column intro */}
      <section className="py-24 md:py-32" style={{ backgroundColor: '#FAF8F4' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* Left — text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p
                className="uppercase mb-5"
                style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.72rem', color: '#C9A96E', fontWeight: 500, letterSpacing: '0.28em' }}
              >
                Setting
              </p>
              <h2
                className="font-light mb-8"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: '#1C2B3A',
                  fontSize: 'clamp(2rem, 4vw, 3.25rem)',
                  lineHeight: 1.1,
                }}
              >
                The North-Eastern<br />Coast of Corfu
              </h2>
              <div className="space-y-5">
                {[
                  `Kassiopi sits at the north-eastern tip of Corfu, where the turquoise waters of the Ionian Sea stretch towards the mountains of Albania on the horizon. It is one of the island's most beloved villages — lively enough to offer everything you need, yet small enough to feel entirely unhurried.`,
                  `The harbour is lined with excellent restaurants serving freshly caught fish and traditional Greek dishes. Hidden coves and pebble beaches are tucked around the headland, and the Venetian castle ruins above the village offer panoramic views that reward the short climb.`,
                  `Villa Leveque sits just above the village on a quiet lane — close enough for evenings out, yet sufficiently removed to offer complete peace and privacy.`,
                ].map((para, i) => (
                  <p
                    key={i}
                    style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.9375rem', color: '#6B7C5C', fontWeight: 300, lineHeight: 1.9 }}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* Right — highlights list */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.12 }}
            >
              <p
                className="uppercase mb-8"
                style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.72rem', color: '#C9A96E', fontWeight: 500, letterSpacing: '0.28em' }}
              >
                Villa Location
              </p>
              <ul className="space-y-5 mb-12">
                {HIGHLIGHTS.map(item => (
                  <li key={item} className="flex items-start gap-4">
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2"
                      style={{ backgroundColor: '#C9A96E' }}
                    />
                    <span
                      style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.9375rem', color: '#1C2B3A', fontWeight: 300, lineHeight: 1.7 }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Distance summary */}
              <div
                className="p-7"
                style={{ backgroundColor: '#1C2B3A' }}
              >
                <p
                  className="uppercase mb-5"
                  style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.68rem', color: '#C9A96E', fontWeight: 500, letterSpacing: '0.28em' }}
                >
                  Getting There
                </p>
                {[
                  { place: 'Kassiopi village', time: '10 min walk' },
                  { place: 'Nearest beach', time: '5 min drive' },
                  { place: 'Corfu Town', time: '45 min drive' },
                  { place: 'Corfu Airport', time: '50 min drive' },
                ].map(({ place, time }) => (
                  <div key={place} className="flex justify-between items-baseline mb-3">
                    <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.8rem', color: 'rgba(250,248,244,0.45)', fontWeight: 300 }}>
                      {place}
                    </span>
                    <span style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.8rem', color: '#C9A96E', fontWeight: 500 }}>
                      {time}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section B — Map placeholder */}
      <section style={{ backgroundColor: '#E8DFD0' }}>
        {/* TODO: Replace with Google Maps embed once API key is configured */}
        <div
          className="w-full flex flex-col items-center justify-center gap-4"
          style={{ height: '380px', backgroundColor: '#D8CFB8' }}
        >
          <MapPin size={28} style={{ color: '#C9A96E' }} />
          <div className="text-center">
            <p
              className="font-normal mb-1"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.25rem', color: '#1C2B3A' }}
            >
              Villa Leveque
            </p>
            <p
              style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.8rem', color: '#6B7C5C', fontWeight: 300 }}
            >
              Kassiopi, Corfu, Greece
            </p>
          </div>
          <a
            href="https://maps.google.com/?q=Kassiopi,Corfu,Greece"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-xs tracking-[0.15em] uppercase font-medium px-5 py-2.5 transition-all duration-200"
            style={{ fontFamily: 'Manrope, sans-serif', border: '1px solid #1C2B3A', color: '#1C2B3A' }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#1C2B3A'; e.currentTarget.style.color = '#FAF8F4' }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#1C2B3A' }}
          >
            View on Google Maps
          </a>
        </div>
      </section>

      {/* Section B — 6 things to do */}
      <section className="py-24 md:py-32" style={{ backgroundColor: '#FAF8F4' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-16">
            <p
              className="uppercase mb-5"
              style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.72rem', color: '#C9A96E', fontWeight: 500, letterSpacing: '0.28em' }}
            >
              Nearby
            </p>
            <h2
              className="font-light"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: 'italic',
                color: '#1C2B3A',
                fontSize: 'clamp(2rem, 4.5vw, 3.5rem)',
              }}
            >
              Things to Do
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {THINGS_TO_DO.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="p-7"
                style={{ backgroundColor: '#FFFFFF', border: '1px solid #E8DFD0' }}
              >
                <div className="mb-5" style={{ color: '#C9A96E' }}>
                  <item.icon size={18} />
                </div>
                <h3
                  className="font-normal mb-3"
                  style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.25rem', color: '#1C2B3A' }}
                >
                  {item.title}
                </h3>
                <p
                  style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.875rem', color: '#6B7C5C', fontWeight: 300, lineHeight: 1.75 }}
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full-bleed aerial */}
      <section className="relative overflow-hidden" style={{ height: '45vh', minHeight: '300px' }}>
        <img
          src={IMAGES.views[3].src}
          alt="Aerial view of Kassiopi and coastline"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ backgroundColor: 'rgba(15,26,36,0.38)' }}
        >
          <div className="text-center text-white px-6">
            <p
              className="font-light"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
            >
              Kassiopi, Corfu
            </p>
            <p
              className="mt-2 text-white/45 uppercase"
              style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.7rem', letterSpacing: '0.28em', fontWeight: 300 }}
            >
              North-Eastern Coast &nbsp;&middot;&nbsp; Greece
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-28 text-center" style={{ backgroundColor: '#1C2B3A' }}>
        <div className="max-w-xl mx-auto px-6">
          <div className="w-8 h-px mx-auto mb-8" style={{ backgroundColor: '#C9A96E' }} />
          <h2
            className="font-light mb-5"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', color: '#FAF8F4', fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
          >
            Discover It for Yourself
          </h2>
          <p
            className="font-light mb-10 leading-relaxed"
            style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.9rem', color: 'rgba(250,248,244,0.45)', fontWeight: 300 }}
          >
            Check availability for your preferred dates and let us arrange the rest.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-9 py-4 text-xs tracking-[0.18em] uppercase font-medium transition-all duration-200 min-h-[52px]"
            style={{ fontFamily: 'Manrope, sans-serif', backgroundColor: '#C9A96E', color: '#0F1A24' }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#b8935a'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#C9A96E'}
          >
            Check Availability <ArrowRight size={13} />
          </Link>
        </div>
      </section>
    </>
  )
}
