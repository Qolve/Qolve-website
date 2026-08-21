const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
    <path d="M10.6 13.8L8.45 11.65C8.26667 11.4667 8.03333 11.375 7.75 11.375C7.46667 11.375 7.23334 11.4667 7.05 11.65C6.86667 11.8333 6.775 12.0667 6.775 12.35C6.775 12.6333 6.86667 12.8667 7.05 13.05L9.9 15.9C10.1 16.1 10.3333 16.2 10.6 16.2C10.8667 16.2 11.1 16.1 11.3 15.9L16.95 10.25C17.1333 10.0667 17.225 9.83333 17.225 9.55C17.225 9.26667 17.1333 9.03333 16.95 8.85C16.7667 8.66667 16.5333 8.575 16.25 8.575C15.9667 8.575 15.7333 8.66667 15.55 8.85L10.6 13.8ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88334 20.6867 5.825 19.9743 4.925 19.075C4.025 18.1757 3.31267 17.1173 2.788 15.9C2.26333 14.6827 2.00067 13.3827 2 12C1.99933 10.6173 2.262 9.31733 2.788 8.1C3.314 6.88267 4.02633 5.82433 4.925 4.925C5.82367 4.02567 6.882 3.31333 8.1 2.788C9.318 2.26267 10.618 2 12 2C13.382 2 14.682 2.26267 15.9 2.788C17.118 3.31333 18.1763 4.02567 19.075 4.925C19.9737 5.82433 20.6863 6.88267 21.213 8.1C21.7397 9.31733 22.002 10.6173 22 12C21.998 13.3827 21.7353 14.6827 21.212 15.9C20.6887 17.1173 19.9763 18.1757 19.075 19.075C18.1737 19.9743 17.1153 20.687 15.9 21.213C14.6847 21.739 13.3847 22.0013 12 22Z" fill="#34d399" />
  </svg>
)

const plans = [
  {
    name: 'Sprout (Starter)',
    iconEmoji: '🌱',
    price: '$49',
    description: 'Flat-rate customer support platform designed for small teams and early-stage startups.',
    isTop: false,
    cardClass: 'liquid-glass is-subtle',
    features: [
      'Unified email ticket inbox',
      'Basic white-label branding (logo & primary color)',
      'Branded customer knowledge base',
      'Up to 3 team agent seats',
    ],
  },
  {
    name: 'Canopy (Growth)',
    iconEmoji: '🌿',
    price: '$149',
    description: 'Complete white-label support suite with custom CNAME domain and Permafix AI assistance.',
    isTop: true,
    cardClass: 'liquid-glass is-emerald',
    features: [
      '100% white-label customer portal & web widget',
      'Custom CNAME domain mapping (support.yourdomain.com)',
      'Permafix AI smart drafts & thread summarization',
      'Stalwart + AWS SES relay email delivery',
      'Up to 10 team agent seats',
    ],
  },
  {
    name: 'Rainforest (Enterprise)',
    iconEmoji: '🌲',
    price: '$399',
    description: 'Scalable multi-tenant setup with dedicated support scope, SLA rules, and custom webhooks.',
    isTop: false,
    cardClass: 'liquid-glass is-deep',
    features: [
      'Unlimited team agent seats & mailboxes',
      'Automated SLA routing & CSAT analytics',
      'High-volume AI token processing (at cost + 15%)',
      '24/7 dedicated engineering support from Qolve',
    ],
  },
]

export default function PricingSection() {
  return (
    <section className="section_pricing" id="pricing" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="padding-section-medium" />
      <div className="padding-global">
        <div className="container-large">
          <div className="vertical-center">
            <div className="tag" data-anim>
              <div className="dot-square" />
              <div>💧 Transparent Sustainable Pricing</div>
            </div>

            <div className="spacer-medium" />

            <div className="max-width-medium">
              <h2 className="text-align-center" data-anim style={{ fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', color: '#f8fafc', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
                Lower-cost, predictable pricing for growing teams
              </h2>
            </div>

            <div className="spacer-medium" />

            <div className="max-width-medium">
              <div className="text-base text-align-center" style={{ color: '#cbd5e1', fontSize: '1.0625rem' }} data-anim>
                Replace expensive enterprise support software with a transparent flat-rate subscription and cost-effective AI token scaling.
              </div>
            </div>
          </div>

          <div className="spacer-section-medium" />

          <div className="pricing_cards" data-anim style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {plans.map((plan, i) => (
              <div
                key={i}
                className={plan.cardClass}
                style={{
                  padding: '2.5rem',
                  borderRadius: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '1.75rem',
                  position: 'relative',
                }}
              >
                {plan.isTop && (
                  <div style={{
                    position: 'absolute',
                    top: '1.25rem',
                    right: '1.5rem',
                    background: 'linear-gradient(135deg, #6ee7b7 0%, #10b981 100%)',
                    color: '#03150b',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    padding: '0.35rem 0.85rem',
                    borderRadius: '9999px',
                    boxShadow: '0 4px 15px rgba(52,211,153,0.5)',
                  }}>
                    MOST POPULAR
                  </div>
                )}

                <div style={{ position: 'relative', zIndex: 2 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '1.75rem' }}>{plan.iconEmoji}</span>
                    <span style={{ fontSize: '1.25rem', fontWeight: 700, color: '#f8fafc' }}>{plan.name}</span>
                  </div>

                  <div style={{ color: '#cbd5e1', fontSize: '0.9375rem', lineHeight: 1.6, minHeight: '3rem', marginBottom: '1.25rem' }}>
                    {plan.description}
                  </div>

                  <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem', marginBottom: '1.75rem', paddingBottom: '1.25rem', borderBottom: '1px solid rgba(255,255,255,0.12)' }}>
                    <div style={{ fontSize: '2.75rem', fontWeight: 800, color: '#f8fafc' }}>{plan.price}</div>
                    <div style={{ color: '#a7f3d0', fontSize: '0.9375rem' }}>/month flat</div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    {plan.features.map((feat, j) => (
                      <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                        <CheckIcon />
                        <span style={{ color: '#e2e8f0', fontSize: '0.875rem', lineHeight: 1.5 }}>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <a
                  href="#products"
                  className="button"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    background: plan.isTop 
                      ? 'linear-gradient(135deg, #6ee7b7 0%, #10b981 100%)' 
                      : 'radial-gradient(120% 120% at 30% 0%, rgba(255,255,255,0.2) 0%, rgba(12,38,24,0.75) 60%, rgba(4,18,11,0.85) 100%)',
                    color: plan.isTop ? '#03150b' : '#f8fafc',
                    padding: '0.85rem',
                    borderRadius: '9999px',
                    fontWeight: 700,
                    fontSize: '0.9375rem',
                    textDecoration: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    boxShadow: plan.isTop ? '0 12px 30px rgba(16,185,129,0.5)' : '0 10px 25px rgba(0,20,10,0.4)',
                    position: 'relative',
                    zIndex: 2,
                  }}
                >
                  <div className="text-button-wrap">
                    <div>Get Started with {plan.name.split(' ')[0]}</div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="padding-section-medium" />
    </section>
  )
}


