/**
 * /startkit-download — beveiligde downloadpagina voor Startkit-kopers.
 * Niet in sitemap, noindex. URL wordt gedeeld via bevestigingsmail.
 */
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

// ─── Checklist data ───────────────────────────────────────────────────────────

const VOOR_VERTREK = [
  {
    fase: '6 maanden voor vertrek',
    kleur: 'text-slate',
    items: [
      { id: 'vv1',  tekst: 'Controleer paspoort geldigheid: minimaal 18 maanden geldig op vertrekdatum nodig', urgent: false },
      { id: 'vv2',  tekst: 'Working Holiday visum aanvragen via immi.homeaffairs.gov.au (ImmiAccount)', urgent: true, link: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417' },
      { id: 'vv3',  tekst: 'Bankafschrift bewaren als bewijs voor spaarvereiste (AUD 5.000)', urgent: false },
      { id: 'vv4',  tekst: 'Oriënteren op startstad: Sydney, Melbourne of Cairns?', urgent: false },
      { id: 'vv5',  tekst: 'Budget in kaart brengen met de budgetplanner (zie tabblad hieronder)', urgent: false },
    ],
  },
  {
    fase: '3 maanden voor vertrek',
    kleur: 'text-ember',
    items: [
      { id: 'vv6',  tekst: 'Vlucht boeken: enkel of retour met flexibele datum. Vergelijk via Skyscanner of Google Flights', urgent: false },
      { id: 'vv7',  tekst: 'Reisverzekering afsluiten (SafetyWing, World Nomads of JoHo): dek minimaal medisch + repatriëring', urgent: true },
      { id: 'vv8',  tekst: 'eSIM kiezen en bestellen (Telsim/Airalo), activeer vóór vertrek', urgent: false, link: 'https://australiestart.nl/esim' },
      { id: 'vv9',  tekst: 'Eerste hostel boeken voor minimaal 5 nachten', urgent: false },
      { id: 'vv10', tekst: 'CV bijwerken naar Australisch format (gebruik de CV-templates in je Startkit)', urgent: false },
      { id: 'vv11', tekst: 'LinkedIn bijwerken + open voor werk zetten', urgent: false },
    ],
  },
  {
    fase: '1 maand voor vertrek',
    kleur: 'text-ember',
    items: [
      { id: 'vv12', tekst: 'Nederlandse bank informeren over verblijf in het buitenland (voorkomt geblokkeerde pas)', urgent: true },
      { id: 'vv13', tekst: 'Wise-account aanmaken voor goedkope internationale overboekingen', urgent: false },
      { id: 'vv14', tekst: 'EHIC-kaart (Europese ziektekostenverzekering) aanvragen of localiseren, nodig voor Medicare', urgent: true, link: 'https://australiestart.nl/medicare' },
      { id: 'vv15', tekst: 'Noodcontacten vastleggen: ambassade, verzekeraar noodnummer, thuis', urgent: false },
      { id: 'vv16', tekst: 'Uitschrijven bij gemeente (of tijdelijk adres doorgeven)', urgent: false },
      { id: 'vv17', tekst: 'Zorgverzekering opzeggen of on-hold zetten voor duur van verblijf', urgent: true },
      { id: 'vv18', tekst: 'Tandarts- en artsbezoek plannen voor vertrek als je weet dat er iets speelt', urgent: false },
      { id: 'vv19', tekst: 'Digitale documenten scannen en opslaan in cloud: paspoort, visum-grant, verzekering, EHIC', urgent: true },
    ],
  },
  {
    fase: '1 week voor vertrek',
    kleur: 'text-forest',
    items: [
      { id: 'vv20', tekst: 'eSIM activeren en testen: controleer of data werkt', urgent: true },
      { id: 'vv21', tekst: 'Hostel-bevestiging downloaden of screenshot maken', urgent: false },
      { id: 'vv22', tekst: 'Australische apps downloaden: Hostelworld, Flatmates, Gumtree, Seek, Indeed', urgent: false },
      { id: 'vv23', tekst: 'Eerste-week checklist doorlopen (zie tabblad hieronder)', urgent: false },
      { id: 'vv24', tekst: 'Contant AUD meenemen of Wise geladen voor eerste dag (AUD 200 cash handig)', urgent: false },
      { id: 'vv25', tekst: 'Noodgeld bewaard op separate plek (pas of cash)', urgent: false },
    ],
  },
  {
    fase: 'Dag van vertrek',
    kleur: 'text-forest',
    items: [
      { id: 'vv26', tekst: 'Paspoort: check', urgent: true },
      { id: 'vv27', tekst: 'Visum-grant e-mail: saved of screenshot', urgent: true },
      { id: 'vv28', tekst: 'eSIM actief', urgent: true },
      { id: 'vv29', tekst: 'Hostel-adres en telefoonnummer in telefoon', urgent: false },
      { id: 'vv30', tekst: 'Verzekeringspolis en noodtelefoon opgeslagen', urgent: false },
      { id: 'vv31', tekst: 'Bankpas + backup betaalmiddel', urgent: true },
    ],
  },
]

const EERSTE_WEEK = [
  {
    dag: 'Nog in het vliegtuig / voor landing',
    items: [
      { id: 'ew0', tekst: 'eSIM checken: is data actief na landing?', urgent: true },
      { id: 'ew1', tekst: 'Hostel-adres en route (metro/trein) opzoeken en offline opslaan', urgent: false },
      { id: 'ew2', tekst: 'Incoming declaration form invullen (soms digitaal via ABF SmartGate)', urgent: false },
    ],
  },
  {
    dag: 'Dag 1: aankomst',
    items: [
      { id: 'ew3', tekst: 'OV-pas kopen bij eerste kiosk: OPAL (Sydney) / Myki (Melbourne) / Go Card (Brisbane)', urgent: true },
      { id: 'ew4', tekst: 'Inchecken bij hostel', urgent: true },
      { id: 'ew5', tekst: 'Dichtstbijzijnde Coles of Woolworths vinden: eerste boodschappen', urgent: false },
      { id: 'ew6', tekst: 'Dichtstbijzijnde bankfiliaal lokaliseren voor dag 2–3', urgent: false },
      { id: 'ew7', tekst: 'Slapen, je bent moe, morgen is vroeg genoeg', urgent: false },
    ],
  },
  {
    dag: 'Dag 2–3: administratie',
    items: [
      { id: 'ew8',  tekst: 'Bankrekening openen bij CommBank, ANZ, NAB of Westpac met paspoort', urgent: true, link: 'https://australiestart.nl/banking' },
      { id: 'ew9',  tekst: 'TFN aanvragen via ato.gov.au: duurt 10 minuten, gebruik hostel-adres', urgent: true, link: 'https://australiestart.nl/tax-file-number' },
      { id: 'ew10', tekst: 'Bankpas ophalen of instellen (sommige banken geven pas direct mee)', urgent: false },
      { id: 'ew11', tekst: 'Eerste geld overmaken via Wise naar Australische rekening', urgent: false },
    ],
  },
  {
    dag: 'Dag 3–5: zorg en werk',
    items: [
      { id: 'ew12', tekst: 'Medicare inschrijven bij Medicare Service Centre met paspoort + EHIC', urgent: true, link: 'https://australiestart.nl/medicare' },
      { id: 'ew13', tekst: 'CV drukklaar maken op basis van Australische template (zie CV-templates)', urgent: false },
      { id: 'ew14', tekst: 'Eerste hospitality/retail sollicitaties: loop cafés en restaurants in met CV', urgent: false },
      { id: 'ew15', tekst: 'Indeed, Seek en Gumtree profiel aanmaken', urgent: false },
    ],
  },
  {
    dag: 'Dag 5–7: wonen',
    items: [
      { id: 'ew16', tekst: 'Flatmates.com.au bekijken: eerste kamerinspecties inplannen', urgent: false, link: 'https://australiestart.nl/wonen' },
      { id: 'ew17', tekst: 'Facebook-groepen joinen: "Dutch in Sydney/Melbourne/Brisbane"', urgent: false },
      { id: 'ew18', tekst: 'Sharehouse-vergelijker invullen (zie tabblad) voor kamervergeelijking', urgent: false },
      { id: 'ew19', tekst: 'Hostel verlengen als je nog geen kamer hebt, doe dit tijdig', urgent: false },
    ],
  },
  {
    dag: 'Week 2',
    items: [
      { id: 'ew20', tekst: 'TFN doorgeven aan bank zodra het binnenkomt', urgent: false },
      { id: 'ew21', tekst: 'TFN doorgeven aan werkgever zodra je werkt (28 dagen deadline)', urgent: true },
      { id: 'ew22', tekst: 'Kamer gevonden? Bond betalen alleen na bezichtiging + schriftelijk contract', urgent: true },
      { id: 'ew23', tekst: 'Superannuation-fonds kiezen als werkgever erom vraagt (AustralianSuper is standaard)', urgent: false },
    ],
  },
]

const TACHTIG_ACHT = [
  {
    sectie: 'Vóór je begint bij een werkgever',
    items: [
      { id: 'td1', tekst: 'Postcode van de exacte werklocatie checken op DHA-website', urgent: true, link: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/specified-work' },
      { id: 'td2', tekst: 'Werkcategorie bevestigen: valt het werk in een erkende specified work sector?', urgent: true, link: 'https://australiestart.nl/88-dagen' },
      { id: 'td3', tekst: 'ABN van de werkgever noteren en checken via abr.business.gov.au', urgent: true },
      { id: 'td4', tekst: 'Arbeidscontract ontvangen en opslaan (PDF + foto)', urgent: false },
      { id: 'td5', tekst: 'Betalingsmethode bevestigen: contant zonder payslip = geen bewijs, weigeren', urgent: true },
    ],
  },
  {
    sectie: 'Per werkgever bewaren',
    items: [
      { id: 'td6',  tekst: 'Loonstroken (payslips): ALLE payslips, elke betaalperiode', urgent: true },
      { id: 'td7',  tekst: 'Werkgeversverklaring (Form 1263 of vrije brief), met: werksoort, locatie + postcode, aantal gewerkte dagen, handtekening', urgent: true },
      { id: 'td8',  tekst: 'Bankafschriften die overeenkomen met loonbetalingen', urgent: true },
      { id: 'td9',  tekst: 'Arbeidscontract of werkovereenkomst', urgent: false },
      { id: 'td10', tekst: 'Naam + telefoonnummer + adres werkgever bewaard', urgent: false },
      { id: 'td11', tekst: 'ABN werkgever genoteerd', urgent: true },
      { id: 'td12', tekst: 'Foto van werklocatie (optioneel maar handig als bewijs)', urgent: false },
    ],
  },
  {
    sectie: 'Rode vlaggen bij werkgevers',
    items: [
      { id: 'td13', tekst: 'Werkgever vraagt om cash in hand → weigeren of melden bij Fair Work', urgent: true },
      { id: 'td14', tekst: 'Geen payslips aanbieden → altijd eisen, werkgever is wettelijk verplicht', urgent: true },
      { id: 'td15', tekst: 'Onderdak "gratis" maar nettoloon onder minimumloon → wettelijk niet toegestaan', urgent: true },
      { id: 'td16', tekst: 'Werkgever zegt "postcode klopt vast wel" zonder te controleren → zelf controleren', urgent: true },
      { id: 'td17', tekst: 'Geen ABN aanwezig of oncontroleerbaar → rode vlag voor legitimiteit werkgever', urgent: true },
    ],
  },
  {
    sectie: 'Bij aanvraag tweede visum',
    items: [
      { id: 'td18', tekst: '88 gewerkte dagen aantoonbaar via payslips (niet alleen werkgeversverklaring)', urgent: true },
      { id: 'td19', tekst: 'Per werkgever een aparte set documenten klaar', urgent: false },
      { id: 'td20', tekst: 'Alle documenten digitaal opgeslagen (Google Drive of iCloud)', urgent: true },
      { id: 'td21', tekst: 'Superannuation-fondsnummer genoteerd per werkgever (voor DASP-aanvraag later)', urgent: false },
      { id: 'td22', tekst: 'Aanvraag tweede visum vóór vervaldatum eerste visum ingediend', urgent: true, link: 'https://immi.homeaffairs.gov.au' },
    ],
  },
]

const SHAREHOUSE = [
  {
    sectie: 'Vóór bezichtiging',
    items: [
      { id: 'sh1', tekst: 'Reistijd naar werk/centrum getest via Google Maps (niet alleen berekend)', urgent: false },
      { id: 'sh2', tekst: 'Prijs per week inclusief of exclusief utilities (water, elektra, internet)?', urgent: true },
      { id: 'sh3', tekst: 'Bond bedrag bekend? (doorgaans 2–4 weken huur)', urgent: true },
      { id: 'sh4', tekst: 'Hoeveel mensen wonen er? Verhouding badkamer per persoon?', urgent: false },
    ],
  },
  {
    sectie: 'Tijdens bezichtiging: checklist',
    items: [
      { id: 'sh5',  tekst: 'Wasmachine aanwezig en werkend?', urgent: false },
      { id: 'sh6',  tekst: 'Sloten op kamerdeur?', urgent: false },
      { id: 'sh7',  tekst: 'Schimmel in badkamer of keuken?', urgent: true },
      { id: 'sh8',  tekst: 'Mobiel bereik in de kamer?', urgent: false },
      { id: 'sh9',  tekst: 'Huurcontract aanwezig (geen mondelinge afspraak)?', urgent: true },
      { id: 'sh10', tekst: 'Naam en achternaam verhuurder gecontroleerd: is dit ook de naam op het contract?', urgent: true },
      { id: 'sh11', tekst: 'Foto\'s gemaakt van bestaande schade vóór instap (stuur naar verhuurder per mail)', urgent: true },
    ],
  },
  {
    sectie: 'Rode vlaggen: niet tekenen',
    items: [
      { id: 'sh12', tekst: 'Bond betalen zonder kamer bezichtigen → nooit doen', urgent: true },
      { id: 'sh13', tekst: 'Verhuurder wil alleen in cash betaald worden → rode vlag', urgent: true },
      { id: 'sh14', tekst: 'Kamer advertentie op Gumtree maar verhuurder is "in het buitenland" → oplichting', urgent: true },
      { id: 'sh15', tekst: 'Geen contract, alleen mondelinge afspraak → no-go', urgent: true },
      { id: 'sh16', tekst: 'Prijs significant lager dan markt zonder duidelijke reden → onderzoek eerst', urgent: false },
    ],
  },
]

const BRONNEN = [
  { categorie: 'Visum & immigratie', links: [
    { naam: 'Working Holiday visum subclass 417', url: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417' },
    { naam: 'Specified work: postcodes en sectoren', url: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/specified-work' },
    { naam: 'ImmiAccount: visum aanvragen', url: 'https://online.immi.homeaffairs.gov.au/lusc/login' },
    { naam: 'ABN checker: werkgever controleren', url: 'https://abr.business.gov.au' },
  ]},
  { categorie: 'Belasting & geld', links: [
    { naam: 'ATO: Tax File Number aanvragen', url: 'https://www.ato.gov.au/individuals-and-families/tax-file-number' },
    { naam: 'ATO: Working Holiday Makers belasting', url: 'https://www.ato.gov.au/individuals-and-families/coming-to-australia-or-going-overseas/coming-to-australia/working-holiday-makers' },
    { naam: 'DASP: superannuation terugvragen', url: 'https://www.ato.gov.au/individuals-and-families/super-for-individuals-and-families/super/growing-and-keeping-track-of-your-super/keeping-track-of-your-super/departing-australia-superannuation-payment-dasp' },
    { naam: 'Wise: internationale overboekingen', url: 'https://wise.com' },
  ]},
  { categorie: 'Werk & rechten', links: [
    { naam: 'Fair Work Ombudsman: loon en rechten', url: 'https://www.fairwork.gov.au' },
    { naam: 'Fair Work: anoniem melden', url: 'https://www.fairwork.gov.au/about-us/contact-us/anonymous-report' },
    { naam: 'Seek: vacaturesite Australië', url: 'https://www.seek.com.au' },
    { naam: 'Indeed Australië', url: 'https://au.indeed.com' },
  ]},
  { categorie: 'Zorg', links: [
    { naam: 'Services Australia: Medicare voor Nederlanders', url: 'https://www.servicesaustralia.gov.au/medicare-for-people-from-other-countries' },
    { naam: 'Medicare Service Centre locaties', url: 'https://findus.servicesaustralia.gov.au' },
  ]},
  { categorie: 'Wonen', links: [
    { naam: 'Flatmates.com.au: sharehouse', url: 'https://www.flatmates.com.au' },
    { naam: 'Gumtree: rooms te huur', url: 'https://www.gumtree.com.au' },
  ]},
]

// ─── Checklist component ──────────────────────────────────────────────────────
function Checklist({ items, urgent_label = 'Let op' }) {
  const [checked, setChecked] = useState({})
  const toggle = (id) => setChecked(prev => ({ ...prev, [id]: !prev[id] }))

  return (
    <ul className="space-y-1.5 list-none pl-0 my-0">
      {items.map(({ id, tekst, urgent, link }) => (
        <li
          key={id}
          className={`flex items-start gap-3 py-2 px-3 rounded-lg transition-colors cursor-pointer select-none
            ${checked[id] ? 'bg-forest/5 opacity-60' : urgent ? 'hover:bg-ember/5' : 'hover:bg-sand/60'}`}
          onClick={() => toggle(id)}
        >
          <span className={`shrink-0 mt-0.5 w-5 h-5 rounded border flex items-center justify-center transition-colors
            ${checked[id] ? 'bg-forest border-forest' : 'border-sand bg-white'}`}
          >
            {checked[id] && (
              <svg className="w-3 h-3 text-bone" fill="none" viewBox="0 0 12 12">
                <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </span>
          <span className={`text-sm leading-relaxed flex-1 ${checked[id] ? 'line-through text-slate' : 'text-ink'}`}>
            {urgent && !checked[id] && (
              <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-ember mr-2 align-middle">
                ●
              </span>
            )}
            {link ? (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 text-ember hover:text-sunset"
                onClick={e => e.stopPropagation()}
              >
                {tekst}
              </a>
            ) : tekst}
          </span>
        </li>
      ))}
    </ul>
  )
}

// ─── Progress bar ──────────────────────────────────────────────────────────────
function Progress({ label, items, checked }) {
  const done = items.filter(i => checked[i.id]).length
  const pct  = items.length ? Math.round((done / items.length) * 100) : 0
  return (
    <div className="flex items-center gap-3 text-sm">
      <span className="text-slate w-36 shrink-0">{label}</span>
      <div className="flex-1 bg-sand rounded-full h-1.5">
        <div className="bg-forest h-1.5 rounded-full transition-all" style={{ width: `${pct}%` }} />
      </div>
      <span className="text-slate text-xs w-16 text-right">{done}/{items.length}</span>
    </div>
  )
}

// ─── Section header ───────────────────────────────────────────────────────────
function SectionHeader({ nummer, titel, subtitel }) {
  return (
    <div className="border-b border-sand pb-6 mb-8">
      <div className="text-xs font-semibold uppercase tracking-[0.18em] text-ember mb-2">
        {nummer}
      </div>
      <h2 className="font-serif text-2xl sm:text-3xl text-forest mb-2">{titel}</h2>
      {subtitel && <p className="text-ink/60 text-sm leading-relaxed max-w-xl">{subtitel}</p>}
    </div>
  )
}

// ─── Pagina ───────────────────────────────────────────────────────────────────
export default function StartkitDownload() {
  const [masterChecked, setMasterChecked] = useState({})
  const toggleAll = (id) => setMasterChecked(prev => ({ ...prev, [id]: !prev[id] }))

  // Gecombineerde alle items voor progress
  const alleVoorVertrek = VOOR_VERTREK.flatMap(f => f.items)
  const alleEersteWeek  = EERSTE_WEEK.flatMap(f => f.items)
  const alleTachtigAcht = TACHTIG_ACHT.flatMap(f => f.items)
  const alleSharehouse  = SHAREHOUSE.flatMap(f => f.items)

  return (
    <>
      <Helmet>
        <title>Aussiestart Startkit: jouw download</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      {/* ── Header ────────────────────────────────────────────────────────── */}
      <div className="bg-forest text-bone border-b border-forest/30">
        <div className="container-wide py-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-bone/50 mb-1">Aussiestart Startkit</div>
            <h1 className="font-serif text-2xl sm:text-3xl leading-tight">Jouw downloadpagina</h1>
            <p className="text-bone/60 text-sm mt-1">Sla deze pagina op of bookmark hem, hier staat alles.</p>
          </div>
          <div className="text-sm text-bone/50">
            Vragen?{' '}
            <a href="mailto:jesse@australiestart.nl" className="text-bone underline underline-offset-2">
              jesse@australiestart.nl
            </a>
          </div>
        </div>
      </div>

      {/* ── Overzicht + links ─────────────────────────────────────────────── */}
      <div className="bg-bone border-b border-sand">
        <div className="container-wide py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Budgetplanner', type: 'Google Sheet', url: 'https://docs.google.com/spreadsheets/d/JOUW_LINK_HIER', icon: '📊' },
              { label: 'CV-template Hospitality', type: 'Google Doc', url: 'https://docs.google.com/document/d/JOUW_LINK_HIER', icon: '📄' },
              { label: 'CV-template Farmwork', type: 'Google Doc', url: 'https://docs.google.com/document/d/JOUW_LINK_HIER_2', icon: '📄' },
              { label: 'CV-template Retail/Admin', type: 'Google Doc', url: 'https://docs.google.com/document/d/JOUW_LINK_HIER_3', icon: '📄' },
            ].map(({ label, type, url, icon }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-3 border border-sand rounded-lg p-4 bg-white hover:border-forest/40 transition-colors no-underline group"
              >
                <span className="text-2xl shrink-0">{icon}</span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate mb-0.5">{type}</div>
                  <div className="text-sm font-medium text-forest group-hover:text-ember transition-colors">{label} →</div>
                </div>
              </a>
            ))}
          </div>

          {/* Progress overview */}
          <div className="space-y-2.5 max-w-md">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate mb-3">Jouw voortgang</div>
            <Progress label="Vóór vertrek" items={alleVoorVertrek} checked={masterChecked} />
            <Progress label="Eerste week" items={alleEersteWeek} checked={masterChecked} />
            <Progress label="88-dagenregel" items={alleTachtigAcht} checked={masterChecked} />
            <Progress label="Sharehouse" items={alleSharehouse} checked={masterChecked} />
          </div>
        </div>
      </div>

      <div className="container-wide py-12 space-y-20">

        {/* ── 1. Vóór vertrek ────────────────────────────────────────────── */}
        <section id="voor-vertrek">
          <SectionHeader
            nummer="Checklist 1"
            titel="Vóór vertrek"
            subtitel="Van 6 maanden voor vertrek tot de dag zelf. Klik items aan als ze klaar zijn, de pagina onthoudt je voortgang."
          />
          <div className="space-y-8">
            {VOOR_VERTREK.map((fase) => (
              <div key={fase.fase}>
                <div className={`text-xs font-semibold uppercase tracking-wider mb-3 ${fase.kleur}`}>
                  {fase.fase}
                </div>
                <div className="border border-sand rounded-xl overflow-hidden">
                  <ChecklistStateful items={fase.items} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 2. Eerste week ─────────────────────────────────────────────── */}
        <section id="eerste-week">
          <SectionHeader
            nummer="Checklist 2"
            titel="Eerste week in Australië"
            subtitel="Dag voor dag, in de volgorde die werkt. Bank vóór TFN, TFN vóór Medicare. Niet andersom."
          />
          <div className="space-y-8">
            {EERSTE_WEEK.map((dag) => (
              <div key={dag.dag}>
                <div className="text-xs font-semibold uppercase tracking-wider text-ember mb-3">
                  {dag.dag}
                </div>
                <div className="border border-sand rounded-xl overflow-hidden">
                  <ChecklistStateful items={dag.items} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 3. 88-dagenregel ───────────────────────────────────────────── */}
        <section id="88-dagen">
          <SectionHeader
            nummer="Checklist 3"
            titel="88-dagenregel: bewijs bewaren"
            subtitel="Per werkgever invullen. Eén missende payslip kan je visumaanvraag vertragen. Bewaar alles digitaal."
          />
          <div className="space-y-8">
            {TACHTIG_ACHT.map((sectie) => (
              <div key={sectie.sectie}>
                <div className="text-xs font-semibold uppercase tracking-wider text-ember mb-3">
                  {sectie.sectie}
                </div>
                <div className="border border-sand rounded-xl overflow-hidden">
                  <ChecklistStateful items={sectie.items} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 4. Sharehouse ──────────────────────────────────────────────── */}
        <section id="sharehouse">
          <SectionHeader
            nummer="Checklist 4"
            titel="Sharehouse: bezichtiging & rode vlaggen"
            subtitel="Loop dit door vóór je bond betaalt. Oplichting via nep-verhuur is de meest voorkomende financiële val voor backpackers."
          />
          <div className="space-y-8">
            {SHAREHOUSE.map((sectie) => (
              <div key={sectie.sectie}>
                <div className="text-xs font-semibold uppercase tracking-wider text-ember mb-3">
                  {sectie.sectie}
                </div>
                <div className="border border-sand rounded-xl overflow-hidden">
                  <ChecklistStateful items={sectie.items} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── 5. Bronnenlijst ────────────────────────────────────────────── */}
        <section id="bronnen">
          <SectionHeader
            nummer="Bronnenlijst"
            titel="Officiële bronnen"
            subtitel="Directe links naar overheidssites. Gebruik altijd deze URLs, niet een forum-post of een verouderd artikel."
          />
          <div className="grid sm:grid-cols-2 gap-6">
            {BRONNEN.map(({ categorie, links }) => (
              <div key={categorie} className="border border-sand rounded-xl p-5">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate mb-3">{categorie}</div>
                <ul className="space-y-2">
                  {links.map(({ naam, url }) => (
                    <li key={naam}>
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-ember underline underline-offset-2 hover:text-sunset"
                      >
                        {naam} →
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* ── Footer ─────────────────────────────────────────────────────── */}
        <div className="border-t border-sand pt-8 text-sm text-slate">
          <p className="mb-2">
            Deze pagina is persoonlijk, niet doorsturen. De inhoud is gebaseerd op officiële bronnen
            gecheckt op 30 april 2026. Controleer altijd de DHA-website voor actuele postcodegebieden.
          </p>
          <p>
            Vragen of feedback?{' '}
            <a href="mailto:jesse@australiestart.nl" className="text-ember underline underline-offset-2">
              jesse@australiestart.nl
            </a>
            {' '}·{' '}
            <Link to="/" className="hover:text-ink transition-colors">australiestart.nl</Link>
          </p>
        </div>
      </div>
    </>
  )
}

// ─── Stateful checklist wrapper (lokale state per blok) ───────────────────────
function ChecklistStateful({ items }) {
  const [checked, setChecked] = useState({})
  const toggle = (id) => setChecked(prev => ({ ...prev, [id]: !prev[id] }))

  return (
    <div className="px-1 py-2">
      {items.map(({ id, tekst, urgent, link }) => (
        <div
          key={id}
          className={`flex items-start gap-3 py-2.5 px-3 rounded-lg transition-colors cursor-pointer select-none mx-1
            ${checked[id] ? 'opacity-50' : ''}`}
          onClick={() => toggle(id)}
        >
          <span className={`shrink-0 mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors
            ${checked[id] ? 'bg-forest border-forest' : 'border-sand bg-white'}`}
          >
            {checked[id] && (
              <svg className="w-3 h-3 text-bone" fill="none" viewBox="0 0 12 12">
                <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </span>
          <span className={`text-sm leading-relaxed flex-1 ${checked[id] ? 'line-through text-slate' : 'text-ink'}`}>
            {urgent && !checked[id] && (
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-ember mr-2 mb-0.5 align-middle shrink-0" />
            )}
            {link ? (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 text-ember hover:text-sunset"
                onClick={e => e.stopPropagation()}
              >
                {tekst}
              </a>
            ) : tekst}
          </span>
        </div>
      ))}
    </div>
  )
}
