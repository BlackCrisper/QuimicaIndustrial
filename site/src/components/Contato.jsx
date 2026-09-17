import { useState } from 'react'
import { company, whatsappUrl } from '../data/content'

const initialForm = {
  name: '',
  email: '',
  service: 'Civil',
  message: '',
}

export default function Contato() {
  const [form, setForm] = useState(initialForm)

  const onChange = (event) => {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
  }

  const onSubmit = (event) => {
    event.preventDefault()
    const text = [
      'Olá! Gostaria de um orçamento.',
      `Nome: ${form.name}`,
      `E-mail: ${form.email}`,
      `Serviço: ${form.service}`,
      form.message ? `Mensagem: ${form.message}` : '',
    ]
      .filter(Boolean)
      .join('\n')
    window.open(whatsappUrl(text), '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="section contato" id="contato">
      <div className="container">
        <span className="section-kicker">Fale conosco</span>
        <h2 className="section-title">Solicite um orçamento</h2>
        <p className="section-lead">
          Atendimento direto pelo WhatsApp. Envie os dados da obra e retornamos com a equipe.
        </p>

        <div className="contato-grid">
          <div className="info-list">
            <address>
              <h3>Endereço</h3>
              <p>
                {company.address}
                <br />
                {company.city} · CEP {company.cep}
              </p>
            </address>
            <div>
              <h3>WhatsApp</h3>
              <p>
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer">
                  {company.phone}
                </a>
              </p>
            </div>
            <div>
              <h3>E-mail</h3>
              <p>
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </p>
            </div>
            <div>
              <h3>CNPJ</h3>
              <p>{company.cnpj}</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={onSubmit}>
            <label htmlFor="name">Nome</label>
            <input
              id="name"
              name="name"
              autoComplete="name"
              value={form.name}
              onChange={onChange}
              required
            />

            <label htmlFor="email">E-mail</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              inputMode="email"
              value={form.email}
              onChange={onChange}
              required
            />

            <label htmlFor="service">Serviço</label>
            <select id="service" name="service" value={form.service} onChange={onChange}>
              <option>Civil</option>
              <option>Industrial</option>
              <option>Impermeabilização</option>
              <option>Laudos e projetos</option>
              <option>Outro</option>
            </select>

            <label htmlFor="message">Mensagem</label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={onChange}
              placeholder="Descreva o serviço, o local da obra e o prazo desejado."
            />

            <button className="btn btn-primary" type="submit">
              Enviar pelo WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
