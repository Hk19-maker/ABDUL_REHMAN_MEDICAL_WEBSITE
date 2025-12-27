// Splash screen loader
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Wait for DOM before running About code
document.addEventListener('DOMContentLoaded', () => {
    const aboutTitle = document.querySelector('.about-title');
    const aboutSection = document.getElementById('about');

    if (aboutTitle && aboutSection) {
        aboutTitle.addEventListener('click', () => {
            aboutSection.scrollIntoView({
                behavior: 'smooth'
            });

            const items = document.querySelectorAll('.about-item');

            items.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('show');
                }, index * 600);
            });
        });

        // Prevent long-press / right-click menu
        aboutTitle.addEventListener('contextmenu', (e) => {
            e.preventDefault();
        });
    }
});
