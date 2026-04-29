import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import { Callout, ArticleLayout } from '../components/Article.jsx'

const phases = [
  {
    name: 'Oriëntatie',
    when: '6 tot 3 maanden voor vertrek',
    color: 'forest',
    steps: [
      {
        n: 1,
        title: 'Check of het 417-visum bij je past',
        blurb: 'Nederlands paspoort, 18 t/m 30 jaar, geen kinderen ten laste, niet eerder twee 417-visums gehad. Spaargeld AUD 5.000 op bankafschrift kunnen tonen.',
        cta: 'Visum-voorwaarden',
        path: '/visum',
      },
      {
        n: 2,
        title: 'Bereken het echte budget',
        blurb: 'Niet €5.000 zoals bemiddelaars zeggen. Reken op €7.000-9.000 spaargeld voor vertrek + AUD 2.500-3.500/maand levensonderhoud. Met sliders zie je wat past bij jouw plan.',
        cta: 'Open de calculator',
        path: '/kosten',
      },
      {
        n: 3,
        title: 'Vergelijk verzekeringen',
        blurb: 'Door RHCA krijg je Medicare-toegang als Nederlander. Voor de gaten (tandheelkunde, ambulance, repatriëring) heb je alsnog een reisverzekering nodig. Vier polissen vergeleken.',
        cta: 'Vergelijk SafetyWing, JoHo, World Nomads, Allianz',
        path: '/verzekering',
      },
    ],
  },
  {
    name: 'Voor vertrek',
    when: '3 tot 1 maand voor vertrek',
    color: 'sand',
    steps: [
      {
        n: 4,
        title: 'Vraag je visum aan',
        blurb: 'AUD 670 via ImmiAccount, online in 30 minuten. Verwerkingstijden zijn dynamisch, vraag minstens 4-6 weken voor vertrek aan. Vier valkuilen die mensen weken kosten staan op de gids.',
        cta: 'Visum stap voor stap',
        path: '/visum',
      },
      {
        n: 5,
        title: 'Boek je vlucht',
        blurb: 'Open jaar return is meestal goedkoper dan twee enkelreizen. €1.000-1.700 redelijk. Goedkoper bij vertrek vanuit Düsseldorf, Brussel of Frankfurt.',
        cta: 'Tijdlijn voor vertrek',
        path: '/voor-vertrek',
      },
      {
        n: 6,
        title: 'Sluit verzekering af',
        blurb: 'SafetyWing kun je in dezelfde week als vertrek nog activeren. JoHo en Allianz vereisen jaarpolis. Niet eerder dan een maand voor vertrek nodig.',
        cta: 'Beslisboom verzekering',
        path: '/verzekering',
      },
      {
        n: 7,
        title: 'Open Wise + eventueel CommBank',
        blurb: 'Wise voor goedkope EUR-AUD-transfers. Australische bank kun je vooraf openen vanuit Nederland (CommBank, NAB) of bij aankomst regelen.',
        cta: 'Big Four vergeleken + Wise',
        path: '/banking',
      },
      {
        n: 8,
        title: 'Vaccinaties + internationaal rijbewijs',
        blurb: 'Hep A/B en tetanus updaten via GGD. Internationaal rijbewijs bij ANWB voor €17, ophaal-tijd 1 dag.',
        cta: 'Voorbereidings-tijdlijn',
        path: '/voor-vertrek',
      },
      {
        n: 9,
        title: 'Activeer eSIM',
        blurb: 'Telsim voor lange WHV (~€13 voor 80GB Telstra-netwerk), Airalo voor multi-country, Saily voor subscription. Activeer voor je vlucht zodat internet werkt vanaf landing.',
        cta: 'eSIM-vergelijking',
        path: '/esim',
      },
      {
        n: 10,
        title: 'Pak en boek eerste hostel',
        blurb: 'Eén 65L-backpack is genoeg. Boek 3-4 nachten hostel vooraf, jet-lag is geen tijd om ter plaatse te shoppen.',
        cta: 'Paklijst en hostel-keuze',
        path: '/hostels',
      },
    ],
  },
  {
    name: 'Eerste week',
    when: 'In Australië, dag 1 tot 7',
    color: 'sunset',
    steps: [
      {
        n: 11,
        title: 'TFN aanvragen + Medicare inschrijven',
        blurb: 'TFN gratis online via ATO, levering binnen 28 dagen. Medicare via een Service Centre met EHIC en NL-zorgpolis. Beide gratis, beide binnen week 1.',
        cta: 'TFN- en Medicare-stappenplan',
        path: '/tax-file-number',
      },
      {
        n: 12,
        title: 'Australische bankrekening + OV-pas',
        blurb: 'Filiaal-bezoek met paspoort, visum-bewijs, Australisch adres. OPAL (Sydney), Myki (Melbourne) of Go Card (Brisbane) bij elke kiosk.',
        cta: 'Eerste-week-stappenplan',
        path: '/eerste-week',
      },
    ],
  },
  {
    name: 'Werken',
    when: 'Vanaf week 2',
    color: 'forest',
    steps: [
      {
        n: 13,
        title: 'Vind je eerste baan',
        blurb: 'Hospitality (1-3 weken tot eerste payslip), retail (2-4 weken), bouw (na White Card), mining (langer interview-traject), au pair, online. Zeven routes vergeleken.',
        cta: 'Welke route past bij jou',
        path: '/werk',
      },
      {
        n: 14,
        title: 'Houd uren bij + check payslips',
        blurb: 'Casual minimumloon AUD 31,19/uur, weekend en feestdagen hoger. Check elke payslip op casual loading, super (12%) en belasting-inhouding. Onderbetaling melden bij Fair Work Ombudsman.',
        cta: 'Loon en belasting in detail',
        path: '/loon',
      },
    ],
  },
]

export default function BeginHier() {
  return (
    <>
      <Helmet>
        <title>Begin hier, 14 stappen voor je working holiday Australië · Aussiestart</title>
        <meta name="description" content="14 stappen op volgorde van eerste oriëntatie tot eerste payslip. Visum, verzekering, vluchten, eSIM, TFN, Medicare, eerste baan. Een startgids zonder bemiddelaar nodig." />
      </Helmet>
      <PageHeader
        eyebrow="Startgids"
        title="14 stappen, in volgorde, van eerste idee tot eerste payslip"
        intro="Geen €2.000 bemiddelaarspakket nodig. Hieronder elke stap die je zelf regelt, op tijdlijn, met deeplinks naar de detail-gidsen waar dat handig is."
        lastChecked="29 april 2026"
      />

      <ArticleLayout aside={<BeginAside />}>
        <p>
          Deze pagina is je startpunt. Je hoeft niet alles in één keer te doen, maar je gaat onderstaande
          stappen wel in deze volgorde tegenkomen. Elke stap heeft één paragraaf samenvatting en linkt door
          naar de detail-gids als je verder wilt.
        </p>

        <Callout kind="info" title="Voor wie is deze gids">
          Nederlanders tussen 18 en 30 die op Working Holiday Visum (subclass 417) naar Australië willen.
          Niet voor stage of werk-visum, niet voor 462. Niet voor kortere reizen dan 3 maanden.
        </Callout>

        {phases.map((phase) => (
          <Phase key={phase.name} phase={phase} />
        ))}

        <h2>Wat erna?</h2>
        <p>
          Na stap 14 is je verblijf op de rails. Een paar dingen om in gedachten te houden voor het tweede en
          derde halfjaar:
        </p>
        <ul>
          <li>
            <strong>Tweede WHV via 88-dagen-regel.</strong> Tijdens je eerste jaar 88 dagen specified work doen
            (farmwork, regional bouw, mining) opent het 2e WHV. Voor het 3e jaar: 179 dagen.
          </li>
          <li>
            <strong>DASP super-claim.</strong> Bij vertrek je super-fonds claimen via ATO. Voor 417-houders is
            65% belasting van toepassing, je houdt rond 35% over (typisch AUD 2.000-2.500 op een jaar werk).
          </li>
          <li>
            <strong>Belastingaangifte.</strong> Australisch fiscaal jaar loopt 1 juli tot 30 juni. Als WHM is
            een aangifte vaak niet verplicht maar wel slim als je deels onder hogere schalen viel.
          </li>
          <li>
            <strong>Australische bankrekening sluiten.</strong> Vóór vertrek leegmaken via Wise of NL-rekening,
            dan telefonisch of online afsluiten.
          </li>
        </ul>

        <h2>Veelgestelde vragen over de startgids</h2>
        <p>
          Specifieke vragen over visum, kosten, werk, of verzekering staan op de detail-pagina\'s waar ze
          relevant zijn. Hier alleen vragen over de gids zelf.
        </p>

        <h3>Hoeveel tijd kost dit allemaal?</h3>
        <p>
          Stappen 1-3 (oriëntatie) ongeveer 4-6 uur over een paar avonden. Stappen 4-10 (regelen) verspreid
          over 6-8 weken, ongeveer 8-10 uur totaal. Stappen 11-14 (in Australië) is je eerste week + eerste
          paar werkweken.
        </p>

        <h3>Moet ik per se in deze volgorde?</h3>
        <p>
          Stappen 1-3 wel. Daarna mag het door elkaar, behalve dat je visum geboekt moet zijn voor je
          vlucht boekt. Eerste week: TFN en Medicare gelijktijdig.
        </p>

        <h3>Wat als ik halverwege een stap vastloop?</h3>
        <p>
          Mail via de <Link to="/contact">contactpagina</Link> of stel je vraag in een Facebook-groep zoals
          <em> Dutchies in Australia</em>. We bouwen later een eigen WhatsApp-community per vertrekkwartaal.
        </p>

        <h3>Hoe weet ik of de info nog actueel is?</h3>
        <p>
          Elke pagina heeft een "Laatst gecheckt"-datum boven de intro. Officiële bronnen (DHA, ATO, Services
          Australia, Fair Work) staan onderaan elke pillar gelinkt. We controleren elk fiscaal jaar (1 juli)
          of cijfers nog kloppen.
        </p>
      </ArticleLayout>
    </>
  )
}

function Phase({ phase }) {
  const headerCls = {
    forest: 'bg-forest text-bone',
    sand:   'bg-sand text-forest',
    sunset: 'bg-sunset text-bone',
  }[phase.color]
  return (
    <section className="not-prose my-8">
      <div className={`rounded-t-2xl px-5 py-3 ${headerCls}`}>
        <div className="text-xs uppercase tracking-[0.18em] opacity-80">{phase.when}</div>
        <h2 className="font-serif text-2xl mt-0.5">{phase.name}</h2>
      </div>
      <ol className="border border-sand border-t-0 rounded-b-2xl divide-y divide-sand bg-bone">
        {phase.steps.map((s) => <Step key={s.n} step={s} />)}
      </ol>
    </section>
  )
}

function Step({ step }) {
  return (
    <li className="p-5 sm:p-6 flex gap-5">
      <div className="shrink-0 w-12 text-center">
        <div className="font-serif text-3xl text-forest leading-none">{step.n}</div>
      </div>
      <div className="flex-1">
        <h3 className="font-serif text-xl text-forest leading-tight">{step.title}</h3>
        <p className="text-sm text-ink/85 leading-relaxed mt-1.5">{step.blurb}</p>
        {step.path && (
          <Link
            to={step.path}
            className="inline-block mt-3 text-sm text-ember underline underline-offset-4 hover:text-sunset"
          >
            {step.cta} →
          </Link>
        )}
      </div>
    </li>
  )
}

function BeginAside() {
  return (
    <div className="bg-forest text-bone rounded-2xl p-5">
      <div className="text-xs uppercase tracking-wider text-ochre mb-2">Start hier</div>
      <p className="text-sm leading-relaxed mb-3">
        Net begonnen met oriënteren? Stap 1: check of je aan de visum-voorwaarden voldoet. Daarna pas verder.
      </p>
      <Link to="/visum" className="text-ochre underline underline-offset-4 text-sm">Visum-voorwaarden →</Link>
      <hr className="my-5 border-bone/20" />
      <div className="text-xs uppercase tracking-wider text-ochre mb-2">Snel naar</div>
      <ul className="space-y-2 text-sm">
        <li><Link to="/kosten" className="hover:text-ochre underline underline-offset-4">Wat kost het →</Link></li>
        <li><Link to="/voor-vertrek" className="hover:text-ochre underline underline-offset-4">Voorbereiden →</Link></li>
        <li><Link to="/eerste-week" className="hover:text-ochre underline underline-offset-4">Eerste week →</Link></li>
        <li><Link to="/werk" className="hover:text-ochre underline underline-offset-4">Werk vinden →</Link></li>
      </ul>
    </div>
  )
}
