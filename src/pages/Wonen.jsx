import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import { Callout, FAQ, FactsTable, ArticleLayout } from '../components/Article.jsx'
import SourceLink from '../components/SourceLink.jsx'
import PolaroidStrip from '../components/PolaroidStrip.jsx'

const cityPrices = [
  { city: 'Sydney',     hostel: 'AUD 250-350/wk', sharehouse: 'AUD 280-450/wk', cbd: 'AUD 500+/wk' },
  { city: 'Melbourne',  hostel: 'AUD 200-300/wk', sharehouse: 'AUD 230-380/wk', cbd: 'AUD 450+/wk' },
  { city: 'Brisbane',   hostel: 'AUD 180-260/wk', sharehouse: 'AUD 200-320/wk', cbd: 'AUD 400+/wk' },
  { city: 'Perth',      hostel: 'AUD 180-260/wk', sharehouse: 'AUD 200-320/wk', cbd: 'AUD 400+/wk' },
  { city: 'Adelaide',   hostel: 'AUD 150-220/wk', sharehouse: 'AUD 170-280/wk', cbd: 'AUD 350+/wk' },
  { city: 'Cairns',     hostel: 'AUD 170-250/wk', sharehouse: 'AUD 180-280/wk', cbd: 'AUD 380+/wk' },
  { city: 'Regional',   hostel: 'AUD 150-220/wk', sharehouse: 'AUD 130-220/wk', cbd: '–' },
]

export default function Wonen() {
  return (
    <>
      <Helmet>
        <title>Wonen in Australië, hostel of sharehouse of camper · Aussiestart</title>
        <meta name="description" content="Hostel, sharehouse, camper of permanent: wat past bij welke fase van je working holiday? Per stad prijsindicaties, scams herkennen, Flatmates en Facebook-groepen." />
      </Helmet>
      <PageHeader
        eyebrow="Wonen"
        title="Hostel, sharehouse of camper, wat past bij welke fase"
        intro="Eerste week, eerste maand, lange termijn. Per stad waar te zoeken, wat te betalen, hoe scams te herkennen."
        lastChecked="29 april 2026"
        source="Flatmates.com.au + Facebook-groepen + ervaringen NL backpackers"
      />

      <ArticleLayout aside={<WonenAside />}>
        <p>
          Bijna iedereen volgt dezelfde progressie: een week hostel om je oriëntatie te krijgen, dan een
          sharehouse zodra je werk hebt, en eventueel een camper als je gaat reizen of richting 88 dagen
          farmwork gaat. Hieronder per fase wat te verwachten en waar te zoeken.
        </p>

        <h2>Fase 1: Hostel, voor je eerste week</h2>
        <p>
          Eerste 4-7 nachten is je hostel je oriëntatiebasis. Je gaat overdag op pad voor TFN, bank en
          sharehouse-bezichtigingen, je slaapt \'s nachts in een dorm. Boek vooraf 3-4 nachten zodat je niet
          met jet-lag in een onbekende stad moet shoppen.
        </p>
        <Callout kind="info" title="Waarom geen langer hostel-verblijf">
          Lang in een hostel blijven (3+ weken) wordt duur (AUD 1.000+/maand voor een dorm-bed) en levert geen
          adres op voor TFN of bank-formulieren waar veel hostels later moeite mee hebben. Sharehouse is na
          week 2 vrijwel altijd goedkoper en stabieler.
        </Callout>
        <p>
          Voor specifieke hostel-aanbevelingen per stad zie de{' '}
          <Link to="/hostels">hostels-gids</Link> (49 hostels in 16 steden).
        </p>

        <h2>Fase 2: Sharehouse, vanaf week 2</h2>
        <p>
          Een kamer in een gedeeld huis, meestal met 2-5 huisgenoten. Australische standaard: je deelt keuken
          en badkamer, je hebt eigen kamer. Bills (gas/water/elektra/internet) zijn vaak inclusief, soms
          apart. Borg is vrijwel altijd 4 weken huur, plus 1-2 weken huur vooruit.
        </p>

        <h3>Waar zoeken</h3>
        <ul>
          <li>
            <strong><SourceLink href="https://flatmates.com.au/">Flatmates.com.au</SourceLink></strong> is het
            grootste platform. Filter op stad, prijs, geslacht, beschikbaarheid. Premium-leden (AUD 14/week)
            kunnen direct contact zonder wachten op reactie van eigenaar.
          </li>
          <li>
            <strong>Facebook-groepen.</strong> Per stad bestaan tientallen actieve groepen. Voorbeelden: <em>Sydney
            Sharehouses & Rooms For Rent</em>, <em>Melbourne Backpackers Sharehouses</em>, <em>Dutchies in
            Australia</em> (60k+ leden). Sneller dan Flatmates voor wie een Engels-talig profiel kan
            opbouwen.
          </li>
          <li>
            <strong><SourceLink href="https://www.gumtree.com.au/s-flatshare/">Gumtree</SourceLink></strong>{' '}
            is een marktplaats-achtige site. Veel aanbod maar ook meer nep-aanbiedingen, dus extra
            voorzichtig.
          </li>
          <li>
            <strong>Real-estate-sites</strong> zoals <SourceLink href="https://www.realestate.com.au/">realestate.com.au</SourceLink>{' '}
            en <SourceLink href="https://www.domain.com.au/">domain.com.au</SourceLink>, zijn voor wie een
            heel huis wil huren met vrienden. Niet voor solo backpackers met 6-maanden-horizon.
          </li>
        </ul>

        <h2>Prijsindicatie per stad</h2>
        <p>Onderstaande tarieven zijn weekhuren voor een gedeelde kamer in een sharehouse, peildatum april 2026:</p>
        <div className="not-prose my-6 overflow-hidden rounded-xl border border-sand">
          <table className="w-full text-sm">
            <thead className="bg-cream">
              <tr>
                <th className="text-left py-2.5 px-4 text-slate font-medium">Stad</th>
                <th className="text-left py-2.5 px-4 text-slate font-medium">Hostel-dorm langer verblijf</th>
                <th className="text-left py-2.5 px-4 text-slate font-medium">Sharehouse standaard</th>
                <th className="text-left py-2.5 px-4 text-slate font-medium">Eigen kamer in CBD</th>
              </tr>
            </thead>
            <tbody>
              {cityPrices.map((row, i) => (
                <tr key={row.city} className={i % 2 === 0 ? 'bg-bone' : ''}>
                  <td className="py-2.5 px-4 font-medium text-forest">{row.city}</td>
                  <td className="py-2.5 px-4 text-ink/85">{row.hostel}</td>
                  <td className="py-2.5 px-4 text-ink/85">{row.sharehouse}</td>
                  <td className="py-2.5 px-4 text-ink/85">{row.cbd}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-slate">
          Marktindicatie. Prijzen variëren per buurt, seizoen en kamer-grootte. Voor exacte cijfers check
          Flatmates op het moment van zoeken.
        </p>

        <h2>De sharehouse-bezichtiging</h2>
        <p>Wat te verwachten en wat te checken:</p>
        <ul>
          <li>
            <strong>20-30 minuten bezichtiging.</strong> Vaak met meerdere kandidaten tegelijk, vooral in
            Sydney en Melbourne. Verwacht een korte "interview"-vibe: huisgenoten willen weten wie je bent.
          </li>
          <li>
            <strong>Kom voorbereid op vragen.</strong> Hoe lang blijf je, werk je al, ben je rustig of
            sociaal, alcohol/feesten oké of niet, allergieën met huisdieren.
          </li>
          <li>
            <strong>Vraag wat is inbegrepen.</strong> Bills, internet, schoonmaakdienst. Zit niet altijd in de
            prijs.
          </li>
          <li>
            <strong>Check de basis.</strong> Hoeveel mensen wonen er, deelt iedereen badkamer, is er een
            wasmachine in huis of in de buurt, is er goed slot op je kamer.
          </li>
          <li>
            <strong>Vraag naar de overeenkomst.</strong> Sub-let zonder formeel contract is gangbaar bij
            korte verblijven, maar maak schriftelijk afspraken over borg, opzegtermijn en bills.
          </li>
        </ul>

        <h2>Scams en red flags</h2>
        <Callout kind="warn" title="Eigenaar wil borg vooraf zonder bezichtiging">
          Klassieke scam: foto van mooi appartement, "ik woon nu in het buitenland, stuur AUD 1.500 borg en ik
          stuur de sleutels op". Nooit doen. Eis altijd een fysieke bezichtiging of een live video-tour.
        </Callout>
        <Callout kind="warn" title="Cash-only zonder kwitantie">
          Sommige verhuurders willen alles cash om belasting te ontwijken. Risico voor jou: geen bewijs van
          betaling, geen rechten als er gedoe over de borg komt. Stort via Australische bank of Wise zodat
          er een trail is.
        </Callout>
        <Callout kind="warn" title="Te-mooie deal in een prime location">
          AUD 200/week voor een eigen kamer in Surry Hills of Bondi is geen aanbieding, dat is een scam.
          Marktprijzen kennen geen wonderen.
        </Callout>
        <Callout kind="warn" title="Gevraagd om een aanbetaling buiten Flatmates om">
          Flatmates Premium heeft een eigen escrow-systeem voor borg. Wordt je gevraagd buiten het platform
          om te betalen, dat is een red flag. Bij Facebook-groepen geldt: betaal pas na fysieke bezichtiging.
        </Callout>

        <h2>Fase 3: Camper of van life</h2>
        <p>
          Voor wie 88 dagen farmwork doet of de oostkust wil afreizen, is een camper of station-wagon vaak
          handiger dan vaste sharehouse. Je slaapt waar het werk is, geen huurkosten, geen lange-afstand-
          treinen.
        </p>
        <h3>Kopen of huren?</h3>
        <ul>
          <li>
            <strong>Kopen:</strong> AUD 3.000-9.000 voor een betrouwbare backpacker-camper of station wagon.
            Bij vertrek doorverkopen voor 60-80% van aankoopprijs. Reken op AUD 600-1.500 verlies over
            6-12 maanden.
          </li>
          <li>
            <strong>Huren:</strong> Wicked Campers, Travellers Autobarn, Britz vragen AUD 40-80/dag. Voor
            kort gebruik (1-3 weken) prima. Voor lang (3+ maanden) vaak duurder dan kopen.
          </li>
        </ul>
        <h3>Bijkomende kosten</h3>
        <ul>
          <li>Registratie en verzekering: AUD 600-900/jaar</li>
          <li>Service kleine onderhouds-beurt: AUD 200-300</li>
          <li>Brandstof: AUD 1,80-2,20/liter (peildatum 2026)</li>
          <li>Camping-fees waar nodig: AUD 0-30/nacht (gratis bushcamping in National Parks bestaat veel)</li>
        </ul>
        <h3>Waar zoeken voor kopen</h3>
        <ul>
          <li><SourceLink href="https://www.gumtree.com.au/s-cars-vans-utes/">Gumtree, cars vans utes</SourceLink></li>
          <li><SourceLink href="https://www.facebook.com/marketplace/">Facebook Marketplace</SourceLink>, regionaal filteren</li>
          <li><strong>Backpacker car markets</strong>: King\'s Cross Travelers Auto Market (Sydney), bij grote hostels in steden</li>
        </ul>

        <h2>Working hostels (voor 88 dagen)</h2>
        <p>
          Speciaal voor wie 88 dagen farmwork doet. Je woont in een hostel dat tegelijk werk regelt op
          omliggende farms. Voorbeelden: Bundaberg, Mildura, Tully, Stanthorpe.
        </p>
        <ul>
          <li>Prijs: AUD 150-250/week voor een dorm-bed, soms inclusief shuttle naar werk</li>
          <li>Werk-aanbod: meestal hetzelfde rooster als alle andere gasten, niet altijd voltijd</li>
          <li>Sociale scene: vooral 18-30 jaar, internationale mix, vaak feest-vibe</li>
        </ul>
        <Callout kind="warn" title="Working-hostel scams">
          Sommige working hostels vragen extra fees voor "garantie-werkplek" of houden je passport in. Geen
          enkele legitieme working hostel rekent een plaatsingsfee, en je paspoort hoort altijd bij jou.
          Bij twijfel: vraag rond bij andere gasten, niet aan de eigenaar.
        </Callout>

        <h2>Veelgestelde vragen</h2>
        <FAQ q="Hoeveel tijd kost een sharehouse vinden?">
          In Sydney en Melbourne reken op 1-2 weken actief zoeken voor je een goede match hebt. In regional
          gebieden meestal sneller, soms binnen 2-3 dagen. Outback-werk-locaties: vaak via working hostel
          geregeld voor je aankomt.
        </FAQ>
        <FAQ q="Krijg ik mijn borg terug bij vertrek?">
          Bij formele lease-contracten (real-estate-agent): ja, mits je woning schoon achterlaat en geen
          schade. Bij informele sub-lets via Flatmates: hangt af van de hoofdhuurder. Maak vooraf
          schriftelijke afspraken over inspectie en borg-terugbetaling.
        </FAQ>
        <FAQ q="Mag ik mijn paspoort als adres-bewijs gebruiken?">
          Niet voor sharehouse-applications, daar willen ze meestal een werkbewijs (offer letter) of een
          visum-bevestiging plus 2-3 weken hostel-history. Voor TFN, bank en Medicare is een hostel-adres
          wel voldoende.
        </FAQ>
        <FAQ q="Wat is een 'lease-break-fee'?">
          Bij formele lease-contracten van 6 of 12 maanden moet je vaak een fee betalen als je vroeger
          vertrekt. Voor backpackers met onzekere planning is een sub-let via Flatmates veiliger dan een
          eigen lease.
        </FAQ>
        <FAQ q="Werkt het anders in regional gebieden?">
          Ja, sterk. In regional zijn er minder Flatmates-listings, je vindt vaker werk via working hostels,
          farmen direct, of locale Facebook-groepen. Prijzen zijn 30-50% lager dan in Sydney/Melbourne.
        </FAQ>

        <h2>Bronnen</h2>
        <ul className="text-sm space-y-1.5">
          <li><SourceLink href="https://flatmates.com.au/">Flatmates.com.au, sharehouse-platform</SourceLink></li>
          <li><SourceLink href="https://www.gumtree.com.au/s-flatshare/">Gumtree, flatshare-listings</SourceLink></li>
          <li><SourceLink href="https://www.realestate.com.au/">Realestate.com.au</SourceLink></li>
          <li><SourceLink href="https://www.domain.com.au/">Domain.com.au</SourceLink></li>
          <li><SourceLink href="https://www.fairtrading.nsw.gov.au/housing-and-property/renting">NSW Fair Trading, huurrechten</SourceLink></li>
          <li><SourceLink href="https://www.consumer.vic.gov.au/housing/renting">Consumer Affairs Victoria, huurrechten</SourceLink></li>
        </ul>
      </ArticleLayout>

      <PolaroidStrip
        eyebrow="Wonen in Australië"
        title="Van Melbourne tot Western Australia"
        items={[
          { src: '/img/foto/melbourne-brighton-beach-huisjes.jpeg', alt: 'Brighton Beach huisjes Melbourne gezien vanaf het water' },
          { src: '/img/foto/melbourne-brighton-bathing-boxes-muurschildering.jpeg', alt: 'Brighton bathing box met koala en surfer muurschildering, Melbourne' },
          { src: '/img/foto/western-australia-strand-boardwalk.jpeg', alt: 'Houten boardwalk naar turquoise strand in Western Australia' },
          { src: '/img/foto/western-australia-baai-panorama-turquoise.jpeg', alt: 'Panoramisch uitzicht over turquoise baai in Western Australia' },
          { src: '/img/foto/nsw-kustlijn-heuvels-oceaan.jpeg', alt: 'NSW kustlijn met groene heuvels en oceaan' },
        ]}
      />
    </>
  )
}

function WonenAside() {
  return (
    <div className="bg-forest text-bone rounded-2xl p-5">
      <div className="text-xs uppercase tracking-wider text-ochre mb-2">Per fase</div>
      <ul className="space-y-2 text-sm">
        <li><span className="text-bone/70">Eerste week:</span> hostel</li>
        <li><span className="text-bone/70">Maand 1+:</span> sharehouse</li>
        <li><span className="text-bone/70">88 dagen:</span> working hostel</li>
        <li><span className="text-bone/70">Reizen:</span> camper</li>
      </ul>
      <hr className="my-5 border-bone/20" />
      <div className="text-xs uppercase tracking-wider text-ochre mb-2">Verder lezen</div>
      <ul className="space-y-2 text-sm">
        <li><Link to="/hostels" className="hover:text-ochre underline underline-offset-4">Hostels per stad →</Link></li>
        <li><Link to="/eerste-week" className="hover:text-ochre underline underline-offset-4">Eerste week →</Link></li>
        <li><Link to="/werk" className="hover:text-ochre underline underline-offset-4">Werk vinden →</Link></li>
        <li><Link to="/kosten" className="hover:text-ochre underline underline-offset-4">Wat kost het →</Link></li>
      </ul>
    </div>
  )
}
