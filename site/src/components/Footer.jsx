import { company } from '../data/content'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} {company.name}. CNPJ {company.cnpj}.
        </p>
        <p>Maruim · Sergipe</p>
      </div>
    </footer>
  )
}
