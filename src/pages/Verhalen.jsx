import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import EmailCapture from '../components/EmailCapture.jsx'

const GOOGLE_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLScs0u_iBZziG-1WuJoGGzoyKvXR7yCV3gLMTYNAqpFG35Rsjw/viewform'

const themas = [
  {
    label: 'Eerste week',
    omschrijving:
      'Aankomst, hostel, SIM, bankrekening, TFN. Hoe die eerste week er in de praktijk uitzag, inclusief wat misging en wat verrassend makkelijk was.',
  },
  {
    label: 'Budget & werk',
    omschrijving:
      'Met hoeveel geld vertrokken, wat het echt kostte, hoe werk gevonden, wat loon was. Concrete cijfers, geen marketingverhaal.',
  },
  {
    label: 'Wonen & scams',
    omschrijving:
      'Van hostel naar sharehouse of camper. Wat te controleren, wat fout ging, hoe opgelicht te worden voorkomen, of niet.',
  },
  {
    label: 'Farmwork',
    omschrijving:
      '88 dagen specified work voor het tweede visum. Welke werkgever, welk gebied, hoeveel betaald, wat niet klopte.',
  },
  {
    label: 'Zelf regelen vs bureau',
    omschrijving:
      'Mensen die het zelf deden én mensen die via een bureau gingen. Wat ze er nu van vinden.',
  },
]

export default function Verhalen() {
  return (
    <>
      <Helmet>
        <title>Australië-verhalen van Working Holiday-makers | Aussiestart</title>
        <meta
          name="description"
          content="Eerlijke ervaringen van Nederlanders die op Working Holiday naar Australië gingen. Wat ging goed, wat viel tegen, en wat zouden ze anders doen?"
        />
      </Helmet>

      {/* ── Magazineheader ─────────────────────────────────────────────── */}
      <header className="container-wide pt-14 pb-8 border-b border-sand">
        <div className="text-xs font-semibold uppercase tracking-[0.18em] text-ember mb-4">
          Verhalen
        </div>
        <div className="grid lg:grid-cols-[minmax(0,1fr)_340px] gap-8 items-end">
          <div>
            <h1 className="font-serif text-4xl sm:text-5xl text-forest leading-tight mb-4">
              Mensen die er waren,<br className="hidden sm:block" /> en wat ze nu weten
            </h1>
            <p className="text-lg text-ink/75 leading-relaxed max-w-prose">
              Geen glossy succesverhalen. Juist de eerlijke dingen: wat duurder was dan verwacht,
              hoe werk gevonden werd, wat misging in week één, en wat anders zou worden gedaan.
              Per verhaal: een concreet profiel, echte cijfers en drie inzichten die anderen helpen.
            </p>
          </div>
          <div className="text-sm text-slate space-y-1 border-l border-sand pl-6">
            <p className="font-medium text-ink">Jij was in Australië?</p>
            <p className="text-ink/70 leading-relaxed">
              Deel je ervaring. Het hoeft niet perfect. Juist het onverwachte,
              het lastige en het mooie helpt anderen die nu plannen maken.
            </p>
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-3 bg-ember text-bone px-4 py-2.5 rounded-full text-sm font-medium hover:bg-sunset transition-colors no-underline"
            >
              Deel jouw verhaal
              <ExtIcon />
            </a>
          </div>
        </div>
      </header>

      {/* ── Wat je hier kunt verwachten ────────────────────────────────── */}
      <section className="container-wide py-12">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_340px] gap-10">

          {/* Thema's */}
          <div>
            <h2 className="font-serif text-2xl text-forest mb-6">Welke verhalen komen hier?</h2>
            <div className="space-y-0 divide-y divide-sand">
              {themas.map((t) => (
                <div key={t.label} className="py-4 flex gap-4">
                  <span className="shrink-0 text-xs font-semibold uppercase tracking-wider text-ember pt-1 w-20">
                    {t.label}
                  </span>
                  <p className="text-ink/80 text-sm leading-relaxed">{t.omschrijving}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t border-sand pt-6">
              <p className="text-sm text-ink/70 mb-4">
                De eerste verhalen worden binnenkort gepubliceerd. Ben jij er al geweest?
              </p>
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-forest/30 text-forest px-5 py-3 rounded-full text-sm font-medium hover:bg-forest hover:text-bone transition-colors no-underline"
              >
                Open het vragenformulier
                <ExtIcon />
              </a>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* Hoe het werkt */}
            <div className="border border-sand rounded-xl p-5">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate mb-3">
                Zo werkt het
              </div>
              <ol className="space-y-3 text-sm text-ink/80">
                {[
                  'Je vult het formulier in, ca. 10 minuten.',
                  'Wij lezen je antwoorden en nemen contact op.',
                  'We schrijven het om naar een leesbaar verhaal.',
                  'Jij leest mee vóór publicatie als je dat wilt.',
                  'Je naam of pseudoniem: jouw keuze.',
                ].map((stap, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="shrink-0 w-5 h-5 rounded-full bg-sand text-slate text-xs flex items-center justify-center font-medium">
                      {i + 1}
                    </span>
                    {stap}
                  </li>
                ))}
              </ol>
            </div>

            {/* Snap further */}
            <div className="bg-forest/5 border border-forest/10 rounded-xl p-5">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate mb-3">
                Alvast praktisch
              </div>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link to="/eerste-week" className="text-ember underline underline-offset-2 hover:text-sunset">
                    Eerste week: wat regel je wanneer →
                  </Link>
                </li>
                <li>
                  <Link to="/kosten" className="text-ember underline underline-offset-2 hover:text-sunset">
                    Kosten: wat is realistisch? →
                  </Link>
                </li>
                <li>
                  <Link to="/werk" className="text-ember underline underline-offset-2 hover:text-sunset">
                    Werk zoeken in Australië →
                  </Link>
                </li>
                <li>
                  <Link to="/wonen" className="text-ember underline underline-offset-2 hover:text-sunset">
                    Wonen: hostel, sharehouse of camper? →
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── E-mailcapture ───────────────────────────────────────────────── */}
      <section className="container-wide pb-16">
        <EmailCapture
          headline="Wil je als eerste nieuwe verhalen lezen?"
          subline="Schrijf je in en ontvang de Australië Start Checklist, plus een bericht zodra de eerste verhalen online staan."
        />
      </section>
    </>
  )
}

function ExtIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M3 9L9 3M9 3H4M9 3V8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
