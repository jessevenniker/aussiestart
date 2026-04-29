import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import FactBar from '../components/FactBar.jsx'
import StepCard from '../components/StepCard.jsx'
import PhotoStrip from '../components/PhotoStrip.jsx'
import { steps } from '../data/nav.js'

const galleryPhotos = [
  {
    src: '/img/foto/IMG_7673.jpg',
    alt: 'Zonsondergang boven Tomaree Head, NSW kustlijn',
    title: 'Tomaree, NSW',
    caption: 'Drie uur boven Sydney. Goedkoop kamperen, leeg strand.',
  },
  {
    src: '/img/foto/IMG_3450.jpg',
    alt: 'Three Sisters in de Blue Mountains, NSW',
    title: 'Blue Mountains',
    caption: 'Dagtrip vanuit Sydney. Trein, geen auto nodig.',
  },
  {
    src: '/img/foto/IMG_7492.jpg',
    alt: 'Zandduinen aan de Australische kust, blauwe lucht',
    title: 'Stockton Dunes',
    caption: 'Sandboarden tussen werkdagen door.',
  },
]

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Aussiestart, Working holiday Australië, zelf geregeld</title>
      </Helmet>
      <Hero />
      <FactBar />

      <section className="container-wide pt-16 pb-12">
        <div className="flex items-end justify-between mb-8 flex-wrap gap-3">
          <h2 className="font-serif text-3xl sm:text-4xl text-forest">Begin hier</h2>
          <Link to="/begin-hier" className="text-sm text-ember underline underline-offset-4 hover:text-sunset">
            14 stappen, in volgorde →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-4 sm:gap-5">
          {steps.map(s => <StepCard key={s.n} {...s} />)}
        </div>
      </section>

      <section className="bg-cream border-y border-sand">
        <div className="container-wide py-16 grid md:grid-cols-2 gap-10 items-start">
          <div>
            <div className="eyebrow mb-3">Waarom Aussiestart</div>
            <h2 className="font-serif text-3xl sm:text-4xl text-forest leading-tight">
              Geen bemiddelaar.<br />Geen pakket van €2.000.
            </h2>
            <p className="mt-5 text-ink/80 leading-relaxed max-w-prose">
              Bemiddelingsbureaus verkopen werkvisum-pakketten van €549 tot €2.050.
              Het meeste daarvan kun je zelf, sneller en goedkoper. Aussiestart is
              een onafhankelijk naslagwerk dat je door de stappen heen helpt, met
              eerlijke cijfers en de tips die bureaus je niet vertellen.
            </p>
            <ul className="mt-6 space-y-2 text-sm text-ink/80">
              <li className="flex gap-2"><Check /> Stappenplannen op volgorde, met deadlines</li>
              <li className="flex gap-2"><Check /> Calculator op échte cijfers, niet op marketing</li>
              <li className="flex gap-2"><Check /> Vergelijkers voor verzekering, banking en huur</li>
              <li className="flex gap-2"><Check /> Verhalen van mensen die net terug zijn</li>
            </ul>
          </div>
          <div className="bg-bone border border-sand rounded-2xl p-6 sm:p-8">
            <div className="eyebrow mb-3">Wat je hier <em>niet</em> vindt</div>
            <ul className="space-y-3 text-sm text-ink/80">
              <li className="flex gap-3"><Cross /> <span>Pakketten of bemiddelingsfees</span></li>
              <li className="flex gap-3"><Cross /> <span>Verhalen-blogs zonder structuur</span></li>
              <li className="flex gap-3"><Cross /> <span>Verborgen sponsors of "partners"</span></li>
              <li className="flex gap-3"><Cross /> <span>Inschrijven om te lezen</span></li>
            </ul>
            <hr className="my-6 border-sand" />
            <p className="text-xs text-slate leading-relaxed">
              Aussiestart verdient via affiliate (verzekering, banking, huur).
              Hoe we partners selecteren staat openlijk op de{' '}
              <Link to="/affiliate-disclosure" className="underline text-ember">disclosure-pagina</Link>.
            </p>
          </div>
        </div>
      </section>

      <PhotoStrip
        eyebrow="Wat je tegenkomt"
        title="Plekken die niet in een bemiddelaar-brochure staan"
        intro="Geen stockfoto's, geen Sydney Opera House voor de derde keer. Plekken waar je ook echt langskomt als je het zelf regelt."
        items={galleryPhotos}
      />

      <section className="container-wide py-16">
        <div className="max-w-3xl">
          <div className="eyebrow mb-3">Volgende stap</div>
          <h2 className="font-serif text-3xl sm:text-4xl text-forest leading-tight">
            Klaar om te beginnen?
          </h2>
          <p className="mt-4 text-ink/80 max-w-prose">
            De startgids loopt je in 14 stappen door wat je 6, 3 en 1 maand voor vertrek
            moet regelen, van visum en verzekering tot je eerste week in Sydney.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Link to="/begin-hier" className="btn-primary">
              Open de startgids →
            </Link>
            <Link to="/kosten" className="btn-secondary">
              Wat kost het?
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="mt-0.5 shrink-0">
      <circle cx="9" cy="9" r="9" fill="#1f3a2e" />
      <path d="M5 9.5l2.5 2.5L13 6.5" stroke="#e0a458" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
function Cross() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="mt-0.5 shrink-0">
      <circle cx="9" cy="9" r="9" fill="#f4ead6" />
      <path d="M6 6l6 6M12 6l-6 6" stroke="#b04918" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}
