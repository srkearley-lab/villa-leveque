import { motion } from 'framer-motion'
import { IMAGES } from '../data/images'

export default function DiningImageBreak() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.85 }}
      className="w-full overflow-hidden"
      style={{ height: '50vh', minHeight: '300px' }}
    >
      <img
        src={IMAGES.dining[0].src}
        alt="Outdoor dining terrace at Villa Leveque"
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </motion.section>
  )
}
