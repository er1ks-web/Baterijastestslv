const ITEMS = [
  'SOH (veselības stāvokļa) procents',
  'Reālā akumulatora kapacitāte kWh',
  'Aptuvenais uzlādes ciklu skaits',
  'BMS kļūdu un brīdinājumu pārbaude',
  'Prognozētais nobraukums ar pilnu uzlādi',
  'PDF sertifikāts ar unikālu numuru',
]

export default function WhatYouGet() {
  return (
    <section id="ko-sanemat" className="scroll-mt-24 bg-brand-50/60">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-20">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wide text-brand-600">Rezultāts</span>
          <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">Ko jūs saņemat</h2>
          <p className="mt-4 max-w-md text-ink/60">
            Ne tikai vienu skaitli — bet skaidru dokumentu, ko var uzrādīt pircējam, pārdevējam vai izmantot
            sarunās par cenu.
          </p>
          <ul className="mt-7 space-y-3.5">
            {ITEMS.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-ink/75">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-600 text-paper">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border border-ink/10 bg-white p-6 shadow-soft sm:p-8">
          <div className="flex items-center justify-between border-b border-dashed border-ink/15 pb-4">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-wide text-ink/40">Sertifikāta paraugs</p>
              <p className="mt-1 font-display text-lg font-semibold text-ink">BT-2026-000412</p>
            </div>
            <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700">Derīgs</span>
          </div>
          <dl className="mt-5 grid grid-cols-2 gap-y-4 text-sm">
            <div>
              <dt className="text-ink/45">Modelis</dt>
              <dd className="font-medium text-ink">VW ID.4 Pro</dd>
            </div>
            <div>
              <dt className="text-ink/45">SOH</dt>
              <dd className="font-medium text-ink">89.5 %</dd>
            </div>
            <div>
              <dt className="text-ink/45">Kapacitāte</dt>
              <dd className="font-medium text-ink">73.6 / 82 kWh</dd>
            </div>
            <div>
              <dt className="text-ink/45">Uzlādes cikli</dt>
              <dd className="font-medium text-ink">~248</dd>
            </div>
            <div>
              <dt className="text-ink/45">BMS kļūdas</dt>
              <dd className="font-medium text-ink">Nav konstatētas</dd>
            </div>
            <div>
              <dt className="text-ink/45">Datums</dt>
              <dd className="font-medium text-ink">—</dd>
            </div>
          </dl>
          <p className="mt-5 text-[11px] leading-relaxed text-ink/35">
            * Ilustratīvs paraugs, izmantots tikai formāta demonstrēšanai.
          </p>
        </div>
      </div>
    </section>
  )
}
