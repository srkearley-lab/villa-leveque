import { ArrowRight, Phone, Mail } from 'lucide-react'
import PageHero      from '../components/PageHero'
import SectionContainer from '../components/SectionContainer'
import ServiceSection   from '../components/ServiceSection'
import CTAButton        from '../components/CTAButton'
import ContactCard      from '../components/ContactCard'
import { IMAGES }       from '../data/images'

const SERVICES = [
  {
    num: '01',
    title: 'Personal Concierge',
    body: 'Your dedicated concierge is available throughout your stay to arrange anything that makes your holiday more enjoyable — from securing a table at the best restaurant in Kassiopi to organising a private sailing trip along the Albanian coastline. No request is too small or too ambitious.',
    detail: 'Available 7 days a week during your stay.',
    img: IMAGES.views[1],
    imageLeft: true,
    bg: '#FAF8F4',
  },
  {
    num: '02',
    title: 'Private Transfers',
    body: 'Private, air-conditioned transfers between Corfu Airport and Villa Leveque. Your driver meets you at arrivals, takes care of your luggage, and ensures you begin relaxing from the moment you land. Chauffeur services for day trips and restaurant evenings also available.',
    detail: 'Book in advance to guarantee availability.',
    img: IMAGES.exterior[0],
    imageLeft: false,
    bg: '#FFFFFF',
  },
  {
    num: '03',
    title: 'Private Chef',
    body: 'Our private chef service brings exceptional in-villa dining to your stay. Using seasonal, locally sourced ingredients — fresh fish from Kassiopi harbour, organic olive oil from island groves, produce from local farms — your chef creates bespoke menus tailored entirely to your preferences.',
    detail: 'Available on request — enquire at least 48 hours in advance.',
    img: IMAGES.dining[0],
    imageLeft: true,
    bg: '#FAF8F4',
  },
  {
    num: '04',
    title: 'Pre-Arrival Groceries',
    body: "There's nothing more welcoming than arriving to find the fridge full and the kitchen ready. Choose from our curated grocery list — fresh bread, local cheeses, wine, fruit, coffee and more — and we'll have everything waiting for you when you arrive.",
    detail: 'Tailored to your preferences — share your list at least 48 hours before arrival.',
    img: IMAGES.living[2],
    imageLeft: false,
    bg: '#FFFFFF',
  },
]

export default function ServicesPage() {
  return (
    <>
      {/* Hero — image-backed, no blank dark space */}
      <PageHero
        image={IMAGES.pool[0].src}
        alt="Villa Leveque pool and terrace, Kassiopi"
        height="58vh"
        minHeight="420px"
        label="At Your Service"
        title="Your Stay, Elevated"
        subtitle="Every detail arranged before you arrive."
      />

      {/* Intro strip */}
      <div style={{ backgroundColor: '#FAF8F4', borderBottom: '1px solid #E8DFD0' }}>
        <div className="max-w-7xl mx-auto px-5 md:px-8 lg:px-12 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
          <p
            style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.88rem', color: '#5A6B60', fontWeight: 300, lineHeight: 1.8, maxWidth: '60ch' }}
          >
            Villa Leveque is managed by Our Villa Rentals, a boutique concierge service dedicated to
            making your stay in Corfu exceptional. Every service below can be arranged on your behalf.
          </p>
          <CTAButton variant="outline-dark" size="md" to="/contact">
            Discuss Your Requirements <ArrowRight size={12} />
          </CTAButton>
        </div>
      </div>

      {/* Service sections — alternating image/text */}
      {SERVICES.map((svc) => (
        <ServiceSection
          key={svc.num}
          num={svc.num}
          title={svc.title}
          body={svc.body}
          detail={svc.detail}
          img={svc.img}
          imageLeft={svc.imageLeft}
          bg={svc.bg}
        />
      ))}

      {/* Final CTA */}
      <SectionContainer bg="navy" spacing="lg">
        <div className="text-center">
          <div className="w-8 h-px mx-auto mb-8" style={{ backgroundColor: '#C9A96E' }} />
          <p
            className="uppercase mb-4"
            style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.68rem', color: '#C9A96E', fontWeight: 500, letterSpacing: '0.26em' }}
          >
            Enquire
          </p>
          <h2
            className="font-light mb-5"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 'clamp(2rem, 4vw, 3.25rem)',
              color: '#FAF8F4',
              fontWeight: 300,
            }}
          >
            Arrange Your Services
          </h2>
          <p
            className="mb-10 mx-auto"
            style={{ fontFamily: 'Manrope, sans-serif', fontSize: '0.9rem', color: 'rgba(250,248,244,0.45)', fontWeight: 300, lineHeight: 1.9, maxWidth: '44ch' }}
          >
            Get in touch to discuss your requirements and we'll tailor a package that makes your
            stay truly exceptional.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <CTAButton variant="primary" size="lg" to="/contact">
              Send an Enquiry <ArrowRight size={13} />
            </CTAButton>
            <CTAButton variant="outline-light" size="lg" href="https://wa.me/306985743536" external>
              WhatsApp Us
            </CTAButton>
          </div>

          {/* Contact details */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
            <ContactCard
              icon={Mail}
              label="Email"
              value="info@ourvillarentals.com"
              href="mailto:info@ourvillarentals.com"
              dark
            />
            <ContactCard
              icon={Phone}
              label="Phone"
              value="+30 6985 743 536"
              href="tel:+306985743536"
              dark
            />
          </div>
        </div>
      </SectionContainer>
    </>
  )
}
