import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import { Callout, FAQ, FactsTable, ArticleLayout } from '../components/Article.jsx'
import SourceLink from '../components/SourceLink.jsx'
import PolaroidStrip from '../components/PolaroidStrip.jsx'

const routes = [
  {
    slug: 'hospitality',
    name: 'Hospitality',
    sub: 'Cafe, bar, restaurant, hotel',
    rate: 'AUD 28-35/uur casual met loading',
    speed: '1-3 weken',
    where: 'Sydney CBD, Melbourne CBD, alle toeristische steden',
    pros: [
      'Snelste route naar inkomen voor wie net is aangekomen',
      'Veel weekend- en avond-shifts beschikbaar (= penalty rates, dus hoger uurloon)',
      'Cash-fooien gangbaar (5-15% van rekening)',
      'Geen ervaring vereist voor entry-level (runner, dishpig, barista-trainee)',
    ],
    cons: [
      'Eerste sollicitaties vaak persoonlijk binnenlopen, niet via Seek',
      'Veel concurrentie van andere backpackers in piek-toeristensteden',
      'Sluitingsuren kunnen laat zijn (00:00-02:00)',
    ],
    where_to_look: [
      { name: 'Seek',           href: 'https://www.seek.com.au/' },
      { name: 'Indeed Australia', href: 'https://au.indeed.com/' },
      { name: 'Persoonlijk CV langsbrengen', href: null },
      { name: 'Backpacker Job Board', href: 'https://www.backpackerjobboard.com.au/' },
    ],
  },
  {
    slug: 'farmwork',
    name: 'Farmwork',
    sub: 'Fruit picking, vee, packing, 88-dagen',
    rate: 'AUD 25-30/uur óf piecework',
    speed: '1-2 weken in seizoen, soms direct',
    where: 'Bundaberg, Mildura, Tully, Shepparton, Gatton, Stanthorpe',
    pros: [
      'Telt voor 88-dagen-regel om 2e WHV te krijgen',
      'Werk vinden in seizoen is makkelijk',
      'Werk + accommodatie samen via working hostels',
      'Veel sociale interactie met andere backpackers',
    ],
    cons: [
      'Onderbetaling komt voor, vooral bij piecework. Houd je uren bij en check je payslip',
      'Fysiek zwaar, vaak in extreme hitte of kou',
      'Inkomen schommelt: regen = geen werk = geen loon',
      'Specifieke postcode-eis, één verkeerde locatie en je 88 dagen tellen niet',
    ],
    where_to_look: [
      { name: 'Backpacker Job Board (specifiek farm)', href: 'https://www.backpackerjobboard.com.au/' },
      { name: 'Working Holiday Australia', href: 'https://www.workingholidayaustralia.com.au/' },
      { name: 'Working Hostels (direct boeken)', href: null },
      { name: 'Harvest Trail (officiële DHA-info)', href: 'https://harvesttrail.gov.au/' },
    ],
  },
  {
    slug: 'retail',
    name: 'Retail en kantoor',
    sub: 'Winkels, supermarkten, callcenters, admin',
    rate: 'AUD 25-32/uur casual',
    speed: '2-4 weken',
    where: 'Alle steden, vooral CBD-shopping districts',
    pros: [
      'Stabiele uren, weekenden vrij',
      'Geen avond- of nachtshifts nodig',
      'Goede ervaring voor CV thuis (Engelstalige werkomgeving)',
    ],
    cons: [
      'Lager uurloon dan hospitality (geen casual loading op rustige uren)',
      'Vaak vereist je 4+ weken commitment per shift-rooster',
      'Pak en kantoorkleding vereist',
    ],
    where_to_look: [
      { name: 'Seek',           href: 'https://www.seek.com.au/' },
      { name: 'Indeed Australia', href: 'https://au.indeed.com/' },
      { name: 'LinkedIn AU',    href: 'https://www.linkedin.com/jobs/search/?location=Australia' },
      { name: 'Uitzendbureaus (Hays, Adecco, Hudson)', href: null },
    ],
  },
  {
    slug: 'bouw',
    name: 'Bouw',
    sub: 'Vereist White Card (online cursus, AUD 60)',
    rate: 'AUD 30-45/uur casual',
    speed: '1-3 weken na White Card',
    where: 'Steden met groei: Sydney, Melbourne, Brisbane, Perth',
    pros: [
      'Hoog uurloon, vooral met specialisatie (lassen, elektriciteit: AUD 50+)',
      'Veel weekend- en overuren mogelijk',
      'Teams hebben vaak NL-talige vakgenoten',
    ],
    cons: [
      'Vereist White Card-cursus vooraf (online, AUD 50-80)',
      'Fysiek zwaar, vroege starttijden (06:00-07:00)',
      'Bij regen vaak geen werk',
      'Sommige cao\'s vereisen Australian apprentice-status, wat WHM\'s niet hebben',
    ],
    where_to_look: [
      { name: 'Seek (zoek "labourer" of "construction")', href: 'https://www.seek.com.au/' },
      { name: 'Hays Construction',  href: 'https://www.hays.com.au/sectors/construction-and-trades' },
      { name: 'Persoonlijk binnenlopen op bouwplaats', href: null },
    ],
  },
  {
    slug: 'mining',
    name: 'Mining en regional',
    sub: 'Fly-in-fly-out, schoonmaken, kitchen hand op site',
    rate: 'AUD 30-50/uur, soms hoger',
    speed: '2-6 weken (interview-traject)',
    where: 'WA (Pilbara), QLD (centraal), NT, regional SA',
    pros: [
      'Hoogste tarieven van alle backpacker-banen',
      'Veel uren mogelijk (12-14u/dag tijdens swing)',
      'Telt voor 88-dagen-regel',
      'Accommodatie en eten meestal door werkgever betaald',
    ],
    cons: [
      'Lange tijd weg van vrienden en steden',
      'Vereist vaak medische test, drug-test, soms ervaring',
      'Mentaal zwaar: kleine gemeenschappen, lange dagen',
      'Niet altijd entry-level, hospo-ervaring helpt',
    ],
    where_to_look: [
      { name: 'SeekMining',     href: 'https://www.seek.com.au/jobs/in-mining' },
      { name: 'iMINCO',         href: 'https://www.iminco.net/' },
      { name: 'Workforce Mining', href: null },
      { name: 'Recruiters (RPS, Workpac)', href: null },
    ],
  },
  {
    slug: 'au-pair',
    name: 'Au pair',
    sub: 'Kost en inwoning bij gezin',
    rate: 'AUD 200-350/wk + kost en inwoning',
    speed: '2-4 weken (matching)',
    where: 'Voornamelijk grotere steden en suburbs',
    pros: [
      'Gratis woonruimte en eten, dus netto besparing hoog',
      'Cultuurervaring, wonen bij Australische familie',
      'Geen werk-zoek-stress eenmaal je gematcht bent',
    ],
    cons: [
      'Lager geldelijk inkomen dan andere routes',
      'Lange werkdagen + weekenden in het huis',
      'Privé-leven beperkt, je woont met je werkgever',
      'Niet voor iedereen geschikt',
    ],
    where_to_look: [
      { name: 'AuPairWorld',    href: 'https://www.aupairworld.com/' },
      { name: 'AIFS Au Pair',   href: 'https://www.aupairaustralia.com/' },
      { name: 'Smart Au Pair',  href: 'https://www.smartaupairs.com/' },
    ],
  },
  {
    slug: 'online',
    name: 'Online of remote',
    sub: 'Freelance, eigen werk, online verkoop',
    rate: 'Variabel, mediaan AUD 30-60/uur',
    speed: 'Eigen tempo',
    where: 'Overal met wifi',
    pros: [
      'Niet gebonden aan stad of werkgever',
      'Inkomen niet afhankelijk van Australische arbeidsmarkt',
      'Goed te combineren met reizen',
    ],
    cons: [
      'Telt niet voor 88-dagen-regel (je moet in AU werken voor specified-work)',
      'Belasting-situatie complexer (Nederland vs AU, dubbele aangifte mogelijk)',
      'Niet voor iedereen, vereist bestaande klantenkring of skills',
    ],
    where_to_look: [
      { name: 'Upwork',         href: 'https://www.upwork.com/' },
      { name: 'Fiverr',          href: 'https://www.fiverr.com/' },
      { name: 'LinkedIn',       href: 'https://www.linkedin.com/jobs/' },
      { name: 'Eigen netwerk + Nederlandse klanten behouden', href: null },
    ],
  },
]

export default function Werk() {
  return (
    <>
      <Helmet>
        <title>Werk vinden in Australië, 7 routes vergeleken · Aussiestart</title>
        <meta name="description" content="Hospitality, farmwork, retail, bouw, mining, au pair en online werk vergeleken voor Working Holiday Makers. Wat verdient wat, wie zoekt wie, en welke werkgevers je beter mijdt." />
      </Helmet>
      <PageHeader
        eyebrow="Werk · Routes"
        title="Werk vinden in Australië, 7 routes vergeleken"
        intro="Hospo, farmwork, retail, bouw, mining, au pair, online. Wat verdient wat, wie zoekt wie, en welke werkgevers je beter mijdt."
        lastChecked="29 april 2026"
        source="Seek + Fair Work Ombudsman + ervaringen NL backpackers"
      />

      <ArticleLayout aside={<WerkAside />}>
        <p>
          Eenmaal in Australië heb je vaak binnen 2-4 weken werk. Dat lukt sneller als je weet welke route bij
          jou past, waar je moet zoeken, en welke valkuilen er zijn. Hieronder de zeven gangbare routes voor
          Working Holiday Makers.
        </p>

        <Callout kind="info" title="Eerst dit op orde">
          Voor je serieus solliciteert: <Link to="/tax-file-number">TFN aanvragen</Link>,{' '}
          <Link to="/banking">bankrekening openen</Link>, eerste hostel-week regelen via{' '}
          <Link to="/hostels">de hostels-gids</Link>. Met die drie op orde kun je op je eerste werkdag betaald
          worden zonder gedoe.
        </Callout>

        <h2>De korte versie</h2>
        <FactsTable rows={[
          ['Snelst aan werk', 'Hospitality (1-3 weken)'],
          ['Hoogste uurloon', 'Mining (AUD 30-50)'],
          ['Voor 88 dagen', 'Farmwork of regional mining'],
          ['Laagste drempel', 'Hospitality of farm-piecework'],
          ['Stabielst', 'Retail of kantoor'],
          ['Meest reizen-vriendelijk', 'Online/freelance'],
        ]} />

        <h2>De zeven routes in detail</h2>
        {routes.map((r) => <RouteCard key={r.slug} route={r} />)}

        <h2>Sollicitatie-tips voor Australië</h2>
        <ul>
          <li>
            <strong>CV is anders dan in NL.</strong> Eén pagina, geen pasfoto, geen geboortedatum, geen
            BSN-equivalent. Wel: visum-status (417 met einddatum) en beschikbaarheid bovenaan.
          </li>
          <li>
            <strong>Beschikbaarheid noemen.</strong> Werkgevers vragen bijna altijd hoeveel maanden je nog hebt.
            Wees eerlijk, dat scheelt afgewezen worden voor lange-termijn-contracten.
          </li>
          <li>
            <strong>Persoonlijk langslopen werkt.</strong> Vooral hospo en bouw: een uitgeprint CV met je
            telefoonnummer afgeven scheelt 80% van de online-aanvragen.
          </li>
          <li>
            <strong>Referenties zijn belangrijk.</strong> Houd contact met je eerste Australische werkgever, ze
            zijn referentie #2 voor de volgende.
          </li>
          <li>
            <strong>Vraag elke werkgever of ze WHM-employer zijn.</strong> Niet-geregistreerde werkgevers
            houden hogere belasting in. Zie <Link to="/loon">de loon-pagina</Link>.
          </li>
        </ul>

        <h2>Waar je extra alert moet zijn</h2>
        <Callout kind="warn" title="Onderbetaling, vooral in farmwork en hospo">
          Sinds januari 2025 is opzettelijke onderbetaling in Australië een misdrijf met boetes tot AUD 7,8
          miljoen. Toch komt het nog voor, vooral bij piecework op farms en kleine restaurants. Houd je uren
          bij in een eigen app, controleer je payslip, en meld bij Fair Work Ombudsman (
          <SourceLink href="https://www.fairwork.gov.au/">fairwork.gov.au</SourceLink> of 13 13 94).
        </Callout>
        <Callout kind="warn" title="Working hostels en farmwork-scams">
          Sommige working hostels rekenen extra fees voor "garantie-werkplek". Legitieme working hostels
          rekenen geen plaatsingsfee, alleen kamerhuur. Bij twijfel vraag rond bij andere gasten, niet aan de
          eigenaar.
        </Callout>
        <Callout kind="warn" title="Cash-betaling zonder payslip">
          Werkgever wil cash betalen zonder papieren? Belastingontduiking, geen super, geen bewijs voor jouw
          aangifte. Vraag altijd om payslip, ook bij cash-uitbetaling.
        </Callout>

        <h2>Veelgestelde vragen</h2>
        <FAQ q="Hoe lang duurt het voor ik werk vind?">
          Hospitality 1-3 weken, retail 2-4, bouw 1-3 (na White Card), mining 2-6 (interview-traject). In
          piek-seizoen (oktober-maart op de oostkust) overal sneller.
        </FAQ>
        <FAQ q="Mag ik bij meerdere werkgevers tegelijk werken?">
          Ja. De 6-maanden-limiet geldt per werkgever, niet totaal. Veel WHM\'s combineren een doordeweekse
          baan met weekend-shifts elders.
        </FAQ>
        <FAQ q="Heb ik Engels nodig?">
          Voor hospo en bouw: middelmatig Engels is voldoende. Voor retail, kantoor en mining: vloeiend Engels
          is praktisch een must. Au pair: kinderen leren je snel beter Engels.
        </FAQ>
        <FAQ q="Wat als ik geen werk vind?">
          Eerst andere stad proberen (regional is vaak makkelijker dan Sydney). Daarna sector wisselen. Daarna
          farmwork: in seizoen vrijwel altijd werk te vinden. Zie ook{' '}
          <Link to="/kosten">de kosten-pagina</Link> voor hoeveel buffer je nodig hebt.
        </FAQ>
        <FAQ q="Tel ik 88 dagen als ik in een Sydney-cafe werk?">
          Nee. Specified work voor de 88-dagen-regel is alleen in goedgekeurde regio\'s buiten de grote steden,
          en in specifieke sectoren (landbouw, vee, mijnbouw, regionale bouw, ramp-herstel). Volledige info op
          de <Link to="/visum">visum-pagina</Link>.
        </FAQ>

        <h2>Bronnen</h2>
        <ul className="text-sm space-y-1.5">
          <li><SourceLink href="https://www.seek.com.au/">Seek, grootste vacature-platform van Australië</SourceLink></li>
          <li><SourceLink href="https://au.indeed.com/">Indeed Australia</SourceLink></li>
          <li><SourceLink href="https://www.backpackerjobboard.com.au/">Backpacker Job Board</SourceLink></li>
          <li><SourceLink href="https://harvesttrail.gov.au/">Harvest Trail, officiële DHA-info voor seizoenswerk</SourceLink></li>
          <li><SourceLink href="https://www.fairwork.gov.au/">Fair Work Ombudsman, voor minimumloon en meldingen</SourceLink></li>
          <li><SourceLink href="https://www.fairwork.gov.au/find-help-for/visa-holders-migrants">Fair Work, rechten van visa holders</SourceLink></li>
        </ul>
      </ArticleLayout>

      <PolaroidStrip
        eyebrow="Werken in Australië"
        title="Wat je verdient als je werkt waar anderen vakantie vieren"
        items={[
          { src: '/img/foto/australie-melkweg-sterrenhemel.jpeg', alt: 'Melkweg boven het Australische outback, sterrenhemel' },
          { src: '/img/foto/australie-melkweg-nachtlucht-outback.jpeg', alt: 'Nachtlucht met melkweg en bomen, outback Australië' },
          { src: '/img/foto/cairns-millaa-millaa-waterval-regenwoud.jpeg', alt: 'Millaa Millaa waterval in het Cairns regenwoud, Queensland' },
          { src: '/img/foto/australie-zeilboten-zonsondergang-eilanden.jpeg', alt: 'Zeilboten bij zonsondergang voor eilanden, Australië' },
        ]}
      />
    </>
  )
}

function RouteCard({ route: r }) {
  return (
    <article className="not-prose my-6 border border-sand bg-bone rounded-2xl p-5 sm:p-6">
      <header className="mb-4">
        <div className="flex items-baseline justify-between flex-wrap gap-2">
          <h3 className="font-serif text-2xl text-forest">{r.name}</h3>
          <span className="text-xs text-slate">{r.sub}</span>
        </div>
        <dl className="grid sm:grid-cols-3 gap-x-6 gap-y-1.5 text-sm mt-3">
          <Pair k="Tarief" v={r.rate} />
          <Pair k="Tijd tot 1e baan" v={r.speed} />
          <Pair k="Waar" v={r.where} />
        </dl>
      </header>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <div className="text-xs uppercase tracking-wider text-forest mb-1.5">Voor</div>
          <ul className="space-y-1 text-sm text-ink/85 list-disc pl-5">
            {r.pros.map((p, i) => <li key={i}>{p}</li>)}
          </ul>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-ember mb-1.5">Tegen</div>
          <ul className="space-y-1 text-sm text-ink/85 list-disc pl-5">
            {r.cons.map((c, i) => <li key={i}>{c}</li>)}
          </ul>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-sand">
        <div className="text-xs uppercase tracking-wider text-slate mb-2">Waar zoeken</div>
        <ul className="text-sm space-y-1">
          {r.where_to_look.map((s) => (
            <li key={s.name}>
              {s.href ? <SourceLink href={s.href}>{s.name}</SourceLink> : <span className="text-ink/85">{s.name}</span>}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}

function Pair({ k, v }) {
  return (
    <>
      <dt className="text-slate">{k}</dt>
      <dd className="text-ink/90 sm:col-span-2">{v}</dd>
    </>
  )
}

function WerkAside() {
  return (
    <div className="bg-forest text-bone rounded-2xl p-5">
      <div className="text-xs uppercase tracking-wider text-ochre mb-2">Snel-route</div>
      <p className="text-sm leading-relaxed mb-3">
        Net aangekomen, snel inkomen nodig? Hospitality is je beste optie: 1-3 weken tot eerste payslip,
        AUD 28-35/uur met casual loading.
      </p>
      <a href="#hospitality" className="text-ochre underline underline-offset-4 text-sm">Lees Hospitality →</a>
      <hr className="my-5 border-bone/20" />
      <div className="text-xs uppercase tracking-wider text-ochre mb-2">Voor 88 dagen</div>
      <ul className="space-y-2 text-sm">
        <li><a href="#farmwork" className="hover:text-ochre underline underline-offset-4">Farmwork →</a></li>
        <li><a href="#mining" className="hover:text-ochre underline underline-offset-4">Regional mining →</a></li>
        <li><Link to="/visum" className="hover:text-ochre underline underline-offset-4">88-dagen-regel uitleg →</Link></li>
      </ul>
      <hr className="my-5 border-bone/20" />
      <div className="text-xs uppercase tracking-wider text-ochre mb-2">Verder lezen</div>
      <ul className="space-y-2 text-sm">
        <li><Link to="/loon" className="hover:text-ochre underline underline-offset-4">Loon en belasting →</Link></li>
        <li><Link to="/tax-file-number" className="hover:text-ochre underline underline-offset-4">TFN aanvragen →</Link></li>
      </ul>
    </div>
  )
}
