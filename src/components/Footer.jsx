import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'
import { COMPANY } from '../config/company.js'

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-night text-ink/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Link to="/" className="inline-block" aria-label="Baterijastests.lv — sākums">
            <Logo className="h-28" />
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink/75">
            Neatkarīga elektroauto augstsprieguma akumulatora diagnostika. Skaidra atskaite par reālo
            stāvokli — pirms pērkat vai pārdodat.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-ink/65">Lapa</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/kas-ir-soh" className="hover:text-charge-200">Kas ir SOH</Link></li>
            <li><Link to="/uznemumiem" className="hover:text-charge-200">Uzņēmumiem</Link></li>
            <li><a href="/#process" className="hover:text-charge-200">Process</a></li>
            <li><a href="/#cenas" className="hover:text-charge-200">Cenas</a></li>
            <li><a href="/#buj" className="hover:text-charge-200">Jautājumi</a></li>
            <li><a href="/#pieteikties" className="hover:text-charge-200">Pieteikties</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-ink/65">Kontakti</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a href={COMPANY.phoneHref} className="hover:text-charge-200">{COMPANY.phone}</a>
              {COMPANY.phoneIsPlaceholder && <span className="ml-2 text-xs text-ink/55">(jāatjaunina)</span>}
            </li>
            <li>
              <a href={`mailto:${COMPANY.email}`} className="hover:text-charge-200">{COMPANY.email}</a>
            </li>
            <li className="text-ink/75">{COMPANY.serviceArea}</li>
            <li>
              <Link to="/kontakti" className="font-medium text-charge-200 hover:text-charge-100">Kontakti un rekvizīti →</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-6 text-xs text-ink/70 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Baterijastests.lv. Visas tiesības aizsargātas.</p>
          <div className="flex gap-5">
            <Link to="/privatuma-politika" className="hover:text-ink">Privātuma politika</Link>
            <Link to="/lietosanas-noteikumi" className="hover:text-ink">Lietošanas noteikumi</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
