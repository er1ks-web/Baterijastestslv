import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SohCalculator from '../components/SohCalculator.jsx'
import FinalCta from '../components/FinalCta.jsx'

const SCALE = [
  { range: '90–100%', label: 'Lieliski', text: 'Praktiski kā jauns akumulators.', bar: 'bg-brand-500' },
  { range: '80–89%', label: 'Labi', text: 'Normāls nolietojums, nobraukums nedaudz samazinājies.', bar: 'bg-lime-500' },
  { range: '70–79%', label: 'Vidēji', text: 'Zudums jūtams, īpaši ziemā — svarīgi zināt pirms pirkuma.', bar: 'bg-amber-500' },
  { range: 'zem 70%', label: 'Zems', text: 'Ievērojams nolietojums, iespējama nomaiņa nākotnē.', bar: 'bg-red-600' },
]

const METHODS = [
  {
    name: 'Auto panelis',
    shows: 'Aptuvenu nobraukumu, kas mainās ar braukšanas stilu un temperatūru',
    time: 'Uzreiz',
    doc: 'Nē',
    fit: 'Aptuvenai orientācijai',
  },
  {
    name: 'OBD lasītājs servisā',
    shows: 'Akumulatora datus tā, kā tos atdod auto vadības bloks',
    time: '15–30 min',
    doc: 'Reti',
    fit: 'Servisa diagnostikai',
  },
  {
    name: 'Baterijastests.lv',
    shows: 'SOH procentu, kapacitāti, ciklus un kļūdu pārbaudi',
    time: '20–30 min',
    doc: 'Jā, PDF atskaite',
    fit: 'Pirkšanai, pārdošanai un sarunām par cenu',
    highlight: true,
  },
]

const FACTORS = [
  { title: 'Karstums', text: 'Augsta temperatūra paātrina akumulatora ķīmisko novecošanu — gan braucot, gan stāvot.' },
  { title: 'Biežas ātrās uzlādes', text: 'Regulāra uzlāde ar lielu jaudu (DC) sasilda šūnas un ilgtermiņā ātrāk iztērē kapacitāti.' },
  { title: 'Ekstrēmi uzlādes līmeņi', text: 'Ilgstoša glabāšana pie 100% vai gandrīz tukša akumulatora nodara vairāk ļauna nekā ikdienas braukšana.' },
  { title: 'Vecums un cikli', text: 'Katrs uzlādes cikls un katrs gads atstāj pēdas — taču divi vienāda vecuma auto var atšķirties ļoti.' },
]

export default function WhatIsSoh() {
  useEffect(() => {
    const previous = document.title
    document.title = 'Kas ir SOH — akumulatora veselības stāvoklis | Baterijastests.lv'
    return () => {
      document.title = previous
    }
  }, [])

  return (
    <>
      <section className="border-b border-ink/10 bg-canvas">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-14 pt-16 md:grid-cols-[1.15fr_0.85fr] md:items-center md:pb-20 md:pt-24">
          <div>
            <p className="font-display text-sm italic text-charge-200">Kas ir SOH</p>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.08] text-ink sm:text-5xl">
              SOH ir akumulatora <span className="text-charge-200">veselība procentos</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/75">
              SOH (State of Health) parāda, cik daudz no sākotnējās kapacitātes akumulators vēl ir saglabājis.
              Jauns akumulators ir 100%. Tieši šis skaitlis visvairāk ietekmē lietota elektroauto vērtību un reālo
              nobraukumu.
            </p>
            <a
              href="#kalkulators"
              className="mt-8 inline-block text-sm font-semibold text-ink/80 underline decoration-brand-300 decoration-2 underline-offset-4 transition hover:text-ink"
            >
              Izmēģināt kalkulatoru ↓
            </a>
          </div>

          <div className="space-y-4">
            <div className="rounded-lg border border-ink/10 bg-surface p-5 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-wide text-charge-200">SOC — uzlādes līmenis</p>
              <p className="mt-2 text-sm leading-relaxed text-ink/75">
                Rāda, cik pilna ir &ldquo;tvertne&rdquo; tieši tagad. Mainās katru dienu.
              </p>
            </div>
            <div className="rounded-lg bg-night p-5 text-paper shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-wide text-charge-200">SOH — veselības stāvoklis</p>
              <p className="mt-2 text-sm leading-relaxed text-paper/65">
                Rāda, cik liela tā &ldquo;tvertne&rdquo; vēl ir salīdzinājumā ar jaunu. Mainās lēni — un atpakaļ
                neatgriežas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="kalkulators" className="mx-auto max-w-6xl scroll-mt-28 px-5 py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="font-display text-sm italic text-charge-200">Izmēģiniet paši</p>
          <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">Ko SOH nozīmē tieši jūsu auto</h2>
          <p className="mt-4 text-ink/75">
            Izvēlieties modeli, pavelciet slīdni un redziet, kā procenti pārvēršas kilometros un eiro.
          </p>
        </div>
        <div className="mt-10">
          <SohCalculator />
        </div>
      </section>

      <section className="border-y border-ink/10 bg-surface">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="font-display text-sm italic text-charge-200">Rezultāta nozīme</p>
            <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">Kā lasīt SOH</h2>
          </div>
          <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {SCALE.map((s) => (
              <div key={s.range} className="bg-surface p-6">
                <div className={`h-1.5 w-12 rounded-full ${s.bar}`} />
                <p className="mt-4 font-display text-2xl font-semibold text-ink">{s.range}</p>
                <p className="mt-1 text-sm font-semibold text-ink/80">{s.label}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink/70">{s.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-lg border border-brand-500/30 bg-brand-500/10 p-6 sm:p-8">
            <p className="font-display text-sm italic text-charge-200">Euro 7 un garantija</p>
            <p className="mt-2 max-w-3xl text-sm leading-relaxed text-ink/80">
              Jauniem automobiļiem ES Euro 7 regula (Regula (ES) 2024/1257) paredz minimālu akumulatora izturību:
              vismaz 80% kapacitātes pēc 5 gadiem vai 100 000 km un vismaz 72% pēc 8 gadiem vai 160 000 km. Šīs
              prasības attiecas uz jauniem auto, nevis lietotiem, taču tās ir noderīgs atskaites punkts, vērtējot
              lietota auto mērījumu.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="font-display text-sm italic text-charge-200">Kā to uzzināt</p>
          <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">Trīs veidi, kā novērtēt akumulatoru</h2>
          <p className="mt-4 text-ink/75">
            Ne katrs rādījums ir SOH. Lūk, ko katra metode patiesībā parāda.
          </p>
        </div>

        <div className="mt-10 overflow-x-auto rounded-lg border border-ink/10 bg-surface shadow-soft">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-ink/10 bg-canvas text-xs uppercase tracking-wide text-ink/60">
                <th className="px-5 py-3 font-semibold">Metode</th>
                <th className="px-5 py-3 font-semibold">Ko tā parāda</th>
                <th className="px-5 py-3 font-semibold">Ilgums</th>
                <th className="px-5 py-3 font-semibold">Dokuments</th>
                <th className="px-5 py-3 font-semibold">Piemērota</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-ink/10">
              {METHODS.map((m) => (
                <tr key={m.name} className={m.highlight ? 'bg-brand-500/10' : ''}>
                  <td className="px-5 py-4 font-display font-semibold text-ink">{m.name}</td>
                  <td className="px-5 py-4 text-ink/75">{m.shows}</td>
                  <td className="px-5 py-4 text-ink/75">{m.time}</td>
                  <td className="px-5 py-4 text-ink/75">{m.doc}</td>
                  <td className="px-5 py-4 text-ink/75">{m.fit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-sm text-ink/70">
          Gribat redzēt, kā notiek pārbaude?{' '}
          <Link to="/#process" className="font-medium text-charge-200 underline underline-offset-2">
            Skatiet procesu
          </Link>
          .
        </p>
      </section>

      <section className="bg-night text-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="font-display text-sm italic text-charge-200">Kāpēc akumulators nolietojas</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Kas samazina SOH</h2>
            <p className="mt-4 text-paper/55">
              Tāpēc divi vienāda vecuma elektroauto var būt pavisam dažādā stāvoklī.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {FACTORS.map((f, i) => (
              <div key={f.title} className="border-t border-paper/15 pt-5">
                <span className="font-display text-xs text-charge-200">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-2 font-display text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-paper/55">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  )
}
