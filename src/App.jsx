import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import Home from './pages/Home.jsx'

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
  return (
    <div className="min-h-screen flex flex-col">
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
