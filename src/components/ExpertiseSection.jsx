export default function ExpertiseSection() {
  return (
    <section className="section_expertise" id="expertise">
      <div className="padding-section-large" />
      <div className="padding-global">
        <div className="container-large">
          {/* Header */}
          <div className="vertical-center">
            <div className="tag">
              <div className="dot-square" />
              <div>Expertise</div>
            </div>
            <div className="spacer-large" />
            <div className="max-width-medium is-41rem">
              <h2 className="text-align-center">Where human insight meets intelligent technology</h2>
            </div>
            <div className="spacer-large" />
            <div className="max-width-medium is-34rem">
              <div className="text-base text-align-center text-color-secondary">
                We help businesses harness technology not to replace human creativity, but to amplify it — enabling smarter decisions and faster.
              </div>
            </div>
          </div>

          <div className="spacer-section-medium" />

          <div className="expertise_cards">
            {/* Card 1: Automation & optimization */}
            <div className="expertise_card">
              <div className="visual">
                <div className="visual_wrap-first">
                  {/* vcard - transaction list */}
                  <div className="vcard">
                    <div className="vcard_inner">
                      <div className="vcard_section">
                        <div className="vcard_text-group">
                          <p className="vcard_text-label text-weight-medium">Monthly expanse</p>
                          <div className="vcard_amount-wrap">
                            <div className="text-wrap">
                              <div className="vcard_text-amount">$</div>
                              <div className="vcard_text-amount">4,900</div>
                            </div>
                            <p className="vcard_text-amount-muted text-weight-medium">/ $10,000</p>
                          </div>
                        </div>
                        <div className="vcard_progress-bg">
                          <div className="vcard_progress-fill" style={{ width: '49%' }} />
                        </div>
                      </div>
                      <div className="vcard_section-list">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="vcard_row">
                            <div className="vcard_row-left">
                              <div className="vcard_row-icon" style={{ width: '1rem', height: '1rem', background: 'rgba(0,0,0,0.08)', borderRadius: '50%', flexShrink: 0 }} />
                              <div className="vcard_row-info">
                                <p className="vcard_text-label text-weight-medium">Vit premium</p>
                                <p className="vcard_text-date text-weight-medium">November 14, 2025</p>
                              </div>
                            </div>
                            <p className="vcard_text-price text-weight-medium">$120</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* pcard - performance */}
                  <div className="pcard">
                    <div className="pcard_inner">
                      <div className="pcard_header">
                        <div className="pcard_header-text">
                          <p className="pcard_text-title">Performance</p>
                          <p className="pcard_text-muted">In the past 7 days</p>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" className="pcard_icon">
                          <path d="M4.20065 17.7827L9.50065 12.4827L12.7506 15.7327C13.1606 16.1427 13.8206 16.1227 14.2006 15.6927L21.3706 7.62274C21.7206 7.23274 21.7006 6.63274 21.3306 6.25274C21.2345 6.15693 21.1199 6.08169 20.9938 6.03158C20.8677 5.98148 20.7327 5.95758 20.5971 5.96132C20.4614 5.96506 20.3279 5.99637 20.2048 6.05335C20.0816 6.11033 19.9713 6.19178 19.8806 6.29274L13.4906 13.4727L10.2006 10.1827C10.1081 10.09 9.99824 10.0165 9.87727 9.96631C9.7563 9.91613 9.62662 9.8903 9.49565 9.8903C9.36468 9.8903 9.235 9.91613 9.11402 9.96631C8.99305 10.0165 8.88316 10.09 8.79065 10.1827L2.70065 16.2827C2.60794 16.3753 2.5344 16.4851 2.48421 16.6061C2.43403 16.7271 2.4082 16.8568 2.4082 16.9877C2.4082 17.1187 2.43403 17.2484 2.48421 17.3694C2.5344 17.4903 2.60794 17.6002 2.70065 17.6927L2.79065 17.7827C3.18065 18.1727 3.82065 18.1727 4.20065 17.7827Z" fill="#4ade80" />
                        </svg>
                      </div>
                      <div className="pcard_body">
                        <div className="text-wrap">
                          <div className="pcard_text-value">50</div>
                          <div className="pcard_text-value">+</div>
                        </div>
                        <p className="pcard_text-muted">Monthly expanse</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-padding-medium">
                <div className="vertical-center">
                  <h3 className="text-xl text-align-center">Automation &amp; optimization</h3>
                  <div className="spacer-xsmall" />
                  <div className="text-base text-align-center text-color-secondary">
                    Streamline your operations through intelligent workflow automation that saves time, reduces errors, and boosts productivity.
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Data analytics */}
            <div className="expertise_card">
              <div className="visual">
                <div className="visual_wrap-second">
                  {/* bcard - bar chart */}
                  <div className="bcard">
                    <div className="bcard_inner">
                      <p className="bcard_text-title">Intelligence in Every Decision</p>
                      <div className="bcard_chart">
                        {[
                          { year: '2019', cls: '' },
                          { year: '2020', cls: '' },
                          { year: '2021', cls: 'is-h2' },
                          { year: '2022', cls: 'is-h3' },
                          { year: '2023', cls: 'is-h4' },
                          { year: '2024', cls: 'is-fill' },
                          { year: '2025', cls: 'is-active is-h5' },
                        ].map((b) => (
                          <div key={b.year} className="bcard_chart-col">
                            <div className={`bcard_bar ${b.cls}`} />
                            <p className="bcard_text-year">{b.year}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  {/* ecard - expertise text */}
                  <div className="ecard">
                    <div className="ecard_inner">
                      <p className="ecard_text">Expertise</p>
                      <div className="ecard_badge">
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none" className="ecard_badge-icon">
                          <rect width="16.9398" height="16.9398" rx="8.46988" fill="#ffffff" fillOpacity="0.1" />
                          <path d="M8.47 4.94C7.82 4.94 7.19 5.2 6.72 5.66C6.26 6.12 6 6.75 6 7.41C6 8.25 6.42 8.99 7.06 9.43V10.23C7.06 10.32 7.1 10.41 7.16 10.48C7.23 10.55 7.32 10.58 7.41 10.58H9.53C9.62 10.58 9.71 10.55 9.78 10.48C9.84 10.41 9.88 10.32 9.88 10.23V9.43C10.52 8.99 10.94 8.25 10.94 7.41C10.94 6.75 10.68 6.12 10.22 5.66C9.75 5.2 9.12 4.94 8.47 4.94ZM7.41 11.64C7.41 11.74 7.45 11.83 7.52 11.89C7.58 11.96 7.67 11.99 7.76 11.99H9.18C9.27 11.99 9.36 11.96 9.43 11.89C9.49 11.83 9.53 11.74 9.53 11.64V11.29H7.41V11.64Z" fill="white" />
                        </svg>
                      </div>
                      <p className="text-muted-40">that</p>
                      <p className="text-muted-40">Combines</p>
                      <p className="text-muted-40">Strategy,</p>
                      <p className="ecard_text">Data,</p>
                      <p className="text-muted-40">and Artificial</p>
                      <p className="ecard_text">Intelligence</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-padding-medium">
                <div className="vertical-center">
                  <h3 className="text-xl text-align-center">Data analytics &amp; insights</h3>
                  <div className="spacer-xsmall" />
                  <div className="text-base text-align-center text-color-secondary">
                    Transform raw data into strategic insight using advanced analytics, dashboards, and predictive modeling.
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Digital transformation */}
            <div className="expertise_card">
              <div className="visual">
                <div className="visual_wrap-third">
                  {/* gcard - growth stats + tags */}
                  <div className="gcard">
                    <div className="gcard_inner">
                      <div className="gcard_dark-block">
                        <div className="pcard_header">
                          <div className="pcard_header-text">
                            <p className="pcard_text-title" style={{ color: '#fff' }}>Performance</p>
                            <p className="pcard_text-muted">In the past 7 days</p>
                          </div>
                          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" className="pcard_icon">
                            <path d="M4.20065 17.7827L9.50065 12.4827L12.7506 15.7327C13.1606 16.1427 13.8206 16.1227 14.2006 15.6927L21.3706 7.62274C21.7206 7.23274 21.7006 6.63274 21.3306 6.25274C21.2345 6.15693 21.1199 6.08169 20.9938 6.03158C20.8677 5.98148 20.7327 5.95758 20.5971 5.96132C20.4614 5.96506 20.3279 5.99637 20.2048 6.05335C20.0816 6.11033 19.9713 6.19178 19.8806 6.29274L13.4906 13.4727L10.2006 10.1827C10.1081 10.09 9.99824 10.0165 9.87727 9.96631C9.7563 9.91613 9.62662 9.8903 9.49565 9.8903C9.36468 9.8903 9.235 9.91613 9.11402 9.96631C8.99305 10.0165 8.88316 10.09 8.79065 10.1827L2.70065 16.2827C2.60794 16.3753 2.5344 16.4851 2.48421 16.6061C2.43403 16.7271 2.4082 16.8568 2.4082 16.9877C2.4082 17.1187 2.43403 17.2484 2.48421 17.3694C2.5344 17.4903 2.60794 17.6002 2.70065 17.6927L2.79065 17.7827C3.18065 18.1727 3.82065 18.1727 4.20065 17.7827Z" fill="#4ade80" />
                          </svg>
                        </div>
                      </div>
                      <div className="gcard_stats">
                        <div className="gcard_value-row">
                          <div className="text-wrap">
                            <div className="pcard_text-value">49</div>
                            <div className="pcard_text-value">%</div>
                          </div>
                          <div className="gcard_badge"><p>+2.5%</p></div>
                        </div>
                        <p className="gcard_text-sub">Business growth</p>
                      </div>
                      <div className="gcard_tags">
                        <div className="gcard_tags-row">
                          {['Professional', 'Strategic', 'AI-Focused', 'Startup Feel', 'Professional', 'Strategic', 'AI-Focused', 'Startup Feel'].map((t, i) => (
                            <div key={i} className="gcard_tag"><p>{t}</p></div>
                          ))}
                        </div>
                        <div className="gcard_tags-row">
                          {['Smarter', 'Grow Faster', 'Build Smart', 'Simple', 'Smarter', 'Grow Faster', 'Build Smart', 'Simple'].map((t, i) => (
                            <div key={i} className="gcard_tag"><p>{t}</p></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* scard - testimonial mini */}
                  <div className="scard">
                    <div className="scard_inner">
                      <div className="scard_top-bar">
                        <div className="scard_avatars">
                          {[
                            'https://cdn.prod.website-files.com/6929c116366a14507fc8424d/69a75e5565c3bf792b02b457_profile.avif',
                            'https://cdn.prod.website-files.com/6929c116366a14507fc8424d/69a75e550a52d15c30221b24_profile-1.avif',
                            'https://cdn.prod.website-files.com/6929c116366a14507fc8424d/69a75e55f95a0278fc6041e4_profile-2.avif',
                          ].map((src, i) => (
                            <div key={i} className="scard_avatar">
                              <img loading="lazy" src={src} alt="" className="img" />
                            </div>
                          ))}
                        </div>
                        <p className="pcard_text-muted">+5,000 customers</p>
                      </div>
                      <div className="scard_text-wrap">
                        <p className="text-muted-40" style={{ color: 'rgba(0,0,0,0.28)' }}>Smart.</p>
                        <p className="text-muted-40" style={{ color: 'rgba(0,0,0,0.28)' }}>Simple.</p>
                        <p className="ecard_text" style={{ color: '#0f0f0f' }}>Strategic.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-padding-medium">
                <div className="vertical-center">
                  <h3 className="text-xl text-align-center">Digital transformation</h3>
                  <div className="spacer-xsmall" />
                  <div className="text-base text-align-center text-color-secondary">
                    We guide organizations through full-scale digital evolution — modernizing systems, processes, and decision-making frameworks.
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4: Experience intelligence */}
            <div className="expertise_card">
              <div className="visual">
                <div className="visual_wrap-fouth">
                  {/* ocard - orbit rings + pills */}
                  <div className="ocard">
                    <div className="ocard_ring">
                      <div className="ocard_ring">
                        <div className="ocard_ring is-inner">
                          <div className="ocard_center">
                            <div className="ocard_logo-wrap">
                              <img
                                loading="lazy"
                                src="https://cdn.prod.website-files.com/6929c116366a14507fc8424d/69a76463bf217fd7cf33872b_Logo.svg"
                                alt=""
                                className="img"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {[
                      { pos: 'is-pos-1', avatar: 'https://cdn.prod.website-files.com/6929c116366a14507fc8424d/69a75e55f95a0278fc6041e4_profile-2.avif', name: 'Ann Stanton', badge: '+2.5%' },
                      { pos: 'is-pos-2', avatar: 'https://cdn.prod.website-files.com/6929c116366a14507fc8424d/69a75e5565c3bf792b02b457_profile.avif', name: 'Livia Curtis', badge: '+6%' },
                      { pos: 'is-pos-3', avatar: 'https://cdn.prod.website-files.com/6929c116366a14507fc8424d/69a75e550a52d15c30221b24_profile-1.avif', name: 'Lindsey Press', badge: '+5%' },
                    ].map((pill) => (
                      <div key={pill.pos} className={`ocard_pill ${pill.pos}`}>
                        <div className="ocard_pill-inner">
                          <div className="ocard_pill-user">
                            <div className="ocard_pill-avatar">
                              <img loading="lazy" src={pill.avatar} alt="" className="img" />
                            </div>
                            <p className="ocard_pill-name">{pill.name}</p>
                          </div>
                          <div className="gcard_badge"><p>{pill.badge}</p></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="card-padding-medium">
                <div className="vertical-center">
                  <h3 className="text-xl text-align-center">Experience intelligence</h3>
                  <div className="spacer-xsmall" />
                  <div className="text-base text-align-center text-color-secondary">
                    Combine data and design to deliver smarter, more personalized digital experiences that connect with users.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="padding-section-large" />
    </section>
  )
}
