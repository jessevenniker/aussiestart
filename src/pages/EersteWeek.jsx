import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import { ArticleLayout, SourceStrip, MarginNote, LastChecked } from '../components/Article.jsx'
import AffiliateLink from '../components/AffiliateLink.jsx'
import EmailCapture from '../components/EmailCapture.jsx'
import { SOT, gechecktOp } from '../data/sot.js'

/* Dag-tot-dag planning ─────────────────────────────────────────────────── */
const dagplan = [
  {
    dag: 'Voor vertrek',
    kleur: 'text-slate',
    taken: [
      {
        titel: 'eSIM activeren',
        urgentie: 'Verplicht',
        tekst: 'Activeer je eSIM vóór je in het vliegtuig stapt. Vanaf landing heb je meteen internet — voor de taxi-app, je hostel-adres en je eerste berichten. Telsim (~€13, Telstra-netwerk) of Airalo werken goed.',
        link: '/esim',
      },
    ],
  },
  {
    dag: 'Dag 1',
    kleur: 'text-ember',
    taken: [
      {
        titel: 'OPAL / Myki / Go Card kopen',
        urgentie: 'Direct',
        tekst: 'Koop een OV-pas bij de eerste kiosk of automaat na aankomst. Sydney: OPAL. Melbourne: Myki. Brisbane: Go Card. Contant of pin, ~AUD 10 voor de kaart zelf.',
        link: null,
      },
      {
        titel: 'Hostel check-in en eerste oriëntatie',
        urgentie: 'Direct',
        tekst: 'Leg je spullen neer en loop de buurt in. Waar is de dichtstbijzijnde supermarkt (Coles/Woolworths), de treinhalte en de dichtstbijzijnde bank-branch? Dat wil je weten voor dag 2.',
        link: null,
      },
    ],
  },
  {
    dag: 'Dag 2–3',
    kleur: 'text-ember',
    taken: [
      {
        titel: 'Bankrekening openen',
        urgentie: 'Prioriteit',
        tekst: 'Ga naar een branch van CommBank, ANZ, NAB of Westpac met je paspoort. Open een everyday-account. Je TFN hoef je nu nog niet te hebben — je kunt dat later doorgeven. Je Australische bankpas is er vaak dezelfde dag of de volgende dag.',
        link: '/banking',
      },
      {
        titel: 'Tax File Number aanvragen',
        urgentie: 'Prioriteit',
        tekst: 'Doe dit online via ato.gov.au, gratis, duurt ~10 minuten. Zonder TFN betaal je 45% belasting in plaats van 15%. Je TFN komt per post of e-mail binnen 5–28 dagen. Gebruik je hostel-adres — dat mag gewoon.',
        link: '/tax-file-number',
      },
    ],
  },
  {
    dag: 'Dag 3–7',
    kleur: 'text-forest',
    taken: [
      {
        titel: 'Medicare inschrijven',
        urgentie: 'Binnen 1 week',
        tekst: 'Nederlanders hebben recht op Medicare via het bilateraal verdrag. Ga naar een Medicare Service Centre met je paspoort en je Nederlandse zorgverzekeringsbewijs (EHIC of verzekeringskaart). Enrolment is gratis.',
        link: '/medicare',
      },
      {
        titel: 'CV updaten en eerste sollicitaties',
        urgentie: 'Zo snel mogelijk',
        tekst: "Australisch CV-formaat is anders dan Nederlands. Maximaal 2 pagina's, volgorde: contact, summary, work experience, skills. Loop cafés, restaurants en winkels binnen — veel banen in hospitality worden nog steeds via de voordeur gevonden, niet via een app.",
        link: '/werk',
      },
      {
        titel: 'Woonopties verkennen',
        urgentie: 'Week 1–2',
        tekst: 'Flatmates.com.au, Facebook-groepen (bijv. "Dutch in Sydney"), Gumtree. Bekijk meerdere opties en betaal nooit bond zonder de kamer gezien te hebben.',
        link: '/wonen',
      },
    ],
  },
  {
    dag: 'Week 2',
    kleur: 'text-slate',
    taken: [
      {
        titel: 'Kamer vinden of verlengen',
        urgentie: 'Afhankelijk van situatie',
        tekst: 'Heb je werk gevonden? Kijk dan naar een sharehouse in een wijk met goede OV-verbinding naar je werk. Nog geen werk? Verleng het hostel een week en ga door met solliciteren.',
        link: '/wonen',
      },
    ],
  },
]

const praktischeTips = [
  {
    tip: 'Hostel-adres mag op formulieren',
    uitleg: 'Voor TFN, bank en Medicare hoef je geen huurcontract te tonen. Je hostel-adres voldoet, of een Post Restante bij Australia Post.',
  },
  {
    tip: 'Open je bank vóór je TFN binnen is',
    uitleg: 'De bank heeft je TFN niet direct nodig — alleen later voor rente-aanslagen. Niet wachten op je TFN kost je een week.',
  },
  {
    tip: 'Werk zoeken kan al vóór je TFN binnen is',
    uitleg: 'Je hebt 28 dagen vanaf indiensttreding om je TFN aan je werkgever door te geven. Begin dus direct.',
  },
  {
    tip: 'Schrijf je niet in bij Centrelink',
    uitleg: 'Als Working Holiday Maker heb je geen recht op Centrelink-uitkeringen. Negeer alle tips die zeggen dat dat zou moeten.',
  },
  {
    tip: 'Boek je hostel voor minimaal 5 nachten',
    uitleg: 'Bank en TFN kosten meer tijd dan je verwacht. 2 nachten boeken en dan improviseren is stressvol. Plan wat ruimte in.',
  },
]

export default function EersteWeek() {
  const ew = SOT.eersteWeek

  return (
    <>
      <Helmet>
        <title>Eerste week in Australië — wat regel je wanneer | Aussiestart</title>
        <meta name="description" content="Dag-tot-dag-route voor je eerste week in Australië. TFN, Medicare, bankrekening, eSIM, OV-pas — in de juiste volgorde, zonder gedoe." />
      </Helmet>
      <PageHeader
        eyebrow="Praktische gids · Eerste week"
        title="Je eerste week in Australië — dag voor dag"
        intro="TFN, Medicare, bankrekening, eSIM, OV-pas. In de juiste volgorde — zodat je niet in week 4 nog rond hoeft te bellen."
        lastChecked={gechecktOp(ew.lastChecked)}
        source="Eigen ervaring + officiële instanties (ATO, Services Australia)"
      />

      {/* ── Foto ────────────────────────────────────────────────────── */}
      <figure className="container-wide pt-8 pb-2">
        <div className="aspect-[16/9] sm:aspect-[21/9] overflow-hidden">
          <img
            src="/img/foto/IMG_1008.jpg"
            alt="Sydney Opera House van onderen, blauwe lucht"
            className="w-full h-full object-cover"
          />
        </div>
        <figcaption className="text-xs text-slate mt-2 px-1">
          Sydney Opera House, dag twee. Tussen Circular Quay en Wynyard zit alles wat je in week 1 nodig hebt.
        </figcaption>
      </figure>

      <ArticleLayout aside={<EersteWeekSidebar />}>

        <p>
          De eerste week bepaalt of je binnen 14 dagen werkt of pas in week 5 je eerste payslip krijgt
          omdat je geen TFN had. Hieronder een dag-tot-dag route — niet per dringendheid, maar in de
          volgorde die logistiek het meest efficiënt is.
        </p>

        <SourceStrip
          source="ATO + Services Australia + eigen ervaring"
          url="https://www.ato.gov.au"
          checked={gechecktOp(ew.lastChecked)}
          type="praktische ervaringskennis + officiële instanties"
        />

        <MarginNote type="note">
          Gemiddelde kosten eerste week in Australië: <strong>{ew.totaalRange}</strong>. Dit zijn eenmalige
          kosten bovenop je normale maandbudget — hostel, OV-pas, eerste boodschappen, SIM.
        </MarginNote>

        {/* ── Van vliegveld naar stad ────────────────────────────────── */}
        <h2>Eerst: van vliegveld naar stad</h2>
        <p>
          Drie opties vanaf Sydney (SYD), Melbourne (MEL) of Brisbane (BNE), in volgorde van prijs:
        </p>

        <div className="not-prose my-5 divide-y divide-sand border-t border-b border-sand">
          {[
            ['OV (goedkoopst)', 'AUD 10–22', 'Sydney AirportLink, Melbourne Skybus, Brisbane Airtrain. Met grote backpack soms krap maar prima.'],
            ['Vooraf-geboekte transfer', 'AUD 50–90', 'KiwiTaxi of vergelijkbaar. Vaste prijs, chauffeur staat op naam bij aankomsthal. Handig bij nacht-aankomst.'],
            ['Uber / Didi', 'AUD 45–80', 'Vanaf de stoeprand, kan oplopen bij surge pricing. Niet altijd goedkoper dan transfer.'],
          ].map(([opt, prijs, toelichting]) => (
            <div key={opt} className="py-3 flex flex-col sm:flex-row gap-1 sm:gap-6 text-sm">
              <span className="font-medium text-ink w-44 shrink-0">{opt}</span>
              <span className="text-ember font-medium w-24 shrink-0">{prijs}</span>
              <span className="text-ink/70">{toelichting}</span>
            </div>
          ))}
        </div>

        <MarginNote type="tip">
          Nacht-aankomst met hostel buiten het centrum? Boek vooraf. Overdag met handbagage?
          OV is makkelijker en goedkoper.
        </MarginNote>

        <div className="not-prose my-4">
          <AffiliateLink partner="kiwitaxi" variant="button">
            Boek transfer met KiwiTaxi
          </AffiliateLink>
        </div>

        {/* ── Dag-tot-dag route ─────────────────────────────────────── */}
        <h2>Dag-tot-dag route</h2>
        <p>
          De volgorde hieronder is niet willekeurig. Bank openen vóór TFN, TFN aanvragen vóór Medicare,
          eSIM vóór alles. Elke stap bouwt voort op de vorige.
        </p>

        <div className="not-prose my-6 space-y-0">
          {dagplan.map((blok, bi) => (
            <div key={blok.dag} className="flex gap-5">
              {/* Tijdlijn-kolom */}
              <div className="flex flex-col items-center w-20 shrink-0">
                <div className={`text-xs font-semibold uppercase tracking-wider ${blok.kleur} text-right w-full pt-4`}>
                  {blok.dag}
                </div>
                {bi < dagplan.length - 1 && (
                  <div className="w-px flex-1 bg-sand mt-2 mb-0 min-h-4" />
                )}
              </div>

              {/* Taken */}
              <div className="flex-1 pb-6 space-y-4">
                {blok.taken.map((taak) => (
                  <div key={taak.titel} className="border-b border-sand pb-4 last:border-b-0">
                    <div className="flex items-baseline gap-3 mb-1">
                      <span className="font-serif text-lg text-forest leading-tight">
                        {taak.link ? (
                          <Link to={taak.link} className="hover:text-ember">{taak.titel}</Link>
                        ) : taak.titel}
                      </span>
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-ember shrink-0">
                        {taak.urgentie}
                      </span>
                    </div>
                    <p className="text-sm text-ink/80 leading-relaxed">{taak.tekst}</p>
                    {taak.link && (
                      <Link to={taak.link} className="text-xs text-ember underline underline-offset-2 mt-1 inline-block hover:text-sunset">
                        Volledige gids →
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── Praktische tips ───────────────────────────────────────── */}
        <h2>Vijf dingen die mensen te laat weten</h2>
        <div className="not-prose my-5 divide-y divide-sand">
          {praktischeTips.map((item) => (
            <div key={item.tip} className="py-3 flex gap-4 text-sm">
              <span className="shrink-0 text-ember font-bold mt-0.5">→</span>
              <div>
                <span className="font-medium text-forest">{item.tip}. </span>
                <span className="text-ink/80">{item.uitleg}</span>
              </div>
            </div>
          ))}
        </div>

        <MarginNote type="warn">
          <strong>Wat kan wachten tot week 2:</strong> kamer zoeken (doe het wel snel, maar niet meteen
          dag 1), CV helemaal op orde maken, stadsverkenningstochten, daguitstapjes. Prioriteer bank en
          TFN eerst — die blokkeren je inkomen als je ze uitstelt.
        </MarginNote>

        {/* ── Stad-specifiek ────────────────────────────────────────── */}
        <h2>Stad-specifieke links</h2>
        <div className="not-prose my-5 divide-y divide-sand border-t border-b border-sand">
          {[
            { stad: 'Sydney', link: '/sydney', info: 'Circular Quay, Newtown, Surry Hills. Duurste stad maar meeste werk.' },
            { stad: 'Melbourne', link: '/melbourne', info: 'CBD, Fitzroy, St Kilda. Koeler dan je denkt, veel cultuur en café-banen.' },
            { stad: 'Cairns', link: '/cairns', info: 'Startpunt farmwork en Great Barrier Reef-werk. Goedkoper dan de grote steden.' },
          ].map((s) => (
            <div key={s.stad} className="py-3 flex gap-6 text-sm">
              <Link to={s.link} className="font-medium text-ember underline underline-offset-4 hover:text-sunset w-24 shrink-0">
                {s.stad} →
              </Link>
              <span className="text-ink/80">{s.info}</span>
            </div>
          ))}
        </div>

        <LastChecked
          date={gechecktOp(ew.lastChecked)}
          source="ATO + Services Australia"
          sourceUrl="https://www.ato.gov.au"
        />
      </ArticleLayout>

      {/* ── EmailCapture ──────────────────────────────────────────────── */}
      <section className="container-wide pb-16">
        <EmailCapture
          headline="Download het eerste-week stappenplan"
          subline="De gratis Australië Start Checklist bevat de volledige eerste-week route — inclusief welke formulieren je meeneemt, welk adres je gebruikt en wat er mis kan gaan."
        />
      </section>
    </>
  )
}

/* ─── Sidebar ───────────────────────────────────────────────────────────── */
function EersteWeekSidebar() {
  return (
    <div className="space-y-5">
      {/* Top 3 prioriteiten */}
      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-slate mb-3">
          Eerste 3 prioriteiten
        </div>
        <ol className="space-y-3">
          {[
            { n: '1', label: 'eSIM', sub: 'Vóór vertrek activeren', link: '/esim' },
            { n: '2', label: 'Bankrekening', sub: 'Dag 2–3, branch-bezoek', link: '/banking' },
            { n: '3', label: 'Tax File Number', sub: 'Dag 2–3, online via ATO', link: '/tax-file-number' },
          ].map((item) => (
            <li key={item.n} className="flex gap-3 text-sm">
              <span className="shrink-0 w-5 h-5 rounded-full bg-ember/10 text-ember text-xs font-semibold flex items-center justify-center mt-0.5">
                {item.n}
              </span>
              <div>
                <Link to={item.link} className="font-medium text-forest hover:text-ember underline underline-offset-2">
                  {item.label}
                </Link>
                <span className="block text-xs text-slate">{item.sub}</span>
              </div>
            </li>
          ))}
        </ol>
      </div>

      {/* Week 1 kosten */}
      <div className="border-t border-sand pt-5">
        <div className="text-xs font-semibold uppercase tracking-wider text-slate mb-3">
          Kosten eerste week
        </div>
        <p className="text-2xl font-serif text-forest">{SOT.eersteWeek.totaalRange}</p>
        <p className="text-xs text-slate mt-1">Eenmalig, bovenop maandbudget</p>
        <Link to="/kosten" className="text-xs text-ember underline underline-offset-2 mt-2 inline-block hover:text-sunset">
          Volledige kostenberekening →
        </Link>
      </div>

      {/* Gidsen per taak */}
      <div className="border-t border-sand pt-5">
        <div className="text-xs font-semibold uppercase tracking-wider text-slate mb-3">
          Gidsen per taak
        </div>
        <ul className="space-y-2 text-sm">
          {[
            ['/tax-file-number', 'Tax File Number'],
            ['/medicare', 'Medicare'],
            ['/banking', 'Bankrekening openen'],
            ['/esim', 'eSIM of simkaart'],
            ['/wonen', 'Wonen — hostel of sharehouse'],
            ['/werk', 'Werk zoeken'],
          ].map(([path, label]) => (
            <li key={path}>
              <Link to={path} className="text-ember underline underline-offset-4 hover:text-sunset">
                {label} →
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Compact EmailCapture */}
      <div className="border-t border-sand pt-5">
        <EmailCapture
          variant="compact"
          headline="Eerste-week checklist — gratis"
          cta="Stuur mij de checklist"
        />
      </div>
    </div>
  )
}
