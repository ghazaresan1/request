if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
}

document.getElementById('requestBtn').addEventListener('click', () => {
    const portalFrame = document.getElementById('portalFrame');
    portalFrame.contentWindow.postMessage('requestNotification', 'https://portal.ghazaresan.com');
    window.location.href = 'https://portal.ghazaresan.com';
});
