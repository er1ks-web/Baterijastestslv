import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Logo from './Logo.jsx'

const NAV_LINKS = [
  { label: 'Process', hash: '#process' },
  { label: 'Atskaite', hash: '#atskaite' },
  { label: 'Cenas', hash: '#cenas' },
  { label: 'Jautājumi', hash: '#buj' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goToSection = (hash) => (e) => {
    e.preventDefault()
    setOpen(false)
    if (location.pathname !== '/') {
      navigate('/' + hash)
      return
    }
    const el = document.querySelector(hash)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`sticky top-0 z-50 border-b bg-white transition-colors ${
        scrolled ? 'border-ink/10' : 'border-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-2">
        <Link to="/" aria-label="Baterijastests.lv — sākums">
          <Logo className="h-16 md:h-20" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.hash}
              href={link.hash}
              onClick={goToSection(link.hash)}
              className="text-sm font-medium text-ink/60 transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#pieteikties"
            onClick={goToSection('#pieteikties')}
            className="rounded-md bg-ink px-5 py-2.5 text-sm font-semibold text-charge-200 transition hover:bg-brand-800"
          >
            Pieteikties →
          </a>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-md border border-ink/15 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Izvēlne"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="border-t border-ink/10 bg-paper px-5 pb-5 md:hidden">
          <nav className="flex flex-col gap-1 pt-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.hash}
                href={link.hash}
                onClick={goToSection(link.hash)}
                className="rounded-md px-2 py-2.5 text-sm font-medium text-ink/80 hover:bg-ink/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#pieteikties"
              onClick={goToSection('#pieteikties')}
              className="mt-2 rounded-md bg-ink px-5 py-2.5 text-center text-sm font-semibold text-charge-200"
            >
              Pieteikties →
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
