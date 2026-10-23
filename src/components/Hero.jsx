const MODEL_KM = 560

const CARS = [
  { label: 'Auto A', soh: 94, verdict: 'Lieliski', bar: 'bg-emerald-500', chip: 'bg-emerald-100 text-emerald-800' },
  { label: 'Auto B', soh: 78, verdict: 'Vidēji', bar: 'bg-amber-500', chip: 'bg-amber-100 text-amber-800' },
].map((car) => ({ ...car, km: Math.round((MODEL_KM * car.soh) / 100) }))

const KM_GAP = CARS[0].km - CARS[1].km

function Car() {
  return (
    <svg viewBox="0 0 220 90" className="mx-auto h-16 w-full max-w-[170px]" aria-hidden="true">
      <path
        d="M12 62 C12 54 16 50 26 48 L56 42 C66 28 84 20 108 20 L138 20 C158 20 172 30 182 42 L200 46 C208 48 210 54 210 62 L210 66 L12 66 Z"
        className="fill-ink/10 stroke-ink/45"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <path d="M66 42 C74 32 88 27 108 27 L120 27 L120 42 Z" className="fill-white stroke-ink/30" strokeWidth="2" strokeLinejoin="round" />
      <path d="M128 27 L138 27 C150 27 160 34 168 42 L128 42 Z" className="fill-white stroke-ink/30" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="62" cy="68" r="14" className="fill-ink" />
      <circle cx="62" cy="68" r="6" className="fill-white" />
      <circle cx="162" cy="68" r="14" className="fill-ink" />
      <circle cx="162" cy="68" r="6" className="fill-white" />
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="border-b border-ink/10 bg-canvas">
      <div className="mx-auto max-w-6xl px-5 pb-14 pt-16 md:pb-20 md:pt-24">
        <div className="grid gap-14 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <div>
            <p className="font-display text-sm italic text-brand-600">Neatkarīgs akumulatora tests</p>
            <h1 className="mt-4 text-[2.6rem] font-semibold leading-[1.05] text-ink sm:text-6xl">
              Baterija nolietojas klusi. <span className="text-brand-600">Skaitlis to pasaka skaļi.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-ink/75">
              20–30 minūšu diagnostikā uzzināsiet elektroauto akumulatora reālo stāvokli (SOH) un
              saņemsiet rakstisku atskaiti, ko var uzrādīt otrai darījuma pusei.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#pieteikties"
                className="rounded-md bg-brand-600 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-700"
              >
                Pieteikt pārbaudi
              </a>
              <a
                href="#process"
                className="text-sm font-semibold text-ink/80 underline decoration-brand-300 decoration-2 underline-offset-4 transition hover:text-ink"
              >
                Kā notiek pārbaude
              </a>
            </div>
          </div>

          <div className="rounded-lg border border-ink/10 bg-surface p-5 shadow-soft sm:p-6">
            <p className="font-display text-lg font-semibold text-ink">Divi vienādi auto. Divi dažādi akumulatori.</p>
            <p className="mt-1 text-xs text-ink/60">Piemērs: Tesla Model 3 LR, abi 2020. gada</p>

            <div className="mt-5 grid grid-cols-2 gap-3 sm:gap-4">
              {CARS.map((car) => (
                <div key={car.label} className="rounded-md border border-ink/10 bg-canvas p-3 sm:p-4">
                  <Car />
                  <div className="mt-3 flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-wide text-ink/60">{car.label}</span>
                    <span className={`rounded px-1.5 py-0.5 text-[11px] font-semibold ${car.chip}`}>{car.verdict}</span>
                  </div>
                  <div className="mt-2 h-2.5 rounded-full bg-ink/10">
                    <div className={`h-full rounded-full ${car.bar}`} style={{ width: `${car.soh}%` }} />
                  </div>
                  <p className="mt-3 font-display text-3xl font-semibold leading-none text-ink">
                    {car.soh}
                    <span className="text-xl">%</span>
                  </p>
                  <p className="mt-1 text-xs text-ink/65">≈ {car.km} km ar pilnu uzlādi</p>
                </div>
              ))}
            </div>

            <p className="mt-4 rounded-md bg-brand-500/10 px-3 py-2.5 text-center text-sm font-medium text-ink/80">
              Atšķirība: {KM_GAP} km nobraukumā — ārēji to neredz
            </p>
            <p className="mt-3 text-[11px] leading-relaxed text-ink/50">
              * Ilustratīvs piemērs. Patieso akumulatora stāvokli parāda tikai mērījums.
            </p>
          </div>
        </div>

        <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-ink/10 pt-8 sm:max-w-xl">
          <div>
            <dt className="font-display text-2xl font-semibold text-ink">30′</dt>
            <dd className="text-xs text-ink/65">vidējais pārbaudes laiks</dd>
          </div>
          <div>
            <dt className="font-display text-2xl font-semibold text-ink">OBD</dt>
            <dd className="text-xs text-ink/65">tiešs pieslēgums auto</dd>
          </div>
          <div>
            <dt className="font-display text-2xl font-semibold text-ink">PDF</dt>
            <dd className="text-xs text-ink/65">atskaite jums e-pastā</dd>
          </div>
        </dl>
      </div>
    </section>
  )
}
