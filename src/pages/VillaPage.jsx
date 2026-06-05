import { motion } from 'framer-motion'
import {
  BedDouble, Bath, Users, Waves, Eye, Leaf,
  Wifi, Wind, Car, Utensils, ArrowRight, Check,
  UtensilsCrossed, Bell,
} from 'lucide-react'
import PageHero          from '../components/PageHero'
import SectionContainer  from '../components/SectionContainer'
import VillaFactCard     from '../components/VillaFactCard'
import AmenityCard       from '../components/AmenityCard'
import CTAButton         from '../components/CTAButton'
import { IMAGES }        from '../data/images'

const KEY_FACTS = [
  { value: '3 Bedrooms',  sub: 'All En-Suite',  bordered: true  },
  { value: '3 Bathrooms', sub: 'Private',        bordered: true  },
  { value: '6 Guests',    sub: 'Maximum',        bordered: true  },
  { value: 'Heated Pool', sub: 'Private',        bordered: true  },
  { value: 'Sea Views',   sub: 'To Albania',     bordered: false },
]

const ICON_AMENITIES = [
  { icon: BedDouble, title: '3 Bedrooms'       },
  { icon: Bath,      title: '3 Bathrooms'      },
  { icon: Users,     title: 'Sleeps 6'         },
  { icon: Waves,     title: 'Private Pool'     },
  { icon: Eye,       title: 'Sea Views'        },
  { icon: Leaf,      title: 'Gardens'          },
  { icon: Wifi,      title: 'High-Speed Wi-Fi' },
  { icon: Wind,      title: 'Air Conditioning' },
  { icon: Car,       title: 'Private Parking'  },
  { icon: Utensils,  title: 'Full Kitchen'     },
]

const BEDROOMS = [
  { label: 'Master Bedroom', detail: 'King bed · Sea view · En-suite shower · Private terrace'    },
  { label: 'Bedroom Two',    detail: 'Double bed · Garden view · En-suite bathroom · Balcony'     },
  { label: 'Bedroom Three',  detail: 'Double bed · Terrace access · En-suite bathroom'            },
]

const FULL_AMENITIES = [
  { icon: BedDouble,       title: 'Bedrooms & Bathrooms',  desc: 'Three en-suite bedrooms across the first floor, each with air conditioning, private bathroom and terrace or balcony access.' },
  { icon: Waves,           title: 'Private Pool',           desc: 'Heated private pool on the front terrace, surrounded by stone paving, sun loungers, a pergola lounge and garden planting.' },
  { icon: UtensilsCrossed, title: 'Outdoor Kitchen & BBQ',  desc: 'Stone-built rear terrace with a built-in BBQ and preparation area. Pergola-shaded dining table for eight directly alongside.' },
  { icon: Wind,            title: 'Cooling & Comfort',      desc: 'Individual air conditioning units in every bedroom. Ceiling fans, blackout blinds and quality linen throughout.' },
  { icon: Wifi,            title: 'Connectivity',           desc: 'High-speed Wi-Fi available throughout the villa and main terrace areas. Sonos audio system for poolside music.' },
  { icon: Utensils,        title: 'Kitchen & Dining',       desc: 'Fully equipped kitchen with all appliances, quality cookware, a Nespresso machine and a dining table for eight inside.' },
  { icon: Eye,             title: 'Views',                  desc: 'Panoramic sea views towards Albania from the master bedroom, pool terrace and main living areas. Open hillside setting.' },
  { icon: Car,             title: 'Parking & Access',       desc: 'Secure off-road parking for two vehicles within the villa grounds. Easy access from the main Kassiopi road.' },
  { icon: Bell,            title: 'Concierge',              desc: 'Personal concierge service available throughout your stay for restaurant reservations, boat hire, transfers and more.' },
]

function Label({ children }) {
  return (
    <p className="uppercase mb-3" style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.75rem', color: '#C9A96E', fontWeight: 500, letterSpacing: '0.26em' }}>
      {children}
    </p>
  )
}

function Heading({ children, light }) {
  return (
    <h2 className="font-light leading-tight" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2rem, 4vw, 3.25rem)', color: light ? '#FAF8F4' : '#1C2B3A', fontWeight: 300 }}>
      {children}
    </h2>
  )
}

function Body({ children }) {
  return (
    <p className="leading-relaxed" style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1rem', color: '#5A6B60', fontWeight: 300, lineHeight: 1.9 }}>
      {children}
    </p>
  )
}

export default function VillaPage() {
  return (
    <>
      {/* 1 — Hero */}
      <PageHero
        image={IMAGES.pool[0].src}
        alt="Villa Leveque pool and terrace, Kassiopi, Corfu"
        height="75vh"
        minHeight="520px"
        label="Villa Leveque · Kassiopi, Corfu"
        title="Inside Villa Leveque"
        subtitle="Three en-suite bedrooms, private heated pool and generous terraces above Kassiopi harbour."
      />

      {/* 2 — Two-col intro: text left, exterior image right */}
      <SectionContainer bg="cream" spacing="md">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <Label>Overview</Label>
            <Heading>A private villa for six,<br />above Kassiopi</Heading>
            <div className="mt-6 space-y-4">
              <Body>
                Villa Leveque is a beautifully presented three-bedroom villa positioned above Kassiopi, one of northeast Corfu's most beautiful and unspoilt villages. Built across two floors with generous outdoor spaces, the villa accommodates up to six guests in comfort and privacy.
              </Body>
              <Body>
                From the private heated pool overlooking the landscape to the beautifully equipped kitchen and three en-suite bedrooms — every detail has been considered for a premium self-catering experience.
              </Body>
            </div>
            <div className="flex flex-wrap gap-3 mt-8">
              {['3 bedrooms', '3 bathrooms', 'Sleeps 6', 'Private pool', 'Sea views', 'Direct booking'].map(f => (
                <span key={f} className="flex items-center gap-1.5 text-xs" style={{ fontFamily: 'Manrope, sans-serif', color: '#5A6B60', fontWeight: 300 }}>
                  <Check size={11} style={{ color: '#C9A96E' }} />
                  {f}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="overflow-hidden"
          >
            <img
              src={IMAGES.exterior[0].src}
              alt="Villa Leveque exterior"
              className="w-full object-cover"
              style={{ aspectRatio: '4 / 3' }}
              loading="lazy"
            />
          </motion.div>
        </div>
      </SectionContainer>

      {/* 3 — At a Glance */}
      <SectionContainer bg="white" spacing="md" style={{ borderTop: '1px solid #E8DFD0' }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-10">
            <Label>At a Glance</Label>
            <Heading>Villa Details</Heading>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 mb-12" style={{ border: '1px solid #E8DFD0' }}>
            {KEY_FACTS.map(f => (
              <VillaFactCard key={f.value} value={f.value} sub={f.sub} bordered={f.bordered} />
            ))}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {ICON_AMENITIES.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.045, duration: 0.4 }}
              >
                <AmenityCard icon={item.icon} title={item.title} variant="minimal" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </SectionContainer>

      {/* 4 — Ground Floor (text left, 2×2 images right) */}
      <SectionContainer bg="cream" spacing="lg" style={{ borderTop: '1px solid #E8DFD0' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <Label>Ground Floor</Label>
            <Heading>Open-Plan Living<br />&amp; Kitchen</Heading>
            <div className="mt-6 space-y-4">
              <Body>
                The ground floor is conceived as a single, open space where cooking, dining and relaxing naturally flow together. The fully equipped kitchen opens directly into the dining area, which opens onto the terrace through wide glass doors.
              </Body>
              <Body>
                The living room is comfortably furnished with a generous sofa, flat-screen television and direct access to the outdoor spaces — the terrace feels like a natural extension of the ground floor.
              </Body>
            </div>
            <div className="flex flex-wrap gap-3 mt-8">
              {['Open-plan layout', 'Fully equipped kitchen', 'Dining for 8', 'Guest WC', 'Washing machine'].map(f => (
                <span key={f} className="flex items-center gap-1.5 text-xs" style={{ fontFamily: 'Manrope, sans-serif', color: '#5A6B60', fontWeight: 300 }}>
                  <Check size={11} style={{ color: '#C9A96E' }} />
                  {f}
                </span>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-3">
            {[IMAGES.living[0], IMAGES.living[2], IMAGES.living[3], IMAGES.living[4]].map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="overflow-hidden"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full aspect-square object-cover hover:scale-[1.04] transition-transform duration-500"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </SectionContainer>

      {/* 5 — Bedrooms (2×2 images left, text right) */}
      <SectionContainer bg="white" spacing="lg" style={{ borderTop: '1px solid #E8DFD0' }}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-3">
              {[IMAGES.bedrooms[0], IMAGES.bedrooms[1], IMAGES.bedrooms[6], IMAGES.bedrooms[3]].map((img, i) => (
                <motion.div
                  key={img.src}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.5 }}
                  className="overflow-hidden"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full aspect-square object-cover hover:scale-[1.04] transition-transform duration-500"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="order-1 lg:order-2"
          >
            <Label>First Floor</Label>
            <Heading>Three En-Suite<br />Bedrooms</Heading>
            <div className="mt-6 space-y-4">
              <Body>
                The first floor is home to three beautifully appointed bedrooms, each with its own private en-suite bathroom, air conditioning and private terrace or balcony access.
              </Body>
              <Body>
                The master bedroom faces the sea, offering uninterrupted views towards Albania — a remarkable prospect to wake to each morning.
              </Body>
            </div>

            <div className="mt-8 space-y-3">
              {BEDROOMS.map(b => (
                <div key={b.label} className="px-5 py-4" style={{ border: '1px solid #E8DFD0', backgroundColor: '#FAF8F4' }}>
                  <p className="mb-1" style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.75rem', color: '#C9A96E', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    {b.label}
                  </p>
                  <p style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.9375rem', color: '#5A6B60', fontWeight: 300 }}>
                    {b.detail}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </SectionContainer>

      {/* 6 — Aerial image break */}
      <section className="relative overflow-hidden" style={{ height: '42vh', minHeight: 280 }}>
        <img
          src={IMAGES.views[0].src}
          alt="Aerial view of Villa Leveque and Kassiopi coastline"
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0" style={{ backgroundColor: 'rgba(15,26,36,0.35)' }} />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <p className="font-light" style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: 'italic', fontSize: 'clamp(1.75rem, 4vw, 3rem)', color: '#FAF8F4', lineHeight: 1.1 }}>
            Kassiopi · Corfu
          </p>
          <p className="mt-3 uppercase" style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.75rem', color: 'rgba(250,248,244,0.45)', letterSpacing: '0.3em', fontWeight: 300 }}>
            Northeast Corfu &nbsp;·&nbsp; Greece
          </p>
        </div>
      </section>

      {/* 7 — Outdoor spaces */}
      <SectionContainer bg="cream" spacing="lg">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Label>Outside</Label>
          <Heading>The Pool, Terrace<br />&amp; Garden</Heading>
          <p className="mt-5 mx-auto" style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1rem', color: '#5A6B60', fontWeight: 300, lineHeight: 1.9, maxWidth: '52ch' }}>
            At Villa Leveque, outdoor living is central to the experience — long sun-drenched afternoons beside the pool and candlelit evenings beneath the pergola.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { img: IMAGES.pool[0],   title: 'Private Pool',     desc: 'A generous private pool with a broad stone terrace, sun loungers and open views across the landscape and out to sea.' },
            { img: IMAGES.dining[0], title: 'Outdoor Dining',   desc: 'A pergola-shaded terrace with a dining table for eight — perfect for long evening meals under the stars.' },
            { img: IMAGES.pool[2],   title: 'Terrace & Garden', desc: 'Mature olive and bougainvillea gardens wrap the terrace, creating natural shade, privacy and a beautiful Mediterranean atmosphere.' },
          ].map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="overflow-hidden mb-5">
                <img
                  src={card.img.src}
                  alt={card.img.alt}
                  className="w-full object-cover group-hover:scale-[1.04] transition-transform duration-500"
                  style={{ aspectRatio: '4 / 3' }}
                  loading="lazy"
                />
              </div>
              <div className="w-5 h-px mb-4" style={{ backgroundColor: '#C9A96E' }} />
              <h3 className="mb-3 font-normal" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.35rem', color: '#1C2B3A' }}>
                {card.title}
              </h3>
              <Body>{card.desc}</Body>
            </motion.div>
          ))}
        </div>
      </SectionContainer>

      {/* 8 — Full amenities (white bg, distinct from cream outdoor section) */}
      <SectionContainer bg="white" spacing="lg" style={{ borderTop: '1px solid #E8DFD0' }}>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <Label>Full Amenities</Label>
          <Heading>Everything Included</Heading>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {FULL_AMENITIES.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.45 }}
            >
              <AmenityCard icon={item.icon} title={item.title} desc={item.desc} variant="full" />
            </motion.div>
          ))}
        </div>
      </SectionContainer>

      {/* 9 — Gallery teaser */}
      <SectionContainer bg="sand" spacing="md">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-8">
          <div>
            <Label>Photography</Label>
            <Heading>Explore the Villa</Heading>
          </div>
          <CTAButton variant="outline-dark" size="md" to="/gallery">
            See All Photos <ArrowRight size={13} />
          </CTAButton>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {[IMAGES.pool[1], IMAGES.bedrooms[0], IMAGES.living[0], IMAGES.exterior[0]].map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="overflow-hidden"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full aspect-square object-cover hover:scale-[1.04] transition-transform duration-500"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </SectionContainer>

      {/* 10 — CTA */}
      <SectionContainer bg="navy" spacing="lg">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="w-8 h-px mx-auto mb-8" style={{ backgroundColor: '#C9A96E' }} />
          <Label>Availability</Label>
          <Heading light>Ready to Book?</Heading>
          <p className="mt-5 mx-auto mb-10" style={{ fontFamily: 'Manrope, sans-serif', fontSize: '1rem', color: 'rgba(250,248,244,0.5)', fontWeight: 300, lineHeight: 1.9, maxWidth: '44ch' }}>
            Submit your preferred dates and we'll confirm availability and everything you need for a perfect stay at Villa Leveque.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <CTAButton variant="primary" size="lg" to="/contact">
              Enquire Now <ArrowRight size={13} />
            </CTAButton>
            <CTAButton variant="outline-light" size="lg" href="https://wa.me/306985743536" external>
              WhatsApp Us
            </CTAButton>
          </div>
        </motion.div>
      </SectionContainer>
    </>
  )
}
