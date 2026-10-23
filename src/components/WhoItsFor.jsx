const GROUPS = [
  {
    label: 'Pērku elektroauto',
    text: 'Uzziniet reālo stāvokli, pirms nauda ir samaksāta — un izmantojiet skaitli kā argumentu sarunās par cenu.',
  },
  {
    label: 'Pārdodu elektroauto',
    text: 'Rakstiska atskaite stiprina pircēja uzticību un ļauj pamatot cenu ar faktiem, nevis vārdiem.',
  },
  {
    label: 'Man jau ir elektroauto',
    text: 'Sekojiet līdzi nolietojumam un savlaicīgi pamaniet problēmas, pirms tās kļūst dārgas.',
  },
  {
    label: 'Autotirgotājiem',
    text: 'Vienota, salīdzināma pārbaude visam autoparkam — papildu uzticības arguments klientiem.',
  },
]

export default function WhoItsFor() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <div className="max-w-xl">
        <p className="font-display text-sm italic text-charge-200">Kam tas noder</p>
        <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">Atkarībā no jūsu situācijas</h2>
      </div>

      <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-ink/10 bg-ink/10 sm:grid-cols-2">
        {GROUPS.map((g, i) => (
          <div key={g.label} className="bg-canvas p-7">
            <span className="font-display text-xs text-brand-400">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="mt-2 font-display text-lg font-semibold text-ink">{g.label}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">{g.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
