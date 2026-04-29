import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import PageHeader from '../components/PageHeader.jsx'
import { Callout, ArticleLayout } from '../components/Article.jsx'
import SourceLink from '../components/SourceLink.jsx'
import { cities } from '../data/hostels.js'

export default function Hostels() {
  return (
    <>
      <Helmet>
        <title>Backpacker-hostels per stad in Australië · Aussiestart</title>
        <meta name="description" content="Onafhankelijk overzicht van backpacker-hostels per stad in Australië. Sydney, Melbourne, Brisbane, Cairns, Byron Bay, Gold Coast en meer. Geen verborgen affiliate." />
      </Helmet>
      <PageHeader
        eyebrow="Wonen · Hostels"
        title="Backpacker-hostels per stad"
        intro="Welke hostels worden door meerdere onafhankelijke gidsen aanbevolen, per stad. Alleen feiten: naam, adres, wat het uniek maakt. Geen verborgen affiliate-links, geen sponsored placements."
        lastChecked="29 april 2026"
        source="Hostelworld + NomadicMatt + BrokeBackpacker + Hostelgeeks"
      />

      <ArticleLayout aside={<HostelsAside />}>
        <p>
          Bij aankomst is je eerste hostel meestal het belangrijkst. Hier ben je 4-7 nachten terwijl je TFN
          regelt, een bank opent en een sharehouse zoekt. Daarna ga je naar een sharehouse of, als je doorreist,
          rouleer je naar nieuwe hostels per stad.
        </p>
        <Callout kind="info" title="Hoe deze lijst tot stand kwam">
          Voor elke stad hebben we hostels overgenomen die door minstens twee onafhankelijke gidsen worden
          aanbevolen (Hostelworld, NomadicMatt, BrokeBackpacker, Hostelgeeks, SydneyExpert, NomadicMick). Geen
          enkel hostel betaalt voor zijn plek hier. Wanneer we later partnerships sluiten met Hostelworld of
          Booking.com voegen we duidelijk gelabelde affiliate-links toe.
        </Callout>

        <p>Spring direct naar een stad:</p>
        <nav className="not-prose flex flex-wrap gap-2 my-4">
          {cities.map((c) => (
            <a
              key={c.slug}
              href={`#${c.slug}`}
              className="text-xs px-3 py-1.5 rounded-full bg-cream text-forest border border-sand hover:bg-sand transition-colors"
            >
              {c.name}
            </a>
          ))}
        </nav>

        {cities.map((city) => (
          <section key={city.slug} id={city.slug} className="scroll-mt-24">
            <h2>{city.name}</h2>
            <p className="text-ink/80">{city.intro}</p>
            <div className="not-prose grid gap-3 my-5">
              {city.hostels.map((h) => (
                <article key={h.name} className="border border-sand bg-bone rounded-xl p-4 sm:p-5">
                  <div className="flex items-baseline justify-between flex-wrap gap-2">
                    <h3 className="font-serif text-lg text-forest leading-tight">{h.name}</h3>
                    {h.tag && (
                      <span className="text-[10px] uppercase tracking-wider text-ember bg-cream px-2 py-1 rounded-full">
                        {h.tag}
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-slate mt-0.5">{h.address}</div>
                  <p className="text-sm text-ink/85 mt-2 leading-relaxed">{h.note}</p>
                  {h.site && (
                    <p className="text-sm mt-2">
                      <SourceLink href={h.site}>Officiële site</SourceLink>
                    </p>
                  )}
                </article>
              ))}
            </div>
          </section>
        ))}

        <h2>Wat we (nog) niet hebben</h2>
        <p>
          Voor de volgende plekken hebben we wel signalen uit gidsen, maar nog te weinig consensus om concrete
          aanbevelingen te doen: Airlie Beach, Agnes Water (1770), Port Macquarie, Darwin, Adelaide. Volgt in
          een volgende ronde, of mail je tip via de <Link to="/contact">contactpagina</Link>.
        </p>

        <h2>Tips voor je hostel-keuze</h2>
        <ul>
          <li>
            <strong>Eerste hostel boekt vooraf.</strong> Vlucht moe + jet-lag + onbekende stad is geen tijd om
            ter plaatse te shoppen. Boek je eerste 3-4 nachten voor je vliegt.
          </li>
          <li>
            <strong>Reviews lezen.</strong> Op Hostelworld op recente reviews letten (laatste 3 maanden), niet
            de gemiddelde score. Hostels veranderen snel van eigenaar of beheer.
          </li>
          <li>
            <strong>Locatie boven luxe.</strong> Een 4-pers dorm 5 minuten van Central Station is praktischer
            dan een 8-pers dorm 30 minuten verder voor AUD 5 minder.
          </li>
          <li>
            <strong>Lange-termijn-deals.</strong> Bij meeste hostels kun je na 3-5 nachten korting onderhandelen
            voor een week of langer. Vraag het aan de receptie.
          </li>
          <li>
            <strong>Werkhostels.</strong> Sommige hostels regelen ook banen voor gasten (vooral in regional).
            Niet altijd betrouwbaar, vraag rond bij andere gasten voor je tekent.
          </li>
        </ul>

        <h2>Bronnen</h2>
        <ul className="text-sm space-y-1.5">
          <li><SourceLink href="https://www.hostelworld.com/">Hostelworld</SourceLink> · platform met reviews per hostel</li>
          <li><SourceLink href="https://www.nomadicmatt.com/travel-guides/australia-travel-tips/best-hostels-australia/">NomadicMatt, Best hostels Australia</SourceLink></li>
          <li><SourceLink href="https://www.thebrokebackpacker.com/">The Broke Backpacker</SourceLink> · per-stad gidsen</li>
          <li><SourceLink href="https://hostelgeeks.com/">Hostelgeeks</SourceLink> · "3 BEST Hostels in [stad]"-serie</li>
          <li><SourceLink href="https://www.yha.com.au/">YHA Australia</SourceLink> · officiële YHA-keten in Australië</li>
        </ul>
      </ArticleLayout>
    </>
  )
}

function HostelsAside() {
  return (
    <div className="bg-forest text-bone rounded-2xl p-5">
      <div className="text-xs uppercase tracking-wider text-ochre mb-2">Steden in deze gids</div>
      <ul className="space-y-1 text-sm">
        {cities.slice(0, 8).map((c) => (
          <li key={c.slug}>
            <a href={`#${c.slug}`} className="text-bone/85 hover:text-ochre">{c.name}</a>
          </li>
        ))}
        <li className="text-bone/60">+ {cities.length - 8} meer</li>
      </ul>
      <hr className="my-5 border-bone/20" />
      <div className="text-xs uppercase tracking-wider text-ochre mb-2">Verder lezen</div>
      <ul className="space-y-2 text-sm">
        <li><Link to="/wonen" className="hover:text-ochre underline underline-offset-4">Hostel vs sharehouse →</Link></li>
        <li><Link to="/eerste-week" className="hover:text-ochre underline underline-offset-4">Eerste week →</Link></li>
        <li><Link to="/kosten" className="hover:text-ochre underline underline-offset-4">Wat kost het →</Link></li>
      </ul>
    </div>
  )
}
