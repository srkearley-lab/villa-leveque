import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import LocationSection from '../components/LocationSection'
import BookingEngine from '../components/BookingEngine'
import { IMAGES } from '../data/images'

export default function LocationPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[380px] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${IMAGES.views[0].src})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/30" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pb-14 text-white w-full">
          <p className="text-xs tracking-widest uppercase font-light text-white/60 mb-3">
            North-East Corfu
          </p>
          <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl font-medium">
            Location
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-[#fdfcfa]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-xs tracking-widest uppercase font-medium text-[#b89a6b] mb-4">
            Setting
          </p>
          <h2 className="font-['Playfair_Display'] text-3xl text-[#1e2d3d] mb-6">
            The North-Eastern Coast of Corfu
          </h2>
          <p className="text-[#6b7a5c] text-sm font-light leading-relaxed">
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
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <div className="text-center text-white">
            <p className="font-['Playfair_Display'] text-3xl md:text-4xl font-medium mb-2">
              Kassiopi, Corfu
            </p>
            <p className="text-white/70 text-sm font-light tracking-widest uppercase">
              North-Eastern Coast &middot; Greece
            </p>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-20 lg:py-28 bg-[#f5f0e8]">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl text-[#1e2d3d] mb-4">
            Discover It for Yourself
          </h2>
          <p className="text-[#6b7a5c] text-sm font-light mb-10 leading-relaxed">
            Check availability for your preferred dates and let us arrange the rest.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#1e2d3d] text-white text-xs tracking-widest uppercase font-medium hover:bg-[#2a3e55] transition-colors"
          >
            Check Availability <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  )
}
