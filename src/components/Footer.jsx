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
        <div>
          <div className="text-xs uppercase tracking-wider text-ochre mb-3">Over</div>
          <ul className="space-y-1 text-sm">
            {footerNav.map(item => (
              <li key={item.path}>
                <Link to={item.path} className="hover:text-ochre">{item.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-bone/10">
        <div className="container-wide py-5 flex flex-col sm:flex-row justify-between gap-2 text-xs text-bone/60">
          <span>© {new Date().getFullYear()} Aussiestart. Een onafhankelijk project.</span>
          <span>Geen bemiddelaar. Geen pakket. Eerlijke affiliate.</span>
        </div>
      </div>
    </footer>
  )
}
