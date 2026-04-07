// --- Navigation & Mobile Menu ---
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger?.addEventListener('click', () => {
    burger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Smart Navbar Toggle
let lastScrollY = window.scrollY;
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;
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
document.querySelectorAll('.download-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const url = btn.getAttribute('href');
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