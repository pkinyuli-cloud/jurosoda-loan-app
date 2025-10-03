self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('loan-cache').then((cache) => {
      return cache.addAll([
        '/loan.html',
        '/manifest.json',
        '/icon.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});