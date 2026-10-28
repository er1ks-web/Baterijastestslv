// Single source of truth for contact and company details.
// Rows in `rekviziti` with an empty value are hidden on the Contact page.
export const COMPANY = {
  phone: '+371 00 000 000',
  phoneHref: 'tel:+37100000000',
  phoneIsPlaceholder: true,
  email: 'info@baterijastests.lv',
  serviceArea: 'Rīga un Rīgas reģions',
  hours: '',
  // Inquiry delivery, in order of preference:
  // 1. `sheetsEndpoint`: the Google Apps Script web app link (see google-apps-script/Code.gs).
  //    `sheetsSecret` must match SECRET in that script.
  // 2. `web3formsKey`: emailed to the address the key was created for.
  // 3. `formEndpoint` (FormSubmit): emailed, but its replies are slow.
  sheetsEndpoint: '',
  sheetsSecret: '53d82d01e21949bfbbb2a50d',
  web3formsKey: '84422917-2626-0746-b139-ca2bb6187085',
  formEndpoint: 'https://formsubmit.co/ajax/rxstrazdins@gmail.com',
  rekviziti: {
    name: 'Strada Group SIA',
    regNo: '40203630950',
    vatNo: '',
    address: '',
    bank: '',
    account: '',
  },
}
