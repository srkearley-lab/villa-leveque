import { motion } from 'framer-motion'
import { Star, Car, ChefHat, ShoppingBasket } from 'lucide-react'
import { Link } from 'react-router-dom'

const SERVICES = [
  {
    icon: <Star size={24} />,
    title: 'Personal Concierge',
    desc: 'Your dedicated concierge is on hand throughout your stay to arrange restaurant reservations, boat hire, private tours, and anything else that makes your holiday exceptional.',
    detail: 'Available 7 days a week',
  },
  {
    icon: <Car size={24} />,
    title: 'Private Transfers',
    desc: 'Seamless airport transfers and chauffeur services in a private, air-conditioned vehicle. Arrive and depart in comfort, with no waiting or navigating unfamiliar roads.',
    detail: 'Corfu Airport & beyond',
  },
  {
    icon: <ChefHat size={24} />,
    title: 'Private Chef',
    desc: 'Enjoy the ultimate in-villa dining with a private chef who creates bespoke menus using the finest local ingredients. From intimate dinners to relaxed poolside lunches.',
    detail: 'On request',
  },
  {
    icon: <ShoppingBasket size={24} />,
    title: 'Pre-Arrival Groceries',
    desc: "Arrive to a fully stocked kitchen. Choose from our curated grocery list and we'll have your provisions ready before you step through the door, so you can relax from the very first moment.",
    detail: 'Tailored to your preferences',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
}

export default function ServiceCards() {
  return (
    <section className="py-20 lg:py-28 bg-[#fdfcfa]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs tracking-widest uppercase font-medium text-[#b89a6b] mb-3">
            Premium Services
          </p>
          <h2 className="font-['Playfair_Display'] text-3xl md:text-4xl text-[#1e2d3d] mb-4">
            Services Designed Around Your Stay
          </h2>
          <p className="text-[#6b7a5c] text-sm max-w-lg mx-auto leading-relaxed">
            Every detail of your holiday is handled with care, so you can focus entirely on rest
            and enjoyment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={cardVariants}
              className="flex gap-6 p-8 border border-[#e8e2d9] bg-white hover:shadow-md transition-shadow duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center bg-[#f5f0e8] text-[#b89a6b]">
                {service.icon}
              </div>
              <div>
                <h3 className="font-['Playfair_Display'] text-xl text-[#1e2d3d] mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-[#6b7a5c] leading-relaxed font-light mb-3">
                  {service.desc}
                </p>
                <span className="text-xs text-[#b89a6b] tracking-wide font-medium">
                  {service.detail}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/contact"
            className="inline-flex items-center px-8 py-3.5 border border-[#1e2d3d] text-[#1e2d3d] text-xs tracking-widest uppercase font-medium hover:bg-[#1e2d3d] hover:text-white transition-all"
          >
            Enquire About Services
          </Link>
        </div>
      </div>
    </section>
  )
}
