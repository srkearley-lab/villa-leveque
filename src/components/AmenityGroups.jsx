import {
  BedDouble, ShowerHead, Wind, Layers,
  Utensils, Coffee, Refrigerator, Tv,
  Waves, Sun, UtensilsCrossed, Flame,
  Wifi, Car, Lock, Volume2,
} from 'lucide-react'

const GROUPS = [
  {
    title: 'Bedrooms',
    items: [
      { icon: BedDouble,  label: '3 king-size en-suite bedrooms' },
      { icon: ShowerHead, label: 'Private en-suite bathrooms' },
      { icon: Wind,       label: 'Air conditioning throughout' },
      { icon: Layers,     label: 'Premium linen & towels' },
    ],
  },
  {
    title: 'Kitchen & Living',
    items: [
      { icon: Utensils,     label: 'Fully equipped kitchen' },
      { icon: Coffee,       label: 'Nespresso coffee machine' },
      { icon: Refrigerator, label: 'American fridge/freezer' },
      { icon: Tv,           label: 'Smart TV with streaming' },
    ],
  },
  {
    title: 'Outdoor & Pool',
    items: [
      { icon: Waves,          label: 'Private swimming pool' },
      { icon: Sun,            label: 'Sun loungers & parasols' },
      { icon: UtensilsCrossed, label: 'Outdoor dining for 8' },
      { icon: Flame,          label: 'BBQ grill' },
    ],
  },
  {
    title: 'Tech & Parking',
    items: [
      { icon: Wifi,   label: 'High-speed WiFi throughout' },
      { icon: Car,    label: 'Private parking' },
      { icon: Lock,   label: 'Safe in master bedroom' },
      { icon: Volume2, label: 'Bluetooth speaker' },
    ],
  },
]

export default function AmenityGroups() {
  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: '#FAF8F4' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">

        <div className="text-center mb-16">
          <p
            className="uppercase mb-5"
            style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.72rem', color: '#C9A96E', fontWeight: 500, letterSpacing: '0.28em' }}
          >
            What's Included
          </p>
          <div className="w-8 h-px mx-auto mb-8" style={{ backgroundColor: '#C9A96E' }} />
          <h2
            className="font-light"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: 'italic',
              color: '#1C2B3A',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
            }}
          >
            Villa Amenities
          </h2>
        </div>

        {/* 4-column desktop icon grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {GROUPS.map(group => (
            <div key={group.title}>
              {/* Group heading */}
              <div className="flex items-center gap-3 mb-7 pb-4" style={{ borderBottom: '1px solid #E8DFD0' }}>
                <div className="w-4 h-px" style={{ backgroundColor: '#C9A96E' }} />
                <h3
                  className="font-normal"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    color: '#1C2B3A',
                    fontSize: '1.15rem',
                  }}
                >
                  {group.title}
                </h3>
              </div>

              {/* Amenity items */}
              <ul className="space-y-4">
                {group.items.map(({ icon: Icon, label }) => (
                  <li key={label} className="flex items-start gap-3">
                    <Icon
                      size={14}
                      style={{ color: '#C9A96E', flexShrink: 0, marginTop: 3 }}
                    />
                    <span
                      style={{
                        fontFamily: 'Manrope, sans-serif',
                        fontSize: '0.875rem',
                        color: '#6B7C5C',
                        fontWeight: 300,
                        lineHeight: 1.6,
                      }}
                    >
                      {label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Full amenity list link */}
        <p
          className="text-center mt-14"
          style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.8rem', color: '#C4B9A8', fontWeight: 300 }}
        >
          Full amenity list available on enquiry &nbsp;&middot;&nbsp; Additional services available through our concierge
        </p>
      </div>
    </section>
  )
}
