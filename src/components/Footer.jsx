import { Link } from 'react-router-dom'
import { Mail, Phone } from 'lucide-react'
import { AWARD_BADGE } from '../data/images'

const NAV_LINKS = [
  { label: 'The Villa', to: '/villa' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Services', to: '/services' },
  { label: 'Location', to: '/location' },
  { label: 'Contact', to: '/contact' },
]

const WA_ICON = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0F1A24', borderTop: '1px solid #C9A96E' }}>
      {/* Large wordmark */}
      <div
        className="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-10"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
      >
        <Link to="/">
          <span
            className="block text-5xl md:text-6xl lg:text-7xl font-light tracking-wide"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              color: 'rgba(250,248,244,0.12)',
              letterSpacing: '0.06em',
            }}
          >
            Villa Leveque
          </span>
        </Link>
      </div>

      {/* Three columns */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">

          {/* About */}
          <div>
            <Link to="/">
              <h2
                className="text-xl font-normal mb-4"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: '#FAF8F4' }}
              >
                Villa Leveque
              </h2>
            </Link>
            <p
              className="text-sm leading-relaxed mb-8"
              style={{ fontFamily: 'Manrope, sans-serif', color: 'rgba(250,248,244,0.45)', fontWeight: 300 }}
            >
              A private sea-view villa set among olive and cypress trees in Kassiopi,
              Corfu. Three en-suite bedrooms, a private pool and Mediterranean living at its finest.
            </p>
            <img
              src={AWARD_BADGE}
              alt="Travel & Rental Awards 2025"
              className="h-14 w-auto opacity-80"
            />
          </div>

          {/* Navigation */}
          <div>
            <h3
              className="text-xs tracking-[0.2em] uppercase mb-6"
              style={{ fontFamily: 'Manrope, sans-serif', color: '#C9A96E', fontWeight: 500 }}
            >
              Navigate
            </h3>
            <nav className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="text-sm transition-colors duration-200"
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontWeight: 300,
                    color: 'rgba(250,248,244,0.55)',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#C9A96E'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(250,248,244,0.55)'}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="text-xs tracking-[0.2em] uppercase mb-6"
              style={{ fontFamily: 'Manrope, sans-serif', color: '#C9A96E', fontWeight: 500 }}
            >
              Contact
            </h3>
            <div className="flex flex-col gap-4">
              {[
                { href: 'mailto:info@ourvillarentals.com', icon: <Mail size={14} />, label: 'info@ourvillarentals.com' },
                { href: 'tel:+306985743536', icon: <Phone size={14} />, label: '+30 6985 743 536' },
                { href: 'https://wa.me/306985743536', icon: WA_ICON, label: 'WhatsApp', external: true },
              ].map(({ href, icon, label, external }) => (
                <a
                  key={label}
                  href={href}
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-3 text-sm transition-colors duration-200"
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontWeight: 300,
                    color: 'rgba(250,248,244,0.55)',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#C9A96E'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(250,248,244,0.55)'}
                >
                  <span style={{ color: '#C9A96E', flexShrink: 0 }}>{icon}</span>
                  {label}
                </a>
              ))}
              <p
                className="text-xs mt-2"
                style={{ fontFamily: 'Manrope, sans-serif', color: 'rgba(250,248,244,0.25)', fontWeight: 300 }}
              >
                Kassiopi, Corfu, Greece
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div
        className="max-w-7xl mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row justify-between items-center gap-3"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
      >
        <p
          className="text-xs"
          style={{ fontFamily: 'Manrope, sans-serif', color: 'rgba(250,248,244,0.2)', fontWeight: 300 }}
        >
          &copy; {new Date().getFullYear()} Villa Leveque. All rights reserved.
        </p>
        <p
          className="text-xs"
          style={{ fontFamily: 'Manrope, sans-serif', color: 'rgba(250,248,244,0.2)', fontWeight: 300 }}
        >
          Managed by Our Villa Rentals
        </p>
      </div>
    </footer>
  )
}
