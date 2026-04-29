import { Helmet } from 'react-helmet-async'
import PageHeader from '../components/PageHeader.jsx'
import Placeholder from '../components/Placeholder.jsx'

export default function Wonen() {
  return (
    <>
      <Helmet><title>Wonen in Australië — hostel, sharehouse of camper</title></Helmet>
      <PageHeader
        eyebrow="Wonen"
        title="Hostel, sharehouse of camper — wat past bij welke fase"
        intro="Eerste week, eerste maand, lange termijn. Per stad: waar te zoeken, wat te betalen, hoe scams te herkennen."
      />
      <Placeholder note="Fase 4: per stad (Sydney, Melbourne, Brisbane, Perth) wijken-vergelijking, prijsindicaties, scam-check." />
    </>
  )
}
