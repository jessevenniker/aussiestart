import { Helmet } from 'react-helmet-async'
import PageHeader from '../components/PageHeader.jsx'

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacybeleid · Australiestart.nl</title>
        <meta name="description" content="Privacybeleid van Australiestart.nl — welke persoonsgegevens wij verwerken, waarom en welke rechten je hebt." />
        <meta name="robots" content="noindex" />
      </Helmet>
      <PageHeader
        eyebrow="Juridisch"
        title="Privacybeleid"
        intro="Laatst bijgewerkt: 5 mei 2026"
      />
      <section className="container-wide py-12">
        <div className="prose-custom max-w-3xl">

          <p>
            Australiestart.nl is een onafhankelijke informatieve website voor Nederlanders die zich
            voorbereiden op een Working Holiday, tussenjaar of reis naar Australië. Op deze pagina
            leggen wij uit welke persoonsgegevens wij verwerken, waarom wij dat doen en welke rechten je hebt.
          </p>

          <p>Australiestart.nl wordt uitgevoerd door:</p>
          <p>
            <strong>Jesco Innovation B.V.</strong><br />
            KvK-nummer: 97552356<br />
            E-mail: <a href="mailto:info@jescoinnovation.com">info@jescoinnovation.com</a><br />
            Website: https://australiestart.nl
          </p>

          <p>In dit privacybeleid verwijzen "wij", "ons" en "onze" naar Jesco Innovation B.V. en Australiestart.nl.</p>

          <h2>1. Welke gegevens verwerken wij?</h2>
          <p>
            Wij verwerken alleen persoonsgegevens wanneer dat nodig is voor het functioneren van de website,
            het beantwoorden van vragen, het versturen van informatie of het leveren van producten of diensten.
          </p>
          <p>Afhankelijk van hoe je de website gebruikt, kunnen wij de volgende gegevens verwerken:</p>
          <table>
            <thead><tr><th>Soort gegevens</th><th>Voorbeelden</th></tr></thead>
            <tbody>
              <tr><td>Contactgegevens</td><td>naam, e-mailadres</td></tr>
              <tr><td>Formuliergegevens</td><td>antwoorden in contactformulieren, verhaalformulieren of checklistformulieren</td></tr>
              <tr><td>Nieuwsbriefgegevens</td><td>e-mailadres, aanmeldmoment, voorkeuren</td></tr>
              <tr><td>Technische gegevens</td><td>IP-adres, browser, apparaat, bezochte pagina's</td></tr>
              <tr><td>Analysegegevens</td><td>klikgedrag, paginabezoeken, herkomst van verkeer</td></tr>
              <tr><td>Bestelgegevens</td><td>naam, e-mailadres, product, betaalstatus</td></tr>
              <tr><td>Communicatiegegevens</td><td>e-mails of berichten die je naar ons stuurt</td></tr>
              <tr><td>Foto's of verhalen</td><td>alleen wanneer je deze zelf aanlevert en toestemming geeft</td></tr>
            </tbody>
          </table>
          <p>
            Wij vragen niet bewust om bijzondere persoonsgegevens, zoals medische gegevens, religie,
            politieke voorkeur of andere gevoelige informatie.
          </p>

          <h2>2. Waarom verwerken wij deze gegevens?</h2>
          <ol>
            <li>om contact met je op te nemen wanneer je een vraag stelt;</li>
            <li>om je een checklist, download, gids of ander aangevraagd materiaal te sturen;</li>
            <li>om je aan te melden voor een nieuwsbrief of e-mailreeks;</li>
            <li>om ervaringsverhalen te verzamelen en, alleen met toestemming, te publiceren;</li>
            <li>om digitale producten of diensten te leveren;</li>
            <li>om betalingen, bestellingen of toegang tot producten te verwerken;</li>
            <li>om de website te verbeteren op basis van anonieme of geaggregeerde statistieken;</li>
            <li>om misbruik, spam of beveiligingsproblemen te voorkomen;</li>
            <li>om te voldoen aan wettelijke verplichtingen, bijvoorbeeld administratie en belasting.</li>
          </ol>

          <h2>3. Op welke grondslagen verwerken wij gegevens?</h2>
          <table>
            <thead><tr><th>Grondslag</th><th>Wanneer</th></tr></thead>
            <tbody>
              <tr><td>Toestemming</td><td>nieuwsbrief, verhaalpublicatie, gebruik van foto's</td></tr>
              <tr><td>Uitvoering van een overeenkomst</td><td>levering van een digitale gids, checklist of betaalde dienst</td></tr>
              <tr><td>Gerechtvaardigd belang</td><td>websitebeveiliging, beperkte statistieken, spampreventie</td></tr>
              <tr><td>Wettelijke verplichting</td><td>administratie, facturatie en belastingverplichtingen</td></tr>
            </tbody>
          </table>
          <p>Je kunt toestemming altijd intrekken. Dat heeft geen invloed op verwerkingen die al vóór intrekking rechtmatig hebben plaatsgevonden.</p>

          <h2>4. Nieuwsbrief en e-mail</h2>
          <p>
            Wanneer je je inschrijft voor een nieuwsbrief, checklist of e-mailreeks, gebruiken wij je
            e-mailadres om de aangevraagde informatie te sturen. We kunnen je daarna ook aanvullende tips
            of relevante updates sturen. Je kunt je altijd uitschrijven via de afmeldlink onderaan de e-mail
            of door contact op te nemen via <a href="mailto:info@jescoinnovation.com">info@jescoinnovation.com</a>.
          </p>

          <h2>5. Verhalen en foto's</h2>
          <p>
            Als je jouw verhaal deelt, vragen wij apart toestemming voor publicatie, redactionele bewerking,
            gebruik van je voornaam of pseudoniem, en gebruik van foto's. Wij publiceren geen e-mailadres of
            andere contactgegevens. Intrekking via <a href="mailto:info@jescoinnovation.com">info@jescoinnovation.com</a>.
          </p>

          <h2>6. Cookies en analytics</h2>
          <table>
            <thead><tr><th>Type cookie</th><th>Doel</th></tr></thead>
            <tbody>
              <tr><td>Functionele cookies</td><td>de website goed laten werken</td></tr>
              <tr><td>Analytische cookies</td><td>begrijpen hoe bezoekers de website gebruiken</td></tr>
              <tr><td>Marketing- of affiliatecookies</td><td>meten of een bezoeker via een partnerlink doorklikt</td></tr>
            </tbody>
          </table>
          <p>Wij streven ernaar privacyvriendelijke analytics te gebruiken waar mogelijk.</p>

          <h2>7. Affiliate-links</h2>
          <p>
            Op Australiestart.nl kunnen affiliate-links staan. Dat betekent dat wij mogelijk een vergoeding
            ontvangen wanneer je via zo'n link een product of dienst koopt of afsluit. Dit kost jou normaal
            gesproken niets extra. Wij proberen affiliate-relaties duidelijk te vermelden.
          </p>

          <h2>8. Digitale producten en betaalde diensten</h2>
          <p>
            Als wij digitale producten aanbieden, verwerken wij gegevens die nodig zijn om de bestelling
            af te handelen: naam, e-mailadres, factuurgegevens, betaalstatus en producttoegang.
            Betalingen kunnen worden verwerkt via externe betaaldiensten zoals Stripe, Mollie of Gumroad.
          </p>

          <h2>9. Met wie delen wij gegevens?</h2>
          <p>Wij verkopen geen persoonsgegevens aan derden. Wij kunnen gegevens delen met:</p>
          <table>
            <thead><tr><th>Dienstverlener</th><th>Doel</th></tr></thead>
            <tbody>
              <tr><td>Hostingprovider</td><td>website beschikbaar maken</td></tr>
              <tr><td>E-mailtool</td><td>nieuwsbrieven en downloads versturen</td></tr>
              <tr><td>Betaaldienst</td><td>betalingen verwerken</td></tr>
              <tr><td>Analyticsdienst</td><td>websitegebruik meten</td></tr>
              <tr><td>Cloudopslag</td><td>bestanden en administratie bewaren</td></tr>
            </tbody>
          </table>

          <h2>10. Doorgifte buiten de EER</h2>
          <p>
            Sommige dienstverleners kunnen gegevens verwerken buiten de Europese Economische Ruimte.
            Als dat gebeurt, zorgen wij voor passende waarborgen zoals standaardcontractbepalingen.
          </p>

          <h2>11. Hoe lang bewaren wij gegevens?</h2>
          <table>
            <thead><tr><th>Gegevens</th><th>Bewaartermijn</th></tr></thead>
            <tbody>
              <tr><td>Contactformulieren</td><td>maximaal 24 maanden</td></tr>
              <tr><td>Nieuwsbriefgegevens</td><td>tot uitschrijving</td></tr>
              <tr><td>Bestel- en factuurgegevens</td><td>wettelijke administratieplicht</td></tr>
              <tr><td>Analyticsgegevens</td><td>zo kort mogelijk, bij voorkeur geanonimiseerd</td></tr>
            </tbody>
          </table>

          <h2>12. Beveiliging</h2>
          <p>
            Wij nemen passende technische en organisatorische maatregelen om persoonsgegevens te beschermen
            tegen verlies, misbruik en onbevoegde toegang.
          </p>

          <h2>13. Jouw rechten</h2>
          <p>Je hebt onder de AVG het recht op inzage, correctie, verwijdering, beperking, overdracht en bezwaar. Stuur je verzoek naar <a href="mailto:info@jescoinnovation.com">info@jescoinnovation.com</a>. Je kunt ook een klacht indienen bij de Autoriteit Persoonsgegevens.</p>

          <h2>14. Minderjarigen</h2>
          <p>Australiestart.nl richt zich niet specifiek op kinderen jonger dan 16 jaar.</p>

          <h2>15. Wijzigingen</h2>
          <p>Wij kunnen dit privacybeleid aanpassen. De meest actuele versie staat altijd op deze pagina.</p>

        </div>
      </section>
    </>
  )
}
