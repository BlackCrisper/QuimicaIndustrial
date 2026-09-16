import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Servicos from './components/Servicos'
import Galeria from './components/Galeria'
import Clientes from './components/Clientes'
import Contato from './components/Contato'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <main>
        <Hero />
        <Sobre />
        <Servicos />
        <Galeria />
        <Clientes />
        <Contato />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
