import { useEffect, useState } from 'react'
import { company, siteImages } from '../data/content'
import { cacheImages } from '../lib/offline'

const MIN_MS = 1400
const MAX_MS = 9000

export default function LoadingScreen({ onDone }) {
  const [progress, setProgress] = useState(0)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    let cancelled = false
    let finished = false
    const started = Date.now()

    const finish = async () => {
      if (cancelled || finished) return
      finished = true
      const wait = Math.max(0, MIN_MS - (Date.now() - started))
      if (wait) await new Promise((resolve) => window.setTimeout(resolve, wait))
      if (cancelled) return
      setLeaving(true)
      window.setTimeout(() => {
        if (!cancelled) onDone()
      }, 420)
    }

    document.body.classList.add('is-booting')

    const timeout = window.setTimeout(finish, MAX_MS)

    cacheImages(siteImages, (value) => {
      if (!cancelled) setProgress(value)
    })
      .then(finish)
      .finally(() => window.clearTimeout(timeout))

    return () => {
      cancelled = true
      window.clearTimeout(timeout)
      document.body.classList.remove('is-booting')
    }
  }, [onDone])

  useEffect(() => {
    if (leaving) document.body.classList.remove('is-booting')
  }, [leaving])

  return (
    <div
      className={leaving ? 'loading-screen is-leaving' : 'loading-screen'}
      role="status"
      aria-live="polite"
      aria-busy={!leaving}
    >
      <div className="loading-card">
        <img src={company.logo} alt="" width="88" height="88" />
        <strong>Química Industrial</strong>
        <span>Serviços Maruim</span>
        <div className="loading-bar" aria-hidden="true">
          <span style={{ width: `${Math.max(progress, 8)}%` }} />
        </div>
        <p>{progress < 100 ? 'Carregando imagens…' : 'Pronto'}</p>
      </div>
    </div>
  )
}
