import { motion } from 'framer-motion'
import SectionContainer from './SectionContainer'
import VillaFactCard from './VillaFactCard'

const STATS = [
  { value: '3 Bedrooms', sub: 'All En-Suite' },
  { value: 'Private Pool', sub: 'Sea-View Terrace' },
  { value: 'Sea Views', sub: 'To Albania' },
]

export default function IntroSection() {
  return (
    <SectionContainer bg="cream" spacing="xl" narrow>

      {/* Gold rule */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-10 h-px mx-auto mb-10 origin-center"
        style={{ backgroundColor: '#C9A96E' }}
      />

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="font-light leading-tight mb-10 text-center"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontStyle: 'italic',
          color: '#1C2B3A',
          fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
        }}
      >
        Mediterranean Living<br />at Its Finest
      </motion.h2>

      {/* 3-column stat grid */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.18 }}
        className="grid grid-cols-3 mb-12"
        style={{ borderTop: '1px solid #E8DFD0', borderBottom: '1px solid #E8DFD0' }}
      >
        {STATS.map((s, i) => (
          <VillaFactCard key={s.value} value={s.value} sub={s.sub} bordered={i < 2} />
        ))}
      </motion.div>

      {/* Two body paragraphs */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.28 }}
        className="space-y-5 max-w-2xl mx-auto text-center"
      >
        <p
          style={{
            fontFamily: 'Manrope, sans-serif',
            color: '#6B7C5C',
            fontWeight: 300,
            lineHeight: 1.95,
            fontSize: '1.0625rem',
          }}
        >
          Set among olive and cypress trees on the hillside above Kassiopi, Villa Leveque
          offers a rare combination of privacy, sea views and village life. Three en-suite
          bedrooms, a private pool and generous terraces make it an ideal retreat for
          families or small groups seeking an unhurried corner of northeast Corfu.
        </p>
        <p
          style={{
            fontFamily: 'Manrope, sans-serif',
            color: '#6B7C5C',
            fontWeight: 300,
            lineHeight: 1.95,
            fontSize: '1.0625rem',
          }}
        >
          The villa's generous terraces, private pool and uninterrupted sea views provide
          the ideal setting for long, sun-drenched days. Kassiopi village — with its harbour
          tavernas, beaches and boat hire — lies just ten minutes' walk away.
        </p>
      </motion.div>
    </SectionContainer>
  )
}
