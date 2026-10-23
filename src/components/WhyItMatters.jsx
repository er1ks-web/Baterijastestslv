export default function WhyItMatters() {
  return (
    <section className="bg-night text-paper">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[0.8fr_1.2fr] md:py-24">
        <div>
          <p className="font-display text-sm italic text-brand-300">Kāpēc tas maksā tik daudz</p>
          <p className="mt-5 font-display text-6xl font-semibold leading-none text-brand-300 sm:text-7xl">
            ~€1000+
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-paper/50">
            Aptuvenā vērtības starpība starp elektroauto ar 90% un ar 78% SOH, atkarībā no modeļa un vecuma.
          </p>
        </div>

        <div className="space-y-7 border-t border-paper/10 pt-10 md:border-t-0 md:border-l md:pl-12 md:pt-0">
          <p className="text-xl leading-relaxed text-paper/85">
            Virsbūvi, riepas un salonu var novērtēt ar aci, bet akumulatoru nevar. Divi ārēji identiski auto var
            atšķirties par trešdaļu reālās kapacitātes.
          </p>
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <h3 className="font-display text-base font-semibold text-paper">Pērkot</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-paper/55">
                "Baterija kā jauna" ir pārdevēja vārdi, nevis mērījums. Skaitlis dod jums pamatu sarunām
                par cenu vai iemeslu paiet garām.
              </p>
            </div>
            <div>
              <h3 className="font-display text-base font-semibold text-paper">Pārdodot</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-paper/55">
                Rakstiska atskaite pierāda jūsu apgalvojumus un ļauj pamatot cenu, nevis paļauties uz
                pircēja uzticēšanos uz vārda.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
