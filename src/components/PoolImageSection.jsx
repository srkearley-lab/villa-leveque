import { motion } from 'framer-motion'
import { IMAGES } from '../data/images'

export default function PoolImageSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8 }}
      className="w-full overflow-hidden"
      style={{ height: '70vh', minHeight: '400px' }}
    >
      <img
        src={IMAGES.pool[2].src}
        alt="Private pool and terrace at Villa Leveque, Kassiopi"
        className="w-full h-full object-cover"
        loading="lazy"
      />
    </motion.section>
  )
}
