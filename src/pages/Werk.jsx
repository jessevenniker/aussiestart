import { Helmet } from 'react-helmet-async'
import PageHeader from '../components/PageHeader.jsx'
import Placeholder from '../components/Placeholder.jsx'

export default function Werk() {
  return (
    <>
      <Helmet><title>Werk vinden in Australië, 7 routes vergeleken</title></Helmet>
      <PageHeader
        eyebrow="Werk"
        title="Werk vinden in Australië, 7 routes vergeleken"
        intro="Hospo, farmwork, retail, kantoor, mining, au pair, online. Wat verdient wat, wie zoekt wie, en welke werkgevers je beter mijdt."
      />
      <Placeholder note="Fase 4: 7 werkroutes met tarieven, locaties, valkuilen. Aparte 88-dagen-farmwork-pillar." />
    </>
  )
}
