import { useState } from 'react'

const FAQS = [
  {
    q: 'Cik ilgi aizņem pārbaude?',
    a: 'Standarta SOH tests aizņem apmēram 20–30 minūtes. Padziļinātais audits ar plašāku analīzi — 2–4 stundas.',
  },
  {
    q: 'Vai sertifikāts ir derīgs, pārdodot auto citā valstī?',
    a: 'Jā, sertifikāts atspoguļo mērījumus, kas balstīti uz vispārpieņemtu metodiku, un to var uzrādīt arī ārpus Latvijas.',
  },
  {
    q: 'Vai jums jābrauc pie manis, vai es varu atbraukt pie jums?',
    a: 'Piedāvājam abas iespējas — izbraukumu pie jums Rīgā un Latvijā, vai pārbaudi pie mums uz vietas. To saskaņosim pieteikuma formā.',
  },
  {
    q: 'Kādus elektroauto jūs pārbaudāt?',
    a: 'Pārbaudām lielāko daļu populāro elektroauto modeļu ar OBD pieslēgumu. Ja neesat pārliecināts par savu modeli, sazinieties ar mums pirms pieteikšanās.',
  },
  {
    q: 'Vai tests var sabojāt akumulatoru?',
    a: 'Nē. Tests ir bezkontakta diagnostika caur auto standarta OBD pieslēgvietu un neietekmē akumulatora darbību vai garantiju.',
  },
  {
    q: 'Kas ir SOH un kāds rādītājs tiek uzskatīts par labu?',
    a: 'SOH (State of Health) parāda, cik procentu no sākotnējās akumulatora kapacitātes ir saglabājies. Virs 90% parasti tiek uzskatīts par ļoti labu, 80–90% — normālu vidēja vecuma auto, zem 80% — vērts izvērtēt rūpīgāk.',
  },
  {
    q: 'Kad saņemšu rezultātu?',
    a: 'Sertifikātu sagatavojam un nosūtām uz e-pastu tajā pašā vai nākamajā darba dienā pēc pārbaudes.',
  },
]

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="buj" className="scroll-mt-24 mx-auto max-w-4xl px-5 py-16 md:py-20">
      <div className="text-center">
        <span className="text-xs font-semibold uppercase tracking-wide text-brand-600">Jautājumi</span>
        <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">Biežāk uzdotie jautājumi</h2>
      </div>

      <div className="mt-10 divide-y divide-ink/10 rounded-2xl border border-ink/10 bg-white shadow-soft">
        {FAQS.map((item, i) => {
          const isOpen = openIndex === i
          return (
            <div key={item.q}>
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              >
                <span className="font-medium text-ink">{item.q}</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className={`shrink-0 text-ink/40 transition-transform ${isOpen ? 'rotate-45' : ''}`}
                >
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </button>
              {isOpen && <p className="px-6 pb-5 text-sm leading-relaxed text-ink/60">{item.a}</p>}
            </div>
          )
        })}
      </div>
    </section>
  )
}
