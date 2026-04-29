import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import { FactsTable, Steps, FAQ, ArticleLayout } from '../components/Article.jsx'
import SourceLink from '../components/SourceLink.jsx'

export default function Visum() {
  return (
    <>
      <Helmet>
        <title>Working Holiday Visum Australië aanvragen 2026, Aussiestart</title>
        <meta name="description" content="Subclass 417 voor Nederlanders. AUD 670, online via ImmiAccount, voor 18 t/m 30. Stap voor stap, met de vier valkuilen die mensen weken vertraging kosten." />
      </Helmet>
      <PageHeader
        eyebrow="Bestemming · Australië"
        title="Working Holiday Visum aanvragen, alles wat klopt in 2026"
        intro="Subclass 417 voor Nederlanders. AUD 670, online, voor 18 t/m 30. We lopen je door de aanvraag, bewijsstukken en de vier valkuilen die mensen weken vertraging kosten."
        lastChecked="29 april 2026"
        source="Department of Home Affairs"
      />

      <ArticleLayout aside={<NextSteps />}>
          <p>
            Je gaat een jaar (of langer) naar Australië werken en reizen. De eerste stap is het Working Holiday Visum,
            ook wel het 417-visum. Deze pagina legt uit hoe het werkt, wat het kost, en welke fouten mensen maken
            die hen weken vertraging opleveren.
          </p>
          <p>
            Deze gids is geen vervanging voor de officiële site van het Australische Department of Home Affairs.
            Die blijft het laatste woord. Maar wat hieronder staat is wel daar gecontroleerd, en met datumstempel.
          </p>

          <h2>Het korte verhaal</h2>
          <FactsTable rows={[
            ['Visum-categorie', 'Subclass 417 (Working Holiday Visa)'],
            ['Kosten aanvraag', 'AUD 670 (sinds 1 juli 2025)'],
            ['Leeftijdsgrens Nederlanders', '18 tot en met 30 jaar'],
            ['Geldigheid', '12 maanden vanaf eerste binnenkomst'],
            ['Aanvraagtermijn', 'Tot 12 maanden voor je inreist'],
            ['Verwerkingstijd', 'Vaak snel, maar dynamisch. Check actuele DHA processing times'],
            ['Spaargeld dat je moet kunnen aantonen', 'AUD 5.000'],
            ['Aanvraagkanaal', 'ImmiAccount op immi.homeaffairs.gov.au'],
          ]} />
          <p>
            Het 417-visum is voor Nederlanders. Er bestaat ook een 462-visum (Work and Holiday) voor andere
            nationaliteiten zoals Amerikanen, met andere voorwaarden. Die geldt voor Nederlanders niet.
          </p>

          <h2>Wat het 417-visum je toestaat</h2>
          <p>
            Met dit visum mag je twaalf maanden in Australië verblijven, gerekend vanaf de dag dat je voor het
            eerst het land binnenkomt. In die twaalf maanden mag je werken bij elke werkgever, in elke sector,
            ergens in Australië. Je mag ook reizen, het land in en uit gaan zo vaak je wilt, en tot vier maanden
            formeel studeren.
          </p>
          <p>
            Eén belangrijke werkbeperking (Condition 8547): je mag standaard maximaal zes maanden bij dezelfde
            werkgever blijven. Er zijn uitzonderingen, bijvoorbeeld voor werk in verschillende vestigingen of na
            schriftelijke toestemming van Home Affairs. Check altijd de officiële voorwaarden voor je je
            verlengt.
          </p>

          <h2>Wat het kost, de eerlijke optelling</h2>
          <p>
            De officiële aanvraagkosten zijn <strong>AUD 670</strong>. Dat is wat je betaalt aan de Australische
            overheid via ImmiAccount. Maar dat is niet het hele verhaal.
          </p>
          <p>Reken voor je vertrek op het volgende:</p>
          <ul>
            <li><strong>Visum:</strong> AUD 670 (= circa €395)</li>
            <li><strong>Vlucht heen:</strong> €700 tot €1.300 afhankelijk van seizoen en luchthaven</li>
            <li><strong>Reisverzekering:</strong> €200 tot €500 voor de hele periode</li>
            <li><strong>Spaargeld dat je moet kunnen tonen:</strong> AUD 5.000 (= circa €2.950)</li>
            <li><strong>Buffer voor eerste maand:</strong> AUD 2.000 tot AUD 3.000 voor hostel, eten, transport, sim-kaart, eerste boodschappen</li>
          </ul>
          <p>
            Bij elkaar kom je op een minimumbudget van zo'n €5.000 voordat je voet aan de grond zet, en realistisch
            tussen de €7.000 en €9.000 als je niet meteen werk hebt.
          </p>
          <p>
            De AUD 5.000 spaarvereiste hoeft niet "weggezet" te worden. Het is een eis dat je het kúnt aantonen
            op het moment van aanvragen, bijvoorbeeld via een bankafschrift.
          </p>

          <h2>De aanvraagprocedure stap voor stap</h2>
          <p>Het hele proces gebeurt online via ImmiAccount. Geen papieren, geen kantoor.</p>
          <Steps items={[
            ['Stap 1', 'Ga naar immi.homeaffairs.gov.au en maak een ImmiAccount aan. Dit is je persoonlijke portaal voor de hele aanvraag en eventuele toekomstige Australische visums.'],
            ['Stap 2', 'Selecteer "Working Holiday Visa (subclass 417)" en kies "First Working Holiday visa". Het formulier vraagt om persoonlijke gegevens, paspoortinfo, reisgeschiedenis, werkverleden, gezondheidsverklaring en karakterverklaring.'],
            ['Stap 3', 'Upload je documenten: een gescand paspoort dat nog minimaal 6 maanden geldig is na je geplande vertrekdatum, en een pasfoto. Soms wordt om aanvullend bewijs gevraagd, zoals een bankafschrift voor de spaarvereiste.'],
            ['Stap 4', 'Betaal AUD 670 via creditcard, debitkaart of PayPal.'],
            ['Stap 5', 'Wacht op de uitslag. Veel aanvragen worden snel afgehandeld, maar verwerkingstijden veranderen. Check vlak voor je aanvraag de actuele Home Affairs processing times.'],
            ['Stap 6', 'Je krijgt een visum-grant notification via e-mail. Er is geen sticker, geen stempel, geen fysiek document. Je visum is elektronisch gekoppeld aan je paspoortnummer. Print de e-mail uit en sla hem op meerdere plekken op.'],
            ['Stap 7', 'Reis binnen 12 maanden na de grant naar Australië. Vanaf de dag dat je voet aan grond zet, gaat de 12-maanden-klok lopen.'],
          ]} />

          <h2>Vier veelgemaakte fouten</h2>
          <Pitfall n="1" title="Te laat aanvragen.">
            Veel aanvragen worden snel verwerkt, maar verwerkingstijden zijn dynamisch. Als jouw aanvraag bij
            de uitlopers valt en je hebt nog 5 dagen tot je vlucht, sta je in de problemen. Vraag minimaal 4
            tot 6 weken voor je vertrek aan.
          </Pitfall>
          <Pitfall n="2" title="Paspoort niet ruim genoeg geldig.">
            Zorg dat je paspoort minstens je hele verblijf geldig blijft. Sommige luchtvaartmaatschappijen of
            transitlanden hanteren strengere regels (bv. 6 maanden geldigheid bij inreis). Check de actuele
            voorwaarden van je airline en eventuele transitlanden vóór je boekt.
          </Pitfall>
          <Pitfall n="3" title="Verkeerde geboortedatum invullen.">
            Klinkt dom, gebeurt vaker dan je denkt. Het systeem doet een automatische check op je leeftijd op de
            aanvraagdatum. Eén tikfout en je aanvraag wordt afgewezen, en de AUD 670 krijg je niet terug.
          </Pitfall>
          <Pitfall n="4" title="Ervan uitgaan dat je nog op je dertigste mag aanvragen.">
            Voor Nederlanders is de leeftijdsgrens 30. Je moet <em>jonger dan 31</em> zijn op de dag van indienen.
            Als je 30 bent en je verjaardag valt over een week, vraag dan deze week aan, niet volgende week.
          </Pitfall>

          <h2>Tweede en derde jaar verlengen</h2>
          <p>
            Het 417-visum kan twee keer verlengd worden, voor een tweede en derde jaar. Voorwaarde: je hebt
            tijdens je eerste jaar 88 dagen "specified work" gedaan in een goedgekeurde regio. Voor het derde
            jaar zijn dat 179 dagen tijdens het tweede.
          </p>
          <p>
            "Specified work" is werk dat de Australische overheid wil stimuleren in regionale gebieden. Denk aan
            landbouw, fruit picking, vee, mijnbouw, visserij, boomkappen, regionale bouw, en sinds 5 april 2025
            ook ramp-herstelwerk in gebieden die getroffen zijn door bosbranden, overstromingen en cyclonen.
          </p>
          <p>
            De volledige postcodelijst van goedgekeurde regio's staat op de site van Home Affairs. Vuistregel:
            alles buiten Greater Sydney, Greater Melbourne, Greater Brisbane, Greater Perth, de Gold Coast en
            Greater ACT komt vaak in aanmerking. Heel Tasmania, Northern Territory en Zuid-Australië tellen als
            regionaal. Maar verifieer altijd de specifieke postcode voordat je aan een baan begint, want één
            verkeerde postcode betekent dat je 88 dagen niet meetellen.
          </p>

          <h2>Veelgestelde vragen</h2>
          <FAQ q="Mag ik het visum vanuit Nederland aanvragen?">
            Ja, mits je een Nederlands paspoort hebt, tussen de 18 en 30 bent, geen kinderen ten laste hebt,
            en niet eerder al twee 417-visums hebt gehad.
          </FAQ>
          <FAQ q="Krijg ik mijn AUD 670 terug als mijn aanvraag wordt afgewezen?">
            Nee. De aanvraagkosten zijn niet-restitueerbaar, ook niet bij afwijzing. Daarom: check je voorwaarden
            voordat je betaalt.
          </FAQ>
          <FAQ q="Hoe lang voor mijn vertrek moet ik aanvragen?">
            Vier tot zes weken voor vertrek is een veilige marge. Eerder mag ook, het visum is geldig vanaf grant
            tot 12 maanden later voor inreis.
          </FAQ>
          <FAQ q="Mag ik tijdens mijn 417-visum studeren?">
            Ja, tot maximaal 4 maanden formeel onderwijs. Korte cursussen, taallessen, of een eerste semester
            van iets langers.
          </FAQ>
          <FAQ q="Wat is het verschil met het 462-visum?">
            Voor Nederlanders is dit niet relevant. Het 462 is voor mensen uit een andere lijst landen, zoals
            Amerikanen, Brazilianen, en sommige Aziatische landen. Het 417 is wat Nederlanders aanvragen.
          </FAQ>

          <h2>Bronnen</h2>
          <ul className="text-sm space-y-1.5">
            <li>
              <SourceLink href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417">
                Department of Home Affairs, officiële visumpagina 417
              </SourceLink>
              <span className="text-slate"> · laatst geüpdatet 26 februari 2026</span>
            </li>
            <li>
              <SourceLink href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/specified-work">
                DHA, specified work voor 88-dagen-regel
              </SourceLink>
            </li>
            <li>
              <SourceLink href="https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/work-holiday-417/6-month-work-limitation">
                DHA, 6-month work limitation (Condition 8547)
              </SourceLink>
            </li>
            <li>
              <SourceLink href="https://www.ato.gov.au/individuals-and-families/coming-to-australia-or-going-overseas/coming-to-australia/working-holiday-makers">
                Australian Taxation Office, Working Holiday Makers tax info
              </SourceLink>
            </li>
            <li className="text-slate">
              Visa Application Charge: verhoogd van AUD 635 naar AUD 670 per 1 juli 2025 (DHA aankondiging).
            </li>
          </ul>
          <p className="text-sm text-slate mt-4">
            Volledig bronnen-overzicht op de <Link to="/bronnen" className="text-ember underline">bronnen-pagina</Link>.
          </p>
      </ArticleLayout>
    </>
  )
}

function Pitfall({ n, title, children }) {
  return (
    <div className="not-prose my-4 border-l-4 border-ember bg-cream rounded-r-lg p-4">
      <div className="text-xs font-semibold uppercase tracking-wider text-ember mb-1">
        Fout {n}
      </div>
      <div className="font-serif text-lg text-forest mb-1">{title}</div>
      <p className="text-ink/85 leading-relaxed text-sm">{children}</p>
    </div>
  )
}

function NextSteps() {
  return (
    <div className="bg-forest text-bone rounded-2xl p-5">
      <div className="text-xs uppercase tracking-wider text-ochre mb-2">Volgende stap</div>
      <p className="text-sm leading-relaxed mb-4">
        Visum geregeld? Bereken wat een working holiday je écht kost, niet de €5.000 die bemiddelaars zeggen.
      </p>
      <Link to="/kosten" className="inline-flex items-center gap-2 text-ochre underline underline-offset-4 text-sm">
        Open de kosten-calculator →
      </Link>
      <hr className="my-5 border-bone/20" />
      <div className="text-xs uppercase tracking-wider text-ochre mb-2">In je eerste week</div>
      <ul className="space-y-2 text-sm">
        <li><Link to="/medicare" className="hover:text-ochre underline underline-offset-4">Medicare voor Nederlanders →</Link></li>
        <li><Link to="/tax-file-number" className="hover:text-ochre underline underline-offset-4">Tax File Number aanvragen →</Link></li>
      </ul>
    </div>
  )
}
