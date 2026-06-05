import { useState } from 'react'
import { ArrowRight, Minus, Plus, Calendar } from 'lucide-react'

// TODO: Replace with Lodgify embeddable widget when API credentials are available.
// Lodgify docs: https://app.lodgify.com/

function formatDisplayDate(isoDate) {
  if (!isoDate) return null
  const d = new Date(isoDate + 'T00:00:00')
  return {
    day: d.getDate(),
    month: d.toLocaleString('en-GB', { month: 'short' }).toUpperCase(),
    year: d.getFullYear(),
    weekday: d.toLocaleString('en-GB', { weekday: 'short' }).toUpperCase(),
  }
}

function calcNights(arrival, departure) {
  if (!arrival || !departure) return null
  const diff = (new Date(departure) - new Date(arrival)) / 86400000
  return diff > 0 ? diff : null
}

const DATE_INPUT_STYLE = {
  position: 'absolute',
  inset: 0,
  opacity: 0,
  cursor: 'pointer',
  width: '100%',
  height: '100%',
  zIndex: 2,
}

function DateTile({ label, isoDate, min, onChange, placeholder }) {
  const display = formatDisplayDate(isoDate)
  const [focused, setFocused] = useState(false)

  return (
    <div className="relative flex flex-col" style={{ minHeight: 92 }}>
      {/* Visible tile */}
      <div
        className="relative flex-1 px-5 py-4 transition-all duration-200"
        style={{
          border: `1px solid ${focused ? '#C9A96E' : '#E8DFD0'}`,
          backgroundColor: focused ? 'rgba(201,169,110,0.04)' : '#FFFFFF',
          boxShadow: focused ? '0 0 0 3px rgba(201,169,110,0.1)' : 'none',
        }}
      >
        <p
          className="text-xs tracking-[0.18em] uppercase mb-2"
          style={{ fontFamily: 'Manrope, sans-serif', color: '#C9A96E', fontWeight: 500 }}
        >
          {label}
        </p>
        {display ? (
          <div className="flex items-baseline gap-1.5">
            <span
              className="leading-none"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2.25rem', color: '#1C2B3A', fontWeight: 300 }}
            >
              {display.day}
            </span>
            <div>
              <p className="text-xs font-medium" style={{ fontFamily: 'Manrope, sans-serif', color: '#1C2B3A' }}>
                {display.month} {display.year}
              </p>
              <p className="text-xs" style={{ fontFamily: 'Manrope, sans-serif', color: '#9aA090', fontWeight: 300 }}>
                {display.weekday}
              </p>
            </div>
          </div>
        ) : (
          <div className="flex items-center gap-2 mt-1">
            <Calendar size={14} style={{ color: '#C9A96E', opacity: 0.6 }} />
            <p className="text-sm" style={{ fontFamily: 'Manrope, sans-serif', color: '#9aA090', fontWeight: 300 }}>
              {placeholder}
            </p>
          </div>
        )}

        {/* Hidden native date input */}
        <input
          type="date"
          value={isoDate}
          min={min}
          onChange={e => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={DATE_INPUT_STYLE}
        />
      </div>
    </div>
  )
}

function GuestCounter({ value, onChange }) {
  return (
    <div
      className="px-5 py-4"
      style={{ border: '1px solid #E8DFD0', backgroundColor: '#FFFFFF' }}
    >
      <p
        className="text-xs tracking-[0.18em] uppercase mb-3"
        style={{ fontFamily: 'Manrope, sans-serif', color: '#C9A96E', fontWeight: 500 }}
      >
        Guests
      </p>
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => onChange(Math.max(1, value - 1))}
          className="w-8 h-8 flex items-center justify-center transition-all duration-150"
          style={{ border: '1px solid #E8DFD0', color: '#6B7C5C' }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = '#C9A96E'; e.currentTarget.style.color = '#C9A96E' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = '#E8DFD0'; e.currentTarget.style.color = '#6B7C5C' }}
        >
          <Minus size={12} />
        </button>
        <div className="text-center">
          <span
            style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', color: '#1C2B3A', fontWeight: 300, lineHeight: 1 }}
          >
            {value}
          </span>
          <p className="text-xs mt-0.5" style={{ fontFamily: 'Manrope, sans-serif', color: '#9aA090', fontWeight: 300 }}>
            {value === 1 ? 'guest' : 'guests'}
          </p>
        </div>
        <button
          type="button"
          onClick={() => onChange(Math.min(6, value + 1))}
          className="w-8 h-8 flex items-center justify-center transition-all duration-150"
          style={{ border: '1px solid #E8DFD0', color: '#6B7C5C' }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = '#C9A96E'; e.currentTarget.style.color = '#C9A96E' }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = '#E8DFD0'; e.currentTarget.style.color = '#6B7C5C' }}
        >
          <Plus size={12} />
        </button>
      </div>
    </div>
  )
}

export default function BookingEngine({ compact = false }) {
  const [arrival, setArrival] = useState('')
  const [departure, setDeparture] = useState('')
  const [guests, setGuests] = useState(2)

  const today = new Date().toISOString().split('T')[0]
  const nights = calcNights(arrival, departure)

  const handleSubmit = (e) => {
    e.preventDefault()
    const params = new URLSearchParams({ arrival, departure, guests })
    window.location.href = `/contact?${params.toString()}`
  }

  if (compact) {
    return (
      <div
        className="p-6 md:p-7"
        style={{
          backgroundColor: '#FAF8F4',
          border: '1px solid #E8DFD0',
          boxShadow: '0 8px 40px rgba(28,43,58,0.07)',
        }}
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="h-px w-5" style={{ backgroundColor: '#C9A96E' }} />
          <p
            className="text-xs tracking-[0.2em] uppercase"
            style={{ fontFamily: 'Manrope, sans-serif', color: '#C9A96E', fontWeight: 500 }}
          >
            Check Availability
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-3">
          <DateTile
            label="Arrival"
            isoDate={arrival}
            min={today}
            onChange={setArrival}
            placeholder="Select date"
          />

          {/* Nights badge between dates */}
          {nights && (
            <div className="flex items-center justify-center gap-3 py-1">
              <div className="h-px flex-1" style={{ backgroundColor: '#E8DFD0' }} />
              <span
                className="text-xs px-3 py-1"
                style={{
                  fontFamily: 'Manrope, sans-serif',
                  color: '#C9A96E',
                  fontWeight: 500,
                  border: '1px solid rgba(201,169,110,0.3)',
                  backgroundColor: 'rgba(201,169,110,0.06)',
                  letterSpacing: '0.05em',
                }}
              >
                {nights} {nights === 1 ? 'night' : 'nights'}
              </span>
              <div className="h-px flex-1" style={{ backgroundColor: '#E8DFD0' }} />
            </div>
          )}

          <DateTile
            label="Departure"
            isoDate={departure}
            min={arrival || today}
            onChange={setDeparture}
            placeholder="Select date"
          />
          <GuestCounter value={guests} onChange={setGuests} />

          <button
            type="submit"
            className="w-full py-4 text-xs tracking-[0.22em] uppercase font-medium flex items-center justify-center gap-2 transition-all duration-200 mt-1 min-h-[52px]"
            style={{ fontFamily: 'Manrope, sans-serif', backgroundColor: '#C9A96E', color: '#0F1A24' }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#b8935a'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#C9A96E'}
          >
            Submit Enquiry <ArrowRight size={12} />
          </button>
        </form>
        <p
          className="text-xs mt-4 text-center leading-relaxed"
          style={{ fontFamily: 'Manrope, sans-serif', color: '#9aA090', fontWeight: 300 }}
        >
          No payment required — we'll confirm within 24 hours.
        </p>
      </div>
    )
  }

  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: '#FAF8F4' }}>
      <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-14">
          <div className="w-8 h-px mx-auto mb-8" style={{ backgroundColor: '#C9A96E' }} />
          <p
            className="text-xs tracking-[0.22em] uppercase mb-4"
            style={{ fontFamily: 'Manrope, sans-serif', color: '#C9A96E', fontWeight: 500 }}
          >
            Plan Your Stay
          </p>
          <h2
            className="font-light mb-4"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', color: '#1C2B3A', fontSize: 'var(--h2)' }}
          >
            Check Availability
          </h2>
          <p
            className="text-sm max-w-md mx-auto leading-relaxed"
            style={{ fontFamily: 'Manrope, sans-serif', color: '#6B7C5C', fontWeight: 300, lineHeight: 1.85 }}
          >
            Share your preferred dates and we'll confirm availability and rates within 24 hours.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="p-8 md:p-12"
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid #E8DFD0',
            boxShadow: '0 16px 60px rgba(28,43,58,0.07)',
          }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 items-start">
            <DateTile
              label="Arrival"
              isoDate={arrival}
              min={today}
              onChange={setArrival}
              placeholder="Select arrival"
            />

            <div className="flex flex-col items-center justify-center h-full py-4">
              <div className="flex items-center gap-3 w-full md:flex-col md:gap-2">
                <div className="h-px flex-1 md:w-px md:h-8" style={{ backgroundColor: '#E8DFD0' }} />
                {nights ? (
                  <div className="text-center">
                    <p
                      className="leading-none"
                      style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '2rem', color: '#1C2B3A', fontWeight: 300 }}
                    >
                      {nights}
                    </p>
                    <p
                      className="text-xs mt-1"
                      style={{ fontFamily: 'Manrope, sans-serif', color: '#C9A96E', fontWeight: 500, letterSpacing: '0.1em' }}
                    >
                      {nights === 1 ? 'NIGHT' : 'NIGHTS'}
                    </p>
                  </div>
                ) : (
                  <div className="w-4 h-4 flex-shrink-0" style={{ border: '1px solid rgba(201,169,110,0.4)', transform: 'rotate(45deg)' }} />
                )}
                <div className="h-px flex-1 md:w-px md:h-8" style={{ backgroundColor: '#E8DFD0' }} />
              </div>
            </div>

            <DateTile
              label="Departure"
              isoDate={departure}
              min={arrival || today}
              onChange={setDeparture}
              placeholder="Select departure"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <GuestCounter value={guests} onChange={setGuests} />
            <div
              className="px-5 py-4 flex flex-col justify-center"
              style={{ border: '1px solid rgba(201,169,110,0.2)', backgroundColor: 'rgba(201,169,110,0.04)' }}
            >
              <p
                className="text-xs tracking-[0.18em] uppercase mb-1"
                style={{ fontFamily: 'Manrope, sans-serif', color: '#C9A96E', fontWeight: 500 }}
              >
                Direct Booking
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ fontFamily: 'Manrope, sans-serif', color: '#6B7C5C', fontWeight: 300, lineHeight: 1.8 }}
              >
                No agency fees. Managed exclusively by Our Villa Rentals.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-5">
            <button
              type="submit"
              className="flex-shrink-0 flex items-center justify-center gap-2 px-12 py-4 text-xs tracking-[0.22em] uppercase font-medium transition-all duration-200 min-h-[52px] w-full sm:w-auto"
              style={{ fontFamily: 'Manrope, sans-serif', backgroundColor: '#C9A96E', color: '#0F1A24' }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = '#b8935a'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = '#C9A96E'}
            >
              Submit Enquiry <ArrowRight size={13} />
            </button>
            <p
              className="text-xs leading-relaxed text-center sm:text-left"
              style={{ fontFamily: 'Manrope, sans-serif', color: '#9aA090', fontWeight: 300 }}
            >
              No payment required at this stage. We'll contact you within 24 hours to confirm.
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}
