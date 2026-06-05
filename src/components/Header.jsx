import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { label: 'The Villa', to: '/villa' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Services', to: '/services' },
  { label: 'Location', to: '/location' },
  { label: 'Contact', to: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const solid = !isHome || scrolled

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: solid ? 'rgba(250,248,244,0.97)' : 'transparent',
        backdropFilter: solid ? 'blur(8px)' : 'none',
        borderBottom: solid ? '1px solid rgba(232,223,208,0.6)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* Wordmark */}
          <Link to="/" className="flex-shrink-0">
            <span
              className="text-xl lg:text-2xl font-normal tracking-wide transition-colors duration-300"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                color: solid ? '#1C2B3A' : '#ffffff',
                letterSpacing: '0.04em',
              }}
            >
              Villa Leveque
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-9">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-xs tracking-[0.18em] uppercase transition-all duration-300 hover:opacity-60"
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontWeight: 400,
                  color: solid ? '#1C2B3A' : 'rgba(255,255,255,0.85)',
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + mobile */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden lg:inline-flex items-center px-5 py-2 text-sm tracking-[0.08em] border transition-all duration-300"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: 'italic',
                fontWeight: 400,
                borderColor: 'rgba(201,169,110,0.6)',
                color: solid ? '#1C2B3A' : '#FAF8F4',
                letterSpacing: '0.06em',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#C9A96E'
                e.currentTarget.style.backgroundColor = 'rgba(201,169,110,0.1)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(201,169,110,0.6)'
                e.currentTarget.style.backgroundColor = 'transparent'
              }}
            >
              Check Availability
            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden p-1 transition-colors"
              style={{ color: solid ? '#1C2B3A' : '#ffffff' }}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            style={{ backgroundColor: '#FAF8F4', borderTop: '1px solid #E8DFD0' }}
          >
            <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-xs tracking-[0.18em] uppercase hover:opacity-50 transition-opacity"
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    color: '#1C2B3A',
                    fontWeight: 400,
                  }}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-2 inline-flex items-center justify-center px-5 py-3.5 text-xs tracking-[0.18em] uppercase font-medium border transition-all"
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  borderColor: '#1C2B3A',
                  color: '#1C2B3A',
                }}
              >
                Check Availability
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
