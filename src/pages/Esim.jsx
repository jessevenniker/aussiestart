import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import { Callout, FAQ, FactsTable, ArticleLayout } from '../components/Article.jsx'
import SourceLink from '../components/SourceLink.jsx'
import AffiliateLink from '../components/AffiliateLink.jsx'

export default function Esim() {
  return (
    <>
      <Helmet>
        <title>eSIM Australië, drie aanbieders vergeleken · Aussiestart</title>
        <meta name="description" content="Telsim, Saily en Airalo vergeleken voor backpackers in Australië. Welke heeft Telstra-netwerk, welke is goedkoopst, en welke werkt vanaf landing." />
      </Helmet>
      <PageHeader
        eyebrow="Eerste week · SIM"
        title="eSIM voor Australië, drie aanbieders eerlijk vergeleken"
        intro="Geen fysieke SIM kopen op de luchthaven, geen €40 verspillen aan een prepaid-pakket dat je niet nodig hebt. Een eSIM activeer je voor je vlucht en hij werkt vanaf het moment dat je landt."
        lastChecked="29 april 2026"
        source="Eigen ervaring + officiële provider-sites"
      />

      <ArticleLayout aside={<EsimAside />}>
        <p>
          Een eSIM is een digitale SIM die je via een QR-code op je telefoon zet. Je hoeft geen fysieke kaart te
          ruilen, je houdt je Nederlandse nummer apart actief op slot 1, en zodra je vliegtuig op de stoeprand
          van SYD of MEL staat heb je internet. Sinds iPhone XS (2018) en Android Pixel 3 (2018) ondersteunen
          de meeste smartphones eSIMs.
        </p>

        <h2>De korte versie</h2>
        <ul>
          <li><strong>Goedkoopst voor lange WHV (30+ dagen):</strong> Telsim, ~€13 voor 80 GB / 30 dagen op Telstra-netwerk</li>
          <li><strong>Voor wie ook andere landen aandoet:</strong> Airalo, multi-country plans</li>
          <li><strong>Voor doorlopende abonnement-vorm:</strong> Saily (NordVPN-onderdeel), maandelijks opzegbaar</li>
        </ul>

        <h2>Telsim, beste prijs voor lange verblijven</h2>
        <p>
          Australische MVNO die rijdt op het Telstra-netwerk (de grootste en best dekkende provider buiten de
          steden). Niet via Travelpayouts of een ander affiliate-programma, je koopt direct bij Telsim en
          betaalt internationaal met creditcard.
        </p>
        <h3>Wat is goed</h3>
        <ul>
          <li><strong>Telstra-netwerk = beste regionale dekking</strong> in Australië, belangrijk voor 88-dagen-werk en outback-trips</li>
          <li>Prijs: rond €13 voor 80 GB / 30 dagen (peildatum april 2026, kan veranderen)</li>
          <li>eSIM-installatie via QR-code, vóór vertrek vanuit Nederland al activeerbaar</li>
          <li>Geen abonnement, prepaid: bundel verloopt, geen automatische verlenging</li>
        </ul>
        <h3>Wat is minder</h3>
        <ul>
          <li>Site is functioneel maar niet sleek</li>
          <li>Klantenservice voornamelijk Engelstalig</li>
          <li>Bij verlies van je telefoon heb je de QR-code nodig om opnieuw te activeren, sla hem ergens veilig op</li>
        </ul>
        <Callout kind="success" title="Onze keuze voor de meeste WHM's">
          Voor wie 1-12 maanden in Australië zit en wil reizen door regional gebieden (waar Telstra de enige
          netwerkdekking heeft), is Telsim moeilijk te kloppen op prijs én netwerk. Geen affiliate-relatie aan
          onze kant.
        </Callout>
        <p className="text-sm">
          Direct boeken via <SourceLink href="https://www.telsim.com.au/">telsim.com.au</SourceLink>.
        </p>

        <h2>Airalo, voor multi-country reizen</h2>
        <p>
          Wereldwijd grootste eSIM-provider, plannen in 200+ landen. Past bij wie Australië combineert met
          Nieuw-Zeeland, Bali of Zuidoost-Azië en niet voor elk land een nieuwe SIM wil.
        </p>
        <h3>Wat is goed</h3>
        <ul>
          <li>Eén app voor alle reizen, profiel-historie, makkelijk top-uppen</li>
          <li>Kleine pakketten voor wie maar 1-2 weken in een land zit (vanaf 1 GB)</li>
          <li>Australië-pakketten typisch op Telstra of Optus, dekking redelijk</li>
        </ul>
        <h3>Wat is minder</h3>
        <ul>
          <li>Per GB duurder dan Telsim voor lange verblijven (~€8 voor 5 GB / 30 dagen, schaalt niet zo gunstig)</li>
          <li>Niet altijd het premium netwerk; check per pakket welke carrier</li>
        </ul>
        <Callout kind="info" title="Affiliate-disclosure">
          Aussiestart heeft via Travelpayouts een affiliate-relatie met Airalo (sinds 29 april 2026). Klik je
          via een Airalo-link en koop je een pakket, dan ontvangen wij commissie. Voor jou verandert er niets
          aan de prijs.
        </Callout>
        <div className="not-prose my-5">
          <AffiliateLink partner="airalo" variant="button">
            Bekijk Airalo Australië-plans
          </AffiliateLink>
        </div>

        <h2>Saily, voor abonnement-vorm</h2>
        <p>
          NordVPN-onderdeel, gelanceerd in 2024. Maandelijkse subscription die je op elk moment kunt opzeggen.
          Past bij wie liever een vaste maandprijs wil en in een aantal verschillende landen zit.
        </p>
        <h3>Wat is goed</h3>
        <ul>
          <li>App-flow en interface zijn schoner dan Airalo (volgens reviewers)</li>
          <li>Onbeperkte data-plannen in sommige landen (in Australië nog niet)</li>
          <li>Bundling met NordVPN als je dat al gebruikt</li>
        </ul>
        <h3>Wat is minder</h3>
        <ul>
          <li>Prijs vergelijkbaar met Airalo, dus niet competitief met Telsim voor lange verblijven</li>
          <li>Subscription-model: vergeet niet op te zeggen voor je eindigt</li>
          <li>Recenter spelpartij, minder reviews om te peilen</li>
        </ul>
        <Callout kind="info" title="Affiliate-disclosure">
          Aussiestart heeft via Travelpayouts een affiliate-relatie met Saily (sinds 29 april 2026). Klik je
          via een Saily-link en koop je een pakket, dan ontvangen wij commissie. Voor jou verandert er niets
          aan de prijs.
        </Callout>
        <div className="not-prose my-5">
          <AffiliateLink partner="saily" variant="button">
            Bekijk Saily-plans
          </AffiliateLink>
        </div>

        <h2>Vergelijkingstabel</h2>
        <FactsTable rows={[
          ['Telsim',     '~€13 / 80 GB / 30 dgn op Telstra-netwerk · prepaid'],
          ['Airalo',     '~€8 / 5 GB / 30 dgn · multi-country app · Telstra of Optus per pakket'],
          ['Saily',      '~€10 / 10 GB / 30 dgn · subscription · netwerk per pakket'],
        ]} />
        <p className="text-xs text-slate">
          Prijzen indicatief, peildatum april 2026. Aanbieders updaten regelmatig. Voor actuele tarieven check
          de provider-site.
        </p>

        <h2>Beslisboom</h2>
        <FactsTable rows={[
          ['1-12 maanden in alleen Australië, regionale reizen',  'Telsim'],
          ['Reis combineert AU + NZ + Azië',                       'Airalo'],
          ['Korter verblijf (1-2 weken), kleine bundel',           'Airalo'],
          ['Liever maandelijkse subscription',                     'Saily'],
          ['Werkt op klein eiland of remote outback',              'Telsim (Telstra)'],
        ]} />

        <h2>Praktische tips</h2>
        <ul>
          <li>
            <strong>Activeer vóór je vliegt.</strong> QR-code scannen heb je internet voor nodig. Doe het op
            Schiphol op wifi, dan stond de eSIM al klaar voor je landde.
          </li>
          <li>
            <strong>Houd je Nederlandse nummer apart actief.</strong> Bij meeste smartphones kun je twee SIMs
            tegelijk: NL voor SMS-codes (banking, BSN-portaal), eSIM voor data en bellen in Australië.
          </li>
          <li>
            <strong>Roaming uit zetten.</strong> Voorkom dat je telefoon bij landing automatisch jouw
            Nederlandse provider belt en je een €40 roaming-rekening krijgt. Vóór vertrek roaming uitschakelen
            in Instellingen.
          </li>
          <li>
            <strong>Sla je QR-code op.</strong> Bij telefoon-verlies of OS-reset heb je hem nodig om opnieuw
            te activeren. Sla op in een wachtwoord-manager of op een tweede device.
          </li>
          <li>
            <strong>Check of je telefoon eSIM ondersteunt.</strong> iPhone XS+, Pixel 3+, Samsung Galaxy S20+,
            de meeste post-2020 modellen werken. Oudere telefoons: dan een fysieke SIM bij Coles of Woolies in
            Australië (~AUD 30 voor 30 dagen).
          </li>
        </ul>

        <h2>Veelgestelde vragen</h2>
        <FAQ q="Werkt Telsim eSIM ook in Nieuw-Zeeland?">
          Nee, Telsim is Australië-only. Voor NZ-trips kun je daar een lokale prepaid SIM kopen of een
          multi-country Airalo-pakket gebruiken.
        </FAQ>
        <FAQ q="Mag ik mijn Nederlandse nummer behouden?">
          Ja, dat blijft in slot 1 van je telefoon (eSIM of fysieke SIM). De Australische eSIM komt op slot 2.
          Je kunt voor data kiezen welke je gebruikt.
        </FAQ>
        <FAQ q="Wat is het verschil tussen Telstra, Optus en Vodafone?">
          Telstra heeft de beste regionale dekking (vooral outback en farmwork-locaties). Optus is goed in
          steden en goedkoper. Vodafone is goedkoopst maar dekking buiten de steden is dunner. Telsim rijdt
          op Telstra, dus je hebt premium netwerk zonder Telstra-prijs.
        </FAQ>
        <FAQ q="Wat als ik door mijn data-bundel heen ben?">
          Bij Telsim koop je gewoon een nieuwe bundel. Bij Airalo en Saily kun je top-uppen via de app. In
          alle gevallen geen verrassingen, geen automatische bijladen tegen woekertarief.
        </FAQ>
        <FAQ q="Kost het meer als ik bel naar Nederland?">
          eSIMs zijn primair voor data. Voor bellen gebruik je WhatsApp of FaceTime over je data, dat is
          gratis. Echte phone-calls naar NL via je eSIM-nummer kost wel internationaal tarief.
        </FAQ>

        <h2>Affiliate-disclosure</h2>
        <p className="text-sm text-slate">
          Aussiestart heeft via Travelpayouts een affiliate-relatie met Saily en Airalo (sinds 29 april 2026).
          Voor Telsim hebben wij geen affiliate-relatie. Onze aanbeveling Telsim staat los van wat we
          verdienen, het is gewoon de beste prijs-prestatie-verhouding voor lange WHV-verblijven. Volledig
          overzicht op de <Link to="/affiliate-disclosure" className="text-ember underline">disclosure-pagina</Link>.
        </p>

        <h2>Bronnen</h2>
        <ul className="text-sm space-y-1.5">
          <li><SourceLink href="https://www.telsim.com.au/">Telsim, Australische MVNO op Telstra-netwerk</SourceLink></li>
          <li><SourceLink href="https://www.airalo.com/australia-esim">Airalo, Australië eSIM-pakketten</SourceLink></li>
          <li><SourceLink href="https://saily.com/">Saily, eSIM by NordVPN</SourceLink></li>
          <li><SourceLink href="https://www.telstra.com.au/coverage-networks/our-coverage">Telstra, dekkingskaart</SourceLink></li>
        </ul>
      </ArticleLayout>
    </>
  )
}

function EsimAside() {
  return (
    <div className="bg-forest text-bone rounded-2xl p-5">
      <div className="text-xs uppercase tracking-wider text-ochre mb-2">Onze keuze</div>
      <p className="font-serif text-2xl text-bone leading-tight mb-1">Telsim</p>
      <p className="text-sm text-bone/80 leading-relaxed mb-4">
        ~€13 voor 80 GB / 30 dagen op Telstra-netwerk. Beste prijs én beste regionale dekking. Geen
        affiliate-relatie.
      </p>
      <a
        href="https://www.telsim.com.au/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-ochre underline underline-offset-4 text-sm"
      >
        telsim.com.au →
      </a>
      <hr className="my-5 border-bone/20" />
      <div className="text-xs uppercase tracking-wider text-ochre mb-2">Alternatieven</div>
      <div className="space-y-3 text-sm">
        <div>
          <AffiliateLink partner="airalo">Airalo</AffiliateLink>
          <p className="text-bone/70 text-xs mt-1">Multi-country, kleine bundels</p>
        </div>
        <div>
          <AffiliateLink partner="saily">Saily</AffiliateLink>
          <p className="text-bone/70 text-xs mt-1">Subscription, NordVPN-onderdeel</p>
        </div>
      </div>
      <hr className="my-5 border-bone/20" />
      <div className="text-xs uppercase tracking-wider text-ochre mb-2">Verder</div>
      <ul className="space-y-2 text-sm">
        <li><Link to="/eerste-week" className="hover:text-ochre underline underline-offset-4">Eerste week →</Link></li>
        <li><Link to="/banking" className="hover:text-ochre underline underline-offset-4">Bank kiezen →</Link></li>
      </ul>
    </div>
  )
}
