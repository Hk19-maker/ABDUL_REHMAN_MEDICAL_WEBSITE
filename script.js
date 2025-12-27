     // Splash screen loader with delay (PREMIUM FIX)
window.addEventListener('load', () => {
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 2500); // splash visible for 2.5 seconds
});

// About section logic
document.addEventListener('DOMContentLoaded', () => {
    const aboutTitle = document.querySelector('.about-title');
    const aboutSection = document.getElementById('about');

    if (aboutTitle && aboutSection) {
        aboutTitle.addEventListener('click', () => {
            aboutSection.scrollIntoView({ behavior: 'smooth' });

            const items = document.querySelectorAll('.about-item');
            items.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('show');
                }, index * 600);
            });
        });

        // Block long-press menu
        aboutTitle.addEventListener('contextmenu', (e) => {
            e.preventDefault();
        });
    }
});
