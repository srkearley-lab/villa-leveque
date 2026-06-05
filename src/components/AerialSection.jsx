import { motion } from 'framer-motion'
import { IMAGES } from '../data/images'

export default function AerialSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ height: '60vh', minHeight: '380px' }}
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
        style={{ background: 'rgba(15,26,36,0.42)' }}
      />

      {/* Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs tracking-[0.35em] uppercase mb-6 text-white/50"
          style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 300 }}
        >
          Kassiopi &nbsp;&middot;&nbsp; Northeast Corfu
        </motion.p>

        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-8 h-px mx-auto mb-6"
          style={{ backgroundColor: '#C9A96E' }}
        />

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-light mb-5"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontStyle: 'italic',
            fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
          }}
        >
          From Above
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-sm md:text-base font-light max-w-md leading-relaxed text-white/65"
          style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 300 }}
        >
          Villa Leveque sits above the village, looking out<br className="hidden sm:block" />
          across the Ionian towards Albania.
        </motion.p>
      </div>
    </section>
  )
}
