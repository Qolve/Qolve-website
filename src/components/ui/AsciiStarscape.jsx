import { useEffect, useState } from 'react'

const BASE_ASCII_ART = [
  "                      '       ':.                     +       o     '  +        ",
  "           .             '      '::._      .                                    ",
  "                                  '._)     +                                    ",
  "                          +  '                         +         '              ",
  "             |                  +      o        o             .          .      ",
  "           --o--                    o    '    ' .      '    .            .      ",
  "    .     *  |                       \\                                .         ",
  "      '  '      '             +       \\                                         ",
  "              o                        *.               '  '      '        .    ",
  "                 '                           |      '     '                 ' o ",
  "+          '               .               - o -         '            .   +     ",
  "                        +             .      |                            .     ",
  "                      .     . '                     +                   '   . + ",
  "          o      .  |                '                             '            ",
  "                  - o -     *                            ~~+     '         *    ",
  "                    |               .                 +           o             ",
  "             .-.                                                          .     ",
  "            (   )                           .                      *            ",
  "             `-'                     o                                         .",
  "           '                           *           '    '             +       + "
]

export default function AsciiStarscape({ opacity = 0.75 }) {
  const [frame, setFrame] = useState(BASE_ASCII_ART)

  useEffect(() => {
    // Subtle terminal twinkle on random stars
    const interval = setInterval(() => {
      const updated = BASE_ASCII_ART.map((line) => {
        // Occasionally flicker a twinkle character
        return line.split('').map((char) => {
          if (char === '*' && Math.random() < 0.15) return '+'
          if (char === '+' && Math.random() < 0.15) return '*'
          if (char === '.' && Math.random() < 0.1) return "'"
          if (char === "'" && Math.random() < 0.1) return '.'
          return char
        }).join('')
      })
      setFrame(updated)
    }, 180)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        pointerEvents: 'none',
        zIndex: 1,
        userSelect: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: opacity,
      }}
    >
      <pre
        style={{
          margin: 0,
          fontFamily: '"SF Mono", "Menlo", "Monaco", "Cascadia Code", "Courier New", monospace',
          fontSize: 'clamp(0.7rem, 1.25vw, 1.05rem)',
          lineHeight: '1.25em',
          fontWeight: 700,
          color: '#000000',
          letterSpacing: '0.12em',
          whiteSpace: 'pre',
          WebkitFontSmoothing: 'none',
          MozOsxFontSmoothing: 'unset',
          textShadow: 'none',
          width: '100%',
          textAlign: 'center',
        }}
      >
        {frame.join('\n')}
      </pre>
    </div>
  )
}
