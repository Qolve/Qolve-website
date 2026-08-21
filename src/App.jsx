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

function App() {
  const [activePage, setActivePage] = useState('home')

  const handleNavigate = (page, sectionId) => {
    setActivePage(page)
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
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

  return (
    <div className="page-wrapper">
      <Navbar activePage={activePage} onNavigate={handleNavigate} />
      <main className="main-wrapper">
        {activePage === 'home' && (
          <>
            <HeroSection onNavigate={handleNavigate} />
            <LogoLoop />
            <AboutSection />
            <ServicesSection />
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
  )
}

export default App
