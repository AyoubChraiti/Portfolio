// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
            const top = target.getBoundingClientRect().top + window.scrollY;

            window.scrollTo({
                top,
                behavior: 'smooth'
            });
        }
    });
});

const sections = document.querySelectorAll('.section-slide');
const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            obs.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.05, // trigger earlier
    rootMargin: '0px 0px -10% 0px' // animate slightly before fully in view
});

sections.forEach(section => observer.observe(section));

// Theme Toggle Logic
const html = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');

const savedTheme = localStorage.getItem('theme') || 'light';
setTheme(savedTheme);

themeToggle?.addEventListener('click', () => {
    const current = html.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    setTheme(next);
});

function setTheme(theme) {
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    updateIcons(theme);
}

function updateIcons(theme) {
    const showSun = theme === 'light';
    sunIcon?.classList.toggle('hidden', !showSun);
    moonIcon?.classList.toggle('hidden', showSun);
}
