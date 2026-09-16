import { company, whatsappUrl } from '../data/content'

export default function Hero() {
  const years = new Date().getFullYear() - company.founded

  return (
    <section className="hero" id="inicio">
      <div className="hero-media">
        <img
          src="/images/galeria/hero.jpg"
          alt="Planta industrial atendida pela Química Maruim em Sergipe"
          fetchPriority="high"
          decoding="async"
        />
      </div>
      <div className="hero-overlay" />
      <div className="hero-shape" aria-hidden="true" />
      <div className="container hero-content">
        <span className="section-kicker">Maruim · Sergipe</span>
        <h1>Obras civis, industriais e montagem mecânica</h1>
        <p>
          Caldeiraria, estruturas, reformas e manutenção com equipe especializada.
          Qualidade, confiabilidade e solidez desde {company.founded}.
        </p>
        <div className="hero-actions">
          <a className="btn btn-primary" href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
            Solicitar orçamento
          </a>
          <a className="btn btn-ghost" href="#servicos">
            Ver serviços
          </a>
        </div>
        <div className="hero-meta">
          <div>
            <strong>2018</strong>
            <span>Fundação da empresa</span>
          </div>
          <div>
            <strong>+{years} anos</strong>
            <span>Atendendo o setor industrial</span>
          </div>
          <div>
            <strong>SE</strong>
            <span>Referência em Sergipe</span>
          </div>
        </div>
      </div>
    </section>
  )
}
