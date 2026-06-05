import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV = [
  { label: 'The Villa', to: '/villa' },
  { label: 'Gallery',   to: '/gallery' },
  { label: 'Services',  to: '/services' },
  { label: 'Location',  to: '/location' },
  { label: 'Contact',   to: '/contact' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location.pathname])

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
          backdropFilter: solid ? 'blur(12px)' : 'none',
          borderBottom: solid ? '1px solid rgba(232,223,208,0.5)' : 'none',
          boxShadow: solid ? '0 1px 20px rgba(28,43,58,0.05)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12">
          <div className="flex items-center h-20 lg:h-24">

            {/* Left — Wordmark. flex-1 makes it and the right block equal, centering the nav. */}
            <div className="flex-1">
              <Link to="/" className="inline-block">
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 'clamp(1.4rem, 2vw, 1.65rem)',
                    fontWeight: 400,
                    letterSpacing: '0.07em',
                    color: solid ? '#1C2B3A' : '#FFFFFF',
                    transition: 'color 0.4s',
                  }}
                >
                  Villa Leveque
                </span>
              </Link>
            </div>

            {/* Centre — Desktop nav (shrinks to natural width, balanced by flex-1 sides) */}
            <nav className="hidden lg:flex items-center gap-10 flex-shrink-0">
              {NAV.map(link => {
                const active = location.pathname === link.to
                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="relative whitespace-nowrap"
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontSize: '0.73rem',
                      fontWeight: active ? 500 : 400,
                      letterSpacing: '0.22em',
                      textTransform: 'uppercase',
                      color: solid
                        ? (active ? '#1C2B3A' : 'rgba(28,43,58,0.5)')
                        : (active ? '#FFFFFF' : 'rgba(255,255,255,0.65)'),
                      transition: 'color 0.25s',
                      paddingBottom: 6,
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.color = solid ? '#1C2B3A' : '#FFFFFF'
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.color = solid
                        ? (active ? '#1C2B3A' : 'rgba(28,43,58,0.5)')
                        : (active ? '#FFFFFF' : 'rgba(255,255,255,0.65)')
                    }}
                  >
                    {link.label}
                    {/* Gold dot beneath active link */}
                    {active && (
                      <span
                        className="absolute left-1/2 -translate-x-1/2"
                        style={{
                          bottom: 0,
                          display: 'block',
                          width: 3,
                          height: 3,
                          borderRadius: '50%',
                          backgroundColor: '#C9A96E',
                        }}
                      />
                    )}
                  </Link>
                )
              })}
            </nav>

            {/* Right — CTA + mobile trigger. flex-1 justify-end mirrors the left. */}
            <div className="flex-1 flex items-center justify-end gap-5">
              <Link
                to="/contact"
                className="hidden lg:inline-flex items-center justify-center whitespace-nowrap transition-all duration-200"
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: '0.7rem',
                  fontWeight: 500,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  padding: '0.75rem 1.75rem',
                  minHeight: 44,
                  backgroundColor: '#C9A96E',
                  color: '#1C2B3A',
                }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#b8935a'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#C9A96E'}
              >
                Check Availability
              </Link>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden p-2 -mr-2 transition-colors"
                style={{ color: solid ? '#1C2B3A' : '#FFFFFF' }}
                aria-label="Toggle navigation"
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ─── Mobile fullscreen menu ─── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-40 flex flex-col"
            style={{ backgroundColor: '#0F1A24' }}
          >
            {/* Top bar */}
            <div className="flex items-center justify-between px-5 h-20 flex-shrink-0">
              <Link to="/" onClick={() => setMenuOpen(false)}>
                <span
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: '1.35rem',
                    fontWeight: 400,
                    letterSpacing: '0.07em',
                    color: 'rgba(250,248,244,0.7)',
                  }}
                >
                  Villa Leveque
                </span>
              </Link>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-2 -mr-2"
                style={{ color: 'rgba(255,255,255,0.4)' }}
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            {/* Nav links — vertically centred */}
            <div className="flex-1 flex flex-col items-center justify-center gap-6 px-6">
              {NAV.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.055 + 0.06, duration: 0.38 }}
                >
                  <Link
                    to={link.to}
                    className="block text-center transition-opacity duration-200 hover:opacity-50"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontStyle: 'italic',
                      fontSize: 'clamp(2rem, 6vw, 2.75rem)',
                      fontWeight: 300,
                      lineHeight: 1.12,
                      color: location.pathname === link.to ? '#C9A96E' : '#FAF8F4',
                    }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.38 }}
                className="mt-6"
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center transition-all duration-200"
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    padding: '16px 40px',
                    minHeight: 52,
                    backgroundColor: '#C9A96E',
                    color: '#0F1A24',
                  }}
                  onMouseEnter={e => e.currentTarget.style.backgroundColor = '#b8935a'}
                  onMouseLeave={e => e.currentTarget.style.backgroundColor = '#C9A96E'}
                >
                  Check Availability
                </Link>
              </motion.div>
            </div>

            {/* Bottom label */}
            <div
              className="px-6 py-6 text-center flex-shrink-0"
              style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
            >
              <p
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  fontSize: '0.75rem',
                  color: 'rgba(255,255,255,0.2)',
                  fontWeight: 300,
                  letterSpacing: '0.28em',
                  textTransform: 'uppercase',
                }}
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
