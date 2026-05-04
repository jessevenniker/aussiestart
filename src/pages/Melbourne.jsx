import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import { ArticleLayout, Callout, FactsTable, FAQ } from '../components/Article.jsx'
import JsonLd from '../components/JsonLd.jsx'

const SITE_URL = 'https://australiestart.nl'

// ─── Wijken ───────────────────────────────────────────────────────────────────
const wijken = [
  {
    naam: 'Fitzroy / Collingwood',
    type: 'Cultureel, cafe-intensief',
    huur: 'AUD 240-360/week',
    geschikt: 'Barista en hospo werk op Brunswick St en Smith St, korte tram naar CBD, veel WHV-ers en backpackers',
    watch: 'Vrijdagnacht druk, sharehousemarkt gaat snel. Op Gumtree en Facebook reageren binnen uren.',
  },
  {
    naam: 'St Kilda',
    type: 'Strand, toerisme, nachtleven',
    huur: 'AUD 250-380/week',
    geschikt: 'Sociaal, strand, hospo werk langs Fitzroy St en Acland St, dichtbij Balaclava treinstation',
    watch: 'Pingers en daklozen op het Esplanade, weeg of dat je iets uitmaakt. Nachtleven is luid.',
  },
  {
    naam: 'Brunswick',
    type: 'Budget, multicultureel',
    huur: 'AUD 200-300/week',
    geschikt: 'Goedkoopste optie dichtbij stad. Sydney Rd heeft tram naar CBD. Internationaal, levendig.',
    watch: 'Mindere buurten richting Coburg, check of de straat oké is. Wat verder van de actie.',
  },
  {
    naam: 'Richmond / Cremorne',
    type: 'Sport, food, tech',
    huur: 'AUD 260-380/week',
    geschikt: 'MCG en Rod Laver Arena op loopafstand. Bridge Rd heeft retail, Swan St F&B. Goede treinverbinding.',
    watch: 'Huur stijgt door tech-kantoren in Cremorne (Atlassian, Canva, Seek HQ). Minder achteraflopties.',
  },
  {
    naam: 'South Yarra / Prahran',
    type: 'Upmarket, fashion',
    huur: 'AUD 290-430/week',
    geschikt: 'Chapel St retail werk, goede tram/trein, uitstraling als je voor kantoor solliciteert',
    watch: 'Duurder dan andere opties. Veel lange-termijn huurders, minder kortetermijn-beschikbaarheid.',
  },
  {
    naam: 'CBD (Swanston St, Lonsdale St)',
    type: 'Centraal, druk',
    huur: 'AUD 280-450/week kamer in shared apartment',
    geschikt: 'Alles op loopafstand. Goed als je werk hebt in het CBD of de eerste week oriënteert.',
    watch: 'Duurder per m2, weinig tuin/ruimte, appartementleven. Minder backpacker-sfeer.',
  },
]

// ─── Werk ─────────────────────────────────────────────────────────────────────
const werkHotspots = [
  { buurt: 'CBD (Collins St, Bourke St)', sectoren: 'Retail, hotels, kantoor, evenementen' },
  { buurt: 'Fitzroy / Smith St', sectoren: 'Cafe, bar, keuken, pop-ups, markten' },
  { buurt: 'South Yarra / Chapel St', sectoren: 'Retail, restaurant, salon/beauty' },
  { buurt: 'Richmond / Swan St', sectoren: 'Cafe, bar, sport venues (MCG, Rod Laver)' },
  { buurt: 'St Kilda', sectoren: 'Hostel-werk, barista, nachtleven, Airbnb-beheer' },
  { buurt: 'Docklands / Southbank', sectoren: 'Casino (Crown), restaurant, office support' },
]

// ─── Dagtrips ─────────────────────────────────────────────────────────────────
const dagtrips = [
  {
    naam: 'Great Ocean Road',
    label: 'Must-see',
    afstand: '2,5 uur rijden',
    blurb: 'De Twelve Apostles, Loch Ard Gorge, Torquay en Bells Beach in één dag. Doe het met een groepstour of huur zelf een auto: AUD 60-80 per dag voor een compact-car. Kustlijn is te mooi om over te slaan.',
  },
  {
    naam: 'Yarra Valley (wijn)',
    label: 'Culinair',
    afstand: '1 uur rijden',
    blurb: 'Dichtsbijzijnde wijnregio van Melbourne. Healesville Sanctuary voor wildlife erbij. Gratis te bezoeken met eigen auto, groepstours met proeverij AUD 80-150.',
  },
  {
    naam: 'Grampians National Park',
    label: 'Natuur',
    afstand: '3 uur rijden',
    blurb: 'Wandelen, kangoeroes en spectaculaire rotsformaties. Overnachten in Halls Gap (hostels AUD 30-45/nacht) of dagtrip. Minder toeristen dan Great Ocean Road.',
  },
  {
    naam: 'Phillip Island (pinguins)',
    label: 'Wildlife',
    afstand: '1,5 uur rijden',
    blurb: 'De Penguin Parade: kleine pinguins komen elke avond na zonsondergang uit zee. Entree AUD 30-55. Combineerbaar met Cape Woolamai wandeling.',
  },
  {
    naam: 'Mornington Peninsula',
    label: 'Strand + relaxen',
    afstand: '1,5 uur rijden',
    blurb: 'Hot springs (Peninsula Hot Springs, AUD 40-65), baaitjes, surfstrand Gunnamatta en goede wijn. Rustige dagtrip voor als je even weg wilt zonder ver te rijden.',
  },
]

const melbourneSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Article',
      '@id': `${SITE_URL}/melbourne#article`,
      headline: 'Melbourne op Working Holiday: wijken, werk en kosten',
      description: 'Praktische gids voor Working Holiday Makers in Melbourne. Wijken vergelijken (Fitzroy, St Kilda, Brunswick), Myki tram/trein, werk zoeken en dagtrips.',
      url: `${SITE_URL}/melbourne`,
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
      '@id': `${SITE_URL}/melbourne#faq`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Welke wijk is het beste voor Working Holiday Makers in Melbourne?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Fitzroy en Collingwood zijn populair vanwege de lage huur (AUD 240-360/week), veel hospo-werk op Brunswick Street en Smith Street, en een goede tram naar het CBD. St Kilda is socialer maar iets duurder.',
          },
        },
        {
          '@type': 'Question',
          name: 'Hoe werkt het openbaar vervoer in Melbourne?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Melbourne heeft trams (gratis zone in het CBD), treinen en bussen. Je betaalt met een Myki-kaart. Een dagpas kost AUD 10,60. Trams in de Free Tram Zone hoef je niet te betalen.',
          },
        },
        {
          '@type': 'Question',
          name: 'Hoeveel kost huren in Melbourne?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Een kamer in een sharehouse kost AUD 200-430 per week afhankelijk van de wijk. Brunswick is het goedkoopst (AUD 200-300), South Yarra het duurst (AUD 290-430).',
          },
        },
        {
          '@type': 'Question',
          name: 'Is Melbourne of Sydney beter voor Working Holiday?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Dat hangt van je prioriteiten af. Melbourne heeft een sterkere cafe- en kunstcultuur, iets lagere huren dan Sydney, en een goede hospo-arbeidsmarkt. Sydney heeft meer strandleven en is het meest internationale instappunt. Veel WHV-ers beginnen in Sydney en verhuizen naar Melbourne voor langere tijd.',
          },
        },
      ],
    },
  ],
}

export default function Melbourne() {
  return (
    <>
      <Helmet>
        <title>Melbourne op Working Holiday: wijken, werk en kosten 2026 · Aussiestart</title>
        <meta
          name="description"
          content="Praktische gids voor Melbourne op je Working Holiday. Wijken vergelijken (Fitzroy, St Kilda, Brunswick), Myki, werk vinden en dagtrips naar de Great Ocean Road."
        />
        <meta property="og:title" content="Melbourne op Working Holiday 2026" />
        <meta property="og:description" content="Welke wijk, hoe werkt de tram, waar vind je werk. Fitzroy, St Kilda, Brunswick: eerlijk vergeleken voor WHV-ers." />
        <meta property="og:type" content="article" />
      </Helmet>
      <JsonLd data={melbourneSchema} />

      <PageHeader
        eyebrow="Steden"
        title="Melbourne op Working Holiday"
        intro="Australies culturele hoofdstad heeft meer cafe's per inwoner dan waar ook. Hoe je een wijk kiest, hoe het OV werkt en waar je werk vindt."
        lastChecked="4 mei 2026"
        source="Flatmates.com.au, PTV (Public Transport Victoria), Fair Work Ombudsman"
      />

      <figure className="container-wide pt-8 pb-4">
        <div className="aspect-[16/9] sm:aspect-[21/9] overflow-hidden rounded-2xl bg-sand">
          <img
            src="/img/foto/melbourne-flinders-street-station-tram.jpg"
            alt="Flinders Street Station met tram op de voorgrond, Melbourne CBD"
            className="w-full h-full object-cover"
            onError={(e) => { e.currentTarget.style.display = 'none' }}
          />
        </div>
        <figcaption className="text-xs text-slate mt-2 px-1">
          Flinders Street Station, Melbourne CBD. De tram is het symbool van Melbourne, en ook het primaire vervoermiddel voor de meeste WHV-ers.
        </figcaption>
      </figure>

      <ArticleLayout aside={<MelbourneAside />}>

        <h2>Van vliegveld naar stad</h2>
        <p>
          Melbourne Airport (MEL, Tullamarine) ligt 23 km noordwest van het CBD. Er is geen directe treinverbinding.
        </p>
        <FactsTable rows={[
          ['SkyBus', 'AUD 22-36 naar Southern Cross Station. Vertrekt elke 10-30 min, dag en nacht. Makkelijkste optie met bagage.'],
          ['Taxi / Uber', 'AUD 50-80 afhankelijk van bestemming en tijdstip. Uber iets goedkoper dan taxi. Vaste prijs niet mogelijk via taxi.'],
          ['Bus 901 (lijn)', 'AUD 6,40 met Myki naar Broadmeadows, dan trein naar CBD. Totaal 1 uur+. Goedkoopst, maar niet handig met koffer.'],
        ]} />
        <Callout kind="info" title="Myki kopen op de luchthaven">
          Bij aankomst kun je bij de SkyBus-balie of 7-Eleven in de aankomsthal een Myki-kaart kopen voor AUD 6 (kaart zelf) plus saldo. Gooi er AUD 20 op voor de eerste week.
          Contactloze betaling werkt ook op trams en treinen.
        </Callout>

        <h2>Het OV-systeem: trams, treinen en bussen</h2>
        <p>
          Melbourne heeft het grootste tramnetwerk van het westelijke halfrond. Dat klinkt indrukwekkend
          en is ook handig: je kunt het grootste deel van de inner city per tram bereiken.
        </p>
        <FactsTable rows={[
          ['Free Tram Zone', 'Gratis trams in het CBD en Docklands, geen Myki nodig. Werkt ook voor toeristen.'],
          ['Dagpas', 'AUD 10,60, onbeperkt trein/tram/bus voor een dag. Nuttig voor eerste oriëntatie.'],
          ['Weekpas', 'AUD 53 voor trein/tram/bus. Goedkoper dan dagpas als je 5+ dagen per week reist.'],
          ['Zone 1', 'Dekt de meeste inner suburbs waar WHV-ers wonen. Forfaitair AUD 4,60 per dagdeel.'],
        ]} />
        <Callout kind="success" title="Nachttransport">
          In het weekend rijdt de Nightrider-bus door tot 05:00 op de meeste routes. Vrijdag- en zaterdagnacht zijn er ook extra treinritten na middernacht.
        </Callout>

        <h2>Wijken voor Working Holiday Makers</h2>
        <p>
          Melbourne is een stad van wijken: elk heeft een eigen sfeer, huurprijsniveau en arbeidsmarkt.
          Hieronder een eerlijke vergelijking voor de populairste keuzes.
        </p>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-forest text-left">
                <th className="py-3 pr-3 font-semibold text-forest w-[140px]">Wijk</th>
                <th className="py-3 px-3 font-semibold text-forest w-[90px]">Huur/week</th>
                <th className="py-3 pl-3 font-semibold text-forest">Geschikt voor</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-sand">
              {wijken.map((w) => (
                <tr key={w.naam}>
                  <td className="py-3 pr-3 align-top">
                    <span className="font-medium text-ink block">{w.naam}</span>
                    <span className="text-xs text-slate">{w.type}</span>
                  </td>
                  <td className="py-3 px-3 text-ink/80 align-top text-xs">{w.huur}</td>
                  <td className="py-3 pl-3 align-top">
                    <span className="text-ink/80 block text-xs mb-1">{w.geschikt}</span>
                    <span className="text-slate text-xs italic">{w.watch}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <h2>Werk vinden in Melbourne</h2>
        <p>
          Melbourne draait op hospitality, retail en evenementen. De stad heeft rond de 250 koffieranden
          (Melbourne is de koffiestad van Australie), 1.300+ restaurants in de CBD alone, en een actieve
          pop-up en events-scene. Dat vertaalt zich in veel tijdelijk hospo-werk.
        </p>
        <p>
          Wat voor Melbourne specifiek geldt en in Sydney minder:
        </p>
        <ul>
          <li>Barista-vaardigheden zijn hier goud waard: een goede espresso zetten onderscheidt je</li>
          <li>Melbourne Fashion Week, Australian Open, F1 Grand Prix en AFL-finals: event-werk piekt rond grote evenementen</li>
          <li>Het CBD heeft meer kantoor- en tech-werk dan andere steden (Atlassian, Canva, Seek HQ)</li>
          <li>Hospitality Award-sector is streng: werkgevers kennen de regels, onderbetaling komt minder voor dan in regionale gebieden</li>
        </ul>

        <div className="not-prose my-6 overflow-x-auto">
          <table className="w-full text-sm border-collapse">
            <thead>
              <tr className="border-b border-sand text-left">
                <th className="py-2 pr-4 font-semibold text-forest">Buurt</th>
                <th className="py-2 pl-4 font-semibold text-forest">Sectoren</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-sand">
              {werkHotspots.map((w) => (
                <tr key={w.buurt}>
                  <td className="py-2.5 pr-4 font-medium text-ink">{w.buurt}</td>
                  <td className="py-2.5 pl-4 text-ink/70">{w.sectoren}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <Callout kind="info" title="Barista-cursus voor vertrek">
          Een barista-cursus in Nederland kost €150-250 en duurt een dag. In Melbourne opent dat direct deuren.
          Black Star Pastry (Sydney) en Proud Mary (Melbourne) leiden WHV-ers op, maar een Nederlandse cursus
          geeft je een voor op de rest. Alternatief: Seek of Indeed, filter op "no experience needed" in de
          hospitality-categorie, en geef aan dat je bereid bent te leren.
        </Callout>

        <h2>Melbourne vs. Sydney: hoe kies je?</h2>
        <p>
          Dit is de vraag die vrijwel elke vertrekkende WHV-er stelt. Eerlijk antwoord:
        </p>
        <FactsTable rows={[
          ['Kosten', 'Melbourne iets goedkoper dan Sydney, met name wonen. Niet dramatisch verschil.'],
          ['Weer', 'Melbourne: "vier seizoenen op een dag". Sydney: constanter, meer zon. Geen discussie: Sydney wint qua klimaat.'],
          ['Strand', 'Sydney: Bondi, Manly, Coogee op 30 min. Melbourne: St Kilda (baai, geen golven), Mornington 90 min.'],
          ['Cultuur / eten', 'Melbourne wint: meer diverse keukens, sterkere koffiecultuur, groter muziek- en kunstcircuit.'],
          ['Werk', 'Vergelijkbaar, Melbourne iets meer kantoor/tech, Sydney meer toerisme/hotels.'],
          ['Sfeer', 'Melbourne: drukker, stedelijker, meer Europeese sfeer. Sydney: relaxter, meer outdoor, beachcultuur.'],
        ]} />
        <p>
          Strategisch advies: begin in Sydney (meeste vluchten landen hier, makkelijkst om te orienteren),
          verken Melbourne na 2-3 maanden voor een langere periode. Zo zie je allebei.
        </p>

        <h2>Dagtrips vanuit Melbourne</h2>
        <p>
          Melbourne is de perfecte uitvalsbasis voor ritten door Victoria. Vijf trips die het waard zijn:
        </p>
        <div className="not-prose my-6 space-y-4">
          {dagtrips.map((t) => (
            <div key={t.naam} className="border border-sand rounded-xl p-5">
              <div className="flex items-start justify-between gap-4 mb-2">
                <span className="font-serif text-lg text-forest">{t.naam}</span>
                <span className="shrink-0 text-xs font-semibold uppercase tracking-wider text-ember border border-ember/30 rounded-full px-2.5 py-1">{t.label}</span>
              </div>
              <p className="text-xs text-slate mb-2">{t.afstand}</p>
              <p className="text-sm text-ink/80">{t.blurb}</p>
            </div>
          ))}
        </div>

        <h2>Handig weten</h2>
        <FAQ q="Hoe vind ik een kamer in Melbourne?">
          Flatmates.com.au is de beste bron voor sharehousekamers. Facebook-groepen zoals "Melbourne Backpackers Accommodation" en "WHV Melbourne" zijn ook actief. Reageer snel: de markt gaat snel. Neem altijd een kijkje voor je betaalt.
        </FAQ>
        <FAQ q="Is een auto nodig in Melbourne?">
          Nee voor de stad zelf. Het tramnetwerk dekt alle populaire wijken. Wel handig voor dagtrips (Great Ocean Road is per auto het prettigst). Huurauto via Budget of Europcar kost AUD 50-70 per dag voor een kleine auto.
        </FAQ>
        <FAQ q="Zijn er goede hostels in Melbourne?">
          Ja. Space Hotel (CBD), Bounce Melbourne (CBD), Nomads (St Kilda) en Base Melbourne zijn populair. Prijs AUD 30-50 per nacht voor een dorm. Boek via Hostelworld voor de beste reviews.
        </FAQ>
        <FAQ q="Mag ik al rijden met mijn Nederlandse rijbewijs in Victoria?">
          Ja, met een geldig Nederlands rijbewijs mag je in Victoria tot 3 maanden rijden. Daarna moet je een Victoriaans rijbewijs aanvragen. Een internationale vertaling (IDL) is niet verplicht, maar wel handig als de politie stopt.
        </FAQ>

        <div className="not-prose mt-8 flex flex-col sm:flex-row gap-4">
          <Link
            to="/wonen"
            className="flex-1 text-center border border-forest text-forest font-medium text-sm px-5 py-3 rounded-full hover:bg-forest hover:text-bone transition-colors no-underline"
          >
            Sharehouse vinden →
          </Link>
          <Link
            to="/werk"
            className="flex-1 text-center bg-forest text-bone font-medium text-sm px-5 py-3 rounded-full hover:bg-forest/80 transition-colors no-underline"
          >
            Werk zoeken in Melbourne →
          </Link>
        </div>

      </ArticleLayout>
    </>
  )
}

function MelbourneAside() {
  return (
    <div className="space-y-6">
      <div className="bg-forest text-bone rounded-2xl p-5">
        <div className="text-xs uppercase tracking-wider text-ochre mb-3">Snelle feiten</div>
        <ul className="space-y-2 text-sm">
          <li><span className="text-bone/70">Inwoners:</span> 5,1 miljoen (2e stad AU)</li>
          <li><span className="text-bone/70">Luchthaven:</span> MEL (Tullamarine)</li>
          <li><span className="text-bone/70">OV-kaart:</span> Myki</li>
          <li><span className="text-bone/70">Free tram zone:</span> Ja, in CBD</li>
          <li><span className="text-bone/70">Huur inner suburbs:</span> AUD 200-430/week</li>
          <li><span className="text-bone/70">SkyBus luchthaven:</span> AUD 22-36</li>
          <li><span className="text-bone/70">Tijdzone:</span> AEST (UTC+10/+11)</li>
        </ul>
      </div>

      <div className="border border-sand rounded-xl p-5">
        <div className="text-xs font-semibold uppercase tracking-wider text-slate mb-3">Populaire wijken</div>
        <ul className="space-y-2 text-sm text-ink/80">
          {wijken.slice(0, 4).map((w) => (
            <li key={w.naam} className="flex justify-between">
              <span>{w.naam.split(' / ')[0]}</span>
              <span className="text-slate text-xs">{w.huur.split('-')[0]}+/week</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="border border-sand rounded-xl p-5">
        <div className="text-xs font-semibold uppercase tracking-wider text-slate mb-3">Meer lezen</div>
        <ul className="space-y-2 text-sm">
          <li><Link to="/wonen" className="text-forest hover:underline">Wonen en huren →</Link></li>
          <li><Link to="/werk" className="text-forest hover:underline">Werk vinden →</Link></li>
          <li><Link to="/kosten" className="text-forest hover:underline">Budget berekenen →</Link></li>
          <li><Link to="/sydney" className="text-forest hover:underline">Sydney vergelijken →</Link></li>
        </ul>
      </div>
    </div>
  )
}
