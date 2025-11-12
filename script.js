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
// Animated Demo Logic - Two Terms
// ===========================
function initDemoAnimation() {
    const cursor = document.getElementById('animated-cursor');
    const ebitdaTerm = document.getElementById('ebitda-term');
    const liquidationTerm = document.getElementById('liquidation-term');
    const contextMenu = document.getElementById('context-menu');
    const popup = document.getElementById('ayo-popup');
    
    if (!cursor || !ebitdaTerm || !liquidationTerm || !contextMenu || !popup) return;
    
    const browserContent = document.querySelector('.browser-content');
    const contentRect = browserContent.getBoundingClientRect();
    
    // Term data
    const terms = [
        {
            element: ebitdaTerm,
            name: 'EBITDA',
            definition: 'Earnings Before Interest, Taxes, Depreciation, and Amortization. A measure of a company\'s operating performance.',
            realTalk: 'Basically how much money a company makes from its actual business, before you factor in loans, taxes, and accounting stuff.'
        },
        {
            element: liquidationTerm,
            name: 'Liquidation Preference',
            definition: 'A clause in an investment agreement that determines the payout order and amounts if the company is sold or liquidated.',
            realTalk: 'Investors get their money back first (sometimes 2x or 3x) before founders and employees see anything. It\'s their safety net in case things go south.'
        }
    ];
    
    let currentTermIndex = 0;
    
    function animateTerm(termData) {
        const term = termData.element;
        const termRect = term.getBoundingClientRect();
        
        // Calculate relative positions
        const termX = termRect.left - contentRect.left + termRect.width / 2;
        const termY = termRect.top - contentRect.top + termRect.height / 2;
        
        // Update popup content
        const popupTermEl = popup.querySelector('.popup-term');
        const definitionText = popup.querySelector('.definition-section .section-text');
        const realTalkText = popup.querySelector('.real-talk-section .section-text');
        
        popupTermEl.textContent = termData.name;
        definitionText.textContent = termData.definition;
        realTalkText.textContent = termData.realTalk;
        
        // Animation timeline for this term
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
                    const popupLeft = Math.max(20, termX - 200);
                    const popupTop = termY + 60;
                    popup.style.left = popupLeft + 'px';
                    popup.style.top = popupTop + 'px';
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
            // Step 7: Move to next term or loop (8s)
            {
                time: 8000,
                action: () => {
                    currentTermIndex = (currentTermIndex + 1) % terms.length;
                    animateTerm(terms[currentTermIndex]);
                }
            }
        ];
        
        timeline.forEach(step => {
            setTimeout(step.action, step.time);
        });
    }
    
    // Start animation when demo section is in view
    const demoSection = document.querySelector('.demo');
    const demoObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                currentTermIndex = 0;
                animateTerm(terms[currentTermIndex]);
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
            setTimeout(() => {
                currentTermIndex = 0;
                animateTerm(terms[currentTermIndex]);
            }, 500);
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
