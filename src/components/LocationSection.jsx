import { motion } from 'framer-motion'
import { MapPin, Anchor, Waves, Utensils, Car, Ship } from 'lucide-react'

const NEARBY = [
  {
    icon: <Anchor size={18} />,
    title: 'Kassiopi Harbour',
    desc: '10 minutes. A charming fishing village with waterfront restaurants, bars and boutiques.',
    time: '10 min drive',
  },
  {
    icon: <Waves size={18} />,
    title: 'Bataria Beach',
    desc: 'A beautiful pebble cove with clear water, just below Kassiopi — perfect for snorkelling.',
    time: '10 min drive',
  },
  {
    icon: <Utensils size={18} />,
    title: 'Dining in Kassiopi',
    desc: 'Fresh seafood, traditional tavernas and modern restaurants line the harbour promenade.',
    time: '10 min drive',
  },
  {
    icon: <Ship size={18} />,
    title: 'Boat Hire',
    desc: 'Explore the Albanian coastline and hidden coves by private boat from Kassiopi marina.',
    time: 'From Kassiopi',
  },
  {
    icon: <MapPin size={18} />,
    title: 'Corfu Town',
    desc: 'The UNESCO Old Town with Venetian architecture, museums and vibrant nightlife.',
    time: '45 min drive',
  },
  {
    icon: <Car size={18} />,
    title: 'Corfu Airport',
    desc: 'Well connected to all major UK and European airports throughout the summer season.',
    time: '50 min drive',
  },
]

export default function LocationSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#fdfcfa]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs tracking-widest uppercase font-medium text-[#b89a6b] mb-4">
              North-East Corfu
            </p>
            <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl text-[#1e2d3d] mb-6">
              Kassiopi &<br />its Surroundings
            </h2>
            <div className="space-y-4 text-[#6b7a5c] text-sm font-light leading-relaxed">
              <p>
                Kassiopi sits at the north-eastern tip of Corfu, where the turquoise waters of
                the Ionian Sea stretch towards the mountains of Albania on the horizon. It is one
                of the island's most beloved villages — lively enough to offer everything you need,
                yet small enough to feel entirely unhurried.
              </p>
              <p>
                The harbour is lined with excellent restaurants serving freshly caught fish and
                traditional Greek dishes. Hidden coves and pebble beaches are tucked around the
                headland, and the Venetian castle ruins above the village offer panoramic views
                that reward the short climb.
              </p>
              <p>
                Villa Leveque sits just a ten-minute drive from the village — close enough for
                evenings out, yet sufficiently removed to offer complete peace and privacy.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            {/* TODO: Replace with embedded Google Maps once API key is configured */}
            <div className="bg-[#e8e2d9] aspect-[4/3] flex flex-col items-center justify-center border border-[#d4cec5]">
              <MapPin size={32} className="text-[#b89a6b] mb-3" />
              <p className="text-sm text-[#6b7a5c] font-medium">Villa Leveque</p>
              <p className="text-xs text-[#9a9490] mt-1">Kassiopi, Corfu, Greece</p>
              <a
                href="https://maps.google.com/?q=Kassiopi,Corfu,Greece"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 text-xs tracking-widest uppercase font-medium text-[#1e2d3d] border border-[#1e2d3d] px-4 py-2 hover:bg-[#1e2d3d] hover:text-white transition-all"
              >
                View on Google Maps
              </a>
              <p className="text-xs text-[#c4bfb9] mt-6 px-4 text-center">
                {/* TODO: Embed Google Maps iframe here once Maps API key is available */}
                Map integration pending — contact us for exact directions.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Nearby highlights */}
        <div>
          <h3 className="font-['Playfair_Display'] text-2xl text-[#1e2d3d] mb-8 text-center">
            Nearby
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {NEARBY.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="flex gap-4 p-6 border border-[#e8e2d9] bg-white"
              >
                <div className="flex-shrink-0 text-[#b89a6b] mt-0.5">{item.icon}</div>
                <div>
                  <div className="flex items-center justify-between mb-1.5 flex-wrap gap-2">
                    <h4 className="font-['Playfair_Display'] text-base text-[#1e2d3d]">
                      {item.title}
                    </h4>
                    <span className="text-xs text-[#b89a6b] font-medium">{item.time}</span>
                  </div>
                  <p className="text-xs text-[#6b7a5c] font-light leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
