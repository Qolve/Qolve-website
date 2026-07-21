import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import ContactModal from './components/ContactModal';
import Footer from './components/Footer';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen font-sans text-slate-900 selection:bg-[#c6f529] selection:text-[#0f172a]">
      <Navbar onOpenContact={() => setIsContactOpen(true)} />
      
      <main id="home">
        <HeroSection onOpenContact={() => setIsContactOpen(true)} />
        <ServicesSection onOpenContact={() => setIsContactOpen(true)} />
        <AboutSection onOpenContact={() => setIsContactOpen(true)} />
      </main>

      <Footer onOpenContact={() => setIsContactOpen(true)} />

      {isContactOpen && (
        <ContactModal onClose={() => setIsContactOpen(false)} />
      )}
    </div>
  );
}
