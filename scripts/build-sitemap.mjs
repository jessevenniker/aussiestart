/**
 * Genereert public/sitemap.xml op basis van een statische lijst routes.
 * Draait pre-build via npm script.
 *
 * Regels:
 * - /startkit staat tijdelijk op noindex (betaalmogelijkheid nog niet klaar) → niet in sitemap
 * - /startkit-download staat op noindex → niet in sitemap
 * - /verhalen staat op noindex → niet in sitemap
 * - lastmod per pagina op basis van echte content-datum voor betere crawl-signalen
 */
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))

const SITE = process.env.SITE_URL || 'https://australiestart.nl'

// lastmod = datum van laatste inhoudelijke wijziging (niet automatisch 'today')
// priority = zoekintentie-waarde voor Aussiestart
const routes = [
  { path: '/',                     lastmod: '2026-05-02', changefreq: 'weekly',  priority: 1.0 },
  { path: '/begin-hier',           lastmod: '2026-04-30', changefreq: 'monthly', priority: 0.9 },
  { path: '/visum',                lastmod: '2026-05-02', changefreq: 'monthly', priority: 0.9 },
  { path: '/voor-vertrek',         lastmod: '2026-04-30', changefreq: 'monthly', priority: 0.7 },
  { path: '/kosten',               lastmod: '2026-05-02', changefreq: 'monthly', priority: 0.9 },
  { path: '/loon',                 lastmod: '2026-04-30', changefreq: 'monthly', priority: 0.8 },
  { path: '/banking',              lastmod: '2026-04-30', changefreq: 'monthly', priority: 0.8 },
  { path: '/werk',                 lastmod: '2026-04-30', changefreq: 'monthly', priority: 0.8 },
  { path: '/wonen',                lastmod: '2026-04-30', changefreq: 'monthly', priority: 0.8 },
  { path: '/hostels',              lastmod: '2026-04-30', changefreq: 'monthly', priority: 0.8 },
  { path: '/esim',                 lastmod: '2026-04-30', changefreq: 'monthly', priority: 0.7 },
  { path: '/verzekering',          lastmod: '2026-04-30', changefreq: 'monthly', priority: 0.9 },
  { path: '/medicare',             lastmod: '2026-04-30', changefreq: 'monthly', priority: 0.8 },
  { path: '/eerste-week',          lastmod: '2026-05-02', changefreq: 'monthly', priority: 0.8 },
  { path: '/tax-file-number',      lastmod: '2026-04-30', changefreq: 'monthly', priority: 0.8 },
  { path: '/88-dagen',             lastmod: '2026-05-02', changefreq: 'monthly', priority: 0.9 },
  { path: '/88-dagen-checker',     lastmod: '2026-05-01', changefreq: 'monthly', priority: 0.8 },
  // /startkit tijdelijk noindex totdat Stripe betaallink live is
  { path: '/zelf-regelen-of-bureau', lastmod: '2026-05-04', changefreq: 'monthly', priority: 0.9 },
  { path: '/melbourne',            lastmod: '2026-05-04', changefreq: 'monthly', priority: 0.8 },
  { path: '/sydney',               lastmod: '2026-05-01', changefreq: 'monthly', priority: 0.8 },
  { path: '/bronnen',              lastmod: '2026-04-30', changefreq: 'monthly', priority: 0.4 },
  { path: '/over',                 lastmod: '2026-04-30', changefreq: 'yearly',  priority: 0.3 },
  { path: '/affiliate-disclosure', lastmod: '2026-04-30', changefreq: 'yearly',  priority: 0.3 },
  { path: '/contact',              lastmod: '2026-04-30', changefreq: 'yearly',  priority: 0.3 },
]

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((r) => `  <url>
    <loc>${SITE}${r.path}</loc>
    <lastmod>${r.lastmod}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority.toFixed(1)}</priority>
  </url>`).join('\n')}
</urlset>
`

const out = resolve(__dirname, '..', 'public', 'sitemap.xml')
writeFileSync(out, xml)
console.log(`Wrote sitemap with ${routes.length} routes -> ${out}`)
console.log(`Site URL: ${SITE}`)
