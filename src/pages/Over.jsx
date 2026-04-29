import { Helmet } from 'react-helmet-async'
import PageHeader from '../components/PageHeader.jsx'
import { Link } from 'react-router-dom'

export default function Over() {
  return (
    <>
      <Helmet><title>Over Aussiestart</title></Helmet>
      <PageHeader
        eyebrow="Over"
        title="Wat Aussiestart is, en wat het niet is"
      />
      <section className="container-wide py-12">
        <div className="prose-custom">
          <p>
            Aussiestart is een onafhankelijk naslagwerk voor Nederlanders die op working holiday
            naar Australië gaan. Het project bestaat omdat de markt voor Nederlandstalige
            informatie over WHV is opgesplitst in twee uitersten: bemiddelaars die pakketten
            verkopen, en persoonlijke reisblogs zonder structuur. Daartussen zat niets.
          </p>
          <h2>Wat we wel zijn</h2>
          <p>
            Een gestructureerd platform met stappenplannen, calculators, vergelijkers en eerlijke
            verhalen. Geschreven door iemand die zelf 14 maanden in Australië heeft gewoond.
          </p>
          <h2>Wat we niet zijn</h2>
          <p>
            Geen bemiddelaar. We verkopen geen pakketten, regelen geen vluchten, en hebben geen
            sales-team. We bouwen ook geen "exclusieve community" om je e-mailadres uit je te
            trekken.
          </p>
          <h2>Hoe we geld verdienen</h2>
          <p>
            Via affiliate. Als je een verzekering, banking-account of camperhuur boekt via een
            link op deze site, krijgen we een commissie van de aanbieder. Die commissie betaal je
            niet — de prijs is hetzelfde of je nu via ons of direct boekt. Hoe we partners
            selecteren staat openlijk op de{' '}
            <Link to="/affiliate-disclosure">disclosure-pagina</Link>.
          </p>
          <h2>Wie er achter zit</h2>
          <p>
            Aussiestart is in 2026 opgezet als zusterproject van StageStart Curaçao —
            een vergelijkbaar onafhankelijk platform voor stagiairs op Curaçao. Bewust niet
            onder dezelfde merknaam, omdat het verdienmodel anders is.
          </p>
        </div>
      </section>
    </>
  )
}
