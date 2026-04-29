import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import { Callout, FAQ, ArticleLayout } from '../components/Article.jsx'
import SourceLink from '../components/SourceLink.jsx'
import { amazonNlUrl } from '../data/affiliates.js'

const timeline = [
  {
    when: '6 maanden voor vertrek',
    items: [
      { label: 'Visum-aanvraag voorbereiden', detail: 'Subclass 417, controleer dat je aan voorwaarden voldoet (leeftijd, paspoortduur, geen kinderen ten laste).', link: '/visum' },
      { label: 'Spaargeld op orde', detail: 'AUD 5.000 moet je kunnen aantonen op bankafschrift bij visum-aanvraag. Plus reken op €4.500-6.500 vóór vertrek.', link: '/kosten' },
      { label: 'Vlucht-onderzoek', detail: 'Open jaar return is meestal goedkoper dan twee enkelreizen, AUD 1.000-1.700 redelijk.' },
      { label: 'Verzekering vergelijken', detail: 'SafetyWing voor flexibel, JoHo voor NL-talig, Allianz voor uitgebreid.', link: '/verzekering' },
    ],
  },
  {
    when: '3 maanden voor vertrek',
    items: [
      { label: 'Visum aanvragen', detail: 'AUD 670 via ImmiAccount. Vraag minstens 4-6 weken voor vertrek aan, verwerkingstijden zijn dynamisch.', link: '/visum' },
      { label: 'Vlucht boeken', detail: 'Prijzen lopen op tot 6 weken voor vertrek, daarna stabiel of duurder.' },
      { label: 'Vaccinaties checken', detail: 'GGD Reisvaccinaties of LCR voor advies. Hep A/B en tetanus zijn de gebruikelijke updates.' },
      { label: 'Internationaal rijbewijs', detail: 'ANWB, €17. Geldig 1 jaar, alleen geldig in combinatie met je Nederlandse rijbewijs.' },
      { label: 'Paspoort-check', detail: 'Zorg dat het je hele verblijf geldig blijft. Sommige luchtvaartmaatschappijen of transitlanden hanteren strengere regels.' },
    ],
  },
  {
    when: '1 maand voor vertrek',
    items: [
      { label: 'Verzekering afsluiten', detail: 'Niet eerder hoeven, want SafetyWing kun je in dezelfde maand aanvragen als vertrek.', link: '/verzekering' },
      { label: 'Wise-rekening openen', detail: 'Voor goedkope EUR-AUD-transfers. Je Australische bank pas openen na aankomst (kan ook vooraf bij CommBank/NAB).', link: '/banking' },
      { label: 'eSIM regelen', detail: 'Telsim, Airalo of Saily. Voor je vlucht activeren, dan werkt internet vanaf de stoeprand bij landing.', link: '/esim' },
      { label: 'Paklijst maken', detail: 'Niet te veel meenemen. Wat je niet hebt koop je in Sydney of Melbourne goedkoper en lichter.' },
      { label: 'Familie/vrienden afspraak', detail: 'Een volmacht voor je ouders voor zaken thuis (post, eventuele bank-issues) scheelt later gedoe.' },
    ],
  },
  {
    when: '1 week voor vertrek',
    items: [
      { label: 'Roaming Nederlandse provider uit', detail: 'Voorkomt €40 roaming-rekening bij landing. Even zetten in instellingen.' },
      { label: 'Documenten kopiëren', detail: 'Foto van paspoort, visum-bevestiging, vlucht-tickets in een mail naar jezelf.' },
      { label: 'Eerste-week-buffer cash', detail: 'AUD 200-400 omwisselen of via Wise klaarzetten. Geen hele AUD 5.000 cash, dat is voor inbraak-risico.' },
      { label: 'Hostel boeken voor 3-4 nachten', detail: 'Vlucht-moe + jet-lag + onbekende stad is geen tijd om ter plaatse te shoppen.', link: '/hostels' },
    ],
  },
]

// Packing list met Amazon-categorie-zoekopdrachten. Liever per category dan
// hardcoded ASIN want producten verlopen. amazonNlUrl voegt automatisch ?tag toe.
const packing = [
  {
    cat: 'Essentieel',
    items: [
      { name: 'Wereldstekker Type I (Australië/NZ)', q: '/s?k=reisstekker+type+i+australie' },
      { name: 'Travel-backpack 40-65L', q: '/s?k=reisrugzak+50l+backpack' },
      { name: 'Microfiber handdoek (snel droog)', q: '/s?k=microfiber+reishanddoek' },
      { name: 'Universele hangslot voor lockers', q: '/s?k=hangslot+reizen+combinatie' },
      { name: 'Money belt of verborgen tas', q: '/s?k=money+belt+reisportemonnee' },
    ],
  },
  {
    cat: 'Klimaat en outdoor',
    items: [
      { name: 'Quick-dry hike-shirt', q: '/s?k=quick+dry+t-shirt+heren+dames+wandelen' },
      { name: 'Lichte regenjas (rainshell)', q: '/s?k=regenjas+lichtgewicht+wandelen' },
      { name: 'Waterfles 1L met filter', q: '/s?k=lifestraw+drinkfles+filter' },
      { name: 'Zonnebril met UV-bescherming', q: '/s?k=zonnebril+uv400' },
      { name: 'SPF 50+ zonnecrème (groot formaat)', q: '/s?k=zonnebrand+spf+50+gezicht' },
    ],
  },
  {
    cat: 'Slaap en hostel',
    items: [
      { name: 'Slaapzak-inlay (silk liner)', q: '/s?k=hostel+slaapzak+inlay+silk+liner' },
      { name: 'Oordoppen voor in een 8-pers dorm', q: '/s?k=oordoppen+slapen+silicone' },
      { name: 'Slaapmasker', q: '/s?k=slaapmasker+reizen' },
      { name: 'Compact-handdoek tweede setje', q: '/s?k=microfiber+reishanddoek+groot' },
    ],
  },
  {
    cat: 'Tech',
    items: [
      { name: 'Powerbank 20.000 mAh', q: '/s?k=powerbank+20000+mah' },
      { name: 'USB-C / Lightning-kabel met versterkte mantel', q: '/s?k=usb+c+kabel+nylon+gevlochten' },
      { name: 'Compact-multi-USB-oplader (4 poorten)', q: '/s?k=usb+oplader+meerdere+poorten' },
      { name: 'Wireless-mouse als je laptop meeneemt', q: '/s?k=draadloze+muis+klein+reizen' },
    ],
  },
  {
    cat: 'Gezondheid en EHBO',
    items: [
      { name: 'Reisapotheek mini-set', q: '/s?k=reisapotheek+mini' },
      { name: 'Mug-spray met DEET (voor tropische delen NQ)', q: '/s?k=muggenspray+deet+50' },
      { name: 'Pijnstillers (Paracetamol, Ibuprofen)', q: '/s?k=paracetamol+500' },
      { name: 'Pleister-mix (sport, blaren)', q: '/s?k=pleister+set+sport' },
    ],
  },
  {
    cat: 'Documenten en financieel',
    items: [
      { name: 'Documentenmap (paspoort, visum, polis-print)', q: '/s?k=documentenmap+reizen' },
      { name: 'Mini-laptop-tas of organizer', q: '/s?k=tech+organizer+kabel+tas' },
      { name: 'Internationaal rijbewijs ophalen', q: null, note: 'Niet via Amazon, via ANWB-kantoor (€17, ophaaltijd 1 dag).' },
    ],
  },
]

export default function VoorVertrek() {
  return (
    <>
      <Helmet>
        <title>Voor vertrek naar Australië, tijdlijn en paklijst · Aussiestart</title>
        <meta name="description" content="Wat regel je 6, 3 en 1 maand voor vertrek? Visum, verzekering, vluchten, vaccinaties, paklijst. Een tijdlijn die voorkomt dat je in week 4 nog rondrent voor je TFN." />
      </Helmet>
      <PageHeader
        eyebrow="Voorbereiding"
        title="Wat je voor vertrek regelt, op tijdlijn"
        intro="Visum, vluchten, verzekering, vaccinaties, paklijst. Een tijdlijn op 6, 3 en 1 maand zodat je in Australië direct kan starten zonder te improviseren."
        lastChecked="29 april 2026"
      />

      <ArticleLayout aside={<VoorVertrekAside />}>
        <p>
          Sommige dingen kun je 6 maanden voor vertrek al regelen, andere pas in de laatste week. Hieronder de
          tijdlijn die de meeste WHM\'s aanhouden, gevolgd door een paklijst die past in 65 liter (zonder
          extra koffer).
        </p>

        <h2>De tijdlijn</h2>
        {timeline.map((block) => (
          <Block key={block.when} block={block} />
        ))}

        <h2>Paklijst, 65 liter is genoeg</h2>
        <p>
          Eén grote backpack en een dagrugzak. Wat je niet hebt koop je in Sydney of Melbourne (Kmart, Big W,
          Anaconda) vaak goedkoper en lichter. Hieronder per categorie wat de meeste backpackers
          meenemen, met directe Amazon-zoekopdrachten zodat je het pre-purchase kunt vergelijken.
        </p>

        <Callout kind="info" title="Affiliate-disclosure">
          De Amazon-links hieronder bevatten onze tag (australiestar-21). Boek je iets via deze links, dan
          ontvangen wij 1-9% commissie afhankelijk van categorie. Voor jou verandert er niets aan de prijs.
          Volledige disclosure: <Link to="/affiliate-disclosure" className="text-ember underline">/affiliate-disclosure</Link>.
        </Callout>

        {packing.map((cat) => (
          <PackingCategory key={cat.cat} cat={cat} />
        ))}

        <h2>Wat je niet meeneemt</h2>
        <ul>
          <li>
            <strong>Te veel kleding.</strong> 5-7 t-shirts, 2-3 broeken, 1 hoodie, 1 regenjas. Wassen kost in
            een hostel AUD 4-7. Meer dan een week nemen is dood gewicht.
          </li>
          <li>
            <strong>Föhn, krultang, strijkijzer.</strong> Hostels hebben dat. Of het werkt niet op AU-stroom.
          </li>
          <li>
            <strong>Boeken in print.</strong> Gewicht-killer. Kindle of e-reader-app op je telefoon werkt voor
            6 maanden.
          </li>
          <li>
            <strong>Camping-gear vooraf.</strong> Tent, slaapzak, kookstel zijn in Australië goedkoper, en je
            weet pas na een paar weken of je echt gaat kamperen.
          </li>
          <li>
            <strong>EUR-cash boven €100.</strong> Je hebt AUD nodig vanaf dag 1. Wisselen op Schiphol is duur.
            Pin in Sydney of haal AUD via Wise.
          </li>
        </ul>

        <h2>Vaccinaties en gezondheid</h2>
        <p>
          Australië heeft geen verplichte vaccinaties voor Nederlanders. GGD Reisvaccinaties en LCR adviseren
          meestal:
        </p>
        <ul>
          <li><strong>Hepatitis A en B</strong> als update (geldig 10-25 jaar)</li>
          <li><strong>Tetanus/DTP</strong> update als je hem 10 jaar geleden niet had</li>
          <li><strong>Japanse encefalitis</strong> bij langdurig verblijf in tropisch Noord-Queensland</li>
          <li><strong>Dengue-bewustzijn</strong>: geen vaccinatie maar wel muggen-bescherming in Cairns/Darwin tijdens regenseizoen</li>
        </ul>
        <p>
          GGD-afspraken kun je 6-8 weken voor vertrek inboeken. Eerder mag, maar je antistoffen moeten 2-4
          weken kunnen opbouwen voor vertrek.
        </p>

        <h2>Documenten-checklist</h2>
        <ul>
          <li>Paspoort (geldig minstens je hele verblijf)</li>
          <li>Visum-grant-notification (uitprinten en in mail)</li>
          <li>Vlucht-tickets (heen + retour als je open jaar return hebt)</li>
          <li>Reisverzekering-polis (PDF + papieren versie)</li>
          <li>European Health Insurance Card (EHIC, voor Medicare-inschrijving in AU)</li>
          <li>Bewijs van je Nederlandse zorgverzekering (polisblad, in EN als kan)</li>
          <li>Internationaal rijbewijs + NL-rijbewijs (beide nodig)</li>
          <li>Bankpas + creditcard + Wise-card</li>
          <li>Foto-kopie van alle bovenstaande in een aparte e-mail aan jezelf</li>
        </ul>

        <h2>Veelgestelde vragen</h2>
        <FAQ q="Hoeveel weegt een gepakte 65L-backpack?">
          Mik op 12-15 kg inclusief backpack-eigen gewicht. Vluchten naar AU staan vaak 23 kg toe in ruim, plus
          7-10 kg handbagage. Marge dus, maar zwaarder dan 18 kg ga je elke transit slepen op je rug.
        </FAQ>
        <FAQ q="Mag ik medicatie meenemen?">
          Ja, met recept en in originele verpakking. Voor sterkere medicijnen (ADHD, sommige antidepressiva)
          vooraf check via Australian Border Force, sommige zijn beperkt of vereisen extra verklaring.
        </FAQ>
        <FAQ q="Kan ik mijn telefoon doorgebruiken in Australië?">
          Ja, mits sim-lock-vrij (de meeste post-2018 toestellen zijn dat). Je kunt een eSIM activeren
          (Telsim, Airalo, Saily) of een lokale fysieke SIM kopen na aankomst.
        </FAQ>
        <FAQ q="Wat met mijn Nederlandse zorgverzekering?">
          Laat hem doorlopen. Voor de Medicare-RHCA in Australië heb je een lopende NL-zorgpolis nodig als
          bewijs. Bel je verzekeraar of er een specifieke buitenland-aanvulling nodig is.
        </FAQ>

        <h2>Bronnen</h2>
        <ul className="text-sm space-y-1.5">
          <li><SourceLink href="https://www.ggdreisvaccinaties.nl/land/australie">GGD Reisvaccinaties, Australië</SourceLink></li>
          <li><SourceLink href="https://www.lcr.nl/Bestemmingen/Australie">Landelijk Coördinatiecentrum Reizigersadvisering (LCR)</SourceLink></li>
          <li><SourceLink href="https://www.nederlandwereldwijd.nl/landen/australie/reisadvies">Nederland Wereldwijd, reisadvies Australië</SourceLink></li>
          <li><SourceLink href="https://www.abf.gov.au/entering-and-leaving-australia">Australian Border Force, invoerregels</SourceLink></li>
          <li><SourceLink href="https://www.anwb.nl/vakantie/rijbewijs/internationaal-rijbewijs">ANWB, internationaal rijbewijs</SourceLink></li>
        </ul>
      </ArticleLayout>
    </>
  )
}

function Block({ block }) {
  return (
    <div className="not-prose my-6 bg-bone border border-sand rounded-2xl p-5 sm:p-6">
      <div className="text-xs uppercase tracking-wider text-ember mb-3">{block.when}</div>
      <ul className="space-y-3">
        {block.items.map((item) => (
          <li key={item.label} className="flex gap-3">
            <span className="shrink-0 w-1.5 h-1.5 mt-2.5 rounded-full bg-forest" />
            <div className="flex-1">
              <div className="font-medium text-forest">
                {item.link ? <Link to={item.link} className="hover:text-ember">{item.label} →</Link> : item.label}
              </div>
              <p className="text-sm text-ink/80 leading-relaxed mt-0.5">{item.detail}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

function PackingCategory({ cat }) {
  return (
    <div className="not-prose my-5">
      <h3 className="font-serif text-xl text-forest mb-2">{cat.cat}</h3>
      <ul className="space-y-1.5 text-sm">
        {cat.items.map((it) => (
          <li key={it.name} className="flex gap-2 items-baseline">
            <span className="text-forest">·</span>
            {it.q ? (
              <span className="inline-flex flex-wrap items-baseline gap-1.5">
                <a
                  href={amazonNlUrl(it.q)}
                  target="_blank"
                  rel="sponsored noopener noreferrer"
                  className="text-ember underline underline-offset-2 hover:text-sunset"
                >
                  {it.name}
                </a>
                <span className="text-[10px] uppercase tracking-wider text-slate bg-cream border border-sand rounded px-1.5 py-0.5 leading-none">
                  partner
                </span>
              </span>
            ) : (
              <span className="text-ink/85">
                {it.name}{it.note && <span className="text-slate text-xs ml-2">{it.note}</span>}
              </span>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

function VoorVertrekAside() {
  return (
    <div className="bg-forest text-bone rounded-2xl p-5">
      <div className="text-xs uppercase tracking-wider text-ochre mb-2">Vroegste taken</div>
      <ul className="space-y-2 text-sm">
        <li><Link to="/visum" className="hover:text-ochre underline underline-offset-4">Visum aanvragen →</Link></li>
        <li><Link to="/kosten" className="hover:text-ochre underline underline-offset-4">Budget berekenen →</Link></li>
        <li><Link to="/verzekering" className="hover:text-ochre underline underline-offset-4">Verzekering kiezen →</Link></li>
      </ul>
      <hr className="my-5 border-bone/20" />
      <div className="text-xs uppercase tracking-wider text-ochre mb-2">Laatste week</div>
      <ul className="space-y-2 text-sm">
        <li><Link to="/esim" className="hover:text-ochre underline underline-offset-4">eSIM activeren →</Link></li>
        <li><Link to="/banking" className="hover:text-ochre underline underline-offset-4">Wise-rekening →</Link></li>
        <li><Link to="/hostels" className="hover:text-ochre underline underline-offset-4">Eerste hostel →</Link></li>
      </ul>
    </div>
  )
}
