export const IMAGE_CACHE = 'qi-images-v1'

export function registerServiceWorker() {
  if (!import.meta.env.PROD || !('serviceWorker' in navigator)) {
    return Promise.resolve(null)
  }

  return navigator.serviceWorker.register('/sw.js').catch(() => null)
}

export async function cacheImages(urls, onProgress) {
  const unique = [...new Set(urls)]
  const total = unique.length || 1
  let done = 0
  const cache = 'caches' in window ? await caches.open(IMAGE_CACHE) : null

  const mark = () => {
    done += 1
    onProgress(Math.round((done / total) * 100))
  }

  await Promise.all(
    unique.map(async (url) => {
      try {
        if (cache) {
          const cached = await cache.match(url)
          if (cached) return
        }

        const response = await fetch(url, { credentials: 'same-origin' })
        if (cache && response.ok) {
          await cache.put(url, response.clone())
        }
      } catch {
        /* segue o loading mesmo se uma foto falhar */
      } finally {
        mark()
      }
    }),
  )
}
