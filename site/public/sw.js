const VERSION = 'v1'
const SHELL_CACHE = `qi-shell-${VERSION}`
const IMAGE_CACHE = `qi-images-${VERSION}`

const SHELL_URLS = ['/', '/index.html', '/site.webmanifest']

const IMAGE_URLS = [
  '/images/logo/logo.jpeg',
  '/images/galeria/hero.jpg',
  '/images/galeria/esmerilhamento.jpg',
  '/images/galeria/vasos-tubulacao.jpg',
  '/images/galeria/redutor-montagem.jpg',
  '/images/galeria/gearbox-instalacao.jpg',
  '/images/galeria/planta-industrial.jpg',
  '/images/galeria/vasos-pressao.jpg',
  '/images/galeria/estrutura-metalica.jpg',
  '/images/galeria/pintura-predial.jpg',
  '/images/galeria/recuperacao-estrutural.jpg',
  '/images/galeria/equipe-andaime.jpg',
  '/images/galeria/plataforma-elevatoria.jpg',
  '/images/galeria/estrutura-armadura.jpg',
  '/images/galeria/equipe-plataforma.jpg',
  '/images/galeria/manta-aplicacao.jpg',
  '/images/galeria/manta-arremate.jpg',
  '/images/galeria/manta-coluna.jpg',
  '/images/clientes/concrejato.png',
  '/images/clientes/sisa.png',
  '/images/clientes/rifertil.png',
  '/images/clientes/usi-fertil.png',
  '/images/clientes/mizu.png',
  '/images/clientes/biosafra.png',
  '/images/clientes/taquari.png',
  '/images/clientes/sabe.png',
]

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const shell = await caches.open(SHELL_CACHE)
      await Promise.allSettled(SHELL_URLS.map((url) => shell.add(url)))

      const images = await caches.open(IMAGE_CACHE)
      await Promise.allSettled(IMAGE_URLS.map((url) => images.add(url)))

      await self.skipWaiting()
    })(),
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keep = new Set([SHELL_CACHE, IMAGE_CACHE])
      const keys = await caches.keys()
      await Promise.all(keys.filter((key) => !keep.has(key)).map((key) => caches.delete(key)))
      await self.clients.claim()
    })(),
  )
})

self.addEventListener('fetch', (event) => {
  const request = event.request
  if (request.method !== 'GET') return

  const url = new URL(request.url)

  if (url.origin !== self.location.origin) {
    if (/^https:\/\/fonts\.(?:googleapis|gstatic)\.com$/i.test(url.origin)) {
      event.respondWith(staleWhileRevalidate(request, SHELL_CACHE))
    }
    return
  }

  if (request.destination === 'image' || url.pathname.startsWith('/images/')) {
    event.respondWith(cacheFirst(request, IMAGE_CACHE))
    return
  }

  if (request.mode === 'navigate') {
    event.respondWith(networkFirst(request, SHELL_CACHE))
    return
  }

  event.respondWith(staleWhileRevalidate(request, SHELL_CACHE))
})

async function cacheFirst(request, cacheName) {
  const cache = await caches.open(cacheName)
  const cached = await cache.match(request)
  if (cached) return cached

  try {
    const response = await fetch(request)
    if (response.ok) await cache.put(request, response.clone())
    return response
  } catch (error) {
    if (cached) return cached
    throw error
  }
}

async function networkFirst(request, cacheName) {
  const cache = await caches.open(cacheName)
  try {
    const response = await fetch(request)
    if (response.ok) await cache.put(request, response.clone())
    return response
  } catch (error) {
    const cached = (await cache.match(request)) || (await cache.match('/')) || (await cache.match('/index.html'))
    if (cached) return cached
    throw error
  }
}

async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName)
  const cached = await cache.match(request)
  const network = fetch(request)
    .then((response) => {
      if (response.ok) cache.put(request, response.clone())
      return response
    })
    .catch(() => cached)

  return cached || network
}
