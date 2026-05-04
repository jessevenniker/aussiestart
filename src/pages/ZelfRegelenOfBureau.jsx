import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import { FAQ, ArticleLayout, Callout } from '../components/Article.jsx'
import JsonLd from '../components/JsonLd.jsx'

const SITE_URL = 'https://australiestart.nl'

// ─── Vergelijkingstabel: wat doet een bureau, wat doe jij zelf ───────────────
const TAKEN = [
  {
    taak: 'Visum aanvragen',
    bureau: { label: 'Zij doen het', detail: 'Via hetzelfde ImmiAccount-formulier als jij. Geen kortere wachttijd, geen hogere kans op goedkeuring.' },
    zelf:   { label: 'Jij doet het', detail: '30 minuten online via immi.homeaffairs.gov.au. Kosten: AUD 670 (circa €410). Geen tussenpartij nodig.' },
    winnaar: 'zelf',
  },
  {
    taak: 'Vlucht boeken',
    bureau: { label: 'Zij boeken het', detail: 'Via dezelfde Skyscanner of Google Flights als jij. Geen speciale tarieven of betere deals.' },
    zelf:   { label: 'Jij boekt het', detail: 'Kies je eigen datum, vliegmaatschappij en tussenstop. Skyscanner, Google Flights, direct bij KLM/Emirates.' },
    winnaar: 'zelf',
  },
  {
    taak: 'Eerste verblijf regelen',
    bureau: { label: 'Zij boeken het', detail: 'Vaak een eigen partnernetwerk van hostels, niet altijd de goedkoopste of beste optie.' },
    zelf:   { label: 'Jij boekt het', detail: 'Hostelworld, Booking.com, YHA. Je kiest locatie, budget en stijl. Geen commissie-belang.' },
    winnaar: 'zelf',
  },
  {
    taak: 'Budgetplanning',
    bureau: { label: 'Globale schatting', detail: 'Vaak mondelinge toelichting of een vage range. Geen cijfers die je kunt aanpassen aan jouw scenario.' },
    zelf:   { label: 'Eigen calculator', detail: 'De Aussiestart budgetplanner werkt met reële cijfers op maandniveau, drie scenario\'s, wisselkoers.' },
    winnaar: 'zelf',
  },
  {
    taak: 'Australisch CV',
    bureau: { label: 'Geen of generiek', detail: 'De meeste bureaus geven geen CV-hulp. Die die het wel doen, geven een algemeen template.' },
    zelf:   { label: '3 invulklare templates', detail: 'Hospitality, farmwork, retail/admin. Australisch format. Werkt bij Australische werkgevers.' },
    winnaar: 'zelf',
  },
  {
    taak: '88-dagenregel uitleg',
    bureau: { label: 'Algemene info', detail: 'Bureau legt de regel uit, maar helpt je niet met bewijs verzamelen of postcode-controle.' },
    zelf:   { label: 'Bewijs-checklist', detail: 'Per werkgever bijhouden wat je nodig hebt: payslips, contracten, postcode, TFN. Inclusief DHA-bronlinks.' },
    winnaar: 'zelf',
  },
  {
    taak: 'Scam-bescherming',
    bureau: { label: 'Beperkt', detail: 'Bureau is zelf ook een commerciële partij. Geen belang bij het wijzen op hun eigen branche-praktijken.' },
    zelf:   { label: 'Rode-vlag-lijsten', detail: 'Sharehouse-scams, nep-werkgevers, cash-zwart werk, onderbetaling: Aussiestart behandelt alle risico\'s expliciet.' },
    winnaar: 'zelf',
  },
  {
    taak: 'Prijs',
    bureau: { label: '€549 tot €2.050', detail: 'Afhankelijk van pakket. Sommige bureaus rekenen ook maandelijkse "support"-fees.' },
    zelf:   { label: 'AUD 670 + €19,95', detail: 'Visumkosten (AUD 670) plus de Startkit (€19,95). Alles zit erin. Geen maandelijkse kosten.' },
    winnaar: 'zelf',
  },
]

const BUREAU_VOORDELEN = [
  {
    situatie: 'Je spreekt geen Engels en bent bang voor formulieren',
    advies: 'Een bureau kan dan zinvol zijn. Maar: ImmiAccount heeft een volledige Nederlandse interface en de DHA-helplijn is bereikbaar in meerdere talen.',
  },
  {
    situatie: 'Je wilt iemand die alles voor je regelt en je niet zelf wil nadenken',
    advies: 'Eerlijk antwoord: bureaus beloven dit maar voeren het maar half uit. De baan, het huis, de dagelijkse keuzes, die regel je toch zelf ter plaatse.',
  },
  {
    situatie: 'Je vertrouwt online formulieren niet',
    advies: 'Begrijpelijk, maar de ImmiAccount-portal is een officieel overheidsportaal. Bureau-aanvragen gaan via exact dezelfde portal, alleen met een tussenpersoon ertussen.',
  },
]

const faqItems = [
  {
    v: 'Is het Working Holiday visum zelf aanvragen moeilijk?',
    a: 'Nee. Het visum subclass 417 is een online aanvraag via immi.homeaffairs.gov.au. Je vult een formulier in, betaalt AUD 670 met creditcard, en krijgt doorgaans binnen 24-72 uur je visum per e-mail. Een bureau doet precies hetzelfde, maar rekent €200-500 extra.',
  },
  {
    v: 'Wat als er iets misgaat en ik geen bureau heb?',
    a: 'De Department of Home Affairs heeft een gratis helplijn en uitgebreide FAQ. De meeste problemen (vergeten bijlage, fout adres) zijn eenvoudig opgelost via ImmiAccount. Complicaties die specialistische juridische hulp vereisen zijn uitzonderlijk en vragen sowieso om een geregistreerde migratie-agent, niet een commercieel bureau.',
  },
  {
    v: 'Biedt een bureau betere kansen op goedkeuring?',
    a: 'Nee. Het 417-visum is een geautomatiseerde aanvraag zonder persoonlijk interview. De beoordeling is puntensysteem. Een bureau heeft geen speciale relatie met de DHA en kan de uitkomst niet beïnvloeden.',
  },
  {
    v: 'Ik ken niemand in Australië. Is een bureau dan niet handig voor het netwerk?',
    a: 'Bureaus leveren je aan een netwerk van eigen partners, niet aan het brede Australische arbeidscircuit. In de praktijk vinden de meeste backpackers werk via Seek, Indeed, Gumtree, Facebook-groepen en hostel-prikborden, niet via bureau-partners.',
  },
  {
    v: 'Zijn er situaties waar een bureau echt meerwaarde biedt?',
    a: 'Ja: als je een specifiek visum wilt dat moeilijker is dan een 417, zoals een Skilled Worker-visum, of als je te maken krijgt met een visa-weigering. Dat zijn situaties voor een officieel geregistreerde Registered Migration Agent (RMA), niet voor een werkvisum-bureau.',
  },
]

const bureauSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': `${SITE_URL}/zelf-regelen-of-bureau#article`,
      headline: 'Working Holiday Australië zelf regelen of via een bureau?',
      description: 'Eerlijke vergelijking: wat doet een bureau voor €549-2.050, en wat kun je zelf doen voor AUD 670 visumkosten plus €19,95 Startkit. Taken, prijzen en valkuilen.',
      url: `${SITE_URL}/zelf-regelen-of-bureau`,
      inLanguage: 'nl-NL',
      dateModified: '2026-05-04',
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
      '@id': `${SITE_URL}/zelf-regelen-of-bureau#faq`,
      mainEntity: faqItems.map(item => ({
        '@type': 'Question',
        name: item.v,
        acceptedAnswer: { '@type': 'Answer', text: item.a },
      })),
    },
  ],
}

export default function ZelfRegelenOfBureau() {
  return (
    <>
      <Helmet>
        <title>Working Holiday Australië: zelf regelen of via een bureau? · Aussiestart</title>
        <meta
          name="description"
          content="Eerlijke vergelijking: wat doet een bureau voor €549-2.050, en wat kun je zelf doen voor AUD 670 visumkosten. Taken, prijzen, valkuilen en wanneer een bureau wél zinvol is."
        />
        <meta property="og:title" content="WHV Australië: zelf regelen of via een bureau?" />
        <meta property="og:description" content="Bureaus rekenen €549-2.050 voor wat je in 30 minuten zelf kunt. Eerlijke vergelijking van taken, kosten en valkuilen." />
        <meta property="og:type" content="article" />
      </Helmet>
      <JsonLd data={bureauSchema} />

      <PageHeader
        eyebrow="Oriëntatie"
        title="Working Holiday Australië zelf regelen of via een bureau?"
        intro="Bureaus verkopen pakketten van €549 tot €2.050. Hieronder staat precies wat ze doen voor dat geld, wat je zelf kunt, en in welke situaties een bureau wél zin heeft."
        lastChecked="4 mei 2026"
        source="ImmiAccount, DHA, eigen vergelijking vijf Nederlandse bureaus"
      />

      <ArticleLayout aside={<BureauAside />}>

        <p>
          Als je zoekt naar "working holiday australie bureau" of "australie werkvisum regelen" stuit je op
          een handvol bedrijven die pakketten aanbieden. Ze beloven ontzorging, begeleiding en een vliegende
          start. De vraag is: waarvoor betaal je precies, en is het het waard?
        </p>

        <h2>Wat een bureau doet, stap voor stap</h2>
        <p>
          De vijf grootste Nederlandse Working Holiday-bureaus bieden min of meer dezelfde diensten. Hieronder
          per taak wat zij leveren versus wat je zelf kunt doen.
        </p>

        {/* Vergelijkingstabel */}
        <div className="not-prose my-8 overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-forest text-left">
                <th className="py-3 pr-4 font-semibold text-forest w-[160px]">Taak</th>
                <th className="py-3 px-4 font-semibold text-ink/70 w-[200px]">Via bureau</th>
                <th className="py-3 pl-4 font-semibold text-forest w-[200px]">Zelf regelen</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-sand">
              {TAKEN.map((t) => (
                <tr key={t.taak}>
                  <td className="py-3 pr-4 font-medium text-ink align-top">{t.taak}</td>
                  <td className="py-3 px-4 text-ink/70 align-top">
                    <span className="block text-xs font-semibold text-slate mb-1">{t.bureau.label}</span>
                    {t.bureau.detail}
                  </td>
                  <td className="py-3 pl-4 align-top">
                    <span className={`block text-xs font-semibold mb-1 ${t.winnaar === 'zelf' ? 'text-forest' : 'text-slate'}`}>
                      {t.zelf.label}
                    </span>
                    {t.zelf.detail}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Waar betaal je dan voor?</h2>
        <p>
          Bureaus vragen €549 tot €2.050 voor een pakket. Op basis van bovenstaande tabel betaal je
          feitelijk voor drie dingen:
        </p>
        <ol>
          <li>
            <strong>Comfort en ontzorging:</strong> iemand neemt de beslissingen van je over.
            Of beter: geeft je het gevoel dat ze dat doen. In de praktijk vul jij nog steeds het
            ImmiAccount-formulier in, regel je zelf je vlucht en huis, en los je zelf problemen op.
          </li>
          <li>
            <strong>Informatie die ook gratis beschikbaar is:</strong> de DHA-website, Fair Work Ombudsman
            en de ATO bevatten alle informatie die een bureau je geeft. In het Nederlands, deels.
          </li>
          <li>
            <strong>Geruststelling:</strong> het gevoel dat er iemand achter je staat. Dat gevoel is
            niet niets. Maar het is ook niet €2.000 waard.
          </li>
        </ol>

        <Callout kind="warn" title="Bureau-model werkt op commissie">
          Bureaus verdienen niet alleen aan jou als klant. Ze krijgen ook verwijzingsvergoedingen van
          partner-hostels, partner-werkgevers en partner-verzekeraars. Dat betekent dat de aanbevelingen die
          je krijgt niet altijd de beste optie zijn, maar de optie die de meeste commissie oplevert.
        </Callout>

        <h2>Wanneer is een bureau wél zinvol?</h2>
        <p>
          Eerlijk antwoord: zelden voor het subclass 417-visum. Maar er zijn situaties waarbij een
          professionele begeleider meerwaarde heeft.
        </p>

        <div className="not-prose my-6 divide-y divide-sand border-t border-b border-sand">
          {BUREAU_VOORDELEN.map((item) => (
            <div key={item.situatie} className="py-4">
              <p className="text-sm font-semibold text-ink mb-1">{item.situatie}</p>
              <p className="text-sm text-ink/70">{item.advies}</p>
            </div>
          ))}
        </div>

        <Callout kind="info" title="RMA vs bureau: een groot verschil">
          Een Registered Migration Agent (RMA) is een officieel geaccrediteerde adviseur, geregistreerd bij
          de Migration Agents Registration Authority (MARA). Ze hebben een wettelijke zorgplicht en
          aansprakelijkheid. Een werkvisum-bureau is een commercieel bedrijf zonder regulering. Als je
          écht professionele hulp nodig hebt, zoek dan een RMA, niet een bureau.
        </Callout>

        <h2>De echte prijs van "zelf regelen"</h2>
        <p>
          Het visum aanvragen kost AUD 670 (circa €410 bij de huidige wisselkoers). Dat is het.
          Geen extra verplichte uitgaven voor de aanvraag zelf.
        </p>
        <p>
          Voor de rest kun je de Aussiestart Startkit gebruiken: budgetplanner, drie Australische
          CV-templates, twee checklists, sharehouse-vergelijker en bronnenlijst voor €19,95. In totaal
          betaal je voor het regelen van je Working Holiday dus €430 aan essentiële kosten, tegenover
          €549 tot €2.050 bij een bureau.
        </p>

        <div className="not-prose my-6 bg-bone border border-sand rounded-xl p-6">
          <div className="text-xs font-semibold uppercase tracking-wider text-ember mb-4">Kostenverhouding</div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="border border-sand rounded-lg p-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate mb-2">Via bureau</div>
              <div className="font-serif text-3xl text-ink mb-1">€549–2.050</div>
              <div className="text-xs text-ink/60">Pakketprijs, exclusief visumkosten, vluchten en verblijf</div>
            </div>
            <div className="border border-forest rounded-lg p-4 bg-forest/5">
              <div className="text-xs font-semibold uppercase tracking-wider text-forest mb-2">Zelf regelen</div>
              <div className="font-serif text-3xl text-forest mb-1">€430</div>
              <div className="text-xs text-ink/60">Visum AUD 670 (±€410) + Startkit €19,95. Alles inbegrepen.</div>
            </div>
          </div>
        </div>

        <h2>Veelgestelde vragen</h2>
        {faqItems.map((item) => (
          <FAQ key={item.v} q={item.v}>{item.a}</FAQ>
        ))}

        <h2>Conclusie</h2>
        <p>
          Voor het Working Holiday visum subclass 417 is een bureau voor de meeste Nederlanders geen
          zinvolle uitgave. De aanvraag is online, geautomatiseerd en laagdrempelig. De taken die bureaus
          "uitvoeren" doe je in de praktijk alsnog zelf, ze faciliteren hooguit.
        </p>
        <p>
          Besteed het gespaarde geld liever aan: een maand extra reizen (AUD 2.000-3.000), een goede
          reisverzekering, of een buffer voor als werk even tegenvalt.
        </p>

        <div className="not-prose mt-8 flex flex-col sm:flex-row gap-4">
          <Link
            to="/visum"
            className="flex-1 text-center border border-forest text-forest font-medium text-sm px-5 py-3 rounded-full hover:bg-forest hover:text-bone transition-colors no-underline"
          >
            Visum zelf aanvragen →
          </Link>
          <Link
            to="/startkit"
            className="flex-1 text-center bg-forest text-bone font-medium text-sm px-5 py-3 rounded-full hover:bg-forest/80 transition-colors no-underline"
          >
            Bekijk de Startkit (€19,95) →
          </Link>
        </div>

      </ArticleLayout>
    </>
  )
}

function BureauAside() {
  return (
    <div className="space-y-6">
      <div className="border border-sand rounded-xl p-5">
        <div className="text-xs font-semibold uppercase tracking-wider text-ember mb-3">Snel overzicht</div>
        <ul className="space-y-2.5 text-sm text-ink/80">
          <li className="flex gap-2"><span className="text-forest font-bold mt-0.5">✓</span> Visum zelf aanvragen: 30 min, AUD 670</li>
          <li className="flex gap-2"><span className="text-forest font-bold mt-0.5">✓</span> Geen speciale kennis vereist</li>
          <li className="flex gap-2"><span className="text-forest font-bold mt-0.5">✓</span> Bureaus hebben geen hogere slagingsrate</li>
          <li className="flex gap-2"><span className="text-slate font-bold mt-0.5">!</span> RMA wel zinvol bij complexe visums</li>
        </ul>
      </div>

      <div className="border border-sand rounded-xl p-5">
        <div className="text-xs font-semibold uppercase tracking-wider text-slate mb-3">Bureauprijzen 2026</div>
        <ul className="space-y-2 text-sm text-ink/70">
          <li className="flex justify-between"><span>SWAP Work &amp; Travel</span><span className="font-medium text-ink">€549</span></li>
          <li className="flex justify-between"><span>Down Under</span><span className="font-medium text-ink">€749</span></li>
          <li className="flex justify-between"><span>CCUSA</span><span className="font-medium text-ink">€799</span></li>
          <li className="flex justify-between"><span>Adventure Works</span><span className="font-medium text-ink">€999</span></li>
          <li className="flex justify-between"><span>Premium pakketten</span><span className="font-medium text-ink">tot €2.050</span></li>
        </ul>
        <p className="text-xs text-slate mt-3">Prijzen exclusief vluchten, verblijf en visumkosten.</p>
      </div>

      <div className="border border-forest/20 bg-forest/5 rounded-xl p-5">
        <div className="text-xs font-semibold uppercase tracking-wider text-forest mb-2">Alternatief</div>
        <p className="text-sm text-ink/80 mb-3">
          Alles wat je nodig hebt, voor een fractie van een bureau-pakket.
        </p>
        <Link
          to="/startkit"
          className="block text-center text-sm font-medium bg-forest text-bone px-4 py-2.5 rounded-full hover:bg-forest/80 transition-colors no-underline"
        >
          Startkit: €19,95 →
        </Link>
      </div>
    </div>
  )
}
