// Mobile burger menu toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu on link click (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        burger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// Smooth scrolling already handled by CSS scroll-behavior, but add for older browsers
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Smart navbar: hide on scroll down, show on scroll up + active highlighting
let lastScrollY = window.scrollY;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
    
    // Navbar hide/show logic (universal for desktop/mobile)
    if (currentScrollY > 50) {  // Threshold to avoid top flicker
        if (currentScrollY > lastScrollY) {
            // Scrolling down
            header.classList.add('nav-hidden');
        } else {
            // Scrolling up
            header.classList.remove('nav-hidden');
        }
    } else {
        // Always show at top
        header.classList.remove('nav-hidden');
    }
    lastScrollY = currentScrollY;
    
    // Active nav highlighting logic
    let current = '';
    const sections = document.querySelectorAll('section');
    const navLinksAll = document.querySelectorAll('.nav-links a');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinksAll.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Download script
function downloadFile(filename, url) {
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}

// Add click listeners to download buttons
document.querySelectorAll('.download-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const url = btn.getAttribute('href');
        const filename = btn.parentElement.querySelector('.filename').textContent;
        downloadFile(filename, url);
    });
});

