import { Link } from 'react-router-dom'
import { footerNav, primaryNav } from '../data/nav.js'
import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer className="bg-forestdk text-bone/80 mt-24">
      <div className="container-wide py-12 grid gap-10 md:grid-cols-3">
        <div>
          <div className="mb-4"><Logo size="md" tagline /></div>
          <p className="text-sm leading-relaxed max-w-sm">
            Onafhankelijke gids voor Nederlanders die op working holiday naar Australië gaan.
            Eerlijk, instrumenteel, zonder bemiddelaar.
          </p>
        </div>
        <div>
          <div className="text-xs uppercase tracking-wider text-ochre mb-3">Onderwerpen</div>
          <ul className="grid grid-cols-2 gap-y-1 text-sm">
            {primaryNav.map(item => (
              <li key={item.path}>
                <Link to={item.path} className="hover:text-ochre">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-6">
          <div>
            <div className="text-xs uppercase tracking-wider text-ochre mb-3">Steden</div>
            <ul className="space-y-1 text-sm">
              <li><Link to="/sydney" className="hover:text-ochre">Sydney</Link></li>
              <li><Link to="/melbourne" className="hover:text-ochre">Melbourne</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-ochre mb-3">Over</div>
            <ul className="space-y-1 text-sm">
              {footerNav.map(item => (
                <li key={item.path}>
                  <Link to={item.path} className="hover:text-ochre">{item.label}</Link>
                </li>
              ))}
              <li><Link to="/zelf-regelen-of-bureau" className="hover:text-ochre">Bureau vs. zelf regelen</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-bone/10">
        <div className="container-wide py-5 flex flex-col sm:flex-row justify-between gap-3 text-xs text-bone/60">
          <span>© {new Date().getFullYear()} Aussiestart — Jesco Innovation B.V.</span>
          <nav className="flex flex-wrap gap-4">
            <Link to="/privacy" className="hover:text-ochre">Privacybeleid</Link>
            <Link to="/voorwaarden" className="hover:text-ochre">Algemene Voorwaarden</Link>
            <Link to="/affiliate-disclosure" className="hover:text-ochre">Affiliate disclosure</Link>
          </nav>
        </div>
      </div>
    </footer>
  )
}
