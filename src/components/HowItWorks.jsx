const STEPS = [
  {
    n: '1',
    title: 'Pieteikšanās',
    text: 'Aizpildiet pieteikuma formu vai zvaniet — vienosimies par ērtu laiku un vietu Rīgā vai Latvijā.',
  },
  {
    n: '2',
    title: 'Diagnostika uz vietas',
    text: 'Pieslēdzamies auto ar OBD diagnostikas iekārtu un nolasām akumulatora datus tiešā veidā no BMS.',
  },
  {
    n: '3',
    title: 'Datu analīze',
    text: 'Mērījumus salīdzinām ar attiecīgā modeļa un gada references vērtībām, lai iegūtu precīzu SOH procentu.',
  },
  {
    n: '4',
    title: 'Sertifikāts',
    text: 'Saņemat PDF sertifikātu ar rezultātu, mērījumu kopsavilkumu un unikālu numuru pārbaudei.',
  },
]

export default function HowItWorks() {
  return (
    <section id="ka-tas-strada" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 md:py-20">
      <div className="max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-wide text-brand-600">Process</span>
        <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">Kā notiek pārbaude</h2>
        <p className="mt-4 text-ink/60">Viss process no pieteikšanās līdz sertifikātam aizņem apmēram 30 minūtes.</p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step) => (
          <div key={step.n} className="relative rounded-2xl border border-ink/10 bg-white p-6 shadow-soft">
            <span className="font-display text-3xl font-bold text-brand-200">{step.n}</span>
            <h3 className="mt-3 font-display text-lg font-semibold text-ink">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/55">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
