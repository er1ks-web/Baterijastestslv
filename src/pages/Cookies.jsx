import { Link } from 'react-router-dom'

export default function Cookies() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16">
      <span className="text-xs font-semibold uppercase tracking-wide text-brand-600">Juridiskā informācija</span>
      <h1 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">Sīkdatņu politika</h1>
      <p className="mt-3 text-sm text-ink/60">Pēdējoreiz atjaunots: 30.10.2026</p>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-ink/80">
        <p>
          Šī vietne ir veidota tā, lai darbotos bez analītikas un reklāmas sīkdatnēm. Mēs nemērām apmeklējumu
          un neveidojam profilus par apmeklētājiem.
        </p>

        <div>
          <h2 className="font-display text-lg font-semibold text-ink">Kas ir sīkdatnes?</h2>
          <p className="mt-2">
            Sīkdatnes ir mazi teksta faili, kas tiek saglabāti jūsu ierīcē, apmeklējot vietni. Tās palīdz
            vietnei atcerēties jūsu darbības un iestatījumus.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-ink">Kādas sīkdatnes mēs izmantojam</h2>
          <p className="mt-2">
            Vietne un pieteikuma forma darbojas bez sīkdatnēm, tāpēc mēs nesaglabājam jūsu ierīcē ne
            nepieciešamās, ne analītikas, ne reklāmas sīkdatnes.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-ink">Trešo pušu saturs</h2>
          <p className="mt-2">
            Vietnes burtveidoli tiek ielādēti no Google Fonts. Tas nozīmē, ka, atverot lapu, jūsu pārlūks
            nosūta pieprasījumu Google serveriem, un tie var saņemt jūsu IP adresi. Sīkdatnes šim nolūkam netiek
            izmantotas.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-ink">Sīkdatņu pārvaldība</h2>
          <p className="mt-2">
            Sīkdatnes var bloķēt vai dzēst pārlūka iestatījumos. Ja turpmāk sāksim izmantot analītikas
            sīkdatnes, tās tiks ielādētas tikai pēc jūsu piekrišanas, un šī politika tiks atjaunota.
          </p>
        </div>

        <p>
          Plašāku informāciju par personas datu apstrādi skatiet{' '}
          <Link to="/privatuma-politika" className="underline">privātuma politikā</Link>.
        </p>
      </div>
    </section>
  )
}
