const CACHE_NAME = 'dev-v1';
const precacheResources = [
    '/',
    '/index.html',
    '/style.css',
    '/main.js',
    '/fonts/3570bfe74a87405d74f3065d07cf3aea.ttf',
    '/images/convert-units.png',
    '/images/materialize.png',
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
