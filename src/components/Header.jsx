import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const NAV_LINKS = [
  { label: 'Kā tas strādā', hash: '#ka-tas-strada' },
  { label: 'Ko jūs saņemat', hash: '#ko-sanemat' },
  { label: 'Cenas', hash: '#cenas' },
  { label: 'BUJ', hash: '#buj' },
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
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled ? 'border-ink/10 bg-paper/90 backdrop-blur' : 'border-transparent bg-paper'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-700 text-paper">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
              <rect x="2" y="7" width="18" height="12" rx="2.5" stroke="currentColor" strokeWidth="1.8" />
              <rect x="21" y="10.5" width="2" height="5" rx="1" fill="currentColor" />
              <path d="M12.5 9.5 L8 14.5 H11 L9.5 17.5 L14.5 12.5 H11.5 Z" fill="#ffab29" />
            </svg>
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-ink">
            Baterijas<span className="text-brand-600">tests</span>.lv
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.hash}
              href={link.hash}
              onClick={goToSection(link.hash)}
              className="text-sm font-medium text-ink/70 transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#pieteikties"
            onClick={goToSection('#pieteikties')}
            className="rounded-full bg-amber-500 px-5 py-2.5 text-sm font-semibold text-ink shadow-soft transition hover:bg-amber-400"
          >
            Pieteikties pārbaudei
          </a>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-ink/15 md:hidden"
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
                className="rounded-lg px-2 py-2.5 text-sm font-medium text-ink/80 hover:bg-ink/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#pieteikties"
              onClick={goToSection('#pieteikties')}
              className="mt-2 rounded-full bg-amber-500 px-5 py-2.5 text-center text-sm font-semibold text-ink"
            >
              Pieteikties pārbaudei
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
