import { useState, useEffect } from 'react'

export default function Navbar({ activePage, onNavigate }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navTo = (page, sectionId) => {
    if (onNavigate) {
      onNavigate(page, sectionId)
    }
    setMobileOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 backdrop-blur-[40px] border-b border-white/10 shadow-none transition-all duration-300 ${scrolled ? 'bg-surface-container-lowest/90' : 'bg-white/5'}`}>
      <div className="flex justify-between items-center px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
        {/* Brand */}
        <button
          onClick={() => navTo('home')}
          className="flex items-center gap-3 bg-transparent border-0 cursor-pointer p-0 text-left"
        >
          <div className="w-8 h-8 rounded-lg bg-[#d6fd70] flex items-center justify-center font-extrabold text-[#0f0f0f] text-lg">
            Q
          </div>
          <div className="flex flex-col">
            <span className="font-display-lg text-[22px] tracking-tight text-on-surface leading-none font-semibold">
              qolve
            </span>
            <span className="text-[9px] font-semibold text-primary tracking-widest uppercase mt-0.5">
              Whitelabel Solutions
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-gutter items-center">
          <button
            onClick={() => navTo('products')}
            className={`font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors hover:bg-white/10 hover:backdrop-blur-md transition-all duration-300 px-4 py-2 rounded bg-transparent border-0 cursor-pointer scale-[0.99] active:scale-95 transition-transform ${activePage === 'products' ? 'text-on-surface bg-white/10' : ''}`}
          >
            Platform
          </button>
          <button
            onClick={() => navTo('home', 'architecture')}
            className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors hover:bg-white/10 hover:backdrop-blur-md transition-all duration-300 px-4 py-2 rounded bg-transparent border-0 cursor-pointer scale-[0.99] active:scale-95 transition-transform"
          >
            Architecture
          </button>
          <button
            onClick={() => navTo('home', 'series01')}
            className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors hover:bg-white/10 hover:backdrop-blur-md transition-all duration-300 px-4 py-2 rounded bg-transparent border-0 cursor-pointer scale-[0.99] active:scale-95 transition-transform"
          >
            Series 01
          </button>
          <button
            onClick={() => navTo('team')}
            className={`font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors hover:bg-white/10 hover:backdrop-blur-md transition-all duration-300 px-4 py-2 rounded bg-transparent border-0 cursor-pointer scale-[0.99] active:scale-95 transition-transform ${activePage === 'team' ? 'text-on-surface bg-white/10' : ''}`}
          >
            Team
          </button>
          <button
            onClick={() => navTo('home', 'pricing')}
            className="font-body-md text-body-md text-on-surface-variant hover:text-on-surface transition-colors hover:bg-white/10 hover:backdrop-blur-md transition-all duration-300 px-4 py-2 rounded bg-transparent border-0 cursor-pointer scale-[0.99] active:scale-95 transition-transform"
          >
            Pricing
          </button>
        </div>

        {/* Right Inquire CTA Button */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => navTo('home', 'contact')}
            className="bg-primary-container text-primary font-body-md text-body-md px-6 py-2 rounded-full border border-white/10 hover:bg-white/10 hover:backdrop-blur-md transition-all duration-300 scale-[0.99] active:scale-95 transition-transform cursor-pointer"
          >
            Inquire
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-on-surface p-2 bg-transparent border-0 cursor-pointer"
          >
            <span className="material-symbols-outlined">{mobileOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden glass-panel border-t border-white/10 px-6 py-6 flex flex-col gap-4 bg-surface-container-lowest/95 backdrop-blur-3xl">
          <button onClick={() => navTo('products')} className="text-left text-on-surface font-body-md py-2 border-0 bg-transparent cursor-pointer">Platform</button>
          <button onClick={() => navTo('home', 'architecture')} className="text-left text-on-surface font-body-md py-2 border-0 bg-transparent cursor-pointer">Architecture</button>
          <button onClick={() => navTo('home', 'series01')} className="text-left text-on-surface font-body-md py-2 border-0 bg-transparent cursor-pointer">Series 01</button>
          <button onClick={() => navTo('team')} className="text-left text-on-surface font-body-md py-2 border-0 bg-transparent cursor-pointer">Team</button>
          <button onClick={() => navTo('home', 'pricing')} className="text-left text-on-surface font-body-md py-2 border-0 bg-transparent cursor-pointer">Pricing</button>
        </div>
      )}
    </nav>
  )
}




