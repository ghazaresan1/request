document.getElementById('requestBtn').addEventListener('click', () => {
    // Open portal.ghazaresan.com in a new window
    const portalWindow = window.open('https://portal.ghazaresan.com', '_blank');
    
    // Execute notification request in the new window
    setTimeout(() => {
        portalWindow.eval(`
            if ('Notification' in window) {
                Notification.requestPermission().then(permission => {
                    if (permission === 'granted') {
                        // Permission granted
                    }
                });
            }
        `);
    }, 1000);
});

// Register service worker
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
}
