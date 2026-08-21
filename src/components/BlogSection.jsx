import { motion } from 'framer-motion'
import { WordReveal } from './ui/TextReveal'
import SpotlightCard from './ui/SpotlightCard'

const blogPosts = [
  {
    title: 'Turning Support Data into Retention: The Power of Analytics',
    slug: 'turning-data-into-strategy',
    img: 'https://cdn.prod.website-files.com/6929c116366a14507fc84252/6961c58c9c176be6aada8c2f_blog-img-1_1x.webp',
  },
  {
    title: '5 Ways Grounded AI Deflects Support Tickets Safely',
    slug: '5-ways-ai-streamline',
    img: 'https://cdn.prod.website-files.com/6929c116366a14507fc84252/6961c6ca3c9b5f744a47a796_blog-img-2_1x.webp',
  },
  {
    title: 'White-Label Helpdesk: Why Branding Your Support Matters',
    slug: 'human-machine-balance',
    img: 'https://cdn.prod.website-files.com/6929c116366a14507fc84252/6961c70052120388fb4e8c2a_blog-img-3_1x.webp',
  },
]

export default function BlogSection() {
  return (
    <section className="section_blog" id="blog">
      <div className="padding-global">
        <div className="container-large">
          <div className="horizontal-bottom is-between">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="tag"
              >
                <div className="dot-square" />
                <div>Insights &amp; Articles</div>
              </motion.div>

              <div className="spacer-small" />

              <WordReveal as="h2">Latest insights and trends</WordReveal>

              <div className="spacer-small" />

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="text-color-secondary"
              >
                Practical blueprints and engineering breakdowns from the Qolve platform team.
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="button_portrait"
            >
              <a
                href="#blog"
                className="button"
                data-variant="bg-black"
                style={{ background: '#0f0f0f', color: '#ffffff' }}
              >
                <div className="text-button-wrap">
                  <div>View All Insights</div>
                </div>
              </a>
            </motion.div>
          </div>

          <div className="spacer-section-medium" />

          <div className="blog_cards">
            {blogPosts.map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              >
                <SpotlightCard
                  spotlightColor="rgba(214, 253, 112, 0.15)"
                  style={{ borderRadius: '1.25rem' }}
                >
                  <a href={`#${post.slug}`} className="blog_card">
                    <img
                      src={post.img}
                      loading="lazy"
                      alt=""
                      className="img"
                      style={{ width: '100%', height: '12.5rem', objectFit: 'cover' }}
                    />
                    <div className="blur-card" />
                    <div className="blog_card-content">
                      <h3 className="text-lg text-color-on-primary relative" style={{ lineHeight: 1.3 }}>{post.title}</h3>
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

