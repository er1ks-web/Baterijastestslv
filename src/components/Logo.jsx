// logo-light.webp is 1774x887. Both variants crop its empty margins:
// "full" keeps the car, battery and tagline; "wordmark" keeps only the name.
const CROPS = {
  full: { ratio: '1615 / 640', width: '109.85%', left: '-5.263%', top: '-20.31%' },
  wordmark: { ratio: '1620 / 210', width: '109.51%', left: '-5.556%', top: '-230.95%' },
}

export default function Logo({ variant = 'full', className = '' }) {
  const crop = CROPS[variant]

  return (
    <span
      role="img"
      aria-label="BaterijasTests.lv — baterijas veselības pārbaude (SOH)"
      className={`relative block shrink-0 overflow-hidden ${className}`}
      style={{ aspectRatio: crop.ratio }}
    >
      <img
        src="/logo-light.webp"
        alt=""
        className="absolute max-w-none"
        style={{ width: crop.width, left: crop.left, top: crop.top }}
      />
    </span>
  )
}
