import { Helmet } from 'react-helmet-async'
import PageHeader from '../components/PageHeader.jsx'

export default function AffiliateDisclosure() {
  return (
    <>
      <Helmet><title>Affiliate-disclosure — Aussiestart</title></Helmet>
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
            <li>Voorwaarden moeten transparant zijn — geen verborgen automatische verlengingen.</li>
            <li>Klantenservice moet bereikbaar zijn voor Nederlandstalige klanten.</li>
            <li>We accepteren geen deals met bemiddelaars die werkvisum-pakketten verkopen.</li>
          </ul>
          <h2>Wat we beloven</h2>
          <ul>
            <li>Affiliate-links zijn altijd herkenbaar (klein label of icoon).</li>
            <li>Vergelijkers zijn op dekking gerangschikt, niet op commissie.</li>
            <li>Als een betere niet-affiliate-optie bestaat, noemen we die ook.</li>
          </ul>
          <h2>Welke partners</h2>
          <p>
            De volledige lijst publiceren we zodra de eerste partners live staan. Tot die tijd
            staan op deze pagina alleen de criteria. Verwacht: SafetyWing, Wise, Booking,
            Hostelworld, DiscoverCars, JoHo.
          </p>
        </div>
      </section>
    </>
  )
}
