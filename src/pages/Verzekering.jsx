import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import { Callout, FAQ, FactsTable, ArticleLayout } from '../components/Article.jsx'
import SourceLink from '../components/SourceLink.jsx'
import AffiliateLink from '../components/AffiliateLink.jsx'

export default function Verzekering() {
  return (
    <>
      <Helmet>
        <title>Reisverzekering working holiday Australië, 4 polissen vergeleken · Aussiestart</title>
        <meta name="description" content="SafetyWing, JoHo, World Nomads en Allianz vergeleken voor Working Holiday Makers. Eerlijk over wat ze niet uitkeren, met beslisboom voor jouw situatie." />
      </Helmet>
      <PageHeader
        eyebrow="Verzekering"
        title="Vier polissen voor working holiday Australië, eerlijk vergeleken"
        intro="SafetyWing, JoHo, World Nomads en Allianz onder de loep. Wat dekken ze, wat dekken ze niet, en wat past bij jouw situatie?"
        lastChecked="29 april 2026"
        source="Officiële polisvoorwaarden + ervaringen NL backpackers"
      />

      <ArticleLayout aside={<VerzekeringAside />}>
        <p>
          Medicare voor Nederlanders dekt veel, maar niet alles (
          <Link to="/medicare">zie Medicare-pagina</Link>). Voor tandheelkunde, ambulance buiten je staat,
          privéziekenhuis, repatriëring, ongelukken, verloren bagage en vlucht-annulering heb je een
          aanvullende reisverzekering nodig. Hieronder vier polissen die specifiek geschikt zijn voor Working
          Holiday Makers.
        </p>

        <Callout kind="info" title="Hoe deze vergelijking tot stand kwam">
          We vergelijken op basis van publieke polisvoorwaarden (april 2026) en ervaringen uit
          NL-backpacker-fora. Eén partner heeft een affiliate-relatie met ons (SafetyWing), zichtbaar gelabeld
          bij elke link. Ons criterium: we adviseren niet wat we zelf niet zouden gebruiken. Volledige
          afspraken op de <Link to="/affiliate-disclosure">disclosure-pagina</Link>.
        </Callout>

        <h2>De korte versie</h2>
        <ul>
          <li><strong>Voor 6+ maanden, flexibel verlengen:</strong> SafetyWing</li>
          <li><strong>Voor wie liever NL-aanbieder wil:</strong> JoHo</li>
          <li><strong>Voor adventure-zware reizen (duiken, klimmen, surfen):</strong> World Nomads</li>
          <li><strong>Voor uitgebreide eigendommen-dekking:</strong> Allianz</li>
        </ul>

        <h2>De vergelijkingstabel</h2>
        <FactsTable rows={[
          ['SafetyWing Nomad Insurance',  '~€25-40/mnd · maandelijks opzegbaar · NL-talig: nee'],
          ['JoHo Reisverzekering',        '~€40-65/mnd · jaarpolis · NL-talig: ja'],
          ['World Nomads Explorer',       '~€35-55/mnd · per reis-periode · NL-talig: nee'],
          ['Allianz Travel',              '~€40-70/mnd · jaarpolis · NL-talig: ja'],
        ]} />
        <p className="text-xs text-slate">
          Premies zijn indicatief voor leeftijd 25, alleenreizend, dekking Australië en wereld excl. VS.
          Werkelijke premie hangt af van leeftijd, gekozen extras en eigen risico.
        </p>

        <h2>SafetyWing Nomad Insurance</h2>
        <p>
          Maandelijks opzegbare subscription-verzekering, ontwikkeld voor digital nomads en backpackers.
          Goedkoopste optie voor wie 6+ maanden onderweg is en flexibiliteit wil.
        </p>
        <h3>Wat is goed</h3>
        <ul>
          <li>€25-40 per maand, je kunt op elk moment stoppen of verlengen</li>
          <li>Inclusief medische evacuatie en repatriëring</li>
          <li>Een aantal adventure-activiteiten standaard gedekt (surfen, hiken, diepte tot 30 m duiken)</li>
          <li>Werkt vrijwel wereldwijd, dus ook tijdens reizen voor of na Australië</li>
          <li>Aanvragen kan terwijl je al onderweg bent (geen "moet vóór vertrek geboekt zijn")</li>
        </ul>
        <h3>Wat is minder</h3>
        <ul>
          <li>Eigendommen-dekking is beperkt: $3.000 totaal, met deductible. Dure laptop of camera valt vaak buiten</li>
          <li>Niet-NL talige polis en klantenservice (alleen Engels)</li>
          <li>Geen vlucht-annulering bij persoonlijke redenen, alleen bij medische noodsituatie</li>
          <li>Mentale gezondheid: alleen bij acute crisis, geen lopende therapie</li>
          <li>Tandheelkunde alleen bij ongeval, niet preventief</li>
        </ul>
        <Callout kind="info" title="Onze positie">
          We werken sinds 2026 als SafetyWing Ambassador. Hieronder zie je een afnemerslink met onze
          referentie-ID. Voor jou verandert er niets aan de prijs of voorwaarden. Voor ons betekent het 10%
          recurring commissie zolang jij verzekerd blijft. Onze aanbeveling staat los van die commissie:
          SafetyWing past bij flexibele lange reizen, en niet bij wie eigendommen wil verzekeren of een
          NL-talige polis wil.
        </Callout>
        <div className="not-prose my-6">
          <AffiliateLink partner="safetywing" variant="button">
            Bekijk SafetyWing-polis
          </AffiliateLink>
        </div>

        <h2>JoHo Reisverzekering</h2>
        <p>
          Nederlandse aanbieder, jaarpolis, NL-talige klantenservice. Specifiek gericht op studenten en
          (langere) reizigers. Goede keuze als je liever in NL afhandelt en NL-talig advies wilt.
        </p>
        <h3>Wat is goed</h3>
        <ul>
          <li>NL-talige polis, NL-talige klantenservice, schade-afhandeling in Nederland</li>
          <li>Jaarpolis met goede prijs-kwaliteit voor 6-12 maanden</li>
          <li>Eigendommen-dekking op niveau van een echte reisverzekering, niet een nomad-app</li>
          <li>Optionele dekking voor stage of werk, ook bij specifieke beroepen</li>
        </ul>
        <h3>Wat is minder</h3>
        <ul>
          <li>Duurder dan SafetyWing (€40-65/mnd vs €25-40/mnd)</li>
          <li>Minder flexibel: jaarpolis is jaarpolis, geen maand-tot-maand</li>
          <li>Adventure-activiteiten vaak alleen via aanvullende module</li>
          <li>Soms eigen risico per claim, vooraf checken</li>
        </ul>
        <p className="text-sm">
          Geen affiliate-link beschikbaar (we hebben hier geen partnership). Direct boeken via{' '}
          <SourceLink href="https://www.joho.nl/insurances/">joho.nl/insurances</SourceLink>.
        </p>

        <h2>World Nomads Explorer</h2>
        <p>
          Internationale aanbieder, gespecialiseerd in adventure-reizen. Beste keuze voor wie veel duikt,
          klimt, surft, skiet of andere risicovolle activiteiten plant.
        </p>
        <h3>Wat is goed</h3>
        <ul>
          <li>Uitgebreide adventure-coverage: 200+ activiteiten standaard gedekt</li>
          <li>Tijdens reis verlengen of dekking uitbreiden mogelijk</li>
          <li>Goede klantenservice (Engels), 24/7 emergency assist</li>
        </ul>
        <h3>Wat is minder</h3>
        <ul>
          <li>Duurder dan SafetyWing voor vergelijkbare basisdekking</li>
          <li>Geen NL-talige polis</li>
          <li>Minder gunstig voor lange aaneengesloten reizen (per-reis-model)</li>
        </ul>
        <p className="text-sm">
          Geen affiliate-link beschikbaar. Direct boeken via{' '}
          <SourceLink href="https://www.worldnomads.com/">worldnomads.com</SourceLink>.
        </p>

        <h2>Allianz Travel</h2>
        <p>
          Grote internationale verzekeraar met NL-tak. Goed voor wie uitgebreide eigendommen-dekking wil en
          bereid is iets meer te betalen voor een gevestigde naam.
        </p>
        <h3>Wat is goed</h3>
        <ul>
          <li>Uitgebreide eigendommen-dekking, hogere maximums dan nomad-aanbieders</li>
          <li>NL-talige klantenservice en polis</li>
          <li>Sterke wereldwijde aanwezigheid voor grote claims</li>
        </ul>
        <h3>Wat is minder</h3>
        <ul>
          <li>Duurste van de vier voor vergelijkbare dekking</li>
          <li>Voorwaarden zijn complex, polisblad lezen is een opgave</li>
          <li>Niet alle WHM-relevante activiteiten standaard gedekt</li>
        </ul>
        <p className="text-sm">
          Geen affiliate-link. Direct boeken via{' '}
          <SourceLink href="https://www.allianz-assistance.nl/">allianz-assistance.nl</SourceLink>.
        </p>

        <h2>Beslisboom: welke past bij jou?</h2>
        <FactsTable rows={[
          ['Lang verblijf (6-12 mnd), flexibel, low-budget', 'SafetyWing'],
          ['Lang verblijf, NL-talig, basis-comfort',          'JoHo'],
          ['Adventure-zware reis (duiken, klimmen, ski)',     'World Nomads'],
          ['Veel waardevolle spullen (laptop/camera/sieraden)', 'Allianz of JoHo'],
          ['Meerdere reizen na Australië gepland',            'SafetyWing'],
          ['Stage of vrijwilligerswerk in plaats van WHV',    'JoHo (specifieke modules)'],
        ]} />

        <h2>Wat Medicare al voor je doet</h2>
        <p>
          Vergeet niet: door het verdrag tussen Nederland en Australië heb je recht op Medicare-toegang. Dat
          dekt publieke ziekenhuiszorg en huisarts. Een aanvullende reisverzekering vult de gaten op:
          tandheelkunde, ambulance, privéziekenhuis, repatriëring, eigendommen, vlucht-annulering. Volledige
          uitleg op de <Link to="/medicare">Medicare-pagina</Link>.
        </p>

        <h2>Veelgestelde vragen</h2>
        <FAQ q="Mag ik mijn Nederlandse zorgverzekering laten doorlopen tijdens WHV?">
          Ja, sterker, voor het Medicare-RHCA-verdrag is een lopende NL-zorgpolis vereist. De Nederlandse
          basisverzekering vergoedt buitenland echter beperkt. Voor de gaten heb je nog steeds een
          reisverzekering nodig.
        </FAQ>
        <FAQ q="Werkt SafetyWing als reguliere reisverzekering?">
          SafetyWing is een hybride: medisch sterk, eigendommen en vlucht-annulering matig. Wie een
          "klassieke" reisverzekering wil met dekking voor verloren laptop, geannuleerde vlucht en meer, is
          beter af bij JoHo of Allianz.
        </FAQ>
        <FAQ q="Kan ik wisselen tijdens mijn verblijf?">
          Bij SafetyWing wel, je betaalt per maand. Bij JoHo, World Nomads en Allianz vaak niet zonder
          terugbetaling van premie. Lees voorwaarden voor je tekent.
        </FAQ>
        <FAQ q="Wat met pre-existing conditions?">
          Bij elke aanbieder zijn er beperkingen op pre-existing condities. Bij langlopende behandeling
          (chronische medicatie, mental health) altijd vooraf de verzekeraar bellen, niet pas bij claim.
        </FAQ>
        <FAQ q="Wordt schade aan een gehuurde camper of auto gedekt?">
          Niet door je reisverzekering. Camper- en autohuur in Australië heeft eigen verzekering (Excess
          Reduction). Reken op AUD 25-50 per dag aanvullend voor een goede dekking.
        </FAQ>

        <h2>Affiliate-disclosure</h2>
        <p className="text-sm text-slate">
          We werken sinds 29 april 2026 als <em>SafetyWing Ambassador</em>. Klik je via een SafetyWing-link op
          deze pagina en sluit je een polis af, dan ontvangen wij 10% recurring commissie zolang je verzekerd
          blijft. Voor jou verandert er niets aan de prijs of voorwaarden. Voor JoHo, World Nomads en Allianz
          hebben we geen affiliate-relatie. Volledig overzicht op de{' '}
          <Link to="/affiliate-disclosure" className="text-ember underline">disclosure-pagina</Link>.
        </p>

        <h2>Bronnen</h2>
        <ul className="text-sm space-y-1.5">
          <li><SourceLink href="https://safetywing.com/nomad-insurance/">SafetyWing, Nomad Insurance polisvoorwaarden</SourceLink></li>
          <li><SourceLink href="https://www.joho.nl/insurances/">JoHo, reisverzekering voor langere reizen</SourceLink></li>
          <li><SourceLink href="https://www.worldnomads.com/travel-insurance/policies">World Nomads, polisvoorwaarden</SourceLink></li>
          <li><SourceLink href="https://www.allianz-assistance.nl/reisverzekering/">Allianz Travel Nederland</SourceLink></li>
          <li><SourceLink href="https://www.servicesaustralia.gov.au/reciprocal-health-care-agreements-visiting-from-netherlands">Services Australia, RHCA voor Nederlanders</SourceLink></li>
        </ul>
      </ArticleLayout>
    </>
  )
}

function VerzekeringAside() {
  return (
    <div className="bg-forest text-bone rounded-2xl p-5">
      <div className="text-xs uppercase tracking-wider text-ochre mb-2">Onze keuze</div>
      <p className="font-serif text-2xl text-bone leading-tight mb-1">SafetyWing</p>
      <p className="text-sm text-bone/80 leading-relaxed mb-4">
        Voor de meeste WHM's: flexibel, betaalbaar, sterke medische dekking. Niet voor wie veel waardevolle
        spullen meeneemt.
      </p>
      <AffiliateLink partner="safetywing">Bekijk de polis</AffiliateLink>
      <hr className="my-5 border-bone/20" />
      <div className="text-xs uppercase tracking-wider text-ochre mb-2">Verder lezen</div>
      <ul className="space-y-2 text-sm">
        <li><Link to="/medicare" className="hover:text-ochre underline underline-offset-4">Medicare voor Nederlanders →</Link></li>
        <li><Link to="/kosten" className="hover:text-ochre underline underline-offset-4">Wat kost een WHV →</Link></li>
        <li><Link to="/affiliate-disclosure" className="hover:text-ochre underline underline-offset-4">Affiliate-disclosure →</Link></li>
      </ul>
    </div>
  )
}
