import { COMPANY } from '../config/company.js'

const TIMEOUT_MS = 15000

// Sends form fields as an email through COMPANY.formEndpoint (FormSubmit's AJAX API).
// Throws if the request fails so the form can show an error instead of a false success.
// If the service does not answer in time, the error has `timeout: true` (the email may
// still have been delivered, we just could not confirm it).
export async function sendForm(subject, fields) {
  const controller = new AbortController()
  let timedOut = false
  const timer = setTimeout(() => {
    timedOut = true
    controller.abort()
  }, TIMEOUT_MS)

  try {
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
      signal: controller.signal,
    })

    const data = await response.json().catch(() => ({}))
    const ok = data.success === true || data.success === 'true'
    if (!response.ok || !ok) {
      throw new Error(data.message || `Form send failed (${response.status})`)
    }
    return data
  } catch (error) {
    if (timedOut) {
      const timeoutError = new Error('Form send timed out')
      timeoutError.timeout = true
      throw timeoutError
    }
    throw error
  } finally {
    clearTimeout(timer)
  }
}
