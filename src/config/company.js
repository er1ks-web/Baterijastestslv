// Single source of truth for contact and company details.
// Rows in `rekviziti` with an empty value are hidden on the Contact page.
export const COMPANY = {
  phone: '+371 00 000 000',
  phoneHref: 'tel:+37100000000',
  phoneIsPlaceholder: true,
  email: 'info@baterijastests.lv',
  serviceArea: 'Rīga un Rīgas reģions',
  hours: '',
  // TESTING: inquiries go to this inbox via FormSubmit. Change the address (or the whole URL)
  // to the real recipient before launch. The first submission triggers a one-time activation email.
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
