import { company, navLinks, whatsappUrl } from '../data/content'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-brand">{company.shortName}</p>
          <p>
            {company.name}. CNPJ {company.cnpj}.
          </p>
          <address>
            {company.address}
            <br />
            {company.city} · CEP {company.cep}
          </address>
        </div>
        <nav aria-label="Rodapé">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <div>
          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
            WhatsApp {company.phone}
          </a>
          <a href={`mailto:${company.email}`}>{company.email}</a>
        </div>
      </div>
      <div className="container footer-copy">
        <p>© {new Date().getFullYear()} {company.name}. Maruim · Sergipe.</p>
      </div>
    </footer>
  )
}
