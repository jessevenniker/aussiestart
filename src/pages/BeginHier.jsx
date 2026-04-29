import { Helmet } from 'react-helmet-async'
import PageHeader from '../components/PageHeader.jsx'
import Placeholder from '../components/Placeholder.jsx'

export default function BeginHier() {
  return (
    <>
      <Helmet>
        <title>Begin hier · Aussiestart</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <PageHeader
        eyebrow="Startgids"
        title="14 stappen, in volgorde"
        intro="Van eerste oriëntatie tot eerste week in Sydney. We lopen je in volgorde door wat je 6, 3 en 1 maand voor vertrek moet regelen."
      />
      <Placeholder note="Fase 2-uitbreiding: 14 stappen met deadlines, deeplinks naar visum/kosten/verzekering, downloadbare checklist." />
    </>
  )
}
