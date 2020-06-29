const cacheName = 'dev-v1';
const precacheResources = [
    '/',
    '/index.html',
    '/style.css',
    '/main.js',
    '/fonts/3570bfe74a87405d74f3065d07cf3aea.ttf',
    '/pages/area.html',
    '/pages/home.html',
    '/pages/length.html',
    '/pages/mass.html',
    '/pages/temperature.html',
    '/pages/volume.html',
];

self.addEventListener('install', (event) => {
    console.log('Service worker install event');
    event.waitUntil(
        caches.open(cacheName).then((cache) => {
            return cache.addAll(precacheResources);
        })
    );
});

self.addEventListener('activate', (event) => {
    console.log('Service worker active event');
});

self.addEventListener('fetch', (event) => {
    console.log('Fetch intercepted for:', event.request.url);
    event.respondWith(
        caches.match(event.request).then((cachedRespond) => {
            if (cachedRespond) return cachedRespond;
            return fetch(event.request);
        })
    );
});
