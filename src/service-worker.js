const CACHE_NAME = 'dev-v1';
const precacheResources = [
    '/',
    '/index.html',
    '/style.css',
    '/main.js',
    '/service-worker.js',
    '/manifest.json',
    '/fonts/3570bfe74a87405d74f3065d07cf3aea.ttf',
    '/fonts/4a03f967ab2acff6658734833726789f.woff2',
    '/images/convert-units.png',
    '/images/materialize.png',
    '/images/favicons/apple-touch-icon.png',
    '/images/favicons/browserconfig.xml',
    '/images/favicons/favicon.ico',
    '/images/favicons/favicon-16x16.png',
    '/images/favicons/favicon-32x32.png',
    '/images/favicons/mstile-150x150.png',
    '/images/favicons/safari-pinned-tab.svg',
    '/images/icons/icon-72x72.png',
    '/images/icons/icon-96x96.png',
    '/images/icons/icon-128x128.png',
    '/images/icons/icon-144x144.png',
    '/images/icons/icon-152x152.png',
    '/images/icons/icon-192x192.png',
    '/images/icons/icon-384x384.png',
    '/images/icons/icon-512x512.png',
    '/pages/area.html',
    '/pages/about.html',
    '/pages/home.html',
    '/pages/length.html',
    '/pages/mass.html',
    '/pages/temperature.html',
    '/pages/volume.html',
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(precacheResources);
        })
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName != CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedRespond) => {
            if (cachedRespond) return cachedRespond;
            return fetch(event.request);
        })
    );
});
