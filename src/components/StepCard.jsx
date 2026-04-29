import { Link } from 'react-router-dom'

const tones = {
  forest: 'bg-forest text-bone',
  sand:   'bg-sand text-forest',
  sunset: 'bg-sunset text-bone',
}

const linkTone = {
  forest: 'text-ochre hover:text-bone',
  sand:   'text-ember hover:text-forest',
  sunset: 'text-bone hover:text-ink',
}

export default function StepCard({ n, title, blurb, cta, path, tone = 'forest' }) {
  return (
    <Link
      to={path}
      className={`group rounded-2xl p-6 sm:p-7 flex flex-col h-full transition-transform hover:-translate-y-0.5 ${tones[tone]}`}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs uppercase tracking-[0.18em] opacity-80">— Stap {n}</span>
        <span className="w-7 h-7 rounded-full border border-current/40 flex items-center justify-center text-xs">
          ↗
        </span>
      </div>
      <h3 className="font-serif text-2xl leading-tight mb-3">{title}</h3>
      <p className="text-sm leading-relaxed opacity-85 mb-5 flex-1">{blurb}</p>
      <span className={`text-sm font-medium underline underline-offset-4 ${linkTone[tone]}`}>
        {cta} →
      </span>
    </Link>
  )
}
