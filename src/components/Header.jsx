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
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location.pathname])

  const headerBg = isHome && !scrolled
    ? 'bg-transparent'
    : 'bg-[#fdfcfa]/95 backdrop-blur-sm shadow-sm'

  const textColour = isHome && !scrolled ? 'text-white' : 'text-[#1e2d3d]'
  const logoColour = isHome && !scrolled ? 'text-white' : 'text-[#1e2d3d]'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBg}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Wordmark */}
          <Link to="/" className={`flex-shrink-0 ${logoColour}`}>
            <span className="font-['Playfair_Display'] text-xl lg:text-2xl font-medium tracking-wide">
              Villa Leveque
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-light tracking-widest uppercase transition-colors duration-200 hover:opacity-70 ${textColour}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + mobile trigger */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className={`hidden lg:inline-flex items-center px-5 py-2.5 text-xs tracking-widest uppercase font-medium border transition-all duration-200 ${
                isHome && !scrolled
                  ? 'border-white text-white hover:bg-white hover:text-[#1e2d3d]'
                  : 'border-[#1e2d3d] text-[#1e2d3d] hover:bg-[#1e2d3d] hover:text-white'
              }`}
            >
              Check Availability
            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className={`lg:hidden p-1 ${textColour}`}
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
            className="lg:hidden bg-[#fdfcfa] border-t border-[#e8e2d9]"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-5">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm tracking-widest uppercase font-light text-[#1e2d3d] hover:opacity-60 transition-opacity"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="mt-2 inline-flex items-center justify-center px-5 py-3 text-xs tracking-widest uppercase font-medium border border-[#1e2d3d] text-[#1e2d3d] hover:bg-[#1e2d3d] hover:text-white transition-all"
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
