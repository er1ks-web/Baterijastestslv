import { COMPANY } from '../config/company.js'

const TIMEOUT_MS = 15000
const WEB3FORMS_URL = 'https://api.web3forms.com/submit'

// Delivery options, in order of preference:
// 1. Google Sheets (COMPANY.sheetsEndpoint): each submission becomes a row in a spreadsheet.
// 2. Web3Forms (COMPANY.web3formsKey): emailed to the key's address.
// 3. FormSubmit (COMPANY.formEndpoint): emailed, but its replies are slow.
function buildRequest(subject, fields, formType) {
  const { _replyto: replyTo, ...visibleFields } = fields

  if (COMPANY.sheetsEndpoint) {
    // A plain-text body (no custom headers) avoids the CORS preflight that Google Apps Script rejects.
    return {
      url: COMPANY.sheetsEndpoint,
      options: {
        method: 'POST',
        body: JSON.stringify({
          secret: COMPANY.sheetsSecret,
          form: formType,
          subject,
          fields: { ...visibleFields, Lapa: window.location.href },
        }),
      },
    }
  }

  const json = (body) => ({
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify(body),
  })

  if (COMPANY.web3formsKey) {
    return {
      url: WEB3FORMS_URL,
      options: json({
        access_key: COMPANY.web3formsKey,
        subject,
        from_name: 'Baterijastests.lv',
        email: replyTo,
        ...visibleFields,
        Lapa: window.location.href,
      }),
    }
  }

  return {
    url: COMPANY.formEndpoint,
    options: json({
      _subject: subject,
      _template: 'table',
      _captcha: 'false',
      _replyto: replyTo,
      Lapa: window.location.href,
      ...visibleFields,
    }),
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
