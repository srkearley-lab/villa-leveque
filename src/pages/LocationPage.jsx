import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import LocationSection from '../components/LocationSection'
import { IMAGES } from '../data/images'

export default function LocationPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMAGES.views[0].src})` }}
        />
        <div className="absolute inset-0" style={{ background: 'rgba(15,26,36,0.45)' }} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-16 text-white w-full">
          <p
            className="text-xs tracking-[0.25em] uppercase mb-4 text-white/50"
            style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 300 }}
          >
            North-East Corfu
          </p>
          <h1
            className="text-5xl md:text-6xl lg:text-7xl font-light"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic' }}
          >
            Location
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 md:py-28" style={{ backgroundColor: '#FAF8F4' }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p
            className="text-xs tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: 'Manrope, sans-serif', color: '#C9A96E', fontWeight: 500 }}
          >
            Setting
          </p>
          <h2
            className="text-4xl md:text-5xl font-light mb-7"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: '#1C2B3A' }}
          >
            The North-Eastern Coast of Corfu
          </h2>
          <p
            className="text-sm leading-relaxed"
            style={{ fontFamily: 'Manrope, sans-serif', color: '#6B7C5C', fontWeight: 300, lineHeight: 1.9 }}
          >
            Villa Leveque sits on the hillsides above Kassiopi, in one of the most beautiful and
            unspoilt corners of Corfu. This part of the island is known for its dramatic scenery,
            clear water and unhurried pace — qualities that make it a favourite for discerning travellers
            seeking privacy and beauty in equal measure.
          </p>
        </div>
      </section>

      {/* Main location content */}
      <LocationSection />

      {/* Aerial view full bleed */}
      <section className="relative h-[50vh] overflow-hidden">
        <img
          src={IMAGES.views[3].src}
          alt="Aerial view of Villa Leveque and Kassiopi"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ backgroundColor: 'rgba(15,26,36,0.38)' }}
        >
          <div className="text-center text-white px-6">
            <p
              className="text-4xl md:text-5xl font-light mb-3"
              style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic' }}
            >
              Kassiopi, Corfu
            </p>
            <p
              className="text-xs tracking-[0.25em] uppercase text-white/50"
              style={{ fontFamily: 'Manrope, sans-serif', fontWeight: 300 }}
            >
              North-Eastern Coast &nbsp;&middot;&nbsp; Greece
            </p>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-24 md:py-28 text-center" style={{ backgroundColor: '#1C2B3A' }}>
        <div className="max-w-xl mx-auto px-6">
          <div className="w-8 h-px mx-auto mb-8" style={{ backgroundColor: '#C9A96E' }} />
          <h2
            className="text-4xl md:text-5xl font-light mb-5"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: '#FAF8F4' }}
          >
            Discover It for Yourself
          </h2>
          <p
            className="text-sm font-light mb-10 leading-relaxed"
            style={{ fontFamily: 'Manrope, sans-serif', color: 'rgba(250,248,244,0.45)', fontWeight: 300 }}
          >
            Check availability for your preferred dates and let us arrange the rest.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-9 py-4 text-xs tracking-[0.18em] uppercase font-medium transition-all duration-200"
            style={{
              fontFamily: 'Manrope, sans-serif',
              backgroundColor: '#C9A96E',
              color: '#0F1A24',
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = '#b8935a'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = '#C9A96E'}
          >
            Check Availability <ArrowRight size={13} />
          </Link>
        </div>
      </section>
    </>
  )
}
