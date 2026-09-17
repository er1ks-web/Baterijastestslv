import SignupForm from './SignupForm.jsx'

export default function SignupSection() {
  return (
    <section id="pieteikties" className="scroll-mt-24 bg-brand-50/60">
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-5 py-16 md:grid-cols-[0.9fr_1.1fr] md:py-20">
        <div>
          <span className="text-xs font-semibold uppercase tracking-wide text-brand-600">Pieteikšanās</span>
          <h2 className="mt-3 text-3xl font-bold text-ink sm:text-4xl">Pieteikties akumulatora pārbaudei</h2>
          <p className="mt-4 max-w-md text-ink/60">
            Aizpildiet formu, un sazināsimies, lai vienotos par pārbaudes laiku un vietu. Precīzu cenu
            apstiprināsim, ņemot vērā jūsu auto modeli un atrašanās vietu.
          </p>
          <ul className="mt-7 space-y-3 text-sm text-ink/65">
            <li className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" /> Atbilde 1 darba dienas laikā
            </li>
            <li className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" /> Bez saistībām, kamēr laiks nav apstiprināts
            </li>
            <li className="flex items-center gap-2.5">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-500" /> Iespējama izbraukšana pie jums
            </li>
          </ul>
        </div>

        <SignupForm />
      </div>
    </section>
  )
}
