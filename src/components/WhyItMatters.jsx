const POINTS = [
  {
    title: 'Nolietojumu nevar redzēt',
    text: 'Ārēji nevainojams elektroauto var slēpt bateriju, kas zaudējusi ievērojamu daļu no sākotnējās ietilpības.',
  },
  {
    title: 'Cenā tas ir tūkstoši eiro',
    text: 'Starpība starp 90% un 78% SOH var nozīmēt vairāku tūkstošu eiro starpību auto vērtībā.',
  },
  {
    title: 'Pārdevēja vārdi nav pierādījums',
    text: '"Baterija kā jauna" ir apgalvojums. Neatkarīgs mērījums ar sertifikātu ir pierādījums.',
  },
]

export default function WhyItMatters() {
  return (
    <section className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wide text-amber-400">Kāpēc tas ir svarīgi</span>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Akumulators ir dārgākā elektroauto daļa
          </h2>
          <p className="mt-4 text-paper/60">
            Nomaiņa var maksāt vairākus tūkstošus eiro. Pirms pērkat vai pārdodat, ir vērts zināt precīzu
            skaitli — nevis paļauties uz sajūtām vai borta datora rādījumu.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {POINTS.map((p) => (
            <div key={p.title} className="rounded-2xl border border-paper/10 bg-paper/[0.04] p-6">
              <h3 className="font-display text-lg font-semibold text-paper">{p.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-paper/55">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
