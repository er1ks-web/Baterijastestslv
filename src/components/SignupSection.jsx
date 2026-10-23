import SignupForm from './SignupForm.jsx'

export default function SignupSection() {
  return (
    <section id="pieteikties" className="scroll-mt-28 bg-paper">
      <div className="mx-auto grid max-w-6xl items-start gap-12 px-5 py-16 md:grid-cols-[0.9fr_1.1fr] md:py-24">
        <div>
          <p className="font-display text-sm italic text-brand-500">Pieteikšanās</p>
          <h2 className="mt-3 text-3xl font-semibold text-ink sm:text-4xl">Rezervējiet savu pārbaudi</h2>
          <p className="mt-4 max-w-md text-ink/60">
            Aizpildiet formu, un sazināsimies, lai vienotos par pārbaudes laiku un vietu. Precīzu cenu
            apstiprināsim, ņemot vērā jūsu auto modeli un atrašanās vietu.
          </p>
          <ul className="mt-7 space-y-3 border-t border-dashed border-ink/15 pt-6 text-sm text-ink/65">
            <li className="flex items-center gap-2.5">
              <span className="font-display text-xs text-brand-400">01</span> Atbilde 1 darba dienas laikā
            </li>
            <li className="flex items-center gap-2.5">
              <span className="font-display text-xs text-brand-400">02</span> Bez saistībām, kamēr laiks nav apstiprināts
            </li>
            <li className="flex items-center gap-2.5">
              <span className="font-display text-xs text-brand-400">03</span> Iespējama izbraukšana pie jums
            </li>
          </ul>
        </div>

        <SignupForm />
      </div>
    </section>
  )
}
