import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import { FAQ, ArticleLayout, SourceStrip, MarginNote, LastChecked } from '../components/Article.jsx'
import CostCalculator from '../components/CostCalculator.jsx'
import EmailCapture from '../components/EmailCapture.jsx'
import JsonLd from '../components/JsonLd.jsx'
import { SOT, gechecktOp } from '../data/sot.js'
import PolaroidStrip from '../components/PolaroidStrip.jsx'

const SITE_URL = 'https://australiestart.nl'

const kostenSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': `${SITE_URL}/kosten#article`,
      headline: 'Wat kost een Working Holiday Australië écht? Eerlijk budget 2026',
      description:
        'Geen AUD 5.000 zoals bureaus zeggen. Eerlijk overzicht van startbudget, maandelijkse kosten en wat mensen structureel onderschatten voor een Working Holiday in Australië.',
      url: `${SITE_URL}/kosten`,
      dateModified: '2026-04-30',
      inLanguage: 'nl-NL',
      author: { '@id': `${SITE_URL}/#organization` },
      publisher: { '@id': `${SITE_URL}/#organization` },
      isPartOf: { '@id': `${SITE_URL}/#website` },
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/kosten#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Klopt de AUD 5.000 spaargeld-eis voor het Working Holiday visum?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ja, dat is een officiële visum-eis. Maar je hoeft het niet uit te geven. Je moet kunnen aantonen dat je het hebt op het moment van aanvragen, via een bankafschrift is voldoende. In de praktijk heb je voor een realistisch startbudget in Sydney of Melbourne AUD 7.000–10.000 nodig.',
          },
        },
        {
          '@type': 'Question',
          name: 'Hoeveel geld heb ik nodig voor mijn eerste maand in Australië?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Reken op AUD 3.000–5.000 (≈ €1.800–3.000) voor je eerste maand, vóór je eerste payslip. Het meeste gaat op aan borg, eerste woonkosten, OV-pas, eSIM en boodschappen. De meeste backpackers vinden binnen 2–3 weken werk, maar niet iedereen.',
          },
        },
        {
          '@type': 'Question',
          name: 'Wat kost een Working Holiday Australië per maand?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Zuinig starten: AUD 1.800–2.200 per maand. Realistisch in Sydney of Melbourne: AUD 2.500–3.200 per maand. Eerst reizen dan werken: AUD 3.000–4.000 per reismaand. Farmwork-route: AUD 1.500–2.500 per maand (accommodatie soms inclusief bij de werkgever).',
          },
        },
        {
          '@type': 'Question',
          name: 'Hoeveel verdien ik als Working Holiday Maker in Australië?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Het Australische minimumloon is AUD 24,95 per uur (per 1 juli 2025). Met casual loading (25% extra) wordt dat AUD 31,19 per uur. Bij 38 uur per week is dat bruto circa AUD 1.185 per week. Als Working Holiday Maker betaal je 15% belasting over de eerste AUD 45.000. Netto per maand bij voltijd werk: circa AUD 4.200–4.500.',
          },
        },
        {
          '@type': 'Question',
          name: 'Werkt mijn Nederlandse pinpas in Australië?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Technisch wel, maar elke transactie kost wisselkoersmarge plus opname-fee. Open binnen je eerste week een Australische bankrekening bij CommBank, ANZ, NAB of Westpac en zet via Wise het minimum over. Dat scheelt tientallen euro\'s per maand aan kosten.',
          },
        },
        {
          '@type': 'Question',
          name: 'Wat kost een bemiddelaar-pakket voor een Working Holiday Australië?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Bemiddelingsbureaus bieden pakketten aan van €549 tot €2.050. Het visum (AUD 670), de vlucht (€700–1.300) en de verzekering (€200–500) betaal je sowieso. Het extra bedrag voor het bureau is dus feitelijk €500–1.000 voor diensten die je ook zelf kunt regelen via ImmiAccount, Hostelworld en de ATO.',
          },
        },
      ],
    },
  ],
}

const SCENARIOS = [
  {
    label: 'Zuinig starten',
    voor: 'Je wilt snel werk zoeken, eet eenvoudig en woont in een sharehouse',
    maand: 'AUD 1.800–2.200',
    start: '€4.500–5.500',
  },
  {
    label: 'Realistisch (Sydney/Melbourne)',
    voor: 'Gemiddeld hostel of sharehouse, eet uit, af en toe iets ondernemen',
    maand: 'AUD 2.500–3.200',
    start: '€6.000–8.000',
  },
  {
    label: 'Eerst reizen, dan werken',
    voor: 'Je reserveert de eerste 4–6 weken voor reizen vóór je werk zoekt',
    maand: 'AUD 3.000–4.000 (reismaanden)',
    start: '€8.000–10.000',
  },
  {
    label: 'Farmwork-route',
    voor: 'Je gaat direct regionaal werken, accommodatie soms inclusief, lagere woonkosten',
    maand: 'AUD 1.500–2.500',
    start: '€4.000–6.000',
  },
]

const FOUTEN = [
  {
    n: '1',
    titel: 'Eerste maand onderschatten',
    tekst: 'Borg, eerste boodschappen, OPAL-pas, eSIM, eerste verzekeringspremie: reken op AUD 1.500–2.500 extra in je eerste maand boven je normale maandbudget.',
  },
  {
    n: '2',
    titel: 'Geen buffer voor werk-zoektijd',
    tekst: 'De meeste backpackers vinden binnen 2–3 weken werk, maar niet iedereen. Reken op minimaal 4–6 weken uitgaven voordat je eerste payslip binnenkomt.',
  },
  {
    n: '3',
    titel: 'Vluchten te optimistisch boeken',
    tekst: 'Een open jaar-ticket is duurder dan twee enkelreizen. Een retour met flexibele datum is meestal het goedkoopst. Reken op €1.000–1.500, niet €700.',
  },
  {
    n: '4',
    titel: 'Reizen binnenshuis vergeten',
    tekst: 'Australië is groot en mooi. Vrijwel iedereen wil ook reizen, niet alleen werken. Reserveer een buffer voor weekendtrips en de roadtrip aan het einde.',
  },
  {
    n: '5',
    titel: 'Wisselkoers als vast gegeven behandelen',
    tekst: 'De AUD/EUR-koers schommelt tussen 0,55 en 0,68. Reken op het midden, niet op de huidige stand.',
  },
]

export default function Kosten() {
  const loon = SOT.minimumloon
  const acc  = SOT.accommodatie
  const ew   = SOT.eersteWeek

  return (
    <>
      <Helmet>
        <title>Wat kost een Working Holiday Australië écht? | Aussiestart</title>
        <meta name="description" content="Geen AUD 5.000 zoals bureaus zeggen. Bereken je eerlijke startbudget: per maand, per scenario, met calculator. Inclusief wat mensen structureel onderschatten." />
        <meta property="og:title" content="Wat kost een Working Holiday Australië écht?" />
        <meta property="og:description" content="Calculator, vier scenario's en de vijf budget-fouten die mensen maken. Eerlijk, zonder €2.000 pakket van een bureau." />
        <meta property="og:type" content="article" />
      </Helmet>
      <JsonLd data={kostenSchema} />
      <PageHeader
        eyebrow="Tool · Kosten"
        title="Wat kost een Working Holiday Australië écht?"
        intro="Niet de €5.000 die bemiddelaars zeggen. Hieronder bereken je een eerlijk startbudget per maand én totaal, met scenario's en wat mensen structureel onderschatten."
        lastChecked={gechecktOp(loon.lastChecked)}
        source={loon.bron}
      />

      <ArticleLayout aside={<KostenSidebar />}>

        <p>
          Bemiddelaars noemen AUD 5.000 als richtlijn. Dat is de officiële visum-eis, je moet aantonen
          dat je het hebt, niet dat je het uitgeeft. Wat het echt kost om een jaar in Australië te leven
          en werken, staat hieronder. Je kunt het zelf doorrekenen.
        </p>

        <SourceStrip
          source={loon.bron}
          url={loon.bronUrl}
          checked={gechecktOp(loon.lastChecked)}
          type="officieel minimumloon + marktprijzen accommodatie"
        />

        {/* ── De calculator ─────────────────────────────────────────── */}
        <h2>De calculator</h2>
        <p>
          Sleep de sliders naar jouw situatie. De getallen zijn realistische ranges, geen worst-case
          en geen backpacker-influencer-droombudget.
        </p>
        <CostCalculator />

        {/* ── Scenario's ────────────────────────────────────────────── */}
        <h2>Vier scenario's</h2>
        <p>Afhankelijk van hoe je begint, verschilt het startbedrag flink.</p>

        <div className="not-prose my-6 overflow-hidden border border-sand rounded-lg">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-forest/5 border-b border-sand">
                <th className="py-2.5 px-4 text-left font-semibold text-ink">Scenario</th>
                <th className="py-2.5 px-4 text-left font-semibold text-ink">Per maand</th>
                <th className="py-2.5 px-4 text-left font-semibold text-ink">Startbudget</th>
              </tr>
            </thead>
            <tbody>
              {SCENARIOS.map((s, i) => (
                <tr key={s.label} className={i % 2 === 0 ? 'bg-bone' : 'bg-cream'}>
                  <td className="py-3 px-4 align-top">
                    <span className="font-medium text-forest block">{s.label}</span>
                    <span className="text-xs text-slate mt-0.5 block">{s.voor}</span>
                  </td>
                  <td className="py-3 px-4 align-top text-ink font-medium">{s.maand}</td>
                  <td className="py-3 px-4 align-top text-ink">{s.start}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <MarginNote type="warn">
          <strong>Eerste week:</strong> gemiddeld {ew.totaalRange} extra boven je normale maandbudget.
          Denk aan borg, eSIM, OPAL/Myki-pas, eerste boodschappen en de hostel-buffer voor werken zoeken.
        </MarginNote>

        {/* ── Hoeveel verdien je terug ──────────────────────────────── */}
        <h2>Hoeveel verdien je terug?</h2>
        <p>
          Het Australische minimumloon is <strong>{loon.uurloon}/uur</strong> (per {loon.geldigVanaf}).
          Voor backpackers met een casual contract (de norm in hospitality, retail en farmwork) komt
          daar 25% casual loading bovenop: <strong>{loon.casualLoon}/uur</strong>.
        </p>
        <p>
          Bij 38 uur per week: bruto AUD {Math.round(parseFloat(loon.casualLoon.replace('AUD ','').replace(',','.')) * 38).toLocaleString('nl-NL')}/week.
          Belasting als Working Holiday Maker: 15% over de eerste AUD 45.000.
          Netto per maand: <strong>≈ AUD 4.200–4.500</strong> bij voltijd werk.
        </p>
        <p>
          Superannuation ({loon.superRate}) wordt bovenop je uurloon gestort en krijg je terug bij vertrek
          als je het claimt via de ATO. Meer uitleg op de{' '}
          <Link to="/loon" className="text-ember underline underline-offset-2">loon- en belastingpagina</Link>.
        </p>

        <MarginNote type="tip">
          Bij gemiddelde uitgaven (AUD 2.500–3.000/maand) hou je voltijd werkend AUD 1.200–1.800 per maand
          over. Op weekenden en feestdagen gelden hogere tarieven, tot 2,5× het basistarief.
        </MarginNote>

        {/* ── Vergelijking met bemiddelaar ──────────────────────────── */}
        <h2>Wat kost een bemiddelaar-pakket extra?</h2>
        <p>
          Bemiddelingsbureaus bieden pakketten aan van €549 tot €2.050. Wat zit erin?
        </p>

        <div className="not-prose my-5 divide-y divide-sand border-t border-b border-sand">
          {[
            ['Visumaanvraag', 'AUD 670 sowieso', 'Bureau doet het voor je in 30 min, jij kunt dat ook zelf'],
            ['Verzekering', '€200–500 sowieso', 'Zelfde polissen, dezelfde prijs'],
            ['Vlucht', '€700–1.300 sowieso', 'Bureau boekt op jouw naam, dezelfde tarieven'],
            ['Eerste hostel', '€80–150 sowieso', 'Jij kunt ook Hostelworld gebruiken'],
            ['Werkgarantie farmwork', 'Optioneel', 'Soms van wisselende kwaliteit, controleer altijd de werkgever'],
          ].map(([item, kosten, noot]) => (
            <div key={item} className="py-3 flex flex-col sm:flex-row gap-1 sm:gap-6 text-sm">
              <span className="font-medium text-ink w-40 shrink-0">{item}</span>
              <span className="text-slate w-36 shrink-0">{kosten}</span>
              <span className="text-ink/70">{noot}</span>
            </div>
          ))}
        </div>

        <MarginNote type="note">
          Het verschil tussen pakketprijs en wat je sowieso uitgeeft is €500–€1.000. Dat is het tarief
          voor "iemand anders die het regelt". Voor sommige mensen waardevol. Voor de meeste: niet nodig
          als je een goede voorbereiding hebt.
        </MarginNote>

        {/* ── Budget-fouten ─────────────────────────────────────────── */}
        <h2>Vijf budget-fouten die mensen maken</h2>
        <div className="not-prose my-5 space-y-4">
          {FOUTEN.map((f) => (
            <div key={f.n} className="flex gap-4 border-b border-sand pb-4 last:border-b-0">
              <span className="shrink-0 w-7 h-7 rounded-full bg-ember/10 text-ember text-xs font-semibold flex items-center justify-center">
                {f.n}
              </span>
              <div>
                <p className="font-medium text-forest text-sm mb-1">{f.titel}</p>
                <p className="text-ink/80 text-sm leading-relaxed">{f.tekst}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Accommodatie-prijzen ──────────────────────────────────── */}
        <h2>Wat kost wonen?</h2>
        <p>De grootste variabele in je budget is wonen. Prijsranges:</p>
        <div className="not-prose my-5 overflow-hidden border border-sand rounded-lg">
          <table className="w-full text-sm">
            <tbody>
              <tr className="bg-bone">
                <td className="py-2.5 px-4 text-slate">Hostel dormitory per nacht</td>
                <td className="py-2.5 px-4 font-medium text-ink">{acc.hostelDormNacht}</td>
              </tr>
              <tr className="bg-cream">
                <td className="py-2.5 px-4 text-slate">Hostel dormitory per week</td>
                <td className="py-2.5 px-4 font-medium text-ink">{acc.hostelDormWeek}</td>
              </tr>
              <tr className="bg-bone">
                <td className="py-2.5 px-4 text-slate">Sharehouse per week</td>
                <td className="py-2.5 px-4 font-medium text-ink">{acc.sharehouseWeek}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-sm text-slate">
          Meer over wonen, inspectie, borg en scams: <Link to="/wonen" className="text-ember underline underline-offset-2">de woongids →</Link>
        </p>

        {/* ── FAQ ───────────────────────────────────────────────────── */}
        <h2>Veelgestelde vragen</h2>
        <FAQ q="Klopt de AUD 5.000 spaargeld-eis?">
          Ja, dat is een officiële visum-eis. Maar je hoeft het niet uit te geven. Je moet kunnen aantonen
          dat je het hebt op het moment van aanvragen, via een bankafschrift is voldoende.
        </FAQ>
        <FAQ q="Hoeveel cash neem ik mee voor de eerste maand?">
          Reken op AUD 3.000–5.000 (≈ €1.800–3.000) voor je eerste maand, vóór je eerste payslip.
          Het meeste gaat op aan borg en eerste woonkosten.
        </FAQ>
        <FAQ q="Werkt mijn Nederlandse pinpas in Australië?">
          Technisch wel, maar elke transactie kost wisselkoersmarge plus opname-fee. Open binnen je eerste
          week een Australische bankrekening en zet via Wise het minimum over. Uitleg op de{' '}
          <Link to="/banking" className="text-ember underline underline-offset-2">banking-pagina</Link>.
        </FAQ>
        <FAQ q={`Hoeveel verdien ik gemiddeld per uur als WHM?`}>
          Minimumloon: {loon.uurloon}/uur. Met casual loading (25% extra): {loon.casualLoon}/uur.
          Skilled werk (bouw, mining) kan AUD 35–50/uur. Meer op de{' '}
          <Link to="/loon" className="text-ember underline underline-offset-2">loon-pagina</Link>.
        </FAQ>
        <FAQ q="Moet ik mijn budget in EUR of AUD doen?">
          AUD voor je dagelijkse uitgaven, EUR voor de vergelijking met je Nederlandse rekening.
          De calculator hierboven toont beide.
        </FAQ>

        {/* ── Bronnen ──────────────────────────────────────────────── */}
        <h2>Bronnen en kalibratie</h2>
        <p className="text-sm text-ink/70 leading-relaxed">
          De ranges zijn gebaseerd op: eigen verblijf (14 maanden Australië), Reddit r/australia en
          r/melbourne, Flatmates.com.au-prijzen voor Sydney/Melbourne/Brisbane, minimumloontabellen van
          de Fair Work Ombudsman, en SafetyWing/JoHo/Allianz-tarieven. De wisselkoers AUD→EUR ≈ {SOT.wisselkoers.audToEur.toString().replace('.', ',')}
          is een momentopname ({SOT.wisselkoers.geldigVanaf}, bandbreedte {SOT.wisselkoers.bandbreedte}). Check{" "}
          <a href={SOT.wisselkoers.bronUrl} target="_blank" rel="noopener noreferrer" className="underline">XE</a>{" "}
          of Wise op het moment van plannen.
        </p>

        <LastChecked
          date={gechecktOp(loon.lastChecked)}
          source={loon.bron}
          sourceUrl={loon.bronUrl}
        />
      </ArticleLayout>

      <PolaroidStrip
        eyebrow="Hoe het er echt uitziet"
        title="Budget leven in Australië"
        items={[
          { src: '/img/foto/lucky-bay-wa-campervan-mighty.jpeg', alt: 'Mighty campervan bij Lucky Bay, Western Australia' },
          { src: '/img/foto/australie-campervan-zonsondergang-oceaan.jpeg', alt: 'Campervan bij zonsondergang aan de Australische kust' },
          { src: '/img/foto/australie-roadtrip-outback-schemering.jpeg', alt: 'Rijden door het Australische outback bij schemering' },
          { src: '/img/foto/australie-vlucht-jetstar-uitzicht.jpeg', alt: 'Uitzicht vanuit Jetstar vliegtuig over Australië' },
        ]}
      />

      {/* ── EmailCapture ──────────────────────────────────────────────── */}
      <section className="container-wide pb-16">
        <EmailCapture
          headline="Download de budgetchecklist"
          subline="De gratis Australië Start Checklist heeft een complete budgetsectie: eerste maand, vóór vertrek, maandelijks. Inclusief wat mensen structureel vergeten te berekenen."
        />
      </section>
    </>
  )
}

function KostenSidebar() {
  const loon = SOT.minimumloon

  return (
    <div className="space-y-5">
      {/* Vuistregels */}
      <div>
        <div className="text-xs font-semibold uppercase tracking-wider text-slate mb-3">
          Snelle vuistregels
        </div>
        <div className="divide-y divide-sand">
          {[
            ['Per maand', 'AUD 2.000–3.000'],
            ['Eerste maand extra', 'AUD 1.500–2.500'],
            ['Spaarbewijs visum', SOT.visa417.spaarbewijs],
            ['Vóór vertrek', '€5.500–8.000'],
            ['Netto verdienen', `≈ ${loon.weekLoon}/week`],
          ].map(([label, val]) => (
            <div key={label} className="py-2.5 flex justify-between text-sm">
              <span className="text-slate">{label}</span>
              <span className="font-medium text-ink">{val}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Volgende stap */}
      <div className="border-t border-sand pt-5">
        <div className="text-xs font-semibold uppercase tracking-wider text-slate mb-3">
          Volgende stap
        </div>
        <ul className="space-y-2 text-sm">
          <li>
            <Link to="/verzekering" className="text-ember underline underline-offset-4 hover:text-sunset">
              Verzekering vergelijken →
            </Link>
          </li>
          <li>
            <Link to="/visum" className="text-ember underline underline-offset-4 hover:text-sunset">
              Visum aanvragen →
            </Link>
          </li>
          <li>
            <Link to="/werk" className="text-ember underline underline-offset-4 hover:text-sunset">
              Werk vinden →
            </Link>
          </li>
          <li>
            <Link to="/wonen" className="text-ember underline underline-offset-4 hover:text-sunset">
              Wonen: hostel of sharehouse? →
            </Link>
          </li>
        </ul>
      </div>

      {/* Loon uitleg */}
      <div className="border-t border-sand pt-5">
        <div className="text-xs font-semibold uppercase tracking-wider text-slate mb-2">
          Minimumloon 2025–2026
        </div>
        <p className="text-sm text-ink/80 leading-relaxed mb-2">
          Normaal: <strong>{loon.uurloon}/uur</strong><br />
          Casual (incl. loading): <strong>{loon.casualLoon}/uur</strong><br />
          Super: <strong>{loon.superRate}</strong> bovenop je loon
        </p>
        <Link to="/loon" className="text-sm text-ember underline underline-offset-4 hover:text-sunset">
          Alles over loon en belasting →
        </Link>
      </div>

      {/* Compact EmailCapture */}
      <div className="border-t border-sand pt-5">
        <EmailCapture
          variant="compact"
          headline="Budgetchecklist: gratis"
          cta="Stuur mij de checklist"
        />
      </div>
    </div>
  )
}
