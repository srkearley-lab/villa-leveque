import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import MobileStickyBar from './components/MobileStickyBar'
import HomePage from './pages/HomePage'
import VillaPage from './pages/VillaPage'
import GalleryPage from './pages/GalleryPage'
import ServicesPage from './pages/ServicesPage'
import LocationPage from './pages/LocationPage'
import ContactPage from './pages/ContactPage'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function Layout() {
  const location = useLocation()
  return (
    <>
      <ScrollToTop />
      <Header />
      <MobileStickyBar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.22, ease: 'easeInOut' }}
        >
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/villa" element={<VillaPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/location" element={<LocationPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </motion.main>
      </AnimatePresence>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}
