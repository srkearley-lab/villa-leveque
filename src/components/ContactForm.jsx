import { useState } from 'react'
import { ArrowRight, CheckCircle } from 'lucide-react'

// TODO: Connect to backend email service (e.g. Resend, SendGrid, or Formspree)
// to send enquiry emails to info@ourvillarentals.com.
// Currently uses mailto: as a fallback. Replace with API call when ready.

const inputStyle = {
  width: '100%',
  border: '1px solid #E8DFD0',
  padding: '12px 16px',
  fontSize: '13px',
  color: '#1C2B3A',
  backgroundColor: '#FAF8F4',
  fontFamily: 'Manrope, sans-serif',
  fontWeight: 300,
  outline: 'none',
  transition: 'border-color 0.2s',
}

const labelStyle = {
  display: 'block',
  fontSize: '10px',
  letterSpacing: '0.18em',
  textTransform: 'uppercase',
  color: '#6B7C5C',
  marginBottom: '8px',
  fontFamily: 'Manrope, sans-serif',
  fontWeight: 500,
}

export default function ContactForm({ prefilledDates = {} }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    arrival: prefilledDates.arrival || '',
    departure: prefilledDates.departure || '',
    guests: prefilledDates.guests || '2',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [focus, setFocus] = useState(null)

  const today = new Date().toISOString().split('T')[0]
  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    const subject = encodeURIComponent(`Villa Leveque Enquiry — ${form.arrival || 'Dates TBC'}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nArrival: ${form.arrival}\nDeparture: ${form.departure}\nGuests: ${form.guests}\n\nMessage:\n${form.message}`
    )
    window.location.href = `mailto:info@ourvillarentals.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  const getInputStyle = (field) => ({
    ...inputStyle,
    borderColor: focus === field ? '#C9A96E' : '#E8DFD0',
  })

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <CheckCircle size={44} style={{ color: '#6B7C5C', marginBottom: 20 }} />
        <h3
          className="text-3xl font-light mb-3"
          style={{ fontFamily: "'Cormorant Garamond', serif", color: '#1C2B3A' }}
        >
          Enquiry Sent
        </h3>
        <p
          className="text-sm max-w-sm leading-relaxed"
          style={{ fontFamily: 'Manrope, sans-serif', color: '#6B7C5C', fontWeight: 300, lineHeight: 1.8 }}
        >
          Thank you for your interest in Villa Leveque. Your email client has opened
          with your enquiry. We'll respond within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label style={labelStyle}>Full Name *</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Your name"
            style={getInputStyle('name')}
            onFocus={() => setFocus('name')}
            onBlur={() => setFocus(null)}
          />
        </div>
        <div>
          <label style={labelStyle}>Email Address *</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="your@email.com"
            style={getInputStyle('email')}
            onFocus={() => setFocus('email')}
            onBlur={() => setFocus(null)}
          />
        </div>
      </div>

      <div>
        <label style={labelStyle}>Phone / WhatsApp</label>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="+44 or +30..."
          style={getInputStyle('phone')}
          onFocus={() => setFocus('phone')}
          onBlur={() => setFocus(null)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div>
          <label style={labelStyle}>Arrival Date</label>
          <input
            type="date"
            name="arrival"
            value={form.arrival}
            min={today}
            onChange={handleChange}
            style={getInputStyle('arrival')}
            onFocus={() => setFocus('arrival')}
            onBlur={() => setFocus(null)}
          />
        </div>
        <div>
          <label style={labelStyle}>Departure Date</label>
          <input
            type="date"
            name="departure"
            value={form.departure}
            min={form.arrival || today}
            onChange={handleChange}
            style={getInputStyle('departure')}
            onFocus={() => setFocus('departure')}
            onBlur={() => setFocus(null)}
          />
        </div>
        <div>
          <label style={labelStyle}>Guests</label>
          <select
            name="guests"
            value={form.guests}
            onChange={handleChange}
            style={getInputStyle('guests')}
            onFocus={() => setFocus('guests')}
            onBlur={() => setFocus(null)}
          >
            {[1, 2, 3, 4, 5, 6].map(n => (
              <option key={n} value={n}>{n} {n === 1 ? 'guest' : 'guests'}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label style={labelStyle}>Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder="Tell us about your stay — any special requirements, questions about services, or anything else we can help with."
          style={{
            ...getInputStyle('message'),
            resize: 'none',
          }}
          onFocus={() => setFocus('message')}
          onBlur={() => setFocus(null)}
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 px-10 py-4 text-xs tracking-[0.18em] uppercase font-medium transition-all duration-200 w-full sm:w-auto"
        style={{
          fontFamily: 'Manrope, sans-serif',
          backgroundColor: '#C9A96E',
          color: '#0F1A24',
        }}
        onMouseEnter={e => e.currentTarget.style.backgroundColor = '#b8935a'}
        onMouseLeave={e => e.currentTarget.style.backgroundColor = '#C9A96E'}
      >
        Send Enquiry <ArrowRight size={13} />
      </button>

      <p
        className="text-xs leading-relaxed"
        style={{ fontFamily: 'Manrope, sans-serif', color: '#9aA090', fontWeight: 300 }}
      >
        No payment is required at this stage. We'll contact you within 24 hours to confirm
        availability and discuss your stay.
      </p>
    </form>
  )
}
