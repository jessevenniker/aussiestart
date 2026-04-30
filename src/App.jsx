import { lazy, Suspense, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'

const SITE_URL = 'https://australiestart.nl'

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
      </Helmet>
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
            <Route path="/sydney"                element={<Sydney />} />
            <Route path="/verhalen"              element={<Verhalen />} />
            <Route path="/over"                  element={<Over />} />
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
