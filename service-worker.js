const FREUD_CACHE = "freud-cache-v1";

const urlsToCache = [
    "./",
    "./index.html",
    "./icon-1024.png"
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(FREUD_CACHE).then((cache) => {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});