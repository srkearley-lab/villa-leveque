import Hero from '../components/Hero'
import TrustBar from '../components/TrustBar'
import IntroSection from '../components/IntroSection'
import PoolImageSection from '../components/PoolImageSection'
import SplitSections from '../components/SplitSections'
import HomeAmenities from '../components/HomeAmenities'
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

      {/* 3. Intro — cream, 3-col stats, 2 paragraphs */}
      <IntroSection />

      {/* 4. Full-width pool image — 60vh */}
      <PoolImageSection />

      {/* 5. Split sections — outdoor "01" + interiors "02" */}
      <SplitSections />

      {/* 6. Amenity icon grid — 8 cards, cream */}
      <HomeAmenities />

      {/* 7. Services teaser — dark navy, 4 cards + link */}
      <ServicesGrid />

      {/* 8. Gallery strip — 5 images, 400px */}
      <GalleryStrip />

      {/* 9. Location teaser — olive green, "10 minutes from Kassiopi" */}
      <LocationHighlight />

      {/* 10. Dining image break — 50vh */}
      <DiningImageBreak />

      {/* 11. Final CTA — "Plan Your Corfu Stay", 3 buttons */}
      <EnquirySection />
    </>
  )
}
