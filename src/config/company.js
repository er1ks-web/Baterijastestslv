// Single source of truth for contact and company details.
// Rows in `rekviziti` with an empty value are hidden on the Contact page.
export const COMPANY = {
  phone: '+371 00 000 000',
  phoneHref: 'tel:+37100000000',
  phoneIsPlaceholder: true,
  email: 'baterijastests@gmail.com',
  serviceArea: 'Rīga un Rīgas reģions',
  hours: '',
  // Inquiries go to a Google Sheet through this Apps Script web app (see google-apps-script/Code.gs).
  // `sheetsSecret` must match SECRET in that script.
  sheetsEndpoint: 'https://script.google.com/macros/s/AKfycbzMpes25I8E9TEAo1_0KtwhY9ahFRCmja80qHhC8q7MYSmlQwCzQILhZ_c4X6jRMlA2RQ/exec',
  sheetsSecret: '53d82d01e21949bfbbb2a50d',
  rekviziti: {
    name: 'Strada Group SIA',
    regNo: '40203630950',
    vatNo: '',
    address: '',
    bank: '',
    account: '',
  },
}
