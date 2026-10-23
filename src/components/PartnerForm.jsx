import { useState } from 'react'
import { Link } from 'react-router-dom'

const VOLUMES = ['1–5 auto', '6–20 auto', '21–50 auto', 'Vairāk nekā 50 auto', 'Vēl nezinu']

const initialForm = { company: '', name: '', phone: '', email: '', volume: '', message: '' }

const inputClass =
  'rounded-md border border-ink/15 bg-surface px-3.5 py-2.5 text-ink outline-none focus:border-brand-500'

// NOTE: this form does not send data anywhere yet. Wire it up to a real
// endpoint (e.g. Formspree, EmailJS, or a custom API route) before launch.
export default function PartnerForm() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const onSubmit = (e) => {
    e.preventDefault()
    if (!form.company || !form.name || !form.phone || !form.email) {
      setError('Lūdzu, aizpildiet uzņēmumu, vārdu, tālruni un e-pastu.')
      return
    }
    setError('')
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="rounded-lg border border-brand-500/30 bg-surface p-8 text-center sm:p-10">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-charge-200 text-night">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-4 font-display text-xl font-semibold text-ink">Pieteikums saņemts</h3>
        <p className="mt-2 text-sm text-ink/75">
          Paldies, {form.name}! Sagatavosim piedāvājumu jūsu apjomam un sazināsimies darba dienas laikā.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="rounded-lg border border-ink/10 bg-surface p-7 shadow-soft sm:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-sm sm:col-span-2">
          <span className="font-medium text-ink">Uzņēmums *</span>
          <input name="company" value={form.company} onChange={onChange} className={inputClass} placeholder="SIA “Piemērs”" />
        </label>
        <label className="flex flex-col gap-1.5 text-sm">
          <span className="font-medium text-ink">Kontaktpersona *</span>
          <input name="name" value={form.name} onChange={onChange} className={inputClass} placeholder="Jānis Bērziņš" />
        </label>
        <label className="flex flex-col gap-1.5 text-sm">
          <span className="font-medium text-ink">Tālrunis *</span>
          <input name="phone" value={form.phone} onChange={onChange} className={inputClass} placeholder="+371 2X XXX XXX" />
        </label>
        <label className="flex flex-col gap-1.5 text-sm">
          <span className="font-medium text-ink">E-pasts *</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={onChange}
            className={inputClass}
            placeholder="janis@uznemums.lv"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm">
          <span className="font-medium text-ink">Cik auto plānojat pārbaudīt</span>
          <select name="volume" value={form.volume} onChange={onChange} className={inputClass}>
            <option value="">Izvēlieties</option>
            {VOLUMES.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
          </select>
        </label>
        <label className="flex flex-col gap-1.5 text-sm sm:col-span-2">
          <span className="font-medium text-ink">Uzdevums vai komentārs</span>
          <textarea
            name="message"
            value={form.message}
            onChange={onChange}
            rows={3}
            className={`${inputClass} resize-none`}
            placeholder="Kur atrodas auto, cik bieži nepieciešama pārbaude..."
          />
        </label>
      </div>

      {error && <p className="mt-4 text-sm font-medium text-red-400">{error}</p>}

      <p className="mt-5 text-xs leading-relaxed text-ink/60">
        Nosūtot formu, jūs piekrītat, ka izmantosim šos datus, lai sagatavotu piedāvājumu. Vairāk mūsu{' '}
        <Link to="/privatuma-politika" className="underline">
          privātuma politikā
        </Link>
        .
      </p>

      <button
        type="submit"
        className="mt-6 w-full rounded-md bg-charge-200 px-6 py-3.5 text-sm font-semibold text-night transition hover:bg-charge-100 sm:w-auto"
      >
        Saņemt piedāvājumu
      </button>
    </form>
  )
}
