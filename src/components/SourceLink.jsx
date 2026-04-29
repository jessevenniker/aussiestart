/**
 * SourceLink, externe link naar een officiële bron.
 * Toont domein als prefix-label, opent in nieuw tabblad.
 */
export default function SourceLink({ href, label, children }) {
  const domain = (() => {
    try { return new URL(href).hostname.replace(/^www\./, '') } catch { return '' }
  })()
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-baseline gap-1.5 text-ember underline underline-offset-2 hover:text-sunset"
    >
      <span>{children || label}</span>
      <span className="text-[10px] text-slate not-italic">↗ {domain}</span>
    </a>
  )
}
