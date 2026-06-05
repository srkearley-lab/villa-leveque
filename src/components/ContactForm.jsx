import { useState } from 'react'
import { ArrowRight, CheckCircle } from 'lucide-react'
import CTAButton from './CTAButton'

// TODO: Connect to backend email service (e.g. Resend, SendGrid, or Formspree)
// to send enquiry emails to info@ourvillarentals.com.
// Currently uses mailto: as a fallback.

function Field({ label, required, error, children }) {
  return (
    <div className="flex flex-col gap-2">
      <label
        className="text-xs tracking-[0.18em] uppercase"
        style={{ fontFamily: 'Manrope, sans-serif', color: '#6B7C5C', fontWeight: 500 }}
      >
        {label}{required && <span style={{ color: '#C9A96E' }}> *</span>}
      </label>
      {children}
      {error && (
        <p className="text-xs" style={{ color: '#b8935a', fontFamily: 'Manrope, sans-serif' }}>{error}</p>
      )}
    </div>
  )
}

const BASE = {
  width: '100%',
  border: '1px solid #E8DFD0',
  backgroundColor: '#FFFFFF',
  fontFamily: 'Manrope, sans-serif',
  fontWeight: 300,
  fontSize: '0.9375rem',
  color: '#1C2B3A',
  outline: 'none',
  transition: 'border-color 0.2s, box-shadow 0.2s',
  padding: '14px 18px',
  lineHeight: 1.5,
  minHeight: 52,
  borderRadius: 0,
  appearance: 'none',
}

function Input({ type = 'text', name, value, onChange, placeholder, required, min }) {
  const [focused, setFocused] = useState(false)
  return (
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
      min={min}
      style={{
        ...BASE,
        borderColor: focused ? '#C9A96E' : '#E8DFD0',
        boxShadow: focused ? '0 0 0 3px rgba(201,169,110,0.09)' : 'none',
      }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />
  )
}

function Textarea({ name, value, onChange, placeholder, rows = 5 }) {
  const [focused, setFocused] = useState(false)
  return (
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      rows={rows}
      style={{
        ...BASE,
        minHeight: 'unset',
        resize: 'none',
        borderColor: focused ? '#C9A96E' : '#E8DFD0',
        boxShadow: focused ? '0 0 0 3px rgba(201,169,110,0.09)' : 'none',
      }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    />
  )
}

function Select({ name, value, onChange, children }) {
  const [focused, setFocused] = useState(false)
  return (
    <select
      name={name}
      value={value}
      onChange={onChange}
      style={{
        ...BASE,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%23C9A96E' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right 16px center',
        paddingRight: 42,
        borderColor: focused ? '#C9A96E' : '#E8DFD0',
        boxShadow: focused ? '0 0 0 3px rgba(201,169,110,0.09)' : 'none',
      }}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
    >
      {children}
    </select>
  )
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
  const today = new Date().toISOString().split('T')[0]

  const set = (field) => (e) => setForm(prev => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Villa Leveque Enquiry — ${form.arrival || 'Dates TBC'}`)
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nArrival: ${form.arrival}\nDeparture: ${form.departure}\nGuests: ${form.guests}\n\nMessage:\n${form.message}`
    )
    window.location.href = `mailto:info@ourvillarentals.com?subject=${subject}&body=${body}`
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <div className="w-8 h-px mb-8 mx-auto" style={{ backgroundColor: '#C9A96E' }} />
        <CheckCircle size={36} style={{ color: '#6B7C5C', marginBottom: 20 }} />
        <h3
          className="font-light mb-3"
          style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', color: '#1C2B3A', fontSize: '2rem' }}
        >
          Enquiry Sent
        </h3>
        <p
          className="text-sm max-w-sm leading-relaxed"
          style={{ fontFamily: 'Manrope, sans-serif', color: '#6B7C5C', fontWeight: 300, lineHeight: 1.9 }}
        >
          Thank you for your interest in Villa Leveque. Your email client has opened with your
          enquiry pre-filled. We'll respond within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-7">
      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <Field label="Full Name" required>
          <Input name="name" value={form.name} onChange={set('name')} placeholder="Your full name" required />
        </Field>
        <Field label="Email Address" required>
          <Input type="email" name="email" value={form.email} onChange={set('email')} placeholder="your@email.com" required />
        </Field>
      </div>

      {/* Phone */}
      <Field label="Phone / WhatsApp">
        <Input type="tel" name="phone" value={form.phone} onChange={set('phone')} placeholder="+44 or +30..." />
      </Field>

      {/* Dates */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <Field label="Arrival Date">
          <Input type="date" name="arrival" value={form.arrival} onChange={set('arrival')} min={today} />
        </Field>
        <Field label="Departure Date">
          <Input type="date" name="departure" value={form.departure} onChange={set('departure')} min={form.arrival || today} />
        </Field>
        <Field label="Guests">
          <Select name="guests" value={form.guests} onChange={set('guests')}>
            {[1, 2, 3, 4, 5, 6].map(n => (
              <option key={n} value={n}>{n} {n === 1 ? 'guest' : 'guests'}</option>
            ))}
          </Select>
        </Field>
      </div>

      {/* Message */}
      <Field label="Message">
        <Textarea
          name="message"
          value={form.message}
          onChange={set('message')}
          placeholder="Tell us about your stay — any questions, special requirements, or anything else we can help with."
          rows={5}
        />
      </Field>

      <div className="pt-2">
        <CTAButton type="submit" variant="primary" size="lg">
          Send Enquiry <ArrowRight size={13} />
        </CTAButton>
        <p
          className="mt-5"
          style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.875rem', color: '#9aA090', fontWeight: 300, lineHeight: 1.7 }}
        >
          No payment required. We'll confirm availability and respond within 24 hours.
        </p>
      </div>
    </form>
  )
}
