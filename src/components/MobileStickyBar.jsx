import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar } from 'lucide-react'

export default function MobileStickyBar() {
  const [visible, setVisible] = useState(false)
  const location = useLocation()

  // Don't show on contact page
  const isContactPage = location.pathname === '/contact'

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 1800)
    return () => clearTimeout(timer)
  }, [])

  // Hide on scroll up near top
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (isContactPage) return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
          style={{
            backgroundColor: '#0F1A24',
            borderTop: '1px solid rgba(201,169,110,0.25)',
            paddingBottom: 'env(safe-area-inset-bottom, 0)',
          }}
        >
          <div className="px-4 py-3">
            <Link
              to="/contact"
              className="flex items-center justify-center gap-2.5 w-full py-3.5 text-xs tracking-[0.2em] uppercase font-medium"
              style={{
                fontFamily: 'Manrope, sans-serif',
                backgroundColor: '#C9A96E',
                color: '#0F1A24',
              }}
            >
              <Calendar size={13} />
              Check Availability
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
