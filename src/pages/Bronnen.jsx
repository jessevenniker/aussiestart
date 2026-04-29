import { Helmet } from 'react-helmet-async'
import PageHeader from '../components/PageHeader.jsx'
import SourceLink from '../components/SourceLink.jsx'

const sources = [
  {
    label: 'Australian Department of Home Affairs',
    role: 'Officiële bron voor visum 417 (Working Holiday Visa) en 462 (Work and Holiday).',
    items: [
      { title: 'Working Holiday Visa (subclass 417), hoofdpagina',
        href: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417' },
      { title: 'First Working Holiday visa, voorwaarden en aanvraag',
        href: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/first-working-holiday-417' },
      { title: 'Specified work voor 88-dagen-regel',
        href: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/specified-work' },
      { title: '6-month work limitation (Condition 8547)',
        href: 'https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/6-month-work-limitation' },
      { title: 'Visa Pricing Estimator',
        href: 'https://immi.homeaffairs.gov.au/visas/visa-pricing-estimator' },
    ],
  },
  {
    label: 'Australian Taxation Office (ATO)',
    role: 'Officiële bron voor Tax File Number, Working Holiday Maker-belasting en aangifte.',
    items: [
      { title: 'Tax File Number aanvragen',
        href: 'https://www.ato.gov.au/individuals-and-families/tax-file-number/apply-for-a-tfn' },
      { title: 'TFN voor foreign passport holders en temporary visitors',
        href: 'https://www.ato.gov.au/individuals-and-families/tax-file-number/apply-for-a-tfn/foreign-passport-holders-permanent-migrants-and-temporary-visitors-tfn-application' },
      { title: 'Working Holiday Makers, belasting en tarieven',
        href: 'https://www.ato.gov.au/individuals-and-families/coming-to-australia-or-going-overseas/coming-to-australia/working-holiday-makers' },
      { title: 'TFN declaration (formulier dat je werkgever vraagt)',
        href: 'https://www.ato.gov.au/forms-and-instructions/tfn-declaration' },
    ],
  },
  {
    label: 'Services Australia',
    role: 'Officiële bron voor Medicare en de Reciprocal Health Care Agreement (RHCA) tussen Nederland en Australië.',
    items: [
      { title: 'RHCA voor bezoekers uit Nederland',
        href: 'https://www.servicesaustralia.gov.au/reciprocal-health-care-agreements-visiting-from-netherlands' },
      { title: 'RHCA, overzicht alle landen',
        href: 'https://www.servicesaustralia.gov.au/when-reciprocal-health-care-agreements-apply-and-you-visit-australia' },
      { title: 'RHCA bij bezoek aan Nederland (omgekeerd)',
        href: 'https://www.servicesaustralia.gov.au/reciprocal-health-care-agreement-visiting-netherlands' },
    ],
  },
  {
    label: 'myGov / Australian Government',
    role: 'Centraal portaal voor TFN, Medicare-account en belastingaangifte.',
    items: [
      { title: 'TFN aanvragen via myGov',
        href: 'https://my.gov.au/en/services/work/currently-employed/tax-when-you-work/getting-a-tax-file-number' },
    ],
  },
  {
    label: 'Fair Work Ombudsman',
    role: 'Officiële bron voor minimumloon, arbeidsrechten en werkgever-verplichtingen.',
    items: [
      { title: 'Minimum wages',
        href: 'https://www.fairwork.gov.au/pay-and-wages/minimum-wages' },
      { title: 'Visa holders and migrant workers, rechten',
        href: 'https://www.fairwork.gov.au/find-help-for/visa-holders-migrants' },
    ],
  },
]

export default function Bronnen() {
  return (
    <>
      <Helmet>
        <title>Bronnen en verantwoording · Aussiestart</title>
        <meta name="description" content="Officiële bronnen voor de info op aussiestart.nl: DHA, ATO, Services Australia, myGov, Fair Work. Plus uitleg over onze controle-cyclus." />
      </Helmet>
      <PageHeader
        eyebrow="Verantwoording"
        title="Bronnen en hoe we cijfers checken"
        intro="Per pagina onderaan staan de bronnen met datum. Hieronder het volledige overzicht, plus uitleg over onze controle-cyclus."
        lastChecked="29 april 2026"
      />

      <section className="container-wide py-12">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_280px]">
          <div className="space-y-12">
            {sources.map((src) => (
              <section key={src.label}>
                <h2 className="font-serif text-2xl text-forest mb-1">{src.label}</h2>
                <p className="text-sm text-slate mb-4 max-w-prose">{src.role}</p>
                <ul className="space-y-2">
                  {src.items.map((item) => (
                    <li key={item.href} className="text-sm">
                      <SourceLink href={item.href}>{item.title}</SourceLink>
                    </li>
                  ))}
                </ul>
              </section>
            ))}

            <section>
              <h2 className="font-serif text-2xl text-forest mb-3">Hoe we cijfers checken</h2>
              <div className="prose-custom">
                <p>
                  Voor elke pagina geldt:
                </p>
                <ul>
                  <li>Officiële bron leidt. We citeren wat DHA, ATO of Services Australia zelf zegt, niet wat een
                  bemiddelaar of forum-post claimt.</li>
                  <li>Datumstempel onderaan elke pillar (Laatst gecheckt). Geen onzichtbare oude content.</li>
                  <li>Update-cyclus van drie maanden. Bij wijzigingen in tarieven, regels of formulieren updaten
                  we sneller.</li>
                  <li>Voor prijsranges (hostelhuur, vluchten, sharehouse) gebruiken we Flatmates.com.au, Skyscanner
                  en Hostelworld als secundaire bron, want die bewegen sneller dan officiële bronnen.</li>
                </ul>
                <p>
                  Klopt er iets niet? Mail de correctie met bronvermelding via de{' '}
                  <a href="/contact" className="text-ember underline">contactpagina</a>. We updaten meestal binnen
                  een week en vermelden de update onderaan de pagina.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-serif text-2xl text-forest mb-3">Wat we niet zelf verifiëren</h2>
              <div className="prose-custom">
                <p>
                  Eerlijk over wat we wel en niet kunnen checken:
                </p>
                <ul>
                  <li><strong>Vluchtprijzen.</strong> Te dynamisch. Check Skyscanner of Google Flights op het moment van
                  plannen.</li>
                  <li><strong>Hostelprijzen per dag.</strong> Verschillen per stad en seizoen. We geven ranges, geen
                  vaste tarieven.</li>
                  <li><strong>Bank-fees voor toeristen.</strong> Veranderen 1-2 keer per jaar. Check de actuele
                  voorwaarden voor je een rekening opent.</li>
                  <li><strong>Werkgever-betrouwbaarheid in 88-dagen-regio's.</strong> Veranderlijk per seizoen.
                  Community-feedback (Facebook-groepen, Backpacker Job Board) is hier de beste informatiebron.</li>
                </ul>
              </div>
            </section>
          </div>

          <aside className="lg:sticky lg:top-24 self-start space-y-4">
            <div className="bg-forest text-bone rounded-2xl p-5">
              <div className="text-xs uppercase tracking-wider text-ochre mb-2">Geverifieerde feiten</div>
              <ul className="space-y-1.5 text-sm">
                <li><span className="text-bone/70">Visumkosten:</span> AUD 670</li>
                <li><span className="text-bone/70">Spaargeld-eis:</span> AUD 5.000</li>
                <li><span className="text-bone/70">Leeftijd NL:</span> 18 t/m 30</li>
                <li><span className="text-bone/70">WHM-tarief:</span> 15% tot AUD 45.000</li>
                <li><span className="text-bone/70">Medicare:</span> gratis via RHCA</li>
                <li><span className="text-bone/70">TFN:</span> gratis via ATO</li>
              </ul>
              <hr className="my-4 border-bone/20" />
              <p className="text-xs text-bone/70 leading-relaxed">
                Alle cijfers zijn gecheckt op 29 april 2026 bij de officiële bronnen hierboven.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
