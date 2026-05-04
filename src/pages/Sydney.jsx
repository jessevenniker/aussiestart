import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import { ArticleLayout, Callout, FactsTable, FAQ } from '../components/Article.jsx'
import { viatorUrl, getyourguideUrl } from '../data/affiliates.js'
import PolaroidStrip from '../components/PolaroidStrip.jsx'

function ExtIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <path d="M3 9L9 3M9 3H4M9 3V8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const wijken = [
  {
    naam: 'Bondi Beach',
    type: 'Strand + uitgaan',
    huur: 'AUD 320-450/week',
    geschikt: 'Eerste weken, sociale scene, barista/hospo werk op Campbell Parade',
    watch: 'Duur, vol toeristen, niet handig als je werk zoekt buiten de beachstrip',
  },
  {
    naam: 'Newtown',
    type: 'Alternatief, studentenwijk',
    huur: 'AUD 250-360/week',
    geschikt: 'Langer verblijf, cafes, King Street heeft veel hospo-vacatures',
    watch: 'Minder strandsfeer, ouder huizenbestand met oudere badkamers',
  },
  {
    naam: 'Surry Hills',
    type: 'Hipster, F&B-hotspot',
    huur: 'AUD 290-420/week',
    geschikt: 'Barista/keuken werk, op loopafstand van CBD, goede restaurants',
    watch: 'Populair, dus scherp op aanbod reageren, Crown Street is druk',
  },
  {
    naam: 'Glebe / Ultimo',
    type: 'Budget inner city',
    huur: 'AUD 220-320/week',
    geschikt: 'Budget optie dichtbij CBD, goed ov, relaxter dan Newtown',
    watch: 'Minder opties voor werk direct in de wijk zelf',
  },
  {
    naam: 'Manly',
    type: 'Strand, rustiger',
    huur: 'AUD 280-390/week',
    geschikt: 'Surf, beach, lager toeristisch dan Bondi, Nordic walking afstand',
    watch: '35 min ferry naar CBD, of bus. Niet ideaal als je dagelijks naar het centrum moet',
  },
  {
    naam: 'Coogee',
    type: 'Strand, Bondi-alternatief',
    huur: 'AUD 270-380/week',
    geschikt: 'Rustiger dan Bondi, goede buurtcafe-cultuur, familiaire sfeer',
    watch: 'Minder goed ov dan Bondi, bus-afhankelijk',
  },
]

const tours = [
  {
    naam: 'BridgeClimb Sydney',
    label: 'Iconisch',
    prijs: 'AUD 174-388',
    duur: '3,5 uur',
    blurb: 'Beklim de Harbour Bridge. Je kiest zelf dag, schemer of nacht. Gids meegerekend, veiligheidsgear ook. Nachtklim is spectaculairder, dagklim goedkoper.',
    viatorPath: '/tours/Sydney/Sydney-BridgeClimb/d357-2015T42540/',
    gygPath: '/s/Sydney--Australia/ct/tours/?q=bridge+climb',
  },
  {
    naam: 'Opera House tour',
    label: 'Cultureel',
    prijs: 'AUD 40-65',
    duur: '1 uur',
    blurb: 'Backstage rondleiding door het Opera House. Audioguide beschikbaar in meerdere talen. Goed te combineren met lunch bij Circular Quay.',
    viatorPath: '/tours/Sydney/Sydney-Opera-House-Tours/d357-7088P19/',
    gygPath: '/s/Sydney--Australia/ct/tours/?q=opera+house',
  },
  {
    naam: 'Blue Mountains dagtrip',
    label: 'Natuur',
    prijs: 'AUD 80-160',
    duur: 'Hele dag',
    blurb: 'Three Sisters, Scenic World en het Jamison Valley. Vervoer vanuit Sydney inbegrepen. Combineerbaar met Featherdale Wildlife Park voor extra AUD 30-40.',
    viatorPath: '/tours/Sydney/Blue-Mountains-Day-Trip-from-Sydney/d357-15990P3/',
    gygPath: '/s/Sydney--Australia/ct/tours/?q=blue+mountains+day+trip',
  },
  {
    naam: 'Jervis Bay dagtrip',
    label: 'Strand',
    prijs: 'AUD 120-170',
    duur: 'Hele dag',
    blurb: 'Witste zand van Australie (officieel gemeten). Dolfijnen kijken in de baai is bijna gegarandeerd. 2,5 uur rijden vanaf Sydney, lekker in een kleine groep.',
    viatorPath: '/tours/Sydney/Jervis-Bay-Day-Trip-from-Sydney/d357-5490JBWSS/',
    gygPath: '/s/Sydney--Australia/ct/tours/?q=jervis+bay',
  },
]

const werkHotspots = [
  { buurt: 'CBD (George St, Pitt St)', sectoren: 'Retail, office support, hospitality hotels' },
  { buurt: 'Surry Hills / Darlinghurst', sectoren: 'Cafe, restaurant, keuken, bar' },
  { buurt: 'Bondi Beach / Campbell Pde', sectoren: 'Cafe, toeristisch retail, beach hire' },
  { buurt: 'Newtown (King St)', sectoren: 'Cafe, tweedehands, foodservice' },
  { buurt: 'Parramatta (west)', sectoren: 'Logistiek, bouw, schoonmaak, zorg' },
  { buurt: 'North Sydney', sectoren: 'Kantoor, finance, IT-contractwerk' },
]

export default function Sydney() {
  return (
    <>
      <Helmet>
        <title>Sydney voor Working Holiday, wijken, werk en kosten | Australiestart</title>
        <meta
          name="description"
          content="Praktische gids voor Sydney op je working holiday visum. Wijken vergelijken (Bondi, Newtown, Manly), OPAL vervoer, werk zoeken en de beste dagtrips."
        />
      </Helmet>

      <PageHeader
        eyebrow="Steden"
        title="Sydney op working holiday"
        intro="De meeste WHV-ers landen in Sydney. Welke wijk past bij jou, hoe werkt het OV en waar vind je werk. Zonder omwegen."
      />

      <figure className="container-wide pt-8 pb-4">
        <div className="aspect-[16/9] sm:aspect-[21/9] overflow-hidden rounded-2xl">
          <img
            src="/img/foto/sydney-opera-house-panorama-haven.jpg"
            alt="Sydney Opera House panorama met haven, gezien vanaf Circular Quay"
            className="w-full h-full object-cover"
          />
        </div>
        <figcaption className="text-xs text-slate mt-2 px-1">
          Sydney Opera House, Circular Quay. De meeste aankomende WHV-ers landen op Sydney Airport (SYD) en beginnen hier.
        </figcaption>
      </figure>

      <ArticleLayout aside={<SydneyAside />}>

        <h2>Van vliegveld naar stad</h2>
        <p>
          Sydney Airport (SYD, Kingsford Smith) ligt 8 km van het CBD. Drie opties:
        </p>
        <FactsTable rows={[
          ['AirportLink trein', 'AUD 19,84 naar Central Station, 13 min, met OPAL. Vereist OPAL-kaart of contactloos betalen.'],
          ['Bus 400', 'AUD ~4 met OPAL, rijdt via Mascot en Botany richting Bondi Junction. Langzamer, maar goedkoop.'],
          ['Privé-transfer (KiwiTaxi)', 'AUD 55-90 per rit naar inner city. Vaste prijs, chauffeur met naambordje.'],
        ]} />
        <Callout kind="info" title="OPAL kopen op de luchthaven">
          Internationale terminal heeft OPAL-automaten bij de uitgang van de aankomsthal. Gooi er AUD 20-30 op voor de eerste week.
          Betalen met contactloze creditcard of debitcard werkt ook op de gates.
        </Callout>

        <h2>Wijken</h2>
        <p>
          Sydney is groot. De wijk waar je woont bepaalt mede hoeveel je uitgeeft en hoe snel je werk vindt.
          Hieronder de zes wijken die WHV-ers het meest kiezen.
        </p>
        <div className="not-prose my-6 space-y-3">
          {wijken.map((w) => (
            <div key={w.naam} className="border border-sand rounded-xl p-5 bg-bone">
              <div className="flex flex-wrap gap-2 items-start justify-between mb-2">
                <h3 className="font-serif text-xl text-forest">{w.naam}</h3>
                <span className="text-xs bg-sand px-2.5 py-1 rounded-full text-slate shrink-0">{w.type}</span>
              </div>
              <div className="text-sm text-ink/80 space-y-1">
                <p><span className="text-slate">Huur:</span> {w.huur}</p>
                <p><span className="text-slate">Goed voor:</span> {w.geschikt}</p>
                <p><span className="text-slate">Let op:</span> {w.watch}</p>
              </div>
            </div>
          ))}
        </div>
        <p>
          Eerste week-hostel boek je het makkelijkst via <Link to="/hostels" className="text-ember underline underline-offset-2">de hostelgids</Link> of
          direct via de hostelsites. Kings Cross (net buiten CBD) en Newtown zijn populaire startpunten.
        </p>

        <h2>Vervoer met de OPAL-kaart</h2>
        <p>
          OPAL is de OV-chipkaart van Sydney. Werkt op trein, metro, bus, light rail en veerboot.
          Je koopt hem bij elke kiosk, supermarkt of bij AirportLink-automaten. Minimale top-up AUD 10.
        </p>
        <FactsTable rows={[
          ['Trein (kort, zone 1)', 'AUD ~3,60 off-peak, ~4,50 piek'],
          ['Bus (willekeurig traject)', 'AUD 2,36 - 4,72'],
          ['Ferry Circular Quay-Manly', 'AUD 9,07 (15 min fietspunt, 30+ min veer)'],
          ['Daglimiet (alle modaliteiten)', 'AUD 16,10 max per dag, daarna gratis'],
          ['Weeklimiet', 'Na 8 ritten zijn de rest van de week 50% korting'],
        ]} />
        <p>
          Google Maps werkt goed voor OV-routeplanning in Sydney. Kies "Transit" als vervoersmiddel,
          OPAL-tarieven worden automatisch getoond.
        </p>

        <h2>Werk zoeken in Sydney</h2>
        <p>
          Sydney heeft werk in alle sectoren, maar concurrentie in het CBD en de binnenstedelijke wijken is hoog.
          WHV-ers werken het meest in hospitality, retail en bouw. Westelijke suburbs (Parramatta, Liverpool)
          hebben meer logistiek en productiework.
        </p>
        <div className="not-prose my-5 overflow-hidden rounded-xl border border-sand">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-forest text-bone">
                <th className="py-2.5 px-4 text-left font-medium">Buurt</th>
                <th className="py-2.5 px-4 text-left font-medium">Sectoren</th>
              </tr>
            </thead>
            <tbody>
              {werkHotspots.map((r, i) => (
                <tr key={r.buurt} className={i % 2 === 0 ? 'bg-cream' : 'bg-bone'}>
                  <td className="py-2.5 px-4 text-slate align-top">{r.buurt}</td>
                  <td className="py-2.5 px-4 text-ink">{r.sectoren}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          Seek.com.au is de grootste vacaturesite. Gumtree heeft ook veel cash-in-hand werk,
          maar controleer of je werkgever je werkelijk als werknemer registreert (voor super).
          Zie <Link to="/werk" className="text-ember underline underline-offset-2">de werkgids</Link> voor meer.
        </p>

        <h2>Dagtrips en activiteiten</h2>
        <p>
          Sydney heeft twee eigen affiliatepartners: Viator en GetYourGuide. Beide bieden dezelfde tours aan,
          prijzen zijn vergelijkbaar. Hieronder vier concrete opties met links naar beide platforms.
        </p>
        <div className="not-prose my-6 grid sm:grid-cols-2 gap-4">
          {tours.map((t) => (
            <div key={t.naam} className="border border-sand rounded-2xl overflow-hidden bg-bone flex flex-col">
              <div className="p-5 flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-slate bg-sand px-2 py-0.5 rounded-full">{t.label}</span>
                  <span className="text-xs text-slate">{t.duur}</span>
                </div>
                <h3 className="font-serif text-xl text-forest mb-1">{t.naam}</h3>
                <p className="text-sm text-ink/75 leading-relaxed mb-3">{t.blurb}</p>
                <p className="text-xs text-slate font-medium">Vanaf {t.prijs} p.p.</p>
              </div>
              <div className="px-5 pb-5 flex flex-wrap gap-3 items-center">
                <a
                  href={viatorUrl(t.viatorPath)}
                  target="_blank"
                  rel="sponsored noopener noreferrer"
                  className="btn-primary text-sm"
                >
                  Boek via Viator
                  <ExtIcon />
                </a>
                <a
                  href={getyourguideUrl(t.gygPath)}
                  target="_blank"
                  rel="sponsored noopener noreferrer"
                  className="text-sm text-ember underline underline-offset-2 hover:text-sunset"
                >
                  of GetYourGuide
                </a>
              </div>
            </div>
          ))}
        </div>
        <p className="text-xs text-slate not-prose">
          Beschikbaarheid en prijzen via boekingsplatforms. Aussiestart ontvangt een kleine commissie bij boeking, voor jou is de prijs hetzelfde.
        </p>

        <h2>Kosten inschatten</h2>
        <p>
          Sydney is de duurste stad van Australie. Budget-raming voor een maand zonder uitgaan:
        </p>
        <FactsTable rows={[
          ['Hostel dorm (basisoptie)', 'AUD 35-60/nacht, AUD 1.000-1.600/maand'],
          ['Sharehouse inner city', 'AUD 250-400/week, AUD 1.000-1.700/maand'],
          ['Boodschappen (Aldi/Coles)', 'AUD 70-120/week'],
          ['OPAL per week (dagelijks gebruik)', 'AUD 50-80'],
          ['Eten buiten (cafe lunch)', 'AUD 15-22 per keer'],
        ]} />
        <p>
          Voor een realistischere totaalcalculatie inclusief verzekering en andere kosten:
          zie de <Link to="/kosten" className="text-ember underline underline-offset-2">kostencalculator</Link>.
        </p>

        <h2>Veelgestelde vragen</h2>
        <FAQ q="Is Sydney een goede stad om te beginnen op je WHV?">
          Ja, voor de meeste mensen. Er is werk genoeg, de OV-infrastructuur is goed en er zijn veel andere WHV-ers.
          Nadeel is de hoge woonkosten. Als je al weet dat je naar farmwork wilt, overweeg dan direct naar Cairns of
          Bundaberg te vliegen.
        </FAQ>
        <FAQ q="Hoe lang duurt het gemiddeld om werk te vinden in Sydney?">
          In hospitality of retail typisch 1-3 weken als je actief zoekt, cv aanpast naar Australisch formaat en
          fysiek langs loopt. CBD en Bondi zijn verzadigd, Surry Hills en Newtown iets minder.
        </FAQ>
        <FAQ q="Heb ik een auto nodig in Sydney?">
          Nee. OPAL + trein + bus dekt de meeste trajecten. Een auto is handig als je naar western suburbs werkt,
          maar voor de eerste maanden kun je prima zonder.
        </FAQ>
        <FAQ q="Wat is het verschil tussen Bondi en Coogee?">
          Bondi is groter, drukker, meer toeristen en duurder. Coogee is rustiger, iets goedkoper en heeft een
          goede backyardcultuur. Coastal walk tussen beide (6 km, 1,5 uur) is gratis en de moeite waard.
        </FAQ>

      </ArticleLayout>

      <PolaroidStrip
        eyebrow="Eigen foto's"
        title="Sydney in het echt"
        items={[
          { src: '/img/foto/sydney-opera-house-cruiseschip-nacht.jpeg', alt: 'Sydney Opera House met cruiseschip bij nacht' },
          { src: '/img/foto/sydney-opera-house-vivid-festival.jpeg', alt: 'Sydney Opera House tijdens Vivid festival met verlichte brug' },
          { src: '/img/foto/sydney-harbour-bridge-luna-park-zonsondergang.jpg', alt: 'Sydney Harbour Bridge bij zonsondergang met Luna Park' },
          { src: '/img/foto/sydney-bondi-beach-overzicht.jpeg', alt: 'Bondi Beach overzicht vanuit de lucht' },
          { src: '/img/foto/sydney-coastal-walk-bronte-coogee.jpeg', alt: 'Sydney coastal walk tussen Bronte en Coogee' },
          { src: '/img/foto/sea-cliff-bridge-grand-pacific-drive.jpeg', alt: 'Sea Cliff Bridge aan de Grand Pacific Drive, NSW' },
          { src: '/img/foto/sydney-opera-house-panorama-haven.jpg', alt: 'Sydney Opera House panorama met haven op de achtergrond' },
          { src: '/img/foto/sydney-opera-house-zeilen-close.jpg', alt: 'Sydney Opera House zeilen close-up van onderen' },
          { src: '/img/foto/gerroa-kust-nsw-panorama.jpeg', alt: 'Kustplaats Gerroa, NSW met bord en baai' },
          { src: '/img/foto/nsw-illawarra-kustlijn-groene-heuvels.jpeg', alt: 'Illawarra kustlijn met groene heuvels richting de zee' },
        ]}
      />
    </>
  )
}

function SydneyAside() {
  return (
    <div className="space-y-4">
      <div className="bg-forest text-bone rounded-2xl p-5">
        <div className="text-xs uppercase tracking-wider text-ochre mb-2">Direct regelen</div>
        <ul className="space-y-2 text-sm">
          <li><Link to="/eerste-week" className="text-ochre underline underline-offset-4">Eerste week checklist →</Link></li>
          <li><Link to="/tax-file-number" className="text-ochre underline underline-offset-4">Tax File Number →</Link></li>
          <li><Link to="/banking" className="text-ochre underline underline-offset-4">Bankrekening openen →</Link></li>
          <li><Link to="/hostels" className="text-ochre underline underline-offset-4">Hostels in Sydney →</Link></li>
        </ul>
      </div>
      <div className="border border-sand rounded-2xl p-5">
        <div className="text-xs font-semibold uppercase tracking-wider text-slate mb-3">Andere stad?</div>
        <Link
          to="/melbourne"
          className="block text-sm font-medium text-forest hover:underline"
        >
          Melbourne gids →
        </Link>
        <p className="text-xs text-slate mt-1">Cultuur, cafes, Free Tram Zone, Fitzroy</p>
      </div>
      <div className="bg-sand rounded-2xl p-5">
        <div className="text-xs uppercase tracking-wider text-slate mb-2">Feiten</div>
        <dl className="space-y-2 text-sm">
          <div>
            <dt className="text-slate">Luchthaven</dt>
            <dd className="font-medium text-ink">SYD, Kingsford Smith</dd>
          </div>
          <div>
            <dt className="text-slate">CBD naar airport (trein)</dt>
            <dd className="font-medium text-ink">13 min, AUD 19,84</dd>
          </div>
          <div>
            <dt className="text-slate">Tijdzone</dt>
            <dd className="font-medium text-ink">AEST (UTC+10), zomer UTC+11</dd>
          </div>
          <div>
            <dt className="text-slate">Inwoners</dt>
            <dd className="font-medium text-ink">~5,3 miljoen (2024)</dd>
          </div>
          <div>
            <dt className="text-slate">OV-kaart</dt>
            <dd className="font-medium text-ink">OPAL (contactloos ook OK)</dd>
          </div>
        </dl>
      </div>
    </div>
  )
}
