/**
 * PhotoStrip, een 3-koloms gallery van locatiefoto's met onderschrift.
 * Foto's komen uit /public/img/foto/ (auteurseigen, geen stock).
 */
export default function PhotoStrip({ items, title, intro, eyebrow }) {
  return (
    <section className="bg-cream border-y border-sand">
      <div className="container-wide py-16">
        {(eyebrow || title || intro) && (
          <div className="max-w-2xl mb-10">
            {eyebrow && <div className="eyebrow mb-3">{eyebrow}</div>}
            {title && (
              <h2 className="font-serif text-3xl sm:text-4xl text-forest leading-tight">
                {title}
              </h2>
            )}
            {intro && (
              <p className="mt-4 text-ink/80 max-w-prose leading-relaxed">{intro}</p>
            )}
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {items.map((item) => (
            <figure key={item.src} className="group">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-forest/10">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>
              <figcaption className="mt-3 px-1">
                <div className="font-serif text-lg text-forest leading-tight">
                  {item.title}
                </div>
                {item.caption && (
                  <div className="text-sm text-slate mt-0.5">{item.caption}</div>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
