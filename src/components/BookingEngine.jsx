import { useState } from 'react'
import { Calendar, Users, ArrowRight } from 'lucide-react'

// TODO: Connect to Lodgify availability API or embed Lodgify booking widget.
// Replace this form with Lodgify's embeddable widget once API credentials are available.
// API docs: https://app.lodgify.com/

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

export default function BookingEngine({ compact = false }) {
  const [arrival, setArrival] = useState('')
  const [departure, setDeparture] = useState('')
  const [guests, setGuests] = useState('2')
  const [focusField, setFocusField] = useState(null)

  const today = new Date().toISOString().split('T')[0]

  const handleSubmit = (e) => {
    e.preventDefault()
    const params = new URLSearchParams({ arrival, departure, guests })
    window.location.href = `/contact?${params.toString()}`
  }

  const getFocusStyle = (field) => ({
    ...inputStyle,
    borderColor: focusField === field ? '#C9A96E' : '#E8DFD0',
  })

  if (compact) {
    return (
      <div
        className="p-7"
        style={{
          backgroundColor: '#FAF8F4',
          border: '1px solid #E8DFD0',
          boxShadow: '0 8px 32px rgba(28,43,58,0.08)',
        }}
      >
        <p
          className="text-xs tracking-[0.2em] uppercase mb-5"
          style={{ fontFamily: 'Manrope, sans-serif', color: '#C9A96E', fontWeight: 500 }}
        >
          Check Availability
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label style={labelStyle}>Arrival</label>
              <input
                type="date"
                value={arrival}
                min={today}
                onChange={e => setArrival(e.target.value)}
                onFocus={() => setFocusField('arrival-c')}
                onBlur={() => setFocusField(null)}
                style={getFocusStyle('arrival-c')}
              />
            </div>
            <div>
              <label style={labelStyle}>Departure</label>
              <input
                type="date"
                value={departure}
                min={arrival || today}
                onChange={e => setDeparture(e.target.value)}
                onFocus={() => setFocusField('dep-c')}
                onBlur={() => setFocusField(null)}
                style={getFocusStyle('dep-c')}
              />
            </div>
          </div>
          <div>
            <label style={labelStyle}>Guests</label>
            <select
              value={guests}
              onChange={e => setGuests(e.target.value)}
              style={getFocusStyle('guests-c')}
              onFocus={() => setFocusField('guests-c')}
              onBlur={() => setFocusField(null)}
            >
              {[1, 2, 3, 4, 5, 6].map(n => (
                <option key={n} value={n}>{n} {n === 1 ? 'guest' : 'guests'}</option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="w-full py-3.5 text-xs tracking-[0.2em] uppercase font-medium flex items-center justify-center gap-2 transition-all duration-200"
            style={{
              fontFamily: 'Manrope, sans-serif',
              backgroundColor: '#C9A96E',
              color: '#0F1A24',
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#b8935a'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#C9A96E'}
          >
            Submit Enquiry <ArrowRight size={13} />
          </button>
        </form>
        <p
          className="text-xs mt-4 text-center leading-relaxed"
          style={{ fontFamily: 'Manrope, sans-serif', color: '#9aA090', fontWeight: 300 }}
        >
          Submit your preferred dates and we'll confirm availability within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: '#FAF8F4' }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p
            className="text-xs tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: 'Manrope, sans-serif', color: '#C9A96E', fontWeight: 500 }}
          >
            Plan Your Stay
          </p>
          <h2
            className="text-4xl md:text-5xl font-light mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: '#1C2B3A' }}
          >
            Check Availability
          </h2>
          <p
            className="text-sm leading-relaxed"
            style={{ fontFamily: 'Manrope, sans-serif', color: '#6B7C5C', fontWeight: 300 }}
          >
            Submit your preferred dates and we'll confirm availability and rates within 24 hours.
            No payment required at this stage.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto p-8 md:p-10"
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #E8DFD0',
            boxShadow: '0 12px 48px rgba(28,43,58,0.07)',
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { label: 'Arrival', icon: <Calendar size={11} />, field: 'arrival', value: arrival, min: today, set: setArrival },
              { label: 'Departure', icon: <Calendar size={11} />, field: 'dep', value: departure, min: arrival || today, set: setDeparture },
            ].map(({ label, icon, field, value, min, set }) => (
              <div key={field}>
                <label style={labelStyle}>
                  <span className="inline-flex items-center gap-1.5">
                    <span style={{ color: '#C9A96E' }}>{icon}</span>
                    {label}
                  </span>
                </label>
                <input
                  type="date"
                  value={value}
                  min={min}
                  onChange={e => set(e.target.value)}
                  onFocus={() => setFocusField(field)}
                  onBlur={() => setFocusField(null)}
                  style={getFocusStyle(field)}
                />
              </div>
            ))}
            <div>
              <label style={labelStyle}>
                <span className="inline-flex items-center gap-1.5">
                  <span style={{ color: '#C9A96E' }}><Users size={11} /></span>
                  Guests
                </span>
              </label>
              <select
                value={guests}
                onChange={e => setGuests(e.target.value)}
                onFocus={() => setFocusField('guests')}
                onBlur={() => setFocusField(null)}
                style={getFocusStyle('guests')}
              >
                {[1, 2, 3, 4, 5, 6].map(n => (
                  <option key={n} value={n}>{n} {n === 1 ? 'guest' : 'guests'}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <button
              type="submit"
              className="w-full sm:w-auto flex-shrink-0 flex items-center justify-center gap-2 px-10 py-4 text-xs tracking-[0.2em] uppercase font-medium transition-all duration-200"
              style={{
                fontFamily: 'Manrope, sans-serif',
                backgroundColor: '#C9A96E',
                color: '#0F1A24',
              }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#b8935a'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#C9A96E'}
            >
              Submit Enquiry <ArrowRight size={13} />
            </button>
            <p
              className="text-xs leading-relaxed"
              style={{ fontFamily: 'Manrope, sans-serif', color: '#9aA090', fontWeight: 300 }}
            >
              No payment required. We'll contact you within 24 hours to confirm your dates and rates.
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}
