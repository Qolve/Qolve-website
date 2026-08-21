import React from 'react'

// Curated ASCII Star Assets derived from user terminal starscape specifications
const STAR_BURST_1 = (
  <pre style={{ margin: 0, lineHeight: '1.05', fontFamily: 'inherit', fontWeight: 800 }}>
{`  |  
--o--
  |  `}
  </pre>
)

const STAR_BURST_2 = (
  <pre style={{ margin: 0, lineHeight: '1.05', fontFamily: 'inherit', fontWeight: 800 }}>
{`  |  
- o -
  |  `}
  </pre>
)

const SHOOTING_STAR = (
  <pre style={{ margin: 0, lineHeight: '1.05', fontFamily: 'inherit', fontWeight: 700 }}>
{`\\
 \\
  *.`}
  </pre>
)

const COMET_SPARK = (
  <pre style={{ margin: 0, lineHeight: '1.05', fontFamily: 'inherit', fontWeight: 700 }}>
{`~~+`}
  </pre>
)

const CLUSTER_TRIPLE = (
  <pre style={{ margin: 0, lineHeight: '1.1', fontFamily: 'inherit', fontWeight: 700 }}>
{`'  '   '
  +   .`}
  </pre>
)

// Static Curated Layouts per Page / Section Variant
const SECTION_STAR_LAYOUTS = {
  about: [
    // Top-Left Cluster (framing the tag and title)
    { x: '4%', y: '6%', content: STAR_BURST_1, opacity: 0.7, size: '0.75rem' },
    { x: '12%', y: '14%', content: "'", opacity: 0.5, size: '0.9rem' },
    { x: '8%', y: '22%', content: '*', opacity: 0.6, size: '0.85rem' },
    { x: '15%', y: '8%', content: '+', opacity: 0.6, size: '0.8rem' },
    { x: '2%', y: '32%', content: 'o', opacity: 0.45, size: '0.75rem' },

    // Top-Center / Header Surrounding
    { x: '28%', y: '5%', content: CLUSTER_TRIPLE, opacity: 0.5, size: '0.75rem' },
    { x: '72%', y: '6%', content: COMET_SPARK, opacity: 0.65, size: '0.8rem' },
    { x: '82%', y: '10%', content: STAR_BURST_2, opacity: 0.75, size: '0.75rem' },

    // Upper-Right Above Giant Earth
    { x: '88%', y: '4%', content: "'  +   o", opacity: 0.6, size: '0.8rem' },
    { x: '94%', y: '16%', content: '*', opacity: 0.7, size: '0.9rem' },
    { x: '78%', y: '22%', content: '+', opacity: 0.5, size: '0.85rem' },

    // Left Flank (Beside bento cards)
    { x: '3%', y: '48%', content: SHOOTING_STAR, opacity: 0.65, size: '0.75rem' },
    { x: '6%', y: '68%', content: STAR_BURST_2, opacity: 0.7, size: '0.75rem' },
    { x: '2%', y: '84%', content: "' . '", opacity: 0.5, size: '0.8rem' },
    { x: '8%', y: '92%', content: '+', opacity: 0.6, size: '0.85rem' },

    // Bottom Margin Constellations
    { x: '22%', y: '94%', content: '*', opacity: 0.55, size: '0.85rem' },
    { x: '38%', y: '96%', content: STAR_BURST_1, opacity: 0.6, size: '0.7rem' },
    { x: '58%', y: '95%', content: 'o', opacity: 0.45, size: '0.75rem' },
    { x: '76%', y: '92%', content: '+   *   .', opacity: 0.55, size: '0.8rem' },
    { x: '92%', y: '88%', content: STAR_BURST_2, opacity: 0.65, size: '0.75rem' },
  ],

  services: [
    // Top-Left (framing the Moon)
    { x: '18%', y: '5%', content: '+', opacity: 0.6, size: '0.85rem' },
    { x: '14%', y: '18%', content: '*', opacity: 0.7, size: '0.9rem' },
    { x: '22%', y: '12%', content: "' .", opacity: 0.5, size: '0.8rem' },
    { x: '6%', y: '30%', content: STAR_BURST_1, opacity: 0.7, size: '0.75rem' },

    // Top-Right Cosmic Flow
    { x: '74%', y: '6%', content: SHOOTING_STAR, opacity: 0.7, size: '0.8rem' },
    { x: '86%', y: '8%', content: STAR_BURST_2, opacity: 0.75, size: '0.75rem' },
    { x: '92%', y: '18%', content: COMET_SPARK, opacity: 0.6, size: '0.8rem' },
    { x: '95%', y: '30%', content: "'   +   *", opacity: 0.55, size: '0.8rem' },

    // Center Flanks (outside cards)
    { x: '2%', y: '52%', content: CLUSTER_TRIPLE, opacity: 0.5, size: '0.75rem' },
    { x: '5%', y: '74%', content: '*', opacity: 0.6, size: '0.85rem' },
    { x: '2%', y: '88%', content: '+', opacity: 0.65, size: '0.85rem' },
    { x: '96%', y: '54%', content: STAR_BURST_1, opacity: 0.65, size: '0.75rem' },
    { x: '93%', y: '72%', content: 'o', opacity: 0.45, size: '0.75rem' },
    { x: '95%', y: '86%', content: SHOOTING_STAR, opacity: 0.6, size: '0.75rem' },

    // Bottom Base
    { x: '16%', y: '95%', content: STAR_BURST_2, opacity: 0.6, size: '0.75rem' },
    { x: '34%', y: '96%', content: "' . '", opacity: 0.5, size: '0.8rem' },
    { x: '65%', y: '95%', content: '+', opacity: 0.6, size: '0.85rem' },
    { x: '82%', y: '94%', content: STAR_BURST_1, opacity: 0.65, size: '0.75rem' },
  ],

  hero: [
    // Top Corners
    { x: '4%', y: '8%', content: STAR_BURST_1, opacity: 0.7, size: '0.75rem' },
    { x: '10%', y: '16%', content: '*', opacity: 0.6, size: '0.85rem' },
    { x: '90%', y: '8%', content: SHOOTING_STAR, opacity: 0.7, size: '0.8rem' },
    { x: '94%', y: '20%', content: STAR_BURST_2, opacity: 0.65, size: '0.75rem' },

    // Lateral Framing
    { x: '3%', y: '40%', content: CLUSTER_TRIPLE, opacity: 0.5, size: '0.75rem' },
    { x: '2%', y: '65%', content: COMET_SPARK, opacity: 0.6, size: '0.8rem' },
    { x: '96%', y: '45%', content: STAR_BURST_1, opacity: 0.65, size: '0.75rem' },
    { x: '94%', y: '70%', content: "' + *", opacity: 0.55, size: '0.8rem' },

    // Bottom
    { x: '8%', y: '92%', content: '+', opacity: 0.6, size: '0.85rem' },
    { x: '24%', y: '95%', content: STAR_BURST_2, opacity: 0.6, size: '0.75rem' },
    { x: '75%', y: '94%', content: SHOOTING_STAR, opacity: 0.6, size: '0.75rem' },
    { x: '90%', y: '92%', content: '*', opacity: 0.65, size: '0.85rem' },
  ],

  capabilities: [
    { x: '5%', y: '10%', content: SHOOTING_STAR, opacity: 0.7, size: '0.75rem' },
    { x: '88%', y: '8%', content: STAR_BURST_1, opacity: 0.75, size: '0.75rem' },
    { x: '94%', y: '22%', content: COMET_SPARK, opacity: 0.6, size: '0.8rem' },
    { x: '3%', y: '50%', content: STAR_BURST_2, opacity: 0.65, size: '0.75rem' },
    { x: '96%', y: '55%', content: CLUSTER_TRIPLE, opacity: 0.5, size: '0.75rem' },
    { x: '6%', y: '88%', content: "' + .", opacity: 0.55, size: '0.8rem' },
    { x: '85%', y: '92%', content: STAR_BURST_1, opacity: 0.65, size: '0.75rem' },
  ],

  expertise: [
    { x: '6%', y: '8%', content: STAR_BURST_2, opacity: 0.7, size: '0.75rem' },
    { x: '14%', y: '16%', content: COMET_SPARK, opacity: 0.6, size: '0.8rem' },
    { x: '90%', y: '10%', content: SHOOTING_STAR, opacity: 0.7, size: '0.8rem' },
    { x: '3%', y: '60%', content: CLUSTER_TRIPLE, opacity: 0.5, size: '0.75rem' },
    { x: '95%', y: '62%', content: STAR_BURST_1, opacity: 0.65, size: '0.75rem' },
    { x: '18%', y: '94%', content: '*', opacity: 0.6, size: '0.85rem' },
    { x: '82%', y: '92%', content: STAR_BURST_2, opacity: 0.65, size: '0.75rem' },
  ],

  pricing: [
    { x: '8%', y: '8%', content: STAR_BURST_1, opacity: 0.7, size: '0.75rem' },
    { x: '92%', y: '6%', content: SHOOTING_STAR, opacity: 0.7, size: '0.8rem' },
    { x: '2%', y: '45%', content: COMET_SPARK, opacity: 0.6, size: '0.8rem' },
    { x: '96%', y: '48%', content: STAR_BURST_2, opacity: 0.65, size: '0.75rem' },
    { x: '6%', y: '88%', content: CLUSTER_TRIPLE, opacity: 0.5, size: '0.75rem' },
    { x: '90%', y: '90%', content: STAR_BURST_1, opacity: 0.65, size: '0.75rem' },
  ],

  testimonials: [
    { x: '5%', y: '8%', content: SHOOTING_STAR, opacity: 0.7, size: '0.75rem' },
    { x: '92%', y: '10%', content: STAR_BURST_1, opacity: 0.75, size: '0.75rem' },
    { x: '3%', y: '52%', content: STAR_BURST_2, opacity: 0.65, size: '0.75rem' },
    { x: '95%', y: '50%', content: COMET_SPARK, opacity: 0.6, size: '0.8rem' },
    { x: '10%', y: '92%', content: CLUSTER_TRIPLE, opacity: 0.5, size: '0.75rem' },
    { x: '88%', y: '92%', content: STAR_BURST_2, opacity: 0.65, size: '0.75rem' },
  ],

  blog: [
    { x: '6%', y: '10%', content: STAR_BURST_2, opacity: 0.7, size: '0.75rem' },
    { x: '88%', y: '8%', content: SHOOTING_STAR, opacity: 0.7, size: '0.8rem' },
    { x: '94%', y: '18%', content: COMET_SPARK, opacity: 0.6, size: '0.8rem' },
    { x: '2%', y: '55%', content: CLUSTER_TRIPLE, opacity: 0.5, size: '0.75rem' },
    { x: '96%', y: '52%', content: STAR_BURST_1, opacity: 0.65, size: '0.75rem' },
    { x: '12%', y: '92%', content: STAR_BURST_1, opacity: 0.65, size: '0.75rem' },
    { x: '86%', y: '92%', content: '*', opacity: 0.6, size: '0.85rem' },
  ],

  cta: [
    { x: '8%', y: '12%', content: STAR_BURST_1, opacity: 0.75, size: '0.75rem' },
    { x: '90%', y: '10%', content: STAR_BURST_2, opacity: 0.75, size: '0.75rem' },
    { x: '4%', y: '50%', content: SHOOTING_STAR, opacity: 0.7, size: '0.8rem' },
    { x: '95%', y: '48%', content: COMET_SPARK, opacity: 0.65, size: '0.8rem' },
    { x: '15%', y: '88%', content: CLUSTER_TRIPLE, opacity: 0.55, size: '0.75rem' },
    { x: '85%', y: '88%', content: STAR_BURST_1, opacity: 0.7, size: '0.75rem' },
  ],
}

export default function AsciiStarfield({ variant = 'about', opacity = 0.85 }) {
  const stars = SECTION_STAR_LAYOUTS[variant] || SECTION_STAR_LAYOUTS.about

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 1,
        userSelect: 'none',
        opacity: opacity,
      }}
    >
      {stars.map((item, idx) => (
        <div
          key={idx}
          style={{
            position: 'absolute',
            left: item.x,
            top: item.y,
            fontFamily: '"SF Mono", "Menlo", "Monaco", "Cascadia Code", "Courier New", monospace',
            fontSize: item.size,
            color: '#000000',
            opacity: item.opacity,
            WebkitFontSmoothing: 'none',
            MozOsxFontSmoothing: 'unset',
            lineHeight: 1,
            whiteSpace: 'pre',
            transform: 'translate(-50%, -50%)',
          }}
        >
          {item.content}
        </div>
      ))}
    </div>
  )
}
