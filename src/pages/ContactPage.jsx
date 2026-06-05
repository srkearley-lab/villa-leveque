import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Mail, Phone, MessageCircle } from 'lucide-react'
import ContactForm from '../components/ContactForm'
import BookingEngine from '../components/BookingEngine'

// TODO: When Lodgify booking widget is ready, replace the BookingEngine section with
// the Lodgify embed code or iFrame for real-time availability and online booking.
// Lodgify integration: https://app.lodgify.com/

const WA_SVG = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export default function ContactPage() {
  const location = useLocation()
  const [prefilledDates, setPrefilledDates] = useState({})
  const [waHover, setWaHover] = useState(false)

  useEffect(() => {
    const params = new URLSearchParams(location.search)
    setPrefilledDates({
      arrival: params.get('arrival') || '',
      departure: params.get('departure') || '',
      guests: params.get('guests') || '2',
    })
  }, [location.search])

  return (
    <>
      {/* Header */}
      <section className="pt-36 pb-14 text-center" style={{ backgroundColor: '#FAF8F4' }}>
        <div className="max-w-3xl mx-auto px-6">
          <p
            className="text-xs tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: 'Manrope, sans-serif', color: '#C9A96E', fontWeight: 500 }}
          >
            Get in Touch
          </p>
          <h1
            className="text-5xl md:text-6xl font-light mb-5"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: '#1C2B3A', fontStyle: 'italic' }}
          >
            Enquire About<br />Villa Leveque
          </h1>
          <p
            className="text-sm font-light leading-relaxed max-w-md mx-auto"
            style={{ fontFamily: 'Manrope, sans-serif', color: '#6B7C5C', fontWeight: 300, lineHeight: 1.9 }}
          >
            Share your preferred dates and we'll confirm availability, answer any questions
            and help you plan the perfect stay.
          </p>
        </div>
      </section>

      {/* Quick contact strip */}
      <div
        className="border-y"
        style={{ backgroundColor: '#E8DFD0', borderColor: 'rgba(201,169,110,0.2)' }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            {/* WhatsApp — prominent green button */}
            <a
              href="https://wa.me/306985743536"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 text-xs tracking-[0.15em] uppercase font-medium transition-all duration-200"
              style={{
                fontFamily: 'Manrope, sans-serif',
                backgroundColor: waHover ? '#1ebe59' : '#25D366',
                color: '#FFFFFF',
              }}
              onMouseEnter={() => setWaHover(true)}
              onMouseLeave={() => setWaHover(false)}
            >
              {WA_SVG}
              WhatsApp Us
            </a>

            <div className="hidden sm:block w-px h-6" style={{ backgroundColor: 'rgba(201,169,110,0.3)' }} />

            {/* Phone */}
            <a
              href="tel:+306985743536"
              className="inline-flex items-center gap-2 text-sm transition-colors duration-200"
              style={{ fontFamily: 'Manrope, sans-serif', color: '#6B7C5C', fontWeight: 400 }}
              onMouseEnter={e => e.currentTarget.style.color = '#1C2B3A'}
              onMouseLeave={e => e.currentTarget.style.color = '#6B7C5C'}
            >
              <Phone size={14} style={{ color: '#C9A96E' }} />
              +30 6985 743 536
            </a>

            <div className="hidden sm:block w-px h-6" style={{ backgroundColor: 'rgba(201,169,110,0.3)' }} />

            {/* Email */}
            <a
              href="mailto:info@ourvillarentals.com"
              className="inline-flex items-center gap-2 text-sm transition-colors duration-200"
              style={{ fontFamily: 'Manrope, sans-serif', color: '#6B7C5C', fontWeight: 400 }}
              onMouseEnter={e => e.currentTarget.style.color = '#1C2B3A'}
              onMouseLeave={e => e.currentTarget.style.color = '#6B7C5C'}
            >
              <Mail size={14} style={{ color: '#C9A96E' }} />
              info@ourvillarentals.com
            </a>
          </div>
        </div>
      </div>

      {/* Main content */}
      <section className="py-16 md:py-24" style={{ backgroundColor: '#FAF8F4' }}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">

            {/* Form */}
            <div className="lg:col-span-2">
              <h2
                className="text-3xl font-light mb-10"
                style={{ fontFamily: "'Cormorant Garamond', serif", color: '#1C2B3A' }}
              >
                Send an Enquiry
              </h2>
              <ContactForm prefilledDates={prefilledDates} />
            </div>

            {/* Sidebar */}
            <div className="space-y-5">
              {/* Booking engine */}
              <BookingEngine compact />

              {/* WhatsApp card — green */}
              <a
                href="https://wa.me/306985743536"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-6 transition-all duration-200 group"
                style={{
                  backgroundColor: '#25D366',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#1ebe59'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#25D366'}
              >
                <span className="text-white flex-shrink-0">{WA_SVG}</span>
                <div>
                  <p
                    className="text-sm font-medium text-white mb-0.5"
                    style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 500 }}
                  >
                    Chat on WhatsApp
                  </p>
                  <p
                    className="text-xs text-white/75"
                    style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 300 }}
                  >
                    Fastest way to reach us
                  </p>
                </div>
              </a>

              {/* Direct contact */}
              <div className="p-7" style={{ backgroundColor: '#1C2B3A' }}>
                <p
                  className="text-xs tracking-[0.2em] uppercase mb-6"
                  style={{ fontFamily: 'Manrope, sans-serif', color: '#C9A96E', fontWeight: 500 }}
                >
                  Direct Contact
                </p>
                <div className="space-y-5">
                  {[
                    { href: 'mailto:info@ourvillarentals.com', icon: <Mail size={14} />, label: 'Email', value: 'info@ourvillarentals.com' },
                    { href: 'tel:+306985743536', icon: <Phone size={14} />, label: 'Phone', value: '+30 6985 743 536' },
                    { href: 'https://wa.me/306985743536', icon: <MessageCircle size={14} />, label: 'WhatsApp', value: 'Message us on WhatsApp', external: true },
                  ].map(({ href, icon, label, value, external }) => (
                    <a
                      key={label}
                      href={href}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noopener noreferrer' : undefined}
                      className="flex items-start gap-3 group"
                    >
                      <span style={{ color: '#C9A96E', flexShrink: 0, marginTop: 2 }}>{icon}</span>
                      <div>
                        <p
                          className="text-xs mb-0.5"
                          style={{ fontFamily: 'Manrope, sans-serif', color: 'rgba(250,248,244,0.3)', fontWeight: 300 }}
                        >
                          {label}
                        </p>
                        <p
                          className="text-sm transition-colors duration-200"
                          style={{ fontFamily: 'Manrope, sans-serif', color: 'rgba(250,248,244,0.75)', fontWeight: 400 }}
                          onMouseEnter={e => e.currentTarget.style.color = '#C9A96E'}
                          onMouseLeave={e => e.currentTarget.style.color = 'rgba(250,248,244,0.75)'}
                        >
                          {value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
                <div className="mt-6 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                  <p
                    className="text-xs"
                    style={{ fontFamily: 'Manrope, sans-serif', color: 'rgba(250,248,244,0.25)', fontWeight: 300 }}
                  >
                    Kassiopi, Corfu, Greece
                  </p>
                </div>
              </div>

              {/* Response times */}
              <div
                className="p-6"
                style={{ backgroundColor: '#E8DFD0', border: '1px solid rgba(201,169,110,0.2)' }}
              >
                <p
                  className="text-xs tracking-[0.2em] uppercase mb-3"
                  style={{ fontFamily: 'Manrope, sans-serif', color: '#C9A96E', fontWeight: 500 }}
                >
                  Response Times
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: 'Manrope, sans-serif', color: '#6B7C5C', fontWeight: 300, lineHeight: 1.8 }}
                >
                  We aim to respond to all enquiries within 24 hours. For urgent requests, please
                  contact us directly by phone or WhatsApp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
