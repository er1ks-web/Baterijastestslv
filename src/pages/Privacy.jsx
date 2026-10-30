import { Link } from 'react-router-dom'
import { COMPANY } from '../config/company.js'

const { rekviziti } = COMPANY

export default function Privacy() {
  return (
    <section className="mx-auto max-w-3xl px-5 py-16">
      <span className="text-xs font-semibold uppercase tracking-wide text-brand-600">Juridiskā informācija</span>
      <h1 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">Privātuma politika</h1>
      <p className="mt-3 text-sm text-ink/60">Pēdējoreiz atjaunots: 30.10.2026</p>

      <div className="mt-8 space-y-6 text-sm leading-relaxed text-ink/80">
        <p>
          Šī privātuma politika skaidro, kā Baterijastests.lv ({rekviziti.name}, reģ. Nr. {rekviziti.regNo}) vāc,
          izmanto un aizsargā jūsu personas datus saskaņā ar ES Vispārīgo datu aizsardzības regulu (VDAR).
        </p>

        <div>
          <h2 className="font-display text-lg font-semibold text-ink">Datu pārzinis</h2>
          <p className="mt-2">
            {rekviziti.name}, reģistrācijas numurs {rekviziti.regNo} (mājaslapa Baterijastests.lv). E-pasts:{' '}
            <a href={`mailto:${COMPANY.email}`} className="underline">{COMPANY.email}</a>, tālrunis:{' '}
            <a href={COMPANY.phoneHref} className="underline">{COMPANY.phone}</a>.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-ink">Kādus datus mēs vācam</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Kontaktinformācija no pieteikuma formas: vārds, tālrunis, e-pasts.</li>
            <li>
              Pieteikuma dati: auto marka un modelis, vēlamais datums un laiks, pārbaudes vieta un jūsu
              ziņojums.
            </li>
            <li>
              Tehniskie dati: vietnes mitināšanas pakalpojuma sniedzējs var reģistrēt jūsu IP adresi un
              pārlūka veidu. Mēs neizmantojam analītikas rīkus.
            </li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-ink">Kāpēc mēs izmantojam datus</h2>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            <li>Lai apstrādātu un apstiprinātu jūsu pieteikumu un sazinātos par pakalpojumu.</li>
            <li>Lai veiktu akumulatora pārbaudi un sagatavotu atskaiti par tās rezultātiem.</li>
            <li>Lai sagatavotu piedāvājumu uzņēmumiem, ja pieteikumu iesniedzat uzņēmuma vārdā.</li>
          </ul>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-ink">Juridiskais pamats</h2>
          <p className="mt-2">
            Pieteikuma datus apstrādājam, pamatojoties uz darbībām pēc jūsu pieprasījuma pirms līguma
            noslēgšanas (VDAR 6. panta 1. punkta b) apakšpunkts) un mūsu leģitīmajām interesēm sniegt
            pakalpojumu (6. panta 1. punkta f) apakšpunkts).
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-ink">Datu saņēmēji</h2>
          <p className="mt-2">
            Pieteikumu datus glabājam Google pakalpojumos (Google Sheets un Gmail), ko izmantojam pieteikumu
            uzskaitei un saziņai. Datus neizpaužam citām personām, izņemot gadījumus, kad to paredz
            normatīvie akti.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-ink">Datu glabāšana</h2>
          <p className="mt-2">
            Pieteikuma dati tiek glabāti tik ilgi, cik nepieciešams pakalpojuma sniegšanai un
            grāmatvedības vai juridisko pienākumu izpildei, pēc tam tos dzēš vai anonimizē.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-ink">Jūsu tiesības</h2>
          <p className="mt-2">
            Jums ir tiesības piekļūt datiem, tos labot, dzēst, ierobežot vai iebilst pret apstrādi, kā arī uz
            datu pārnesamību. Lai izmantotu šīs tiesības, rakstiet uz{' '}
            <a href={`mailto:${COMPANY.email}`} className="underline">{COMPANY.email}</a>. Varat arī iesniegt
            sūdzību Datu valsts inspekcijā.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-ink">Sīkdatnes</h2>
          <p className="mt-2">
            Informāciju par sīkdatnēm skatiet{' '}
            <Link to="/sikdatnu-politika" className="underline">sīkdatņu politikā</Link>.
          </p>
        </div>

        <div>
          <h2 className="font-display text-lg font-semibold text-ink">Kontakti</h2>
          <p className="mt-2">
            Privātuma jautājumos rakstiet uz{' '}
            <a href={`mailto:${COMPANY.email}`} className="underline">{COMPANY.email}</a>.
          </p>
        </div>
      </div>
    </section>
  )
}
