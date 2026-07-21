import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import InteractiveInboxDemo from './components/InteractiveInboxDemo';
import PricingCalculatorSection from './components/PricingCalculatorSection';
import KnowledgeBaseSection from './components/KnowledgeBaseSection';
import AboutSection from './components/AboutSection';
import ContactModal from './components/ContactModal';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-main)' }}>
      {/* Sticky Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onOpenDemo={() => setIsDemoOpen(true)}
      />

      {/* Main Page Layout */}
      <main style={{ flex: 1 }}>
        <HeroSection 
          onNavigate={scrollToSection}
          onOpenDemo={() => setIsDemoOpen(true)}
        />

        <FeaturesSection 
          onNavigate={scrollToSection}
          onOpenDemo={() => setIsDemoOpen(true)}
        />

        <InteractiveInboxDemo 
          onOpenDemo={() => setIsDemoOpen(true)}
        />

        <PricingCalculatorSection 
          onOpenDemo={() => setIsDemoOpen(true)}
        />

        <KnowledgeBaseSection 
          onOpenDemo={() => setIsDemoOpen(true)}
        />

        <AboutSection 
          onOpenDemo={() => setIsDemoOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer 
        onNavigate={scrollToSection}
        onOpenDemo={() => setIsDemoOpen(true)}
      />

      {/* Trial Modal */}
      <ContactModal 
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
      />
    </div>
  );
}
