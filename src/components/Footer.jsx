import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-paper/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-600 text-paper">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <rect x="2" y="7" width="18" height="12" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
                <rect x="21" y="10.5" width="2" height="5" rx="1" fill="currentColor" />
                <path d="M12.5 9.5 L8 14.5 H11 L9.5 17.5 L14.5 12.5 H11.5 Z" fill="#ffab29" />
              </svg>
            </span>
            <span className="font-display text-lg font-semibold text-paper">
              Baterijas<span className="text-brand-300">tests</span>.lv
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/60">
            Neatkarīgs elektroauto augstsprieguma akumulatora stāvokļa (SOH) tests un sertifikāts.
            Palīdzam pieņemt pamatotu lēmumu, pērkot vai pārdodot elektroauto.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-paper/50">Lapa</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><a href="/#ka-tas-strada" className="hover:text-paper">Kā tas strādā</a></li>
            <li><a href="/#cenas" className="hover:text-paper">Cenas</a></li>
            <li><a href="/#buj" className="hover:text-paper">Biežāk uzdotie jautājumi</a></li>
            <li><a href="/#pieteikties" className="hover:text-paper">Pieteikties pārbaudei</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-paper/50">Kontakti</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a href="tel:+37100000000" className="hover:text-paper">+371 00 000 000</a>
              <span className="ml-2 text-xs text-paper/40">(jāatjaunina)</span>
            </li>
            <li>
              <a href="mailto:info@baterijastests.lv" className="hover:text-paper">info@baterijastests.lv</a>
            </li>
            <li className="text-paper/60">Rīga un visa Latvija</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-6 text-xs text-paper/45 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Baterijastests.lv. Visas tiesības aizsargātas.</p>
          <div className="flex gap-5">
            <Link to="/privatuma-politika" className="hover:text-paper/70">Privātuma politika</Link>
            <Link to="/lietosanas-noteikumi" className="hover:text-paper/70">Lietošanas noteikumi</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
