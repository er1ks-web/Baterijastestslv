import { COMPANY } from '../config/company.js'

const TIMEOUT_MS = 15000
const WEB3FORMS_URL = 'https://api.web3forms.com/submit'

function buildRequest(subject, fields) {
  const { _replyto: replyTo, ...visibleFields } = fields

  if (COMPANY.web3formsKey) {
    return {
      url: WEB3FORMS_URL,
      body: {
        access_key: COMPANY.web3formsKey,
        subject,
        from_name: 'Baterijastests.lv',
        email: replyTo,
        ...visibleFields,
        Lapa: window.location.href,
      },
    }
  }

  return {
    url: COMPANY.formEndpoint,
    body: {
      _subject: subject,
      _template: 'table',
      _captcha: 'false',
      _replyto: replyTo,
      Lapa: window.location.href,
      ...visibleFields,
    },
  }
}

// Sends form fields as an email (Web3Forms if COMPANY.web3formsKey is set, otherwise FormSubmit).
// Throws if the request fails so the form can show an error instead of a false success.
// If the service does not answer in time, the error has `timeout: true` (the email may
// still have been delivered, we just could not confirm it).
export async function sendForm(subject, fields) {
  const { url, body } = buildRequest(subject, fields)
  const controller = new AbortController()
  let timedOut = false
  const timer = setTimeout(() => {
    timedOut = true
    controller.abort()
  }, TIMEOUT_MS)

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(body),
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
