// Instalación del evento del service worker
self.addEventListener('install', (event) => {
    // Espera a que se complete la instalación
    event.waitUntil(
        // Abre una cache llamada pwa-cache-v1
        caches.open('pwa-cache-v1').then((cache) => {
            // Añade a la cache los archivos especificados para que estén disponibles en modo offline
            return cache.addAll([
                '/examen_PWA/',
                '/examen_PWA/index.html',
                '/examen_PWA/style.css',
                '/examen_PWA/script.js',
                '/examen_PWA/manifest.json',
                '/examen_PWA/iconos/galeria-192.png',
                '/examen_PWA/iconos/galeria-512.png',
            ]);            
        })
    );
});

// Fetch (peticiones) del service worker
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            // Si la petición está en la cache, devuelve la respuesta, si no, realiza la petición normalmente
            return response || fetch(event.request);
        })
    );
});

