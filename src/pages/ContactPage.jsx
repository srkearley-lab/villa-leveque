import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Mail, Phone, MessageCircle } from 'lucide-react'
import ContactForm from '../components/ContactForm'
import { AWARD_BADGE } from '../data/images'

// TODO: Connect ContactForm to backend email service (e.g. Resend, SendGrid, or Formspree)
// to send enquiry emails to info@ourvillarentals.com.

const WA_SVG = (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
)

const CONTACTS = [
  { href: 'mailto:info@ourvillarentals.com', Icon: Mail,          label: 'Email',     value: 'info@ourvillarentals.com' },
  { href: 'tel:+306985743536',               Icon: Phone,         label: 'Phone',     value: '+30 6985 743 536' },
  { href: 'https://wa.me/306985743536',      Icon: MessageCircle, label: 'WhatsApp',  value: 'Message us', external: true },
]

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
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-[2fr_3fr]">

      {/* LEFT — Dark navy panel */}
      <div
        className="flex flex-col justify-between px-10 py-24 lg:px-12 lg:pt-36 lg:pb-16 lg:sticky lg:top-0 lg:h-screen"
        style={{ backgroundColor: '#0F1A24' }}
      >
        <div>
          {/* Label */}
          <p
            className="uppercase mb-6 text-white/35"
            style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.7rem', fontWeight: 300, letterSpacing: '0.35em' }}
          >
            Get in Touch
          </p>
          <div className="w-8 h-px mb-8" style={{ backgroundColor: '#C9A96E' }} />

          {/* Heading */}
          <h1
            className="font-light mb-4"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              color: '#FAF8F4',
              fontSize: 'clamp(2.25rem, 4vw, 3.5rem)',
              lineHeight: 1.08,
            }}
          >
            Villa Leveque
          </h1>
          <p
            className="mb-12"
            style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.875rem', color: 'rgba(250,248,244,0.38)', fontWeight: 300, lineHeight: 1.8 }}
          >
            Kassiopi, Corfu, Greece
          </p>

          {/* Contact details */}
          <div className="space-y-6 mb-10">
            {CONTACTS.map(({ href, Icon, label, value, external }) => (
              <a
                key={label}
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noopener noreferrer' : undefined}
                className="flex items-start gap-4 group"
              >
                <Icon size={14} style={{ color: '#C9A96E', flexShrink: 0, marginTop: 3 }} />
                <div>
                  <p
                    className="mb-0.5"
                    style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.7rem', color: 'rgba(250,248,244,0.28)', fontWeight: 300, textTransform: 'uppercase', letterSpacing: '0.12em' }}
                  >
                    {label}
                  </p>
                  <p
                    className="transition-colors duration-200 group-hover:text-[#C9A96E]"
                    style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.9rem', color: 'rgba(250,248,244,0.7)', fontWeight: 400 }}
                  >
                    {value}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* WhatsApp button */}
          <a
            href="https://wa.me/306985743536"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-5 py-4 w-full transition-all duration-200 mb-8"
            style={{ backgroundColor: '#25D366' }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#1ebe59'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#25D366'}
          >
            <span className="text-white">{WA_SVG}</span>
            <div>
              <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.875rem', fontWeight: 500, color: '#ffffff' }}>
                Chat on WhatsApp
              </p>
              <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.75rem', color: 'rgba(255,255,255,0.72)', fontWeight: 300 }}>
                Fastest way to reach us
              </p>
            </div>
          </a>

          {/* Response time note */}
          <p
            style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.78rem', color: 'rgba(250,248,244,0.28)', fontWeight: 300, lineHeight: 1.7 }}
          >
            Available 7 days a week. We respond to all enquiries within 24 hours.
          </p>
        </div>

        {/* Award badge */}
        <div className="mt-12 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <img
            src={AWARD_BADGE}
            alt="TRA 2025 Digital Gallery Award"
            className="h-16 opacity-60"
            loading="lazy"
          />
        </div>
      </div>

      {/* RIGHT — Cream form panel */}
      <div
        className="px-8 py-24 md:px-12 lg:px-16 lg:pt-36"
        style={{ backgroundColor: '#FAF8F4' }}
      >
        <div className="max-w-xl">
          <p
            className="uppercase mb-5"
            style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.72rem', color: '#C9A96E', fontWeight: 500, letterSpacing: '0.28em' }}
          >
            Send an Enquiry
          </p>
          <div className="w-8 h-px mb-8" style={{ backgroundColor: '#C9A96E' }} />
          <h2
            className="font-light mb-4"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              color: '#1C2B3A',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              lineHeight: 1.08,
            }}
          >
            Enquire About<br />Villa Leveque
          </h2>
          <p
            className="mb-12"
            style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.9rem', color: '#6B7C5C', fontWeight: 300, lineHeight: 1.9, maxWidth: '40ch' }}
          >
            Share your preferred dates and we'll confirm availability, answer any questions and
            help you plan the perfect stay.
          </p>

          <ContactForm prefilledDates={prefilledDates} />

          {/* Privacy note */}
          <p
            className="mt-8"
            style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.75rem', color: '#C4B9A8', fontWeight: 300, lineHeight: 1.7 }}
          >
            Your information is used only to respond to your enquiry. We never share your details with third parties.
          </p>
        </div>
      </div>
    </div>
  )
}
