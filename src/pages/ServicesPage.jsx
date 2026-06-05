import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Star, Car, ChefHat, ShoppingBasket, ArrowRight, Phone, Mail } from 'lucide-react'

const SERVICES = [
  {
    icon: <Star size={28} />,
    title: 'Personal Concierge',
    intro: 'Your stay, perfectly arranged.',
    body: `Your dedicated concierge is available throughout your stay to arrange anything that makes your holiday more enjoyable. From securing a table at the best restaurant in Kassiopi to organising a private sailing trip along the Albanian coastline — no request is too small or too ambitious.

We work with a trusted network of local providers and can arrange experiences that go well beyond the typical tourist itinerary, giving you access to the very best that Corfu has to offer.`,
    detail: 'Available 7 days a week during your stay.',
  },
  {
    icon: <Car size={28} />,
    title: 'Private Transfers',
    intro: 'Seamless arrivals and departures.',
    body: `We arrange private, air-conditioned transfers between Corfu Airport and Villa Leveque, as well as throughout your stay. Your driver will meet you at arrivals and take care of your luggage, so you can begin relaxing from the moment you land.

For those wishing to explore beyond Kassiopi, we can arrange chauffeur services for day trips, restaurant evenings or excursions to Corfu Town and the island's most beautiful beaches.`,
    detail: 'Book in advance to guarantee availability.',
  },
  {
    icon: <ChefHat size={28} />,
    title: 'Private Chef',
    intro: 'Restaurant-quality dining at home.',
    body: `Our private chef service brings the finest in-villa dining experience to your stay. Using the best seasonal and locally sourced ingredients — fresh fish from Kassiopi harbour, organic olive oil from the island's groves and produce from local farms — your chef will create bespoke menus tailored entirely to your preferences.

Whether you're looking for relaxed poolside lunches, formal dinner-party evenings or a private cooking lesson, we'll match the right chef and the right experience to your group.`,
    detail: 'Available on request — please enquire at least 48 hours in advance.',
  },
  {
    icon: <ShoppingBasket size={28} />,
    title: 'Pre-Arrival Groceries',
    intro: 'Arrive to a fully stocked kitchen.',
    body: `There's nothing more welcoming than arriving to find the fridge full and the kitchen ready. Choose from our curated grocery list — fresh bread, local cheeses, wine, fruit, coffee, and anything else you'd like — and we'll have everything waiting for you when you arrive.

For families with young children, we can include all the essentials. For those planning to cook, we'll source the best local ingredients. Simply let us know your preferences when you book.`,
    detail: 'Tailored to your preferences — share your list at least 48 hours before arrival.',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-[#fdfcfa] text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-xs tracking-widest uppercase font-medium text-[#b89a6b] mb-3">
            At Your Service
          </p>
          <h1 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#1e2d3d] mb-5">
            Services Designed Around<br />Your Stay
          </h1>
          <p className="text-[#6b7a5c] text-sm font-light leading-relaxed max-w-lg mx-auto">
            Villa Leveque is managed by Our Villa Rentals, a specialist villa rental company
            dedicated to exceptional service. Every aspect of your holiday can be arranged
            through our team.
          </p>
        </div>
      </section>

      {/* Service sections */}
      {SERVICES.map((service, i) => (
        <motion.section
          key={service.title}
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className={`py-16 lg:py-20 ${i % 2 === 0 ? 'bg-[#fdfcfa]' : 'bg-[#f5f0e8]'}`}
        >
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-10 md:gap-16">
              <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-[#1e2d3d] text-[#b89a6b]">
                {service.icon}
              </div>
              <div className="flex-1">
                <h2 className="font-['Playfair_Display'] text-3xl text-[#1e2d3d] mb-2">
                  {service.title}
                </h2>
                <p className="text-[#b89a6b] text-sm italic font-light mb-5">{service.intro}</p>
                <div className="space-y-4 text-[#6b7a5c] text-sm font-light leading-relaxed">
                  {service.body.split('\n\n').map((para, j) => (
                    <p key={j}>{para}</p>
                  ))}
                </div>
                <p className="mt-5 text-xs text-[#9a9490] italic">{service.detail}</p>
              </div>
            </div>
          </div>
        </motion.section>
      ))}

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-[#1e2d3d] text-white text-center">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl mb-4">
            Enquire About Services
          </h2>
          <p className="text-white/60 text-sm font-light leading-relaxed mb-10">
            Get in touch to discuss your requirements and we'll tailor a package that
            makes your stay truly exceptional.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Link
              to="/contact"
              className="px-8 py-3.5 bg-white text-[#1e2d3d] text-xs tracking-widest uppercase font-medium hover:bg-[#f5f0e8] transition-colors flex items-center gap-2"
            >
              Send an Enquiry <ArrowRight size={14} />
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-white/50">
            <a href="mailto:info@ourvillarentals.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail size={14} />
              info@ourvillarentals.com
            </a>
            <a href="tel:+306985743536" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone size={14} />
              +30 6985 743 536
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
