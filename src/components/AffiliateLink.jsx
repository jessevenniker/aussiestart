/**
 * AffiliateLink, link met automatische disclosure-tag en juiste rel-attributen.
 *
 * Voldoet aan:
 * - Google guidelines: rel="sponsored noopener noreferrer"
 * - FTC/AFM-stijl disclosure: zichtbaar partner-label naast elke link
 * - SafetyWing Ambassador-voorwaarden: reference-ID in URL behouden, geen
 *   misleidende claims over dekking (content beheerd in de pagina zelf)
 *
 * Gebruik:
 *   <AffiliateLink partner="safetywing">Bekijk polis</AffiliateLink>
 */
import { affiliates } from '../data/affiliates.js'

export default function AffiliateLink({ partner, variant = 'inline', className = '', children }) {
  const a = affiliates[partner]
  if (!a) return <span className="text-ember">[onbekende partner: {partner}]</span>

  if (variant === 'button') {
    return (
      <span className="inline-flex flex-col items-start gap-1">
        <a
          href={a.url}
          target="_blank"
          rel="sponsored noopener noreferrer"
          className={`btn-primary ${className}`}
        >
          {children}
          <ExtIcon />
        </a>
        <PartnerTag />
      </span>
    )
  }

  return (
    <span className="inline-flex items-baseline gap-1.5">
      <a
        href={a.url}
        target="_blank"
        rel="sponsored noopener noreferrer"
        className={`text-ember underline underline-offset-2 hover:text-sunset ${className}`}
      >
        {children}
      </a>
      <PartnerTag />
    </span>
  )
}

function PartnerTag() {
  return (
    <span
      className="text-[10px] uppercase tracking-wider text-slate bg-cream border border-sand rounded px-1.5 py-0.5 leading-none"
      title="Aussiestart ontvangt commissie als je via deze link boekt. Voor jou is de prijs gelijk."
    >
      partner
    </span>
  )
}

function ExtIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M3 9L9 3M9 3H4M9 3V8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
