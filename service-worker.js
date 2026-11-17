// FoodPlanner V3.6 — mise à jour du service worker
self.addEventListener('install', event => self.skipWaiting());
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
