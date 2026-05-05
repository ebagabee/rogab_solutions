import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import logo from '../assets/logo.png'

const SHOW_CONTACT = true

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  const scrollToSection = (id) => {
    setMenuOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className={`header${scrolled ? ' scrolled' : ''}`}>
      <div className="container header-inner">
        <a
          className="logo"
          href="/"
          onClick={(e) => { e.preventDefault(); navigate('/') }}
        >
          <img src={logo} alt="Rogab Solutions" className="logo-img" />
          Rogab Solutions
        </a>

        <button
          className={`hamburger${menuOpen ? ' open' : ''}`}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>

        <nav className={`nav-links${menuOpen ? ' open' : ''}`}>
          {[
            { id: 'sobre',    label: 'Sobre'    },
            { id: 'servicos', label: 'Serviços' },
            { id: 'projetos', label: 'Projetos' },
            ...(SHOW_CONTACT ? [{ id: 'contato', label: 'Contato' }] : []),
          ].map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => { e.preventDefault(); scrollToSection(id) }}
            >
              {label}
            </a>
          ))}
          {SHOW_CONTACT && (
            <a
              className="nav-cta"
              href="#contato"
              onClick={(e) => { e.preventDefault(); scrollToSection('contato') }}
            >
              Fale conosco
            </a>
          )}
        </nav>
      </div>
    </header>
  )
}
