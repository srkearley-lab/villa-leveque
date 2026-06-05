import { useState } from 'react'
import { Calendar, Users, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

// TODO: Connect to Lodgify availability API or embed Lodgify booking widget.
// Replace this form with Lodgify's embeddable widget once API credentials are available.
// API docs: https://app.lodgify.com/

export default function BookingEngine({ compact = false }) {
  const [arrival, setArrival] = useState('')
  const [departure, setDeparture] = useState('')
  const [guests, setGuests] = useState('2')

  const today = new Date().toISOString().split('T')[0]

  const handleSubmit = (e) => {
    e.preventDefault()
    // Redirect to contact page with prefilled date info
    const params = new URLSearchParams({ arrival, departure, guests })
    window.location.href = `/contact?${params.toString()}`
  }

  if (compact) {
    return (
      <div className="bg-white border border-[#e8e2d9] p-6">
        <p className="text-xs tracking-widest uppercase font-medium text-[#b89a6b] mb-4">
          Check Availability
        </p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-xs text-[#6b7a5c] mb-1.5 font-medium">Arrival</label>
              <input
                type="date"
                value={arrival}
                min={today}
                onChange={(e) => setArrival(e.target.value)}
                className="w-full border border-[#e8e2d9] px-3 py-2.5 text-sm text-[#2c2c2c] focus:outline-none focus:border-[#1e2d3d] transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs text-[#6b7a5c] mb-1.5 font-medium">Departure</label>
              <input
                type="date"
                value={departure}
                min={arrival || today}
                onChange={(e) => setDeparture(e.target.value)}
                className="w-full border border-[#e8e2d9] px-3 py-2.5 text-sm text-[#2c2c2c] focus:outline-none focus:border-[#1e2d3d] transition-colors"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs text-[#6b7a5c] mb-1.5 font-medium">Guests</label>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full border border-[#e8e2d9] px-3 py-2.5 text-sm text-[#2c2c2c] focus:outline-none focus:border-[#1e2d3d] transition-colors bg-white"
            >
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <option key={n} value={n}>{n} {n === 1 ? 'guest' : 'guests'}</option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-[#1e2d3d] text-white py-3 text-xs tracking-widest uppercase font-medium hover:bg-[#2a3e55] transition-colors flex items-center justify-center gap-2"
          >
            Submit Enquiry <ArrowRight size={14} />
          </button>
        </form>
        <p className="text-xs text-[#9a9490] mt-3 text-center leading-relaxed">
          Submit your preferred dates and we'll confirm availability.
        </p>
      </div>
    )
  }

  return (
    <section className="bg-[#f5f0e8] py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-10">
          <p className="text-xs tracking-widest uppercase font-medium text-[#b89a6b] mb-3">
            Plan Your Stay
          </p>
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl text-[#1e2d3d] mb-4">
            Check Availability
          </h2>
          <p className="text-[#6b7a5c] text-sm leading-relaxed">
            Submit your preferred dates and number of guests and we'll confirm availability within 24 hours.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white border border-[#e8e2d9] p-8 max-w-3xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="block text-xs tracking-wider uppercase text-[#6b7a5c] mb-2 font-medium">
                <Calendar size={12} className="inline mr-1.5" />
                Arrival
              </label>
              <input
                type="date"
                value={arrival}
                min={today}
                onChange={(e) => setArrival(e.target.value)}
                className="w-full border border-[#e8e2d9] px-4 py-3 text-sm text-[#2c2c2c] focus:outline-none focus:border-[#1e2d3d] transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs tracking-wider uppercase text-[#6b7a5c] mb-2 font-medium">
                <Calendar size={12} className="inline mr-1.5" />
                Departure
              </label>
              <input
                type="date"
                value={departure}
                min={arrival || today}
                onChange={(e) => setDeparture(e.target.value)}
                className="w-full border border-[#e8e2d9] px-4 py-3 text-sm text-[#2c2c2c] focus:outline-none focus:border-[#1e2d3d] transition-colors"
              />
            </div>
            <div>
              <label className="block text-xs tracking-wider uppercase text-[#6b7a5c] mb-2 font-medium">
                <Users size={12} className="inline mr-1.5" />
                Guests
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full border border-[#e8e2d9] px-4 py-3 text-sm text-[#2c2c2c] focus:outline-none focus:border-[#1e2d3d] transition-colors bg-white"
              >
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n}>{n} {n === 1 ? 'guest' : 'guests'}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button
              type="submit"
              className="w-full sm:w-auto flex-1 bg-[#1e2d3d] text-white px-8 py-3.5 text-xs tracking-widest uppercase font-medium hover:bg-[#2a3e55] transition-colors flex items-center justify-center gap-2"
            >
              Submit Enquiry <ArrowRight size={14} />
            </button>
            <p className="text-xs text-[#9a9490] text-center sm:text-left flex-1">
              No payment required. We'll contact you within 24 hours to confirm your dates and rates.
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}
