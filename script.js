// Splash screen loader
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// About section animation
document.querySelector('.about-title').addEventListener('click', () => {
    document.getElementById('about').scrollIntoView({
        behavior: 'smooth'
    });

    const items = document.querySelectorAll('.about-item');

    items.forEach((item, index) => {
        setTimeout(() => {
            item.classList.add('show');
        }, index * 600);
    });
});
// Prevent long-press context menu on About title
document.querySelector('.about-title').addEventListener('contextmenu', (e) => {
    e.preventDefault();
});

