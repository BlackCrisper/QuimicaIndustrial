import { services } from '../data/content'

export default function Servicos() {
  return (
    <section className="section servicos" id="servicos">
      <div className="container">
        <span className="section-kicker">O que fazemos</span>
        <h2 className="section-title">Serviços civis, industriais e técnicos</h2>
        <p className="section-lead">
          Do canteiro à planta: construção, reforma, caldeiraria, montagem,
          impermeabilização e apoio técnico.
        </p>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.id}>
              <h3>{service.title}</h3>
              <p className="lead">{service.lead}</p>
              <ul>
                {service.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
