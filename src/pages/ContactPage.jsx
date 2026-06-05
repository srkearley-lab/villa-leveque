import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Mail, Phone, MessageCircle } from 'lucide-react'
import ContactForm from '../components/ContactForm'
import BookingEngine from '../components/BookingEngine'
import { IMAGES } from '../data/images'

// TODO: Replace BookingEngine with Lodgify widget when API credentials are available.

const WA_SVG = (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

export default function ContactPage() {
  const location = useLocation()
  const [prefilledDates, setPrefilledDates] = useState({})

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
      {/* Editorial header */}
      <section
        className="relative pt-40 pb-20"
        style={{ backgroundColor: '#FAF8F4' }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="max-w-xl">
            <p
              className="text-xs tracking-[0.28em] uppercase mb-6"
              style={{ fontFamily: 'Manrope, sans-serif', color: '#C9A96E', fontWeight: 500 }}
            >
              Get in Touch
            </p>
            <div className="w-8 h-px mb-8" style={{ backgroundColor: '#C9A96E' }} />
            <h1
              className="font-light mb-6"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontStyle: 'italic',
                color: '#1C2B3A',
                fontSize: 'clamp(2.75rem, 6vw, 5rem)',
                lineHeight: 1.04,
              }}
            >
              Enquire About<br />Villa Leveque
            </h1>
            <p
              className="text-sm leading-relaxed"
              style={{ fontFamily: 'Manrope, sans-serif', color: '#6B7C5C', fontWeight: 300, lineHeight: 1.9, maxWidth: '36ch' }}
            >
              Share your preferred dates and we'll confirm availability, answer any questions and
              help you plan the perfect stay.
            </p>
          </div>
        </div>
      </section>

      {/* Two-column layout */}
      <section className="pb-24 md:pb-32" style={{ backgroundColor: '#FAF8F4' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-14 xl:gap-20 items-start">

            {/* LEFT — Form */}
            <div>
              {/* Section label */}
              <div
                className="flex items-center gap-4 mb-10 pb-8"
                style={{ borderBottom: '1px solid #E8DFD0' }}
              >
                <div className="h-px w-8 flex-shrink-0" style={{ backgroundColor: '#C9A96E' }} />
                <h2
                  className="text-xl font-light"
                  style={{ fontFamily: "'Cormorant Garamond', serif", color: '#1C2B3A' }}
                >
                  Send an Enquiry
                </h2>
              </div>
              <ContactForm prefilledDates={prefilledDates} />
            </div>

            {/* RIGHT — Sidebar */}
            <div className="space-y-5 lg:sticky lg:top-24">

              {/* Booking widget */}
              <BookingEngine compact />

              {/* Pool image */}
              <div className="overflow-hidden" style={{ aspectRatio: '4/3' }}>
                <img
                  src={IMAGES.pool[0].src}
                  alt="Private pool at Villa Leveque"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/306985743536"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 px-6 py-4 transition-all duration-200 group min-h-[56px]"
                style={{ backgroundColor: '#25D366' }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = '#1ebe59'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = '#25D366'}
              >
                <span className="text-white flex-shrink-0">{WA_SVG}</span>
                <div>
                  <p className="text-sm font-medium text-white" style={{ fontFamily: 'Manrope, sans-serif' }}>
                    Chat on WhatsApp
                  </p>
                  <p className="text-xs text-white/70" style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 300 }}>
                    Fastest way to reach us
                  </p>
                </div>
              </a>

              {/* Contact card */}
              <div className="p-7" style={{ backgroundColor: '#1C2B3A' }}>
                <p
                  className="text-xs tracking-[0.2em] uppercase mb-6"
                  style={{ fontFamily: 'Manrope, sans-serif', color: '#C9A96E', fontWeight: 500 }}
                >
                  Direct Contact
                </p>
                <div className="space-y-5">
                  {[
                    { href: 'mailto:info@ourvillarentals.com', Icon: Mail, label: 'Email', value: 'info@ourvillarentals.com' },
                    { href: 'tel:+306985743536', Icon: Phone, label: 'Phone', value: '+30 6985 743 536' },
                    { href: 'https://wa.me/306985743536', Icon: MessageCircle, label: 'WhatsApp', value: 'Message us on WhatsApp', external: true },
                  ].map(({ href, Icon, label, value, external }) => (
                    <a
                      key={label}
                      href={href}
                      target={external ? '_blank' : undefined}
                      rel={external ? 'noopener noreferrer' : undefined}
                      className="flex items-start gap-3 group"
                    >
                      <Icon size={13} style={{ color: '#C9A96E', flexShrink: 0, marginTop: 3 }} />
                      <div>
                        <p className="text-xs mb-0.5" style={{ fontFamily: 'Manrope, sans-serif', color: 'rgba(250,248,244,0.28)', fontWeight: 300 }}>{label}</p>
                        <p
                          className="text-sm transition-colors duration-200"
                          style={{ fontFamily: 'Manrope, sans-serif', color: 'rgba(250,248,244,0.72)', fontWeight: 400 }}
                          onMouseEnter={e => e.currentTarget.style.color = '#C9A96E'}
                          onMouseLeave={e => e.currentTarget.style.color = 'rgba(250,248,244,0.72)'}
                        >
                          {value}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
                <div className="mt-6 pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                  <p className="text-xs" style={{ fontFamily: 'Manrope, sans-serif', color: 'rgba(250,248,244,0.22)', fontWeight: 300 }}>
                    Kassiopi, Corfu, Greece
                  </p>
                </div>
              </div>

              {/* Response time */}
              <div className="p-5" style={{ border: '1px solid rgba(201,169,110,0.22)', backgroundColor: 'rgba(201,169,110,0.04)' }}>
                <p
                  className="text-xs tracking-[0.18em] uppercase mb-2"
                  style={{ fontFamily: 'Manrope, sans-serif', color: '#C9A96E', fontWeight: 500 }}
                >
                  Response Time
                </p>
                <p
                  className="text-sm leading-relaxed"
                  style={{ fontFamily: 'Manrope, sans-serif', color: '#6B7C5C', fontWeight: 300, lineHeight: 1.8 }}
                >
                  We respond to all enquiries within 24 hours. For urgent requests, WhatsApp is fastest.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
