import { useEffect, useMemo, useState } from 'react'
import { gallery, galleryFilters } from '../data/content'

function visibleCount() {
  if (typeof window === 'undefined') return 1
  if (window.matchMedia('(max-width: 700px)').matches) return 1
  if (window.matchMedia('(max-width: 980px)').matches) return 2
  return 3
}

export default function Galeria() {
  const [filter, setFilter] = useState('todos')
  const [slide, setSlide] = useState(0)
  const [lightbox, setLightbox] = useState(null)
  const [paused, setPaused] = useState(false)
  const [touchX, setTouchX] = useState(null)
  const [visible, setVisible] = useState(1)

  const items = useMemo(
    () => (filter === 'todos' ? gallery : gallery.filter((item) => item.category === filter)),
    [filter],
  )

  const maxStart = Math.max(0, items.length - visible)

  const goTo = (index) => {
    if (!items.length) return
    if (items.length <= visible) {
      setSlide(0)
      return
    }
    if (index < 0) {
      setSlide(maxStart)
      return
    }
    if (index > maxStart) {
      setSlide(0)
      return
    }
    setSlide(index)
  }

  const current = lightbox !== null ? items[lightbox] : null

  useEffect(() => {
    const sync = () => setVisible(visibleCount())
    sync()
    window.addEventListener('resize', sync)
    return () => window.removeEventListener('resize', sync)
  }, [])

  useEffect(() => {
    setSlide(0)
    setLightbox(null)
  }, [filter, visible])

  useEffect(() => {
    if (paused || lightbox !== null || items.length <= visible) return undefined
    const timer = window.setInterval(() => {
      setSlide((index) => (index >= maxStart ? 0 : index + 1))
    }, 4500)
    return () => window.clearInterval(timer)
  }, [paused, lightbox, items.length, filter, visible, maxStart])

  useEffect(() => {
    if (lightbox === null) return undefined
    const onKey = (event) => {
      if (event.key === 'Escape') setLightbox(null)
      if (event.key === 'ArrowRight') {
        const next = (lightbox + 1) % items.length
        setLightbox(next)
        setSlide(Math.min(next, maxStart))
      }
      if (event.key === 'ArrowLeft') {
        const prev = (lightbox - 1 + items.length) % items.length
        setLightbox(prev)
        setSlide(Math.min(prev, maxStart))
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [lightbox, items.length, maxStart])

  return (
    <section className="section galeria" id="galeria">
      <div className="container">
        <span className="section-kicker">Portfólio</span>
        <h2 className="section-title">Exemplos de serviços em campo</h2>
        <p className="section-lead">
          Seleção de obras civis, industriais e de impermeabilização realizadas pela equipe.
        </p>

        <div className="filters" role="tablist">
          {galleryFilters.map((item) => (
            <button
              key={item.id}
              type="button"
              className={filter === item.id ? 'is-active' : ''}
              onClick={() => setFilter(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div
          className="carousel"
          style={{ '--visible': visible }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {items.length > visible && (
            <button
              className="carousel-arrow prev"
              type="button"
              aria-label="Foto anterior"
              onClick={() => goTo(slide - 1)}
            >
              ‹
            </button>
          )}

          <div
            className="carousel-viewport"
            onTouchStart={(event) => setTouchX(event.changedTouches[0].clientX)}
            onTouchEnd={(event) => {
              if (touchX === null) return
              const delta = event.changedTouches[0].clientX - touchX
              if (delta > 40) goTo(slide - 1)
              if (delta < -40) goTo(slide + 1)
              setTouchX(null)
            }}
          >
            <div
              className="carousel-track"
              style={{
                transform: `translateX(calc(-${slide} * (100cqi + var(--gap)) / var(--visible)))`,
              }}
            >
              {items.map((item, index) => (
                <button
                  className="carousel-slide"
                  key={item.src}
                  type="button"
                  onClick={() => setLightbox(index)}
                >
                  <img src={item.src} alt={item.alt} />
                  <span>{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {items.length > visible && (
            <button
              className="carousel-arrow next"
              type="button"
              aria-label="Próxima foto"
              onClick={() => goTo(slide + 1)}
            >
              ›
            </button>
          )}

          {items.length > visible && (
            <div className="carousel-dots">
              {Array.from({ length: maxStart + 1 }, (_, index) => (
                <button
                  key={items[index].src}
                  type="button"
                  className={slide === index ? 'is-active' : ''}
                  aria-label={`Ir para foto ${index + 1}`}
                  onClick={() => goTo(index)}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {current && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" type="button" aria-label="Fechar">
            ×
          </button>
          <button
            className="lightbox-nav prev"
            type="button"
            aria-label="Foto anterior"
            onClick={(event) => {
              event.stopPropagation()
              const prev = (lightbox - 1 + items.length) % items.length
              setLightbox(prev)
              setSlide(Math.min(prev, maxStart))
            }}
          >
            ‹
          </button>
          <img src={current.src} alt={current.alt} onClick={(event) => event.stopPropagation()} />
          <button
            className="lightbox-nav next"
            type="button"
            aria-label="Próxima foto"
            onClick={(event) => {
              event.stopPropagation()
              const next = (lightbox + 1) % items.length
              setLightbox(next)
              setSlide(Math.min(next, maxStart))
            }}
          >
            ›
          </button>
          <p className="lightbox-caption">
            {current.label} — {current.alt}
          </p>
        </div>
      )}
    </section>
  )
}
