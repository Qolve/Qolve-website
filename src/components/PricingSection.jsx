import { useState } from 'react'

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
    <path d="M10.6 13.8L8.45 11.65C8.26667 11.4667 8.03333 11.375 7.75 11.375C7.46667 11.375 7.23334 11.4667 7.05 11.65C6.86667 11.8333 6.775 12.0667 6.775 12.35C6.775 12.6333 6.86667 12.8667 7.05 13.05L9.9 15.9C10.1 16.1 10.3333 16.2 10.6 16.2C10.8667 16.2 11.1 16.1 11.3 15.9L16.95 10.25C17.1333 10.0667 17.225 9.83333 17.225 9.55C17.225 9.26667 17.1333 9.03333 16.95 8.85C16.7667 8.66667 16.5333 8.575 16.25 8.575C15.9667 8.575 15.7333 8.66667 15.55 8.85L10.6 13.8ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88334 20.6867 5.825 19.9743 4.925 19.075C4.025 18.1757 3.31267 17.1173 2.788 15.9C2.26333 14.6827 2.00067 13.3827 2 12C1.99933 10.6173 2.262 9.31733 2.788 8.1C3.314 6.88267 4.02633 5.82433 4.925 4.925C5.82367 4.02567 6.882 3.31333 8.1 2.788C9.318 2.26267 10.618 2 12 2C13.382 2 14.682 2.26267 15.9 2.788C17.118 3.31333 18.1763 4.02567 19.075 4.925C19.9737 5.82433 20.6863 6.88267 21.213 8.1C21.7397 9.31733 22.002 10.6173 22 12C21.998 13.3827 21.7353 14.6827 21.212 15.9C20.6887 17.1173 19.9763 18.1757 19.075 19.075C18.1737 19.9743 17.1153 20.687 15.9 21.213C14.6847 21.739 13.3847 22.0013 12 22Z" fill="#34d399" />
  </svg>
)

const plans = [
  {
    name: 'Sprout (Starter)',
    iconEmoji: '🌱',
    monthlyPrice: 49,
    annualPrice: 39,
    description: 'Flat-rate customer support platform designed for small teams and early-stage startups.',
    isTop: false,
    cardClass: 'macos-glass is-subtle',
    features: [
      'Unified email ticket inbox',
      'Basic white-label branding (logo & theme)',
      'Branded customer knowledge base',
      'Up to 3 team agent seats',
    ],
  },
  {
    name: 'Canopy (Growth)',
    iconEmoji: '🌿',
    monthlyPrice: 149,
    annualPrice: 119,
    description: 'Complete white-label support suite with custom CNAME domain and Permafix AI assistance.',
    isTop: true,
    cardClass: 'macos-glass is-emerald',
    features: [
      '100% white-label customer portal & widget',
      'Custom CNAME domain mapping',
      'Permafix AI smart drafts & triage',
      'Stalwart + AWS SES relay email delivery',
      'Up to 10 team agent seats',
    ],
  },
  {
    name: 'Rainforest (Scale)',
    iconEmoji: '🌲',
    monthlyPrice: 399,
    annualPrice: 319,
    description: 'Scalable multi-tenant setup with dedicated support scope, SLA rules, and custom webhooks.',
    isTop: false,
    cardClass: 'macos-glass is-deep',
    features: [
      'Unlimited team agent seats & mailboxes',
      'Automated SLA routing & CSAT analytics',
      'High-volume AI token processing',
      '24/7 dedicated engineering support',
    ],
  },
]

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(true)

  return (
    <section className="section_pricing" id="pricing" style={{ position: 'relative', overflow: 'hidden', padding: '6rem 0' }}>
      <div className="padding-global">
        <div className="container-large">
          
          {/* Header + Interactive Billing Switch */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '3.5rem' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.35rem 0.85rem',
                borderRadius: '9999px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                backdropFilter: 'blur(20px)',
                color: '#cbd5e1',
                fontSize: '0.8125rem',
                fontWeight: 500,
                marginBottom: '1.25rem',
              }}
            >
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#34d399', boxShadow: '0 0 6px rgba(52,211,153,0.8)' }} />
              <span>Transparent Flat-Rate Pricing</span>
            </div>

            <h2 style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)', color: '#ffffff', letterSpacing: '-0.035em', lineHeight: 1.1, fontWeight: 700, marginBottom: '1rem', maxWidth: '42rem' }}>
              Predictable pricing for growing teams
            </h2>

            <p style={{ color: '#94a3b8', fontSize: '1.0625rem', lineHeight: 1.6, maxWidth: '36rem', marginBottom: '2rem' }}>
              Replace costly per-seat enterprise helpdesks with sustainable flat subscriptions and at-cost AI token scaling.
            </p>

            {/* Interactive Billing Toggle */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.3rem',
                borderRadius: '9999px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                backdropFilter: 'blur(30px)',
                boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.2)',
              }}
            >
              <button
                onClick={() => setIsAnnual(false)}
                style={{
                  padding: '0.45rem 1.1rem',
                  borderRadius: '9999px',
                  border: 'none',
                  background: !isAnnual ? 'rgba(255, 255, 255, 0.15)' : 'transparent',
                  color: !isAnnual ? '#ffffff' : '#94a3b8',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: !isAnnual ? '0 2px 8px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.4)' : 'none',
                }}
              >
                Monthly billing
              </button>

              <button
                onClick={() => setIsAnnual(true)}
                style={{
                  padding: '0.45rem 1.1rem',
                  borderRadius: '9999px',
                  border: 'none',
                  background: isAnnual ? 'linear-gradient(180deg, rgba(52, 211, 153, 0.9) 0%, rgba(16, 185, 129, 0.85) 100%)' : 'transparent',
                  color: isAnnual ? '#020f06' : '#94a3b8',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.2s ease',
                  boxShadow: isAnnual ? '0 4px 12px rgba(16,185,129,0.3), inset 0 1px 1px rgba(255,255,255,0.7)' : 'none',
                }}
              >
                <span>Annual billing</span>
                <span style={{ fontSize: '0.7rem', padding: '0.1rem 0.4rem', borderRadius: '9999px', background: isAnnual ? '#020f06' : 'rgba(52, 211, 153, 0.15)', color: isAnnual ? '#34d399' : '#34d399', fontWeight: 700 }}>
                  Save 20%
                </span>
              </button>
            </div>
          </div>

          {/* Pricing Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {plans.map((plan, i) => {
              const currentPrice = isAnnual ? plan.annualPrice : plan.monthlyPrice
              return (
                <div
                  key={i}
                  className={plan.cardClass}
                  style={{
                    padding: '2.5rem',
                    borderRadius: '1.75rem',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    gap: '2rem',
                    position: 'relative',
                  }}
                >
                  {plan.isTop && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '1.25rem',
                        right: '1.5rem',
                        background: 'linear-gradient(180deg, rgba(52, 211, 153, 0.95) 0%, rgba(16, 185, 129, 0.9) 100%)',
                        color: '#020f06',
                        fontSize: '0.6875rem',
                        fontWeight: 800,
                        padding: '0.3rem 0.75rem',
                        borderRadius: '9999px',
                        boxShadow: '0 4px 12px rgba(16,185,129,0.4)',
                        letterSpacing: '0.04em',
                      }}
                    >
                      RECOMMENDED
                    </div>
                  )}

                  <div style={{ position: 'relative', zIndex: 2 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '0.75rem' }}>
                      <span style={{ fontSize: '1.5rem' }}>{plan.iconEmoji}</span>
                      <span style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ffffff' }}>{plan.name}</span>
                    </div>

                    <div style={{ color: '#94a3b8', fontSize: '0.9375rem', lineHeight: 1.6, minHeight: '3rem', marginBottom: '1.5rem' }}>
                      {plan.description}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.35rem', marginBottom: '1.75rem', paddingBottom: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                      <div style={{ fontSize: '3rem', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.04em' }}>
                        ${currentPrice}
                      </div>
                      <div style={{ color: '#94a3b8', fontSize: '0.875rem' }}>
                        /month {isAnnual ? 'billed annually' : 'billed monthly'}
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                      {plan.features.map((feat, j) => (
                        <div key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                          <CheckIcon />
                          <span style={{ color: '#cbd5e1', fontSize: '0.875rem', lineHeight: 1.5 }}>{feat}</span>
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
                        ? 'linear-gradient(180deg, rgba(52, 211, 153, 0.95) 0%, rgba(16, 185, 129, 0.9) 100%)' 
                        : 'linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.03) 100%)',
                      color: plan.isTop ? '#020f06' : '#ffffff',
                      border: plan.isTop ? '1px solid rgba(255, 255, 255, 0.45)' : '1px solid rgba(255, 255, 255, 0.15)',
                      padding: '0.85rem',
                      borderRadius: '9999px',
                      fontWeight: 600,
                      fontSize: '0.9375rem',
                      textDecoration: 'none',
                      display: 'flex',
                      alignItems: 'center',
                      boxShadow: plan.isTop ? '0 8px 24px rgba(16, 185, 129, 0.35)' : 'inset 0 1px 0 rgba(255,255,255,0.25)',
                      position: 'relative',
                      zIndex: 2,
                    }}
                  >
                    Get Started with {plan.name.split(' ')[0]}
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}



