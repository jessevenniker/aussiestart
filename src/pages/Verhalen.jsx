import { Helmet } from 'react-helmet-async'
import PageHeader from '../components/PageHeader.jsx'
import Placeholder from '../components/Placeholder.jsx'

export default function Verhalen() {
  return (
    <>
      <Helmet><title>Verhalen — Aussiestart</title></Helmet>
      <PageHeader
        eyebrow="Verhalen"
        title="Mensen die er waren, en wat ze nu weten"
        intro="Geen reisdagboek. Per verhaal: profiel, bestemming, duur, drie inzichten. Voor wie wil weten hoe het écht is."
      />
      <Placeholder note="Fase 5: 5-10 gestructureerde verhalen van community-leden, met portretillustratie." />
    </>
  )
}
