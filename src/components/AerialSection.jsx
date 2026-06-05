import { motion } from 'framer-motion'
import { IMAGES } from '../data/images'

export default function AerialSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ height: '70vh', minHeight: '440px' }}
    >
      <img
        src={IMAGES.views[0].src}
        alt="Aerial drone view of Villa Leveque above Kassiopi, Corfu"
        className="w-full h-full object-cover"
        loading="lazy"
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to bottom, rgba(15,26,36,0.18) 0%, rgba(15,26,36,0.55) 100%)' }}
      />

      {/* Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="uppercase mb-6 text-white/45"
          style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 300, fontSize: '0.7rem', letterSpacing: '0.35em' }}
        >
          Kassiopi &nbsp;&middot;&nbsp; Northeast Corfu
        </motion.p>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mx-auto mb-6 origin-center"
          style={{ width: '60px', height: '1px', backgroundColor: '#C9A96E' }}
        />

        <motion.h2
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, delay: 0.2 }}
          className="font-light mb-5"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: 'italic',
            fontSize: 'clamp(2.75rem, 6vw, 5rem)',
            lineHeight: 1.04,
          }}
        >
          Above Kassiopi
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.32 }}
          className="max-w-xs text-white/55"
          style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 300, fontSize: '0.9rem', lineHeight: 1.8 }}
        >
          Villa Leveque sits on the hillside,<br />
          looking out across the Ionian towards Albania.
        </motion.p>
      </div>
    </section>
  )
}
