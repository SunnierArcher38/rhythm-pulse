const CACHE_NAME = 'rhythm-pulse-v5';

self.addEventListener('install', (e) => {
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  if (e.request.url.includes('api.audius.co') || e.request.url.includes('api.jamendo.com') || e.request.url.includes('api.deezer.com')) return;
  
  const url = new URL(e.request.url);
  const isMainPage = url.pathname === '/' || url.pathname.endsWith('index.html');
  
  if (isMainPage) {
    e.respondWith(
      fetch(e.request, { cache: 'no-cache' }).catch(() => caches.match(e.request))
    );
  } else {
    e.respondWith(
      caches.match(e.request).then((cached) => {
        if (cached) return cached;
        return fetch(e.request).then((response) => {
          if (!response.ok || response.status !== 200) return response;
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(e.request, clone));
          return response;
        });
      }).catch(() => caches.match('/index.html'))
    );
  }
});
