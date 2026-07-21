import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import InteractiveInboxDemo from './components/InteractiveInboxDemo';
import RoadmapSection from './components/RoadmapSection';
import FeaturesSection from './components/FeaturesSection';
import TeamSection from './components/TeamSection';
import PricingSection from './components/PricingSection';
import ContactModal from './components/ContactModal';
import Footer from './components/Footer';

export default function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-teal-500 selection:text-white">
      <Navbar onOpenContact={() => setIsContactOpen(true)} />
      
      <main>
        <HeroSection onOpenContact={() => setIsContactOpen(true)} />
        <InteractiveInboxDemo />
        <RoadmapSection />
        <FeaturesSection />
        <TeamSection />
        <PricingSection onOpenContact={() => setIsContactOpen(true)} />
      </main>

      <Footer onOpenContact={() => setIsContactOpen(true)} />

      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </div>
  );
}
