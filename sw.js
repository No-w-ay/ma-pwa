const cacheName = 'pwa-v1';
const assets = ['/', '/index.html', '/style.css'];

// Installation du Service Worker
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => cache.addAll(assets))
  );
});

// Intercepter les requêtes pour servir le cache
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
