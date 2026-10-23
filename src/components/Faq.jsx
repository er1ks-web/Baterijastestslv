import { useState } from 'react'

const FAQS = [
  {
    q: 'Cik ilgi aizņem pārbaude?',
    a: 'Standarta SOH tests aizņem apmēram 20–30 minūtes. Padziļinātais audits ar plašāku analīzi — 2–4 stundas.',
  },
  {
    q: 'Vai atskaite derīga, pārdodot auto citā valstī?',
    a: 'Jā, atskaite atspoguļo mērījumus, kas balstīti uz vispārpieņemtu metodiku, un to var uzrādīt arī ārpus Latvijas.',
  },
  {
    q: 'Vai jums jābrauc pie manis, vai es varu atbraukt pie jums?',
    a: 'Piedāvājam abas iespējas — izbraukumu pie jums Rīgā un Latvijā, vai pārbaudi pie mums uz vietas.',
  },
  {
    q: 'Kādus elektroauto jūs pārbaudāt?',
    a: 'Pārbaudām lielāko daļu populāro elektroauto modeļu ar OBD pieslēgumu. Ja neesat pārliecināts, sazinieties pirms pieteikšanās.',
  },
  {
    q: 'Vai tests var sabojāt akumulatoru?',
    a: 'Nē. Tests notiek caur auto standarta OBD pieslēgvietu un neietekmē akumulatora darbību vai garantiju.',
  },
  {
    q: 'Kas ir SOH un kāds rādītājs ir labs?',
    a: 'SOH parāda, cik procentu no sākotnējās kapacitātes ir saglabājies. Virs 90% — ļoti labs, 80–90% — normāls vidēja vecuma auto, zem 80% — vērts izvērtēt rūpīgāk.',
  },
  {
    q: 'Kad saņemšu rezultātu?',
    a: 'Atskaiti sagatavojam un nosūtām uz e-pastu tajā pašā vai nākamajā darba dienā pēc pārbaudes.',
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="buj" className="scroll-mt-28 mx-auto max-w-4xl px-5 py-16 md:py-24">
      <div className="max-w-xl">
        <p className="font-display text-sm italic text-brand-500">Jautājumi</p>
        <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">Biežāk uzdotie jautājumi</h2>
      </div>

      <div className="mt-10 divide-y divide-ink/10 border-t border-ink/10">
        {FAQS.map((item, i) => {
          const isOpen = openIndex === i
          return (
            <div key={item.q}>
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between gap-6 py-5 text-left"
              >
                <span className="flex items-baseline gap-4">
                  <span className="font-display text-xs text-brand-400">{String(i + 1).padStart(2, '0')}</span>
                  <span className="font-medium text-ink">{item.q}</span>
                </span>
                <span className={`shrink-0 font-display text-xl text-ink/30 transition-transform ${isOpen ? 'rotate-45' : ''}`}>
                  +
                </span>
              </button>
              {isOpen && (
                <p className="max-w-xl pb-6 pl-9 text-sm leading-relaxed text-ink/55">{item.a}</p>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
