// script.js

// Wait for page to fully load
window.addEventListener('load', () => {
    // Keep splash visible for 2.5 seconds
    setTimeout(() => {
        document.body.classList.add('loaded'); // triggers CSS to hide splash
    }, 2500); // 2500ms = 2.5 seconds
});
