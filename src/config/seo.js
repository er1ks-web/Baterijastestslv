import { COMPANY } from './company.js'

export const SITE_URL = 'https://baterijastests.lv'
export const SITE_NAME = 'Baterijastests.lv'
export const OG_IMAGE = `${SITE_URL}/og-image.png`

// Title and description per route. Used by the <Seo /> component while browsing and by
// scripts/generate-pages.mjs, which bakes the same values into one HTML file per route.
// `sitemap: false` keeps a page out of sitemap.xml.
export const PAGES = {
  '/': {
    title: 'Baterijastests.lv | Elektroauto akumulatora tests Rīgā',
    description:
      'Neatkarīgs elektroauto akumulatora stāvokļa (SOH) tests uz vietas Rīgā un Rīgas reģionā. 15 minūtes, PDF atskaite, cena €90. Pieteikties var tiešsaistē.',
  },
  '/kas-ir-soh': {
    title: 'Kas ir SOH un kā to novērtēt | Baterijastests.lv',
    description:
      'Uzziniet, kas ir elektroauto akumulatora veselība (SOH), un ar kalkulatoru novērtējiet, cik daudz kapacitātes auto varētu būt zaudējis.',
  },
  '/uznemumiem': {
    title: 'Akumulatora pārbaude uzņēmumiem un autotirgotājiem | Baterijastests.lv',
    description:
      'Elektroauto akumulatora pārbaudes autotirgotājiem, autoparkiem un uzņēmumiem Rīgā un Rīgas reģionā. Pieprasiet piedāvājumu savam apjomam.',
  },
  '/kontakti': {
    title: 'Kontakti un rekvizīti | Baterijastests.lv',
    description: `Sazinieties ar Baterijastests.lv: tālrunis ${COMPANY.phone}, e-pasts ${COMPANY.email}. ${COMPANY.rekviziti.name}, reģ. Nr. ${COMPANY.rekviziti.regNo}.`,
  },
  '/privatuma-politika': {
    title: 'Privātuma politika | Baterijastests.lv',
    description: 'Kā Baterijastests.lv vāc, izmanto un aizsargā jūsu personas datus.',
    sitemap: false,
  },
  '/sikdatnu-politika': {
    title: 'Sīkdatņu politika | Baterijastests.lv',
    description: 'Informācija par sīkdatnēm un trešo pušu saturu vietnē Baterijastests.lv.',
    sitemap: false,
  },
}

export function pageFor(pathname) {
  const clean = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname
  return { path: clean, ...(PAGES[clean] || PAGES['/']) }
}

// GitHub Pages serves each route as a folder and redirects to the trailing-slash URL,
// so the canonical URLs use the trailing slash too.
export function canonicalFor(path) {
  return path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}/`
}
