import { useEffect, useState } from 'react'
import './Header.css'

const links = [
  { href: '#works', label: 'Работы' },
  { href: '#measure', label: 'Замер' },
  { href: '#cities', label: 'Города' },
  { href: '#contact', label: 'Заявка' },
]

export function Header() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className={`header${solid || open ? ' header--solid' : ''}`}>
      <div className="header__inner container">
        <a className="header__brand" href="#top" aria-label="Sandra MEBEL — наверх">
          SANDRA
        </a>

        <nav className="header__nav" aria-label="Основное меню">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="header__phone" href="tel:+79080571510">
          +7 (908) 057-15-10
        </a>

        <button
          className="header__menu"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">{open ? 'Закрыть меню' : 'Открыть меню'}</span>
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </div>

      {/*
        Do not use the HTML `hidden` attribute here — it fights opacity/visibility
        transitions and previously left a half-visible drawer over the hero.
      */}
      <div
        id="mobile-nav"
        className={`header__drawer${open ? ' is-open' : ''}`}
        aria-hidden={!open}
        inert={!open ? true : undefined}
      >
        <nav aria-label="Мобильное меню">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
              {link.label}
            </a>
          ))}
          <a
            href="tel:+79080571510"
            onClick={() => setOpen(false)}
            tabIndex={open ? 0 : -1}
          >
            +7 (908) 057-15-10
          </a>
        </nav>
      </div>
    </header>
  )
}
