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

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const solid = !isHome || scrolled

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: solid ? 'rgba(250,248,244,0.97)' : 'transparent',
          backdropFilter: solid ? 'blur(10px)' : 'none',
          borderBottom: solid ? '1px solid rgba(232,223,208,0.6)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-3 items-center h-16 lg:h-20">

            {/* Col 1 — Wordmark */}
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0">
                <span
                  className="transition-colors duration-400"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
                    fontWeight: 400,
                    letterSpacing: '0.05em',
                    color: solid ? '#1C2B3A' : '#ffffff',
                  }}
                >
                  Villa Leveque
                </span>
              </Link>
            </div>

            {/* Col 2 — Desktop nav (centered) */}
            <nav className="hidden lg:flex items-center justify-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="transition-all duration-300 hover:opacity-50"
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontSize: '0.7rem',
                    fontWeight: 400,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: solid ? '#1C2B3A' : 'rgba(255,255,255,0.82)',
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Col 3 — CTA + mobile trigger (right-aligned) */}
            <div className="flex items-center justify-end gap-4">
              <Link
                to="/contact"
                className="hidden lg:inline-flex items-center justify-center px-6 py-2.5 text-xs tracking-[0.16em] uppercase font-medium transition-all duration-250 min-h-[40px]"
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  backgroundColor: '#C9A96E',
                  color: '#0F1A24',
                }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#b8935a'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#C9A96E'}
              >
                Check Availability
              </Link>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden p-1.5 transition-colors"
                style={{ color: solid ? '#1C2B3A' : '#ffffff' }}
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile fullscreen overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.28 }}
            className="fixed inset-0 z-40 flex flex-col"
            style={{ backgroundColor: '#0F1A24' }}
          >
            {/* Close button */}
            <div className="flex items-center justify-between px-6 h-16">
              <Link to="/" onClick={() => setMenuOpen(false)}>
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '1.25rem',
                    fontWeight: 400,
                    letterSpacing: '0.05em',
                    color: 'rgba(250,248,244,0.7)',
                  }}
                >
                  Villa Leveque
                </span>
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-1.5"
                style={{ color: 'rgba(255,255,255,0.5)' }}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Nav links — vertically centered */}
            <div className="flex-1 flex flex-col items-center justify-center gap-8 px-6">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 + 0.1, duration: 0.4 }}
                >
                  <Link
                    to={link.to}
                    className="block text-center transition-opacity duration-200 hover:opacity-50"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontStyle: 'italic',
                      fontSize: 'clamp(2rem, 6vw, 2.75rem)',
                      fontWeight: 300,
                      color: '#FAF8F4',
                      lineHeight: 1.1,
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.42, duration: 0.4 }}
                className="mt-4"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-10 py-4 text-xs tracking-[0.2em] uppercase font-medium transition-all duration-200 min-h-[52px]"
                  style={{ fontFamily: 'Manrope, sans-serif', backgroundColor: '#C9A96E', color: '#0F1A24' }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = '#b8935a'}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = '#C9A96E'}
                >
                  Check Availability
                </Link>
              </motion.div>
            </div>

            {/* Footer bar */}
            <div
              className="px-6 py-6 text-center"
              style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
            >
              <p
                className="text-xs tracking-[0.24em] uppercase"
                style={{ fontFamily: 'Manrope, sans-serif', color: 'rgba(255,255,255,0.22)', fontWeight: 300 }}
              >
                Kassiopi &nbsp;&middot;&nbsp; Corfu &nbsp;&middot;&nbsp; Greece
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
