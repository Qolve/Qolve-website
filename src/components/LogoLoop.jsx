// Partner logos from Aeline CDN
const LOGOS = [
  'https://cdn.prod.website-files.com/6929c116366a14507fc8424d/692a0fbc0a00730d709003d2_logo-4.svg',
  'https://cdn.prod.website-files.com/6929c116366a14507fc8424d/692a0fbc964ffb9e2e1f3831_logo-3.svg',
  'https://cdn.prod.website-files.com/6929c116366a14507fc8424d/692a0fbc6e3d4146330879cb_logo-2.svg',
  'https://cdn.prod.website-files.com/6929c116366a14507fc8424d/692a0fbc1d0331fc768fcaee_logo-1.svg',
  'https://cdn.prod.website-files.com/6929c116366a14507fc8424d/692a0fbc0a00730d709003d2_logo-4.svg',
  'https://cdn.prod.website-files.com/6929c116366a14507fc8424d/692a0fbc964ffb9e2e1f3831_logo-3.svg',
  'https://cdn.prod.website-files.com/6929c116366a14507fc8424d/692a0fbc6e3d4146330879cb_logo-2.svg',
  'https://cdn.prod.website-files.com/6929c116366a14507fc8424d/692a0fbc1d0331fc768fcaee_logo-1.svg',
]

export default function LogoLoop() {
  return (
    <section className="section_loop">
      <div className="loop">
        {/* First set */}
        <div className="loop_logos">
          {LOGOS.map((src, i) => (
            <img key={i} src={src} loading="lazy" alt="" className="logo" />
          ))}
        </div>
        {/* Second set - duplicate for seamless loop */}
        <div className="loop_logos" aria-hidden="true">
          {LOGOS.map((src, i) => (
            <img key={i} src={src} loading="lazy" alt="" className="logo" />
          ))}
        </div>
      </div>
    </section>
  )
}
