import Hero from '../components/Hero'
import TrustBar from '../components/TrustBar'
import PoolImageSection from '../components/PoolImageSection'
import IntroSection from '../components/IntroSection'
import SplitSections from '../components/SplitSections'
import AerialSection from '../components/AerialSection'
import ServicesGrid from '../components/ServicesGrid'
import LocationHighlight from '../components/LocationHighlight'
import GalleryStrip from '../components/GalleryStrip'
import EnquirySection from '../components/EnquirySection'

export default function HomePage() {
  return (
    <>
      {/* 1. Hero — parallax, centered layout */}
      <Hero />

      {/* 2. Trust bar — award + pills */}
      <TrustBar />

      {/* 3. Full-width pool image — no text, 70vh */}
      <PoolImageSection />

      {/* 4. Intro — cream, centered, stats */}
      <IntroSection />

      {/* 5. Split sections — pool/outdoor + interiors */}
      <SplitSections />

      {/* 6. Aerial drone section */}
      <AerialSection />

      {/* 7. Services 2×2 grid — dark navy */}
      <ServicesGrid />

      {/* 8. Location highlight — split layout */}
      <LocationHighlight />

      {/* 9. Gallery strip — 5 images horizontal */}
      <GalleryStrip />

      {/* 10. Enquiry section — dark, 3 CTAs */}
      <EnquirySection />
    </>
  )
}
