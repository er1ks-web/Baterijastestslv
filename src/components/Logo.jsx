export default function Logo({ variant = 'wordmark', className = '' }) {
  if (variant === 'full') {
    return <img src="/logo.webp" alt="BaterijasTests.lv — baterijas veselības pārbaude (SOH)" className={className} />
  }

  return (
    <span
      role="img"
      aria-label="BaterijasTests.lv"
      className={`relative block shrink-0 overflow-hidden ${className}`}
      style={{ aspectRatio: '1620 / 210' }}
    >
      <img
        src="/logo.webp"
        alt=""
        className="absolute max-w-none"
        style={{ width: '109.51%', left: '-5.556%', top: '-230.95%' }}
      />
    </span>
  )
}
