/**
 * PolaroidStrip — een rij polaroid-kaarten met willekeurige lichte rotaties.
 * Gebruik op pagina's om echte foto's op een speelse manier te tonen.
 *
 * Props:
 *   items: [{ src, alt }]
 *   eyebrow?: string
 *   title?: string
 */

// Vaste rotatie-reeks — cycling via index % length
const ROTATIONS = [-2.4, 1.1, -0.7, 2.2, -1.6, 0.9, -2.1, 1.7, -0.5, 2.5, -1.3, 0.6]

export default function PolaroidStrip({ items = [], eyebrow, title }) {
  return (
    <section className="bg-bone border-y border-sand overflow-hidden py-10">
      {(eyebrow || title) && (
        <div className="container-wide mb-8">
          {eyebrow && (
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-ember mb-2">
              {eyebrow}
            </div>
          )}
          {title && (
            <h2 className="font-serif text-2xl sm:text-3xl text-forest leading-tight">
              {title}
            </h2>
          )}
        </div>
      )}

      {/* Scrollable op mobiel, wrap op desktop */}
      <div className="flex gap-5 sm:gap-6 overflow-x-auto sm:overflow-visible sm:flex-wrap sm:justify-center px-6 sm:px-0 pb-4 sm:pb-0">
        {items.map((item, i) => {
          const rot = ROTATIONS[i % ROTATIONS.length]
          return (
            <figure
              key={item.src}
              className="flex-shrink-0 bg-white shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-default"
              style={{
                transform: `rotate(${rot}deg)`,
                padding: '10px',
                paddingBottom: '36px',
                width: '160px',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'rotate(0deg) scale(1.05)' }}
              onMouseLeave={e => { e.currentTarget.style.transform = `rotate(${rot}deg)` }}
            >
              <div
                className="overflow-hidden bg-sand"
                style={{ width: '140px', height: '175px' }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </figure>
          )
        })}
      </div>
    </section>
  )
}
