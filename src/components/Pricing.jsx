import { Link } from 'react-router-dom'

const FEATURES = [
  'OBD diagnostika uz vietas',
  'SOH atskaite (PDF)',
  'Kapacitāte un uzlādes cikli',
  'BMS kļūdu pārbaude',
  'Izbraukums uz jūsu norādīto vietu Rīgas reģionā',
]

export default function Pricing() {
  return (
    <section id="cenas" className="scroll-mt-20 bg-night text-paper">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="font-display text-sm italic text-charge-200">Cena</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Viena pārbaude, skaidra cena</h2>
          <p className="mt-4 text-paper/55">Bez slēptām izmaksām un bez papildu pakešu izvēles.</p>
        </div>

        <div className="mt-10 grid gap-10 border-t border-paper/10 pt-10 md:grid-cols-[0.6fr_1.4fr]">
          <div>
            <p className="text-sm text-paper/50">EV akumulatora SOH tests</p>
            <p className="mt-2 font-display text-6xl font-semibold">€90</p>
            <p className="mt-2 text-sm text-paper/50">Ilgums: 20–30 min</p>
            <Link
              to="/#pieteikties"
              className="mt-6 inline-block rounded-md bg-charge-200 px-6 py-3 text-sm font-semibold text-night transition hover:bg-charge-100"
            >
              Pieteikt pārbaudi
            </Link>
          </div>

          <ul className="grid content-start gap-x-8 gap-y-4 sm:grid-cols-2">
            {FEATURES.map((f) => (
              <li key={f} className="flex items-start gap-3 border-b border-paper/10 pb-4 text-sm text-paper/75">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-paper/10 text-charge-200">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
