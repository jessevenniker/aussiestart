#!/usr/bin/env node
/**
 * Prerender-script voor Aussiestart.
 *
 * Leest public/sitemap.xml + extra noindex-routes, start een ephemere
 * static-server die dist/ serveert, en laat puppeteer voor elke URL de
 * gerenderde HTML exporteren naar dist/<route>/index.html. Vercel serveert
 * die statische HTML direct (filesystem-priority + cleanUrls), React
 * hydrateert er bovenop.
 *
 * Gebruik: node scripts/prerender.mjs
 * Draait automatisch na vite build via npm run build.
 *
 * Adapter van het StageStart-pattern, met fail-soft per route.
 */
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { createServer } from 'node:http'
import { fileURLToPath } from 'node:url'

const isServerless = process.env.VERCEL === '1' || process.env.CI === 'true'

async function getBrowser() {
  if (isServerless) {
    const { default: chromium } = await import('@sparticuz/chromium')
    const { default: puppeteer } = await import('puppeteer-core')
    return puppeteer.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath(),
      headless: true,
    })
  } else {
    const { default: puppeteer } = await import('puppeteer')
    return puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    })
  }
}

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const DIST = join(ROOT, 'dist')
const SITEMAP_CANDIDATES = [
  join(DIST, 'sitemap.xml'),
  join(ROOT, 'public', 'sitemap.xml'),
]

const SERVER_PORT = 5050
const SERVER_ORIGIN = `http://127.0.0.1:${SERVER_PORT}`
const ROUTE_TIMEOUT_MS = 15000
const READY_SELECTOR_TIMEOUT_MS = 10000
const MIN_SUCCESS_RATE = 0.9

// Routes met noindex die we wel willen prerenderen voor unieke title/description
// (anders krijgt elke route de SPA-shell met homepage-title bij directe load).
const EXTRA_ROUTES = [
  '/begin-hier',
  '/voor-vertrek',
  '/wonen',
  '/verhalen',
  '/404',
]

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js':   'application/javascript; charset=utf-8',
  '.mjs':  'application/javascript; charset=utf-8',
  '.css':  'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg':  'image/svg+xml',
  '.png':  'image/png',
  '.jpg':  'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.ico':  'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.txt':  'text/plain; charset=utf-8',
  '.xml':  'application/xml; charset=utf-8',
}

function findSitemap() {
  for (const path of SITEMAP_CANDIDATES) {
    if (existsSync(path)) return path
  }
  throw new Error(`Geen sitemap.xml gevonden in: ${SITEMAP_CANDIDATES.join(', ')}`)
}

function extractUrls(sitemapXml) {
  const matches = [...sitemapXml.matchAll(/<loc>([^<]+)<\/loc>/g)]
  const urls = matches.map((m) => m[1].trim())
  // Pak het pad uit elke URL ongeacht het origin (kan vercel.app of australiestart.nl zijn)
  const fromSitemap = urls.map((u) => {
    try { return new URL(u).pathname || '/' } catch { return null }
  }).filter(Boolean)
  return [...new Set([...fromSitemap, ...EXTRA_ROUTES])]
}

function startStaticServer() {
  const server = createServer((req, res) => {
    const urlPath = decodeURIComponent((req.url || '/').split('?')[0])
    let filePath
    const ext = urlPath.match(/\.[a-z0-9]+$/i)
    if (!ext) {
      filePath = join(DIST, 'index.html')
    } else {
      filePath = join(DIST, urlPath)
    }
    if (!existsSync(filePath)) {
      res.statusCode = 404
      res.end('Not found')
      return
    }
    const extKey = (ext ? ext[0] : '.html').toLowerCase()
    res.setHeader('Content-Type', MIME[extKey] || 'application/octet-stream')
    res.end(readFileSync(filePath))
  })
  return new Promise((resolve, reject) => {
    server.listen(SERVER_PORT, '127.0.0.1', () => resolve(server))
    server.on('error', reject)
  })
}

async function prerenderRoute(browser, route) {
  const page = await browser.newPage()
  // Externe requests blokkeren behalve fonts. Tracking-scripts, affiliate
  // widgets en chat-widgets hebben we niet nodig in de gerenderde HTML.
  await page.setRequestInterception(true)
  page.on('request', (req) => {
    const url = req.url()
    if (url.startsWith(SERVER_ORIGIN)) return req.continue()
    if (url.includes('fonts.googleapis.com') || url.includes('fonts.gstatic.com')) return req.continue()
    req.abort()
  })

  try {
    await page.goto(`${SERVER_ORIGIN}${route}`, {
      waitUntil: 'domcontentloaded',
      timeout: ROUTE_TIMEOUT_MS,
    })
    await page.waitForSelector('[data-prerender-ready]', {
      timeout: READY_SELECTOR_TIMEOUT_MS,
    })
    // Wait tot lazy-loaded route gemount is: h1 aanwezig én title is niet
    // meer de SPA-shell-title (homepage-fallback uit index.html).
    const SHELL_TITLE = 'Aussiestart, Working holiday Australië, zelf geregeld'
    await page.waitForFunction(
      (shellTitle, currentRoute) => {
        const h1 = document.querySelector('main h1, article h1, section h1, h1')
        const titleOk = currentRoute === '/' || document.title !== shellTitle
        return !!h1 && h1.textContent.trim().length > 0 && titleOk
      },
      { timeout: READY_SELECTOR_TIMEOUT_MS },
      SHELL_TITLE,
      route,
    )
    await page.waitForNetworkIdle({ idleTime: 500, timeout: 5000 }).catch(() => {})
    const html = await page.content()
    const title = await page.title()
    return { html, title, size: Buffer.byteLength(html, 'utf-8') }
  } finally {
    await page.close()
  }
}

function writeRoute(route, html) {
  const relPath = route === '/' ? 'index.html' : `${route.replace(/^\//, '')}/index.html`
  const outPath = join(DIST, relPath)
  mkdirSync(dirname(outPath), { recursive: true })
  writeFileSync(outPath, html, 'utf-8')
  return outPath
}

async function main() {
  const sitemapPath = findSitemap()
  const sitemap = readFileSync(sitemapPath, 'utf-8')
  const routes = extractUrls(sitemap)

  if (routes.length === 0) {
    console.error('Geen URLs gevonden in sitemap.')
    process.exit(1)
  }

  console.log(`\n[prerender] ${routes.length} routes (${routes.length - EXTRA_ROUTES.length} sitemap + ${EXTRA_ROUTES.length} extra)`)
  console.log(`[prerender] Static server op ${SERVER_ORIGIN}`)
  const server = await startStaticServer()
  console.log(`[prerender] Headless Chrome (${isServerless ? 'serverless/sparticuz' : 'local/puppeteer'})...\n`)
  const browser = await getBrowser()

  let success = 0
  let failed = 0
  const failures = []
  const t0 = Date.now()

  for (const route of routes) {
    const rt0 = Date.now()
    try {
      const { html, size, title } = await prerenderRoute(browser, route)
      // Sanity: titel niet de generieke shell
      const isShellTitle = title.includes('Working holiday Australië, zelf geregeld') && route !== '/'
      const warn = isShellTitle ? ' ⚠ shell-title' : ''
      writeRoute(route, html)
      const sizeKb = (size / 1024).toFixed(1)
      const duration = ((Date.now() - rt0) / 1000).toFixed(1)
      console.log(`  ✓ ${route.padEnd(40)} ${sizeKb.padStart(6)} KB  ${duration}s${warn}`)
      success++
    } catch (err) {
      const duration = ((Date.now() - rt0) / 1000).toFixed(1)
      console.log(`  ✗ ${route.padEnd(40)} FAILED in ${duration}s, ${err.message}`)
      failed++
      failures.push({ route, error: err.message })
    }
  }

  await browser.close()
  server.close()

  const totalTime = ((Date.now() - t0) / 1000).toFixed(1)
  const rate = success / routes.length
  console.log(`\n[prerender] ${success}/${routes.length} succesvol (${(rate * 100).toFixed(0)}%) in ${totalTime}s`)

  if (failures.length > 0) {
    console.log(`[prerender] Mislukte routes:`)
    failures.forEach((f) => console.log(`  - ${f.route}: ${f.error}`))
  }

  if (rate < MIN_SUCCESS_RATE) {
    console.error(`\n[prerender] Success-rate ${(rate * 100).toFixed(0)}% onder drempel ${MIN_SUCCESS_RATE * 100}%. Build faalt.`)
    process.exit(1)
  }
  console.log(`[prerender] Klaar.`)
}

main().catch((err) => {
  console.error(`\n[prerender] Fatale fout: ${err.message}`)
  console.error(err.stack)
  process.exit(1)
})
