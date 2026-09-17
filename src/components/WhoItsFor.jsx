import { useState } from 'react'

const TABS = [
  {
    key: 'buyer',
    label: 'Pērku elektroauto',
    title: 'Zināt reālo stāvokli, pirms nauda ir samaksāta',
    points: [
      'Pamatots arguments cenas sarunās — ar skaitļiem, nevis sajūtām',
      'Redzat, vai akumulators vēl ietilpst ražotāja garantijā',
      'Saprotat, cik auto reāli nobrauks ziemā',
    ],
  },
  {
    key: 'seller',
    label: 'Pārdodu elektroauto',
    title: 'Pierādiet auto vērtību ar oficiālu dokumentu',
    points: [
      'Sertifikāts stiprina pircēja uzticību un paātrina darījumu',
      'Novēršat strīdus par baterijas stāvokli pēc pirkuma',
      'Var pamatot augstāku cenu, ja akumulators ir labā stāvoklī',
    ],
  },
  {
    key: 'owner',
    label: 'Man jau ir elektroauto',
    title: 'Sekojiet līdzi akumulatora nolietojumam',
    points: [
      'Uzzināt, vai nolietojums atbilst auto vecumam un nobraukumam',
      'Savlaicīgi pamanīt problēmas, pirms tās kļūst dārgas',
      'Dokuments noderēs, ja nolemsiet auto pārdot vēlāk',
    ],
  },
  {
    key: 'dealer',
    label: 'Autotirgotājiem',
    title: 'Ātrs, uzticams rīks jūsu autoparka novērtēšanai',
    points: [
      'Vienota, salīdzināma sertifikācija visiem elektroauto jūsu piedāvājumā',
      'Iespēja vienoties par regulāru sadarbību un izbraukumiem',
      'Sertifikāts kā papildu uzticības arguments jūsu klientiem',
    ],
  },
]

export default function WhoItsFor() {
  const [active, setActive] = useState(TABS[0].key)
  const tab = TABS.find((t) => t.key === active)

  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
      <div className="max-w-2xl">
        <span className="text-xs font-semibold uppercase tracking-wide text-brand-600">Kam tas noder</span>
        <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">Izvēlieties savu situāciju</h2>
      </div>

      <div className="mt-8 flex flex-wrap gap-2">
        {TABS.map((t) => (
          <button
            key={t.key}
            onClick={() => setActive(t.key)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              active === t.key
                ? 'bg-ink text-paper'
                : 'border border-ink/15 text-ink/70 hover:border-ink/30'
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="mt-8 rounded-2xl border border-ink/10 bg-white p-7 shadow-soft sm:p-9">
        <h3 className="font-display text-xl font-semibold text-ink">{tab.title}</h3>
        <ul className="mt-5 grid gap-3.5 sm:grid-cols-3">
          {tab.points.map((point) => (
            <li key={point} className="flex items-start gap-2.5 text-sm text-ink/65">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
