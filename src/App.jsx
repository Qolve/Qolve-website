import { useEffect } from 'react'
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

function App() {
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
  }, [])

  return (
    <div className="page-wrapper">
      <Navbar />
      <main className="main-wrapper">
        <HeroSection />
        <LogoLoop />
        <AboutSection />
        <ServicesSection />
        <ExpertiseSection />
        <PricingSection />
        <TestimonialsSection />
        <BlogSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
