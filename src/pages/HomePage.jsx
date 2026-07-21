import React from 'react';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import FocusSection from '../components/FocusSection';

export default function HomePage() {
  return (
    <div className="w-full">
      {/* 1-to-1 Figma Sky Hero with 5 Bento Cards & Ratings */}
      <HeroSection />

      {/* Services Preview */}
      <ServicesSection />

      {/* Engineering Focus Discipline */}
      <FocusSection />

      {/* About Preview */}
      <AboutSection />
    </div>
  );
}
