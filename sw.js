const CACHE = 'jaguar-v1';
const ASSETS = ['/', 'index.html', 'assets/css/styles.css',
  'assets/js/app.js', 'assets/js/shared.js', 'assets/js/config.js',
  'assets/js/supabaseClient.js', 'assets/images/default-hero.webp'];
self.addEventListener('install', e =>
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS))));
self.addEventListener('fetch', e =>
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request))));
