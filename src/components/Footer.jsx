import { Link } from 'react-router-dom'
import { Mail, Phone, MessageCircle } from 'lucide-react'
import ContactCard from './ContactCard'
import { AWARD_BADGE } from '../data/images'

const NAV = [
  { label: 'The Villa', to: '/villa' },
  { label: 'Gallery',   to: '/gallery' },
  { label: 'Services',  to: '/services' },
  { label: 'Location',  to: '/location' },
  { label: 'Contact',   to: '/contact' },
]

const WA_SVG = (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#0F1A24' }}>
      {/* Gold top rule */}
      <div style={{ height: 1, backgroundColor: '#C9A96E' }} />

      <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12">

        {/* ─── Brand row ─── */}
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-end py-14 md:py-16"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
        >
          <div>
            <Link to="/" className="inline-block mb-4">
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 'clamp(2rem, 4vw, 3.25rem)',
                  fontWeight: 300,
                  letterSpacing: '0.05em',
                  color: '#FAF8F4',
                }}
              >
                Villa Leveque
              </span>
            </Link>
            <p
              style={{
                fontFamily: 'Manrope, sans-serif',
                fontSize: '0.9375rem',
                color: 'rgba(250,248,244,0.38)',
                fontWeight: 300,
                lineHeight: 1.9,
                maxWidth: '40ch',
              }}
            >
              A private sea-view villa above Kassiopi, northeast Corfu.
              Three en-suite bedrooms, a private heated pool and Mediterranean living.
            </p>
          </div>

          {/* Award badge */}
          <div className="flex items-center lg:justify-end">
            {AWARD_BADGE && (
              <img
                src={AWARD_BADGE}
                alt="Travel & Rental Awards 2025"
                className="h-14 w-auto object-contain"
                style={{ opacity: 0.55 }}
                loading="lazy"
              />
            )}
          </div>
        </div>

        {/* ─── Three columns ─── */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 lg:gap-16 py-14">

          {/* Navigate */}
          <div>
            <p
              className="uppercase mb-7"
              style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.75rem', color: '#C9A96E', fontWeight: 500, letterSpacing: '0.26em' }}
            >
              Navigate
            </p>
            <nav className="flex flex-col gap-3.5">
              {NAV.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontSize: '0.875rem',
                    fontWeight: 300,
                    color: 'rgba(250,248,244,0.45)',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = '#C9A96E'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(250,248,244,0.45)'}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p
              className="uppercase mb-7"
              style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.75rem', color: '#C9A96E', fontWeight: 500, letterSpacing: '0.26em' }}
            >
              Contact
            </p>
            <div className="flex flex-col gap-5">
              <ContactCard
                icon={Mail}
                label="Email"
                value="info@ourvillarentals.com"
                href="mailto:info@ourvillarentals.com"
                dark
              />
              <ContactCard
                icon={Phone}
                label="Phone"
                value="+30 6985 743 536"
                href="tel:+306985743536"
                dark
              />
              <a
                href="https://wa.me/306985743536"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 transition-opacity duration-200 hover:opacity-70"
              >
                <span style={{ color: '#C9A96E', flexShrink: 0, marginTop: 2 }}>{WA_SVG}</span>
                <div>
                  <p
                    className="uppercase mb-0.5"
                    style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.6875rem', color: 'rgba(250,248,244,0.30)', fontWeight: 300, letterSpacing: '0.14em' }}
                  >
                    WhatsApp
                  </p>
                  <p
                    style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.875rem', color: 'rgba(250,248,244,0.65)', fontWeight: 400 }}
                  >
                    Message us directly
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Location */}
          <div>
            <p
              className="uppercase mb-7"
              style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.75rem', color: '#C9A96E', fontWeight: 500, letterSpacing: '0.26em' }}
            >
              Location
            </p>
            <address
              className="not-italic"
              style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.875rem', color: 'rgba(250,248,244,0.42)', fontWeight: 300, lineHeight: 1.9 }}
            >
              Villa Leveque<br />
              Above Kassiopi Village<br />
              Corfu, Greece
            </address>
            <a
              href="https://maps.google.com/?q=Kassiopi,Corfu,Greece"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 uppercase transition-colors duration-200"
              style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.75rem', color: 'rgba(250,248,244,0.25)', fontWeight: 300, letterSpacing: '0.16em' }}
              onMouseEnter={e => e.currentTarget.style.color = '#C9A96E'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(250,248,244,0.25)'}
            >
              Open in Google Maps →
            </a>
          </div>
        </div>
      </div>

      {/* ─── Copyright bar ─── */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.75rem', color: 'rgba(250,248,244,0.2)', fontWeight: 300 }}
          >
            &copy; {new Date().getFullYear()} Villa Leveque. All rights reserved.
          </p>
          <p
            style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.75rem', color: 'rgba(250,248,244,0.2)', fontWeight: 300 }}
          >
            Managed by Our Villa Rentals
          </p>
        </div>
      </div>
    </footer>
  )
}
