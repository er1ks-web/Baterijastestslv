import { useState } from 'react'
import { Link } from 'react-router-dom'
import { sendForm } from '../lib/sendForm.js'

const initialForm = {
  website: '',
  name: '',
  phone: '',
  email: '',
  model: '',
  date: '',
  hour: '',
  minute: '',
  place: '',
  message: '',
}

const HOURS = Array.from({ length: 24 }, (_, i) => String(i).padStart(2, '0'))
const MINUTES = ['00', '15', '30', '45']

const inputClass =
  'rounded-md border border-ink/15 bg-surface px-3.5 py-2.5 text-ink outline-none focus:border-brand-500'

export default function SignupForm() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState('')

  const today = new Date().toLocaleDateString('sv-SE')

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const onSubmit = async (e) => {
    e.preventDefault()
    if (!form.name || !form.phone || !form.email || !form.date || !form.hour || !form.minute || !form.place.trim()) {
      setError('Lūdzu, aizpildiet vārdu, tālruni, e-pastu, vēlamo datumu, laiku un vietu.')
      return
    }
    setError('')
    if (form.website) {
      setSubmitted(true)
      return
    }

    setSending(true)
    try {
      await sendForm('Jauns pieteikums pārbaudei (Baterijastests.lv)', {
        'Vārds, uzvārds': form.name,
        Tālrunis: form.phone,
        'E-pasts': form.email,
        'Auto marka un modelis': form.model || '-',
        'Vēlamais datums': form.date,
        'Vēlamais laiks': `${form.hour}:${form.minute}`,
        Vieta: form.place,
        Ziņa: form.message || '-',
        _replyto: form.email,
      })
      setSubmitted(true)
    } catch (err) {
      setError(
        err.timeout
          ? 'Nevarējām apstiprināt, vai pieteikums ir nosūtīts. Lūdzu, pārbaudiet savienojumu un mēģiniet vēlreiz vai sazinieties ar mums pa tālruni.'
          : 'Neizdevās nosūtīt pieteikumu. Lūdzu, mēģiniet vēlreiz pēc brīža.',
      )
    } finally {
      setSending(false)
    }
  }

  if (submitted) {
    return (
      <div className="rounded-lg border border-brand-500/30 bg-surface p-8 text-center sm:p-10">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-white">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mt-4 font-display text-xl font-semibold text-ink">Pieteikums saņemts</h3>
        <p className="mt-2 text-sm text-ink/75">
          Paldies, {form.name}! Sazināsimies ar jums, lai precizētu laiku, vietu un citas detaļas.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} className="rounded-lg border border-ink/10 bg-surface p-7 shadow-soft sm:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5 text-sm">
          <span className="font-medium text-ink">Vārds, uzvārds *</span>
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
            placeholder="janis@epasts.lv"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm">
          <span className="font-medium text-ink">Auto marka un modelis</span>
          <input name="model" value={form.model} onChange={onChange} className={inputClass} placeholder="Piem., Tesla Model 3" />
        </label>
        <label className="flex flex-col gap-1.5 text-sm">
          <span className="font-medium text-ink">Vēlamais datums *</span>
          <input type="date" name="date" min={today} value={form.date} onChange={onChange} className={inputClass} />
        </label>
        <div className="flex flex-col gap-1.5 text-sm">
          <span className="font-medium text-ink">Vēlamais laiks *</span>
          <div className="flex items-center gap-2">
            <select name="hour" aria-label="Stunda" value={form.hour} onChange={onChange} className={`${inputClass} w-full !px-2.5`}>
              <option value="">hh</option>
              {HOURS.map((h) => (
                <option key={h} value={h}>
                  {h}
                </option>
              ))}
            </select>
            <span className="text-ink/60">:</span>
            <select name="minute" aria-label="Minūtes" value={form.minute} onChange={onChange} className={`${inputClass} w-full !px-2.5`}>
              <option value="">mm</option>
              {MINUTES.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
          </div>
        </div>
        <label className="flex flex-col gap-1.5 text-sm sm:col-span-2">
          <span className="font-medium text-ink">Vieta (adrese Rīgā vai Rīgas reģionā) *</span>
          <input
            name="place"
            value={form.place}
            onChange={onChange}
            className={inputClass}
            placeholder="Iela, mājas numurs, pilsēta / novads"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm sm:col-span-2">
          <span className="font-medium text-ink">Ziņa (nav obligāti)</span>
          <textarea
            name="message"
            value={form.message}
            onChange={onChange}
            rows={3}
            className={`${inputClass} resize-none`}
            placeholder="Papildu informācija, ko vēlaties mums paziņot..."
          />
        </label>
      </div>

      <input
        type="text"
        name="website"
        value={form.website}
        onChange={onChange}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
      />

      {error && <p className="mt-4 text-sm font-medium text-red-600">{error}</p>}

      <p className="mt-5 text-xs leading-relaxed text-ink/60">
        Nosūtot formu, jūs piekrītat, ka izmantosim šos datus, lai sazinātos par jūsu pieteikumu. Vairāk mūsu{' '}
        <Link to="/privatuma-politika" className="underline">
          privātuma politikā
        </Link>
        .
      </p>

      <button
        type="submit"
        disabled={sending}
        className="mt-6 w-full rounded-md bg-brand-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {sending ? 'Sūta...' : 'Nosūtīt pieteikumu'}
      </button>
    </form>
  )
}
