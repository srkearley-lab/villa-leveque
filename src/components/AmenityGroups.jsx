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
    <section className="py-20 lg:py-28 bg-[#f5f0e8]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs tracking-widest uppercase font-medium text-[#b89a6b] mb-3">
            What's Included
          </p>
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl text-[#1e2d3d]">
            Villa Amenities
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {AMENITY_GROUPS.map((group) => (
            <div key={group.group} className="bg-white p-8 border border-[#e8e2d9]">
              <h3 className="font-['Playfair_Display'] text-lg text-[#1e2d3d] mb-5 pb-4 border-b border-[#e8e2d9]">
                {group.group}
              </h3>
              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[#6b7a5c] font-light">
                    <span className="text-[#b89a6b] flex-shrink-0 mt-0.5">–</span>
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
