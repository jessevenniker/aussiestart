import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import { Callout, FAQ, ArticleLayout } from '../components/Article.jsx'
import CostCalculator from '../components/CostCalculator.jsx'

export default function Kosten() {
  return (
    <>
      <Helmet>
        <title>Wat kost een working holiday Australië echt? · Aussiestart</title>
        <meta name="description" content="Geen €5.000 zoals KILROY zegt. Met sliders zie je wat een working holiday in Australië echt kost: per maand, per jaar, eenmalig vóór vertrek." />
      </Helmet>
      <PageHeader
        eyebrow="Geld"
        title="Wat kost een working holiday Australië écht?"
        intro="Niet €5.000 zoals KILROY zegt. Met sliders zie je wat een eerlijke begroting per maand én totaal is, gebaseerd op cijfers van mensen die er nu zijn."
        lastChecked="29 april 2026"
        source="Eigen uitgaven + Reddit r/australia + Flatmates.com.au"
      />

      <ArticleLayout aside={<KostenAside />}>
        <p>
          Bemiddelaars zeggen graag dat je AUD 5.000 spaargeld nodig hebt en dat het hen €1.500 tot €2.000 kost
          om "alles" voor je te regelen. Dat klopt niet helemaal. AUD 5.000 spaargeld is een visum-eis (je moet
          het kúnnen tonen, niet uitgeven), en het meeste van wat een bemiddelaar regelt kun je zelf doen. Wat
          het wél echt kost staat hieronder, en je kunt het zelf doorrekenen.
        </p>

        <h2>De calculator</h2>
        <p>
          Sleep de sliders naar jouw situatie. De getallen zijn realistische ranges, geen worst-case en geen
          backpacker-influencer-droombudget.
        </p>

        <CostCalculator />

        <h2>Wat de cijfers betekenen</h2>
        <p>
          Een doorsnee Working Holiday Maker geeft tussen de AUD 2.000 en AUD 3.000 per maand uit, afhankelijk
          van stad, woonsituatie en levensstijl. Dat komt neer op €1.200 tot €1.800 per maand. Voor 12 maanden
          inclusief eenmalige kosten zit je realistisch tussen de €18.000 en €25.000.
        </p>
        <p>
          Klinkt veel? Het is precies dezelfde grootteorde als een jaar studeren in Nederland: collegegeld
          (€2.500), kamerhuur (€500-700/maand), eten en uitgaan (€300-400/maand). Het verschil: in Australië
          verdien je het grootste deel zelf terug door werk.
        </p>

        <h2>Hoeveel verdien je terug?</h2>
        <p>
          Het Australische minimumloon is sinds 1 juli 2025 AUD 24,95/uur. Voor backpackers met een casual
          contract (de norm in hospitality, hostels, retail en farmwork) komt daar 25% casual loading bovenop:
          <strong> AUD 31,19/uur</strong>. Bij 38 uur per week:
        </p>
        <ul>
          <li>Bruto per week: AUD 1.185</li>
          <li>Belasting (15% WHM-tarief): AUD 178</li>
          <li>Netto per week: <strong>AUD 1.007</strong></li>
          <li>Netto per maand: <strong>AUD 4.365</strong> (≈ €2.660 bij koers 0,61)</li>
        </ul>
        <p>
          Bij gemiddelde uitgaven (AUD 2.500–3.500/maand) hou je dus AUD 800–1.800 per maand over. Op weekenden
          en feestdagen liggen tarieven nog hoger, tot 2,5× het basistarief. Volledige uitleg op de{' '}
          <Link to="/loon">loon-en-belasting-pagina</Link>.
        </p>
        <Callout kind="info" title="Realistisch scenario">
          Iemand die na 2 maanden werk vindt en dan 8 maanden voltijd werkt, komt aan het eind van een jaar uit
          op een neutraal saldo of een paar duizend euro netto winst, plus 12 maanden Australië in zijn boekje.
        </Callout>

        <h2>Vergelijk met een bemiddelaar-pakket</h2>
        <p>
          Een werkvisum-pakket bij Travel Active of KILROY kost €1.500 tot €2.050. Wat zit erin?
        </p>
        <ul>
          <li>Je visumaanvraag begeleid (kost AUD 670, kun je zelf in 30 minuten)</li>
          <li>Verzekering (€200-500 die je sowieso betaalt)</li>
          <li>Vlucht (€700-1.300 die je sowieso betaalt)</li>
          <li>Eerste paar nachten hostel (€80-150 die je sowieso betaalt)</li>
          <li>Soms een "garantie-werkplek" in farmwork (vaak van slechte kwaliteit)</li>
          <li>Een appje en wat voor-vertrek-info (waar je deze website ook voor hebt)</li>
        </ul>
        <p>
          Het verschil tussen pakket-prijs en wat je sowieso uitgeeft, ongeveer €600 tot €1.000, is in feite het
          tarief voor "iemand anders die het regelt". Voor sommige mensen waardevol, voor de meeste niet.
        </p>

        <h2>Vijf budget-fouten die mensen maken</h2>
        <Callout kind="warn" title="1. De eerste maand onderschatten">
          Borg, eerste boodschappen, OPAL-pas, SIM-kaart, eerste verzekeringspremie, eventuele tandartsbezoek,
          fix iets dat je vergat. Reken op AUD 1.500 tot AUD 2.500 extra in je eerste maand.
        </Callout>
        <Callout kind="warn" title="2. Geen buffer voor werk-zoektijd">
          De meeste backpackers vinden binnen 2-3 weken werk, maar niet iedereen. Reken op minimaal 4-6 weken
          uitgaven voordat je eerste payslip binnenkomt, ruim AUD 2.000-3.000 buffer dus.
        </Callout>
        <Callout kind="warn" title="3. Vluchten niet realistisch boeken">
          Een open jaar-ticket is duurder dan twee enkelreizen. Een retour met flexible-datums is meestal het
          goedkoopst. Reken op €1.000-1.500, niet €700.
        </Callout>
        <Callout kind="warn" title="4. Onderschatten van uitgaan en travel">
          Australië is groot en mooi. Vrijwel iedereen wil ook reizen, niet alleen werken. Reken een buffer voor
          weekendtrips, evenementen, en die ene roadtrip aan het einde.
        </Callout>
        <Callout kind="warn" title="5. Ervan uitgaan dat de wisselkoers gunstig blijft">
          De AUD/EUR-koers schommelt tussen 0,55 en 0,68. Reken liever op het midden, niet op de huidige stand.
        </Callout>

        <h2>Veelgestelde vragen</h2>
        <FAQ q="Klopt de AUD 5.000 spaargeld-eis?">
          Ja, dat is een officiële visum-eis. Maar je hoeft het niet uit te geven. Je moet kunnen aantonen dat je
          het hebt op het moment van aanvragen, bijvoorbeeld via een bankafschrift. Dezelfde AUD 5.000 mag je
          gewoon meenemen en gebruiken.
        </FAQ>
        <FAQ q="Hoeveel cash neem ik mee voor de eerste maand?">
          Reken op AUD 3.000 tot AUD 5.000 (≈ €1.800 tot €3.000) voor je eerste maand, vóór je eerste payslip.
          Het meeste hiervan is borg en eerste woon-uitgaven.
        </FAQ>
        <FAQ q="Werkt mijn Nederlandse pinpas in Australië?">
          Technisch wel, maar elke transactie kost wisselkoersmarge plus opname-fee. Open binnen je eerste week
          een Australische bankrekening (Commonwealth, ANZ, NAB, Westpac), en zet via Wise het minimum voor de
          eerste maanden over.
        </FAQ>
        <FAQ q="Hoeveel verdien ik gemiddeld per uur als WHM?">
          Het Australische minimumloon is AUD 24,95/uur sinds 1 juli 2025. Met casual loading (25% extra) komt
          dat voor de meeste backpackerbanen op AUD 31,19/uur. Skilled werk (bouw, mining) kan AUD 35-50/uur.
          Volledige uitleg op de <Link to="/loon">loon-en-belasting-pagina</Link>.
        </FAQ>
        <FAQ q="Moet ik mijn budget in EUR of AUD doen?">
          AUD voor je dagelijkse uitgaven (alles wordt daar in AUD geprijsd), EUR voor de vergelijking met je
          Nederlandse bankrekening. De calculator hierboven toont beide.
        </FAQ>

        <h2>Bronnen en kalibratie</h2>
        <p className="text-sm">
          De ranges in de calculator zijn gebaseerd op een combinatie van eigen ervaring (14 maanden Australië),
          Reddit r/australia en r/melbourne, Flatmates.com.au-prijzen voor Sydney/Melbourne/Brisbane,
          minimumloontabellen van de Fair Work Ombudsman, en SafetyWing/JoHo/Allianz-tarieven.
        </p>
        <p className="text-sm text-slate">
          De wisselkoers AUD→EUR ≈ 0,61 is een momentopname (april 2026, bandbreedte 0,55-0,68 over een
          jaar). Voor de actuele koers: check Wise of XE op het moment van plannen.
        </p>
      </ArticleLayout>
    </>
  )
}

function KostenAside() {
  return (
    <div className="bg-forest text-bone rounded-2xl p-5">
      <div className="text-xs uppercase tracking-wider text-ochre mb-2">Snelle vuistregels</div>
      <ul className="space-y-2 text-sm">
        <li><span className="text-bone/70">Per maand:</span> AUD 2.000–3.000</li>
        <li><span className="text-bone/70">Eerste maand:</span> +AUD 1.500–2.500</li>
        <li><span className="text-bone/70">Spaargeld:</span> AUD 5.000 (visum-eis)</li>
        <li><span className="text-bone/70">Vóór vertrek:</span> €4.500–6.500</li>
        <li><span className="text-bone/70">Verdienen:</span> ≈AUD 4.365/mnd netto</li>
      </ul>
      <hr className="my-5 border-bone/20" />
      <div className="text-xs uppercase tracking-wider text-ochre mb-2">Volgende stap</div>
      <ul className="space-y-2 text-sm">
        <li><Link to="/verzekering" className="hover:text-ochre underline underline-offset-4">Verzekering vergelijken →</Link></li>
        <li><Link to="/visum" className="hover:text-ochre underline underline-offset-4">Visum aanvragen →</Link></li>
        <li><Link to="/werk" className="hover:text-ochre underline underline-offset-4">Werk vinden →</Link></li>
      </ul>
    </div>
  )
}
