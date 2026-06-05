import Hero from '../components/Hero'
import TrustBar from '../components/TrustBar'
import IntroSection from '../components/IntroSection'
import PoolImageSection from '../components/PoolImageSection'
import SplitSections from '../components/SplitSections'
import AerialSection from '../components/AerialSection'
import ServicesGrid from '../components/ServicesGrid'
import LocationHighlight from '../components/LocationHighlight'
import GalleryStrip from '../components/GalleryStrip'
import DiningImageBreak from '../components/DiningImageBreak'
import EnquirySection from '../components/EnquirySection'

export default function HomePage() {
  return (
    <>
      {/* 1. Hero — parallax, bottom-third layout */}
      <Hero />

      {/* 2. Trust bar — award + pills */}
      <TrustBar />

      {/* 3. Intro — cream, centered, stats */}
      <IntroSection />

      {/* 4. Full-width pool image — 60vh, no text */}
      <PoolImageSection />

      {/* 5. Split sections — pool/outdoor + interiors */}
      <SplitSections />

      {/* 6. Aerial drone — 70vh, "Above Kassiopi" */}
      <AerialSection />

      {/* 7. Services 2×2 grid — dark navy */}
      <ServicesGrid />

      {/* 8. Location highlight — split layout */}
      <LocationHighlight />

      {/* 9. Gallery strip — 5 images horizontal */}
      <GalleryStrip />

      {/* 10. Dining image break — 50vh, no text */}
      <DiningImageBreak />

      {/* 11. Enquiry section — dark, 3 CTAs */}
      <EnquirySection />
    </>
  )
}
