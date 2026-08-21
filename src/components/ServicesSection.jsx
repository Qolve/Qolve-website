import { motion } from 'framer-motion'
import SpotlightCard from './ui/SpotlightCard'
import { WordReveal } from './ui/TextReveal'

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M13.0457 8.13128L5.8733 15.3037L4.69479 14.1252L11.8672 6.95277L5.54568 6.95277L5.54568 5.28636H14.7121V14.4528L13.0457 14.4528V8.13128Z" fill="currentColor" />
  </svg>
)

const services = [
  {
    id: 'ai-strategy',
    title: 'AI Strategy & Automation',
    description: 'We help you identify opportunities for AI adoption, grounded ticket deflection, and workflow optimization.',
    iconSrc: 'https://cdn.prod.website-files.com/6929c116366a14507fc84252/698e4863b7c4e4770533722e_mingcute_ai-fill.svg',
    imgSrc: 'https://cdn.prod.website-files.com/6929c116366a14507fc84252/6961fe8f17d6448d5348850c_service-img.webp',
    imgClass: 'is-first',
  },
  {
    id: 'business-consulting',
    title: 'White-Label Product Engineering',
    description: 'Bespoke customer support architectures built directly into your SaaS brand ecosystem with custom domains.',
    iconSrc: 'https://cdn.prod.website-files.com/6929c116366a14507fc84252/698e4875214fe570673439cb_basil_chart-pie-solid.svg',
    imgSrc: 'https://cdn.prod.website-files.com/6929c116366a14507fc84252/696202d02a0dce5f45a031fb_service-img-2.webp',
    imgClass: 'is-second',
  },
  {
    id: 'data-insights',
    title: 'Data & SLA Operations',
    description: 'Full-funnel support metrics, CSAT analytics, and zero-loss email routing infrastructure.',
    iconSrc: 'https://cdn.prod.website-files.com/6929c116366a14507fc84252/698e487f52e4cd9da04322e0_ic_round-insert-chart.svg',
    imgSrc: 'https://cdn.prod.website-files.com/6929c116366a14507fc84252/696202de6ed108d94012bd8e_service-img-3.webp',
    imgClass: 'is-third',
  },
]

export default function ServicesSection() {
  return (
    <section className="section_services" id="services">
      <div className="padding-global">
        <div className="container-large">
          <div className="vertical-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="tag"
            >
              <div className="dot-square" />
              <div>Services &amp; Capabilities</div>
            </motion.div>

            <div className="spacer-small" />

            <div className="max-width-medium is-41rem text-align-center">
              <WordReveal
                className="text-align-center"
                style={{ justifyContent: 'center' }}
                as="h2"
              >
                Comprehensive consulting and intelligent innovation
              </WordReveal>
            </div>

            <div className="spacer-small" />

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-width-medium"
            >
              <div className="text-base text-align-center text-color-secondary">
                Whether you're optimizing today or building for tomorrow we help you move faster with confidence.
              </div>
            </motion.div>

            <div className="spacer-medium" />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.25 }}
            >
              <a href="#contact" className="button-arrow is-black">
                <div className="button-arrow_wrap">
                  <div className="button-arrow_text">
                    <div className="text_button">Get Started</div>
                  </div>
                  <div className="button_container-arrow is-black">
                    <div className="icon-1x1-main">
                      <ArrowIcon />
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          </div>

          <div className="spacer-section-medium" />

          {/* Service cards with staggered entrance */}
          <div className="services_cards">
            {services.map((service, idx) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
                className="service_card"
              >
                <SpotlightCard
                  spotlightColor="rgba(214, 253, 112, 0.1)"
                  style={{ borderRadius: '1.25rem', height: '100%' }}
                >
                  <a href={`#${service.id}`} className="service_container" style={{ height: '100%' }}>
                    <div className="service_content">
                      <div className="container-icon bg-green">
                        <img src={service.iconSrc} loading="lazy" alt="" className="icon-1x1-medium" style={{ width: '1.5rem', height: '1.5rem' }} />
                      </div>
                      <div>
                        <h3 className="text-xl">{service.title}</h3>
                        <div className="spacer-xsmall" />
                        <div className="text-base text-color-secondary">{service.description}</div>
                      </div>
                    </div>
                    <div className={`service_img ${service.imgClass}`}>
                      <img src={service.imgSrc} loading="lazy" alt={service.title} className="img" style={{ maxHeight: '11rem', objectFit: 'cover' }} />
                    </div>
                  </a>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

