export default function ServicesSection({ onNavigate }) {
  const capabilities = [
    {
      icon: 'psychology',
      title: 'Permafix AI',
      badge: '98.6% Grounded',
      description: 'Grounded support intelligence that verifies against internal knowledge bases before drafting replies for human approval.',
      footerTag: 'Zero Hallucinations',
    },
    {
      icon: 'mail',
      title: 'Zero-Loss Relay',
      badge: '100% Deliverability',
      description: 'Stalwart Mail Server + AWS SES routing with strict SPF, DKIM, and DMARC alignment under qolve.systems.',
      footerTag: 'Strict DNS Alignment',
    },
    {
      icon: 'branding_watermark',
      title: 'White-Label Control',
      badge: '100% Autonomy',
      description: 'Custom CNAME domain mapping, tailored email templates, and full theme customization with zero vendor badges.',
      footerTag: 'Zero Lock-In',
    },
  ]

  return (
    <section id="architecture" className="relative w-full py-stack-xl bg-surface-container-low overflow-hidden">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-6">
          <div>
            <span className="inline-block bg-primary-container/20 text-primary px-3 py-1 rounded-full font-label-sm text-label-sm uppercase tracking-widest border border-primary/20 mb-6">
              Series 02 // Deep Tech
            </span>
            <h2 className="font-headline-xl text-headline-xl text-on-surface mb-4">
              Grounded Infrastructure
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
              Resilient mail routing, sub-second dispatching, and zero-hallucination support AI.
            </p>
          </div>

          <button
            onClick={() => onNavigate && onNavigate('products')}
            className="inline-flex items-center text-primary font-body-md text-body-md hover:text-primary-fixed transition-colors bg-transparent border-0 p-0 cursor-pointer"
          >
            <span>Explore Full Architecture</span>
            <span className="material-symbols-outlined ml-2 text-[16px]">arrow_forward</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {capabilities.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel rounded-2xl p-8 relative overflow-hidden group flex flex-col justify-between min-h-[360px]"
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-primary-container/30 flex items-center justify-center border border-primary/20 mb-6 text-primary">
                  <span className="material-symbols-outlined text-primary text-[22px]">{item.icon}</span>
                </div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-headline-lg text-[24px] font-semibold text-on-surface">
                    {item.title}
                  </h3>
                  <span className="font-label-sm text-[11px] text-primary bg-primary-container/20 px-2 py-0.5 rounded-full border border-primary/20">
                    {item.badge}
                  </span>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 border-t border-white/10 mt-8 flex justify-between items-center">
                <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">
                  {item.footerTag}
                </span>
                <span className="text-primary text-sm">✓</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}




