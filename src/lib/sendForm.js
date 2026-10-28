import { COMPANY } from '../config/company.js'

// Sends form fields as an email through COMPANY.formEndpoint (FormSubmit's AJAX API).
// Throws if the request fails so the form can show an error instead of a false success.
export async function sendForm(subject, fields) {
  const response = await fetch(COMPANY.formEndpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      _subject: subject,
      _template: 'table',
      _captcha: 'false',
      Lapa: window.location.href,
      ...fields,
    }),
  })

  const data = await response.json().catch(() => ({}))
  const ok = data.success === true || data.success === 'true'
  if (!response.ok || !ok) {
    throw new Error(data.message || `Form send failed (${response.status})`)
  }
  return data
}
