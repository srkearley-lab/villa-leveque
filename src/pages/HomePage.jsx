import Hero from '../components/Hero'
import TrustBar from '../components/TrustBar'
import IntroSection from '../components/IntroSection'
import OutdoorSection from '../components/OutdoorSection'
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

      {/* 2. Trust bar — award badge + credential pills */}
      <TrustBar />

      {/* 3. Intro — 3-col stats, 2 body paragraphs */}
      <IntroSection />

      {/* 4. Outdoor — full-bleed pool image with frosted content panel */}
      <OutdoorSection />

      {/* 5. Split sections — "01" outdoor / "02" interiors */}
      <SplitSections />

      {/* 6. Amenity grid — 8 cards with icons and descriptions */}
      <HomeAmenities />

      {/* 7. Services teaser — dark navy 2×2 + "View All" link */}
      <ServicesGrid />

      {/* 8. Gallery strip — 5 images, fixed height */}
      <GalleryStrip />

      {/* 9. Location teaser — olive green, "10 minutes from Kassiopi" */}
      <LocationHighlight />

      {/* 10. Dining image break — 50vh visual pause */}
      <DiningImageBreak />

      {/* 11. Final CTA — "Plan Your Corfu Stay", 3 buttons */}
      <EnquirySection />
    </>
  )
}
