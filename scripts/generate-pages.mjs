// Runs after `vite build`. Writes one HTML file per route into dist/ (so GitHub Pages answers
// 200 instead of the 404 fallback, and link previews show the right title), plus sitemap.xml.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { COMPANY } from '../src/config/company.js'
import { OG_IMAGE, PAGES, SITE_NAME, SITE_URL, canonicalFor } from '../src/config/seo.js'

const dist = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist')
const template = readFileSync(join(dist, 'index.html'), 'utf8')

const escapeAttr = (value) => value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

const businessData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#business`,
  name: SITE_NAME,
  legalName: COMPANY.rekviziti.name,
  identifier: COMPANY.rekviziti.regNo,
  url: `${SITE_URL}/`,
  image: OG_IMAGE,
  logo: `${SITE_URL}/apple-touch-icon.png`,
  telephone: COMPANY.phoneHref.replace('tel:', ''),
  email: COMPANY.email,
  description: PAGES['/'].description,
  priceRange: '€90',
  address: {
    '@type': 'PostalAddress',
    streetAddress: COMPANY.addressParts.street,
    addressLocality: COMPANY.addressParts.city,
    postalCode: COMPANY.addressParts.postalCode,
    addressCountry: 'LV',
  },
  areaServed: [
    { '@type': 'City', name: 'Rīga' },
    { '@type': 'AdministrativeArea', name: 'Rīgas reģions' },
  ],
  makesOffer: {
    '@type': 'Offer',
    price: '90',
    priceCurrency: 'EUR',
    itemOffered: {
      '@type': 'Service',
      name: 'Elektroauto akumulatora stāvokļa (SOH) tests',
      description: 'Akumulatora diagnostika uz vietas, aptuveni 15 minūtes, ar PDF atskaiti.',
    },
  },
}
const jsonLd = `<script type="application/ld+json">${JSON.stringify(businessData)}</script>`

function render(path, { title, description }) {
  const url = canonicalFor(path)
  const t = escapeAttr(title)
  const d = escapeAttr(description)
  return template
    .replace(/<title>[^<]*<\/title>/, `<title>${t}</title>`)
    .replace(/<meta name="description" content="[^"]*" ?\/?>/, `<meta name="description" content="${d}" />`)
    .replace(/<link rel="canonical" href="[^"]*" ?\/?>/, `<link rel="canonical" href="${url}" />`)
    .replace(/<meta property="og:title" content="[^"]*" ?\/?>/, `<meta property="og:title" content="${t}" />`)
    .replace(/<meta property="og:description" content="[^"]*" ?\/?>/, `<meta property="og:description" content="${d}" />`)
    .replace(/<meta property="og:url" content="[^"]*" ?\/?>/, `<meta property="og:url" content="${url}" />`)
    .replace(/<meta name="twitter:title" content="[^"]*" ?\/?>/, `<meta name="twitter:title" content="${t}" />`)
    .replace(/<meta name="twitter:description" content="[^"]*" ?\/?>/, `<meta name="twitter:description" content="${d}" />`)
    .replace('<!--JSON_LD-->', jsonLd)
}

for (const [path, page] of Object.entries(PAGES)) {
  const html = render(path, page)
  if (path === '/') {
    writeFileSync(join(dist, 'index.html'), html)
  } else {
    const dir = join(dist, path)
    mkdirSync(dir, { recursive: true })
    writeFileSync(join(dir, 'index.html'), html)
  }
}

const today = new Date().toISOString().slice(0, 10)
const urls = Object.entries(PAGES)
  .filter(([, page]) => page.sitemap !== false)
  .map(([path]) => `  <url>\n    <loc>${canonicalFor(path)}</loc>\n    <lastmod>${today}</lastmod>\n  </url>`)
  .join('\n')
writeFileSync(
  join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
)

console.log(`Generated ${Object.keys(PAGES).length} pages and sitemap.xml`)
