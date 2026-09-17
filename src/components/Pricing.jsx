import { useState } from 'react'

const PLANS = [
  {
    key: 'standard',
    name: 'Standarta tests',
    price: '85',
    duration: '20–30 min',
    features: [
      'OBD diagnostika uz vietas',
      'SOH atskaite (PDF)',
      'Kapacitāte un uzlādes cikli',
      'BMS kļūdu pārbaude',
    ],
  },
  {
    key: 'premium',
    name: 'Padziļinātais audits',
    price: '125',
    duration: '2–4 h',
    features: [
      'Viss no Standarta testa',
      'Detalizētāka datu analīze',
      'Reālā nobraukuma prognoze',
      'Pilns rakstisks slēdziens',
    ],
  },
]

export default function Pricing() {
  const [active, setActive] = useState('standard')
  const plan = PLANS.find((p) => p.key === active)

  return (
    <section id="cenas" className="scroll-mt-24 bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="font-display text-sm italic text-iris-200">Cenas</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Bez slēptām izmaksām</h2>
          </div>

          <div className="flex rounded-md border border-paper/15 p-1">
            {PLANS.map((p) => (
              <button
                key={p.key}
                onClick={() => setActive(p.key)}
                className={`rounded px-4 py-2 text-sm font-medium transition ${
                  active === p.key ? 'bg-paper text-ink' : 'text-paper/60 hover:text-paper'
                }`}
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-10 border-t border-paper/10 pt-10 md:grid-cols-[0.6fr_1.4fr]">
          <div>
            <div className="flex items-baseline gap-2">
              <span className="text-sm text-paper/50">no</span>
              <span className="font-display text-6xl font-semibold">€{plan.price}</span>
            </div>
            <p className="mt-2 text-sm text-paper/50">Ilgums: {plan.duration}</p>
            <a
              href="#pieteikties"
              className="mt-6 inline-block rounded-md bg-iris-200 px-6 py-3 text-sm font-semibold text-ink transition hover:bg-iris-100"
            >
              Pieteikt šo pakalpojumu
            </a>
          </div>

          <ul className="grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {plan.features.map((f) => (
              <li key={f} className="flex items-start gap-3 border-b border-paper/10 pb-4 text-sm text-paper/75">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-paper/10 text-iris-200">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {f}
              </li>
            ))}
          </ul>
        </div>
        <p className="mt-8 text-xs text-paper/35">* Cenas ir orientējošas — jāapstiprina pirms publicēšanas.</p>
      </div>
    </section>
  )
}
