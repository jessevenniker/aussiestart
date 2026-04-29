import { Helmet } from 'react-helmet-async'
import PageHeader from '../components/PageHeader.jsx'
import Placeholder from '../components/Placeholder.jsx'

export default function Bronnen() {
  return (
    <>
      <Helmet><title>Bronnen & verantwoording — Aussiestart</title></Helmet>
      <PageHeader
        eyebrow="Verantwoording"
        title="Bronnen en hoe we cijfers checken"
        intro="Per pagina onderaan staan bronnen met datum. Hier het overzicht plus uitleg over onze controle-cyclus."
      />
      <Placeholder note="Fase 6: bronlijst per onderwerp (DHA, IND, Nuffic, ATO, Centrelink), update-cyclus, archief van wijzigingen." />
    </>
  )
}
