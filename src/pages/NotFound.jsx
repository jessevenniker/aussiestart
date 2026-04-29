import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <>
      <Helmet><title>Niet gevonden, Aussiestart</title></Helmet>
      <section className="container-wide py-24 text-center">
        <div className="eyebrow mb-3">404</div>
        <h1 className="font-serif text-5xl text-forest mb-4">Outback.</h1>
        <p className="max-w-md mx-auto text-ink/80 mb-8">
          Deze pagina bestaat niet (meer). Geen ramp, er ligt 7,7 miljoen km² omheen.
        </p>
        <Link to="/" className="btn-primary">Terug naar de homepage →</Link>
      </section>
    </>
  )
}
