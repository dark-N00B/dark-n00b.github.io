  // On install - the application shell cached
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('sw-cache').then(function(cache) {
              // Static files that make up the application shell are cached
            return cache.add('index.html');  // If you have css file and app.js files
              // Please add here as well, to be cached!
            
              // assets/js/jquery-3.5.1.min.js
              // assets/js/bootstrap.bundle.min.js
              // assets/vendor/owl-carousel/owl.carousel.min.js
              // assets/vendor/perfect-scrollbar/js/perfect-scrollbar.js
              // assets/vendor/isotope/isotope.pkgd.min.js
              // assets/vendor/nice-select/js/jquery.nice-select.min.js
              // assets/vendor/fancybox/js/jquery.fancybox.min.js
              // assets/vendor/wow/wow.min.js
              // assets/vendor/animateNumber/jquery.animateNumber.min.js
              // assets/vendor/waypoints/jquery.waypoints.min.js
              // assets/js/google-maps.js
              // assets/js/topbar-virtual.js
        })
    );
});

  // With request network
self.addEventListener('fetch', function(event) {
    event.respondWith(
          // Try the cache
        caches.match(event.request).then(function(response) {
              // return it if there is a response, or else fetch again
            return response || fetch(event.request);
        })
    );
});