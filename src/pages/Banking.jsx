import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import { Callout, FAQ, ArticleLayout } from '../components/Article.jsx'
import SourceLink from '../components/SourceLink.jsx'

const banks = [
  {
    name: 'Commonwealth Bank',
    slug: 'commbank',
    account: 'Everyday Account Smart Access',
    fee: 'AUD 4 / maand',
    waiver: 'Gratis eerste 12 maanden, daarna gewaived als je onder de 30 bent of AUD 2.000+ per maand stort',
    card: 'Mastercard debit',
    network: '4.000+ ATMs en 950+ branches, het grootste filiaal-netwerk',
    pre: true,
    strong: 'Grootste filiaal-netwerk van Australië, ook in regionale gebieden.',
    weak: 'App en online banking zijn matig vergeleken met ANZ Plus en NAB.',
    pick: 'Onder de 30 én veel reizen door regionale gebieden? Dan nooit fees plus altijd een ATM in de buurt.',
    href: 'https://www.commbank.com.au/banking/everyday-account-smart-access.html',
  },
  {
    name: 'ANZ Bank',
    slug: 'anz',
    account: 'Everyday Account Smart Access of ANZ Plus',
    fee: 'AUD 4 (Smart Access) of AUD 0 (ANZ Plus)',
    waiver: 'Gewaived bij AUD 2.000+ stort/maand, of 21-24 jaar met AUD 1.000+ stort/maand',
    card: 'Visa debit',
    network: 'Groot, vergelijkbaar met CommBank',
    pre: true,
    strong: 'Ook actief in Nieuw-Zeeland, je rekening blijft als je doorreist naar NZ.',
    weak: 'Klantenservice-issues volgens fora de afgelopen jaren.',
    pick: 'Overweeg je na Australië nog een NZ WHV? Of wil je een moderne mobiele banking-ervaring (ANZ Plus)?',
    href: 'https://www.anz.com.au/personal/bank-accounts/',
  },
  {
    name: 'Westpac',
    slug: 'westpac',
    account: 'Westpac Choice Account',
    fee: 'AUD 5 / maand',
    waiver: 'Gratis eerste 12 maanden, daarna gewaived bij AUD 2.000+ stort/maand',
    card: 'Mastercard debit',
    network: 'Groot, plus geen ATM-fee bij St.George, BankSA en Bank of Melbourne (Westpac-dochters)',
    pre: true,
    strong: 'Internationale partner-banken: Barclays (UK), Scotiabank (Canada), Bank of America (US), Deutsche Bank.',
    weak: 'AUD 5 maandfee is iets hoger dan andere big four.',
    pick: 'Heb je al rekening bij een partner-bank, of ga je later naar het VK?',
    href: 'https://www.westpac.com.au/personal-banking/bank-accounts/',
  },
  {
    name: 'NAB',
    slug: 'nab',
    account: 'NAB Classic Banking',
    fee: 'AUD 0 (geen)',
    waiver: 'Niet nodig, geen fee',
    card: 'Visa debit',
    network: '10.000+ ATMs, geen ATM-fees bij NAB-eigen automaten',
    pre: true,
    strong: 'Nul kosten, voor altijd. Al ruim 10 jaar beleid voor alle klanten. Geen waiver-spelletjes.',
    weak: 'Internationale geld-overmaak service iets duurder dan bij de andere drie.',
    pick: 'Wil je zekerheid dat je nooit fees gaat betalen, ongeacht leeftijd, inkomen of verblijfsduur?',
    href: 'https://www.nab.com.au/personal/banking/bank-accounts/nab-classic-banking-account',
  },
]

export default function Banking() {
  return (
    <>
      <Helmet>
        <title>Welke Australische bank moet je openen als backpacker? · Aussiestart</title>
        <meta name="description" content="Commonwealth Bank, ANZ, Westpac, NAB en Wise vergeleken voor Working Holiday Makers. Fees, waivers, pre-opening en wanneer welke bank kiezen." />
      </Helmet>
      <PageHeader
        eyebrow="Eerste week · Banking"
        title="Welke Australische bank moet je openen als backpacker?"
        intro="De vier grote Australische banken plus Wise vergeleken. Fees, waivers, pre-opening, en wanneer welke bank de juiste keuze is."
        lastChecked="29 april 2026"
        source="Officiële bank-websites + PVTistes + YHA Australia"
      />

      <ArticleLayout aside={<BankingAside />}>
        <p>
          Een Australische bankrekening is een van de eerste dingen die je regelt na aankomst. Zonder kun je
          geen salaris ontvangen. Met de verkeerde bank betaal je AUD 50+ per jaar aan onnodige kosten.
        </p>

        <h2>De korte versie</h2>
        <ul>
          <li><strong>Voor de meeste WHM's onder de 30:</strong> Commonwealth Bank (gratis eerste jaar, daarna gewaived als je onder 30 bent)</li>
          <li><strong>Voor wie ook naar Nieuw-Zeeland gaat:</strong> ANZ Bank</li>
          <li><strong>Voor wie nooit fees wil betalen:</strong> NAB</li>
          <li><strong>Voor wie internationale partners wil:</strong> Westpac (Barclays UK, Bank of America, Scotiabank Canada, Deutsche Bank)</li>
          <li><strong>Aanvullend voor internationale transfers:</strong> Wise (verplicht extra account)</li>
        </ul>

        <h2>De Big Four vergeleken</h2>
        <p>
          Vier grote banken domineren ongeveer 80% van de Australische markt. Daarnaast zijn er kleinere banken
          zoals Bendigo, Bankwest en ING Direct, maar voor backpackers zijn die zelden de eerste keuze.
        </p>

        <div className="not-prose grid gap-5 my-6">
          {banks.map((b) => (
            <article key={b.slug} className="border border-sand bg-bone rounded-2xl p-5 sm:p-6">
              <div className="flex items-baseline justify-between flex-wrap gap-2 mb-2">
                <h3 className="font-serif text-xl text-forest">{b.name}</h3>
                <span className="text-xs text-slate">{b.account}</span>
              </div>
              <dl className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5 text-sm mb-4">
                <Pair k="Maandfee" v={b.fee} />
                <Pair k="Waiver" v={b.waiver} />
                <Pair k="Kaart" v={b.card} />
                <Pair k="ATM-netwerk" v={b.network} />
                <Pair k="Pre-opening uit NL" v={b.pre ? 'ja' : 'nee'} />
              </dl>
              <p className="text-sm text-ink/85"><strong className="text-forest">Sterk: </strong>{b.strong}</p>
              <p className="text-sm text-ink/85 mt-1"><strong className="text-ember">Zwak: </strong>{b.weak}</p>
              <p className="text-sm text-ink/85 mt-1"><strong className="text-forest">Wanneer kiezen: </strong>{b.pick}</p>
              <p className="text-sm mt-3">
                <SourceLink href={b.href}>Officiële account-info</SourceLink>
              </p>
            </article>
          ))}
        </div>

        <h2>Wat je nodig hebt om een rekening te openen</h2>
        <p>Vooraf vanuit Nederland (online voor opening):</p>
        <ul>
          <li>Naam, adres, geboortedatum</li>
          <li>Email, telefoonnummer</li>
          <li>Verklaring dat je naar Australië gaat verhuizen of werken</li>
        </ul>
        <p>Bij eerste filiaal-bezoek na aankomst:</p>
        <ul>
          <li>Geldig Nederlands paspoort</li>
          <li>Geldig 417 (of 462) visum-bevestiging</li>
          <li>Australisch postadres (kan een hostel of vriend zijn)</li>
          <li>Australische telefoonnummer (handig, niet altijd verplicht)</li>
          <li>Eventueel TFN (helpt om rente-inhouding te voorkomen, zie hieronder)</li>
        </ul>
        <p>
          Vrijwel alle banken doen de fysieke verificatie binnen 30 minuten. Je krijgt direct een tijdelijk
          debit-card mee (BPay) en het echte plastic card volgt 5-10 werkdagen later per post.
        </p>

        <h2>Pre-opening vs aankomst-opening</h2>
        <p><strong>Vooraf openen</strong> heeft twee voordelen:</p>
        <ul>
          <li>Je kunt je salaris direct ontvangen op je eerste werkdag (geen wachten op opening)</li>
          <li>Geen onnodig bezoek aan een filiaal kort na aankomst, terwijl je nog jet-lagged bent</li>
        </ul>
        <p><strong>Bij aankomst openen</strong> heeft één voordeel:</p>
        <ul>
          <li>Je kunt nog van bank wisselen op basis van wat je in de praktijk vindt</li>
        </ul>
        <p>
          Voor de meeste WHM's is pre-opening de slimmere keuze. CommBank en NAB hebben de eenvoudigste online
          aanmeld-flow.
        </p>

        <h2>Wise als aanvulling, niet vervanging</h2>
        <p>
          Naast je Australische bank heb je voor internationale transfers Wise nodig (voorheen TransferWise).
          Dit is geen vervanging voor een Australische bank, het is een aanvulling.
        </p>
        <p>Waarom Wise:</p>
        <ul>
          <li>Echte midmarket exchange-rate (meestal 0,5-1% goedkoper dan banken)</li>
          <li>Multi-currency rekening: kan tegelijk EUR, AUD, USD, NZD aanhouden</li>
          <li>Eigen Wise-card (gratis): pin in elke valuta zonder dubbele wisselkosten</li>
          <li>Direct AUD ontvangen vanuit Nederlandse bankrekening: 0,5-1% fee versus 5-7% bij gewone banken</li>
        </ul>
        <p>
          Voor backpackers die regelmatig EUR ↔ AUD overmaken, scheelt dit makkelijk AUD 200-500 per jaar.
        </p>

        <h2>Belastinginhouding op rente</h2>
        <Callout kind="info" title="Geef je TFN door zodra je hem hebt">
          Geen TFN aan je bank doorgegeven? Dan houden ze 47% in op rente die je verdient (de hoogste schaal,
          "non-resident foreign tax withholding"). Met TFN gaat dat naar 15%. Bij een lopende rekening met laag
          saldo is dat een paar dollar per jaar, maar nog steeds zonde.
        </Callout>

        <h2>Praktische tip: combineer CommBank + Wise</h2>
        <p>De meest gangbare combinatie voor NL backpackers:</p>
        <ol>
          <li><strong>CommBank</strong> als hoofdrekening (salaris, dagelijkse uitgaven)</li>
          <li><strong>Wise</strong> voor transfers (EUR ↔ AUD)</li>
          <li>Eventueel <strong>NAB</strong> als zekerheidsaccount (geen fees ooit)</li>
        </ol>
        <p>Voor de meeste mensen is dat overkill. Eén Australische bank + Wise is genoeg.</p>

        <h2>Drie veelgemaakte fouten</h2>
        <Callout kind="warn" title="1. Meerdere Australische rekeningen openen">
          Een rekening openen bij meerdere big four-banken om "de beste deal" te krijgen. Resultaat: je betaalt
          drie keer maandelijkse fees als je niet aan waivers voldoet. Eén rekening openen, switchen alleen als
          je echt teleurgesteld bent.
        </Callout>
        <Callout kind="warn" title="2. Geen Australische rekening, alles via ING of Rabobank">
          De wisselkosten en Foreign Transaction Fees lopen op tot AUD 50-150 per maand. Niet doen, open lokaal.
        </Callout>
        <Callout kind="warn" title="3. TFN niet doorgeven aan je bank">
          Betekent 47% inhouding op rente in plaats van 15%. Klein bedrag absoluut, maar onnodig.
        </Callout>

        <h2>Veelgestelde vragen</h2>
        <FAQ q="Mag ik mijn Nederlandse rekening houden tijdens mijn WHV?">
          Ja, sterker, dat is verstandig. Voor afhandeling met de Belastingdienst, voor familie-betalingen, en
          als veiligheidsnet.
        </FAQ>
        <FAQ q="Heeft het zin om een Australische credit card te krijgen?">
          Niet echt voor backpackers. Australische banken geven zelden credit cards aan tijdelijke residents. En
          je hebt het sowieso niet nodig: je Wise debit card en je Australische debit card dekken alle uitgaven.
        </FAQ>
        <FAQ q="Wat als mijn werkgever cash betaalt?">
          Vraag om een payslip. Cash zonder papieren is vrijwel altijd belastingontduiking en je super wordt
          niet afgedragen. Niet doen.
        </FAQ>
        <FAQ q="Heb ik een rekening nodig voor cashbetalingen?">
          Ja. Cash kan bij elke bank gestort worden. Door cash via je rekening te laten gaan kun je bewijzen dat
          je netjes belasting betaalt. Belangrijk voor je belastingaangifte aan het eind van het jaar.
        </FAQ>
        <FAQ q="Werkt mijn Wise-card op alle Australische ATMs?">
          Ja, Wise werkt op vrijwel alle ATMs wereldwijd. Wel let op: de ATM-eigenaar (zoals een bank) kan eigen
          fees rekenen, ook al rekent Wise er geen. Bij CommBank, NAB, ANZ en Westpac eigen ATMs is dat fee-vrij.
        </FAQ>
        <FAQ q="Kan ik mijn rekening sluiten als ik vertrek?">
          Ja. Voor je vertrek: maak alles over naar Wise of je Nederlandse rekening en sluit de Australische
          rekening af. Hoeft niet ter plekke, kan ook telefonisch of via klantenservice. Bewaar je laatste
          payslips voor je belastingaangifte (DASP super-claim).
        </FAQ>

        <h2>Bronnen</h2>
        <ul className="text-sm space-y-1.5">
          <li><SourceLink href="https://www.commbank.com.au/banking/everyday-account-smart-access.html">Commonwealth Bank, Everyday Account Smart Access</SourceLink></li>
          <li><SourceLink href="https://www.anz.com.au/personal/bank-accounts/">ANZ Bank, account-info</SourceLink></li>
          <li><SourceLink href="https://www.westpac.com.au/personal-banking/bank-accounts/">Westpac, account-info</SourceLink></li>
          <li><SourceLink href="https://www.nab.com.au/personal/banking/bank-accounts/nab-classic-banking-account">NAB Classic Banking</SourceLink></li>
          <li><SourceLink href="https://www.yha.com.au/travel-and-tours/working-holidays-in-australia/things-you-need-to-know">YHA Australia, Working Holiday Makers tips</SourceLink></li>
          <li className="text-slate">PVTistes.net (september 2025) en Australia Backpackers Guide (maart 2025) voor onafhankelijke vergelijking.</li>
        </ul>
      </ArticleLayout>
    </>
  )
}

function Pair({ k, v }) {
  return (
    <>
      <dt className="text-slate">{k}</dt>
      <dd className="text-ink/90">{v}</dd>
    </>
  )
}

function BankingAside() {
  return (
    <div className="bg-forest text-bone rounded-2xl p-5">
      <div className="text-xs uppercase tracking-wider text-ochre mb-2">Snel-advies</div>
      <ul className="space-y-2 text-sm">
        <li><span className="text-bone/70">Eerste keuze:</span> CommBank + Wise</li>
        <li><span className="text-bone/70">Geen fees ooit:</span> NAB</li>
        <li><span className="text-bone/70">Doorreis NZ:</span> ANZ</li>
        <li><span className="text-bone/70">Open vooraf:</span> ja</li>
      </ul>
      <hr className="my-5 border-bone/20" />
      <div className="text-xs uppercase tracking-wider text-ochre mb-2">Verder lezen</div>
      <ul className="space-y-2 text-sm">
        <li><Link to="/tax-file-number" className="hover:text-ochre underline underline-offset-4">TFN aanvragen →</Link></li>
        <li><Link to="/loon" className="hover:text-ochre underline underline-offset-4">Loon en belasting →</Link></li>
        <li><Link to="/eerste-week" className="hover:text-ochre underline underline-offset-4">Eerste week →</Link></li>
      </ul>
    </div>
  )
}
