import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-paper/10 bg-ink text-paper/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <Link to="/" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-end gap-[3px] rounded-md bg-paper/10 px-1.5 text-iris-200">
              <span className="h-3 w-1.5 rounded-[1px] bg-current" />
              <span className="h-5 w-1.5 rounded-[1px] bg-current" />
              <span className="h-[26px] w-1.5 rounded-[1px] bg-current" />
            </span>
            <span className="font-display text-lg font-semibold text-paper">
              Baterijas<span className="italic text-brand-300">tests</span>
            </span>
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-paper/50">
            Neatkarīga elektroauto augstsprieguma akumulatora diagnostika. Skaidra atskaite par reālo
            stāvokli — pirms pērkat vai pārdodat.
          </p>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-paper/40">Lapa</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><a href="/#process" className="hover:text-paper">Process</a></li>
            <li><a href="/#cenas" className="hover:text-paper">Cenas</a></li>
            <li><a href="/#buj" className="hover:text-paper">Jautājumi</a></li>
            <li><a href="/#pieteikties" className="hover:text-paper">Pieteikties</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-paper/40">Kontakti</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li>
              <a href="tel:+37100000000" className="hover:text-paper">+371 00 000 000</a>
              <span className="ml-2 text-xs text-paper/35">(jāatjaunina)</span>
            </li>
            <li>
              <a href="mailto:info@baterijastests.lv" className="hover:text-paper">info@baterijastests.lv</a>
            </li>
            <li className="text-paper/50">Rīga un visa Latvija</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-5 py-6 text-xs text-paper/40 md:flex-row md:items-center md:justify-between">
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
