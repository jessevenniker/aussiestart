export default function PageHeader({ eyebrow, title, intro, lastChecked, source }) {
  return (
    <header className="bg-sand">
      <div className="container-wide py-12 sm:py-16">
        {eyebrow && <div className="eyebrow mb-3">{eyebrow}</div>}
        <h1 className="font-serif text-4xl sm:text-5xl text-forest leading-[1.1] max-w-3xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-5 max-w-2xl text-ink/80 text-lg leading-relaxed">{intro}</p>
        )}
        {(lastChecked || source) && (
          <div className="mt-8 inline-flex flex-wrap gap-x-6 gap-y-2 border-l-4 border-ochre pl-4 py-2 text-sm">
            {lastChecked && (
              <span><span className="text-slate">Laatst gecheckt:</span> <strong>{lastChecked}</strong></span>
            )}
            {source && (
              <span><span className="text-slate">Bron:</span> <strong>{source}</strong></span>
            )}
          </div>
        )}
      </div>
    </header>
  )
}
