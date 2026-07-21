import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import FocusSection from './components/FocusSection';
import AboutSection from './components/AboutSection';
import TeamSection from './components/TeamSection';
import ContactModal from './components/ContactModal';
import Footer from './components/Footer';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f2f8fc] font-sans text-slate-900 selection:bg-[#c6f529] selection:text-[#0b1120] bg-noise">
      <Navbar onOpenContact={() => setIsContactOpen(true)} />
      
      <main id="home">
        <HeroSection onOpenContact={() => setIsContactOpen(true)} />
        <ServicesSection onOpenContact={() => setIsContactOpen(true)} />
        <FocusSection />
        <AboutSection onOpenContact={() => setIsContactOpen(true)} />
        <TeamSection />
      </main>

      <Footer onOpenContact={() => setIsContactOpen(true)} />

      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </div>
  );
}

