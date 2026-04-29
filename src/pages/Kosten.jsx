import { Helmet } from 'react-helmet-async'
import PageHeader from '../components/PageHeader.jsx'
import Placeholder from '../components/Placeholder.jsx'

export default function Kosten() {
  return (
    <>
      <Helmet><title>Wat kost een working holiday Australië echt? — Aussiestart</title></Helmet>
      <PageHeader
        eyebrow="Geld"
        title="Wat kost een working holiday Australië écht?"
        intro="Niet €5.000 zoals KILROY zegt. Met sliders zie je wat een eerlijke begroting per maand én totaal is — gebaseerd op echte cijfers van mensen die er nu zijn."
      />
      <Placeholder note="Fase 2: budget-calculator (hostel/sharehouse, eten, vervoer, uitgaan, verzekering), totaal AUD + EUR, eerste-maand-extra, vergelijking met bemiddelaar-pakket." />
    </>
  )
}
