let cacheVersion = 'restaurantReviewApp-v20';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheVersion).then((cache) => {
      return cache.addAll([
        '/',
        '/index.html',
        '/restaurant.html',
        '/js/',
        '/js/main.js',
        '/js/dbhelper.js',
        '/js/restaurant_info.js',
        '/js/sw_registration.js',
        '/img/1.jpg',
        '/img/2.jpg',
        '/img/3.jpg',
        '/img/4.jpg',
        '/img/5.jpg',
        '/img/6.jpg',
        '/img/7.jpg',
        '/img/8.jpg',
        '/img/9.jpg',
        '/img/10.jpg',
        '/data/restaurants.json',
        '/css/styles.css',
      ]).catch(error => {
        console.log('an error has received: ', error)
      });
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.filter((cacheName) => {
          return cacheName.startsWith('restaurantReviewApp-') &&
            cacheName != cacheVersion;
        }).map((cacheName) => {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

self.addEventListener('fetch', (event) => {
  let cacheRequest = event.request;
  if (event.request.url.indexOf('main.html') > -1) {
    cacheRequest = new Request('main.html');
  }
  if (event.request.url.indexOf('restaurant.html') > -1) {
    cacheRequest = new Request('restaurant.html');
  }
  event.respondWith(
    caches.match(cacheRequest).then((response) => {
      return response || fetch(event.request)
    })
  );
});