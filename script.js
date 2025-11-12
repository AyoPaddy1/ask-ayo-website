// ===========================
// Scroll Animation Observer
// ===========================

// Create Intersection Observer for fade-in animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all elements with fade-in class
document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach(el => observer.observe(el));
});

// ===========================
// Smooth Scroll for Anchor Links
// ===========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Skip if href is just "#" (placeholder)
        if (href === '#') {
            e.preventDefault();
            return;
        }
        
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ===========================
// Example Pills Interaction
// ===========================
const examplePills = document.querySelectorAll('.example-pill');

examplePills.forEach(pill => {
    pill.addEventListener('click', () => {
        // Simple click effect
        pill.style.transform = 'scale(0.95)';
        setTimeout(() => {
            pill.style.transform = '';
        }, 200);
        
        // In a real implementation, this would show a tooltip
        // For now, just a visual feedback
    });
});

// ===========================
// CTA Button Tracking (Placeholder)
// ===========================
const ctaButtons = document.querySelectorAll('.btn-primary');

ctaButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        // Placeholder for Chrome Web Store link
        // Replace '#' in HTML with actual Chrome Web Store URL when available
        if (button.getAttribute('href') === '#') {
            e.preventDefault();
            console.log('Chrome Web Store link - to be added after approval');
            alert('Chrome extension is currently under review. Check back soon!');
        }
    });
});

// ===========================
// Stagger Animation for Cards
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    const cardGroups = [
        document.querySelectorAll('.solution-card'),
        document.querySelectorAll('.audience-card'),
        document.querySelectorAll('.privacy-pillar')
    ];
    
    cardGroups.forEach(cards => {
        cards.forEach((card, index) => {
            // Add stagger delay
            card.style.transitionDelay = `${index * 0.1}s`;
        });
    });
});
