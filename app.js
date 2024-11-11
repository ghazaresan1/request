document.getElementById('requestBtn').addEventListener('click', () => {
    // Direct approach using window.open()
    const win = window.open('https://portal.ghazaresan.com', '_blank');
    
    if (win) {
        win.focus();
    }
});

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js');
}
