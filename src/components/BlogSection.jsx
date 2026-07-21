const blogPosts = [
  {
    title: 'Turning Data into Strategy: The Power of Analytics',
    slug: 'turning-data-into-strategy',
    img: 'https://cdn.prod.website-files.com/6929c116366a14507fc84252/6961c58c9c176be6aada8c2f_blog-img-1_1x.webp',
  },
  {
    title: '5 Ways AI Can Streamline Business Operations',
    slug: '5-ways-ai-streamline',
    img: 'https://cdn.prod.website-files.com/6929c116366a14507fc84252/6961c6ca3c9b5f744a47a796_blog-img-2_1x.webp',
  },
  {
    title: 'Human + Machine: Finding the Perfect Balance',
    slug: 'human-machine-balance',
    img: 'https://cdn.prod.website-files.com/6929c116366a14507fc84252/6961c70052120388fb4e8c2a_blog-img-3_1x.webp',
  },
]

export default function BlogSection() {
  return (
    <section className="section_blog" id="blog">
      <div className="padding-section-large" />
      <div className="padding-global">
        <div className="container-large">
          <div className="horizontal-bottom is-between">
            <div>
              <div className="tag" data-anim>
                <div className="dot-square" />
                <div>Blog and articles</div>
              </div>

              <div className="spacer-medium" />

              <h2 data-anim>Latest insights and trends</h2>

              <div className="spacer-medium" />

              <div className="text-color-secondary" data-anim>
                Whether you're optimizing today or building for tomorrow we help you move faster with confidence.
              </div>
            </div>

            <div className="button_portrait" data-anim>
              <a
                href="#blog"
                className="button"
                data-variant="bg-black"
                style={{ background: '#0f0f0f', color: '#ffffff' }}
              >
                <div className="text-button-wrap">
                  <div>View All</div>
                </div>
              </a>
            </div>
          </div>

          <div className="spacer-section-medium" />

          <div className="blog_cards">
            {blogPosts.map((post, i) => (
              <div key={i} data-anim>
                <a href={`#${post.slug}`} className="blog_card">
                  <img
                    src={post.img}
                    loading="lazy"
                    alt=""
                    className="img"
                    style={{ width: '100%', height: '20rem', objectFit: 'cover' }}
                  />
                  <div className="blur-card" />
                  <div className="blog_card-content">
                    <h3 className="text-xl text-color-on-primary relative">{post.title}</h3>
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
