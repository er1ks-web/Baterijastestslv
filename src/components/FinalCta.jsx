export default function FinalCta() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
      <div className="flex flex-col items-center gap-6 rounded-3xl bg-ink px-8 py-14 text-center text-paper sm:px-14">
        <h2 className="max-w-xl text-3xl font-bold sm:text-4xl">
          Uzziniet sava akumulatora patieso stāvokli jau šodien
        </h2>
        <p className="max-w-md text-paper/60">
          Godīgs, neatkarīgs rezultāts 20–30 minūtēs — ar sertifikātu, kam var uzticēties.
        </p>
        <a
          href="#pieteikties"
          className="rounded-full bg-amber-500 px-8 py-3.5 text-sm font-semibold text-ink shadow-soft transition hover:bg-amber-400"
        >
          Pieteikt pārbaudi
        </a>
      </div>
    </section>
  )
}
