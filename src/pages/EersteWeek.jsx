import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import { ArticleLayout, Callout } from '../components/Article.jsx'
import AffiliateLink from '../components/AffiliateLink.jsx'

const tasks = [
  {
    title: 'Tax File Number aanvragen',
    blurb: 'Zonder TFN betaal je 45% belasting i.p.v. 15%. Online via ato.gov.au, gratis, 10 minuten.',
    when: 'Dag 1–3',
    path: '/tax-file-number',
  },
  {
    title: 'Medicare inschrijven',
    blurb: 'Door het verdrag NL–AUS heb je recht op Medicare. EHIC of NL-zorgpolis meenemen.',
    when: 'Dag 1–7',
    path: '/medicare',
  },
  {
    title: 'Bankrekening openen',
    blurb: 'CommBank, ANZ, NAB of Westpac plus Wise. Paspoort + Australisch adres voldoen meestal.',
    when: 'Dag 1–3',
    path: '/banking',
  },
  {
    title: 'eSIM activeren',
    blurb: 'Telsim, Airalo of Saily. Voor je vlucht activeren, vanaf landing internet. Telsim ~€13 voor 80 GB op Telstra-netwerk.',
    when: 'Voor vertrek',
    path: '/esim',
  },
  {
    title: 'OPAL/Myki/Go Card kopen',
    blurb: 'Reispas voor het OV in Sydney/Melbourne/Brisbane. Verkrijgbaar bij elke kiosk.',
    when: 'Dag 1',
    path: null,
  },
  {
    title: 'Hostel of sharehouse zoeken',
    blurb: 'Eerste week meestal hostel. Per stad een aanrader-lijst, daarna Flatmates.com.au, Facebook-groepen, Gumtree.',
    when: 'Week 1–2',
    path: '/hostels',
  },
]

export default function EersteWeek() {
  return (
    <>
      <Helmet>
        <title>Eerste week in Australië, wat regel je wanneer | Aussiestart</title>
        <meta name="description" content="Dag-voor-dag-lijst voor je eerste week. TFN, Medicare, bankrekening, SIM, OPAL. Zo zit je niet in week 4 nog rond te bellen." />
      </Helmet>
      <PageHeader
        eyebrow="Aankomst"
        title="Je eerste week in Sydney of Melbourne"
        intro="TFN, Medicare, bankrekening, SIM-kaart, OPAL-pas. Een korte lijst zodat je niet in week 4 nog rondrent."
      />

      <figure className="container-wide pt-8 pb-4">
        <div className="aspect-[16/9] sm:aspect-[21/9] overflow-hidden rounded-2xl">
          <img
            src="/img/foto/IMG_1008.jpg"
            alt="Sydney Opera House van onderen, blauwe lucht"
            className="w-full h-full object-cover"
          />
        </div>
        <figcaption className="text-xs text-slate mt-2 px-1">
          Sydney Opera House, dag twee. Tussen Circular Quay en Wynyard zit alles wat je in week 1 nodig hebt.
        </figcaption>
      </figure>

      <ArticleLayout aside={<EersteWeekAside />}>
        <p>
          De eerste week is de week die het verschil maakt tussen "ik kom binnen, ik werk binnen 14 dagen" en
          "ik krijg pas in week 5 mijn eerste payslip omdat ik geen TFN had". Hieronder de zes dingen die
          praktisch iedereen in zijn eerste week regelt, en in welke volgorde.
        </p>

        <h2>Eerst: van vliegveld naar stad</h2>
        <p>
          Drie opties vanaf Sydney (SYD), Melbourne (MEL) of Brisbane (BNE) airport, in volgorde van prijs:
        </p>
        <ul>
          <li><strong>Trein/openbaar vervoer:</strong> AUD 10-22 (Sydney AirportLink, Melbourne Skybus, Brisbane Airtrain). Goedkoopst, maar met grote backpack soms krap.</li>
          <li><strong>Vooraf-geboekte transfer (KiwiTaxi e.d.):</strong> AUD 50-90 voor een privé-rit naar je hostel. Vaste prijs, geen verrassingen, chauffeur staat op je naam bij aankomsthal.</li>
          <li><strong>Uber / Didi vanaf de stoeprand:</strong> AUD 45-80 afhankelijk van vraag, kan oplopen bij surge pricing.</li>
        </ul>
        <Callout kind="info" title="Wanneer KiwiTaxi nuttig is">
          Aankomst om 23:00 met een hostel in Newtown of Brunswick? Vooraf boeken voorkomt 45 minuten zoeken
          naar de juiste platforms terwijl je net 22 uur in een vliegtuig zat. Bij een ochtend-aankomst met
          alleen een handbagage is OV vaak slimmer.
        </Callout>
        <div className="not-prose my-5">
          <AffiliateLink partner="kiwitaxi" variant="button">
            Boek transfer met KiwiTaxi
          </AffiliateLink>
        </div>

        <h2>De zes dingen, op volgorde</h2>
        <div className="not-prose grid gap-3 my-6">
          {tasks.map((t, i) => (
            <div key={t.title} className="border border-sand bg-bone rounded-xl p-5 flex gap-5">
              <div className="shrink-0 w-12 text-center">
                <div className="font-serif text-3xl text-forest leading-none">{i + 1}</div>
                <div className="text-[10px] uppercase tracking-wider text-slate mt-1">{t.when}</div>
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-xl text-forest leading-tight">
                  {t.path ? (
                    <Link to={t.path} className="hover:text-ember">{t.title} →</Link>
                  ) : t.title}
                </h3>
                <p className="text-sm text-ink/80 leading-relaxed mt-1">{t.blurb}</p>
                {!t.path && (
                  <p className="text-xs text-slate mt-1">
                    <em>Eigen pagina volgt in volgende fase.</em>
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        <h2>Een paar praktische tips uit de eerste week</h2>
        <ul>
          <li>
            <strong>Hostel-adres mag op formulieren.</strong> Voor TFN, bank en Medicare hoef je geen huurcontract
            te tonen. Je hostel-adres voldoet, of een Post Restante-adres bij Australia Post.
          </li>
          <li>
            <strong>Open je bank vóór je TFN binnen is.</strong> De bank heeft je TFN niet direct nodig, alleen
            later voor rente-aanslagen. Wachten op je TFN voor je een rekening opent kost je een week.
          </li>
          <li>
            <strong>Werk zoeken kan al voor je TFN binnen is.</strong> Je hebt 28 dagen vanaf indienst om je TFN
            aan je werkgever door te geven. Begin dus gewoon zoeken.
          </li>
          <li>
            <strong>Schrijf je niet in bij Centrelink.</strong> Als WHM heb je geen recht op Centrelink-uitkeringen.
            Negeer alle suggesties die zeggen dat dat moet.
          </li>
        </ul>
      </ArticleLayout>
    </>
  )
}

function EersteWeekAside() {
  return (
    <div className="bg-forest text-bone rounded-2xl p-5">
      <div className="text-xs uppercase tracking-wider text-ochre mb-2">Belangrijkste 2</div>
      <p className="text-sm leading-relaxed mb-4">
        Veruit de twee belangrijkste taken, beide gratis, beide moeten gebeuren in week 1.
      </p>
      <ul className="space-y-2 text-sm">
        <li><Link to="/tax-file-number" className="text-ochre underline underline-offset-4">Tax File Number →</Link></li>
        <li><Link to="/medicare" className="text-ochre underline underline-offset-4">Medicare →</Link></li>
      </ul>
    </div>
  )
}
