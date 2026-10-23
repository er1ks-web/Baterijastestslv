import { useState } from 'react'
import { Link } from 'react-router-dom'

// Capacity (kWh) and WLTP range (km) are rounded manufacturer figures.
const MODELS = [
  { key: 'tesla3', name: 'Tesla Model 3 LR', kwh: 75, km: 560 },
  { key: 'leaf40', name: 'Nissan Leaf 40', kwh: 40, km: 270 },
  { key: 'leaf62', name: 'Nissan Leaf e+ 62', kwh: 62, km: 385 },
  { key: 'id4', name: 'VW ID.4 Pro', kwh: 77, km: 520 },
  { key: 'kona', name: 'Hyundai Kona 64', kwh: 64, km: 484 },
  { key: 'eniro', name: 'Kia e-Niro 64', kwh: 64, km: 455 },
  { key: 'zoe', name: 'Renault Zoe 52', kwh: 52, km: 395 },
  { key: 'i3', name: 'BMW i3 42', kwh: 42, km: 308 },
  { key: 'egolf', name: 'VW e-Golf 36', kwh: 35.8, km: 231 },
]

const BANDS = [
  {
    min: 90,
    label: 'Lieliski',
    bar: 'bg-brand-500',
    badge: 'bg-brand-500/20 text-charge-200',
    title: 'Gandrīz kā jauns akumulators',
    text: 'Kapacitātes zudums ir niecīgs. Pārbaude šādam auto parasti apstiprina pārdevēja teikto.',
  },
  {
    min: 80,
    label: 'Labi',
    bar: 'bg-lime-500',
    badge: 'bg-lime-500/20 text-lime-300',
    title: 'Normāls nolietojums 3–6 gadus vecam auto',
    text: 'Atšķirība starp 81% un 89% var nozīmēt simtiem līdz tūkstošiem eiro — vērts zināt precīzu skaitli.',
  },
  {
    min: 70,
    label: 'Vidēji',
    bar: 'bg-amber-500',
    badge: 'bg-amber-500/20 text-amber-300',
    title: 'Zudums jau jūtams ikdienā',
    text: 'Īpaši ziemā. Tas ir pamats sarunām par cenu — un laiks pārbaudīt garantijas nosacījumus.',
  },
  {
    min: 0,
    label: 'Zems',
    bar: 'bg-red-600',
    badge: 'bg-red-500/20 text-red-300',
    title: 'Ievērojams nolietojums',
    text: 'Jārēķinās ar ierobežotu nobraukumu un iespējamu akumulatora nomaiņu nākotnē.',
  },
]

const fmt = (n, digits = 0) =>
  n.toLocaleString('lv-LV', { minimumFractionDigits: digits, maximumFractionDigits: digits })

export default function SohCalculator() {
  const [modelKey, setModelKey] = useState('tesla3')
  const [soh, setSoh] = useState(88)
  const [price, setPrice] = useState('18000')

  const model = MODELS.find((m) => m.key === modelKey)
  const band = BANDS.find((b) => soh >= b.min)

  const capacityNow = (model.kwh * soh) / 100
  const rangeNow = Math.round((model.km * soh) / 100)
  const rangeWinter = Math.round(rangeNow * 0.75)

  // Simplified: battery ~30% of car value; the part below 80% SOH counts double.
  const priceNum = Number(price) || 0
  const lossShare = (0.3 * (100 - soh + Math.max(0, 80 - soh))) / 100
  const priceLoss = Math.round((priceNum * lossShare) / 50) * 50

  const bars = [
    { label: 'Kad auto bija jauns', km: model.km, color: 'bg-paper/85' },
    { label: 'Tagad, ar pilnu uzlādi', km: rangeNow, color: band.bar },
    { label: 'Ziemā, reāli', km: rangeWinter, color: `${band.bar} opacity-60` },
  ]

  return (
    <div className="overflow-hidden rounded-lg border border-ink/10 bg-surface shadow-soft md:grid md:grid-cols-[1fr_1.05fr]">
      <div className="space-y-8 p-6 sm:p-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-ink/60">1 · Izvēlieties modeli</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {MODELS.map((m) => (
              <button
                key={m.key}
                type="button"
                aria-pressed={m.key === modelKey}
                onClick={() => setModelKey(m.key)}
                className={`rounded-md border px-3 py-1.5 text-sm transition ${
                  m.key === modelKey
                    ? 'border-charge-200 bg-charge-200 font-medium text-night'
                    : 'border-ink/15 text-ink/80 hover:border-ink/40'
                }`}
              >
                {m.name}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-end justify-between">
            <label htmlFor="soh-range" className="text-xs font-semibold uppercase tracking-wide text-ink/60">
              2 · Akumulatora stāvoklis (SOH)
            </label>
            <span className="font-display text-3xl font-semibold leading-none text-ink">{soh}%</span>
          </div>
          <input
            id="soh-range"
            type="range"
            min="60"
            max="100"
            step="1"
            value={soh}
            onChange={(e) => setSoh(Number(e.target.value))}
            className="mt-4 h-2 w-full cursor-pointer accent-charge-300"
          />
          <div className="mt-1 flex justify-between text-xs text-ink/55">
            {[60, 70, 80, 90, 100].map((t) => (
              <span key={t}>{t}%</span>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="car-price" className="text-xs font-semibold uppercase tracking-wide text-ink/60">
            3 · Auto cena
          </label>
          <div className="mt-3 flex max-w-[12rem] items-center rounded-md border border-ink/15 focus-within:border-brand-500">
            <span className="pl-3 text-ink/55">€</span>
            <input
              id="car-price"
              type="number"
              inputMode="numeric"
              min="0"
              step="500"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              className="w-full bg-transparent px-2 py-2.5 text-ink outline-none"
            />
          </div>
        </div>

        <div className="rounded-md border border-ink/10 bg-canvas p-4">
          <span className={`inline-block rounded px-2 py-0.5 text-xs font-semibold ${band.badge}`}>{band.label}</span>
          <p className="mt-2 font-display font-semibold text-ink">{band.title}</p>
          <p className="mt-1 text-sm leading-relaxed text-ink/75">{band.text}</p>
        </div>
      </div>

      <div className="bg-night p-6 text-paper sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-wide text-paper/45">{model.name}</p>

        <div className="mt-4 flex items-center gap-1.5">
          <div className="h-14 flex-1 rounded-lg border-[3px] border-paper/30 p-1">
            <div className={`h-full rounded-md transition-all duration-300 ${band.bar}`} style={{ width: `${soh}%` }} />
          </div>
          <div className="h-6 w-1.5 rounded-r bg-paper/30" />
        </div>
        <p className="mt-2 text-xs text-paper/45">
          SOH {soh}% · zaudēts no jauna akumulatora: {100 - soh}%
        </p>

        <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-paper/10 pt-5">
          <div>
            <dt className="text-xs text-paper/45">Ietilpība tagad</dt>
            <dd className="mt-1 font-display text-2xl font-semibold">{fmt(capacityNow, 1)} kWh</dd>
            <p className="text-xs text-paper/40">bija jaunam: {fmt(model.kwh, model.kwh % 1 ? 1 : 0)} kWh</p>
          </div>
          <div>
            <dt className="text-xs text-paper/45">Nobraukums ar pilnu uzlādi</dt>
            <dd className="mt-1 font-display text-2xl font-semibold">{fmt(rangeNow)} km</dd>
            <p className="text-xs text-paper/40">−{fmt(model.km - rangeNow)} km salīdzinājumā ar jaunu auto</p>
          </div>
        </dl>

        <div className="mt-6 space-y-3 border-t border-paper/10 pt-5">
          {bars.map((b) => (
            <div key={b.label}>
              <div className="flex justify-between text-xs">
                <span className="text-paper/60">{b.label}</span>
                <span className="font-medium text-paper">{fmt(b.km)} km</span>
              </div>
              <div className="mt-1.5 h-2 rounded-full bg-paper/10">
                <div
                  className={`h-full rounded-full transition-all duration-300 ${b.color}`}
                  style={{ width: `${(b.km / model.km) * 100}%` }}
                />
              </div>
            </div>
          ))}
          <p className="text-xs text-paper/40">Ziemā salons un sals paņem aptuveni ceturto daļu no nobraukuma.</p>
        </div>

        <div className="mt-6 rounded-md bg-paper/[0.06] p-4">
          <p className="text-xs text-paper/45">Aptuvenais vērtības samazinājums</p>
          <p className="mt-1 font-display text-3xl font-semibold text-charge-200">
            {priceNum > 0 ? `≈ €${fmt(priceLoss)}` : '—'}
          </p>
          <p className="mt-1 text-xs leading-relaxed text-paper/40">
            Orientējošs aprēķins: pieņemts, ka akumulators ir ap 30% no auto vērtības, bet zem 80% SOH zaudējums
            tiek skaitīts divkārši. Precīzu skaitli dod mērījums.
          </p>
        </div>

        <Link
          to="/#pieteikties"
          className="mt-6 inline-block rounded-md bg-charge-200 px-6 py-3 text-sm font-semibold text-night transition hover:bg-charge-100"
        >
          Uzzināt sava auto reālo SOH
        </Link>
      </div>
    </div>
  )
}
