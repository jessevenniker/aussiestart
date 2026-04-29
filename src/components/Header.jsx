import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { primaryNav } from '../data/nav.js'
import Logo from './Logo.jsx'

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-40 bg-forest text-bone shadow-sm">
      <div className="container-wide flex items-center justify-between h-16">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)} aria-label="Aussiestart home">
          <Logo size="md" />
        </Link>
        <nav className="hidden lg:flex items-center gap-1">
          {primaryNav.map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `px-3 py-2 text-sm rounded-md transition-colors ${
                  isActive ? 'text-ochre' : 'text-bone/85 hover:text-ochre'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <button
          className="lg:hidden p-2 -mr-2"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? (
              <path d="M6 6l12 12M6 18L18 6" strokeLinecap="round" />
            ) : (
              <>
                <path d="M3 7h18" strokeLinecap="round" />
                <path d="M3 12h18" strokeLinecap="round" />
                <path d="M3 17h18" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>
      {open && (
        <nav className="lg:hidden border-t border-bone/10 bg-forestdk">
          <div className="container-wide py-2 flex flex-col">
            {primaryNav.map(item => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-2 py-3 text-sm border-b border-bone/5 ${
                    isActive ? 'text-ochre' : 'text-bone/85'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}

