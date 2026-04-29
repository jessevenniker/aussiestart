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
