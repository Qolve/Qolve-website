export default function Footer({ onNavigate }) {
  const navTo = (page, sectionId) => {
    if (onNavigate) {
      onNavigate(page, sectionId)
    }
  }

  return (
    <footer className="w-full bg-surface-container-lowest text-primary font-label-sm text-label-sm uppercase tracking-widest border-t border-white/5 flex flex-col md:flex-row justify-between items-center px-margin-mobile md:px-margin-desktop py-stack-md gap-6">
      {/* Brand */}
      <button
        onClick={() => navTo('home')}
        className="font-headline-lg text-primary text-[24px] font-semibold tracking-tight uppercase bg-transparent border-0 cursor-pointer p-0 text-left flex items-center gap-3"
      >
        <div className="w-6 h-6 rounded bg-[#d6fd70] flex items-center justify-center font-extrabold text-[#0f0f0f] text-xs">
          Q
        </div>
        <span>QOLVE</span>
      </button>

      {/* Links */}
      <div className="flex flex-wrap justify-center gap-6 md:gap-8 opacity-80 hover:opacity-100 transition-opacity">
        <button
          onClick={() => navTo('products')}
          className="text-on-secondary-fixed-variant hover:text-primary transition-colors duration-200 uppercase bg-transparent border-0 cursor-pointer p-0 font-label-sm text-label-sm tracking-widest"
        >
          Platform
        </button>
        <button
          onClick={() => navTo('home', 'series01')}
          className="text-on-secondary-fixed-variant hover:text-primary transition-colors duration-200 uppercase bg-transparent border-0 cursor-pointer p-0 font-label-sm text-label-sm tracking-widest"
        >
          Ethical Sourcing
        </button>
        <button
          onClick={() => navTo('home', 'architecture')}
          className="text-on-secondary-fixed-variant hover:text-primary transition-colors duration-200 uppercase bg-transparent border-0 cursor-pointer p-0 font-label-sm text-label-sm tracking-widest"
        >
          Architecture
        </button>
        <button
          onClick={() => navTo('team')}
          className="text-on-secondary-fixed-variant hover:text-primary transition-colors duration-200 uppercase bg-transparent border-0 cursor-pointer p-0 font-label-sm text-label-sm tracking-widest"
        >
          Team
        </button>
        <button
          onClick={() => navTo('home', 'contact')}
          className="text-on-secondary-fixed-variant hover:text-primary transition-colors duration-200 uppercase bg-transparent border-0 cursor-pointer p-0 font-label-sm text-label-sm tracking-widest"
        >
          Contact
        </button>
      </div>

      {/* Copyright */}
      <div className="text-on-secondary-fixed-variant text-[11px] tracking-widest">
        © {new Date().getFullYear()} QOLVE LUXURY ECO. ALL RIGHTS RESERVED.
      </div>
    </footer>
  )
}




