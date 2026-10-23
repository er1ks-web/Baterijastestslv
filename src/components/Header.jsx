import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'

const NAV_LINKS = [
  { label: 'Kas ir SOH', to: '/kas-ir-soh' },
  { label: 'Uzņēmumiem', to: '/uznemumiem' },
  { label: 'Process', to: '/#process' },
  { label: 'Atskaite', to: '/#atskaite' },
  { label: 'Cenas', to: '/#cenas' },
  { label: 'Jautājumi', to: '/#buj' },
  { label: 'Kontakti', to: '/kontakti' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <header
      className={`sticky top-0 z-50 border-b backdrop-blur-xl backdrop-saturate-150 transition-all duration-300 ${
        open
          ? 'border-ink/10 bg-white/95'
          : scrolled
            ? 'border-ink/10 bg-white/65 shadow-[0_8px_30px_-14px_rgba(22,36,29,0.3)]'
            : 'border-transparent bg-white/75'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-2">
        <Link to="/" aria-label="Baterijastests.lv, uz sākumlapu">
          <Logo className="h-16 md:h-20" />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm font-medium text-ink/75 transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link
            to="/#pieteikties"
            className="rounded-md bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-700"
          >
            Pieteikties →
          </Link>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-md border border-ink/15 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Izvēlne"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-ink/10 px-5 pb-5 lg:hidden">
          <nav className="flex flex-col gap-1 pt-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={close}
                className="rounded-md px-2 py-2.5 text-sm font-medium text-ink/80 hover:bg-ink/5"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/#pieteikties"
              onClick={close}
              className="mt-2 rounded-md bg-brand-600 px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              Pieteikties →
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
