const CACHE_NAME = "mathblocks-cache-v3";

const FILES_TO_CACHE = [
    "/",                
    "/index.html",
    "/aprender.html",
    "/probar.html",
    "/explorar.html",
    "/programa.html",
    "/perfil.html",

    "/css/style.css",

    "/js/bloques.js",
    "/js/nfc.js",
    "/js/motor_guiado.js",
    "/js/temas_pm2.js",
    "/js/actividades.js",

    "/img/logo.svg",
    "/img/icon-192.png",
    "/img/icon-512.png",

    "/manifest.json",
    "/service-worker.js"  
];

// Install
self.addEventListener("install", event => {
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => cache.addAll(FILES_TO_CACHE))
    );
    self.skipWaiting();
});

// Activate
self.addEventListener("activate", event => {
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(
                keys.map(key => {
                    if (key !== CACHE_NAME) {
                        return caches.delete(key);
                    }
                })
            )
        )
    );
    self.clients.claim();
});

// Fetch
self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
