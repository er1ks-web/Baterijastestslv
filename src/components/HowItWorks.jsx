const STEPS = [
  {
    n: '01',
    title: 'Pieteikšanās',
    text: 'Aizpildiet formu vai zvaniet — vienosimies par ērtu laiku un vietu Rīgā vai Latvijā.',
  },
  {
    n: '02',
    title: 'Diagnostika uz vietas',
    text: 'Pieslēdzamies auto ar OBD iekārtu un nolasām akumulatora datus tiešā veidā no BMS.',
  },
  {
    n: '03',
    title: 'Datu analīze',
    text: 'Mērījumus salīdzinām ar attiecīgā modeļa un gada references vērtībām precīza SOH aprēķina iegūšanai.',
  },
  {
    n: '04',
    title: 'Atskaite jūsu e-pastā',
    text: 'Saņemat PDF dokumentu ar rezultātu, mērījumu kopsavilkumu un unikālu numuru.',
  },
]

export default function HowItWorks() {
  return (
    <section id="process" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-16 md:py-24">
      <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr]">
        <div>
          <p className="font-display text-sm italic text-brand-500">Process</p>
          <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">No pieteikuma līdz atskaitei</h2>
          <p className="mt-4 text-sm leading-relaxed text-ink/55">
            Viss process aizņem apmēram 30 minūtes un notiek jūsu norādītajā vietā.
          </p>
        </div>

        <ol className="relative border-l-2 border-dashed border-brand-200 pl-8 sm:pl-10">
          {STEPS.map((step, i) => (
            <li key={step.n} className={`relative ${i !== STEPS.length - 1 ? 'pb-10' : ''}`}>
              <span className="absolute -left-[41px] flex h-8 w-8 items-center justify-center rounded-full bg-ink font-display text-xs font-semibold text-volt-300 sm:-left-[49px]">
                {step.n}
              </span>
              <h3 className="font-display text-lg font-semibold text-ink">{step.title}</h3>
              <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-ink/55">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
