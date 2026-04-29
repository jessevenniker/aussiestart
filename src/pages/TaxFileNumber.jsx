import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import { Steps, Callout, FAQ, FactsTable, ArticleLayout } from '../components/Article.jsx'
import SourceLink from '../components/SourceLink.jsx'

export default function TaxFileNumber() {
  return (
    <>
      <Helmet>
        <title>Tax File Number aanvragen, Working Holiday Australië</title>
        <meta name="description" content="TFN aanvragen is gratis, online en duurt 10 minuten. Zonder TFN betaal je 45% belasting i.p.v. 15%. Stappenplan + de twee dingen die je vooraf moet weten." />
      </Helmet>
      <PageHeader
        eyebrow="Eerste week · Belasting"
        title="Tax File Number (TFN) aanvragen, wat je in je eerste week regelt"
        intro="Zonder TFN betaal je het hoogste belastingtarief op je salaris (45% of meer). Met TFN betaal je 15% over je eerste AUD 45.000. Aanvragen is gratis, online, en duurt 10 minuten."
        lastChecked="29 april 2026"
        source="Australian Taxation Office (ATO)"
      />

      <ArticleLayout aside={<TFNAside />}>
        <p>
          Een TFN is je belastingnummer in Australië. Zonder TFN betaal je het hoogste belastingtarief op je
          salaris (45% of meer) en kun je later het verschil pas terugvragen. Met TFN betaal je het Working
          Holiday Maker-tarief van 15% over je eerste AUD 45.000.
        </p>
        <p>Korte versie: aanvragen is gratis, online, en duurt 10 minuten. Maar er zijn twee dingen die je vooraf moet weten.</p>

        <h2>Vooraf: wat heb je nodig?</h2>
        <p>Voor de online aanvraag heb je het volgende klaar:</p>
        <ul>
          <li>Je paspoort</li>
          <li>Een Australisch postadres waar je TFN naartoe gestuurd kan worden (kan een hostel zijn, een hotel, een vriend, een Airbnb, of een Post Restante adres bij Australia Post)</li>
          <li>Je e-mailadres</li>
          <li>Een Australisch telefoonnummer is handig maar niet altijd verplicht</li>
        </ul>
        <Callout kind="warn" title="Twee voorwaarden van de ATO">
          <ul className="list-disc pl-5 space-y-1">
            <li>Je moet <em>in Australië zijn</em> op het moment van aanvragen. Vanuit Nederland kan het niet via de online route.</li>
            <li>Je moet een geldig 417- of 462-visum hebben dat is gekoppeld aan je paspoort.</li>
          </ul>
        </Callout>

        <h2>Stap voor stap</h2>
        <Steps items={[
          ['Stap 1', 'Ga naar de officiële ATO-pagina: ato.gov.au/individuals-and-families/tax-file-number/apply-for-a-tfn. Belangrijk: er bestaan derde-partij websites die je tegen betaling helpen met de aanvraag. Doe dat niet, de ATO-aanvraag is gratis en niet ingewikkeld.'],
          ['Stap 2', 'Kies "Permanent migrants and temporary visitors" (jij valt onder de tweede categorie). Klik door naar de IAR (Individual Auto Registration).'],
          ['Stap 3', 'De eerste pagina herinnert je eraan dat je in Australië moet zijn, dat je TFN-nummer voor het leven is, en dat je contact kunt opnemen met de ATO bij vragen.'],
          ['Stap 4', 'Vul je persoonlijke gegevens in zoals ze in je paspoort staan. Eén tikfout en de match met de Department of Home Affairs (waar je visum is geregistreerd) faalt, en je aanvraag stagneert.'],
          ['Stap 5', 'Vul je Australische postadres in. Tip: als je nog van hostel naar hostel hopt, gebruik dan Post Restante. Dit is een gratis service van Australia Post waarbij je post gerouteerd wordt naar elk Australia Post-kantoor naar keuze, en je post daar kunt ophalen met je paspoort.'],
          ['Stap 6', 'Bevestig dat je informatie klopt en verzend.'],
          ['Stap 7', 'Krijg je referentienummer en wacht. Je TFN komt per post binnen 28 dagen. Vaak sneller, vaak rond de 10-14 dagen.'],
        ]} />

        <h2>Wat je werkgever ervan moet weten</h2>
        <p>Zodra je een baan hebt vraagt je werkgever om een ingevulde "Tax file number declaration". Op dat formulier moet je:</p>
        <ul>
          <li>Je TFN invullen (mag wachten tot het binnen is, je hebt 28 dagen vanaf indienst)</li>
          <li>Aankruisen dat je een Working Holiday Maker bent (subclass 417 of 462)</li>
        </ul>
        <p>
          Volgens de ATO moet je werkgever ook geregistreerd staan als WHM-employer bij de ATO. Als ze dat zijn,
          mogen ze het 15%-tarief toepassen op je eerste AUD 45.000. Als ze dat niet zijn, betaal je 32.5% of meer
          en moet je het achteraf via een belastingaangifte terugvragen.
        </p>
        <Callout kind="info" title="Praktische tip">
          Vraag je werkgever bij het tekenen van het contract of zij bij de ATO geregistreerd staan als
          WHM-employer. Niet-geregistreerde werkgevers zijn niet illegaal, maar het kost jou geld in cashflow.
        </Callout>

        <h2>Wat is de WHM-belasting precies?</h2>
        <p>De Australische belasting op Working Holiday Maker-loon, voor het belastingjaar 2025-2026 (loopt van 1 juli 2025 tot 30 juni 2026):</p>
        <FactsTable rows={[
          ['AUD 0 – 45.000',         '15%'],
          ['AUD 45.001 – 135.000',   '30%'],
          ['AUD 135.001 – 190.000',  '37%'],
          ['Boven AUD 190.000',      '45%'],
        ]} />
        <p>
          Bij een gemiddeld backpacker-loon van AUD 24/uur (minimumloon) en 38 uur per week kom je uit op zo'n
          AUD 47.000 per jaar bij voltijd werk. De meeste WHM'ers blijven onder de eerste schijf.
        </p>

        <h2>Wat als ik nooit een belastingaangifte heb gedaan?</h2>
        <p>
          Als WHM moet je aan het eind van het Australische belastingjaar (30 juni) controleren of je verplicht
          bent een belastingaangifte (tax return) te doen. Volgens de ATO hoef je geen aangifte te doen als:
        </p>
        <ul>
          <li>Al je inkomen kwam uit salaris als WHM, en</li>
          <li>Er is correct belasting ingehouden door je werkgever, en</li>
          <li>Je hebt geen andere inkomstenbronnen of HELP-leningen</li>
        </ul>
        <p>
          In andere gevallen wel. Je werkgever geeft je via Single Touch Payroll (STP) een digitaal income
          statement door, dat je via myGov kunt zien. Dit is je equivalent van een Nederlandse jaaropgave.
        </p>

        <h2>Een vaak gemiste detail</h2>
        <Callout kind="warn">
          Op je tax file number declaration moet je een vakje kruisen waar staat <strong>"Working Holiday Maker"</strong>.
          Niet "Australian resident for tax purposes". Niet "foreign resident". Het derde vakje. Veel mensen
          kruisen het verkeerde vakje en betalen daardoor maandenlang verkeerd belasting tot ze het ontdekken.
        </Callout>

        <h2>Veelgestelde vragen</h2>
        <FAQ q="Mag ik een TFN aanvragen voor ik in Australië aankom?">
          Online via IAR niet. Er bestaat een papieren formulier voor "people living outside Australia", maar in
          de praktijk wachten de meeste WHM'ers tot ze in Australië zijn en gebruiken dan IAR.
        </FAQ>
        <FAQ q="Wat als mijn TFN niet binnen 28 dagen komt?">
          De ATO vraagt om geduld te hebben tijdens de verwerkingsperiode. Dien geen tweede aanvraag in, want dat
          vertraagt de eerste. Bel de ATO op 13 28 61 (binnen Australië) als het echt te lang duurt.
        </FAQ>
        <FAQ q="Mag ik werken zonder TFN?">
          Ja, technisch wel. Maar dan houdt je werkgever het hoogste belastingtarief in (45%+) tot je TFN gegeven
          hebt. Je krijgt het verschil pas terug bij je belastingaangifte het volgende jaar.
        </FAQ>
        <FAQ q="Heb ik mijn TFN nodig voor een bankrekening?">
          Niet om de rekening te openen, wel om rente-inhoudingen te voorkomen. Banken houden 47% in op rente als
          je geen TFN hebt geleverd. Bij een gemiddelde studentenrekening met weinig saldo is dat een paar dollar
          per jaar, maar nog steeds zonde.
        </FAQ>
        <FAQ q="Mag ik mijn TFN delen?">
          Wees voorzichtig. Geef je TFN alleen aan werkgevers nadat je voor ze begint, aan de ATO, en aan je bank.
          Niet in een sollicitatie, niet via internet, niet aan random instanties. Een gestolen TFN kan misbruikt
          worden voor identiteitsfraude.
        </FAQ>

        <h2>Bronnen</h2>
        <ul className="text-sm space-y-1.5">
          <li>
            <SourceLink href="https://www.ato.gov.au/individuals-and-families/tax-file-number/apply-for-a-tfn/foreign-passport-holders-permanent-migrants-and-temporary-visitors-tfn-application">
              ATO, TFN aanvragen voor temporary visitors
            </SourceLink>
          </li>
          <li>
            <SourceLink href="https://www.ato.gov.au/individuals-and-families/coming-to-australia-or-going-overseas/coming-to-australia/working-holiday-makers">
              ATO, Working Holiday Makers belastingpagina
            </SourceLink>
            <span className="text-slate"> · tarieven 2025-2026</span>
          </li>
          <li>
            <SourceLink href="https://www.ato.gov.au/forms-and-instructions/tfn-declaration">
              ATO, TFN declaration formulier
            </SourceLink>
          </li>
          <li>
            <SourceLink href="https://my.gov.au/en/services/work/currently-employed/tax-when-you-work/getting-a-tax-file-number">
              myGov, TFN-portaal (voor het terugvinden van je TFN)
            </SourceLink>
          </li>
          <li>
            <SourceLink href="https://www.fairwork.gov.au/pay-and-wages/minimum-wages">
              Fair Work Ombudsman, minimumloon
            </SourceLink>
            <span className="text-slate"> · bron voor AUD 24,10/uur backpacker-tarief</span>
          </li>
        </ul>
        <p className="text-sm text-slate mt-4">
          Volledig bronnen-overzicht op de <Link to="/bronnen" className="text-ember underline">bronnen-pagina</Link>.
        </p>
      </ArticleLayout>
    </>
  )
}

function TFNAside() {
  return (
    <div className="bg-forest text-bone rounded-2xl p-5">
      <div className="text-xs uppercase tracking-wider text-ochre mb-2">Snelle feiten</div>
      <ul className="space-y-2 text-sm">
        <li><span className="text-bone/70">Kosten:</span> <strong>gratis</strong></li>
        <li><span className="text-bone/70">Aanvragen:</span> online via ato.gov.au</li>
        <li><span className="text-bone/70">Levering:</span> binnen 28 dagen per post</li>
        <li><span className="text-bone/70">Met TFN:</span> 15% belasting</li>
        <li><span className="text-bone/70">Zonder TFN:</span> 45%+ belasting</li>
      </ul>
      <hr className="my-5 border-bone/20" />
      <div className="text-xs uppercase tracking-wider text-ochre mb-2">Verder lezen</div>
      <ul className="space-y-2 text-sm">
        <li><Link to="/medicare" className="hover:text-ochre underline underline-offset-4">Medicare voor Nederlanders →</Link></li>
        <li><Link to="/eerste-week" className="hover:text-ochre underline underline-offset-4">Wat regel je in week 1 →</Link></li>
        <li><Link to="/werk" className="hover:text-ochre underline underline-offset-4">Werk vinden →</Link></li>
      </ul>
    </div>
  )
}
