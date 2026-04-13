// Header Scroll Effect
const header = document.querySelector('header');
const handleScroll = () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
};

window.addEventListener('scroll', handleScroll);

// Intersection Observer for Scroll Reveal
const revealElements = document.querySelectorAll('.reveal');
const revealOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Once revealed, we can unobserve if we want it to stay permanently
            // revealObserver.unobserve(entry.target);
        }
    });
}, revealOptions);

revealElements.forEach(el => revealObserver.observe(el));

// Active Nav Link highlight on scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

const highlightNav = () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').includes(current)) {
            link.classList.add('active');
        }
    });
};

window.addEventListener('scroll', highlightNav);

// Smooth Scrolling for links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Mock Form Submission
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const submitBtn = contactForm.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = 'Sending...';
        submitBtn.style.opacity = '0.7';
        submitBtn.disabled = true;

        // Simulate API call
        setTimeout(() => {
            submitBtn.innerHTML = 'Message Sent!';
            submitBtn.style.background = '#10b981'; // Success Green
            contactForm.reset();
            
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.style.background = '';
                submitBtn.style.opacity = '1';
                submitBtn.disabled = false;
            }, 3000);
        }, 1500);
    });
}

// Mobile Menu (Simple Logic)
const mobileMenu = document.getElementById('mobile-menu');
const navLinksContainer = document.querySelector('.nav-links');

if (mobileMenu) {
    mobileMenu.addEventListener('click', () => {
        // This is a basic toggle, you could add a mobile-specific class/transition
        alert('Mobile menu functionality can be expanded here!');
    });
}

// Mouse Follow Effect for Blobs
const blobs = document.querySelectorAll('.blob');
document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth - 0.5) * 50;
    const y = (clientY / window.innerHeight - 0.5) * 50;
    
    blobs.forEach((blob, index) => {
        const factor = (index + 1) * 0.5;
        blob.style.transform = `translate(${x * factor}px, ${y * factor}px)`;
    });
});

console.log('Portfolio Main JS Loaded.');
