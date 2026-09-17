export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-50 to-paper">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-14 md:grid-cols-2 md:pb-24 md:pt-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-white px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-700">
            Neatkarīgs SOH tests
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-[1.08] text-ink sm:text-5xl">
            Uzziniet elektroauto akumulatora <span className="text-brand-600">patieso stāvokli</span>, pirms tas jums izmaksā tūkstošiem eiro
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink/65">
            Baterijas nolietojumu nevar redzēt ar aci. 20–30 minūšu diagnostikā uzzināsiet reālo
            SOH procentu un saņemsiet oficiālu sertifikātu, ko var uzrādīt pircējam vai pārdevējam.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#pieteikties"
              className="rounded-full bg-amber-500 px-7 py-3.5 text-sm font-semibold text-ink shadow-soft transition hover:bg-amber-400"
            >
              Pieteikt pārbaudi
            </a>
            <a
              href="#ka-tas-strada"
              className="rounded-full border border-ink/15 px-7 py-3.5 text-sm font-semibold text-ink/80 transition hover:border-ink/30"
            >
              Kā tas strādā
            </a>
          </div>
          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-ink/10 pt-6">
            <div>
              <dt className="sr-only">Ilgums</dt>
              <dd className="font-display text-2xl font-semibold text-ink">20–30′</dd>
              <p className="text-xs text-ink/50">minūtes pārbaudei</p>
            </div>
            <div>
              <dt className="sr-only">Derīgums</dt>
              <dd className="font-display text-2xl font-semibold text-ink">ES</dd>
              <p className="text-xs text-ink/50">sertifikāts derīgs</p>
            </div>
            <div>
              <dt className="sr-only">Izbraukšana</dt>
              <dd className="font-display text-2xl font-semibold text-ink">100%</dd>
              <p className="text-xs text-ink/50">neatkarīgs vērtējums</p>
            </div>
          </dl>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-brand-100/70 blur-2xl" />
          <div className="rounded-2xl border border-ink/10 bg-white p-5 shadow-soft">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wide text-ink/40">Sertifikāta paraugs</span>
              <span className="rounded-full bg-brand-50 px-2.5 py-1 text-[11px] font-semibold text-brand-700">
                Derīgs
              </span>
            </div>

            <div className="mt-5 flex items-center gap-5">
              <div className="relative flex h-28 w-28 shrink-0 items-center justify-center rounded-full border-[6px] border-brand-100">
                <div
                  className="absolute inset-0 rounded-full border-[6px] border-brand-500"
                  style={{ clipPath: 'inset(0 0 6% 0)' }}
                />
                <div className="text-center">
                  <div className="font-display text-2xl font-bold text-ink">91%</div>
                  <div className="text-[10px] font-medium uppercase text-ink/40">SOH</div>
                </div>
              </div>
              <div className="space-y-1.5 text-sm">
                <p className="font-semibold text-ink">Nissan Leaf 40</p>
                <p className="text-ink/50">Gads: 2021</p>
                <p className="text-ink/50">VIN: SJN…04X1</p>
              </div>
            </div>

            <dl className="mt-5 grid grid-cols-2 gap-3 border-t border-ink/10 pt-4 text-sm">
              <div>
                <dt className="text-xs text-ink/45">Reālā kapacitāte</dt>
                <dd className="font-semibold text-ink">36.4 / 40 kWh</dd>
              </div>
              <div>
                <dt className="text-xs text-ink/45">Uzlādes cikli</dt>
                <dd className="font-semibold text-ink">312</dd>
              </div>
            </dl>
            <p className="mt-4 text-[11px] leading-relaxed text-ink/35">
              * Ilustratīvs paraugs. Jūsu sertifikāts tiks izsniegts ar reāliem jūsu auto mērījumiem.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
