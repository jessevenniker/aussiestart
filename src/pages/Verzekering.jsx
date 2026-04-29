import { Helmet } from 'react-helmet-async'
import PageHeader from '../components/PageHeader.jsx'
import Placeholder from '../components/Placeholder.jsx'

export default function Verzekering() {
  return (
    <>
      <Helmet><title>Reisverzekering working holiday, 4 polissen vergeleken</title></Helmet>
      <PageHeader
        eyebrow="Verzekering"
        title="Vier polissen, eerlijk vergeleken"
        intro="SafetyWing, JoHo, World Nomads en Allianz onder de loep. Dekkingen, prijzen, en wat ze niet uitkeren."
      />
      <Placeholder note="Fase 4: vergelijkingstabel, beslisboom (kort/lang verblijf, sport, eigendommen), affiliate-links met disclosure." />
    </>
  )
}
