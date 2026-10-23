// Single source of truth for contact and company details.
// Empty strings in `rekviziti` show as "[jāaizpilda]" on the Contact page until filled in.
export const COMPANY = {
  phone: '+371 00 000 000',
  phoneHref: 'tel:+37100000000',
  phoneIsPlaceholder: true,
  email: 'info@baterijastests.lv',
  serviceArea: 'Rīga un Rīgas reģions',
  hours: '',
  rekviziti: {
    name: '',
    regNo: '',
    vatNo: '',
    address: '',
    bank: '',
    account: '',
  },
}
