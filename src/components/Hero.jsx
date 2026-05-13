import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  const [hasPhoto, setHasPhoto] = useState(false)
  return (
    <section className="relative overflow-hidden bg-forest text-bone">
      {/* Sunset → night gradient (fallback + onderlaag) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, #15281f 0%, #1f3a2e 35%, #5d3724 65%, #b04918 92%, #d97a3a 100%)',
        }}
        aria-hidden="true"
      />
      {/* Vuurwerk-suggestie (verbergt zich automatisch zodra echte foto er is) */}
      {!hasPhoto && <Fireworks />}
      {/* Photo slot: drop /public/img/hero-sydney.jpg om gradient te vervangen */}
      <img
        src="/img/hero-sydney.jpg"
        alt=""
        aria-hidden="true"
        onLoad={() => setHasPhoto(true)}
        onError={(e) => { e.currentTarget.style.display = 'none' }}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${hasPhoto ? 'opacity-100' : 'opacity-0'}`}
      />
      {/* Donkere overlay voor leesbaarheid */}
      <div className="absolute inset-0 bg-forestdk/30" aria-hidden="true" />

      <div className="relative container-wide pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div className="inline-flex items-center gap-2 bg-forest/60 backdrop-blur-sm border border-ochre/40 rounded-full px-4 py-1.5 mb-6">
          <span className="text-ochre">★</span>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-bone">
            Working holiday Australië
          </span>
        </div>
        <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl leading-[1.05] max-w-3xl">
          <span className="italic">G'day,</span> backpacker.
        </h1>
        <p className="mt-3 text-base sm:text-lg font-medium text-ochre/90 tracking-wide">
          Working Holiday Australië zelf regelen
        </p>
        <p className="mt-4 max-w-xl text-base text-bone/80 leading-relaxed">
          Geen bemiddelaar, geen €2.000-pakket. Eerlijke gidsen, echte cijfers,
          en de stappen die bureaus je niet vertellen.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link to="/begin-hier" className="btn-primary">
            Begin hier
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
          <Link to="/kosten" className="inline-flex items-center gap-2 px-5 py-3 rounded-full font-medium border border-bone/40 text-bone hover:bg-bone hover:text-forest transition-colors">
            Wat kost het?
          </Link>
        </div>
      </div>
    </section>
  )
}

function Fireworks() {
  // Subtiele vuurwerksuggestie boven de skyline tot er een echte foto is.
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none"
      viewBox="0 0 1200 600"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="burst" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffe7b8" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#e0a458" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* twee zachte vuurwerk-spikkels */}
      <g opacity="0.55">
        <circle cx="280" cy="160" r="80" fill="url(#burst)" />
        <g stroke="#ffe7b8" strokeWidth="0.8" strokeLinecap="round">
          {Array.from({ length: 14 }).map((_, i) => {
            const a = (i * Math.PI * 2) / 14
            const x1 = 280 + Math.cos(a) * 28
            const y1 = 160 + Math.sin(a) * 28
            const x2 = 280 + Math.cos(a) * 70
            const y2 = 160 + Math.sin(a) * 70
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
          })}
        </g>
      </g>
      <g opacity="0.4">
        <circle cx="940" cy="220" r="60" fill="url(#burst)" />
        <g stroke="#ffe7b8" strokeWidth="0.6" strokeLinecap="round">
          {Array.from({ length: 12 }).map((_, i) => {
            const a = (i * Math.PI * 2) / 12
            const x1 = 940 + Math.cos(a) * 20
            const y1 = 220 + Math.sin(a) * 20
            const x2 = 940 + Math.cos(a) * 55
            const y2 = 220 + Math.sin(a) * 55
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />
          })}
        </g>
      </g>
      {/* Sterren */}
      <g fill="#fffbf2" opacity="0.6">
        {[
          [120, 80], [200, 50], [420, 110], [560, 70], [720, 130],
          [820, 60], [1080, 100], [1140, 200], [60, 220], [380, 260],
          [640, 230], [880, 280], [1020, 320]
        ].map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r={i % 3 === 0 ? 1.6 : 1} />
        ))}
      </g>
      {/* Sydney-skyline silhouet */}
      <g fill="#0d1a14" opacity="0.85">
        <path d="M0 600 L0 480 L80 480 L80 470 L130 470 L130 460 L180 460 L180 480 L240 480 L240 460 L260 440 Q280 420 300 440 L320 460 L380 460 L380 470 L420 470 L420 450 L470 450 L470 470 L500 470 L500 460 L540 460 L540 440 L580 440 L580 460 L620 460 L620 450 L660 450 L660 470 L700 470 L700 460 L740 460 L740 440 Q780 420 820 440 L820 460 L860 460 L860 470 L900 470 L900 450 L940 450 L940 470 L980 470 L980 460 L1020 460 L1020 440 L1060 440 L1060 470 L1100 470 L1100 480 L1200 480 L1200 600 Z" />
      </g>
      {/* Opera-zeilen suggestie */}
      <g fill="#0d1a14" opacity="0.92">
        <path d="M520 480 Q540 430 580 460 Q600 440 620 470 L620 480 Z" />
        <path d="M610 480 Q630 440 670 465 Q690 445 710 472 L710 480 Z" />
      </g>
      {/* Water reflectie hint */}
      <g stroke="#e0a458" strokeWidth="0.5" opacity="0.25">
        <line x1="0" y1="510" x2="1200" y2="510" />
        <line x1="0" y1="525" x2="1200" y2="525" />
        <line x1="0" y1="545" x2="1200" y2="545" />
      </g>
    </svg>
  )
}
