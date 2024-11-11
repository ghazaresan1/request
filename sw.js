self.addEventListener('install', (event) => {
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    clients.claim();
});

self.addEventListener('message', (event) => {
    if (event.data === 'requestNotification') {
        self.registration.showNotification('Portal.Ghazaresan.com', {
            body: 'Enabling notifications...',
            icon: 'icon-192x192.png'
        });
    }
});
