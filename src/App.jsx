import { useState } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import InteractiveInboxDemo from './components/InteractiveInboxDemo'
import PricingSection from './components/PricingSection'
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

  return (
    <div className="bg-surface-container-lowest text-on-surface font-body-md antialiased min-h-screen">
      <Navbar activePage={activePage} onNavigate={handleNavigate} />
      <main>
        {activePage === 'home' && (
          <>
            <HeroSection onNavigate={handleNavigate} />
            <AboutSection onNavigate={handleNavigate} />
            <ServicesSection onNavigate={handleNavigate} />
            <InteractiveInboxDemo />
            <PricingSection />
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


