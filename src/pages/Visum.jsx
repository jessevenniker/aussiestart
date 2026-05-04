import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import {
  FactsTable, Steps, FAQ, ArticleLayout,
  SourceStrip, MarginNote, LastChecked,
} from '../components/Article.jsx'
import SourceLink from '../components/SourceLink.jsx'
import EmailCapture from '../components/EmailCapture.jsx'
import JsonLd from '../components/JsonLd.jsx'
import { SOT, gechecktOp } from '../data/sot.js'

const SITE_URL = 'https://australiestart.nl'

// ─── Structured data ─────────────────────────────────────────────────────────
function visumSchema(v) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        '@id': `${SITE_URL}/visum#article`,
        headline: 'Working Holiday Visum Australië aanvragen: subclass 417 (2026)',
        description:
          'Volledige gids voor het aanvragen van het Working Holiday Visum subclass 417 voor Nederlanders. Kosten AUD 670, online via ImmiAccount, voor 18 t/m 30.',
        url: `${SITE_URL}/visum`,
        dateModified: v.lastChecked,
        inLanguage: 'nl-NL',
        author: { '@id': `${SITE_URL}/#organization` },
        publisher: { '@id': `${SITE_URL}/#organization` },
        isPartOf: { '@id': `${SITE_URL}/#website` },
        about: {
          '@type': 'GovernmentService',
          name: 'Working Holiday visum subclass 417',
          provider: {
            '@type': 'GovernmentOrganization',
            name: 'Department of Home Affairs',
            url: v.bronUrl,
          },
        },
        speakable: {
          '@type': 'SpeakableSpecification',
          cssSelector: ['h1', 'h2', '.facts-table'],
        },
      },
      {
        '@type': 'FAQPage',
        '@id': `${SITE_URL}/visum#faq`,
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Mag ik het Working Holiday visum vanuit Nederland aanvragen?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ja, mits je een Nederlands paspoort hebt, tussen de 18 en 30 bent, geen kinderen ten laste hebt, en niet eerder al twee 417-visums hebt gehad.',
            },
          },
          {
            '@type': 'Question',
            name: `Krijg ik mijn ${v.kosten} terug als mijn Working Holiday visum aanvraag wordt afgewezen?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Nee. De aanvraagkosten zijn niet-restitueerbaar, ook bij afwijzing. Controleer je voorwaarden altijd voordat je betaalt.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hoe lang voor mijn vertrek moet ik het Working Holiday visum aanvragen?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Vier tot zes weken voor vertrek is een veilige marge. Eerder mag ook, het visum is geldig vanaf grant tot 12 maanden later voor inreis. 75% van aanvragen wordt binnen 24 uur verwerkt, maar uitzonderingen kunnen oplopen tot 44 dagen.',
            },
          },
          {
            '@type': 'Question',
            name: 'Mag ik tijdens mijn Working Holiday visum (417) studeren in Australië?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ja, tot maximaal 4 maanden formeel onderwijs. Korte cursussen, taallessen, of een eerste semester van iets langers zijn toegestaan.',
            },
          },
          {
            '@type': 'Question',
            name: 'Wat is het verschil tussen het 417-visum en het 462-visum voor Australië?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Het 462-visum is voor mensen uit een andere lijst landen, zoals Amerikanen en Brazilianen. Nederlanders vragen het 417 aan, het 462 is voor Nederlanders niet relevant.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hoeveel kost het Working Holiday visum voor Australië in 2026?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Het Working Holiday visum subclass 417 kost ${v.kosten} (verhoogd per 1 juli 2025). Dit is het officiële bedrag dat je betaalt aan de Australische overheid via ImmiAccount. Bovenop het visum heb je realisme startbudget nodig voor vlucht, verzekering en de eerste weken.`,
            },
          },
        ],
      },
    ],
  }
}

export default function Visum() {
  const v = SOT.visa417

  return (
    <>
      <Helmet>
        <title>Working Holiday Visum Australië aanvragen 2026 | Aussiestart</title>
        <meta name="description" content="Subclass 417 voor Nederlanders. AUD 670, online via ImmiAccount, voor 18 t/m 30. Stap voor stap, met de vier valkuilen die mensen weken vertraging kosten." />
        <meta property="og:title" content="Working Holiday Visum Australië aanvragen 2026" />
        <meta property="og:description" content="Subclass 417 voor Nederlanders. AUD 670, online via ImmiAccount, voor 18 t/m 30. Geen bureau nodig, je regelt het zelf in 30 minuten." />
        <meta property="og:type" content="article" />
      </Helmet>
      <JsonLd data={visumSchema(v)} />
      <PageHeader
        eyebrow="Officiële gids · Visum"
        title="Working Holiday Visum aanvragen: alles wat klopt in 2026"
        intro="Subclass 417 voor Nederlanders. AUD 670, online via ImmiAccount, voor 18 t/m 30. We lopen je door de aanvraag, bewijsstukken en de vier valkuilen die mensen weken vertraging kosten."
        lastChecked={gechecktOp(v.lastChecked)}
        source={v.bron}
      />

      <ArticleLayout aside={<Sidebar />}>

        {/* ── Disclaimers bovenaan ────────────────────────────────────── */}
        <p>
          Deze gids is geen vervanging voor de officiële site van het Australische Department of Home Affairs.
          Die blijft het laatste woord. Maar wat hieronder staat is direct daar gecontroleerd, met datumstempel.
        </p>

        <SourceStrip
          source={v.bron}
          url={v.bronUrl}
          checked={gechecktOp(v.lastChecked)}
          type="officiële visumregels + praktische toelichting"
        />

        {/* ── Factsheet ─────────────────────────────────────────────── */}
        <h2>Het korte verhaal</h2>
        <FactsTable rows={[
          ['Visum-categorie',              'Subclass 417 (Working Holiday Visa)'],
          ['Kosten aanvraag',              `${v.kosten} (per 1 juli 2025)`],
          ['Leeftijdsgrens Nederlanders',  v.leeftijd],
          ['Geldigheid',                   v.geldigheid + ' vanaf eerste binnenkomst'],
          ['Aanvraagtermijn',              'Tot 12 maanden voor je inreist'],
          ['Verwerkingstijd',              '75% binnen 24 uur, kan oplopen tot 44 dagen'],
          ['Spaarbewijs',                  v.spaarbewijs + ' aantoonbaar bij aanvraag'],
          ['Aanvraagkanaal',               'ImmiAccount: immi.homeaffairs.gov.au'],
        ]} />

        <MarginNote type="note">
          Het 417-visum is voor Nederlanders. Er bestaat ook een 462-visum (Work and Holiday) voor andere
          nationaliteiten zoals Amerikanen. Die geldt voor Nederlanders <strong>niet</strong>.
        </MarginNote>

        {/* ── Wat het visum toestaat ─────────────────────────────────── */}
        <h2>Wat het 417-visum je toestaat</h2>
        <p>
          Met dit visum mag je twaalf maanden in Australië verblijven, gerekend vanaf de dag dat je voor het
          eerst het land binnenkomt. In die twaalf maanden mag je werken bij elke werkgever, in elke sector,
          ergens in Australië. Je mag ook reizen, het land in en uit gaan zo vaak je wilt, en tot vier maanden
          formeel studeren.
        </p>
        <p>
          Eén belangrijke werkbeperking (Condition 8547): je mag standaard maximaal zes maanden bij dezelfde
          werkgever blijven. Er zijn uitzonderingen: andere vestigingen, of schriftelijke toestemming van
          Home Affairs. Controleer de officiële voorwaarden als je langer bij één werkgever wilt.
        </p>

        {/* ── Kosten ────────────────────────────────────────────────── */}
        <h2>Wat het kost: de eerlijke optelling</h2>
        <p>
          De officiële aanvraagkosten zijn <strong>{v.kosten}</strong>. Dat is wat je betaalt aan de Australische
          overheid via ImmiAccount. Maar dat is niet het hele verhaal.
        </p>
        <FactsTable rows={[
          ['Visum (officieel)',           `${v.kosten} (≈ €395)`],
          ['Vlucht heen',                '€700–€1.300 afhankelijk van seizoen'],
          ['Reisverzekering',            '€200–€500 voor de hele periode'],
          ['Spaarbewijs (aantonen)',      `${v.spaarbewijs} (≈ €2.950)`],
          ['Buffer eerste maand',        'AUD 2.000–3.000 voor hostel, eten, eSIM, transport'],
          ['Realistisch startbudget',    '€7.000–€9.000 als je niet meteen werk hebt'],
        ]} />

        <MarginNote type="warn">
          <strong>{v.spaarbewijs} is de officiële bewijsgrens voor het visum, geen realistisch maandbudget.</strong>{' '}
          Je hoeft dit bedrag niet "weg te zetten", maar je moet het wel kunnen aantonen via een bankafschrift.
          In Sydney of Melbourne heb je in de praktijk meer nodig om de eerste weken zonder werk te overbruggen.
        </MarginNote>

        {/* ── Stap voor stap ────────────────────────────────────────── */}
        <h2>De aanvraagprocedure stap voor stap</h2>
        <p>Het hele proces gebeurt online via ImmiAccount. Geen papieren, geen kantoor, geen bureau nodig.</p>
        <Steps items={[
          ['Stap 1', 'Ga naar immi.homeaffairs.gov.au en maak een ImmiAccount aan. Dit is je persoonlijke portaal voor de hele aanvraag en eventuele toekomstige Australische visums.'],
          ['Stap 2', 'Selecteer "Working Holiday Visa (subclass 417)" en kies "First Working Holiday visa". Het formulier vraagt om persoonlijke gegevens, paspoortinfo, reisgeschiedenis, werkverleden, gezondheidsverklaring en karakterverklaring.'],
          ['Stap 3', 'Upload je documenten: gescand paspoort (minimaal 6 maanden geldig na je geplande inreisdatum) en een pasfoto. Soms wordt aanvullend bewijs gevraagd, zoals een bankafschrift voor de spaarvereiste.'],
          ['Stap 4', `Betaal ${v.kosten} via creditcard, debitkaart of PayPal. Dit bedrag is niet-restitueerbaar, ook bij afwijzing.`],
          ['Stap 5', 'Wacht op de uitslag. 75% wordt binnen 24 uur afgehandeld. In uitzonderingsgevallen (bijvoorbeeld extra gezondheidschecks) kan het oplopen tot 44 dagen. Vraag dus ruim op tijd aan.'],
          ['Stap 6', 'Je ontvangt een visum-grant notification per e-mail. Geen sticker, geen stempel. Je visum is elektronisch gekoppeld aan je paspoortnummer. Sla de bevestiging op meerdere plekken op.'],
          ['Stap 7', 'Reis binnen 12 maanden na de grant naar Australië. Vanaf de dag dat je voet aan grond zet, gaat de 12-maanden-klok lopen.'],
        ]} />

        {/* ── Zelf vs bureau ────────────────────────────────────────── */}
        <h2>Zelf aanvragen of via een bureau?</h2>
        <p>
          Bureaus bieden pakketten aan van €549 tot €2.050 waarmee ze "alles regelen", inclusief het visum.
          Maar het visum aanvragen via ImmiAccount is een formulier van 20–30 minuten. Je hebt geen tussenpersoon nodig.
        </p>

        <MarginNote type="warn">
          Vraag nooit een visum aan via een niet-officieel kanaal. Gebruik uitsluitend{' '}
          <a href="https://immi.homeaffairs.gov.au" target="_blank" rel="noopener noreferrer" className="underline text-ember">
            immi.homeaffairs.gov.au
          </a>. Bureaus of sites die beweren het visum voor je aan te vragen, gebruiken altijd alsnog ImmiAccount, jij betaalt dan voor iemand die op jouw computer klikt.
        </MarginNote>

        <div className="not-prose my-6 overflow-hidden rounded-xl border border-sand">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-forest text-bone">
                <th className="py-2.5 px-4 text-left font-medium">Onderdeel</th>
                <th className="py-2.5 px-4 text-left font-medium">Zelf via ImmiAccount</th>
                <th className="py-2.5 px-4 text-left font-medium">Via bureau</th>
              </tr>
            </thead>
            <tbody>
              {[
                ['Kosten', `${v.kosten} officieel`, `${v.kosten} + €549–€2.050 extra`],
                ['Aanvraag', 'Formulier ±30 min', 'Bureau doet het voor je'],
                ['Kans op succes', 'Gelijk', 'Gelijk, zelfde systeem'],
                ['Flexibiliteit', 'Volledig zelf', 'Afhankelijk van pakket'],
                ['Wat je mist', 'Niks bij goede voorbereiding', 'Meer geld in eigen zak houden'],
                ['Nuttig als…', 'n.v.t.', 'Je totaal ontzorgd wilt worden'],
              ].map(([o, z, b], i) => (
                <tr key={o} className={i % 2 === 0 ? 'bg-cream' : 'bg-bone'}>
                  <td className="py-2.5 px-4 text-slate align-top font-medium">{o}</td>
                  <td className="py-2.5 px-4 text-ink">{z}</td>
                  <td className="py-2.5 px-4 text-ink">{b}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── Valkuilen ─────────────────────────────────────────────── */}
        <h2>Vier veelgemaakte fouten</h2>
        <Pitfall n="1" title="Te laat aanvragen.">
          Mensen gaan ervan uit dat 75% binnen 24 uur wordt verwerkt. Dat klopt, maar als jouw aanvraag
          bij de andere 25% valt en je hebt nog vijf dagen tot je vlucht, sta je in de problemen.
          Vraag minimaal 4–6 weken voor vertrek aan.
        </Pitfall>
        <Pitfall n="2" title="Paspoort niet lang genoeg geldig.">
          Australië wil dat je paspoort bij inreis minimaal nog 6 maanden geldig is. Met een 12-maanden visum
          betekent dat: paspoort minstens 18 maanden geldig vanaf aanvraag. Controleer dit vóór je aanvraagt.
        </Pitfall>
        <Pitfall n="3" title="Verkeerde geboortedatum invullen.">
          Het systeem controleert automatisch je leeftijd op de aanvraagdatum. Eén tikfout → aanvraag afgewezen.
          En de {v.kosten} krijg je niet terug.
        </Pitfall>
        <Pitfall n="4" title="Ervan uitgaan dat je nog op je dertigste mag aanvragen.">
          Voor Nederlanders is de leeftijdsgrens {v.leeftijd}. Je moet <em>jonger dan 31</em> zijn op de dag van
          indienen. Ben je 30 en valt je verjaardag over een week? Vraag dan vandaag aan.
        </Pitfall>

        {/* ── 88 dagen ─────────────────────────────────────────────── */}
        <h2>Tweede en derde jaar verlengen</h2>
        <p>
          Het 417-visum kan twee keer verlengd worden. Voorwaarde voor het tweede jaar: 88 dagen
          "specified work" in een goedgekeurde regio tijdens je eerste jaar. Voor het derde jaar: 179 dagen
          tijdens het tweede.
        </p>
        <p>
          "Specified work" is werk dat de Australische overheid wil stimuleren in regionale gebieden, denk
          aan landbouw, fruit picking, vee, mijnbouw, visserij, boomkappen, regionale bouw, en sinds
          5 april 2025 ook ramp-herstelwerk in gebieden die getroffen zijn door bosbranden, overstromingen
          en cyclonen.
        </p>

        <MarginNote type="warn">
          Verifieer altijd de specifieke postcode van je werkplek <em>voordat</em> je aan een baan begint.
          Eén verkeerde postcode betekent dat je gewerkte dagen niet meetellen voor de 88-dagenregel.
          De volledige lijst staat op de site van Home Affairs.
        </MarginNote>

        <p>
          We schreven een aparte gids over de 88-dagenregel met de precieze postcodelijst, welke regio's
          het meest populair zijn en waar je op moet letten bij werkgevers.{' '}
          <Link to="/88-dagen" className="text-ember underline underline-offset-2">Lees de farmwork gids →</Link>
        </p>

        {/* ── FAQ ───────────────────────────────────────────────────── */}
        <h2>Veelgestelde vragen</h2>
        <FAQ q="Mag ik het visum vanuit Nederland aanvragen?">
          Ja, mits je een Nederlands paspoort hebt, tussen de 18 en 30 bent, geen kinderen ten laste hebt,
          en niet eerder al twee 417-visums hebt gehad.
        </FAQ>
        <FAQ q={`Krijg ik mijn ${v.kosten} terug als mijn aanvraag wordt afgewezen?`}>
          Nee. De aanvraagkosten zijn niet-restitueerbaar, ook bij afwijzing. Controleer je voorwaarden
          altijd voordat je betaalt.
        </FAQ>
        <FAQ q="Hoe lang voor mijn vertrek moet ik aanvragen?">
          Vier tot zes weken voor vertrek is een veilige marge. Eerder mag ook, het visum is geldig
          vanaf grant tot 12 maanden later voor inreis.
        </FAQ>
        <FAQ q="Mag ik tijdens mijn 417-visum studeren?">
          Ja, tot maximaal 4 maanden formeel onderwijs. Korte cursussen, taallessen, of een eerste
          semester van iets langers.
        </FAQ>
        <FAQ q="Wat is het verschil met het 462-visum?">
          Voor Nederlanders niet relevant. Het 462 is voor mensen uit een andere lijst landen, zoals
          Amerikanen en Brazilianen. Nederlanders vragen het 417 aan.
        </FAQ>

        {/* ── Bronnen ──────────────────────────────────────────────── */}
        <h2>Bronnen</h2>
        <ul className="text-sm space-y-1.5">
          <li>
            <SourceLink href={v.bronUrl}>
              {v.bron}: officiële visumpagina subclass 417
            </SourceLink>
            <span className="text-slate"> · DHA pagina, bijgewerkt 26 februari 2026</span>
          </li>
          <li>
            <SourceLink href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/specified-work">
              DHA: specified work voor de 88-dagenregel
            </SourceLink>
          </li>
          <li>
            <SourceLink href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/6-month-work-limitation">
              DHA: 6-month work limitation (Condition 8547)
            </SourceLink>
          </li>
          <li>
            <SourceLink href="https://www.ato.gov.au/individuals-and-families/coming-to-australia-or-going-overseas/coming-to-australia/working-holiday-makers">
              Australian Taxation Office: Working Holiday Makers belasting
            </SourceLink>
          </li>
          <li className="text-slate">
            Visa Application Charge: verhoogd van AUD 635 naar AUD 670 per 1 juli 2025 (DHA aankondiging).
          </li>
        </ul>
        <p className="text-sm text-slate mt-4">
          Volledig bronnen-overzicht op de <Link to="/bronnen" className="text-ember underline">bronnen-pagina</Link>.
        </p>

        <LastChecked
          date={gechecktOp(v.lastChecked)}
          source={v.bron}
          sourceUrl={v.bronUrl}
        />
      </ArticleLayout>

      {/* ── EmailCapture buiten ArticleLayout, volle breedte ─────────── */}
      <section className="container-wide pb-16">
        <EmailCapture
          headline="Bewaar de visumstappen in je checklist"
          subline="De gratis Australië Start Checklist zet het aanvraagproces, bewijsstukken en valkuilen op een rij, zodat je niets vergeet voor je betaalt."
        />
      </section>
    </>
  )
}

/* ─── Lokale componenten ────────────────────────────────────────────────── */

function Pitfall({ n, title, children }) {
  return (
    <div className="not-prose my-4 border-l-4 border-ember pl-4 py-1">
      <div className="text-xs font-semibold uppercase tracking-wider text-ember mb-1">
        Fout {n}
      </div>
      <div className="font-serif text-lg text-forest mb-1">{title}</div>
      <p className="text-ink/85 leading-relaxed text-sm">{children}</p>
    </div>
  )
}

function Sidebar() {
  return (
    <div className="space-y-5">
      {/* Volgende stap */}
      <div className="border-l-4 border-forest pl-4">
        <div className="text-xs font-semibold uppercase tracking-wider text-slate mb-2">
          Volgende stap
        </div>
        <p className="text-sm leading-relaxed text-ink/80 mb-3">
          Visum geregeld? Bereken wat een Working Holiday je écht kost, niet de
          €5.000 die bemiddelaars zeggen.
        </p>
        <Link to="/kosten" className="text-sm text-ember underline underline-offset-4 hover:text-sunset">
          Open de kosten-calculator →
        </Link>
      </div>

      {/* In je eerste week */}
      <div className="border-t border-sand pt-5">
        <div className="text-xs font-semibold uppercase tracking-wider text-slate mb-3">
          In je eerste week
        </div>
        <ul className="space-y-2 text-sm">
          <li>
            <Link to="/medicare" className="text-ember underline underline-offset-4 hover:text-sunset">
              Medicare voor Nederlanders →
            </Link>
          </li>
          <li>
            <Link to="/tax-file-number" className="text-ember underline underline-offset-4 hover:text-sunset">
              Tax File Number aanvragen →
            </Link>
          </li>
          <li>
            <Link to="/banking" className="text-ember underline underline-offset-4 hover:text-sunset">
              Bankrekening openen →
            </Link>
          </li>
          <li>
            <Link to="/esim" className="text-ember underline underline-offset-4 hover:text-sunset">
              eSIM of simkaart kiezen →
            </Link>
          </li>
        </ul>
      </div>

      {/* 88 dagen */}
      <div className="border-t border-sand pt-5">
        <div className="text-xs font-semibold uppercase tracking-wider text-slate mb-2">
          Tweede visum
        </div>
        <p className="text-sm leading-relaxed text-ink/80 mb-3">
          Wil je een tweede jaar? Lees alles over de 88-dagenregel, goedgekeurde postcodes
          en welke werkgevers je kunt vertrouwen.
        </p>
        <Link to="/88-dagen" className="text-sm text-ember underline underline-offset-4 hover:text-sunset">
          Farmwork & 88 dagen →
        </Link>
      </div>

      {/* Checklist CTA compact */}
      <div className="border-t border-sand pt-5">
        <EmailCapture
          variant="compact"
          headline="Gratis: de Australië Start Checklist"
          cta="Stuur mij de checklist"
        />
      </div>
    </div>
  )
}
