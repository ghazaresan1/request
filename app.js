if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
}

document.getElementById('requestBtn').addEventListener('click', () => {
    Notification.requestPermission()
        .then(permission => {
            if (permission === 'granted') {
                window.location.href = 'https://portal.ghazaresan.com';
            }
        });
});
