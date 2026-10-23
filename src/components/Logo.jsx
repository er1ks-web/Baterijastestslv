// logo.webp is 1774x887; this crops the empty margins so it can be shown larger.
export default function Logo({ className = '' }) {
  return (
    <span
      role="img"
      aria-label="BaterijasTests.lv, baterijas veselības pārbaude (SOH)"
      className={`relative block shrink-0 overflow-hidden ${className}`}
      style={{ aspectRatio: '1615 / 640' }}
    >
      <img
        src={`${import.meta.env.BASE_URL}logo.webp`}
        alt=""
        className="absolute max-w-none"
        style={{ width: '109.85%', left: '-5.263%', top: '-20.31%' }}
      />
    </span>
  )
}
