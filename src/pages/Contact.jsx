import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { COMPANY } from '../config/company.js'

const REKVIZITI_ROWS = [
  ['Uzņēmums', 'name'],
  ['Reģ. Nr.', 'regNo'],
  ['PVN reģ. Nr.', 'vatNo'],
  ['Jurid. adrese', 'address'],
  ['Banka', 'bank'],
  ['Konts', 'account'],
]

function Row({ label, children }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">{label}</p>
      <div className="mt-1 text-lg text-ink">{children}</div>
    </div>
  )
}

export default function Contact() {
  useEffect(() => {
    const previous = document.title
    document.title = 'Kontakti un rekvizīti | Baterijastests.lv'
    return () => {
      document.title = previous
    }
  }, [])

  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <p className="font-display text-sm italic text-brand-600">Kontakti</p>
      <h1 className="mt-3 text-4xl font-semibold text-ink sm:text-5xl">Sazinieties ar mums</h1>
      <p className="mt-4 max-w-xl text-lg text-ink/75">
        Zvaniet, rakstiet vai uzreiz piesakiet pārbaudi — mēs atbrauksim pie jums Rīgas reģionā.
      </p>

      <div className="mt-12 grid gap-12 md:grid-cols-2">
        <div className="space-y-7">
          <Row label="Tālrunis">
            <a href={COMPANY.phoneHref} className="hover:text-brand-600">
              {COMPANY.phone}
            </a>
          </Row>
          <Row label="E-pasts">
            <a href={`mailto:${COMPANY.email}`} className="hover:text-brand-600">
              {COMPANY.email}
            </a>
          </Row>
          <Row label="Kur strādājam">{COMPANY.serviceArea}</Row>
          {COMPANY.hours && <Row label="Darba laiks">{COMPANY.hours}</Row>}

          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={COMPANY.phoneHref}
              className="rounded-md bg-brand-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-700"
            >
              Zvanīt
            </a>
            <a
              href={`mailto:${COMPANY.email}`}
              className="rounded-md border border-ink/20 px-6 py-3 text-sm font-semibold text-ink transition hover:border-ink/50"
            >
              Rakstīt e-pastu
            </a>
            <Link
              to="/#pieteikties"
              className="rounded-md border border-ink/20 px-6 py-3 text-sm font-semibold text-ink transition hover:border-ink/50"
            >
              Pieteikt pārbaudi
            </Link>
          </div>
        </div>

        <div className="self-start rounded-lg border border-ink/10 bg-surface p-6 shadow-soft sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">Rekvizīti</p>
          <dl className="mt-5 divide-y divide-ink/10 text-sm">
            {REKVIZITI_ROWS.map(([label, key]) => {
              const value = COMPANY.rekviziti[key]
              return (
                <div key={key} className="grid gap-1 py-3 sm:grid-cols-[9rem_1fr] sm:gap-4">
                  <dt className="text-ink/65">{label}</dt>
                  <dd className={value ? 'break-words text-ink' : 'text-amber-600'}>{value || '[jāaizpilda]'}</dd>
                </div>
              )
            })}
          </dl>
        </div>
      </div>
    </section>
  )
}
