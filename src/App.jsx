import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import LogoLoop from './components/LogoLoop'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import ExpertiseSection from './components/ExpertiseSection'
import PricingSection from './components/PricingSection'
import TestimonialsSection from './components/TestimonialsSection'
import BlogSection from './components/BlogSection'
import CtaSection from './components/CtaSection'
import Footer from './components/Footer'
import TeamPage from './components/TeamPage'
import ProductsPage from './components/ProductsPage'
import ScrollProgress from './components/ui/ScrollProgress'
import StickyScrollLock from './components/ui/StickyScrollLock'
import SmoothScrollProvider from './components/ui/SmoothScrollProvider'

import MobileView from './components/mobile/MobileView'

function App() {
  const [activePage, setActivePage] = useState('home')
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth <= 768 : false
  )

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const handleNavigate = (page, sectionId) => {
    if (page !== activePage) {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
      setActivePage(page)
      if (page === 'home') {
        setTimeout(() => {
          window.dispatchEvent(
            new CustomEvent('qolve-scroll-to', {
              detail: { sectionId: sectionId || 'home' },
            })
          )
        }, 100)
      }
    } else if (page === 'home') {
      window.dispatchEvent(
        new CustomEvent('qolve-scroll-to', {
          detail: { sectionId: sectionId || 'home' },
        })
      )
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
    }
  }

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    const elements = document.querySelectorAll('[data-anim]')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [activePage])

  // Dedicated Mobile View Experience
  if (isMobile && activePage === 'home') {
    return <MobileView activePage={activePage} onNavigate={handleNavigate} />
  }

  return (
    <SmoothScrollProvider activePage={activePage}>
      <div className="page-wrapper">
        <ScrollProgress />
        <Navbar activePage={activePage} onNavigate={handleNavigate} />
        <main className="main-wrapper">
          {activePage === 'home' && (
            <>
              <HeroSection onNavigate={handleNavigate} />
              <AboutSection />
              <ServicesSection />
              <StickyScrollLock />
              <ExpertiseSection />
              <PricingSection />
              <TestimonialsSection />
              <BlogSection />
              <CtaSection />
            </>
          )}

          {activePage === 'team' && <TeamPage onNavigate={handleNavigate} />}

          {activePage === 'products' && <ProductsPage onNavigate={handleNavigate} />}
        </main>
        <Footer onNavigate={handleNavigate} />
      </div>
    </SmoothScrollProvider>
  )
}

export default App

