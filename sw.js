// Bump CACHE_VERSION whenever a file in PRECACHE changes (CSS, fonts, icons...).
// index.html is always fetched from the network first, so it doesn't need a bump.
const CACHE_VERSION = 'v1';
const CACHE_NAME = `cnatgpt-${CACHE_VERSION}`;

const PRECACHE = [
  './',
  './manifest.webmanifest',
  './public/css/tailwind.min.css',
  './public/fonts/inter-latin.woff2',
  './public/fonts/inter-latin-ext.woff2',
  './public/icons/icon.svg',
  './public/icons/favicon-32.png',
  './public/icons/apple-touch-icon.png',
  './public/icons/icon-192.png',
  './public/icons/icon-512.png',
  './public/icons/icon-maskable-512.png',
  './public/facebook-icon.svg',
  './public/x-icon.svg',
  './public/whatsapp-icon.svg',
  './public/linkedin-icon.svg',
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(PRECACHE))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(key => key.startsWith('cnatgpt-') && key !== CACHE_NAME).map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  const { request } = event;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    // Network-first: always serve the latest page when online, cached copy when offline.
    event.respondWith(
      fetch(request)
        .then(response => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then(cache => cache.put('./', copy));
          }
          return response;
        })
        .catch(() => caches.match('./'))
    );
    return;
  }

  // Cache-first for static assets.
  event.respondWith(
    caches.match(request).then(cached => cached || fetch(request).then(response => {
      if (response.ok) {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(request, copy));
      }
      return response;
    }))
  );
});
