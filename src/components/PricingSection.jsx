const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M10.6 13.8L8.45 11.65C8.26667 11.4667 8.03333 11.375 7.75 11.375C7.46667 11.375 7.23334 11.4667 7.05 11.65C6.86667 11.8333 6.775 12.0667 6.775 12.35C6.775 12.6333 6.86667 12.8667 7.05 13.05L9.9 15.9C10.1 16.1 10.3333 16.2 10.6 16.2C10.8667 16.2 11.1 16.1 11.3 15.9L16.95 10.25C17.1333 10.0667 17.225 9.83333 17.225 9.55C17.225 9.26667 17.1333 9.03333 16.95 8.85C16.7667 8.66667 16.5333 8.575 16.25 8.575C15.9667 8.575 15.7333 8.66667 15.55 8.85L10.6 13.8ZM12 22C10.6167 22 9.31667 21.7373 8.1 21.212C6.88334 20.6867 5.825 19.9743 4.925 19.075C4.025 18.1757 3.31267 17.1173 2.788 15.9C2.26333 14.6827 2.00067 13.3827 2 12C1.99933 10.6173 2.262 9.31733 2.788 8.1C3.314 6.88267 4.02633 5.82433 4.925 4.925C5.82367 4.02567 6.882 3.31333 8.1 2.788C9.318 2.26267 10.618 2 12 2C13.382 2 14.682 2.26267 15.9 2.788C17.118 3.31333 18.1763 4.02567 19.075 4.925C19.9737 5.82433 20.6863 6.88267 21.213 8.1C21.7397 9.31733 22.002 10.6173 22 12C21.998 13.3827 21.7353 14.6827 21.212 15.9C20.6887 17.1173 19.9763 18.1757 19.075 19.075C18.1737 19.9743 17.1153 20.687 15.9 21.213C14.6847 21.739 13.3847 22.0013 12 22Z" fill="currentColor" />
  </svg>
)

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M13.0457 8.13128L5.8733 15.3037L4.69479 14.1252L11.8672 6.95277L5.54568 6.95277L5.54568 5.28636H14.7121V14.4528L13.0457 14.4528V8.13128Z" fill="currentColor" />
  </svg>
)

const plans = [
  {
    name: 'Starter Plan',
    price: '$49',
    description: 'Flat-rate customer support platform designed for small teams and early-stage startups.',
    iconBg: 'bg-green',
    isTop: false,
    features: [
      'Unified email ticket inbox',
      'Basic white-label branding (logo & primary color)',
      'Branded customer knowledge base',
      'Up to 3 team agent seats',
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M6.62453 20.1407C6.3552 20.2487 6.10353 20.222 5.86953 20.0607C5.63553 19.8994 5.51887 19.6757 5.51953 19.3897V15.4587C5.51953 15.1894 5.58253 14.9334 5.70853 14.6907C5.83453 14.4487 6.01353 14.2554 6.24553 14.1107L7.44153 13.3277C7.5582 14.485 7.70853 15.4914 7.89253 16.3467C8.07653 17.202 8.37953 18.1777 8.80153 19.2737L6.62453 20.1407ZM10.1845 18.8067C9.9892 18.8067 9.82753 18.7414 9.69953 18.6107C9.57153 18.48 9.4722 18.3254 9.40153 18.1467C9.04153 17.1254 8.76887 16.1814 8.58353 15.3147C8.39953 14.4487 8.30753 13.472 8.30753 12.3847C8.30753 10.762 8.55753 9.26535 9.05753 7.89469C9.55753 6.52402 10.3442 5.28102 11.4175 4.16569C11.4909 4.07902 11.5795 4.01802 11.6835 3.98269C11.7869 3.94735 11.8922 3.92969 11.9995 3.92969C12.1069 3.92969 12.2122 3.94735 12.3155 3.98269C12.4189 4.01802 12.5079 4.07902 12.5825 4.16569C13.6559 5.28035 14.4425 6.52302 14.9425 7.89369C15.4425 9.26435 15.6925 10.7617 15.6925 12.3857C15.6925 13.489 15.6032 14.4664 15.4245 15.3177C15.2459 16.169 14.9702 17.112 14.5975 18.1467C14.5269 18.3254 14.4275 18.48 14.2995 18.6107C14.1715 18.7414 14.0102 18.8067 13.8155 18.8067H10.1845ZM11.9995 12.4987C12.4215 12.4987 12.7769 12.354 13.0655 12.0647C13.3549 11.776 13.4995 11.4207 13.4995 10.9987C13.4995 10.5767 13.3549 10.2214 13.0655 9.93269C12.7762 9.64402 12.4209 9.49935 11.9995 9.49869C11.5782 9.49802 11.2229 9.64269 10.9335 9.93269C10.6442 10.2214 10.4995 10.5767 10.4995 10.9987C10.4995 11.4207 10.6442 11.776 10.9335 12.0647C11.2229 12.3534 11.5782 12.498 11.9995 12.4987Z" fill="currentColor" />
      </svg>
    ),
  },
  {
    name: 'Growth Plan',
    price: '$149',
    description: 'Complete white-label support suite with custom domain and Permafix AI assistance.',
    iconBg: 'bg-black',
    isTop: true,
    features: [
      '100% white-label customer portal & web widget',
      'Custom CNAME domain mapping',
      'Permafix AI smart drafts & thread summarization',
      'Stalwart + AWS SES relay email delivery',
      'Up to 10 team agent seats',
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12.0003 17.2742L7.85033 19.7742C7.667 19.8909 7.47533 19.9409 7.27533 19.9242C7.07533 19.9076 6.90033 19.8409 6.75033 19.7242C6.60033 19.6076 6.48366 19.4619 6.40033 19.2872C6.317 19.1126 6.30033 18.9166 6.35033 18.6992L7.45033 13.9742L3.77533 10.7992C3.60866 10.6492 3.50466 10.4782 3.46333 10.2862C3.422 10.0942 3.43433 9.90689 3.50033 9.72422C3.56633 9.54155 3.66633 9.39155 3.80033 9.27422C3.93433 9.15689 4.11766 9.08189 4.35033 9.04922L9.20033 8.62422L11.0753 4.17422C11.1587 3.97422 11.288 3.82422 11.4633 3.72422C11.6387 3.62422 11.8177 3.57422 12.0003 3.57422C12.183 3.57422 12.362 3.62422 12.5373 3.72422C12.7127 3.82422 12.842 3.97422 12.9253 4.17422L14.8003 8.62422L19.6503 9.04922C19.8837 9.08255 20.067 9.15755 20.2003 9.27422C20.3337 9.39089 20.4337 9.54089 20.5003 9.72422C20.567 9.90755 20.5797 10.0952 20.5383 10.2872C20.497 10.4792 20.3927 10.6499 20.2253 10.7992L16.5503 13.9742L17.6503 18.6992C17.7003 18.9159 17.6837 19.1119 17.6003 19.2872C17.517 19.4626 17.4003 19.6082 17.2503 19.7242C17.1003 19.8402 16.9253 19.9069 16.7253 19.9242C16.5253 19.9416 16.3337 19.8916 16.1503 19.7742L12.0003 17.2742Z" fill="#d6fd70" />
      </svg>
    ),
  },
  {
    name: 'Enterprise Tier',
    price: '$399',
    description: 'Scalable multi-tenant setup with dedicated support scope, SLA rules, and custom webhooks.',
    iconBg: 'bg-green',
    isTop: false,
    features: [
      'Unlimited team agent seats & mailboxes',
      'Automated SLA routing & CSAT analytics',
      'High-volume AI token processing (at cost + 15%)',
      '24/7 dedicated engineering support from Qolve',
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M11.9994 23C10.4965 22.9999 9.02836 22.5483 7.78527 21.7037C6.54217 20.8592 5.58146 19.6606 5.02771 18.2635C4.47395 16.8664 4.35269 15.3352 4.67964 13.8683C5.0066 12.4015 5.76669 11.0667 6.86136 10.037C8.20336 8.774 11.4994 6.5 10.9994 1.5C16.9994 5.5 19.9994 9.5 13.9994 15.5C14.9994 15.5 16.4994 15.5 18.9994 13.03C19.2694 13.803 19.4994 14.634 19.4994 15.5C19.4994 17.4891 18.7092 19.3968 17.3027 20.8033C15.8961 22.2098 13.9885 23 11.9994 23Z" fill="currentColor" />
      </svg>
    ),
  },
]

export default function PricingSection() {
  return (
    <section className="section_pricing" id="pricing">
      <div className="padding-section-medium" />
      <div className="padding-global">
        <div className="container-large">
          <div className="vertical-center">
            <div className="tag" data-anim>
              <div className="dot-square" />
              <div>Transparent Qolve Pricing</div>
            </div>

            <div className="spacer-medium" />

            <div className="max-width-medium">
              <h2 className="text-align-center" data-anim>
                Lower-cost, predictable pricing for growing businesses
              </h2>
            </div>

            <div className="spacer-medium" />

            <div className="max-width-medium">
              <div className="text-base text-align-center text-color-secondary" data-anim>
                Replace expensive enterprise support software with a transparent flat-rate subscription and cost-effective AI token scaling.
              </div>
            </div>

            <div className="spacer-medium" />

            <a href="#products" className="button-arrow is-black">
              <div className="button-arrow_wrap">
                <div className="button-arrow_text">
                  <div className="text_button">Explore Platform</div>
                </div>
                <div className="button_container-arrow is-black">
                  <div className="icon-1x1-main">
                    <ArrowIcon />
                  </div>
                </div>
              </div>
            </a>
          </div>

          <div className="spacer-section-medium" />

          <div className="pricing_cards" data-anim>
            {plans.map((plan, i) => (
              <div key={i} className={`pricing_card ${plan.isTop ? 'is-top' : ''}`}>
                <div className="horizontal-left-center is-small">
                  <div className={`container-icon ${plan.iconBg}`}>
                    {plan.icon}
                  </div>
                  <div className="geistmono text-style-nowrap">{plan.name}</div>
                </div>

                <div className="text-base text-color-secondary">{plan.description}</div>

                <div className="horizontal-left-center is-small">
                  <div className="text-4xl">{plan.price}</div>
                  <div className="text-base text-color-secondary">/month</div>
                </div>

                <div className="gap-xsmall">
                  {plan.features.map((feat, j) => (
                    <div key={j}>
                      <div className="horizontal-left-center is-small">
                        <div className="icon-1x1-medium">
                          <CheckIcon />
                        </div>
                        <div className="text-color-secondary">{feat}</div>
                      </div>
                      {j < plan.features.length - 1 && <div className="spacer-medium" />}
                    </div>
                  ))}
                </div>

                <a
                  href="#products"
                  className="button"
                  data-variant="bg-black"
                  style={{
                    width: '100%',
                    justifyContent: 'center',
                    background: plan.isTop ? '#d6fd70' : '#0f0f0f',
                    color: plan.isTop ? '#0f0f0f' : '#ffffff',
                  }}
                >
                  <div className="text-button-wrap">
                    <div>Get Started</div>
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

