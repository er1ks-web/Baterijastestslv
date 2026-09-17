import { useState } from 'react'

const initialForm = {
  name: '',
  phone: '',
  email: '',
  model: '',
  city: '',
  message: '',
}

// NOTE: this form does not send data anywhere yet. Wire it up to a real
// endpoint (e.g. Formspree, EmailJS, or a custom API route) before launch.
export default function SignupForm() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.phone || !form.email) {
      setError('Lūdzu, aizpildiet vārdu, tālruni un e-pastu.')
      return
    }
    setError('')
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-lg border border-brand-200 bg-white p-8 text-center sm:p-10">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-ink text-iris-200">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-4 font-display text-xl font-semibold text-ink">Pieteikums saņemts</h3>
        <p className="mt-2 text-sm text-ink/60">
          Paldies, {form.name}! Sazināsimies ar jums pa tālruni vai e-pastu, lai vienotos par laiku.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="rounded-lg border border-ink/10 bg-white p-7 shadow-soft sm:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-sm">
          <span className="font-medium text-ink">Vārds, uzvārds *</span>
          <input
            name="name"
            value={form.name}
            onChange={onChange}
            className="rounded-md border border-ink/15 px-3.5 py-2.5 text-ink outline-none focus:border-brand-500"
            placeholder="Jānis Bērziņš"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm">
          <span className="font-medium text-ink">Tālrunis *</span>
          <input
            name="phone"
            value={form.phone}
            onChange={onChange}
            className="rounded-md border border-ink/15 px-3.5 py-2.5 text-ink outline-none focus:border-brand-500"
            placeholder="+371 2X XXX XXX"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm">
          <span className="font-medium text-ink">E-pasts *</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={onChange}
            className="rounded-md border border-ink/15 px-3.5 py-2.5 text-ink outline-none focus:border-brand-500"
            placeholder="janis@epasts.lv"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm">
          <span className="font-medium text-ink">Auto marka un modelis</span>
          <input
            name="model"
            value={form.model}
            onChange={onChange}
            className="rounded-md border border-ink/15 px-3.5 py-2.5 text-ink outline-none focus:border-brand-500"
            placeholder="Piem., Tesla Model 3"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm sm:col-span-2">
          <span className="font-medium text-ink">Pilsēta / novads</span>
          <input
            name="city"
            value={form.city}
            onChange={onChange}
            className="rounded-md border border-ink/15 px-3.5 py-2.5 text-ink outline-none focus:border-brand-500"
            placeholder="Rīga"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm sm:col-span-2">
          <span className="font-medium text-ink">Ziņa (nav obligāti)</span>
          <textarea
            name="message"
            value={form.message}
            onChange={onChange}
            rows={3}
            className="resize-none rounded-md border border-ink/15 px-3.5 py-2.5 text-ink outline-none focus:border-brand-500"
            placeholder="Vēlamais laiks, papildu informācija..."
          />
        </label>
      </div>

      {error && <p className="mt-4 text-sm font-medium text-red-600">{error}</p>}

      <p className="mt-5 text-xs leading-relaxed text-ink/45">
        Nosūtot formu, jūs piekrītat, ka izmantosim šos datus, lai sazinātos par jūsu pieteikumu. Vairāk
        mūsu{' '}
        <a href="/privatuma-politika" className="underline">
          privātuma politikā
        </a>
        .
      </p>

      <button
        type="submit"
        className="mt-6 w-full rounded-md bg-ink px-6 py-3.5 text-sm font-semibold text-iris-200 transition hover:bg-brand-800 sm:w-auto"
      >
        Nosūtīt pieteikumu
      </button>
    </form>
  )
}
