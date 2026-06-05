const AMENITY_GROUPS = [
  {
    group: 'Bedrooms & Bathrooms',
    items: [
      '3 en-suite double bedrooms',
      'Air conditioning in all rooms',
      'Premium bed linen and towels',
      'Hairdryer in each bathroom',
      'Complimentary toiletries',
      'Wardrobe and storage space',
      'Iron and ironing board',
    ],
  },
  {
    group: 'Kitchen & Dining',
    items: [
      'Fully equipped kitchen',
      'American-style fridge/freezer',
      'Dishwasher and washing machine',
      'Nespresso coffee machine',
      'Dining table for 8 guests (outdoor)',
      'Indoor dining area',
      'BBQ grill',
    ],
  },
  {
    group: 'Outdoor & Pool',
    items: [
      'Private swimming pool',
      'Sun loungers and parasols',
      'Pergola-shaded terrace',
      'Outdoor shower',
      'Sea-view terraces',
      'Garden and olive grove setting',
      'Outdoor dining furniture',
    ],
  },
  {
    group: 'Technology & Connectivity',
    items: [
      'High-speed WiFi throughout',
      'Smart TV with streaming apps',
      'Bluetooth speaker',
      'USB charging points',
    ],
  },
  {
    group: 'Practical & Safety',
    items: [
      'Secure private parking',
      'Safe in master bedroom',
      'First aid kit',
      'Fire extinguisher',
      'Baby cot available on request',
      'High chair available on request',
    ],
  },
  {
    group: 'Concierge & Services',
    items: [
      'Dedicated concierge service',
      'Private airport transfers (on request)',
      'Private chef (on request)',
      'Pre-arrival grocery shopping',
      'Mid-stay housekeeping',
      'Restaurant and activity reservations',
    ],
  },
]

export default function AmenityGroups() {
  return (
    <section className="py-24 md:py-32" style={{ backgroundColor: '#E8DFD0' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-16">
          <p
            className="text-xs tracking-[0.2em] uppercase mb-4"
            style={{ fontFamily: 'Manrope, sans-serif', color: '#C9A96E', fontWeight: 500 }}
          >
            What's Included
          </p>
          <h2
            className="text-4xl md:text-5xl font-light"
            style={{ fontFamily: "'Cormorant Garamond', serif", color: '#1C2B3A' }}
          >
            Villa Amenities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {AMENITY_GROUPS.map(group => (
            <div
              key={group.group}
              className="p-8"
              style={{ backgroundColor: '#FFFFFF', border: '1px solid rgba(232,223,208,0.6)' }}
            >
              <h3
                className="text-lg font-normal mb-5 pb-4"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  color: '#1C2B3A',
                  borderBottom: '1px solid #E8DFD0',
                }}
              >
                {group.group}
              </h3>
              <ul className="space-y-2.5">
                {group.items.map(item => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm"
                    style={{ fontFamily: 'Manrope, sans-serif', color: '#6B7C5C', fontWeight: 300 }}
                  >
                    <span style={{ color: '#C9A96E', flexShrink: 0, marginTop: 2 }}>—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
