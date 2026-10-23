import { useEffect } from 'react'
import Faq from '../components/Faq.jsx'
import PartnerForm from '../components/PartnerForm.jsx'

const FLEET = [
  { model: 'Nissan Leaf 40', soh: 91, bar: 'bg-brand-500' },
  { model: 'VW ID.4 Pro', soh: 87, bar: 'bg-lime-500' },
  { model: 'Tesla Model 3 LR', soh: 83, bar: 'bg-lime-500' },
  { model: 'Renault Zoe 52', soh: 76, bar: 'bg-amber-500' },
]

const AUDIENCES = [
  {
    title: 'Lietotu elektroauto pārdevēji',
    text: 'Atskaite pie katra sludinājuma: pircējs redz reālo SOH un mazāk šaubās par cenu.',
  },
  {
    title: 'Līzinga kompānijas',
    text: 'Akumulatora stāvoklis izsniegšanas un atgriešanas brīdī — pamats atlikušās vērtības aprēķinam.',
  },
  {
    title: 'Autoparki un noma',
    text: 'Regulāra pārbaude parāda, kuri auto nolietojas ātrāk un kad tos izdevīgāk pārdot.',
  },
  {
    title: 'Apdrošinātāji un vērtētāji',
    text: 'Neatkarīgs mērījums strīdīgos gadījumos — pēc avārijas vai ilgākas stāvēšanas.',
  },
]

const BENEFITS = [
  {
    title: 'Izbraukums pie jums',
    text: 'Atbraucam uz jūsu stāvvietu vai salonu — auto nav jāpārvieto un darbs nepiestāj.',
  },
  {
    title: 'Piedāvājums pēc jūsu apjoma',
    text: 'Cenu veidojam individuāli, ņemot vērā auto skaitu, grafiku un sadarbības regularitāti.',
  },
  {
    title: 'Katram auto sava atskaite',
    text: 'PDF dokuments ar unikālu numuru — viegli pievienot līgumam, nodošanas aktam vai sludinājumam.',
  },
  {
    title: 'Ātrāki darījumi',
    text: 'Pircējs redz pierādījumu, nevis solījumu, un lēmumu pieņem ātrāk.',
  },
]

const STEPS = [
  { title: 'Pieteikums', text: 'Norādiet, cik auto un kur tie atrodas. Darba dienā sazināmies.' },
  { title: 'Piedāvājums', text: 'Sagatavojam cenu jūsu apjomam — ņemot vērā auto skaitu, grafiku un vietu.' },
  { title: 'Pārbaude uz vietas', text: 'Atbraucam pie jums. Katram auto — 20–30 minūtes.' },
  { title: 'Atskaites un rēķins', text: 'Katrs auto saņem savu atskaiti. Rēķinu izrakstām uzņēmumam.' },
]

const FAQS = [
  {
    q: 'Cik maksā pārbaude uzņēmumam?',
    a: 'Cenu veidojam individuāli — tā atkarīga no auto skaita, atrašanās vietas un grafika. Atsūtiet pieteikumu, un sagatavosim piedāvājumu jūsu apjomam.',
  },
  {
    q: 'Cik auto var pārbaudīt vienā vizītē?',
    a: 'Standarta pārbaude aizņem 20–30 minūtes uz auto, tāpēc vienā vizītē var apskatīt vairākus. Konkrēto skaitu saskaņojam iepriekš.',
  },
  {
    q: 'Vai atbraucat pie mums?',
    a: 'Jā, brauksim uz jūsu stāvvietu, salonu vai noliktavu Rīgā un Rīgas reģionā.',
  },
  {
    q: 'Vai atskaiti var pievienot sludinājumam vai līgumam?',
    a: 'Jā. Atskaite ir PDF dokuments ar unikālu numuru — to var pievienot sludinājumam, pirkuma līgumam vai nodošanas aktam.',
  },
  {
    q: 'Vai rēķinu var izrakstīt uzņēmumam?',
    a: 'Jā, rēķinu izrakstām uz jūsu uzņēmuma rekvizītiem.',
  },
]

export default function ForBusiness() {
  useEffect(() => {
    const previous = document.title
    document.title = 'Uzņēmumiem un autotirgotājiem | Baterijastests.lv'
    return () => {
      document.title = previous
    }
  }, [])

  return (
    <>
      <section className="border-b border-ink/10 bg-canvas">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-14 pt-16 md:grid-cols-[1.1fr_0.9fr] md:items-center md:pb-20 md:pt-24">
          <div>
            <p className="font-display text-sm italic text-charge-200">Uzņēmumiem</p>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.08] text-ink sm:text-5xl">
              Akumulatora pārbaude <span className="text-charge-200">visam jūsu autoparkam</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/75">
              Autotirgotājiem, līzinga kompānijām, nomai un vērtētājiem: skaidrs SOH rezultāts katram elektroauto un
              atskaite, ko var pievienot līgumam vai sludinājumam.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#piedavajums"
                className="rounded-md bg-charge-200 px-7 py-3.5 text-sm font-semibold text-night transition hover:bg-charge-100"
              >
                Saņemt piedāvājumu
              </a>
              <a
                href="#sadarbiba"
                className="text-sm font-semibold text-ink/80 underline decoration-brand-300 decoration-2 underline-offset-4 transition hover:text-ink"
              >
                Kā notiek sadarbība
              </a>
            </div>
          </div>

          <div className="rounded-lg border border-ink/10 bg-surface p-6 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-wide text-ink/55">Autoparka pārskata piemērs</p>
            <ul className="mt-5 space-y-4">
              {FLEET.map((car) => (
                <li key={car.model}>
                  <div className="flex items-baseline justify-between text-sm">
                    <span className="font-medium text-ink">{car.model}</span>
                    <span className="font-display font-semibold text-ink">{car.soh}%</span>
                  </div>
                  <div className="mt-1.5 h-2 rounded-full bg-ink/10">
                    <div className={`h-full rounded-full ${car.bar}`} style={{ width: `${car.soh}%` }} />
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-5 border-t border-dashed border-ink/15 pt-4 text-[11px] leading-relaxed text-ink/55">
              * Ilustratīvs piemērs — tā var izskatīties vairāku auto SOH salīdzinājums.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="font-display text-sm italic text-charge-200">Ar ko strādājam</p>
            <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">Kam šis piedāvājums domāts</h2>
          </div>
          <ul className="divide-y divide-ink/10 border-y border-ink/10">
            {AUDIENCES.map((a) => (
              <li key={a.title} className="grid gap-1 py-5 sm:grid-cols-[0.8fr_1.2fr] sm:gap-6">
                <h3 className="font-display text-lg font-semibold text-ink">{a.title}</h3>
                <p className="text-sm leading-relaxed text-ink/75">{a.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-night text-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="font-display text-sm italic text-charge-200">Kāpēc sadarboties</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Vienkāršāk, nekā šķiet</h2>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map((b, i) => (
              <div key={b.title} className="border-t border-paper/15 pt-5">
                <span className="font-display text-xs text-charge-200">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-2 font-display text-lg font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-paper/55">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sadarbiba" className="mx-auto max-w-6xl scroll-mt-28 px-5 py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="font-display text-sm italic text-charge-200">Process</p>
          <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">Kā notiek sadarbība</h2>
        </div>
        <ol className="mt-10 grid gap-8 md:grid-cols-4">
          {STEPS.map((s, i) => (
            <li key={s.title} className="relative border-t-2 border-ink pt-5">
              <span className="font-display text-sm font-semibold text-charge-200">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="mt-2 font-display text-lg font-semibold text-ink">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{s.text}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="piedavajums" className="scroll-mt-28 border-y border-ink/10 bg-brand-500/10">
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-5 py-16 md:grid-cols-[0.9fr_1.1fr] md:py-24">
          <div>
            <p className="font-display text-sm italic text-charge-200">Sadarbības pieteikums</p>
            <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">Pastāstiet par savu autoparku</h2>
            <p className="mt-4 max-w-md text-ink/75">
              Aprakstiet uzdevumu — atsūtīsim piedāvājumu ar cenu, kas atbilst jūsu apjomam un grafikam.
            </p>
            <ul className="mt-7 space-y-3 border-t border-dashed border-ink/15 pt-6 text-sm text-ink/75">
              <li className="flex items-center gap-2.5">
                <span className="font-display text-xs text-charge-200">01</span> Atbilde darba dienas laikā
              </li>
              <li className="flex items-center gap-2.5">
                <span className="font-display text-xs text-charge-200">02</span> Piedāvājums, kas sagatavots tieši jums
              </li>
              <li className="flex items-center gap-2.5">
                <span className="font-display text-xs text-charge-200">03</span> Bez saistībām līdz vienošanās brīdim
              </li>
            </ul>
          </div>
          <PartnerForm />
        </div>
      </section>

      <Faq items={FAQS} id="uznemumu-buj" />
    </>
  )
}
