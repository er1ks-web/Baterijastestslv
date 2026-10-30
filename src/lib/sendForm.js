import { COMPANY } from '../config/company.js'

const TIMEOUT_MS = 15000

// Each submission becomes a row in the Google Sheet behind COMPANY.sheetsEndpoint
// (see google-apps-script/Code.gs).
function buildRequest(subject, fields, formType) {
  const { _replyto: _ignored, ...visibleFields } = fields

  return {
    url: COMPANY.sheetsEndpoint,
    options: {
      method: 'POST',
      // A plain-text body (no custom headers) avoids the CORS preflight that Google Apps Script rejects.
      body: JSON.stringify({
        secret: COMPANY.sheetsSecret,
        form: formType,
        subject,
        fields: { ...visibleFields, Lapa: window.location.href },
      }),
    },
  }
}

// Throws if delivery fails so the form can show an error instead of a false success.
// If the service does not answer in time, the error has `timeout: true` (the data may
// still have arrived, we just could not confirm it).
export async function sendForm(subject, fields, formType) {
  const { url, options } = buildRequest(subject, fields, formType)
  const controller = new AbortController()
  let timedOut = false
  const timer = setTimeout(() => {
    timedOut = true
    controller.abort()
  }, TIMEOUT_MS)

  try {
    const response = await fetch(url, { ...options, signal: controller.signal })
    const data = await response.json().catch(() => ({}))
    const ok = data.success === true || data.success === 'true'
    if (!response.ok || !ok) {
      console.warn('Form service replied:', response.status, data)
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
