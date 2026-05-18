const clearAllCaches = () =>
  caches.keys().then((keys) => Promise.all(keys.map((key) => caches.delete(key))))

self.addEventListener('install', (event) => {
  event.waitUntil(clearAllCaches().then(() => self.skipWaiting()))
})

self.addEventListener('activate', (event) => {
  event.waitUntil(
    clearAllCaches()
      .then(() => self.clients.claim())
      .then(() => self.registration.unregister())
      .then(() => self.clients.matchAll({ type: 'window', includeUncontrolled: true }))
      .then((clients) => {
        clients.forEach((client) => client.navigate(client.url))
      }),
  )
})

self.addEventListener('fetch', () => {
  return undefined
})
