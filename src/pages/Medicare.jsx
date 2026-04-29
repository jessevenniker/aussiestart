import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import { Steps, Callout, FAQ, ArticleLayout } from '../components/Article.jsx'
import SourceLink from '../components/SourceLink.jsx'

export default function Medicare() {
  return (
    <>
      <Helmet>
        <title>Medicare in Australië voor Nederlanders, Aussiestart</title>
        <meta name="description" content="Door het verdrag tussen Nederland en Australië heb je tijdens je WHV recht op Medicare. Wat dekt het wel, wat niet, en hoe schrijf je je in." />
      </Helmet>
      <PageHeader
        eyebrow="Eerste week · Zorg"
        title="Medicare in Australië voor Nederlanders, wat klopt er echt"
        intro="Door een verdrag tussen Nederland en Australië heb je tijdens je verblijf recht op Medicare-toegang. Veel mensen weten dit niet en sluiten daardoor onnodige extra dekking af."
        lastChecked="29 april 2026"
        source="Services Australia"
      />

      <ArticleLayout aside={<MedicareAside />}>
        <p>
          Medicare is de Australische publieke zorgverzekering. Voor Nederlanders is hier iets bijzonders: door
          een verdrag tussen Nederland en Australië heb je tijdens je verblijf recht op Medicare-toegang, ook
          tijdens een Working Holiday. Veel mensen weten dit niet en sluiten daardoor onnodige extra dekking af.
        </p>
        <Callout kind="warn" title="Belangrijke noot vooraf">
          Medicare is geen vervanging van een goede reisverzekering. Het is een aanvulling. Wat het wel en niet
          dekt staat verderop op deze pagina.
        </Callout>

        <h2>Heb ik er recht op?</h2>
        <p>Ja, als je voldoet aan de volgende voorwaarden:</p>
        <ul>
          <li>Je hebt een Nederlands paspoort, of bent niet-Nederlander maar wel ingeschreven in het Nederlandse zorgverzekeringsstelsel</li>
          <li>Je hebt een geldig Australisch visum (waaronder 417, 462, en student-visum)</li>
          <li>Je kunt aantonen dat je in Nederland verzekerd bent</li>
        </ul>
        <p>
          De toegang loopt door zolang ten minste een van deze drie geldt: je visum is nog geldig, je Nederlandse
          zorgverzekering is nog actief, of je European Health Insurance Card is nog geldig. Welke van de drie het
          eerst verloopt, bepaalt het einde.
        </p>

        <h2>Wat moet ik meenemen om in te schrijven?</h2>
        <p>Op een Australisch Medicare Service Centre laat je het volgende zien:</p>
        <ol>
          <li>Je Nederlandse paspoort (of niet-Nederlands paspoort als je in Nederland verzekerd bent)</li>
          <li>Je geldige Australische visum</li>
          <li>
            <strong>Een van de volgende twee:</strong>
            <ul>
              <li>Je European Health Insurance Card met de letters NL erop, of</li>
              <li>Bewijs dat je geldig verzekerd bent bij een Nederlandse zorgverzekeraar</li>
            </ul>
          </li>
        </ol>
        <p>
          Dat laatste kan een polisblad of een digitale bevestigingsbrief zijn. Bel je zorgverzekeraar voor je
          vertrek en vraag of ze je iets in het Engels kunnen sturen, dat scheelt gedoe aan de balie.
        </p>

        <h2>Wat dekt Medicare voor Nederlanders precies?</h2>
        <p>Volgens Services Australia, de officiële Australische bron, dekt Medicare voor Nederlanders:</p>
        <ul>
          <li>Medisch noodzakelijke zorg als publieke patiënt in een publiek ziekenhuis. Dit omvat zowel opname als poliklinische zorg.</li>
          <li>Medisch noodzakelijke zorg buiten het ziekenhuis door een dokter, met Medicare-vergoeding</li>
          <li>Sommige medicijnen die onder het Pharmaceutical Benefits Scheme (PBS) vallen, tegen het algemene tarief</li>
        </ul>
        <p>Wat je dus <em>niet</em> gedekt krijgt:</p>
        <ul>
          <li>Tandheelkunde</li>
          <li>Optiek (brillen, lenzen)</li>
          <li>Ambulance-vervoer (per staat verschillend, dit kost je honderden tot duizenden dollars als je niet aanvullend verzekerd bent)</li>
          <li>Privéziekenhuiszorg</li>
          <li>Medicijnen buiten het PBS</li>
          <li>Repatriëring naar Nederland bij ernstige ziekte</li>
          <li>Reisongelukken die niet medisch noodzakelijk zijn</li>
        </ul>

        <h2>Wanneer gaat de dekking in?</h2>
        <p>
          Officieel: vanaf de dag dat je in Australië aankomt. Dus zelfs als je je nog niet bij Medicare hebt
          ingeschreven, kun je achteraf een claim indienen voor zorg die je in die eerste paar dagen kreeg.
        </p>
        <p>
          Maar in de praktijk: zonder Medicare-kaart en zonder inschrijving moet je vaak op het moment zelf
          voorschieten en pas later claimen. En Medicare-claim-procedures kunnen weken duren. Schrijf je dus
          zo snel mogelijk na aankomst in.
        </p>

        <h2>Hoe schrijf ik mij in?</h2>
        <Steps items={[
          ['Stap 1', 'Vind een Medicare Service Centre. Die staan in elke grote stad. In Sydney bijvoorbeeld op meerdere plekken in de CBD en buitenwijken. Adressen staan op servicesaustralia.gov.au.'],
          ['Stap 2', 'Vul ter plaatse een Medicare-aanmeldformulier in (of doe het van tevoren online via het Services Australia-portaal als dat voor jouw situatie kan).'],
          ['Stap 3', 'Toon je documenten zoals hierboven beschreven.'],
          ['Stap 4', 'Krijg je Medicare-nummer direct, fysiek kaartje volgt later per post (gebruik het adres van je hostel of een vriend, dat is geen probleem).'],
        ]} />

        <h2>Maar moet ik dan nog wel een aparte reisverzekering nemen?</h2>
        <p>Ja, en dit is geen sales-praatje, dit is praktische logica. Hier is waarom.</p>
        <p>
          Medicare dekt geen tandheelkunde, geen optiek, geen privéziekenhuis, geen repatriëring, geen ambulance
          in de meeste staten, geen ongelukken-uitkering, geen aansprakelijkheid, geen verloren bagage, geen
          vlucht-annulering. Een goede reisverzekering vult deze gaten op.
        </p>
        <p>
          Voor wie 12 maanden in Australië zit kost die aanvulling tussen de €200 en €500 voor de hele periode.
          Dat is verzekering tegen scenario's die honderden tot duizenden euros zouden kosten.
        </p>
        <p>
          Op de aparte <Link to="/verzekering">verzekeringspagina</Link> vergelijken we vier polissen die specifiek
          geschikt zijn voor Working Holiday Makers in Australië, met de exact wat-wel-en-niet-gedekt informatie.
        </p>

        <h2>Een misverstand dat we vaak zien</h2>
        <p>
          Veel Working Holiday Makers denken dat ze door SafetyWing of vergelijkbare verzekeringen volledig gedekt
          zijn en dus geen Medicare hoeven aanvragen. Dat klopt niet helemaal. Voor publieke ziekenhuiszorg via
          Medicare hoef je geen excess te betalen. Op een verzekering wel. Bovendien is Medicare gratis. Schrijf
          je dus toch in, ook als je goed verzekerd bent.
        </p>
        <p>
          Andersom denken sommige mensen dat Medicare voor Nederlanders alles dekt en je geen aparte verzekering
          nodig hebt. Ook fout, om de redenen hierboven.
        </p>

        <h2>Veelgestelde vragen</h2>
        <FAQ q="Werkt mijn Nederlandse zorgverzekering ook in Australië?">
          Niet direct. De Nederlandse basisverzekering vergoedt buiten Europa beperkt, en wat ze wel vergoeden is
          via het Wereld-deel van de aanvullende verzekering of via de speciale "buitenland-dekking". Vraag je
          eigen verzekeraar om uitleg, en vergelijk wat zij dekken met Medicare en je reisverzekering, zodat je
          geen dubbele dekking betaalt of juist gaten hebt.
        </FAQ>
        <FAQ q="Wat als ik een ongeluk krijg in een privéziekenhuis?">
          Dat valt buiten Medicare. Dan ben je 100% afhankelijk van je reisverzekering, en als die niet dekt,
          betaal je zelf.
        </FAQ>
        <FAQ q="Wat met de ambulance?">
          In de meeste staten kost een ambulance honderden tot duizenden dollars en is dat niet gedekt door
          Medicare. Dit is een van de belangrijkste reden om sowieso een aparte reisverzekering te hebben.
        </FAQ>
        <FAQ q="Hoe vaak moet ik mij verlengen?">
          Je dekking loopt automatisch door zolang je visum, je Nederlandse zorgverzekering en je EHIC geldig zijn.
          Als een daarvan vernieuwd wordt, kun je je Medicare online verlengen.
        </FAQ>

        <h2>Bronnen</h2>
        <ul className="text-sm space-y-1.5">
          <li>
            <SourceLink href="https://www.servicesaustralia.gov.au/reciprocal-health-care-agreements-visiting-from-netherlands">
              Services Australia, RHCA voor bezoekers uit Nederland
            </SourceLink>
            <span className="text-slate"> · pagina laatst geüpdatet 17 maart 2025</span>
          </li>
          <li>
            <SourceLink href="https://www.servicesaustralia.gov.au/when-reciprocal-health-care-agreements-apply-and-you-visit-australia">
              Services Australia, RHCA-overzicht alle landen
            </SourceLink>
          </li>
          <li>
            <SourceLink href="https://www.servicesaustralia.gov.au/reciprocal-health-care-agreement-visiting-netherlands">
              Services Australia, RHCA bij bezoek aan Nederland (omgekeerd)
            </SourceLink>
          </li>
        </ul>
        <p className="text-sm text-slate mt-4">
          Mocht een Australische ziekenhuisbalie of arts onbekend zijn met de RHCA-regeling voor Nederlanders,
          vraag ze dan de eerste pagina hierboven op te zoeken. Het verdrag is officieel en geldig. Volledig
          bronnen-overzicht op de <Link to="/bronnen" className="text-ember underline">bronnen-pagina</Link>.
        </p>
      </ArticleLayout>
    </>
  )
}

function MedicareAside() {
  return (
    <div className="bg-forest text-bone rounded-2xl p-5">
      <div className="text-xs uppercase tracking-wider text-ochre mb-2">Snelle feiten</div>
      <ul className="space-y-2 text-sm">
        <li><span className="text-bone/70">Kosten:</span> <strong>gratis</strong></li>
        <li><span className="text-bone/70">Geldig vanaf:</span> dag van aankomst</li>
        <li><span className="text-bone/70">Looptijd:</span> tot visum/EHIC verloopt</li>
        <li><span className="text-bone/70">Inschrijven:</span> Service Centre in elke grote stad</li>
      </ul>
      <hr className="my-5 border-bone/20" />
      <div className="text-xs uppercase tracking-wider text-ochre mb-2">Verder lezen</div>
      <ul className="space-y-2 text-sm">
        <li><Link to="/verzekering" className="hover:text-ochre underline underline-offset-4">Vier polissen vergeleken →</Link></li>
        <li><Link to="/tax-file-number" className="hover:text-ochre underline underline-offset-4">Tax File Number →</Link></li>
        <li><Link to="/eerste-week" className="hover:text-ochre underline underline-offset-4">Wat regel je in week 1 →</Link></li>
      </ul>
    </div>
  )
}
