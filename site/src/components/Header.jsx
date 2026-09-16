import { company, navLinks, whatsappUrl } from '../data/content'

export default function Header({ menuOpen, setMenuOpen }) {
  const close = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <div className="container header-inner">
        <a className="brand" href="#inicio" onClick={close}>
          <img src={company.logo} alt={company.name} width="52" height="52" />
          <span className="brand-text">
            <strong>Química Industrial</strong>
            <span>Serviços Maruim</span>
          </span>
        </a>

        <button
          className={menuOpen ? 'menu-toggle is-open' : 'menu-toggle'}
          type="button"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={menuOpen ? 'nav is-open' : 'nav'} aria-label="Principal">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={close}>
              {link.label}
            </a>
          ))}
          <a
            className="btn btn-primary nav-cta"
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
          >
            Orçamento
          </a>
        </nav>
      </div>
    </header>
  )
}
