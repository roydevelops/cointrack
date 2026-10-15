// CoinTrack service worker: lets the app open without an internet connection.
// Your coins are not stored here. They stay in the browser's own storage (IndexedDB).
//
// Pages and files from cointrack.io: network first, so updates show up right away;
// the cached copy is used only when offline.
// Fonts and the PDF library (other sites): cached copy first, refreshed in the background.

const CACHE = 'cointrack-v1';
const APP_SHELL = [
    './',
    'index.html',
    'sponsors.html',
    'sponsors.js',
    'manifest.webmanifest',
    'icons/icon-192.png',
    'icons/icon-512.png',
    'icons/apple-touch-icon.png'
];
const CROSS_ORIGIN_CACHEABLE = ['fonts.googleapis.com', 'fonts.gstatic.com', 'cdnjs.cloudflare.com'];

self.addEventListener('install', (event) => {
    event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(APP_SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys()
            .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
            .then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', (event) => {
    const req = event.request;
    if (req.method !== 'GET') return;
    const url = new URL(req.url);

    if (url.origin === self.location.origin) {
        event.respondWith(
            fetch(req)
                .then(res => {
                    if (res.ok) {
                        const copy = res.clone();
                        caches.open(CACHE).then(cache => cache.put(req, copy));
                    }
                    return res;
                })
                .catch(() => caches.match(req, { ignoreSearch: true })
                    .then(hit => hit || (req.mode === 'navigate' ? caches.match('index.html') : Response.error())))
        );
        return;
    }

    if (CROSS_ORIGIN_CACHEABLE.includes(url.hostname)) {
        event.respondWith(
            caches.open(CACHE).then(cache => cache.match(req).then(hit => {
                const refresh = fetch(req).then(res => {
                    if (res.ok || res.type === 'opaque') cache.put(req, res.clone());
                    return res;
                }).catch(() => hit);
                return hit || refresh;
            }))
        );
    }
});
