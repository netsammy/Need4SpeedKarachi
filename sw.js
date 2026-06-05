const APP_CACHE = 'n4s-karachi-app-v1.6.0'
const RUNTIME_CACHE = 'n4s-karachi-runtime-v1.6.0'
const APP_SCOPE = '/Need4SpeedKarachi/'
const APP_SHELL = [
  APP_SCOPE,
  `${APP_SCOPE}manifest.webmanifest`,
  `${APP_SCOPE}privacy.html`,
  `${APP_SCOPE}icons/app-icon-192.png`,
  `${APP_SCOPE}icons/app-icon-512.png`,
]

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches
      .open(APP_CACHE)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting()),
  )
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((key) => ![APP_CACHE, RUNTIME_CACHE].includes(key))
            .map((key) => caches.delete(key)),
        ),
      )
      .then(() => self.clients.claim()),
  )
})

self.addEventListener('fetch', (event) => {
  const request = event.request

  if (request.method !== 'GET') {
    return
  }

  const url = new URL(request.url)
  if (url.origin !== self.location.origin || !url.pathname.startsWith(APP_SCOPE)) {
    return
  }

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone()
          caches.open(APP_CACHE).then((cache) => cache.put(APP_SCOPE, copy))
          return response
        })
        .catch(() => caches.match(APP_SCOPE)),
    )
    return
  }

  event.respondWith(
    caches.match(request).then((cached) => {
      if (cached) {
        return cached
      }

      return fetch(request).then((response) => {
        if (response.ok) {
          const copy = response.clone()
          caches.open(RUNTIME_CACHE).then((cache) => cache.put(request, copy))
        }
        return response
      })
    }),
  )
})
