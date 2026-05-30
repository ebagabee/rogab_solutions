// Gera HTML estático para cada rota (SSG) e o sitemap.xml, após o build do Vite.
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const toAbs = (p) => path.resolve(__dirname, p)

const escapeHtml = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

const template = fs.readFileSync(toAbs('dist/index.html'), 'utf-8')
const { render, routes, getMeta, SITE_URL } = await import('./dist-server/entry-server.js')

for (const route of routes) {
  const appHtml = render(route)
  const meta = getMeta(route)
  const url = SITE_URL + meta.path

  const head = [
    `<title>${escapeHtml(meta.title)}</title>`,
    `<meta name="description" content="${escapeHtml(meta.description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:title" content="${escapeHtml(meta.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(meta.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta name="twitter:title" content="${escapeHtml(meta.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(meta.description)}" />`,
  ].join('\n    ')

  const html = template
    .replace('<!--app-head-->', head)
    .replace('<!--app-html-->', appHtml)

  const outFile = route === '/' ? 'dist/index.html' : `dist${route}/index.html`
  fs.mkdirSync(path.dirname(toAbs(outFile)), { recursive: true })
  fs.writeFileSync(toAbs(outFile), html)
  console.log('pre-rendered', outFile)
}

// Sitemap a partir das mesmas rotas
const today = new Date().toISOString().slice(0, 10)
const urls = routes
  .map((route) => {
    const loc = SITE_URL + getMeta(route).path
    const priority = route === '/' ? '1.0' : '0.8'
    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${priority}</priority>\n  </url>`
  })
  .join('\n')

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
fs.writeFileSync(toAbs('dist/sitemap.xml'), sitemap)
console.log('generated dist/sitemap.xml')
