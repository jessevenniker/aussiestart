export default function Placeholder({ note }) {
  return (
    <section className="container-wide py-16">
      <div className="max-w-reading">
        <div className="border-2 border-dashed border-sand bg-cream rounded-xl p-8">
          <div className="eyebrow mb-2">Nog leeg</div>
          <p className="text-ink/80 leading-relaxed">
            Deze pagina staat klaar voor de volgende sessie. Het skelet en de routing werken,
            de inhoud volgt in fase 2-3.
          </p>
          {note && <p className="mt-3 text-sm text-slate">{note}</p>}
        </div>
      </div>
    </section>
  )
}
