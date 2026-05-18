const CACHE_NAME = 'need4speedkarachi-v15'
const APP_SCOPE = new URL(self.registration.scope).pathname
const SHOULD_DISABLE_SW = ['localhost', '127.0.0.1'].includes(self.location.hostname)
const APP_ASSETS = [
  APP_SCOPE,
  `${APP_SCOPE}manifest.webmanifest`,
  `${APP_SCOPE}icons/app-icon.svg`,
  `${APP_SCOPE}icons/app-maskable.svg`,
  `${APP_SCOPE}icons/app-icon-192.png`,
  `${APP_SCOPE}icons/app-icon-512.png`,
]

self.addEventListener('install', (event) => {
  if (SHOULD_DISABLE_SW) {
    event.waitUntil(self.skipWaiting())
    return
  }
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_ASSETS)))
  self.skipWaiting()
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) =>
        Promise.all(keys.filter((key) => SHOULD_DISABLE_SW || key !== CACHE_NAME).map((key) => caches.delete(key))),
      )
      .then(() => self.clients.claim())
      .then(() => {
        if (!SHOULD_DISABLE_SW) return undefined
        return self.registration.unregister().then(() =>
          self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clients) => {
            clients.forEach((client) => client.navigate(client.url))
          }),
        )
      }),
  )
})

self.addEventListener('fetch', (event) => {
  if (SHOULD_DISABLE_SW) return
  if (event.request.method !== 'GET') return

  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          const responseClone = response.clone()
          caches.open(CACHE_NAME).then((cache) => cache.put(APP_SCOPE, responseClone))
          return response
        })
        .catch(() => caches.match(APP_SCOPE) || caches.match(event.request)),
    )
    return
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      const networkFetch = fetch(event.request)
        .then((response) => {
          if (!response || response.status !== 200) return response
          const responseClone = response.clone()
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, responseClone))
          return response
        })
        .catch(() => cached || caches.match(APP_SCOPE))

      return cached || networkFetch
    }),
  )
})
