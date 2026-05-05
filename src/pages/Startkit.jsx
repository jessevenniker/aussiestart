import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import EmailCapture from '../components/EmailCapture.jsx'
import JsonLd from '../components/JsonLd.jsx'

const SITE_URL = 'https://australiestart.nl'
const LAUNCH_PRICE = '€19,95'
const REGULAR_PRICE = '€29'

// ─── VOEL JE BETAALLINK HIER IN ───────────────────────────────────────────────
// Zet hier je Gumroad, Tikkie, PayPal.me of Stripe link.
// Voorbeeld Gumroad: 'https://gumroad.com/l/jouwproduct'
// Voorbeeld PayPal:  'https://paypal.me/jessevenniker/19.95'
const KOOP_URL = 'mailto:jesse@australiestart.nl?subject=Aussiestart%20Startkit%20bestelling&body=Ik%20wil%20de%20Aussiestart%20Startkit%20bestellen%20voor%20%E2%82%AC19%2C95.%20Stuur%20me%20de%20betaalinstructies.'

// ─── Wat zit erin ─────────────────────────────────────────────────────────────
const INHOUD = [
  {
    type: 'Google Sheet',
    naam: 'Budgetplanner',
    omschrijving:
      'Vul je scenario in (zuinig, realistisch of farmwork-route) en de planner berekent je startbudget, maandelijkse kosten en hoeveel je overhoudt. Met wisselkoerskolom.',
    waarom: 'Zodat je niet met AUD 3.000 aankomt terwijl je AUD 5.000 nodig had.',
  },
  {
    type: 'Google Doc',
    naam: 'Australisch CV-template (3 varianten)',
    omschrijving:
      'Australisch format. Directe invulvelden. Drie versies: hospitality, farmwork, retail/admin. Met voorbeeldformuleringen die werken in Australische sollicitatiecultuur.',
    waarom: 'Jouw Nederlandse CV werkt niet. Dit doet het wel.',
  },
  {
    type: 'PDF checklist',
    naam: 'Eerste-week checklist',
    omschrijving:
      'Dag-tot-dag: eSIM → OV-pas → bank → TFN → Medicare → solliciteren. In volgorde. Met tijdsindicaties. Inclusief wat-kan-wachten-blok.',
    waarom: 'Omdat je op dag 3 in Sydney niet wilt nadenken: je wilt afvinken.',
  },
  {
    type: 'PDF checklist',
    naam: 'Vóór vertrek checklist',
    omschrijving:
      '6 maanden → 1 maand → 1 week → dag van vertrek. Visum, paspoort, verzekering, eSIM, belasting, werkvergunning, noodcontacten, alles geordend op timing.',
    waarom: 'Zodat je het vliegtuig in stapt zonder het gevoel dat je iets vergeten bent.',
  },
  {
    type: 'PDF gids',
    naam: '88-dagen bewijs-checklist',
    omschrijving:
      'Wat je per werkgever bewaart, welk formulier je nodig hebt, hoe je postcode controleert en wat je doet als loonstroken ontbreken. Inclusief DHA bronnenlinks.',
    waarom: 'Eén missende payslip kan je tweede visum kosten.',
  },
  {
    type: 'Google Sheet',
    naam: 'Sharehouse-vergelijker',
    omschrijving:
      'Leg woningopties naast elkaar op prijs, reistijd, borg, buurt en staat. Inclusief rode-vlag-kolom voor scam-signalen.',
    waarom: 'Zodat je geen AUD 1.000 borg betaalt voor een kamer die je nooit gezien hebt.',
  },
  {
    type: 'PDF gids',
    naam: 'Officiële bronnenlijst',
    omschrijving:
      'Directe links naar: ImmiAccount, ATO, Fair Work, Medicare, DHA specified work. Gesorteerd op moment van gebruik, niet één grote linkdump.',
    waarom: 'Zodat je niet googlet naar een verouderde forum-post terwijl je een formulier invult.',
  },
]

// ─── Vergelijking bureau vs startkit ─────────────────────────────────────────
const VERGELIJKING = [
  ['Visum aanvragen',       'Jullie doen het',      'Jij doet het: duurt 30 min via ImmiAccount'],
  ['Vlucht boeken',         'Jullie boeken het',    'Jij boekt het: zelfde Skyscanner, jij kiest de datum'],
  ['Eerste hostel',         'Jullie boeken het',    'Jij boekt het via Hostelworld of direct'],
  ['Budgetplanning',        'Mondelinge toelichting','Uitgewerkte planner die je zelf invult'],
  ['CV voor Australische markt', 'Geen',            '3 invulklare templates'],
  ['88-dagenregel uitleg',  'Algemene info',        'Bewijs-checklist per werkgever'],
  ['Scam-bescherming',      'Beperkt',              'Rode-vlag-checklists wonen + werk'],
  ['Totaalprijs',           '€549–€2.050',          `${LAUNCH_PRICE} launchprijs`],
]

// ─── FAQ ──────────────────────────────────────────────────────────────────────
const FAQ_ITEMS = [
  {
    v: 'Wanneer krijg ik toegang?',
    a: 'Direct na betaling ontvang je de downloadlink via e-mail. De bestanden zijn meteen beschikbaar.',
  },
  {
    v: 'Hoe ontvang ik de bestanden?',
    a: 'Via een beveiligde downloadpagina direct na betaling. Alle Google Sheets en Docs worden gedeeld als een kopie op jouw Google-account.',
  },
  {
    v: 'Kan ik de budgetplanner aanpassen?',
    a: 'Ja. Je ontvangt een eigen kopie van het Google Sheet: aanpassen, uitbreiden, alles mag.',
  },
  {
    v: 'Is dit voor mensen die nog moeten vertrekken of ook voor mensen die al in Australië zijn?',
    a: 'Primair voor vertrekkers. De vóór-vertrek checklist, budgetplanner en CV-templates zijn het meest relevant als je nog in Nederland zit. De 88-dagencheck is ook nuttig als je al onderweg bent.',
  },
  {
    v: 'Wat als ik al een visum heb?',
    a: 'Dan sla je de visumsectie over. De budgetplanner, CV-templates en 88-dagencheck zijn ook relevant als je al een visum hebt.',
  },
]

// ─── Schema ───────────────────────────────────────────────────────────────────
const startkitSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  '@id': `${SITE_URL}/startkit#product`,
  name: 'Aussiestart Startkit',
  description:
    'Budgetplanner, drie Australische CV-templates, eerste-week checklist, vóór-vertrek checklist en 88-dagen bewijs-checklist voor Nederlanders die met een Working Holiday naar Australië gaan.',
  url: `${SITE_URL}/startkit`,
  brand: { '@id': `${SITE_URL}/#organization` },
  inLanguage: 'nl-NL',
  offers: {
    '@type': 'Offer',
    price: '19.95',
    priceCurrency: 'EUR',
    availability: 'https://schema.org/InStock',
    url: `${SITE_URL}/startkit`,
  },
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function Startkit() {
  return (
    <>
      <Helmet>
        <title>De Aussiestart Startkit: Working Holiday Australië zelf regelen voor {LAUNCH_PRICE}</title>
        <meta
          name="description"
          content={`Budgetplanner, drie Australische CV-templates, eerste-week checklist en meer. Alles wat je nodig hebt om je Working Holiday zelf te regelen, voor ${LAUNCH_PRICE} in plaats van €549–€2.050 bij een bureau.`}
        />
        <meta property="og:title" content={`De Aussiestart Startkit: ${LAUNCH_PRICE}`} />
        <meta property="og:description" content="Budgetplanner, Australische CV-templates, checklists en bronnen. Zelf regelen, voor een fractie van een bureaupakket." />
        <meta property="og:type" content="product" />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>
      <JsonLd data={startkitSchema} />

      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <div className="border-b border-sand bg-bone">
        <div className="container-wide py-14 md:py-20">

          {/* Launchbadge */}
          <div className="inline-flex items-center gap-2 bg-ember/10 text-ember text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-ember inline-block" />
            Direct beschikbaar: launchprijs {LAUNCH_PRICE}
          </div>

          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-forest leading-tight max-w-3xl">
            Alles wat je nodig hebt om zelf te gaan.
          </h1>
          <p className="mt-5 text-lg text-ink/70 max-w-2xl leading-relaxed">
            Bureaus vragen €549–€2.050 voor visum aanvragen, een vlucht boeken en een hostel reserveren.
            Dat kun je allemaal zelf. Wat je wél nodig hebt: een werkende budgetplanner, een Australisch CV,
            en de juiste checklists. Dat is de Startkit.
          </p>

          {/* Prijs + CTA */}
          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div>
              <span className="font-serif text-4xl text-forest font-semibold">{LAUNCH_PRICE}</span>
              <span className="text-slate text-sm ml-2 line-through">{REGULAR_PRICE} na lancering</span>
            </div>
            <div className="text-slate text-sm">·</div>
            <div className="text-sm text-ink/60">
              Budgetplanner · 3 CV-templates · 4 checklists · Bronnenlijst
            </div>
          </div>

          {/* Koopknop */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 items-start">
            <a
              href={KOOP_URL}
              className="inline-flex items-center gap-2 bg-forest text-bone font-semibold px-7 py-3.5 rounded-full hover:bg-forest/85 transition-colors no-underline text-base"
            >
              Koop de Startkit voor {LAUNCH_PRICE} →
            </a>
            <div className="text-sm text-slate self-center">
              Directe toegang · Eenmalig · Geen abonnement
            </div>
          </div>
        </div>
      </div>

      {/* ── Inhoud ──────────────────────────────────────────────────────────── */}
      <section className="container-wide py-16">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-ember mb-3">Wat zit erin</div>
          <h2 className="font-serif text-3xl text-forest mb-2">Zeven onderdelen. Elk met een reden.</h2>
          <p className="text-ink/60 mb-10">
            Geen losse informatiegids. Elke tool is gebouwd om een concrete fout te voorkomen of een
            concrete taak makkelijker te maken.
          </p>
        </div>

        <div className="space-y-0 border-t border-sand">
          {INHOUD.map((item, i) => (
            <div key={item.naam} className="border-b border-sand py-7 flex flex-col md:flex-row gap-4 md:gap-10">
              {/* Nummer + type */}
              <div className="shrink-0 md:w-44">
                <div className="text-xs font-semibold uppercase tracking-widest text-slate mb-1">
                  {String(i + 1).padStart(2, '0')}: {item.type}
                </div>
              </div>
              {/* Inhoud */}
              <div className="flex-1">
                <div className="font-serif text-xl text-forest mb-2">{item.naam}</div>
                <p className="text-ink/75 text-sm leading-relaxed mb-3">{item.omschrijving}</p>
                <div className="flex items-start gap-2 text-sm text-forest/80">
                  <span className="shrink-0 font-semibold">→</span>
                  <span>{item.waarom}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Bureau vs Startkit ──────────────────────────────────────────────── */}
      <section className="bg-forest/5 border-t border-b border-sand py-16">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-ember mb-3">Vergelijking</div>
            <h2 className="font-serif text-3xl text-forest mb-2">Bureau of zelf?</h2>
            <p className="text-ink/60 mb-10">
              Bureaus doen niks wat jij niet zelf kunt. Behalve rekening sturen.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b-2 border-forest/20">
                    <th className="text-left py-3 pr-6 font-medium text-slate w-48">Onderdeel</th>
                    <th className="text-left py-3 pr-6 font-medium text-slate">Bureau</th>
                    <th className="text-left py-3 font-medium text-forest">Startkit</th>
                  </tr>
                </thead>
                <tbody>
                  {VERGELIJKING.map(([item, bureau, startkit], i) => (
                    <tr key={item} className={`border-b border-sand ${i % 2 === 0 ? '' : 'bg-bone/50'}`}>
                      <td className="py-3 pr-6 text-ink font-medium align-top">{item}</td>
                      <td className="py-3 pr-6 text-slate align-top">{bureau}</td>
                      <td className="py-3 text-ink align-top">{startkit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-6 text-sm text-slate leading-relaxed">
              Het visum, de vlucht en de verzekering betaal je sowieso, bureau of niet. Het enige wat een
              bureau extra doet, is klikken en boeken in jouw naam.{' '}
              <Link to="/visum" className="text-ember underline underline-offset-2">
                Lees hoe je het visum zelf aanvraagt →
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* ── Voor wie ────────────────────────────────────────────────────────── */}
      <section className="container-wide py-16">
        <div className="max-w-3xl">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-ember mb-3">Voor wie</div>
          <h2 className="font-serif text-3xl text-forest mb-8">Dit is de Startkit voor jou als…</h2>

          <div className="space-y-4">
            {[
              ['Je wilt zelf gaan, maar wil wel een solide voorbereiding', 'De Startkit geeft je de structuur die bureaus zeggen te bieden, zonder de prijs.'],
              ['Je twijfelt of je alles wel goed regelt', 'De checklists zijn gebouwd op wat mensen structureel vergeten. Niet als geruststelling, maar als daadwerkelijk plan.'],
              ['Je wil werken, ook misschien farmwork', 'De 88-dagencheck en de bewijs-checklist voorkomen dat je weken verliest aan ongeldig werk.'],
              ['Je hebt een realistisch budget nodig', 'De planner rekent je scenario door op basis van wat het echt kost, niet de AUD 5.000 die bureaus noemen.'],
            ].map(([titel, tekst]) => (
              <div key={titel} className="flex gap-4 py-4 border-b border-sand last:border-b-0">
                <span className="shrink-0 text-forest font-bold mt-0.5">✓</span>
                <div>
                  <div className="font-medium text-ink mb-1">{titel}</div>
                  <div className="text-sm text-ink/65 leading-relaxed">{tekst}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Prijs + CTA ─────────────────────────────────────────────────────── */}
      <section className="bg-forest text-bone py-16">
        <div className="container-wide">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-bone/50 mb-4">De Aussiestart Startkit</div>
            <h2 className="font-serif text-4xl mb-3 leading-tight">
              Zeven tools.<br />Eén doel: aankomen met een plan.
            </h2>
            <p className="text-bone/65 leading-relaxed mb-8 max-w-prose">
              Budgetplanner · CV-templates (3×) · Eerste-week checklist · Vóór-vertrek checklist ·
              88-dagencheck · Sharehouse-vergelijker · Bronnenlijst
            </p>

            <div className="flex items-baseline gap-3 mb-8">
              <span className="font-serif text-5xl font-semibold">{LAUNCH_PRICE}</span>
              <div className="text-bone/50 text-sm">
                <div className="line-through">{REGULAR_PRICE} na lancering</div>
                <div>Eenmalig, geen abonnement</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 items-start">
              <a
                href={KOOP_URL}
                className="inline-flex items-center gap-2 bg-bone text-forest font-semibold px-7 py-3.5 rounded-full hover:bg-cream transition-colors no-underline text-base"
              >
                Koop de Startkit voor {LAUNCH_PRICE} →
              </a>
              <div className="text-bone/50 text-sm self-center">
                Directe toegang · Eenmalig · Geen abonnement
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────────────────── */}
      <section className="container-wide py-16">
        <div className="max-w-2xl">
          <h2 className="font-serif text-2xl text-forest mb-8">Vragen</h2>
          <div className="space-y-0 divide-y divide-sand">
            {FAQ_ITEMS.map(({ v, a }) => (
              <div key={v} className="py-5">
                <div className="font-medium text-ink mb-2">{v}</div>
                <div className="text-sm text-ink/70 leading-relaxed">{a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer-link ─────────────────────────────────────────────────────── */}
      <section className="container-wide pb-12 border-t border-sand pt-8">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between text-sm text-slate">
          <span>
            Nog geen zin om te wachten?{' '}
            <Link to="/begin-hier" className="text-ember underline underline-offset-2">
              Start met de gratis gids →
            </Link>
          </span>
          <Link to="/affiliate-disclosure" className="hover:text-ink transition-colors">
            Affiliate disclosure
          </Link>
        </div>
      </section>
    </>
  )
}
