const PLANS = [
  {
    name: 'SOH Standarta tests',
    price: '85',
    duration: '20–30 min',
    featured: false,
    features: [
      'OBD diagnostika uz vietas',
      'SOH sertifikāts (PDF)',
      'Kapacitāte un uzlādes cikli',
      'BMS kļūdu pārbaude',
    ],
  },
  {
    name: 'SOH Padziļinātais audits',
    price: '125',
    duration: '2–4 h',
    featured: true,
    features: [
      'Viss no Standarta testa',
      'Detalizētāka datu analīze',
      'Reālā nobraukuma prognoze',
      'Pilns rakstisks slēdziens',
    ],
  },
]

export default function Pricing() {
  return (
    <section id="cenas" className="scroll-mt-24 bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wide text-amber-400">Cenas</span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Caurspīdīgas cenas, bez slēptām izmaksām</h2>
          <p className="mt-4 text-paper/60">
            Precīzu cenu par jūsu pilsētu un auto modeli apstiprināsim pieteikuma formā vai pa tālruni.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl border p-7 sm:p-8 ${
                plan.featured
                  ? 'border-amber-400/40 bg-paper/[0.06]'
                  : 'border-paper/10 bg-paper/[0.03]'
              }`}
            >
              {plan.featured && (
                <span className="rounded-full bg-amber-500 px-3 py-1 text-[11px] font-semibold text-ink">
                  Populārākais
                </span>
              )}
              <h3 className="mt-4 font-display text-xl font-semibold">{plan.name}</h3>
              <div className="mt-3 flex items-baseline gap-1.5">
                <span className="text-sm text-paper/50">no</span>
                <span className="font-display text-4xl font-bold">€{plan.price}</span>
              </div>
              <p className="mt-1 text-sm text-paper/50">Ilgums: {plan.duration}</p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-paper/70">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#pieteikties"
                className={`mt-7 block rounded-full px-5 py-3 text-center text-sm font-semibold transition ${
                  plan.featured
                    ? 'bg-amber-500 text-ink hover:bg-amber-400'
                    : 'border border-paper/20 text-paper hover:border-paper/40'
                }`}
              >
                Pieteikt
              </a>
            </div>
          ))}
        </div>
        <p className="mt-6 text-xs text-paper/35">* Cenas ir orientējošas — jāapstiprina reklāmdevējam pirms publicēšanas.</p>
      </div>
    </section>
  )
}
