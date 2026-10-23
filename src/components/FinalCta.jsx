export default function FinalCta() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:py-24">
      <div className="flex flex-col items-center gap-6 rounded-lg bg-ink px-8 py-16 text-center text-paper sm:px-14">
        <p className="font-display text-sm italic text-charge-200">Nākamais solis</p>
        <h2 className="max-w-xl text-3xl font-semibold sm:text-4xl">
          Uzziniet sava akumulatora patieso stāvokli
        </h2>
        <p className="max-w-md text-paper/55">
          Godīgs, neatkarīgs rezultāts 20–30 minūtēs — ar atskaiti, kam var uzticēties.
        </p>
        <a
          href="#pieteikties"
          className="rounded-md bg-charge-200 px-8 py-3.5 text-sm font-semibold text-ink transition hover:bg-charge-100"
        >
          Pieteikt pārbaudi
        </a>
      </div>
    </section>
  )
}
