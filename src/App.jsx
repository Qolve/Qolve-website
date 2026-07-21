import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductsSection from './components/ProductsSection';
import InteractiveSandbox from './components/InteractiveSandbox';
import ROIStatsSection from './components/ROIStatsSection';
import EcosystemSection from './components/EcosystemSection';
import TeamValuesSection from './components/TeamValuesSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactModal from './components/ContactModal';
import SearchModal from './components/SearchModal';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // Ctrl+K keyboard shortcut listener for search modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

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
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-primary)' }}>
      {/* Sticky Navigation */}
      <Navbar
        activeSection={activeSection}
        onNavigate={scrollToSection}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Main Page Layout */}
      <main style={{ flex: 1 }}>
        <HeroSection 
          onNavigate={scrollToSection}
          onOpenContact={() => setIsContactOpen(true)}
        />

        <ProductsSection 
          onNavigate={scrollToSection}
          onOpenContact={() => setIsContactOpen(true)}
        />

        <InteractiveSandbox 
          onOpenContact={() => setIsContactOpen(true)}
        />

        <ROIStatsSection 
          onOpenContact={() => setIsContactOpen(true)}
        />

        <EcosystemSection 
          onOpenContact={() => setIsContactOpen(true)}
        />

        <TeamValuesSection 
          onOpenContact={() => setIsContactOpen(true)}
        />

        <TestimonialsSection 
          onOpenContact={() => setIsContactOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer 
        onNavigate={scrollToSection}
        onOpenContact={() => setIsContactOpen(true)}
      />

      {/* Interactive Modals */}
      <ContactModal 
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />

      <SearchModal 
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={scrollToSection}
      />
    </div>
  );
}
