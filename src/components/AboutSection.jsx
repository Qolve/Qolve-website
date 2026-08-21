export default function AboutSection({ onNavigate }) {
  return (
    <>
      {/* The Oak Series (Bento Grid Section) */}
      <section id="series01" className="relative w-full py-stack-xl bg-surface-container-low overflow-hidden">
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
          <div className="mb-16 md:mb-24 text-center md:text-left">
            <span className="inline-block bg-primary-container/20 text-primary px-3 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-widest border border-primary/20 mb-6">
              Series 01 // Architecture
            </span>
            <h2 className="font-headline-xl text-headline-xl text-on-surface mb-4">
              The Oak Series
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              Solid charcoal oak architecture, machined to microscopic tolerances. Finished with a liquid glass interface.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
            {/* Main Feature Card */}
            <div className="col-span-1 md:col-span-8 glass-panel rounded-2xl p-6 md:p-12 relative overflow-hidden group min-h-[500px] flex flex-col justify-end">
              <div className="absolute inset-0 z-0">
                <img
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60"
                  src="/images/verdant-oak-device.jpg"
                  alt="Charred Oak & Glass"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent" />
              </div>
              <div className="relative z-10">
                <h3 className="font-headline-lg text-headline-lg text-on-surface mb-2">Quelp Core</h3>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-sm mb-6">
                  The central support hub of your ecosystem, carved from high-speed mail relay and grounded AI.
                </p>
                <button
                  onClick={() => onNavigate && onNavigate('products')}
                  className="inline-flex items-center text-primary font-body-md text-body-md hover:text-primary-fixed transition-colors bg-transparent border-0 p-0 cursor-pointer"
                >
                  <span>Discover Quelp Core</span>
                  <span className="material-symbols-outlined ml-2 text-[16px]">arrow_forward</span>
                </button>
              </div>
            </div>

            {/* Secondary Cards */}
            <div className="col-span-1 md:col-span-4 flex flex-col gap-gutter">
              <div className="glass-panel rounded-2xl p-6 flex-1 relative overflow-hidden group">
                <div className="absolute inset-0 z-0 bg-surface-container-highest/30" />
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="w-12 h-12 rounded-full bg-primary-container/30 flex items-center justify-center border border-primary/20 mb-8">
                    <span className="material-symbols-outlined text-primary">eco</span>
                  </div>
                  <div>
                    <h4 className="font-body-lg text-body-lg text-on-surface mb-2">Ethical Sourcing</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                      Every routing protocol is traceable to zero-latency, privacy-first edge nodes with complete data sovereignty.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass-panel rounded-2xl p-6 flex-1 relative overflow-hidden group">
                <div className="absolute inset-0 z-0 bg-surface-container-highest/30" />
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="w-12 h-12 rounded-full bg-primary-container/30 flex items-center justify-center border border-primary/20 mb-8">
                    <span className="material-symbols-outlined text-primary">blur_on</span>
                  </div>
                  <div>
                    <h4 className="font-body-lg text-body-lg text-on-surface mb-2">Refractive Display</h4>
                    <p className="font-body-md text-body-md text-on-surface-variant text-sm">
                      Our signature liquid glass technology blends seamlessly into your custom brand identity with zero bloat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Breathe Section */}
      <section className="w-full py-stack-xl md:py-[200px] bg-surface-container-lowest flex items-center justify-center">
        <div className="max-w-container-max mx-auto px-margin-mobile text-center">
          <h2 className="font-headline-xl text-headline-xl md:text-[72px] md:leading-[80px] text-on-surface font-light tracking-tight text-glow">
            Leave no trace.<br />
            <span className="text-on-surface-variant">Only impact.</span>
          </h2>
        </div>
      </section>
    </>
  )
}




