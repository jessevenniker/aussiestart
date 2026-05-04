import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import {
  ArticleLayout,
  FactsTable,
  FAQ,
  MarginNote,
  SourceStrip,
  LastChecked,
  Callout,
} from '../components/Article.jsx'
import EmailCapture from '../components/EmailCapture.jsx'
import JsonLd from '../components/JsonLd.jsx'
import { SOT, gechecktOp } from '../data/sot.js'
import PolaroidStrip from '../components/PolaroidStrip.jsx'

const LAST_CHECKED = '2026-04-30'
const SITE_URL = 'https://australiestart.nl'

// ─── Structured data ─────────────────────────────────────────────────────────
const achtenTachtigSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': `${SITE_URL}/88-dagen#article`,
      headline: 'De 88-dagenregel uitgelegd: Working Holiday visum jaar 2 en jaar 3',
      description:
        'Alles over de 88-dagenregel voor het Working Holiday visum subclass 417: welk werk telt als specified work, welke postcodes gelden, hoe je bewijs bewaart en wat de wet zegt over onderbetaling.',
      url: `${SITE_URL}/88-dagen`,
      dateModified: LAST_CHECKED,
      inLanguage: 'nl-NL',
      author: { '@id': `${SITE_URL}/#organization` },
      publisher: { '@id': `${SITE_URL}/#organization` },
      isPartOf: { '@id': `${SITE_URL}/#website` },
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', 'h2'],
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/88-dagen#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Mag ik de 88 dagen voor het Working Holiday visum spreiden over meerdere werkgevers?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ja. Je mag de 88 dagen bij meerdere werkgevers opbouwen, in meerdere regio\'s, en zelfs in meerdere erkende sectoren, zolang elke dag voldoet aan sector + postcode. Bewaar per werkgever een volledige set bewijsdocumenten.',
          },
        },
        {
          '@type': 'Question',
          name: 'Tellen weekenddagen mee voor de 88-dagenregel als ik op een boerderij woon maar niet werk?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nee. Alleen gewerkte dagen tellen voor de 88-dagenregel. Als je op het terrein woont maar op zaterdag geen uren maakt, telt die dag niet. Loonstroken zijn leidend.',
          },
        },
        {
          '@type': 'Question',
          name: 'Kan ik in Adelaide of Darwin de 88 dagen voor het Working Holiday visum halen?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ja. South Australia en het Northern Territory tellen volledig als regionaal gebied voor de 88-dagenregel, ook de steden Adelaide en Darwin. Werk in een erkende sector in die steden telt mee, controleer wel de specifieke werksoort.',
          },
        },
        {
          '@type': 'Question',
          name: 'Welk werk telt als specified work voor de 88-dagenregel?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Het Department of Home Affairs hanteert een gesloten lijst: plant- en dierteelt (fruit plukken, groenten oogsten, melkveebedrijven), visserij en parelduiken, bosbouw en houtkap, mijnbouw, regionale bouw, en herstelwerk na erkende rampen (toegevoegd 5 april 2025). Horeca en toerisme tellen over het algemeen niet mee.',
          },
        },
        {
          '@type': 'Question',
          name: 'Wat als ik mijn loonstroken voor de 88-dagenregel ben kwijtgeraakt?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Vraag ze op bij je werkgever: werkgevers zijn wettelijk verplicht loonregistraties 7 jaar te bewaren. Lukt dat niet, dan kun je via Fair Work om werkgeversgegevens vragen of de ATO benaderen voor superannuation-registraties als tweede bewijs.',
          },
        },
        {
          '@type': 'Question',
          name: 'Telt rampenherstelwerk overal in Australië mee voor de 88-dagenregel?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Nee. Het moet in een aangewezen regionaal postcodegebied zijn, ook voor de rampenherstel-categorie die per 5 april 2025 is toegevoegd. Het DHA publiceert de erkende gebieden op zijn website.',
          },
        },
        {
          '@type': 'Question',
          name: 'Hoeveel dagen specified work zijn nodig voor het derde Working Holiday visum?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Voor het derde Working Holiday visum (jaar 3) zijn 179 dagen specified work vereist tijdens je tweede visumsperiode, in dezelfde erkende sectoren en regionale postcodegebieden als de 88-dagenregel.',
          },
        },
      ],
    },
  ],
}
const DHA_URL = 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/specified-work'
const POSTCODE_URL = 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/specified-work'

// Verified sector list from DHA (as of April 2026)
const sectors = [
  ['Plant- en dierteelt', 'Fruit plukken, groenten oogsten, melkveebedrijven, landbouw, veruit de meest voorkomende categorie voor WHV-houders.'],
  ['Visserij en parelduiken', 'Commerciële visserij op open zee, parelteelt.'],
  ['Bosbouw en houtkap', 'Boomplantage-werk, boomkap, houtverwerking.'],
  ['Mijnbouw', 'Ondergrondse en open-cast mijnbouw in aangewezen regio\'s.'],
  ['Bouw (regionaal)', 'Constructiewerk in aangewezen postcodegebieden buiten de grote steden.'],
  ['Herstelwerk na rampen', 'Toegevoegd op 5 april 2025: werk gericht op herstel na overstromingen, branden of andere erkende rampen.'],
]

const sidebar = (
  <div className="space-y-6 text-sm">
    {/* Quick facts */}
    <div>
      <div className="text-[11px] font-semibold uppercase tracking-widest text-slate mb-3">Kernfeiten</div>
      <div className="divide-y divide-sand border-t border-b border-sand">
        {[
          ['Vereist voor', 'Visum verlenging jaar 2 (en jaar 3)'],
          ['Minimumdagen', '88 dagen (≈ 3 maanden)'],
          ['Werksoort', 'Specified work, regionaal gebied'],
          ['Minimumloon', SOT.minimumloon.uurloon + ' / uur'],
          ['Super', SOT.minimumloon.superRate + ' bovenop loon'],
          ['Rampenherstel', 'Erkend per 5 april 2025'],
        ].map(([k, v]) => (
          <div key={k} className="py-2.5 flex gap-3">
            <span className="text-slate w-28 shrink-0">{k}</span>
            <span className="text-ink font-medium">{v}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Postcode check */}
    <div className="border-t border-sand pt-5">
      <div className="text-[11px] font-semibold uppercase tracking-widest text-slate mb-3">Controleer je locatie</div>
      <p className="text-ink/70 leading-relaxed mb-3">
        Of een specifieke werklocatie telt, hangt af van de postcode. DHA beheert de officiële lijst, controleer vóór je begint.
      </p>
      <a
        href={POSTCODE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-xs font-medium text-forest border border-forest/30 px-3 py-2 rounded-full hover:bg-forest hover:text-bone transition-colors no-underline"
      >
        Postcodes controleren: DHA →
      </a>
    </div>

    {/* Gerelateerde pagina's */}
    <div className="border-t border-sand pt-5">
      <div className="text-[11px] font-semibold uppercase tracking-widest text-slate mb-3">Gerelateerd</div>
      <ul className="space-y-2">
        {[
          ['/visum', 'Working Holiday visum'],
          ['/kosten', 'Wat kost een jaar echt?'],
          ['/werk', 'Werk vinden in Australië'],
          ['/loon', 'Loon & belastingen'],
        ].map(([path, label]) => (
          <li key={path}>
            <Link to={path} className="text-forest hover:text-ember transition-colors no-underline">
              → {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </div>
)

export default function AchtentachtigDagen() {
  return (
    <>
      <Helmet>
        <title>De 88-dagenregel uitgelegd: Working Holiday visum jaar 2 en jaar 3 | Aussiestart</title>
        <meta
          name="description"
          content="Alles over de 88-dagenregel voor het Working Holiday visum subclass 417: welk werk telt als specified work, welke postcodes gelden, hoe je bewijs bewaart en de wet over onderbetaling."
        />
        <meta property="og:title" content="De 88-dagenregel: Working Holiday visum jaar 2 en jaar 3" />
        <meta property="og:description" content="Welk werk telt, welke postcodes gelden, hoe je bewijs bewaart, en de nieuwe rampenherstel-categorie per april 2025." />
        <meta property="og:type" content="article" />
      </Helmet>
      <JsonLd data={achtenTachtigSchema} />

      {/* Page header */}
      <div className="border-b border-sand bg-bone">
        <div className="container-wide py-10">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-ember mb-3">Officiële gids</div>
          <h1 className="font-serif text-4xl sm:text-5xl text-forest leading-tight max-w-2xl">
            De 88-dagenregel
          </h1>
          <p className="mt-4 text-ink/70 max-w-prose leading-relaxed">
            Hoe je in aanmerking komt voor visum jaar 2 (en jaar 3) via regional specified work, en hoe je jezelf beschermt tegen veelgemaakte fouten.
          </p>
          <div className="mt-5">
            <Link
              to="/88-dagen-checker"
              className="inline-flex items-center gap-2 bg-forest text-bone text-sm font-medium px-5 py-2.5 rounded-full hover:bg-forest/85 transition-colors no-underline"
            >
              Controleer jouw postcode + werk →
            </Link>
          </div>
        </div>
      </div>

      <ArticleLayout aside={sidebar}>

        <SourceStrip
          source="Department of Home Affairs: Specified Work"
          url={DHA_URL}
          checked={gechecktOp(LAST_CHECKED)}
          type="officiële overheidsbron"
        />

        {/* Wat is de 88-dagenregel */}
        <h2>Wat is de 88-dagenregel?</h2>
        <p>
          Met een Working Holiday visum (subclass 417) mag je één jaar in Australië verblijven.
          Wil je dat jaar verlengen met een tweede (en eventueel derde) jaar, dan moet je
          aantonen dat je minimaal <strong>88 dagen</strong> gewerkt hebt in een erkende sector
          (<em>specified work</em>) in een aangewezen regionale regio (<em>regional area</em>).
        </p>
        <p>
          Die 88 dagen hoeven niet aaneengesloten te zijn. Ze mogen worden opgebouwd bij
          meerdere werkgevers, in meerdere sectoren, verspreid over je visumduur,
          zolang elk gewerkte dag voldoet aan beide voorwaarden: juiste sector <em>en</em> juiste postcode.
        </p>

        <MarginNote type="warn">
          <strong>Let op:</strong> Niet alle regionale banen tellen. Een horecajob in een kleine stad
          die wél buiten de grote steden ligt, maar niet in de aangewezen postcodegebieden valt,
          telt <em>niet</em> mee. Controleer de postcode van je werkgever vóór je begint.
        </MarginNote>

        {/* Sectoren */}
        <h2>Welk werk telt?</h2>
        <p>
          DHA hanteert een gesloten lijst van <em>specified work</em>-categorieën.
          Alleen werk dat in één van deze sectoren valt, komt in aanmerking:
        </p>

        <div className="not-prose my-6 divide-y divide-sand border-t border-b border-sand">
          {sectors.map(([sector, toelichting]) => (
            <div key={sector} className="py-4">
              <div className="font-medium text-forest text-sm mb-1">{sector}</div>
              <div className="text-ink/75 text-sm leading-relaxed">{toelichting}</div>
            </div>
          ))}
        </div>

        <MarginNote type="note">
          De rampenherstel-categorie is op <strong>5 april 2025</strong> toegevoegd door DHA.
          Of een specifiek herstelproject erkend is, moet je verifiëren via de DHA-website of
          de werkgever: niet alle bouwwerk na een ramp valt automatisch in deze categorie.
        </MarginNote>

        {/* Regionale gebieden */}
        <h2>Wat is een "regionaal gebied"?</h2>
        <p>
          DHA definieert regionale gebieden aan de hand van postcodes. De volgende gebieden
          tellen <strong>niet</strong> als regionaal en komen dus <em>niet</em> in aanmerking:
        </p>
        <ul>
          <li>Greater Sydney (inclusief voorsteden)</li>
          <li>Greater Melbourne</li>
          <li>Greater Brisbane</li>
          <li>Greater Perth</li>
          <li>Gold Coast</li>
          <li>Canberra / Australian Capital Territory</li>
        </ul>
        <p>
          Heel Tasmanië, het Northern Territory en South Australia tellen volledig als regionaal gebied,
          ook de steden daarbinnen (Hobart, Darwin, Adelaide), mits het werk in een erkende sector is.
        </p>

        <MarginNote type="warn">
          <strong>Postcode controleren is verplicht.</strong> De officiële DHA postcodelijst is de
          enige betrouwbare bron. Vraag je toekomstige werkgever om de postcode van de exacte werklocatie
          en controleer die op{' '}
          <a href={POSTCODE_URL} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-ember">
            immi.homeaffairs.gov.au
          </a>{' '}
          vóór je begint.
        </MarginNote>

        {/* Wat telt als een dag */}
        <h2>Wat telt als een "dag"?</h2>
        <p>
          Een dag telt als je op die dag gewerkte uren hebt voor een erkende werkgever in een erkende sector
          en regio. Er is geen minimumaantal uren per dag vastgelegd door DHA, maar je werkgever moet
          de dag wel kunnen aantonen via loonstroken of een werkgeversverklaring.
        </p>
        <p>
          Dagen waarop je niet werkt (weekenden, ziektedagen, vrije dagen) tellen niet mee,
          ook al ben je in de regio. Alleen gewerkte dagen tellen.
        </p>

        <FactsTable
          rows={[
            ['Telt mee', 'Gewerkte dag bij erkende werkgever, correct sector + postcode'],
            ['Telt niet mee', 'Vrije dag, ziektedag, onbetaald verlof'],
            ['Aaneengesloten?', 'Niet verplicht, mag verspreid over meerdere werkgevers'],
            ['Urenminimum per dag?', 'Niet vastgelegd door DHA, maar loonstrook vereist als bewijs'],
          ]}
        />

        {/* Bewijs bewaren */}
        <h2>Bewijs bewaren: dit heb je nodig</h2>
        <p>
          Bij je aanvraag voor het tweede visum moet je bewijsmateriaal uploaden.
          Bewaar de volgende documenten voor <em>elke</em> werkgever:
        </p>

        <div className="not-prose my-6">
          <ol className="space-y-4 list-none pl-0">
            {[
              ['1', 'Loonstroken', 'Alle payslips, inclusief naam werkgever, ABN, werklocatie en betaaldatum. Bewaar zowel papier als digitaal (screenshot of PDF).'],
              ['2', 'Werkgeversverklaring', 'Een ondertekend document (Form 1263 of vrije brief) waarop staat: de werksoort, de locatie (inclusief postcode), het aantal gewerkte dagen en de naam van de werkgever.'],
              ['3', 'Bankafschriften', 'Betalingen die overeenkomen met je loonstroken, als extra bewijslaag. DHA vraagt er soms om als er twijfel is.'],
              ['4', 'Contract of werkovereenkomst', 'Bewaar het origineel of een kopie. Vermeldt idealiter de sector en werklocatie.'],
            ].map(([n, titel, tekst]) => (
              <li key={n} className="flex gap-4">
                <span className="shrink-0 w-7 h-7 rounded-full bg-forest text-bone text-xs font-semibold flex items-center justify-center mt-0.5">
                  {n}
                </span>
                <div>
                  <div className="font-medium text-forest text-sm mb-0.5">{titel}</div>
                  <div className="text-ink/75 text-sm leading-relaxed">{tekst}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <MarginNote type="tip">
          Upload loonstroken meteen naar een cloudopslag (Google Drive, iCloud) nadat je ze ontvangt.
          Papier gaat verloren op reis, een digitale backup kost nul moeite en scheelt stress bij de aanvraag.
        </MarginNote>

        {/* Onderbetaling */}
        <h2>Onderbetaling: wet aangescherpt per 1 januari 2025</h2>
        <p>
          Onderbetaling van werknemers (waaronder WHV-houders) is per 1 januari 2025 een <strong>strafrechtelijk misdrijf</strong> in Australië.
          De Fair Work Legislation Amendment (Closing Loopholes) Act maakt intentionele loonroof strafbaar
          met boetes en gevangenisstraf voor werkgevers.
        </p>
        <p>
          Wat dit voor jou betekent:
        </p>
        <ul>
          <li>Je hebt recht op minimaal <strong>{SOT.minimumloon.uurloon} per uur</strong> (nationaal minimumloon, geldig vanaf {SOT.minimumloon.geldigVanaf}).</li>
          <li>Casual-toeslag: <strong>{SOT.minimumloon.casualLoon} per uur</strong> (inclusief 25% casual loading).</li>
          <li>Bovenop je loon heeft je werkgever superannuation-afdracht verplicht: <strong>{SOT.minimumloon.superRate}</strong> van je brutoloon.</li>
          <li>Meld onderbetaling bij de Fair Work Ombudsman, ook anoniem mogelijk.</li>
        </ul>

        <MarginNote type="warn">
          Werkgevers die je "cash in hand" betalen zonder loonstrook, of die vragen om in ruil voor onderdak minder dan minimumloon te accepteren, zijn in overtreding van de Fair Work Act.
          Bewaar bewijs en meld het via{' '}
          <a href="https://www.fairwork.gov.au/about-us/contact-us/anonymous-report" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-ember">
            fairwork.gov.au
          </a>.
        </MarginNote>

        {/* Superannuation / DASP */}
        <h2>Superannuation: je kunt het terugkrijgen</h2>
        <p>
          Elke werkgever in Australië is verplicht om <strong>{SOT.minimumloon.superRate}</strong> van je brutoloon
          af te dragen aan een superannuation-fonds (Australisch pensioen). Als WHV-houder bouw je dit op,
          maar je ontvangt het niet automatisch.
        </p>
        <p>
          Wanneer je Australië permanent verlaat en je visum vervallen is of wordt geannuleerd,
          kun je je gespaarde super terugvragen via de <strong>DASP</strong> (Departing Australia
          Superannuation Payment). Belasting wordt ingehouden bij de uitkering (doorgaans 65%),
          maar het resterende bedrag is voor jou.
        </p>

        <FactsTable
          rows={[
            ['Wat is DASP?', 'Departing Australia Superannuation Payment: terugvordering na vertrek'],
            ['Wanneer aanvragen?', 'Nadat je Australië hebt verlaten en je visum is verlopen/geannuleerd'],
            ['Belastinginhouding', 'Doorgaans 65% voor WHV-houders (Working Holiday Maker tax)'],
            ['Hoe aanvragen?', 'Via de ATO DASP-portal: ato.gov.au/dasp'],
            ['Bron', 'Australian Taxation Office'],
          ]}
        />

        {/* FAQ */}
        <h2>Veelgestelde vragen</h2>

        <FAQ q="Mag ik de 88 dagen spreiden over meerdere werkgevers?">
          Ja. Je mag de 88 dagen bij meerdere werkgevers opbouwen, in meerdere regio's,
          en zelfs in meerdere erkende sectoren, zolang elke dag voldoet aan sector + postcode.
          Bewaar per werkgever een volledige set bewijsdocumenten.
        </FAQ>

        <FAQ q="Tellen weekenddagen mee als ik op een boerderij woon maar niet werk?">
          Nee. Alleen gewerkte dagen tellen. Als je op het terrein woont maar op zaterdag
          geen uren maakt, telt die dag niet. Controleer je loonstroken: die zijn leidend.
        </FAQ>

        <FAQ q="Mijn werkgever wil me minder betalen dan minimumloon in ruil voor gratis wonen. Mag dat?">
          Nee. Huisvesting kan door de werkgever worden aangeboden en in rekening gebracht,
          maar je nettoloon mag daarna <em>niet</em> onder het minimumloon uitkomen.
          Werkgevers die dit constructiegebruiken zijn in overtreding van de Fair Work Act.
          Meld het bij de Fair Work Ombudsman.
        </FAQ>

        <FAQ q="Kan ik in Adelaide of Darwin de 88 dagen halen?">
          Ja. South Australia en het Northern Territory tellen volledig als regionaal gebied,
          ook de steden (Adelaide, Darwin). Werk in een erkende sector in die steden telt mee,
          controleer wel de specifieke werksoort.
        </FAQ>

        <FAQ q="Wat als ik mijn loonstroken ben kwijtgeraakt?">
          Vraag ze op bij je werkgever: werkgevers zijn wettelijk verplicht loonregistraties
          7 jaar te bewaren. Lukt dat niet, dan kun je via Fair Work om werkgeversgegevens vragen
          of de ATO benaderen voor superannuation-registraties als tweede bewijs.
        </FAQ>

        <FAQ q="Telt rampenherstelwerk overal in Australië?">
          Nee. Het moet in een aangewezen regionaal postcodegebied zijn, ook voor de
          rampenherstel-categorie die per 5 april 2025 is toegevoegd. DHA publiceert
          de erkende gebieden op zijn website.
        </FAQ>

        <LastChecked
          date={gechecktOp(LAST_CHECKED)}
          source="Department of Home Affairs"
          sourceUrl={DHA_URL}
        />
      </ArticleLayout>

      <PolaroidStrip
        eyebrow="Regionaal Australië"
        title="Wat je tegenkomt buiten de grote steden"
        items={[
          { src: '/img/foto/australie-alpacas-outback-farmwork.jpeg', alt: 'Alpacas in outback paddock, farmwork Australië' },
          { src: '/img/foto/australie-kangaroos-camping-lodge.jpeg', alt: 'Kangaroos voor een camping lodge bij schemering' },
          { src: '/img/foto/australie-koala-bos-gevonden.jpeg', alt: 'Koala gevonden in bosgrond, Australië' },
          { src: '/img/foto/rainbow-beach-queensland-gekleurde-trappen.jpeg', alt: 'Gekleurde trappen bij Rainbow Beach Queensland' },
          { src: '/img/foto/fraser-island-scheepswrak-maheno.jpeg', alt: 'Maheno scheepswrak op Fraser Island strand' },
          { src: '/img/foto/australie-kaketoe-wit-geel.jpeg', alt: 'Witte kaketoe met gele kuif op een hek in Australië' },
        ]}
      />

      {/* Startkit CTA */}
      <section className="container-wide pb-6">
        <div className="border border-sand rounded-xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 sm:items-center justify-between bg-bone">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-ember mb-2">Aussiestart Startkit</div>
            <div className="font-serif text-xl text-forest mb-1">Inclusief de 88-dagen bewijs-checklist</div>
            <p className="text-sm text-ink/65 max-w-sm">
              Wat je per werkgever bewaart, welk formulier je nodig hebt en hoe je postcode controleert,
              uitgewerkt in een invulklare checklist. Plus budgetplanner, CV-templates en meer.
            </p>
          </div>
          <Link
            to="/startkit"
            className="shrink-0 inline-flex items-center gap-2 bg-forest text-bone text-sm font-medium px-5 py-2.5 rounded-full hover:bg-forest/85 transition-colors no-underline whitespace-nowrap"
          >
            Bekijk de Startkit →
          </Link>
        </div>
      </section>

      {/* Email capture buiten de ArticleLayout — volle breedte */}
      <section className="container-wide pb-16">
        <EmailCapture
          headline="De 88-dagencheck in je inbox"
          subline="Gratis checklist: bewijs bewaren, postcode controleren, super terugkrijgen, alles wat je nodig hebt voor een probleemloze visumaanvraag jaar 2."
        />
      </section>
    </>
  )
}
