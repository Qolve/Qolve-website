const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M13.0457 8.13128L5.8733 15.3037L4.69479 14.1252L11.8672 6.95277L5.54568 6.95277L5.54568 5.28636H14.7121V14.4528L13.0457 14.4528V8.13128Z" fill="currentColor" />
  </svg>
)

const services = [
  {
    id: 'ai-strategy',
    title: 'AI strategy',
    description: 'We help you identify opportunities for AI adoption and implement the right solutions.',
    iconSrc: 'https://cdn.prod.website-files.com/6929c116366a14507fc84252/698e4863b7c4e4770533722e_mingcute_ai-fill.svg',
    imgSrc: 'https://cdn.prod.website-files.com/6929c116366a14507fc84252/6961fe8f17d6448d5348850c_service-img.webp',
    imgClass: 'is-first',
  },
  {
    id: 'business-consulting',
    title: 'Business consulting',
    description: 'We help you identify opportunities for top growth and implement the right strategies.',
    iconSrc: 'https://cdn.prod.website-files.com/6929c116366a14507fc84252/698e4875214fe570673439cb_basil_chart-pie-solid.svg',
    imgSrc: 'https://cdn.prod.website-files.com/6929c116366a14507fc84252/696202d02a0dce5f45a031fb_service-img-2.webp',
    imgClass: 'is-second',
  },
  {
    id: 'data-insights',
    title: 'Data & insights',
    description: 'We help you identify opportunities for Big Data use and implement the right analytics.',
    iconSrc: 'https://cdn.prod.website-files.com/6929c116366a14507fc84252/698e487f52e4cd9da04322e0_ic_round-insert-chart.svg',
    imgSrc: 'https://cdn.prod.website-files.com/6929c116366a14507fc84252/696202de6ed108d94012bd8e_service-img-3.webp',
    imgClass: 'is-third',
  },
]

export default function ServicesSection() {
  return (
    <section className="section_services" id="services">
      <div className="padding-section-large" />
      <div className="padding-global">
        <div className="container-large">
          <div className="vertical-center">
            <div className="tag" data-anim>
              <div className="dot-square" />
              <div>Services</div>
            </div>

            <div className="spacer-large" />

            <div className="max-width-medium is-41rem">
              <h2 className="text-align-center" data-anim>
                Comprehensive consulting and intelligent innovation
              </h2>
            </div>

            <div className="spacer-large" />

            <div className="max-width-medium">
              <div className="text-base text-align-center text-color-secondary" data-anim>
                Whether you're optimizing today or building for tomorrow we help you move faster with confidence.
              </div>
            </div>

            <div className="spacer-large" />

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
          </div>

          <div className="spacer-section-medium" />

          {/* Service cards */}
          <div className="services_cards" data-anim>
            {services.map((service) => (
              <div key={service.id} className="service_card">
                <a href={`#${service.id}`} className="service_container">
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
                    <img src={service.imgSrc} loading="lazy" alt={service.title} className="img" />
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="padding-section-large" />
    </section>
  )
}
