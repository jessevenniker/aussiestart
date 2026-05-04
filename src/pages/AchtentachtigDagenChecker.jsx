import { useState, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import EmailCapture from '../components/EmailCapture.jsx'
import JsonLd from '../components/JsonLd.jsx'
import {
  check88Eligibility,
  WERK_CATEGORIEEN,
  DHA_SPECIFIED_WORK_URL,
} from '../data/checker88.js'

const SITE_URL = 'https://australiestart.nl'

const checkerSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebApplication',
      '@id': `${SITE_URL}/88-dagen-checker#app`,
      name: '88-dagen checker: Working Holiday visum Australië',
      description:
        'Gratis interactieve tool om te controleren of jouw Australische postcode en werkcategorie waarschijnlijk in aanmerking komen voor de 88-dagenregel van het Working Holiday visum subclass 417.',
      url: `${SITE_URL}/88-dagen-checker`,
      applicationCategory: 'UtilityApplication',
      inLanguage: 'nl-NL',
      isAccessibleForFree: true,
      browserRequirements: 'Requires JavaScript',
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/88-dagen-checker#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Hoe gebruik ik de 88-dagen checker?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Vul je Australische postcode in, selecteer je werkcategorie en geef aan of je werkt aan een eerste, tweede of derde visum. De checker geeft een indicatie of jouw situatie waarschijnlijk in aanmerking komt voor de 88-dagenregel.',
          },
        },
        {
          '@type': 'Question',
          name: 'Is de 88-dagen checker officieel?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nee. De checker is een indicatietool op basis van de officiële postcodegebieden en categorieën van het Australian Department of Home Affairs. De uitslag is geen juridisch advies, controleer altijd de officiële DHA-website voor definitieve informatie.',
          },
        },
        {
          '@type': 'Question',
          name: 'Welke postcodes tellen niet mee voor de 88-dagenregel?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'De grote steden tellen niet mee: Greater Sydney (2000–2234, 2555–2574, 2745–2786), Greater Melbourne (3000–3207, 3800–3811), Greater Brisbane (4000–4210), Greater Perth (6000–6214, 6800–6999), Gold Coast (4211–4270) en het Australian Capital Territory (2600–2618, 2900–2906).',
          },
        },
        {
          '@type': 'Question',
          name: 'Telt horeca in regionaal Australië mee voor de 88-dagenregel?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nee, in de meeste gevallen niet. Hospitality en toerisme zijn over het algemeen uitgesloten van de specified work-categorieën voor de 88-dagenregel, ook in regionale gebieden. Er zijn specifieke uitzonderingen voor afgelegen gebieden (remote areas), controleer de DHA-website voor de actuele lijst.',
          },
        },
      ],
    },
  ],
}

// ─── Stijl per niveau ─────────────────────────────────────────────────────────
const LEVEL_STYLE = {
  eligible:     { border: 'border-forest', badge: 'bg-forest text-bone',     icon: '✓' },
  check:        { border: 'border-ochre',  badge: 'bg-ochre text-forest',    icon: '!' },
  not_eligible: { border: 'border-ember',  badge: 'bg-ember text-bone',      icon: '✗' },
  unknown:      { border: 'border-sand',   badge: 'bg-sand text-ink',        icon: '?' },
}

const LEVEL_LABEL = {
  eligible:     'Waarschijnlijk geschikt',
  check:        'Extra controle nodig',
  not_eligible: 'Waarschijnlijk niet geschikt',
  unknown:      'Onvoldoende informatie',
}

// ─── Bewijs checklist ─────────────────────────────────────────────────────────
const BEWIJS = [
  { item: 'Loonstroken (payslips)', reden: 'Toont betaald werk per dag: primair bewijs bij visumaanvraag' },
  { item: 'Werkgeversverklaring', reden: 'Ondertekend document met werksoort, locatie (postcode), aantal dagen' },
  { item: 'Bankafschriften', reden: 'Staving dat loonbetalingen kloppen met payslips' },
  { item: 'Arbeidscontract', reden: 'Vermeldt functie, werkgever en locatie' },
  { item: 'ABN / ACN werkgever', reden: 'Maakt werkgever identificeerbaar, noteer dit vóór je vertrekt' },
  { item: 'Werklocatie + postcode', reden: 'Bewijs dat werk in het aangewezen postcodegebied plaatsvond' },
  { item: 'Contactgegevens werkgever', reden: 'Naam, telefoonnummer, adres: DHA kan hierom vragen' },
]

// ─── Veelgemaakte fouten ──────────────────────────────────────────────────────
const FOUTEN = [
  ['Alleen vertrouwen op wat werkgever zegt', 'Werkgevers vergissen zich, of liegen. Controleer zelf de postcode en werkcategorie.'],
  ['Geen payslips bewaren', 'Zonder payslips kan je visumaanvraag worden afgewezen, ook als je écht 88 dagen hebt gewerkt.'],
  ['Aannemen dat alle farmwork telt', 'De locatie (postcode) is even bepalend als het type werk. Farmwork in Sydney telt niet.'],
  ['Aannemen dat horeca altijd telt', 'Hospitality en toerisme gelden alleen in specifieke aangewezen remote gebieden.'],
  ['Te laat beginnen met checken', 'Als je achteraf ontdekt dat werk niet meetelt, kun je geen dagen terugkrijgen.'],
  ['Cash-in-hand zonder bewijs', 'Zonder payslip is een dag vrijwel onbewijsbaar, ook al was het betaald.'],
]

// ─── Component ────────────────────────────────────────────────────────────────
export default function AchtentachtigDagenChecker() {
  const [postcode, setPostcode]   = useState('')
  const [categorie, setCategorie] = useState('')
  const [visumdoel, setVisumdoel] = useState('')
  const [result, setResult]       = useState(null)
  const [touched, setTouched]     = useState(false)
  const resultRef = useRef(null)

  function handleSubmit(e) {
    e.preventDefault()
    setTouched(true)
    const r = check88Eligibility(postcode, categorie, visumdoel)
    setResult(r)
    setTimeout(() => resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80)
  }

  const style = result ? (LEVEL_STYLE[result.level] || LEVEL_STYLE.unknown) : null

  return (
    <>
      <Helmet>
        <title>88-dagen checker: telt jouw werk mee voor het Working Holiday visum? | Aussiestart</title>
        <meta
          name="description"
          content="Controleer of jouw Australische postcode en werkcategorie waarschijnlijk in aanmerking komen voor de 88-dagenregel. Gratis indicatietool voor het Working Holiday visum subclass 417."
        />
        <meta property="og:title" content="88-dagen checker: Working Holiday visum Australië" />
        <meta property="og:description" content="Gratis tool: vul je postcode en werkcategorie in en zie direct of jouw situatie waarschijnlijk meetelt voor de 88-dagenregel." />
        <meta property="og:type" content="website" />
      </Helmet>
      <JsonLd data={checkerSchema} />

      {/* ── Page header ───────────────────────────────────────────────────── */}
      <div className="border-b border-sand bg-bone">
        <div className="container-wide py-10">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-ember mb-3">Tool</div>
          <h1 className="font-serif text-4xl sm:text-5xl text-forest leading-tight max-w-2xl">
            88-Dagen Checker
          </h1>
          <p className="mt-4 text-ink/70 max-w-prose leading-relaxed">
            Vul je postcode en werkcategorie in. De checker geeft een praktische indicatie of
            jouw situatie waarschijnlijk binnen de specified work-regels valt.
          </p>
          {/* Permanente disclaimer */}
          <div className="mt-5 border-l-4 border-ochre pl-4 text-sm text-ink/75 max-w-prose">
            <strong className="text-ink">Indicatie, geen garantie.</strong>{' '}
            Dit is een praktische hulpcheck, geen officieel visumadvies. Controleer altijd de
            actuele{' '}
            <a href={DHA_SPECIFIED_WORK_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-ember">
              Home Affairs-regels
            </a>{' '}
            en bewaar al je bewijs.
          </div>
        </div>
      </div>

      {/* ── Checker ───────────────────────────────────────────────────────── */}
      <div className="container-wide py-12 grid lg:grid-cols-[minmax(0,1fr)_320px] gap-12 items-start">

        {/* Linker kolom: form + resultaat */}
        <div>
          <form onSubmit={handleSubmit} noValidate>

            {/* Stap 1: Visumdoel */}
            <fieldset className="mb-8">
              <legend className="text-[11px] font-semibold uppercase tracking-widest text-slate mb-3">
                Stap 1: Waarvoor wil je werk laten meetellen?
              </legend>
              <div className="divide-y divide-sand border-t border-b border-sand">
                {[
                  ['2', 'Tweede Working Holiday-visum (88 dagen)'],
                  ['3', 'Derde Working Holiday-visum (179 dagen of 88 in remote area)'],
                  ['unknown', 'Ik weet het nog niet'],
                ].map(([val, label]) => (
                  <label key={val} className="flex items-center gap-3 py-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="visumdoel"
                      value={val}
                      checked={visumdoel === val}
                      onChange={() => setVisumdoel(val)}
                      className="accent-forest w-4 h-4 shrink-0"
                    />
                    <span className="text-sm text-ink group-hover:text-forest transition-colors">
                      {label}
                    </span>
                  </label>
                ))}
              </div>
            </fieldset>

            {/* Stap 2: Postcode */}
            <div className="mb-8">
              <label htmlFor="postcode" className="block text-[11px] font-semibold uppercase tracking-widest text-slate mb-3">
                Stap 2: Postcode van de werklocatie
              </label>
              <div className="flex gap-3 items-center">
                <input
                  id="postcode"
                  type="text"
                  inputMode="numeric"
                  maxLength={4}
                  value={postcode}
                  onChange={e => setPostcode(e.target.value.replace(/\D/g, ''))}
                  placeholder="bijv. 4870"
                  className="border-b-2 border-sand focus:border-forest outline-none bg-transparent text-2xl font-serif text-forest w-28 py-1 transition-colors"
                  aria-describedby="postcode-hint"
                />
                <span id="postcode-hint" className="text-sm text-slate">Australische 4-cijferige postcode</span>
              </div>
              {touched && postcode.length > 0 && postcode.length < 4 && (
                <p className="mt-1 text-xs text-ember">Vul 4 cijfers in</p>
              )}
            </div>

            {/* Stap 3: Werkcategorie */}
            <div className="mb-8">
              <label htmlFor="categorie" className="block text-[11px] font-semibold uppercase tracking-widest text-slate mb-3">
                Stap 3: Type werk
              </label>
              <div className="divide-y divide-sand border-t border-b border-sand">
                {WERK_CATEGORIEEN.map(cat => (
                  <label key={cat.value} className="flex items-start gap-3 py-3 cursor-pointer group">
                    <input
                      type="radio"
                      name="categorie"
                      value={cat.value}
                      checked={categorie === cat.value}
                      onChange={() => setCategorie(cat.value)}
                      className="accent-forest w-4 h-4 shrink-0 mt-0.5"
                    />
                    <span className="flex-1">
                      <span className="block text-sm text-ink group-hover:text-forest transition-colors">
                        {cat.label}
                      </span>
                      {cat.official && (
                        <span className="block text-xs text-slate mt-0.5">
                          Officieel: {cat.official}
                          {cat.note ? `, ${cat.note}` : ''}
                        </span>
                      )}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="bg-forest text-bone text-sm font-medium px-6 py-3 rounded-full hover:bg-forest/85 transition-colors"
            >
              Controleer mijn situatie →
            </button>
          </form>

          {/* ── Resultaat ─────────────────────────────────────────────── */}
          {result && result.headline && (
            <div ref={resultRef} className="mt-12 scroll-mt-24">
              <div className={`border-l-4 ${style.border} pl-5`}>
                {/* Badge + headline */}
                <div className="flex items-center gap-3 mb-3">
                  <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full text-sm font-bold ${style.badge}`}>
                    {style.icon}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-slate">
                    Indicatie
                  </span>
                </div>
                <h2 className="font-serif text-2xl text-forest mb-2">{result.headline}</h2>
                {result.body && (
                  <p className="text-ink/80 text-sm leading-relaxed mb-5 max-w-prose">{result.body}</p>
                )}

                {/* Checkpoints tabel */}
                {result.checkpoints?.length > 0 && (
                  <div className="not-prose border-t border-b border-sand divide-y divide-sand mb-5">
                    {result.checkpoints.map((cp, i) => (
                      <div key={i} className="flex items-start gap-4 py-3">
                        <span className="shrink-0 w-5 mt-0.5 text-base leading-none">
                          {cp.ok === true ? (
                            <span className="text-forest">✓</span>
                          ) : cp.ok === false ? (
                            <span className="text-ember">✗</span>
                          ) : (
                            <span className="text-ochre">!</span>
                          )}
                        </span>
                        <span className="w-44 shrink-0 text-sm text-slate">{cp.label}</span>
                        <span className="text-sm text-ink font-medium flex-1">{cp.value}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Extra opmerking */}
                {result.extra && (
                  <div className="border-l-4 border-ochre/60 pl-3 text-sm text-ink/75 leading-relaxed mb-5">
                    {result.extra}
                  </div>
                )}

                {/* Altijd zichtbare disclaimer in resultaat */}
                <div className="border-t border-sand pt-4 text-xs text-slate leading-relaxed">
                  <strong className="text-ink/60">Indicatie, geen garantie</strong>: controleer altijd{' '}
                  <a href={DHA_SPECIFIED_WORK_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-ember">
                    de actuele Home Affairs-regels
                  </a>{' '}
                  vóór je begint. Bewaar payslips en werkgeversverklaring voor élke gewerkte dag.
                </div>
              </div>

              {/* CTA na resultaat */}
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/88-dagen"
                  className="text-sm font-medium text-forest border border-forest/30 px-4 py-2 rounded-full hover:bg-forest hover:text-bone transition-colors no-underline"
                >
                  Lees de volledige 88-dagenuitleg →
                </Link>
                <a
                  href={DHA_SPECIFIED_WORK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-ink/60 border border-sand px-4 py-2 rounded-full hover:border-slate transition-colors no-underline"
                >
                  Officiële DHA-pagina ↗
                </a>
              </div>
            </div>
          )}
        </div>

        {/* Rechter kolom: bewijs checklist + fouten */}
        <div className="space-y-8">

          {/* Bewijs bewaren */}
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-widest text-slate mb-3">
              Bewijs bewaren
            </div>
            <p className="text-sm text-ink/70 mb-4 leading-relaxed">
              Zorg voor deze documenten voor <em>elke</em> werkgever waar je specified work doet.
            </p>
            <div className="divide-y divide-sand border-t border-b border-sand">
              {BEWIJS.map(({ item, reden }) => (
                <div key={item} className="py-3">
                  <div className="text-sm font-medium text-forest mb-0.5">{item}</div>
                  <div className="text-xs text-slate leading-relaxed">{reden}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Veelgemaakte fouten */}
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-widest text-slate mb-3">
              Veelgemaakte fouten
            </div>
            <div className="divide-y divide-sand border-t border-b border-sand">
              {FOUTEN.map(([fout, reden]) => (
                <div key={fout} className="py-3">
                  <div className="flex gap-2 items-start">
                    <span className="text-ember font-bold shrink-0 text-sm mt-0.5">✗</span>
                    <div>
                      <div className="text-sm font-medium text-ink mb-0.5">{fout}</div>
                      <div className="text-xs text-slate leading-relaxed">{reden}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bronvermelding */}
          <div className="border-t border-sand pt-4 text-xs text-slate leading-relaxed">
            <div className="font-medium text-ink/60 mb-1">Bronnen</div>
            <a href={DHA_SPECIFIED_WORK_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-ember block">
              Department of Home Affairs: Specified Work (417)
            </a>
            <p className="mt-1 text-slate/70">Postcodelogica gebaseerd op DHA-documentatie, april 2026. Checker is vereenvoudigd, altijd de officiële lijst raadplegen.</p>
          </div>
        </div>
      </div>

      {/* ── Uitleg specified work ─────────────────────────────────────────── */}
      <section className="border-t border-sand bg-cream">
        <div className="container-wide py-12 max-w-prose">
          <div className="text-[11px] font-semibold uppercase tracking-widest text-slate mb-3">Wat is specified work?</div>
          <h2 className="font-serif text-2xl text-forest mb-4">Waarom niet al het regionale werk meetelt</h2>
          <p className="text-ink/80 leading-relaxed text-sm mb-3">
            Specified work is werk in bepaalde erkende sectoren én in aangewezen postcodegebieden.
            Alleen de combinatie van het juiste type werk <em>en</em> de juiste locatie telt.
            Een horecajob in een kleine regionale stad telt dus niet automatisch mee,
            zelfs als die stad ver buiten Sydney ligt.
          </p>
          <p className="text-ink/80 leading-relaxed text-sm mb-3">
            De meest voorkomende categorie voor WHV-houders is <strong>plant and animal cultivation</strong>:
            fruit plukken, groenten oogsten, melkveehouderij, landbouw. Deze categorie telt in vrijwel
            alle erkende regionale postcodegebieden.
          </p>
          <p className="text-ink/80 leading-relaxed text-sm">
            Voor het <strong>derde visum</strong> zijn de eisen zwaarder: 179 gewerkte specified-workdagen
            (of 88 in een aangewezen remote area, een strenger criterium met eigen postcodes).
          </p>
          <div className="mt-5">
            <Link
              to="/88-dagen"
              className="text-sm font-medium text-forest border border-forest/30 px-4 py-2 rounded-full hover:bg-forest hover:text-bone transition-colors no-underline inline-flex"
            >
              Lees de volledige gids over de 88-dagenregel →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Email capture ─────────────────────────────────────────────────── */}
      <section className="container-wide pb-16">
        <EmailCapture
          headline="88-dagencheck in je inbox"
          subline="Gratis bewijschecklist: welke documenten je nodig hebt, hoe je dagen bijhoudt en wat je vóór je begint checkt."
        />
      </section>
    </>
  )
}
