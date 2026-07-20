import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import QuelpSpotlight from './components/QuelpSpotlight';
import TeamSection from './components/TeamSection';
import ValuesSection from './components/ValuesSection';
import CompanyWidget from './components/CompanyWidget';
import Footer from './components/Footer';
import QuelpPage from './pages/QuelpPage';
import AppsPage from './pages/AppsPage';

export default function App() {
  const [activePage, setActivePage] = useState('home');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const navigate = (page) => {
    if (page === activePage) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActivePage(page);
      window.scrollTo({ top: 0, behavior: 'instant' });
      setIsTransitioning(false);
    }, 180);
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-base)', display: 'flex', flexDirection: 'column' }}>
      <Navbar activePage={activePage} onNavigate={navigate} />

      <main
        style={{
          flex: 1,
          opacity: isTransitioning ? 0 : 1,
          transform: isTransitioning ? 'translateY(8px)' : 'translateY(0)',
          transition: 'opacity 0.18s ease, transform 0.18s ease',
        }}
      >
        {activePage === 'home' && (
          <>
            <HeroSection onNavigate={navigate} />
            <QuelpSpotlight onNavigate={navigate} />
            <TeamSection />
            <ValuesSection />
            <CompanyWidget />
          </>
        )}
        {activePage === 'quelp' && <QuelpPage onNavigate={navigate} />}
        {activePage === 'apps'  && <AppsPage  onNavigate={navigate} />}
      </main>

      <Footer onNavigate={navigate} />
    </div>
  );
}
