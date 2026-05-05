import { lazy, Suspense, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import JsonLd from './components/JsonLd.jsx'
import Home from './pages/Home.jsx'

const SITE_URL = 'https://australiestart.nl'

// ─── Sitewide JSON-LD: Organization + WebSite ────────────────────────────────
// Rendered once in App, aanwezig op elke pagina.
// GEO: helpt AI-systemen Aussiestart als entiteit herkennen.
const SITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'Aussiestart',
      url: SITE_URL,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/favicon.svg`,
      },
      description:
        'Onafhankelijke redactionele gids voor Nederlanders die een Working Holiday naar Australië plannen. Eerlijk, praktisch, zonder bemiddelaar.',
      inLanguage: 'nl-NL',
      sameAs: [
        'https://australiestart.nl',
        // Voeg toe zodra actief: 'https://www.instagram.com/aussiestart'
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'Aussiestart',
      description:
        'Working holiday Australië zelf regelen — visum, kosten, werk, wonen en de 88-dagenregel.',
      publisher: { '@id': `${SITE_URL}/#organization` },
      inLanguage: 'nl-NL',
    },
  ],
}

const BeginHier           = lazy(() => import('./pages/BeginHier.jsx'))
const Visum               = lazy(() => import('./pages/Visum.jsx'))
const VoorVertrek         = lazy(() => import('./pages/VoorVertrek.jsx'))
const Kosten              = lazy(() => import('./pages/Kosten.jsx'))
const Werk                = lazy(() => import('./pages/Werk.jsx'))
const Wonen               = lazy(() => import('./pages/Wonen.jsx'))
const Verzekering         = lazy(() => import('./pages/Verzekering.jsx'))
const EersteWeek          = lazy(() => import('./pages/EersteWeek.jsx'))
const Medicare            = lazy(() => import('./pages/Medicare.jsx'))
const TaxFileNumber       = lazy(() => import('./pages/TaxFileNumber.jsx'))
const Banking             = lazy(() => import('./pages/Banking.jsx'))
const Loon                = lazy(() => import('./pages/Loon.jsx'))
const Hostels             = lazy(() => import('./pages/Hostels.jsx'))
const Esim                = lazy(() => import('./pages/Esim.jsx'))
const Sydney              = lazy(() => import('./pages/Sydney.jsx'))
const Verhalen            = lazy(() => import('./pages/Verhalen.jsx'))
const Over                = lazy(() => import('./pages/Over.jsx'))
const AffiliateDisclosure = lazy(() => import('./pages/AffiliateDisclosure.jsx'))
const Bronnen             = lazy(() => import('./pages/Bronnen.jsx'))
const Contact             = lazy(() => import('./pages/Contact.jsx'))
const AchtentachtigDagen        = lazy(() => import('./pages/AchtentachtigDagen.jsx'))
const AchtentachtigDagenChecker = lazy(() => import('./pages/AchtentachtigDagenChecker.jsx'))
const Startkit            = lazy(() => import('./pages/Startkit.jsx'))
const StartkitDownload    = lazy(() => import('./pages/StartkitDownload.jsx'))
const ZelfRegelenOfBureau = lazy(() => import('./pages/ZelfRegelenOfBureau.jsx'))
const Melbourne           = lazy(() => import('./pages/Melbourne.jsx'))
const Privacy             = lazy(() => import('./pages/Privacy.jsx'))
const Voorwaarden         = lazy(() => import('./pages/Voorwaarden.jsx'))
const NotFound            = lazy(() => import('./pages/NotFound.jsx'))

function PageLoader() {
  return (
    <div className="container-wide py-20">
      <div className="animate-pulse">
        <div className="h-3 bg-sand rounded w-24 mb-4" />
        <div className="h-10 bg-sand rounded w-2/3 mb-3" />
        <div className="h-4 bg-sand rounded w-1/2" />
      </div>
    </div>
  )
}

export default function App() {
  // Deterministisch signal voor prerender-script: puppeteer wacht tot dit
  // attribuut op <html> staat voordat het de HTML exporteert. Mount-tijd
  // garandeert dat react-helmet-async's head-mutaties klaar zijn.
  useEffect(() => {
    document.documentElement.setAttribute('data-prerender-ready', '1')
  }, [])

  const location = useLocation()
  const canonical = `${SITE_URL}${location.pathname}`

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <link rel="canonical" href={canonical} />
        <meta property="og:url" content={canonical} />
        {/* hreflang: NL-variant + x-default voor internationale zoekmachines */}
        <link rel="alternate" hreflang="nl" href={canonical} />
        <link rel="alternate" hreflang="x-default" href={canonical} />
      </Helmet>
      {/* Sitewide structured data — Organization + WebSite */}
      <JsonLd data={SITE_SCHEMA} />
      <Header />
      <ScrollToTop />
      <main className="flex-1">
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/"                      element={<Home />} />
            <Route path="/begin-hier"            element={<BeginHier />} />
            <Route path="/visum"                 element={<Visum />} />
            <Route path="/voor-vertrek"          element={<VoorVertrek />} />
            <Route path="/kosten"                element={<Kosten />} />
            <Route path="/werk"                  element={<Werk />} />
            <Route path="/wonen"                 element={<Wonen />} />
            <Route path="/verzekering"           element={<Verzekering />} />
            <Route path="/eerste-week"           element={<EersteWeek />} />
            <Route path="/medicare"              element={<Medicare />} />
            <Route path="/tax-file-number"       element={<TaxFileNumber />} />
            <Route path="/banking"               element={<Banking />} />
            <Route path="/loon"                  element={<Loon />} />
            <Route path="/hostels"               element={<Hostels />} />
            <Route path="/esim"                  element={<Esim />} />
            <Route path="/88-dagen"              element={<AchtentachtigDagen />} />
            <Route path="/88-dagen-checker"     element={<AchtentachtigDagenChecker />} />
            <Route path="/sydney"                element={<Sydney />} />
            <Route path="/startkit"              element={<Startkit />} />
            <Route path="/startkit-download"     element={<StartkitDownload />} />
            <Route path="/zelf-regelen-of-bureau" element={<ZelfRegelenOfBureau />} />
            <Route path="/melbourne"             element={<Melbourne />} />
            <Route path="/verhalen"              element={<Verhalen />} />
            <Route path="/over"                  element={<Over />} />
            <Route path="/privacy"               element={<Privacy />} />
            <Route path="/voorwaarden"           element={<Voorwaarden />} />
            <Route path="/affiliate-disclosure"  element={<AffiliateDisclosure />} />
            <Route path="/bronnen"               element={<Bronnen />} />
            <Route path="/contact"               element={<Contact />} />
            <Route path="*"                      element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  )
}
