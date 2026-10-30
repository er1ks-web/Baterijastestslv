// Receives form submissions from baterijastests.lv and stores them in this spreadsheet.
// Paste this whole file into Extensions > Apps Script of the Google Sheet, then deploy as a web app.

const SECRET = '53d82d01e21949bfbbb2a50d' // must match `sheetsSecret` in src/config/company.js
const NOTIFY_EMAIL = 'baterijastests@gmail.com' // set to '' to turn off email notifications
const STATUSES = ['Jauns', 'Apstiprināts', 'Pabeigts', 'Atcelts']
const SHEETS = { pieteikums: 'Pieteikumi', uznemums: 'Uzņēmumi' }
const MAX_LEN = 1500

function doGet() {
  return reply_({ success: true, message: 'OK' })
}

function doPost(e) {
  const lock = LockService.getScriptLock()
  let locked = false
  try {
    lock.waitLock(15000)
    locked = true

    const data = JSON.parse(e.postData.contents)
    if (data.secret !== SECRET) return reply_({ success: false, message: 'Forbidden' })

    const sheetName = SHEETS[data.form]
    if (!sheetName || !data.fields) return reply_({ success: false, message: 'Bad request' })

    const fields = {}
    Object.keys(data.fields).forEach(function (key) {
      fields[String(key).slice(0, 80)] = String(data.fields[key]).slice(0, MAX_LEN)
    })

    const sheet = getSheet_(sheetName)
    const headers = ensureHeaders_(sheet, Object.keys(fields))
    const row = headers.map(function (header) {
      if (header === 'Saņemts') return Utilities.formatDate(new Date(), 'Europe/Riga', 'yyyy-MM-dd HH:mm')
      if (header === 'Statuss') return STATUSES[0]
      return fields[header] || ''
    })

    // Plain-text format keeps phone numbers (+371...), dates and times exactly as typed
    // and stops values starting with "=" from being treated as formulas.
    const rowIndex = sheet.getLastRow() + 1
    const range = sheet.getRange(rowIndex, 1, 1, headers.length)
    range.setNumberFormat('@')
    range.setValues([row])
    sheet.getRange(rowIndex, headers.indexOf('Statuss') + 1).setDataValidation(statusRule_())

    try {
      notify_(data.subject, fields)
    } catch (mailError) {
      // The row is already saved; a mail problem must not make the form fail.
    }

    return reply_({ success: true })
  } catch (error) {
    return reply_({ success: false, message: String(error) })
  } finally {
    if (locked) lock.releaseLock()
  }
}

function getSheet_(name) {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet()
  return spreadsheet.getSheetByName(name) || spreadsheet.insertSheet(name)
}

function ensureHeaders_(sheet, keys) {
  if (sheet.getLastRow() === 0) {
    const headers = ['Saņemts', 'Statuss'].concat(keys)
    writeHeader_(sheet, headers)
    addStatusColours_(sheet)
    return headers
  }

  let headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0].map(String)
  const missing = keys.filter(function (key) {
    return headers.indexOf(key) === -1
  })
  if (missing.length) {
    headers = headers.concat(missing)
    writeHeader_(sheet, headers)
  }
  return headers
}

function writeHeader_(sheet, headers) {
  const range = sheet.getRange(1, 1, 1, headers.length)
  range.setValues([headers])
  range.setFontWeight('bold')
  sheet.setFrozenRows(1)
}

function addStatusColours_(sheet) {
  const range = sheet.getRange('A2:Z1000')
  const colours = [
    ['Apstiprināts', '#fff2cc'],
    ['Pabeigts', '#d9ead3'],
    ['Atcelts', '#f4cccc'],
  ]
  const rules = colours.map(function (pair) {
    return SpreadsheetApp.newConditionalFormatRule()
      .whenFormulaSatisfied('=$B2="' + pair[0] + '"')
      .setBackground(pair[1])
      .setRanges([range])
      .build()
  })
  sheet.setConditionalFormatRules(rules)
}

function statusRule_() {
  return SpreadsheetApp.newDataValidation().requireValueInList(STATUSES, true).setAllowInvalid(false).build()
}

function notify_(subject, fields) {
  if (!NOTIFY_EMAIL) return
  const body = Object.keys(fields)
    .map(function (key) {
      return key + ': ' + fields[key]
    })
    .join('\n')
  const options = { to: NOTIFY_EMAIL, subject: subject || 'Jauns pieteikums', body: body }
  const replyTo = fields['E-pasts']
  if (replyTo && /^[^@\s]+@[^@\s]+$/.test(replyTo)) options.replyTo = replyTo
  MailApp.sendEmail(options)
}

function reply_(object) {
  return ContentService.createTextOutput(JSON.stringify(object)).setMimeType(ContentService.MimeType.JSON)
}
