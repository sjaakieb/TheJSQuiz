/* eslint no-restricted-globals: 0 */
self.addEventListener('install', (event) => {
  event.waitUntil(caches.open('the_js_quiz_v1.0')
    .then((cache) => {
      return cache.addAll([
        '/',
        '/quiz',
        '/resources',
        '/styles/bundle.js',
        '/api/questions/beginner',
        '/api/questions/intermediate',
        '/api/questions/advanced',
      ]);
    }));
});

self.addEventListener('fetch', (event) => {
  event.respondWith(caches.match(event.request)
    .then((response) => {
      if (response) {
        return response;
      }
      return fetch(event.request);
    }));
});
