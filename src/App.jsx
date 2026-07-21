import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import QuelpSpotlight from './components/QuelpSpotlight';
import ArchitectureSection from './components/ArchitectureSection';
import SavingsCalculator from './components/SavingsCalculator';
import TeamSection from './components/TeamSection';
import CompanyWidget from './components/CompanyWidget';
import Footer from './components/Footer';
import ContactModal from './components/ContactModal';

import QuelpPage from './pages/QuelpPage';
import SolutionsPage from './pages/SolutionsPage';
import AppsPage from './pages/AppsPage';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const navigate = (page) => {
    if (page === activePage) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActivePage(page);
      window.scrollTo({ top: 0, behavior: 'instant' });
      setIsTransitioning(false);
    }, 180);
  };

  const handleOpenContact = () => setIsContactOpen(true);
  const handleCloseContact = () => setIsContactOpen(false);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-dark)', display: 'flex', flexDirection: 'column' }}>
      <Navbar activePage={activePage} onNavigate={navigate} onOpenContact={handleOpenContact} />

      <main
        style={{
          flex: 1,
          opacity: isTransitioning ? 0 : 1,
          transform: isTransitioning ? 'translateY(6px)' : 'translateY(0)',
          transition: 'opacity 0.18s ease, transform 0.18s ease',
        }}
      >
        {activePage === 'home' && (
          <>
            <HeroSection onNavigate={navigate} onOpenContact={handleOpenContact} />
            <QuelpSpotlight onNavigate={navigate} onOpenContact={handleOpenContact} />
            <ArchitectureSection />
            <SavingsCalculator onOpenContact={handleOpenContact} />
            <TeamSection />
            <CompanyWidget />
          </>
        )}

        {activePage === 'quelp' && <QuelpPage onNavigate={navigate} onOpenContact={handleOpenContact} />}
        {activePage === 'solutions' && <SolutionsPage onNavigate={navigate} onOpenContact={handleOpenContact} />}
        {activePage === 'apps' && <AppsPage onNavigate={navigate} onOpenContact={handleOpenContact} />}
      </main>

      <Footer onNavigate={navigate} onOpenContact={handleOpenContact} />

      {/* Global Contact & Early Access Modal */}
      <ContactModal isOpen={isContactOpen} onClose={handleCloseContact} />
    </div>
  );
}
