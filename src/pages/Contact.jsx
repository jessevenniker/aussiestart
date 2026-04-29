import { Helmet } from 'react-helmet-async'
import PageHeader from '../components/PageHeader.jsx'

export default function Contact() {
  return (
    <>
      <Helmet><title>Contact, Aussiestart</title></Helmet>
      <PageHeader
        eyebrow="Contact"
        title="Iets te vragen, te corrigeren, of te delen?"
        intro="Korte vragen via e-mail. Voor verhalen of correcties op cijfers ontvangen we graag bron of context erbij."
      />
      <section className="container-wide py-12">
        <div className="prose-custom">
          <p>
            E-mail: <a href="mailto:hoi@aussiestart.nl">hoi@aussiestart.nl</a> (placeholder, domein nog te activeren).
          </p>
          <p>
            Wil je je verhaal delen? Korte profielschets, bestemming, duur en drie inzichten
            volstaan. We redigeren mee, jij keurt goed voor publicatie.
          </p>
          <p>
            Klopt er een cijfer of bron niet? Stuur de correctie met bronvermelding,
            dan updaten we meestal binnen een week.
          </p>
        </div>
      </section>
    </>
  )
}
