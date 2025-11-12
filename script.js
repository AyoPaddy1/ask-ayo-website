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


// ===========================
// Animated Demo Logic
// ===========================
function initDemoAnimation() {
    const cursor = document.getElementById('animated-cursor');
    const term = document.getElementById('ebitda-term');
    const contextMenu = document.getElementById('context-menu');
    const popup = document.getElementById('ayo-popup');
    
    if (!cursor || !term || !contextMenu || !popup) return;
    
    // Get positions
    const termRect = term.getBoundingClientRect();
    const browserContent = document.querySelector('.browser-content');
    const contentRect = browserContent.getBoundingClientRect();
    
    // Calculate relative positions
    const termX = termRect.left - contentRect.left + termRect.width / 2;
    const termY = termRect.top - contentRect.top + termRect.height / 2;
    
    // Animation timeline
    const timeline = [
        // Step 1: Show cursor moving to term (0-1s)
        {
            time: 0,
            action: () => {
                cursor.style.left = '100px';
                cursor.style.top = '100px';
                cursor.classList.add('visible');
            }
        },
        {
            time: 500,
            action: () => {
                cursor.style.transition = 'all 0.8s ease';
                cursor.style.left = termX + 'px';
                cursor.style.top = termY + 'px';
            }
        },
        // Step 2: Highlight the term (1.5s)
        {
            time: 1500,
            action: () => {
                term.classList.add('active');
            }
        },
        // Step 3: Show context menu (2s)
        {
            time: 2000,
            action: () => {
                contextMenu.style.left = (termX + 10) + 'px';
                contextMenu.style.top = (termY + 20) + 'px';
                contextMenu.classList.add('visible');
            }
        },
        // Step 4: Show popup (3s)
        {
            time: 3000,
            action: () => {
                contextMenu.classList.remove('visible');
                popup.style.left = (termX - 200) + 'px';
                popup.style.top = (termY + 40) + 'px';
                popup.classList.add('visible');
            }
        },
        // Step 5: Hold for viewing (6s)
        {
            time: 6000,
            action: () => {
                // Just hold the popup visible
            }
        },
        // Step 6: Reset (7s)
        {
            time: 7000,
            action: () => {
                popup.classList.remove('visible');
                term.classList.remove('active');
                cursor.classList.remove('visible');
            }
        },
        // Step 7: Loop (8s)
        {
            time: 8000,
            action: () => {
                runAnimation();
            }
        }
    ];
    
    function runAnimation() {
        timeline.forEach(step => {
            setTimeout(step.action, step.time);
        });
    }
    
    // Start animation when demo section is in view
    const demoSection = document.querySelector('.demo');
    const demoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                runAnimation();
            }
        });
    }, { threshold: 0.3 });
    
    if (demoSection) {
        demoObserver.observe(demoSection);
    }
    
    // Also start immediately if already in view
    if (demoSection) {
        const rect = demoSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            setTimeout(runAnimation, 500);
        }
    }
}

// Initialize demo animation when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDemoAnimation);
} else {
    initDemoAnimation();
}

// Re-initialize on window resize to recalculate positions
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        initDemoAnimation();
    }, 250);
});
