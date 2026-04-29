import { fastFacts } from '../data/nav.js'

export default function FactBar() {
  return (
    <div className="container-wide -mt-8 relative z-10">
      <div className="bg-bone shadow-lg shadow-forest/10 border border-sand rounded-2xl px-6 py-4 sm:py-5">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-y-3 sm:gap-y-0 sm:divide-x sm:divide-sand">
          {fastFacts.map(f => (
            <div key={f.label} className="px-2 sm:px-4 first:pl-0 last:pr-0">
              <div className="text-[11px] uppercase tracking-wider text-slate font-medium">
                {f.label}
              </div>
              <div className="font-serif text-lg text-forest font-semibold">
                {f.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
