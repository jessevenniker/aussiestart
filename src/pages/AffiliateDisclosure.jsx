import { Helmet } from 'react-helmet-async'
import PageHeader from '../components/PageHeader.jsx'

export default function AffiliateDisclosure() {
  return (
    <>
      <Helmet><title>Affiliate-disclosure, Aussiestart</title></Helmet>
      <PageHeader
        eyebrow="Transparantie"
        title="Hoe Aussiestart geld verdient"
        intro="Eerlijk, kort en op één pagina. Zo weet je waar je aan toe bent voor je op een link klikt."
      />
      <section className="container-wide py-12">
        <div className="prose-custom">
          <h2>Wat affiliate is</h2>
          <p>
            Sommige links op deze site verwijzen naar partners zoals SafetyWing (verzekering),
            Wise (banking), Booking.com / Hostelworld (accommodatie) en DiscoverCars (autohuur).
            Als je via zo'n link iets boekt, betaalt de aanbieder ons een commissie. Voor jou
            verandert er niets aan de prijs.
          </p>
          <h2>Hoe we partners kiezen</h2>
          <p>
            We werken alleen met aanbieders die we zelf zouden gebruiken of gebruikt hebben.
            Criteria:
          </p>
          <ul>
            <li>De service moet meetbaar beter zijn dan de gangbare alternatieven, of evident gelijkwaardig.</li>
            <li>Voorwaarden moeten transparant zijn, geen verborgen automatische verlengingen.</li>
            <li>Klantenservice moet bereikbaar zijn voor Nederlandstalige klanten.</li>
            <li>We accepteren geen deals met bemiddelaars die werkvisum-pakketten verkopen.</li>
          </ul>
          <h2>Wat we beloven</h2>
          <ul>
            <li>Affiliate-links zijn altijd herkenbaar (klein label of icoon).</li>
            <li>Vergelijkers zijn op dekking gerangschikt, niet op commissie.</li>
            <li>Als een betere niet-affiliate-optie bestaat, noemen we die ook.</li>
          </ul>
          <h2>Bevestigde partners</h2>
          <p>Hieronder de partners waarmee we op dit moment een actieve affiliate-relatie hebben.</p>
          <h3>SafetyWing (sinds 29 april 2026)</h3>
          <ul>
            <li>Programma: SafetyWing Ambassador</li>
            <li>Commissie: 10% recurring zolang jij verzekerd blijft (tot 364 dagen)</li>
            <li>Cookie: 365 dagen</li>
            <li>Onze referentie-ID: 26519283</li>
            <li>Te zien op: <a href="/verzekering">verzekeringspagina</a></li>
          </ul>
          <p>
            We adviseren SafetyWing alleen aan WHM's voor wie het past (lange flexibele reizen, lager budget).
            Voor wie veel waardevolle spullen meeneemt of NL-talige polis wil, raden we expliciet JoHo of Allianz
            aan, ook al ontvangen we daar geen commissie van. Onze aanbeveling staat los van wat we verdienen.
          </p>
          <h3>Wise (sinds 29 april 2026)</h3>
          <ul>
            <li>Programma: Wise Refer-a-Friend</li>
            <li>Commissie: variabel per kwalificerende referral</li>
            <li>Cookie: sessie-gebaseerd</li>
            <li>Te zien op: <a href="/banking">banking-pagina</a></li>
          </ul>
          <h3>In voorbereiding</h3>
          <p>Hieronder partners waarvan we de aanvraag of integratie nog gaan doen.</p>
          <ul>
            <li>Hostelworld (hostels per stad)</li>
            <li>Booking.com (accommodatie)</li>
            <li>DiscoverCars (autohuur)</li>
            <li>JoHo Insurances (NL-talige reisverzekering)</li>
          </ul>
          <p>Zodra deze live staan voegen we ze toe aan deze lijst, met datum.</p>
        </div>
      </section>
    </>
  )
}
