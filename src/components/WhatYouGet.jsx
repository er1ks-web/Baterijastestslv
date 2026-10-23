const ITEMS = [
  'SOH (veselības stāvokļa) procents',
  'Reālā akumulatora kapacitāte kWh',
  'Aptuvenais uzlādes ciklu skaits',
  'BMS kļūdu un brīdinājumu pārbaude',
  'Prognozētais nobraukums ar pilnu uzlādi',
  'Unikāls atskaites numurs',
]

export default function WhatYouGet() {
  return (
    <section id="atskaite" className="scroll-mt-28 border-y border-ink/10 bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-16 md:grid-cols-2 md:py-24">
        <div>
          <p className="font-display text-sm italic text-brand-500">Rezultāts</p>
          <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">Ko jūs saņemat</h2>
          <p className="mt-4 max-w-md text-ink/75">
            Ne tikai vienu skaitli — bet skaidru dokumentu, ko var uzrādīt pircējam, pārdevējam vai
            izmantot sarunās par cenu.
          </p>
          <ul className="mt-7 grid gap-x-6 gap-y-3.5 sm:grid-cols-2">
            {ITEMS.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-ink/80">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mx-auto w-full max-w-sm">
          {/* Ticket-style summary stub */}
          <div className="relative rounded-lg bg-ink text-paper shadow-soft">
            <div className="flex items-center justify-between px-6 pb-5 pt-6">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-wider text-paper/40">Atskaites paraugs</p>
                <p className="mt-1 font-display text-lg font-semibold">Nissan Leaf 40</p>
              </div>
              <span className="font-display text-3xl font-semibold text-charge-200">91%</span>
            </div>

            <div className="relative h-0 border-t-2 border-dashed border-paper/20">
              <span className="absolute -left-3 -top-3 h-6 w-6 rounded-full bg-white" />
              <span className="absolute -right-3 -top-3 h-6 w-6 rounded-full bg-white" />
            </div>

            <dl className="grid grid-cols-2 gap-y-4 px-6 py-6 text-sm">
              <div>
                <dt className="text-[11px] text-paper/40">Kapacitāte</dt>
                <dd className="mt-0.5 font-medium">36.4 / 40 kWh</dd>
              </div>
              <div>
                <dt className="text-[11px] text-paper/40">Uzlādes cikli</dt>
                <dd className="mt-0.5 font-medium">~312</dd>
              </div>
              <div>
                <dt className="text-[11px] text-paper/40">BMS kļūdas</dt>
                <dd className="mt-0.5 font-medium">Nav konstatētas</dd>
              </div>
              <div>
                <dt className="text-[11px] text-paper/40">Nr.</dt>
                <dd className="mt-0.5 font-medium">BT-2026-0412</dd>
              </div>
            </dl>
          </div>
          <p className="mt-3 text-center text-[11px] leading-relaxed text-ink/50">
            * Ilustratīvs paraugs formāta demonstrēšanai, ne reāls mērījums.
          </p>
        </div>
      </div>
    </section>
  )
}
