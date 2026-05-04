/**
 * EmailCapture — herbruikbaar e-mailaanmeld-blok.
 *
 * Gebruik:
 *   <EmailCapture />                        // standaard tekst
 *   <EmailCapture variant="compact" />      // smal, voor sidebar
 *   <EmailCapture headline="..." />         // eigen koptekst
 *
 * Mailchimp koppelen:
 *   1. Ga naar Mailchimp > Audience > Signup forms > Embedded forms
 *   2. Kopieer de 'action'-URL uit de form-code (eindigt op /post?u=...&id=...)
 *   3. Zet die URL als VITE_MAILCHIMP_URL in je .env bestand
 *   4. Of geef hem direct mee als prop: <EmailCapture action="https://..." />
 */

const DEFAULT_ACTION = import.meta.env.VITE_MAILCHIMP_URL || ''

export default function EmailCapture({
  headline = 'Gratis: de Australië Start Checklist',
  subline  = 'Alles wat je moet regelen, in de juiste volgorde. Zonder bureau, zonder gedoe.',
  cta      = 'Stuur mij de checklist',
  action   = DEFAULT_ACTION,
  variant  = 'default', // 'default' | 'compact'
}) {
  const isReady = Boolean(action)

  if (variant === 'compact') {
    return (
      <div className="bg-forest/5 border border-forest/15 rounded-xl p-5">
        <div className="text-xs font-semibold uppercase tracking-wider text-ember mb-1">Gratis checklist</div>
        <p className="text-sm font-medium text-ink mb-3">{headline}</p>
        <CaptureForm action={action} cta={cta} isReady={isReady} compact />
      </div>
    )
  }

  return (
    <section className="not-prose my-10 bg-forest text-bone rounded-2xl p-6 sm:p-8">
      <div className="eyebrow text-ochre mb-2">Gratis</div>
      <h3 className="font-serif text-2xl sm:text-3xl mb-2">{headline}</h3>
      <p className="text-bone/75 text-sm leading-relaxed mb-6 max-w-prose">{subline}</p>
      <CaptureForm action={action} cta={cta} isReady={isReady} />
      <p className="text-xs text-bone/40 mt-4">Geen spam. Afmelden kan altijd via de e-mail zelf.</p>
    </section>
  )
}

function CaptureForm({ action, cta, isReady, compact = false }) {
  if (!isReady) {
    // Nog geen Mailchimp URL — toon een placeholder knop die naar de pagina linkt
    return (
      <div className={compact ? '' : 'flex flex-wrap gap-3'}>
        <a
          href="mailto:hello@australiestart.nl?subject=Australië%20Start%20Checklist"
          className={compact
            ? 'block w-full text-center btn-primary text-sm'
            : 'btn-primary text-sm'
          }
        >
          {cta}
        </a>
      </div>
    )
  }

  return (
    <form
      action={action}
      method="post"
      target="_blank"
      className={compact ? 'flex gap-2' : 'flex flex-wrap gap-3'}
    >
      {/* Honeypot against bots (Mailchimp standaard) */}
      <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
        <input type="text" name="b_" tabIndex={-1} defaultValue="" />
      </div>
      <input
        type="email"
        name="EMAIL"
        placeholder="jouw@email.nl"
        required
        className="flex-1 min-w-0 px-4 py-2.5 rounded-full text-ink text-sm placeholder:text-slate focus:outline-none focus:ring-2 focus:ring-ochre"
      />
      <button type="submit" className="btn-primary text-sm shrink-0">
        {cta}
      </button>
    </form>
  )
}
