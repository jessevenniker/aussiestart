/**
 * Genereert public/sitemap.xml op basis van een statische lijst routes.
 * Draait pre-build via npm script.
 */
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))

// Canonical productie-domein. SITE_URL env-var kan dit overschrijven voor
// preview-deploys, anders is australiestart.nl het canonieke domein.
const SITE = process.env.SITE_URL || 'https://australiestart.nl'

// Pagina's met echte content. Placeholder (Verhalen) staat op noindex en
// hoort niet in de sitemap totdat hij inhoud heeft.
const routes = [
  { path: '/',                     changefreq: 'weekly',  priority: 1.0 },
  { path: '/begin-hier',           changefreq: 'monthly', priority: 0.9 },
  { path: '/visum',                changefreq: 'monthly', priority: 0.9 },
  { path: '/voor-vertrek',         changefreq: 'monthly', priority: 0.7 },
  { path: '/kosten',               changefreq: 'monthly', priority: 0.9 },
  { path: '/loon',                 changefreq: 'monthly', priority: 0.8 },
  { path: '/banking',              changefreq: 'monthly', priority: 0.8 },
  { path: '/werk',                 changefreq: 'monthly', priority: 0.8 },
  { path: '/wonen',                changefreq: 'monthly', priority: 0.8 },
  { path: '/hostels',              changefreq: 'monthly', priority: 0.8 },
  { path: '/esim',                 changefreq: 'monthly', priority: 0.7 },
  { path: '/verzekering',          changefreq: 'monthly', priority: 0.9 },
  { path: '/medicare',             changefreq: 'monthly', priority: 0.8 },
  { path: '/eerste-week',          changefreq: 'monthly', priority: 0.8 },
  { path: '/tax-file-number',      changefreq: 'monthly', priority: 0.8 },
  { path: '/sydney',               changefreq: 'monthly', priority: 0.8 },
  { path: '/bronnen',              changefreq: 'monthly', priority: 0.4 },
  { path: '/over',                 changefreq: 'yearly',  priority: 0.3 },
  { path: '/affiliate-disclosure', changefreq: 'monthly', priority: 0.4 },
  { path: '/contact',              changefreq: 'yearly',  priority: 0.3 },
]

const today = new Date().toISOString().slice(0, 10)

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map((r) => `  <url>
    <loc>${SITE}${r.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${r.changefreq}</changefreq>
    <priority>${r.priority.toFixed(1)}</priority>
  </url>`).join('\n')}
</urlset>
`

const out = resolve(__dirname, '..', 'public', 'sitemap.xml')
writeFileSync(out, xml)
console.log(`Wrote sitemap with ${routes.length} routes -> ${out}`)
console.log(`Site URL: ${SITE}`)
