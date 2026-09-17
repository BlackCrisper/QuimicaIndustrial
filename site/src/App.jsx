import { useCallback, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Sobre from './components/Sobre'
import Servicos from './components/Servicos'
import Galeria from './components/Galeria'
import Clientes from './components/Clientes'
import Contato from './components/Contato'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import LoadingScreen from './components/LoadingScreen'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [ready, setReady] = useState(false)
  const finishBoot = useCallback(() => setReady(true), [])

  return (
    <>
      {!ready && <LoadingScreen onDone={finishBoot} />}
      <div aria-hidden={!ready}>
        <a className="skip-link" href="#conteudo">
          Ir para o conteúdo
        </a>
        <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <main id="conteudo">
          <Hero />
          <Sobre />
          <Servicos />
          <Galeria />
          <Clientes />
          <Contato />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </>
  )
}
