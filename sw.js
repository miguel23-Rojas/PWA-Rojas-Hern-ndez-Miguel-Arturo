const _cacheName = 'cache_instrumento v4';


self.addEventListener('install', event => {
    console.log("Se ha instalado el SW");
    const _appShellFiles = [
        './index.html',
        './blog.html',
        './Resumen.html',
        './contacto.html',
        './script.js',
        
        
    ];
    
    const _openCache = async() => {
        const _appShellStorage = await caches.open(_cacheName);
        return _appShellStorage.addAll(_appShellFiles);
    };
    
    event.waintUntil(_openCache());
});

//Actualizar el cache
self.addEventListener('activate', (e) => {
   e.waitUntil(// El codigo dentro va a esperar a que todo el bloque termine 
    caches.keys().then(cacheList => {
        
        return Promise.all(
            cacheList.map(cache => {
                if(!_cacheName.includes(cache)){
                    return caches.delete(cache);
                }
        }));
    })
   );
    
});


//Network First
self.addEventListener('fetch', event =>{
    event.respondWith(
        fetch(event.request).then(networkResponse =>{
            return networkResponse || caches.match(event.request);
        })
    )
})