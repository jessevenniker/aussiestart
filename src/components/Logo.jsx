/**
 * Logo — italic serif wordmark "aussiestart" met drie gold-wave swashes.
 * Stylebron: brand-mockup met "G'day, backpacker"-uitstraling.
 */
export default function Logo({ size = 'md', tagline = false, mark = false }) {
  if (mark) return <LogoMark size={size} />

  const sizes = {
    sm: { font: 18, gap: 4, wave: 6, tagline: 9 },
    md: { font: 26, gap: 6, wave: 8, tagline: 10 },
    lg: { font: 44, gap: 10, wave: 14, tagline: 13 },
    xl: { font: 64, gap: 14, wave: 20, tagline: 16 },
  }
  const s = sizes[size] || sizes.md

  return (
    <span className="inline-flex flex-col items-center leading-none select-none">
      <span
        className="font-serif italic text-bone tracking-tight"
        style={{ fontSize: s.font, lineHeight: 1, fontWeight: 500 }}
      >
        aussiestart
      </span>
      <Waves height={s.wave} marginTop={s.gap} />
      {tagline && (
        <span
          className="uppercase tracking-[0.32em] text-ochre mt-2"
          style={{ fontSize: s.tagline, fontWeight: 500 }}
        >
          — G'day, backpacker —
        </span>
      )}
    </span>
  )
}

function Waves({ height = 8, marginTop = 6 }) {
  // Drie zachte wave-arcs — vorm: ⌒ ⌒ ⌒
  const w = height * 8
  const h = height
  return (
    <svg
      width={w}
      height={h}
      viewBox={`0 0 80 12`}
      fill="none"
      style={{ marginTop }}
      aria-hidden="true"
    >
      <path d="M2 9 Q9 2 16 9"   stroke="#e0a458" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M30 9 Q37 2 44 9" stroke="#e0a458" strokeWidth="1.6" strokeLinecap="round" />
      <path d="M58 9 Q65 2 72 9" stroke="#e0a458" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

function LogoMark({ size = 'md' }) {
  // Compact mark voor avatar / favicon-context.
  const px = { sm: 28, md: 36, lg: 56 }[size] || 36
  return (
    <span
      className="inline-flex items-center justify-center rounded-lg bg-forest"
      style={{ width: px, height: px }}
      aria-hidden="true"
    >
      <svg width={px * 0.6} height={px * 0.5} viewBox="0 0 32 16" fill="none">
        <path
          d="M2 12 Q6 4 10 12 T18 12 T26 12 T34 12"
          stroke="#e0a458"
          strokeWidth="2.2"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    </span>
  )
}
