import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Hero from '../components/Hero.jsx'
import PhotoStrip from '../components/PhotoStrip.jsx'
import EmailCapture from '../components/EmailCapture.jsx'
import JsonLd from '../components/JsonLd.jsx'
import { SOT } from '../data/sot.js'

const SITE_URL = 'https://australiestart.nl'

const homeSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${SITE_URL}/#webpage`,
  url: SITE_URL,
  name: 'Aussiestart: Working Holiday Australië zelf regelen',
  description:
    'Onafhankelijke gids voor Nederlanders die met een Working Holiday visum naar Australië gaan. Visum, kosten, werk, wonen, 88-dagenregel, zonder bureau, zonder €2.000 pakket.',
  inLanguage: 'nl-NL',
  isPartOf: { '@id': `${SITE_URL}/#website` },
  about: {
    '@type': 'Thing',
    name: 'Working Holiday visum Australië',
    description: 'Het Working Holiday visum subclass 417 stelt Nederlanders van 18 t/m 30 jaar in staat om 12 maanden in Australië te verblijven en werken.',
  },
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', '.facts-strip'],
  },
}

const galleryPhotos = [
  {
    src: '/img/foto/tomaree-head-zonsondergang-port-stephens.jpg',
    alt: 'Zonsondergang boven Tomaree Head, NSW kustlijn',
    title: 'Tomaree, NSW',
    caption: 'Drie uur boven Sydney. Goedkoop kamperen, leeg strand.',
  },
  {
    src: '/img/foto/sydney-oudejaarsavond-vuurwerk-operahouse.jpg',
    alt: 'Oudejaarsavond vuurwerk boven Sydney Opera House en Harbour Bridge',
    title: 'Sydney NYE',
    caption: 'Het indrukwekkendste vuurwerk ter wereld, gratis kijken vanaf het water.',
  },
  {
    src: '/img/foto/australie-koala-eucalyptus-boom.jpeg',
    alt: 'Koala klimt in eucalyptusboom, Queensland',
    title: 'Wildlife',
    caption: 'Je ziet ze op de meest onverwachte plekken.',
  },
]

const scenarios = [
  {
    label: 'Ik oriënteer me',
    omschrijving: 'Je weet dat je wilt, maar weet nog niet hoe dat er in de praktijk uitziet: kosten, visum, werk.',
    link: '/begin-hier',
    cta: 'Lees de startgids',
  },
  {
    label: 'Ik ga, maar hoe?',
    omschrijving: 'Je hebt besloten te gaan. Nu wil je weten: wat in welke volgorde, wat kost het écht, welke valkuilen zijn er?',
    link: '/begin-hier',
    cta: 'Open het 14-stappenplan',
  },
  {
    label: 'Ik ben al onderweg',
    omschrijving: 'Je zit in Australië of bent net terug. Je zoekt tips, verhalen van anderen, of praktische info over werk en wonen.',
    link: '/verhalen',
    cta: 'Lees ervaringen',
  },
]

const route = [
  { n: '1', label: 'Visum', sub: 'AUD 670 · online · 24 uur', path: '/visum' },
  { n: '2', label: 'Budget', sub: 'Wat kost het echt?', path: '/kosten' },
  { n: '3', label: 'Verzekering', sub: '4 polissen vergeleken', path: '/verzekering' },
  { n: '4', label: 'Eerste week', sub: 'SIM, bank, TFN', path: '/eerste-week' },
  { n: '5', label: 'Werk & wonen', sub: 'Hoe en waar?', path: '/werk' },
]

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Aussiestart: Working Holiday Australië zelf regelen</title>
        <meta
          name="description"
          content="Onafhankelijke gids voor het Working Holiday visum naar Australië. Stappenplannen, eerlijke kosten en ervaringen, zonder bureau, zonder €2.000 pakket."
        />
        <meta property="og:title" content="Aussiestart: Working Holiday Australië zelf regelen" />
        <meta property="og:description" content="Visum AUD 670 zelf aanvragen. Eerlijke kosten, 88-dagenregel, werk en wonen, zonder bureau, zonder €2.000 pakket." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={`${SITE_URL}/img/foto/sydney-opera-house-panorama-haven.jpg`} />
      </Helmet>
      <JsonLd data={homeSchema} />

      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <Hero />

      {/* ── Feitenbalk ───────────────────────────────────────────────────── */}
      {/* Vervangt het floating rounded FactBar-kaartje — nu een strakke redactionele strook */}
      <div className="border-b border-sand bg-bone">
        <div className="container-wide">
          <dl className="flex flex-wrap divide-x divide-sand">
            <div className="flex flex-col py-4 px-6 first:pl-0">
              <dt className="text-[11px] font-semibold uppercase tracking-widest text-slate">Nederlanders / jaar</dt>
              <dd className="font-serif text-2xl text-forest mt-0.5">{SOT.stats.nederlandersPerJaar}</dd>
            </div>
            <div className="flex flex-col py-4 px-6">
              <dt className="text-[11px] font-semibold uppercase tracking-widest text-slate">Visumkosten</dt>
              <dd className="font-serif text-2xl text-forest mt-0.5">{SOT.visa417.kosten}</dd>
            </div>
            <div className="flex flex-col py-4 px-6">
              <dt className="text-[11px] font-semibold uppercase tracking-widest text-slate">Geldigheid</dt>
              <dd className="font-serif text-2xl text-forest mt-0.5">{SOT.visa417.geldigheid}</dd>
            </div>
            <div className="flex flex-col py-4 px-6">
              <dt className="text-[11px] font-semibold uppercase tracking-widest text-slate">Leeftijd</dt>
              <dd className="font-serif text-2xl text-forest mt-0.5">18–30 jaar</dd>
            </div>
          </dl>
        </div>
      </div>

      {/* ── Waar sta je nu? ───────────────────────────────────────────────── */}
      <section className="container-wide py-14">
        <div className="max-w-xl mb-8">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-ember mb-3">Beginpunt</div>
          <h2 className="font-serif text-3xl sm:text-4xl text-forest leading-tight">
            Waar sta je nu?
          </h2>
          <p className="mt-3 text-ink/70 leading-relaxed">
            Afhankelijk van waar je in het proces zit, zijn andere dingen het meest nuttig.
          </p>
        </div>

        <div className="divide-y divide-sand border-t border-b border-sand">
          {scenarios.map((s) => (
            <div key={s.label} className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8 py-5">
              <span className="shrink-0 text-xs font-semibold uppercase tracking-wider text-ember w-36">
                {s.label}
              </span>
              <p className="flex-1 text-ink/80 text-sm leading-relaxed">{s.omschrijving}</p>
              <Link
                to={s.link}
                className="shrink-0 text-sm font-medium text-forest border border-forest/30 px-4 py-2 rounded-full hover:bg-forest hover:text-bone transition-colors no-underline whitespace-nowrap"
              >
                {s.cta} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* ── Vertrekroute ─────────────────────────────────────────────────── */}
      <section className="bg-forest text-bone">
        <div className="container-wide py-14">
          <div className="mb-8">
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-ochre mb-3">De route</div>
            <h2 className="font-serif text-3xl sm:text-4xl leading-tight">
              Van aanmelding tot eerste werkdag
            </h2>
            <p className="mt-3 text-bone/65 text-sm max-w-prose">
              In deze volgorde pak je het aan, niet andersom, niet door een bureau.
            </p>
          </div>

          {/* Horizontale route op desktop, vertical list op mobiel */}
          <ol className="flex flex-col sm:flex-row gap-0 sm:divide-x sm:divide-bone/20">
            {route.map((step) => (
              <li key={step.n} className="flex-1 sm:px-5 first:pl-0 last:pr-0 py-4 sm:py-0 border-b sm:border-b-0 border-bone/15 last:border-b-0">
                <Link to={step.path} className="group block no-underline">
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-ochre/80 mb-2 block">
                    Stap {step.n}
                  </span>
                  <span className="font-serif text-xl text-bone group-hover:text-ochre transition-colors block mb-1">
                    {step.label}
                  </span>
                  <span className="text-xs text-bone/50">{step.sub}</span>
                </Link>
              </li>
            ))}
          </ol>

          <div className="mt-8 pt-6 border-t border-bone/15">
            <Link to="/begin-hier" className="inline-flex items-center gap-2 bg-ochre text-forest text-sm font-medium px-5 py-2.5 rounded-full hover:bg-ochre/80 transition-colors no-underline">
              Alles in volgorde: het 14-stappenplan →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Waarom Aussiestart ────────────────────────────────────────────── */}
      <section className="container-wide py-16 grid lg:grid-cols-[minmax(0,1fr)_360px] gap-12 items-start">
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-ember mb-3">Waarom Aussiestart</div>
          <h2 className="font-serif text-3xl sm:text-4xl text-forest leading-tight">
            Geen bemiddelaar.<br />Geen pakket van €2.000.
          </h2>
          <p className="mt-5 text-ink/80 leading-relaxed max-w-prose">
            Bemiddelingsbureaus verkopen werkvisum-pakketten van €549 tot €2.050.
            Het meeste daarvan kun je zelf, sneller en goedkoper. Aussiestart is
            een onafhankelijk naslagwerk dat je door de stappen heen helpt,
            met eerlijke cijfers en de tips die bureaus je niet vertellen.
          </p>
          <ul className="mt-6 space-y-3">
            {[
              'Stappenplannen in volgorde, met deadlines',
              'Calculator op échte cijfers, niet op marketing',
              'Vergelijkers voor verzekering, banking en huur',
              'Verhalen van mensen die net terug zijn',
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm text-ink/80">
                <Check />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <Link
              to="/zelf-regelen-of-bureau"
              className="text-sm text-forest underline underline-offset-4 hover:text-ember transition-colors"
            >
              Bureau vs. zelf regelen: de eerlijke vergelijking →
            </Link>
          </div>
        </div>

        {/* Rechterkolom: geen afgeronde kaart — redactionele lijst met regelscheiding */}
        <div>
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-slate mb-4">
            Wat je hier <em className="not-italic text-ember">niet</em> vindt
          </div>
          <ul className="divide-y divide-sand">
            {[
              'Pakketten of bemiddelingsfees',
              'Verhalen-blogs zonder structuur',
              'Verborgen sponsors of "partners"',
              'Inschrijven om te lezen',
            ].map((item) => (
              <li key={item} className="flex gap-3 py-3 text-sm text-ink/80">
                <Cross />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-xs text-slate leading-relaxed border-t border-sand pt-4">
            Aussiestart verdient via affiliate (verzekering, banking, huur).
            Hoe we partners selecteren staat openlijk op de{' '}
            <Link to="/affiliate-disclosure" className="underline text-ember">disclosure-pagina</Link>.
          </p>
        </div>
      </section>

      {/* ── Fotogalerij ──────────────────────────────────────────────────── */}
      <PhotoStrip
        eyebrow="Wat je tegenkomt"
        title="Plekken die niet in een bemiddelaar-brochure staan"
        intro="Geen stockfoto's, geen Sydney Opera House voor de derde keer. Plekken waar je ook echt langskomt als je het zelf regelt."
        items={galleryPhotos}
      />

      {/* ── E-mailcapture ────────────────────────────────────────────────── */}
      <section className="container-wide pb-16">
        <EmailCapture
          headline="Gratis: de Australië Start Checklist"
          subline="Alles wat je moet regelen, in de juiste volgorde. Zonder bureau, zonder gedoe. Inclusief de 4 valkuilen die mensen weken kosten."
        />
      </section>
    </>
  )
}

function Check() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="mt-0.5 shrink-0" aria-hidden="true">
      <circle cx="9" cy="9" r="9" fill="#1f3a2e" />
      <path d="M5 9.5l2.5 2.5L13 6.5" stroke="#e0a458" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Cross() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="mt-0.5 shrink-0" aria-hidden="true">
      <circle cx="9" cy="9" r="9" fill="#f4ead6" />
      <path d="M6 6l6 6M12 6l-6 6" stroke="#b04918" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}
