import { clients } from '../data/content'

export default function Clientes() {
  return (
    <section className="section clientes" id="clientes">
      <div className="container">
        <span className="section-kicker">Quem já contratou</span>
        <h2 className="section-title">Clientes e parceiros</h2>
        <p className="section-lead">
          Empresas da indústria, da construção e do agronegócio em Sergipe e região.
        </p>
        <div className="client-grid">
          {clients.map((client) => (
            <article className="client-card" key={client.name}>
              <div className="client-logo">
                <img src={client.src} alt="" loading="lazy" decoding="async" />
              </div>
              <p>{client.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
