const BARS = [
  { year: '1.g', pct: 98 },
  { year: '2.g', pct: 96 },
  { year: '3.g', pct: 93 },
  { year: '4.g', pct: 90 },
  { year: '5.g', pct: 86 },
  { year: '6.g', pct: 81 },
  { year: '7.g', pct: '?' },
]

export default function Hero() {
  return (
    <section className="border-b border-ink/10 bg-paper">
      <div className="mx-auto max-w-6xl px-5 pb-14 pt-16 md:pb-20 md:pt-24">
        <div className="grid gap-14 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div>
            <p className="font-display text-sm italic text-brand-500">Neatkarīgs akumulatora tests</p>
            <h1 className="mt-4 text-[2.6rem] font-semibold leading-[1.05] text-ink sm:text-6xl">
              Baterija nolietojas klusi. <span className="text-brand-500">Skaitlis to pasaka skaļi.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink/60">
              20–30 minūšu diagnostikā uzzināsiet elektroauto akumulatora reālo stāvokli (SOH) un
              saņemsiet rakstisku atskaiti, ko var uzrādīt otrai darījuma pusei.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#pieteikties"
                className="rounded-md bg-ink px-7 py-3.5 text-sm font-semibold text-volt-300 transition hover:bg-brand-800"
              >
                Pieteikt pārbaudi
              </a>
              <a
                href="#process"
                className="text-sm font-semibold text-ink/70 underline decoration-brand-300 decoration-2 underline-offset-4 transition hover:text-ink"
              >
                Kā notiek pārbaude
              </a>
            </div>
          </div>

          <div>
            <div className="rounded-lg border border-ink/10 bg-white p-6 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-wide text-ink/40">
                Tipiska kapacitātes līkne
              </p>
              <div className="mt-5 flex h-40 items-stretch gap-2.5">
                {BARS.map((b) => (
                  <div key={b.year} className="flex h-full flex-1 flex-col items-center justify-end gap-2">
                    <div
                      className={`w-full rounded-sm ${
                        b.pct === '?' ? 'border-2 border-dashed border-brand-300 bg-transparent' : 'bg-brand-400'
                      }`}
                      style={{ height: b.pct === '?' ? '60%' : `${b.pct}%` }}
                    />
                    <span className="text-[11px] text-ink/40">{b.year}</span>
                  </div>
                ))}
              </div>
              <p className="mt-5 border-t border-dashed border-ink/15 pt-4 text-sm leading-relaxed text-ink/55">
                Katrs auto nolietojas savādāk atkarībā no lādēšanas paradumiem un nobraukuma. Vienīgais veids,
                kā uzzināt jūsu auto konkrēto skaitli — izmērīt to.
              </p>
            </div>
          </div>
        </div>

        <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-ink/10 pt-8 sm:max-w-xl">
          <div>
            <dt className="font-display text-2xl font-semibold text-ink">30′</dt>
            <dd className="text-xs text-ink/50">vidējais pārbaudes laiks</dd>
          </div>
          <div>
            <dt className="font-display text-2xl font-semibold text-ink">OBD</dt>
            <dd className="text-xs text-ink/50">tiešs pieslēgums auto</dd>
          </div>
          <div>
            <dt className="font-display text-2xl font-semibold text-ink">PDF</dt>
            <dd className="text-xs text-ink/50">atskaite jums e-pastā</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
