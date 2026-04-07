<<<<<<< HEAD
// --- Navigation & Mobile Menu ---
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger?.addEventListener('click', () => {
=======
// Mobile burger menu toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
>>>>>>> 7fad843be83f1c4e29283389512c84748fd366e5
    burger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

<<<<<<< HEAD
// Smart Navbar Toggle
=======
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
>>>>>>> 7fad843be83f1c4e29283389512c84748fd366e5
let lastScrollY = window.scrollY;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
<<<<<<< HEAD
    if (currentScrollY > 50) {
        currentScrollY > lastScrollY ? header.classList.add('nav-hidden') : header.classList.remove('nav-hidden');
    } else {
        header.classList.remove('nav-hidden');
    }
    lastScrollY = currentScrollY;
});

// --- Modal Preview Logic ---
function previewFile(event, url) {
    event.preventDefault(); 
    const modal = document.getElementById('preview-modal');
    const container = document.getElementById('preview-container');
    
    // Show modal and disable background scroll
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; 
    
    container.innerHTML = ''; 

    // Create iframe for PDF preview
    const iframe = document.createElement('iframe');
    iframe.src = url;
    container.appendChild(iframe);
}

function closePreview() {
    const modal = document.getElementById('preview-modal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scroll
    document.getElementById('preview-container').innerHTML = '';
}

// Close when clicking outside the content box
window.onclick = function(event) {
    const modal = document.getElementById('preview-modal');
    if (event.target == modal) {
        closePreview();
    }
}

// --- Download Logic ---
=======
    
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
>>>>>>> 7fad843be83f1c4e29283389512c84748fd366e5
document.querySelectorAll('.download-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const url = btn.getAttribute('href');
<<<<<<< HEAD
        const card = btn.closest('.card');
        const filename = card.querySelector('.filename').textContent.trim() + ".pdf";
        
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    });
});
=======
        const filename = btn.parentElement.querySelector('.filename').textContent;
        downloadFile(filename, url);
    });
});

>>>>>>> 7fad843be83f1c4e29283389512c84748fd366e5
