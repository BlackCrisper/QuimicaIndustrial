import { company, values } from '../data/content'

export default function Sobre() {
  return (
    <section className="section sobre" id="sobre">
      <div className="container sobre-grid">
        <div className="sobre-copy">
          <span className="section-kicker">Quem somos</span>
          <h2 className="section-title">Execução de obras com mão de obra especializada</h2>
          <p className="section-lead">
            A {company.name} é uma prestadora de serviços especializada na execução de
            obras civis, industriais — caldeiraria e montagem mecânica —, prediais,
            estruturas em geral e reformas.
          </p>
          <p>
            Fundada em {company.founded}, a empresa aprimora continuamente sua atuação
            para atender o setor da construção civil e da indústria, com equipe
            qualificada e compromisso com o resultado da obra.
          </p>
          <p>
            Com base em três valores — qualidade, confiabilidade e solidez — tornou-se
            referência em Sergipe pelo compromisso com os clientes, pela solidez
            financeira e pela alta qualidade dos serviços.
          </p>
          <div className="values">
            {values.map((item) => (
              <article className="value-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="sobre-photo">
          <img
            className="crop crop-top"
            src="/images/galeria/hero.jpg"
            alt="Equipe da Química Maruim em manutenção industrial em Sergipe"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  )
}
