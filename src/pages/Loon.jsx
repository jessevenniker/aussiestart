import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import { Steps, Callout, FAQ, FactsTable, ArticleLayout } from '../components/Article.jsx'
import SourceLink from '../components/SourceLink.jsx'

export default function Loon() {
  return (
    <>
      <Helmet>
        <title>Wat verdien je als WHM in Australië? Loon en belasting 2026 · Aussiestart</title>
        <meta name="description" content="Minimumloon AUD 24,95, casual loading 25%, penalty rates voor weekend en feestdagen. Wat houd je netto over na belasting en super in 2026?" />
      </Helmet>
      <PageHeader
        eyebrow="Werk · Loon en belasting"
        title="Wat verdien je écht in Australië als Working Holiday Maker?"
        intro="Minimumloon, casual loading, penalty rates, super, belasting. Wat houd je netto over en wat krijg je terug bij vertrek?"
        lastChecked="29 april 2026"
        source="Fair Work Commission, ATO, Fair Work Ombudsman"
      />

      <ArticleLayout aside={<LoonAside />}>
        <p>
          Een van de eerste vragen voor vertrek: hoeveel ga ik verdienen, en wat houd ik over na belasting,
          super en kosten? Hieronder de echte cijfers, met tarieven die kloppen tot juli 2026 (wanneer Fair Work
          Commission het minimumloon weer aanpast).
        </p>

        <h2>Het minimumloon, de bodem</h2>
        <p>
          Sinds 1 juli 2025 is het Australische minimumloon <strong>AUD 24,95 per uur</strong>. Dat is de absolute
          ondergrens voor elke werknemer ouder dan 21 die niet onder een aparte industrie-award valt.
        </p>
        <p>Bij een 38-uurs werkweek komt dat neer op:</p>
        <ul>
          <li>AUD 948 per week (vóór belasting)</li>
          <li>AUD 4.108 per maand (gemiddeld)</li>
          <li>AUD 49.300 per jaar bij voltijd werken</li>
        </ul>
        <p>
          Het Nederlandse minimumloon (boven 21) was per 1 januari 2026 ongeveer €14,14 per uur. Het Australische
          minimumloon van AUD 24,95 (≈ €14,80) is dus iets hoger dan het Nederlandse, en daar bovenop komt nog
          een aanzienlijke bonus voor flex-werkers.
        </p>

        <h2>Casual loading, waarom je vaak méér krijgt</h2>
        <p>
          De meeste backpacker-banen zijn casual werk: geen vaste uren, geen betaald verlof, kunnen worden
          afgemeld aan het eind van een shift. Dat klinkt onzeker, en is het ook. Maar daar staat een vergoeding
          tegenover.
        </p>
        <p>
          Een werknemer met casual contract krijgt <strong>25% extra</strong> bovenop het basis-uurtarief. Dat
          heet casual loading. Het is bedoeld om het ontbreken van vakantiegeld, ziektewet en zekerheid te
          compenseren.
        </p>
        <FactsTable rows={[
          ['Basis-minimumloon',           'AUD 24,95'],
          ['Casual loading (25%)',        'AUD 6,24'],
          ['Casual minimumloon',          'AUD 31,19/uur'],
        ]} />
        <p>
          In de praktijk verdienen backpackers in een café, hostel, bouwplaats, fruitveld of supermarkt vaak
          AUD 28 tot AUD 35 per uur. Een aanzienlijk verschil met "minimumloon" zoals je het uit Nederland kent.
        </p>
        <Callout kind="info" title="Awards kunnen afwijken">
          De cijfers hierboven zijn gebaseerd op de National Minimum Wage. Veel sectoren vallen onder een
          "modern award" met eigen tarieven: hospitality (Hospitality Industry Award), retail (General Retail
          Industry Award), bouw (Building and Construction Award) etc. Award-tarieven zijn meestal hoger dan
          de minimum, soms gelijk. Je werkgever moet je vertellen onder welk award je valt. Lookup via{' '}
          <SourceLink href="https://www.fairwork.gov.au/employment-conditions/awards/find-my-award">Fair Work, Find my award</SourceLink>.
        </Callout>

        <h2>Penalty rates, extra voor weekend en feestdagen</h2>
        <p>Bovenop casual loading komen penalty rates: extra betaling voor uren buiten standaard werktijden.</p>
        <FactsTable rows={[
          ['Zaterdag',     '+25% tot +50%'],
          ['Zondag',       '+50% tot +100%'],
          ['Avonden',      '+15% tot +25%'],
          ['Feestdagen',   '+150% tot +250%'],
        ]} />
        <Callout kind="success" title="Reken-voorbeeld">
          Een hostel-receptionist op zondag, casual contract: AUD 24,95 × 1,25 (casual) × 1,75 (zondag) ≈ AUD 54
          per uur. Een 8-uurs zondagshift levert ruim AUD 430 bruto op. Daarom werken backpackers graag in
          weekenden, avonden en op feestdagen.
        </Callout>

        <h2>Belasting, wat je inhoudt</h2>
        <p>
          Als Working Holiday Maker val je onder een speciale belastingschaal. Onderstaande tarieven gelden
          voor het belastingjaar 2025-2026 (1 juli 2025 t/m 30 juni 2026). De ATO past schalen vrijwel altijd
          aan op 1 juli, dus check vlak voor het nieuwe fiscale jaar of dit nog actueel is.
        </p>
        <FactsTable rows={[
          ['AUD 0 – 45.000',         '15%'],
          ['AUD 45.001 – 135.000',   '30%'],
          ['AUD 135.001 – 190.000',  '37%'],
          ['Boven AUD 190.000',      '45%'],
        ]} />
        <Callout kind="warn" title="Werkgever moet WHM-employer zijn">
          Dit tarief geldt alleen als jouw werkgever bij de ATO geregistreerd staat als WHM-employer. Niet
          geregistreerd? Dan betaal je 32,5% of meer over je hele loon en moet je het verschil terugkrijgen via
          je belastingaangifte. Vraag bij elke nieuwe werkgever of zij geregistreerd zijn vóór je tekent.
        </Callout>

        <h2>Eén maand uitgerekend</h2>
        <p>Stel: je werkt 38 uur per week aan AUD 31,19 (casual minimumloon) gedurende 4 weken. Geen weekenden, geen feestdagen.</p>
        <ul>
          <li>Bruto loon: 38 × 31,19 × 4 = <strong>AUD 4.741</strong></li>
          <li>Belasting (15%): AUD 711</li>
          <li>Netto in handen: <strong>AUD 4.030</strong></li>
          <li>Omgerekend: ongeveer <strong>€2.380 per maand</strong></li>
        </ul>
        <p>
          Bij een gemiddeld backpacker-budget van AUD 2.500-3.000 per maand voor levenskosten in een grote stad,
          hou je dus AUD 1.000-1.500 over om te sparen of te reizen.
        </p>

        <h2>Superannuation, pensioen dat je terugkrijgt</h2>
        <p>
          Sinds 1 juli 2025 is je werkgever verplicht <strong>12% van je loon</strong> in een super-fonds te
          storten, bovenop je salaris (was 11,5%). De oude AUD 450/maand-drempel is per 1 juli 2022
          afgeschaft, dus vrijwel elke werknemer in loondienst krijgt super.
        </p>
        <p>
          Belangrijk voor jou als WHM: dit geld kun je terugkrijgen wanneer je definitief vertrekt uit Australië
          via de <strong>Departing Australia Superannuation Payment (DASP)</strong>. Je vraagt het aan via de
          ATO-website nadat je je visum hebt laten verlopen of bent uitgereisd.
        </p>
        <p>
          Bij een jaar werken aan AUD 50.000 bruto kom je op AUD 6.000 super. Specifiek voor 417- en
          462-houders houdt de ATO bij DASP-uitkering 65% in op het belastbare deel (een speciaal hoog tarief
          dat alleen voor Working Holiday Makers geldt). De overgebleven ~35% komt op je rekening, meestal
          binnen 28 dagen na de vervaldatum van je visum. Bij AUD 6.000 super houd je dus rond AUD 2.100 over.
          Geen klein bedrag.
        </p>

        <h2>Onderbetaling, sinds 2025 een misdrijf</h2>
        <p>
          Belangrijk om te weten: sinds januari 2025 is het opzettelijk onderbetalen van werknemers in Australië
          een <strong>strafbaar feit</strong>. De Fair Work Act voorziet in:
        </p>
        <ul>
          <li>Boetes tot <strong>AUD 7,8 miljoen</strong> voor bedrijven</li>
          <li>Gevangenisstraf tot <strong>10 jaar</strong> voor individuele eigenaren of managers</li>
          <li>Verplichte nabetaling met rente</li>
        </ul>
        <p>
          Grote vooruitgang ten opzichte van vroeger, toen onderbetaling jarenlang structureel voorkwam in
          hospitality, agriculture en retail.
        </p>
        <Callout kind="info" title="Wat je moet doen als backpacker">
          <ul className="list-disc pl-5 space-y-1">
            <li>Check je payslips: bij elk loon moet je casual loading, super en belasting zien</li>
            <li>Houd je uren bij in een eigen systeem (een app of zelfs notitieblok)</li>
            <li>Bij verdenking van onderbetaling: meld het bij de Fair Work Ombudsman via fairwork.gov.au of bel 13 13 94</li>
            <li>Zelfs na vertrek kun je nog 6 jaar achteraf claim indienen</li>
          </ul>
        </Callout>

        <h2>Sectoren waar backpackers het meest verdienen</h2>
        <h3>Hospitality (cafe, bar, restaurant)</h3>
        <ul>
          <li>AUD 28-35 per uur casual met loading</li>
          <li>Veel weekend- en avond-shifts mogelijk = hogere effectieve uurloon</li>
          <li>Vaak fooien bovenop loon (5-15% van rekening, niet verplicht maar gangbaar)</li>
        </ul>
        <h3>Bouw (vereist White Card)</h3>
        <ul>
          <li>AUD 30-45 per uur casual</li>
          <li>Specialisaties zoals lassen, elektriciteit kunnen AUD 50+ worden</li>
          <li>Fysiek zwaar maar goed betaald</li>
        </ul>
        <h3>Mining en regional</h3>
        <ul>
          <li>AUD 30-50 per uur</li>
          <li>Vaak fly-in-fly-out, veel uren tegen hoge tarieven</li>
          <li>Geschikt voor wie 88 dagen wil halen voor 2e WHV</li>
        </ul>
        <h3>Farmwork (fruit picking, vee)</h3>
        <ul>
          <li>AUD 25-30 per uur als je per uur wordt betaald</li>
          <li>Soms per stuk (per kilo, per kist), daar zit veel variatie</li>
          <li>Pas op voor onderbetaling: bij twijfel altijd Fair Work Ombudsman bellen</li>
        </ul>
        <h3>Au pair</h3>
        <ul>
          <li>AUD 200-350 per week + kost en inwoning</li>
          <li>Lager geldelijk maar je woont gratis</li>
          <li>Goed voor wie cultuurervaring wil</li>
        </ul>
        <h3>Retail, kassieren, kantoor</h3>
        <ul>
          <li>AUD 25-32 per uur casual</li>
          <li>Stabiele uren, minder weekend-werk</li>
          <li>Goed voor wie regelmatige betaling wil</li>
        </ul>

        <h2>Wat je over een jaar kunt verdienen</h2>
        <p>Bij voltijd werken aan casual minimumloon, met af en toe weekend- en avondshifts:</p>
        <FactsTable rows={[
          ['Bruto per jaar',                     'AUD 50.000–60.000'],
          ['Belasting (15%)',                    'AUD 7.500–9.000'],
          ['Super-bijdrage werkgever',           'AUD 6.000–7.200'],
          ['Super netto na DASP-claim',          'AUD 2.100–2.500'],
          ['Netto in handen',                    'AUD 42.500–51.000'],
          ['Omgerekend',                         '€25.000–30.000'],
        ]} />
        <p>
          Bij een budget van €20.000 voor levenskosten kun je dus realistisch €5.000-10.000 sparen of besteden
          aan reizen. Dit is bij voltijd 12 maanden. Veel WHM's werken een paar maanden, reizen een paar
          maanden, werken weer, dan zijn de cijfers proportioneel anders.
        </p>

        <h2>Veelgestelde vragen</h2>
        <FAQ q="Krijg ik vakantiegeld?">
          Nee, casual werknemers krijgen geen vakantiegeld of sick pay. Daar staat de 25% loading tegenover.
        </FAQ>
        <FAQ q="Hoe vaak word ik betaald?">
          Meestal wekelijks of tweewekelijks, in tegenstelling tot Nederland waar maandelijks gangbaar is.
        </FAQ>
        <FAQ q="Wat is een payslip?">
          Een loonstrook. Werkgever is verplicht je deze te geven, op papier of digitaal. Hierin moet staan:
          gewerkte uren, basis-tarief, casual loading, eventuele penalty rates, super-bijdrage,
          belasting-inhouding, totaal netto.
        </FAQ>
        <FAQ q="Wat als ik ziek word op een casual baan?">
          Helaas geen betaald ziekteverlof. Je casual loading is bedoeld om dit risico te dekken. Sommige
          werkgevers bieden vrijwillig korte vergoeding aan, maar dat is uitzonderlijk.
        </FAQ>
        <FAQ q="Mag mijn werkgever cash betalen?">
          Ja, maar zelfs bij cash-betaling moet er een payslip zijn en moeten belasting en super worden
          afgedragen. Cash zonder papieren is vrijwel altijd onderbetaling onder een andere naam. Niet doen.
        </FAQ>
        <FAQ q="Hoeveel uur per week mag ik werken op een 417-visum?">
          Geen wettelijke beperking op het aantal uren, alleen op de duur bij één werkgever (max 6 maanden).
          Veel WHM's werken 38-40 uur per week, sommigen 50+ in piekperiodes.
        </FAQ>
        <FAQ q="Word ik anders behandeld omdat ik buitenlander ben?">
          Niet wettelijk. Het Australische arbeidsrecht beschermt iedere werknemer, ongeacht visum-status of
          nationaliteit.
        </FAQ>

        <h2>Bronnen</h2>
        <ul className="text-sm space-y-1.5">
          <li>
            <SourceLink href="https://www.fairwork.gov.au/pay-and-wages/minimum-wages">
              Fair Work Commission, minimumloon (geldig vanaf 1 juli 2025)
            </SourceLink>
          </li>
          <li>
            <SourceLink href="https://www.ato.gov.au/individuals-and-families/coming-to-australia-or-going-overseas/coming-to-australia/working-holiday-makers">
              ATO, Working Holiday Makers tax rates 2025-2026
            </SourceLink>
          </li>
          <li>
            <SourceLink href="https://www.fairwork.gov.au/find-help-for/visa-holders-migrants">
              Fair Work Ombudsman, rechten van visa holders
            </SourceLink>
            <span className="text-slate"> · meldingen onderbetaling: 13 13 94</span>
          </li>
          <li className="text-slate">
            Fair Work Act 2009, gewijzigd januari 2025 met criminele sancties op opzettelijke onderbetaling.
          </li>
        </ul>
      </ArticleLayout>
    </>
  )
}

function LoonAside() {
  return (
    <div className="bg-forest text-bone rounded-2xl p-5">
      <div className="text-xs uppercase tracking-wider text-ochre mb-2">Snelle cijfers 2026</div>
      <ul className="space-y-2 text-sm">
        <li><span className="text-bone/70">Minimumloon:</span> AUD 24,95</li>
        <li><span className="text-bone/70">Casual minimum:</span> AUD 31,19</li>
        <li><span className="text-bone/70">Casual loading:</span> 25%</li>
        <li><span className="text-bone/70">Zondag (casual):</span> ≈AUD 54</li>
        <li><span className="text-bone/70">WHM-belasting:</span> 15% tot 45k</li>
        <li><span className="text-bone/70">Super:</span> 12%</li>
        <li><span className="text-bone/70">DASP-belasting:</span> 65% (netto terug ≈35%)</li>
      </ul>
      <hr className="my-5 border-bone/20" />
      <div className="text-xs uppercase tracking-wider text-ochre mb-2">Verder lezen</div>
      <ul className="space-y-2 text-sm">
        <li><Link to="/tax-file-number" className="hover:text-ochre underline underline-offset-4">TFN aanvragen →</Link></li>
        <li><Link to="/banking" className="hover:text-ochre underline underline-offset-4">Bank kiezen →</Link></li>
        <li><Link to="/werk" className="hover:text-ochre underline underline-offset-4">Werk vinden →</Link></li>
        <li><Link to="/kosten" className="hover:text-ochre underline underline-offset-4">Kosten-calculator →</Link></li>
      </ul>
    </div>
  )
}
