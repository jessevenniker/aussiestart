export function FactsTable({ rows }) {
  return (
    <div className="not-prose my-6 overflow-hidden rounded-xl border border-sand">
      <table className="w-full text-sm">
        <tbody>
          {rows.map(([k, v], i) => (
            <tr key={k} className={i % 2 === 0 ? 'bg-cream' : 'bg-bone'}>
              <td className="py-2.5 px-4 text-slate align-top w-1/2">{k}</td>
              <td className="py-2.5 px-4 font-medium text-ink">{v}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export function Steps({ items }) {
  return (
    <ol className="not-prose my-6 space-y-3 list-none pl-0">
      {items.map(([n, body]) => (
        <li key={n} className="flex gap-4">
          <span className="shrink-0 w-16 text-xs font-semibold uppercase tracking-wider text-ember pt-1">
            {n}
          </span>
          <p className="text-ink/85 leading-relaxed">{body}</p>
        </li>
      ))}
    </ol>
  )
}

export function Callout({ kind = 'info', title, children }) {
  const styles = {
    info:    'border-forest bg-cream',
    warn:    'border-ember bg-cream',
    success: 'border-ochre bg-sand',
  }
  return (
    <aside className={`not-prose my-5 border-l-4 ${styles[kind]} rounded-r-lg p-4`}>
      {title && <div className="font-serif text-lg text-forest mb-1">{title}</div>}
      <div className="text-ink/85 leading-relaxed text-sm">{children}</div>
    </aside>
  )
}

export function FAQ({ q, children }) {
  return (
    <details className="not-prose my-2 group border-b border-sand py-3">
      <summary className="cursor-pointer font-medium text-forest list-none flex justify-between gap-4">
        <span>{q}</span>
        <span className="text-ember group-open:rotate-45 transition-transform">+</span>
      </summary>
      <div className="mt-2 text-ink/80 text-sm leading-relaxed">{children}</div>
    </details>
  )
}

export function ArticleLayout({ children, aside }) {
  return (
    <article className="container-wide py-12 grid lg:grid-cols-[minmax(0,1fr)_280px] gap-10">
      <div className="prose-custom">{children}</div>
      {aside && <aside className="lg:sticky lg:top-24 self-start space-y-4">{aside}</aside>}
    </article>
  )
}

/**
 * SourceStrip — horizontale bronstrook onder een sectie.
 * Gebruik op pagina's met officiële of tijdsgevoelige informatie.
 */
export function SourceStrip({ source, url, checked, type = 'officiële bron + praktische toelichting' }) {
  return (
    <div className="not-prose my-6 border-t border-b border-sand py-3 flex flex-wrap gap-x-6 gap-y-1 text-xs text-slate">
      <span>
        <span className="font-medium text-ink/60">Primaire bron:</span>{' '}
        {url
          ? <a href={url} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-ember">{source}</a>
          : source}
      </span>
      {checked && (
        <span>
          <span className="font-medium text-ink/60">Laatst gecheckt:</span> {checked}
        </span>
      )}
      <span>
        <span className="font-medium text-ink/60">Type:</span> {type}
      </span>
    </div>
  )
}

/**
 * MarginNote — redactionele randnotitie met gekleurde linker rand.
 * type: 'note' (forest) | 'warn' (ember) | 'tip' (ochre)
 */
export function MarginNote({ children, type = 'note' }) {
  const border = {
    note: 'border-forest/50',
    warn: 'border-ember',
    tip:  'border-ochre',
  }
  return (
    <aside className={`not-prose my-5 border-l-4 ${border[type]} pl-4 text-sm text-ink/75 leading-relaxed`}>
      {children}
    </aside>
  )
}

/**
 * LastChecked — klein badge onderaan een pagina of sectie.
 */
export function LastChecked({ date, source, sourceUrl }) {
  return (
    <div className="not-prose mt-10 pt-4 border-t border-sand flex flex-wrap items-center gap-3 text-xs text-slate">
      <span className="bg-sand px-2.5 py-1 rounded font-medium">✓ Gecheckt {date}</span>
      {source && (
        sourceUrl
          ? <a href={sourceUrl} target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-ember">Bron: {source}</a>
          : <span>Bron: {source}</span>
      )}
      <span className="text-slate/60">Geen juridisch of financieel advies — controleer officiële bronnen voor beslissingen.</span>
    </div>
  )
}
