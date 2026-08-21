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
    <section className="section_blog" id="blog" style={{ position: 'relative', overflow: 'hidden', padding: '6rem 0' }}>
      <div className="padding-global">
        <div className="container-large">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '2rem', marginBottom: '3.5rem' }}>
            <div style={{ maxWidth: '42rem' }}>
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
                <span>Lab Research &amp; Insights</span>
              </div>

              <h2 style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)', color: '#ffffff', letterSpacing: '-0.035em', lineHeight: 1.1, fontWeight: 700, marginBottom: '1rem' }}>
                Latest engineering dispatches
              </h2>

              <p style={{ color: '#94a3b8', fontSize: '1.0625rem', lineHeight: 1.6 }}>
                Technical deep-dives into mail deliverability, self-healing support AI, and sustainable SaaS architecture.
              </p>
            </div>

            <div className="button_portrait">
              <a
                href="#blog"
                className="button"
                style={{
                  background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.03) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.18)',
                  color: '#f8fafc',
                  padding: '0.65rem 1.4rem',
                  borderRadius: '9999px',
                  boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.25)',
                }}
              >
                View All Articles
              </a>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {blogPosts.map((post, i) => (
              <div key={i}>
                <a href={`#${post.slug}`} className="blog_card macos-glass" style={{ display: 'block', textDecoration: 'none', position: 'relative', overflow: 'hidden', borderRadius: '1.75rem', border: '1px solid rgba(255, 255, 255, 0.12)' }}>
                  <img
                    src={post.img}
                    loading="lazy"
                    alt=""
                    className="img"
                    style={{ width: '100%', height: '20rem', objectFit: 'cover', filter: 'brightness(0.7) contrast(1.05)' }}
                  />
                  <div className="blur-card" style={{ background: 'linear-gradient(180deg, transparent 30%, rgba(2, 8, 4, 0.95) 100%)' }} />
                  <div className="blog_card-content" style={{ position: 'absolute', bottom: '1.75rem', left: '1.75rem', right: '1.75rem', zIndex: 2 }}>
                    <span style={{ fontSize: '0.75rem', color: '#6ee7b7', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem', display: 'inline-block' }}>
                      Engineering Note
                    </span>
                    <h3 className="text-xl" style={{ color: '#ffffff', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.3 }}>{post.title}</h3>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

