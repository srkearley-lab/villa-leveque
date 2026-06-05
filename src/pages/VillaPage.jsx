import { motion } from 'framer-motion'
import {
  BedDouble, Bath, Users, Waves, Eye, Leaf,
  Wifi, Wind, Car, Utensils, ArrowRight, Check,
} from 'lucide-react'
import PageHero       from '../components/PageHero'
import SectionContainer  from '../components/SectionContainer'
import VillaFactCard     from '../components/VillaFactCard'
import AmenityCard       from '../components/AmenityCard'
import AmenityGroups     from '../components/AmenityGroups'
import CTAButton         from '../components/CTAButton'
import { IMAGES }        from '../data/images'

// ─── Data ─────────────────────────────────────────────────────────────────────

const KEY_FACTS = [
  { value: '3 Bedrooms',   sub: 'All En-Suite',   bordered: true  },
  { value: '3 Bathrooms',  sub: 'Private',         bordered: true  },
  { value: '6 Guests',     sub: 'Maximum',         bordered: true  },
  { value: 'Heated Pool',  sub: 'Private',         bordered: true  },
  { value: 'Sea Views',    sub: 'To Albania',      bordered: false },
]

const AMENITIES = [
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

const OUTDOOR_CARDS = [
  { img: IMAGES.pool[0],   title: 'Private Pool',      desc: 'A generous private pool with a broad stone terrace, sun loungers and open views across the landscape and out to sea.'       },
  { img: IMAGES.dining[0], title: 'Outdoor Dining',    desc: 'A pergola-shaded terrace with a dining table for eight — perfect for long evening meals under the stars.'                   },
  { img: IMAGES.pool[2],   title: 'Terrace & Garden',  desc: 'Mature olive and bougainvillea gardens wrap the terrace, creating natural shade, privacy and a beautiful Mediterranean atmosphere.' },
]

const GALLERY_TEASER = [
  IMAGES.pool[1],
  IMAGES.bedrooms[0],
  IMAGES.living[0],
  IMAGES.exterior[0],
]

// ─── Section helpers ───────────────────────────────────────────────────────────

function SectionLabel({ children }) {
  return (
    <p
      className="uppercase mb-3"
      style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.68rem', color: '#C9A96E', fontWeight: 500, letterSpacing: '0.26em' }}
    >
      {children}
    </p>
  )
}

function SectionHeading({ children, light = false }) {
  return (
    <h2
      className="font-light leading-tight"
      style={{
        fontFamily: "'Cormorant Garamond', serif",
        fontSize: 'clamp(2rem, 4vw, 3.25rem)',
        color: light ? '#FAF8F4' : '#1C2B3A',
        fontWeight: 300,
      }}
    >
      {children}
    </h2>
  )
}

function Body({ children }) {
  return (
    <p
      className="leading-relaxed"
      style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.9rem', color: '#5A6B60', fontWeight: 300, lineHeight: 1.9 }}
    >
      {children}
    </p>
  )
}

function ImageGrid({ images, ratio = 'aspect-square' }) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {images.map((img, i) => (
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
            className={`w-full ${ratio} object-cover hover:scale-[1.04] transition-transform duration-600`}
            loading="lazy"
          />
        </motion.div>
      ))}
    </div>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

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

      {/* 2 — Intro */}
      <SectionContainer bg="cream" spacing="lg" narrow>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center"
        >
          <div className="w-8 h-px mx-auto mb-8" style={{ backgroundColor: '#C9A96E' }} />
          <SectionLabel>Overview</SectionLabel>
          <SectionHeading>A private villa for six,<br />above Kassiopi</SectionHeading>
          <div className="mt-6 space-y-4">
            <Body>
              Villa Leveque is a beautifully presented three-bedroom villa positioned above Kassiopi,
              one of northeast Corfu's most beautiful and unspoilt villages. Built across two floors
              with generous outdoor spaces, the villa accommodates up to six guests in comfort and
              privacy.
            </Body>
            <Body>
              The villa combines a calm Mediterranean aesthetic with all the amenities expected of a
              premium self-catering property. From the private heated pool overlooking the landscape to
              the beautifully equipped kitchen and three en-suite bedrooms — every detail has been
              considered.
            </Body>
          </div>
        </motion.div>
      </SectionContainer>

      {/* 3 — Key facts bar */}
      <SectionContainer bg="white" spacing="md">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-10">
            <SectionLabel>At a Glance</SectionLabel>
            <SectionHeading>Villa Details</SectionHeading>
          </div>

          {/* Stat bar */}
          <div
            className="grid grid-cols-2 md:grid-cols-5 mb-12"
            style={{ border: '1px solid #E8DFD0' }}
          >
            {KEY_FACTS.map(f => (
              <VillaFactCard
                key={f.value}
                value={f.value}
                sub={f.sub}
                bordered={f.bordered}
              />
            ))}
          </div>

          {/* Amenity icon grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {AMENITIES.map((item, i) => (
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

      {/* 4 — Ground Floor (text left, images right) */}
      <SectionContainer bg="cream" spacing="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <SectionLabel>Ground Floor</SectionLabel>
            <SectionHeading>Open-Plan Living<br />&amp; Kitchen</SectionHeading>
            <div className="mt-6 space-y-4">
              <Body>
                The ground floor is conceived as a single, open space where cooking, dining and
                relaxing naturally flow together. The fully equipped kitchen opens directly into the
                dining area, which opens onto the terrace through wide glass doors.
              </Body>
              <Body>
                The living room is comfortably furnished with a generous sofa, flat-screen television
                and direct access to the outdoor spaces. The layout ensures the terrace feels like a
                natural extension of the ground floor — not a separate area.
              </Body>
              <Body>
                A guest WC sits on the ground floor alongside useful utility space including a
                washing machine and additional storage.
              </Body>
            </div>
            <div className="flex flex-wrap gap-3 mt-8">
              {['Open-plan layout', 'Fully equipped kitchen', 'Dining for 8', 'Guest WC', 'Washing machine'].map(f => (
                <span
                  key={f}
                  className="flex items-center gap-1.5 text-xs"
                  style={{ fontFamily: 'Manrope, sans-serif', color: '#5A6B60', fontWeight: 300 }}
                >
                  <Check size={11} style={{ color: '#C9A96E' }} />
                  {f}
                </span>
              ))}
            </div>
          </motion.div>

          <ImageGrid images={[IMAGES.living[0], IMAGES.living[2], IMAGES.living[3], IMAGES.living[4]]} />
        </div>
      </SectionContainer>

      {/* 5 — Bedrooms (images left, text right) */}
      <SectionContainer bg="white" spacing="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <ImageGrid images={[IMAGES.bedrooms[0], IMAGES.bedrooms[1], IMAGES.bedrooms[6], IMAGES.bedrooms[3]]} />
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="order-1 lg:order-2"
          >
            <SectionLabel>First Floor</SectionLabel>
            <SectionHeading>Three En-Suite<br />Bedrooms</SectionHeading>
            <div className="mt-6 space-y-4">
              <Body>
                The first floor is home to three beautifully appointed bedrooms, each with its own
                private en-suite bathroom, air conditioning and private terrace or balcony access.
              </Body>
              <Body>
                The master bedroom faces the sea, offering uninterrupted views towards Albania — a
                remarkable prospect to wake to each morning. The two further bedrooms share equally
                beautiful outlooks over the gardens and landscape.
              </Body>
            </div>

            <div className="mt-8 space-y-3">
              {BEDROOMS.map(b => (
                <div
                  key={b.label}
                  className="px-5 py-4"
                  style={{ border: '1px solid #E8DFD0', backgroundColor: '#FAF8F4' }}
                >
                  <p
                    className="mb-1"
                    style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.75rem', color: '#C9A96E', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase' }}
                  >
                    {b.label}
                  </p>
                  <p
                    style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.82rem', color: '#5A6B60', fontWeight: 300 }}
                  >
                    {b.detail}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </SectionContainer>

      {/* 6 — Outdoor spaces */}
      <SectionContainer bg="cream" spacing="lg">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <SectionLabel>Outside</SectionLabel>
          <SectionHeading>The Pool, Terrace<br />&amp; Garden</SectionHeading>
          <p
            className="mt-5 mx-auto"
            style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.9rem', color: '#5A6B60', fontWeight: 300, lineHeight: 1.9, maxWidth: '52ch' }}
          >
            At Villa Leveque, outdoor living is central to the experience — long sun-drenched
            afternoons beside the pool and candlelit evenings beneath the pergola.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {OUTDOOR_CARDS.map((card, i) => (
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
                  className="w-full aspect-[4/3] object-cover group-hover:scale-[1.04] transition-transform duration-600"
                  loading="lazy"
                />
              </div>
              <div className="w-5 h-px mb-4" style={{ backgroundColor: '#C9A96E' }} />
              <h3
                className="mb-3 font-normal"
                style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.35rem', color: '#1C2B3A' }}
              >
                {card.title}
              </h3>
              <Body>{card.desc}</Body>
            </motion.div>
          ))}
        </div>
      </SectionContainer>

      {/* 7 — Villa Amenities */}
      <AmenityGroups />

      {/* 8 — Gallery teaser */}
      <SectionContainer bg="sand" spacing="md">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-8">
          <div>
            <SectionLabel>Photography</SectionLabel>
            <SectionHeading>Explore the Villa</SectionHeading>
          </div>
          <CTAButton variant="outline-dark" size="md" to="/gallery">
            See All Photos <ArrowRight size={13} />
          </CTAButton>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {GALLERY_TEASER.map((img, i) => (
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
                className="w-full aspect-square object-cover hover:scale-[1.04] transition-transform duration-600"
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </SectionContainer>

      {/* 9 — Enquire CTA */}
      <SectionContainer bg="navy" spacing="lg">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="w-8 h-px mx-auto mb-8" style={{ backgroundColor: '#C9A96E' }} />
          <SectionLabel>Availability</SectionLabel>
          <SectionHeading light>Ready to Book?</SectionHeading>
          <p
            className="mt-5 mx-auto mb-10"
            style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.9rem', color: 'rgba(250,248,244,0.5)', fontWeight: 300, lineHeight: 1.9, maxWidth: '44ch' }}
          >
            Submit your preferred dates and we'll confirm availability and everything
            you need for a perfect stay at Villa Leveque.
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
