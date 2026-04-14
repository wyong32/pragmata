import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import guides from '../src/data/guides.js'
import { seoConfig } from '../src/seo/config.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const fullDomain = seoConfig.fullDomain

const staticRoutes = [
  { path: '/', name: 'home' },
  { path: '/getting-started', name: 'getting-started' },
  { path: '/wiki', name: 'wiki' },
  { path: '/wiki/world', name: 'wiki-world' },
  { path: '/wiki/factions', name: 'wiki-factions' },
  { path: '/wiki/creatures', name: 'wiki-creatures' },
  { path: '/wiki/babel-industries', name: 'wiki-babel-industries' },
  { path: '/wiki/delphi-corporation', name: 'wiki-delphi-corporation' },
  { path: '/wiki/enemies', name: 'wiki-enemies' },
  { path: '/guides', name: 'guides' },
  { path: '/gameplay', name: 'gameplay' },
  { path: '/characters/diana', name: 'character-diana' },
  { path: '/characters/hugh', name: 'character-hugh' },
  { path: '/media', name: 'media' },
  { path: '/faq', name: 'faq' },
  { path: '/about', name: 'legal-about' },
  { path: '/contact', name: 'legal-contact' },
  { path: '/privacy-policy', name: 'legal-privacy' },
  { path: '/terms-of-service', name: 'legal-terms' },
  { path: '/copyright', name: 'legal-copyright' },
]

function getPriority(name) {
  return (seoConfig.priorities && seoConfig.priorities[name]) ?? 0.7
}

function getChangefreq(name) {
  return (seoConfig.changefreq && seoConfig.changefreq[name]) ?? 'monthly'
}

function urlNode(loc, lastmod, changefreq, priority) {
  const p = (priority ?? 0.7).toFixed(1)
  return `  <url>
    <loc>${fullDomain}${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${p}</priority>
  </url>`
}

function generate() {
  const lastmod = new Date().toISOString().split('T')[0]

  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
`

  for (const r of staticRoutes) {
    xml += `\n${urlNode(r.path, lastmod, getChangefreq(r.name), getPriority(r.name))}`
  }

  const list = Array.isArray(guides) ? guides : []
  for (const g of list) {
    if (!g?.addressBar) continue
    const slug = String(g.addressBar).replace(/^\/+|\/+$/g, '')
    const guidePath = `/guides/${slug}`
    const date = g.publishDate ? String(g.publishDate).split('T')[0] : lastmod
    xml += `\n${urlNode(guidePath, date, getChangefreq('guide-detail'), getPriority('guide-detail'))}`
  }

  xml += '\n</urlset>'

  const publicPath = path.join(__dirname, '../public/sitemap.xml')
  const publicDir = path.dirname(publicPath)
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true })
  }
  fs.writeFileSync(publicPath, xml, 'utf8')
  console.log('Sitemap written to public/sitemap.xml')

  const count = (xml.match(/<url>/g) || []).length
  console.log(`Total URLs: ${count}`)
}

generate()
