// Single source of truth for contact and company details.
// Rows in `rekviziti` with an empty value are hidden on the Contact page.
export const COMPANY = {
  phone: '+371 00 000 000',
  phoneHref: 'tel:+37100000000',
  phoneIsPlaceholder: true,
  email: 'info@baterijastests.lv',
  serviceArea: 'Rīga un Rīgas reģions',
  hours: '',
  // Inquiry delivery. If `web3formsKey` is set, forms use Web3Forms (fast, recommended); the key is
  // emailed to the recipient when they enter their address at web3forms.com, and decides who receives
  // the inquiries. Otherwise they fall back to FormSubmit below (TESTING inbox, slow to answer).
  web3formsKey: '',
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
