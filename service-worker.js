// FoodPlanner V3.6 — conservation profil corrigée
self.addEventListener('install', event => self.skipWaiting());
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
