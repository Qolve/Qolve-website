import { useState } from 'react'

const QuoteIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
    <path d="M3.33398 6.66797H14.6673V16.868L8.69132 25.3346H5.06065L8.61532 17.3346H3.33398V6.66797ZM17.334 6.66797H28.6673V16.868L22.6913 25.3346H19.0607L22.6153 17.3346H17.334V6.66797Z" fill="currentColor" />
  </svg>
)

const PrevIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M7.828 13.0007L20 13.0007L20 11.0007L7.828 11.0007L13.192 5.63666L11.778 4.22266L4 12.0007L11.778 19.7787L13.192 18.3647L7.828 13.0007Z" fill="currentColor" />
  </svg>
)

const NextIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M16.172 13.0007L4 13.0007L4 11.0007L16.172 11.0007L10.808 5.63666L12.222 4.22266L20 12.0007L12.222 19.7787L10.808 18.3647L16.172 13.0007Z" fill="currentColor" />
  </svg>
)

const testimonials = [
  {
    quote: '"They brought clarity to complex problems, breaking down barriers and delivering innovative solutions."',
    author: '- John Doe Tech Innovations',
    img: 'https://cdn.prod.website-files.com/6929c116366a14507fc8424d/692dca1e292b510eb2c1be03_testimonials-img-1.avif',
    logo: 'https://cdn.prod.website-files.com/6929c116366a14507fc8424d/699cbd08c9f507094bc22221_logo-testimonials-2.svg',
  },
  {
    quote: '"Their insight resolved difficult hurdles, opening new paths and creating highly effective strategies."',
    author: '- John Doe Tech Innovations',
    img: 'https://cdn.prod.website-files.com/6929c116366a14507fc8424d/692dca1eaa619febe5b5dbbe_testimonials-img-2.avif',
    logo: 'https://cdn.prod.website-files.com/6929c116366a14507fc8424d/699cbd0853b0828f2ba09cf4_logo-testimonials-3.svg',
  },
  {
    quote: '"We found focus for tricky requirements, cutting through noise and providing truly advanced responses."',
    author: '- John Doe Tech Innovations',
    img: 'https://cdn.prod.website-files.com/6929c116366a14507fc8424d/692dca1ec7c3cf972adaf7d0_testimonials-img-3.avif',
    logo: 'https://cdn.prod.website-files.com/6929c116366a14507fc8424d/699cbd08a824b982dbb8e14f_logo-testimonials-1.svg',
  },
  {
    quote: '"They gave simple paths to hard puzzles, removing all delays while building fresh, brilliant projects."',
    author: '- John Doe Tech Innovations',
    img: 'https://cdn.prod.website-files.com/6929c116366a14507fc8424d/692dca1ef44243d100a616ae_testimonials-img-4.avif',
    logo: 'https://cdn.prod.website-files.com/6929c116366a14507fc8424d/692a148227a37705feded0ce_ipsum-logo.svg',
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const slidePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  const slideNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, testimonials.length - 3))
  }

  return (
    <section className="section_testimonials" id="testimonials">
      <div className="padding-section-medium" />
      <div className="padding-global">
        <div className="container-large">
          <div>
            <div className="tag" data-anim>
              <div className="dot-square" />
              <div>Testimonials</div>
            </div>

            <div className="spacer-medium" />

            <h2 data-anim>What they say about us?</h2>

            <div className="spacer-medium" />

            <div className="testi_wrap">
              <div className="text-color-secondary" data-anim>
                Here's what they shared about their experience working with our team.
              </div>

              <div className="arrows_wrap is-testimonals">
                <button
                  className="arrow_container slide_prev"
                  onClick={slidePrev}
                  disabled={currentIndex === 0}
                  style={{ opacity: currentIndex === 0 ? 0.4 : 1 }}
                >
                  <div className="icon-1x1-medium">
                    <PrevIcon />
                  </div>
                </button>
                <button
                  className="arrow_container slide_next"
                  onClick={slideNext}
                  disabled={currentIndex >= testimonials.length - 3}
                  style={{ opacity: currentIndex >= testimonials.length - 3 ? 0.4 : 1 }}
                >
                  <div className="icon-1x1-medium">
                    <NextIcon />
                  </div>
                </button>
              </div>
            </div>
          </div>

          <div className="spacer-section-medium" />

          {/* Testimonial slider */}
          <div className="testi_swiper">
            <div
              className="testimonials_cards"
              style={{
                transform: `translateX(calc(-${currentIndex * (100 / 3)}% - ${currentIndex * 0.5}rem))`,
              }}
            >
              {testimonials.map((t, i) => (
                <div key={i} className="testimonials_card">
                  <img
                    src={t.img}
                    loading="lazy"
                    alt=""
                    className="img"
                    style={{ width: '100%', height: '28rem', objectFit: 'cover' }}
                  />
                  {/* Logo */}
                  <div className="testimonials_logo-container">
                    <img src={t.logo} loading="lazy" alt="" className="testimonials-logo" />
                  </div>
                  {/* Gradient */}
                  <div className="blur-card" />
                  {/* Content */}
                  <div className="testimonial_card-container">
                    <div className="relative text-color-on-primary">
                      <div className="icon-1x1-large">
                        <QuoteIcon />
                      </div>
                      <div className="text-lg" style={{ display: '-webkit-box', overflow: 'hidden', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
                        {t.quote}
                      </div>
                      <div className="spacer-large" />
                      <div className="text-align-right">{t.author}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile arrows */}
          <div className="arrows_wrap is-testimonals-phone">
            <button
              className="arrow_container slide_prev"
              onClick={slidePrev}
              disabled={currentIndex === 0}
              style={{ opacity: currentIndex === 0 ? 0.4 : 1 }}
            >
              <div className="icon-1x1-medium">
                <PrevIcon />
              </div>
            </button>
            <button
              className="arrow_container slide_next"
              onClick={slideNext}
              disabled={currentIndex >= testimonials.length - 1}
              style={{ opacity: currentIndex >= testimonials.length - 1 ? 0.4 : 1 }}
            >
              <div className="icon-1x1-medium">
                <NextIcon />
              </div>
            </button>
          </div>
        </div>
      </div>
      <div className="padding-section-medium" />
    </section>
  )
}
