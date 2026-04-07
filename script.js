// --- Navigation & Mobile Menu ---
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger?.addEventListener('click', () => {
    burger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu on link click (mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        burger?.classList.remove('active');
        navLinks?.classList.remove('active');
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
            header?.classList.add('nav-hidden');
        } else {
            // Scrolling up
            header?.classList.remove('nav-hidden');
        }
    } else {
        // Always show at top
        header?.classList.remove('nav-hidden');
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

// --- Modal Preview Logic ---
function previewFile(event, url) {
    event.preventDefault(); 
    const modal = document.getElementById('preview-modal');
    const container = document.getElementById('preview-container');
    
    // Show modal and disable background scroll
    if (modal) modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; 
    
    if (container) {
        container.innerHTML = ''; 

        // Create iframe for PDF preview
        const iframe = document.createElement('iframe');
        iframe.src = url;
        container.appendChild(iframe);
    }
}

function closePreview() {
    const modal = document.getElementById('preview-modal');
    if (modal) modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scroll
    const container = document.getElementById('preview-container');
    if (container) container.innerHTML = '';
}

// Close when clicking outside the content box
window.onclick = function(event) {
    const modal = document.getElementById('preview-modal');
    if (event.target == modal) {
        closePreview();
    }
}

// --- Download Logic ---
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
        const card = btn.closest('.card');
        let filename = card ? card.querySelector('.filename').textContent.trim() : "file";
        if (!filename.toLowerCase().endsWith('.pdf')) {
            filename += ".pdf";
        }
        
        downloadFile(filename, url);
    });
});
