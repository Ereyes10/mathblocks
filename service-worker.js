const CACHE_NAME = "mathblocks-cache-v7";

const FILES_TO_CACHE = [
    "/",                
    "/index.html",
    "/aprender.html",
    "/probar.html",
    "/explorar.html",
    "/programa.html",
    "/perfil.html",
    "/constructores.js",
    "/constructorManager.js",


    "/css/style.css",

    "/js/actividadesProbar.js",
    "/js/instrucciones.js",
    "/js/bloques.js",
    "/js/nfc.js",
    "/js/motor_guiado.js",
    "/js/temas_pm2.js",
    "/js/actividadesAprender.js",
    "/js/aprender/textosAprendizaje.js",
    "/js/aprender/popupsAprender.js",

    "/js/aprender/actividadesAprender_T1.js",
    "/js/aprender/actividadesAprender_T2.js",
    "/js/aprender/actividadesAprender_T3.js",
    "/js/aprender/actividadesAprender_T4.js",
    "/js/aprender/actividadesAprender_T5.js",
    "/js/aprender/actividadesAprender_T6.js",

    "/js/probar/actividadesProbar_T1.js",
    "/js/probar/actividadesProbar_T2.js",
    "/js/probar/actividadesProbar_T3.js",
    "/js/probar/actividadesProbar_T4.js",


    "/sounds/scan.wav",
    "/sounds/success.wav",

    "/img/icon-aprender.svg",
    "/img/icon-probar.svg",
    "/img/icon-explorar.svg",
    //"/img/icon-programa.svg",
    //"/img/icon-perfil.svg",

    "/img/Logo.svg",
    "/img/icon-192.png",
    "/img/icon-512.png",

    "/manifest.json",
    "/service-worker.js"  
 
];

// Install
self.addEventListener("install", event => {

    event.waitUntil(

        (async () => {

            const cache = await caches.open(CACHE_NAME);

            for (const file of FILES_TO_CACHE) {

                try {

                    const response = await fetch(file);

                    console.log("CACHE OK:", file, response.status);

                    if (!response.ok) {
                        throw new Error(`HTTP ${response.status}`);
                    }

                    await cache.put(file, response.clone());

                } catch (err) {

                    console.error("CACHE ERROR:", file, err);

                    throw err;
                }
            }

            console.log("CACHE COMPLETADO");

        })()

    );

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
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }

                return fetch(event.request)
                    .then(networkResponse => {

                        const clone = networkResponse.clone();

                        caches.open(CACHE_NAME)
                            .then(cache => cache.put(event.request, clone));

                        return networkResponse;
                    });
            })
            .catch(() => {
                if (event.request.mode === "navigate") {
                    return caches.match("/index.html");
                }

                return new Response("Offline", {
                    status: 503,
                    statusText: "Offline"
                });
            })
    );
});
