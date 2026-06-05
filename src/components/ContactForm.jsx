import { useState } from 'react'
import { ArrowRight, CheckCircle } from 'lucide-react'

// TODO: Connect to backend email service (e.g. Resend, SendGrid, or Formspree)
// to send enquiry emails to info@ourvillarentals.com.
// Currently uses mailto: as a fallback. Replace with API call when ready.

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

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

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
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <CheckCircle size={48} className="text-[#6b7a5c] mb-6" />
        <h3 className="font-['Playfair_Display'] text-2xl text-[#1e2d3d] mb-3">
          Enquiry Sent
        </h3>
        <p className="text-[#6b7a5c] text-sm max-w-sm leading-relaxed">
          Thank you for your interest in Villa Leveque. Your email client has opened
          with your enquiry. We'll respond within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-xs tracking-widest uppercase text-[#6b7a5c] mb-2 font-medium">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Your name"
            className="w-full border border-[#e8e2d9] px-4 py-3 text-sm text-[#2c2c2c] focus:outline-none focus:border-[#1e2d3d] transition-colors placeholder:text-[#c4bfb9]"
          />
        </div>
        <div>
          <label className="block text-xs tracking-widest uppercase text-[#6b7a5c] mb-2 font-medium">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="your@email.com"
            className="w-full border border-[#e8e2d9] px-4 py-3 text-sm text-[#2c2c2c] focus:outline-none focus:border-[#1e2d3d] transition-colors placeholder:text-[#c4bfb9]"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs tracking-widest uppercase text-[#6b7a5c] mb-2 font-medium">
          Phone / WhatsApp
        </label>
        <input
          type="tel"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="+44 or +30..."
          className="w-full border border-[#e8e2d9] px-4 py-3 text-sm text-[#2c2c2c] focus:outline-none focus:border-[#1e2d3d] transition-colors placeholder:text-[#c4bfb9]"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <label className="block text-xs tracking-widest uppercase text-[#6b7a5c] mb-2 font-medium">
            Arrival Date
          </label>
          <input
            type="date"
            name="arrival"
            value={form.arrival}
            min={today}
            onChange={handleChange}
            className="w-full border border-[#e8e2d9] px-4 py-3 text-sm text-[#2c2c2c] focus:outline-none focus:border-[#1e2d3d] transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs tracking-widest uppercase text-[#6b7a5c] mb-2 font-medium">
            Departure Date
          </label>
          <input
            type="date"
            name="departure"
            value={form.departure}
            min={form.arrival || today}
            onChange={handleChange}
            className="w-full border border-[#e8e2d9] px-4 py-3 text-sm text-[#2c2c2c] focus:outline-none focus:border-[#1e2d3d] transition-colors"
          />
        </div>
        <div>
          <label className="block text-xs tracking-widest uppercase text-[#6b7a5c] mb-2 font-medium">
            Guests
          </label>
          <select
            name="guests"
            value={form.guests}
            onChange={handleChange}
            className="w-full border border-[#e8e2d9] px-4 py-3 text-sm text-[#2c2c2c] focus:outline-none focus:border-[#1e2d3d] transition-colors bg-white"
          >
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <option key={n} value={n}>{n} {n === 1 ? 'guest' : 'guests'}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs tracking-widest uppercase text-[#6b7a5c] mb-2 font-medium">
          Message
        </label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder="Tell us about your stay — any special requirements, questions about services, or anything else we can help with."
          className="w-full border border-[#e8e2d9] px-4 py-3 text-sm text-[#2c2c2c] focus:outline-none focus:border-[#1e2d3d] transition-colors placeholder:text-[#c4bfb9] resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#1e2d3d] text-white px-10 py-4 text-xs tracking-widest uppercase font-medium hover:bg-[#2a3e55] transition-colors"
      >
        Send Enquiry <ArrowRight size={14} />
      </button>

      <p className="text-xs text-[#9a9490] leading-relaxed">
        No payment is required at this stage. We'll contact you within 24 hours to confirm
        availability and discuss your stay.
      </p>
    </form>
  )
}
