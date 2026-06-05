import { motion } from 'framer-motion'
import { IMAGES } from '../data/images'

const HIGHLIGHTS = [
  'Kassiopi harbour & tavernas',
  'Kassiopi beach (5 min drive)',
  'Nissaki cove (15 min drive)',
  'Corfu Town (45 min drive)',
  'Boat hire & watersports',
  'Local supermarket & shops',
]

export default function LocationHighlight() {
  return (
    <section
      className="grid grid-cols-1 lg:grid-cols-2"
      style={{ minHeight: '600px' }}
    >
      {/* Left — dark text panel */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
        className="flex flex-col justify-center px-10 md:px-14 lg:px-20 py-20 md:py-28"
        style={{ backgroundColor: '#1C2B3A' }}
      >
        <p
          className="text-xs tracking-[0.22em] uppercase mb-4"
          style={{ fontFamily: 'Manrope, sans-serif', color: '#C9A96E', fontWeight: 500 }}
        >
          Northeast Corfu
        </p>

        <h2
          className="font-light leading-none mb-2"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: 'italic',
            color: '#FAF8F4',
            fontSize: 'clamp(3.5rem, 7vw, 6rem)',
          }}
        >
          Kassiopi
        </h2>

        <p
          className="text-sm mb-8"
          style={{
            fontFamily: 'Manrope, sans-serif',
            color: 'rgba(250,248,244,0.35)',
            fontWeight: 300,
            letterSpacing: '0.05em',
          }}
        >
          Northeast Corfu, Greece
        </p>

        <p
          className="text-sm leading-relaxed mb-10 max-w-sm"
          style={{
            fontFamily: 'Manrope, sans-serif',
            color: 'rgba(250,248,244,0.55)',
            fontWeight: 300,
            lineHeight: 1.9,
          }}
        >
          One of Corfu's most beautiful and unspoilt villages, Kassiopi sits at the
          northeastern tip of the island — surrounded by dramatic scenery, clear water
          and a relaxed pace that makes it a favourite for discerning travellers.
        </p>

        {/* Highlights */}
        <ul className="space-y-3 mb-10">
          {HIGHLIGHTS.map(h => (
            <li
              key={h}
              className="flex items-center gap-3 text-sm"
              style={{
                fontFamily: 'Manrope, sans-serif',
                color: 'rgba(250,248,244,0.62)',
                fontWeight: 300,
              }}
            >
              <span
                className="w-1 h-1 rounded-full flex-shrink-0"
                style={{ backgroundColor: '#C9A96E' }}
              />
              {h}
            </li>
          ))}
        </ul>

        <p
          className="text-xs tracking-[0.12em] uppercase"
          style={{
            fontFamily: 'Manrope, sans-serif',
            color: '#C9A96E',
            fontWeight: 500,
          }}
        >
          10 minutes' walk from the villa
        </p>
      </motion.div>

      {/* Right — sea view image */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.65 }}
        className="overflow-hidden"
        style={{ minHeight: '500px' }}
      >
        <img
          src={IMAGES.views[0].src}
          alt="Aerial view of Kassiopi and Villa Leveque, northeast Corfu"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </motion.div>
    </section>
  )
}
