import { Helmet } from 'react-helmet-async'
import PageHeader from '../components/PageHeader.jsx'
import Placeholder from '../components/Placeholder.jsx'

export default function VoorVertrek() {
  return (
    <>
      <Helmet>
        <title>Voor vertrek · Aussiestart</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <PageHeader
        eyebrow="Voorbereiding"
        title="Wat je 6, 3 en 1 maand voor vertrek moet regelen"
        intro="Visum, vluchten, verzekering, banking, vaccinaties, bagage. Een tijdlijn die voorkomt dat je in week 4 nog rondrent voor je TFN."
      />
      <Placeholder note="Fase 2: tijdlijn met deadlines, downloadbare PDF-checklist." />
    </>
  )
}
