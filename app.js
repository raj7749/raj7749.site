// Glassmorphism AI Report JavaScript - Fixed Version

// Data for impact analysis
const impactData = {
    positive: {
        "2026": {
            title: "The Integration Phase - Positive Impacts",
            impacts: [
                "Healthcare acceleration: AI-designed drugs reach trials faster; early disease detection through wearables",
                "Productivity boost: Knowledge workers spend less time on routine research, analysis, and documentation",
                "Accessibility gains: Real-time translation, voice-to-text, and visual assistance become mainstream",
                "Scientific breakthroughs: Climate modeling, materials research, and protein folding advance rapidly"
            ]
        },
        "2028": {
            title: "The Disruption Phase - Positive Impacts",
            impacts: [
                "Personalized everything: Education, healthcare, and entertainment adapt to individual needs in real-time",
                "Reduced human error: AI handles 80% of customer service issues, reducing wait times and frustration",
                "Enhanced decision-making: 10% of corporate boards use AI insights for strategic planning",
                "Global connectivity: Language barriers dissolve with real-time, nuanced translation"
            ]
        },
        "2030": {
            title: "The Transformation Phase - Positive Impacts",
            impacts: [
                "Climate solutions: AI optimizes energy grids, accelerates renewable technology, and manages carbon capture",
                "Medical revolution: Personalized treatment plans, early cancer detection, and mental health support become standard",
                "Creative collaboration: Artists, writers, and musicians use AI as sophisticated creative partners",
                "Global problem-solving: AI tackles complex challenges like logistics, urban planning, and resource distribution"
            ]
        },
        "2032": {
            title: "The Restructuring Phase - Positive Impacts",
            impacts: [
                "Economic efficiency: $2.74 trillion AI market creates new industries and investment opportunities",
                "Sustainable infrastructure: Energy-efficient AI data centers and optimized resource usage",
                "Universal access: AI-powered education and healthcare reach underserved populations globally",
                "Innovation acceleration: Scientific discovery, product development, and research progress exponentially"
            ]
        },
        "2035": {
            title: "The Maturation Phase - Positive Impacts",
            impacts: [
                "Invisible assistance: AI seamlessly handles life's complexities, reducing stress and cognitive load",
                "Medical breakthroughs: Cancer, Alzheimer's, and rare diseases see major treatment advances",
                "Environmental restoration: AI-guided climate interventions show measurable planetary improvements",
                "Human potential unleashing: People focus on creativity, relationships, and personal growth"
            ]
        },
        "2040": {
            title: "The Ambient Phase - Positive Impacts",
            impacts: [
                "Ambient intelligence: Smart environments anticipate needs, reducing daily friction and stress",
                "Longevity advances: AI accelerates anti-aging research; human lifespan extends significantly",
                "Universal prosperity potential: AI productivity could theoretically provide abundance for all",
                "Enhanced human capabilities: Brain-computer interfaces and AI augmentation expand human potential"
            ]
        },
        "2045": {
            title: "The Post-Human Work Phase - Positive Impacts",
            impacts: [
                "Post-scarcity economics: Universal Basic Income or similar systems provide economic security",
                "Meaningful work redesign: Humans focus on art, philosophy, caregiving, and community building",
                "Global cooperation: AI helps solve coordination problems between nations and cultures",
                "Individual fulfillment: People pursue passions without economic constraints"
            ]
        },
        "2050": {
            title: "The Transcendence Phase - Positive Impacts",
            impacts: [
                "Superhuman problem-solving: Climate change, poverty, and disease become manageable challenges",
                "Consciousness expansion: AI helps humans understand the universe, consciousness, and meaning",
                "Interplanetary civilization: AI enables space exploration and colonization",
                "Ultimate personalization: Every aspect of life optimized for individual happiness and growth"
            ]
        }
    },
    negative: {
        "2026": {
            title: "The Integration Phase - Negative Impacts",
            impacts: [
                "Early job displacement: Customer service reps, basic analysts, and content moderators face layoffs",
                "Digital divide widens: Those without AI access fall behind in productivity and opportunities",
                "Privacy erosion: Always-on AI assistants collect unprecedented personal data",
                "Misinformation amplification: Deepfakes and AI-generated content become harder to detect"
            ]
        },
        "2028": {
            title: "The Disruption Phase - Negative Impacts",
            impacts: [
                "Massive workforce disruption: 33% of enterprise software now AI-managed; middle-management roles evaporate",
                "Cognitive dependency: Humans begin losing skills they no longer practice (navigation, mental math, writing)",
                "Algorithmic bias at scale: AI systems perpetuate societal biases in hiring, lending, and healthcare",
                "Surveillance normalization: AI monitoring of employee behavior becomes standard in 40% of companies"
            ]
        },
        "2030": {
            title: "The Transformation Phase - Negative Impacts",
            impacts: [
                "Employment crisis deepens: Traditional career paths become obsolete; social unrest from displaced workers",
                "Human agency erosion: Over-reliance on AI for decisions leads to learned helplessness",
                "Wealth concentration: AI productivity gains flow primarily to capital owners, not workers",
                "Cultural homogenization: AI-generated content creates echo chambers and reduces human cultural diversity"
            ]
        },
        "2032": {
            title: "The Restructuring Phase - Negative Impacts",
            impacts: [
                "Systemic dependency: Critical infrastructure failures cascade when AI systems malfunction",
                "Mental health crisis: Social isolation increases as humans interact more with AI than each other",
                "Democratic erosion: AI-manipulated information campaigns threaten electoral processes",
                "Intergenerational divide: Older populations struggle to adapt; younger generations lose fundamental skills"
            ]
        },
        "2035": {
            title: "The Maturation Phase - Negative Impacts",
            impacts: [
                "Existential questions: Humans struggle with purpose and identity when AI handles most cognitive work",
                "Regulatory complexity: AI ethics and safety frameworks create bureaucratic overhead and innovation friction",
                "Global inequality: AI-rich nations dominate AI-poor ones; new forms of colonialism emerge",
                "Reality distortion: Difficulty distinguishing AI-generated content from authentic human creation"
            ]
        },
        "2040": {
            title: "The Ambient Phase - Negative Impacts",
            impacts: [
                "Social stratification: Society splits into AI-enhanced and natural humans",
                "Loss of human skills: Generations grow up unable to function without AI assistance",
                "Privacy extinction: Pervasive monitoring makes private thoughts and actions nearly impossible",
                "Democratic crisis: Traditional voting systems inadequate for AI-influenced populations"
            ]
        },
        "2045": {
            title: "The Post-Human Work Phase - Negative Impacts",
            impacts: [
                "Purpose vacuum: Widespread depression and nihilism as traditional sources of meaning vanish",
                "Human redundancy anxiety: Existential fear about human relevance in an AI-dominated world",
                "Authoritarian potential: AI surveillance enables unprecedented population control",
                "Cultural stagnation: Reduced human struggle and challenge leads to creative and spiritual decline"
            ]
        },
        "2050": {
            title: "The Transcendence Phase - Negative Impacts",
            impacts: [
                "Species identity crisis: Fundamental questions about what makes humans special or necessary",
                "AI alignment failures: Superintelligent systems might optimize for goals misaligned with human values",
                "Evolutionary stagnation: Humans may lose evolutionary pressure to develop resilience and capability",
                "Existential dependency: Humanity becomes utterly dependent on systems they can no longer understand or control"
            ]
        }
    }
};

// Current active tab for impact analysis
let currentImpactTab = 'positive';
let currentTimelineYear = '2026';

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded - Initializing glassmorphism AI report');
    
    // Initialize all functionality
    initializeNavigation();
    initializeProgressBar();  
    initializeTimeline();
    initializeImpactAnalysis();
    initializeMobileNav();
    initializeSmoothScrolling();
    initializeGlassmorphismEffects();
    
    // Load initial impact data after a short delay
    setTimeout(() => {
        loadImpactData('positive');
    }, 200);
    
    console.log('All systems initialized');
});

// Enhanced glassmorphism effects
function initializeGlassmorphismEffects() {
    // Add enhanced hover effects to glass panels
    const glassPanels = document.querySelectorAll('.glass-panel');
    
    glassPanels.forEach(panel => {
        panel.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 8px 32px 0 rgba(31, 38, 135, 0.5)';
        });
        
        panel.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 8px 32px 0 rgba(31, 38, 135, 0.37)';
        });
    });
    
    // Add glassmorphism effect to dynamically created elements
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            mutation.addedNodes.forEach(function(node) {
                if (node.nodeType === 1 && node.classList.contains('impact-card')) {
                    node.classList.add('glass-panel');
                }
            });
        });
    });
    
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
}

// Navigation functionality with glassmorphism enhancements
function initializeNavigation() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    console.log('Initializing enhanced glassmorphism navigation');
    
    // Enhanced scroll effect for navbar
    window.addEventListener('scroll', function() {
        const scrollY = window.scrollY;
        
        if (scrollY > 100) {
            navbar.classList.add('scrolled');
            navbar.style.background = 'rgba(15, 20, 25, 0.95)';
            navbar.style.backdropFilter = 'blur(12px)';
        } else {
            navbar.classList.remove('scrolled');
            navbar.style.background = 'rgba(15, 20, 25, 0.8)';
            navbar.style.backdropFilter = 'blur(8px)';
        }
        
        // Update active nav link based on scroll position
        updateActiveNavLink();
    });
    
    // Enhanced click handlers for nav links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Add ripple effect
                addRippleEffect(this, e);
            }
        });
        
        // Enhanced hover effects
        link.addEventListener('mouseenter', function() {
            this.style.background = 'rgba(255, 255, 255, 0.05)';
            this.style.backdropFilter = 'blur(8px)';
        });
        
        link.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.background = 'transparent';
                this.style.backdropFilter = 'none';
            }
        });
    });
}

// Enhanced ripple effect for interactive elements
function addRippleEffect(element, event) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple 0.6s linear;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        pointer-events: none;
    `;
    
    // Add ripple animation keyframes if not exists
    if (!document.getElementById('ripple-styles')) {
        const style = document.createElement('style');
        style.id = 'ripple-styles';
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Update active navigation link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        link.style.background = 'transparent';
        link.style.backdropFilter = 'none';
        
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
            link.style.background = 'rgba(255, 255, 255, 0.05)';
            link.style.backdropFilter = 'blur(8px)';
        }
    });
}

// Enhanced progress bar functionality
function initializeProgressBar() {
    const progressBar = document.getElementById('progressBar');
    
    console.log('Initializing enhanced progress bar');
    
    window.addEventListener('scroll', function() {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
        const clampedPercent = Math.min(100, Math.max(0, scrollPercent));
        
        progressBar.style.width = clampedPercent + '%';
        
        // Add glow effect based on progress
        const glowIntensity = clampedPercent / 100;
        progressBar.style.boxShadow = `0 0 ${10 + glowIntensity * 20}px rgba(59, 130, 246, ${0.3 + glowIntensity * 0.4})`;
    });
}

// FIXED: Enhanced timeline functionality with proper content switching
function initializeTimeline() {
    const timelineButtons = document.querySelectorAll('.timeline-btn');
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    console.log('Timeline buttons found:', timelineButtons.length);
    console.log('Timeline items found:', timelineItems.length);
    
    timelineButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const year = this.getAttribute('data-year');
            currentTimelineYear = year;
            console.log('Timeline button clicked for year:', year);
            
            // Add ripple effect
            addRippleEffect(this, e);
            
            // Remove active class from all buttons
            timelineButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-selected', 'false');
                btn.style.background = 'rgba(255, 255, 255, 0.05)';
                btn.style.transform = 'translateY(0)';
            });
            
            // Add active class to clicked button
            this.classList.add('active');
            this.setAttribute('aria-selected', 'true');
            this.style.background = 'rgba(59, 130, 246, 0.8)';
            this.style.transform = 'translateY(-2px)';
            
            // Hide all timeline items
            timelineItems.forEach(item => {
                item.classList.remove('active');
                item.style.display = 'none';
            });
            
            // Show selected timeline item
            const targetItem = document.querySelector(`.timeline-item[data-year="${year}"]`);
            console.log('Target timeline item:', targetItem);
            
            if (targetItem) {
                targetItem.style.display = 'block';
                // Use setTimeout to ensure display change takes effect before adding active class
                setTimeout(() => {
                    targetItem.classList.add('active');
                }, 10);
                console.log('Timeline item activated for year:', year);
            } else {
                console.error('Timeline item not found for year:', year);
                // Fallback: show first item if target not found
                if (timelineItems.length > 0) {
                    timelineItems[0].style.display = 'block';
                    setTimeout(() => {
                        timelineItems[0].classList.add('active');
                    }, 10);
                }
            }
        });
        
        // Enhanced hover effects for timeline buttons
        button.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateY(-1px)';
                this.style.background = 'rgba(255, 255, 255, 0.08)';
            }
        });
        
        button.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateY(0)';
                this.style.background = 'rgba(255, 255, 255, 0.05)';
            }
        });
    });
    
    // Initialize first timeline item as active
    if (timelineItems.length > 0) {
        timelineItems.forEach(item => item.style.display = 'none');
        timelineItems[0].classList.add('active');
        timelineItems[0].style.display = 'block';
    }
    
    // Set first button as active
    if (timelineButtons.length > 0) {
        timelineButtons[0].classList.add('active');
        timelineButtons[0].style.background = 'rgba(59, 130, 246, 0.8)';
    }
}

// FIXED: Enhanced impact analysis functionality with proper tab switching
function initializeImpactAnalysis() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.impact-tab-content');
    
    console.log('Impact tab buttons found:', tabButtons.length);
    console.log('Impact tab contents found:', tabContents.length);
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const tab = this.getAttribute('data-tab');
            console.log('Impact tab clicked:', tab);
            
            // Add ripple effect
            addRippleEffect(this, e);
            
            // Update current tab
            currentImpactTab = tab;
            
            // Remove active class from all tab buttons
            tabButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-selected', 'false');
                btn.style.background = 'rgba(255, 255, 255, 0.05)';
                btn.style.transform = 'translateY(0)';
            });
            
            // Add active class to clicked button
            this.classList.add('active');
            this.setAttribute('aria-selected', 'true');
            this.style.background = 'rgba(59, 130, 246, 0.8)';
            this.style.transform = 'translateY(-2px)';
            
            // Hide all tab contents
            tabContents.forEach(content => {
                content.classList.remove('active');
                content.style.display = 'none';
            });
            
            // Show selected tab content
            const targetContent = document.querySelector(`.impact-tab-content[data-tab="${tab}"]`);
            console.log('Target tab content:', targetContent);
            
            if (targetContent) {
                targetContent.style.display = 'block';
                setTimeout(() => {
                    targetContent.classList.add('active');
                }, 10);
                console.log('Tab content activated for:', tab);
            }
            
            // Load data for selected tab
            setTimeout(() => {
                loadImpactData(tab);
            }, 50);
        });
        
        // Enhanced hover effects
        button.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateY(-1px)';
                this.style.background = 'rgba(255, 255, 255, 0.08)';
            }
        });
        
        button.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'translateY(0)';
                this.style.background = 'rgba(255, 255, 255, 0.05)';
            }
        });
    });
    
    // Initialize first tab as active
    if (tabContents.length > 0) {
        tabContents.forEach(content => content.style.display = 'none');
        tabContents[0].classList.add('active');
        tabContents[0].style.display = 'block';
    }
    
    // Set first button as active
    if (tabButtons.length > 0) {
        tabButtons[0].classList.add('active');
        tabButtons[0].style.background = 'rgba(59, 130, 246, 0.8)';
    }
}

// FIXED: Enhanced load impact data with proper clearing and loading
function loadImpactData(type) {
    console.log('Loading impact data for type:', type);
    
    const containerId = type === 'positive' ? 'positiveImpacts' : 'negativeImpacts';
    const container = document.getElementById(containerId);
    
    console.log('Impact container found:', container);
    
    if (!container) {
        console.error('Impact container not found:', containerId);
        return;
    }
    
    // Clear existing content immediately
    container.innerHTML = '';
    
    const data = impactData[type];
    console.log('Impact data to load:', data);
    
    if (!data) {
        console.error('No impact data found for type:', type);
        return;
    }
    
    // Load new content
    Object.keys(data).forEach((year, index) => {
        const impactCard = document.createElement('div');
        impactCard.className = 'impact-card glass-panel';
        impactCard.style.opacity = '0';
        impactCard.style.transform = 'translateY(30px)';
        
        impactCard.innerHTML = `
            <div class="year">${year}</div>
            <h3>${data[year].title}</h3>
            <ul>
                ${data[year].impacts.map(impact => `<li>${impact}</li>`).join('')}
            </ul>
        `;
        
        container.appendChild(impactCard);
        
        // Staggered animation for cards
        setTimeout(() => {
            impactCard.style.transition = 'all 0.5s ease';
            impactCard.style.opacity = '1';
            impactCard.style.transform = 'translateY(0)';
        }, index * 100);
        
        console.log('Added impact card for year:', year);
    });
    
    console.log('Impact data loaded successfully for type:', type);
}

// Enhanced mobile navigation
function initializeMobileNav() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    console.log('Initializing enhanced mobile navigation');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Enhanced mobile menu styling
            if (navMenu.classList.contains('active')) {
                navMenu.style.backdropFilter = 'blur(12px)';
                navMenu.style.background = 'rgba(15, 20, 25, 0.98)';
            }
        });
        
        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
}

// Enhanced smooth scrolling
function initializeSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    console.log('Initializing enhanced smooth scrolling');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80;
                
                // Enhanced smooth scroll with easing
                smoothScrollTo(offsetTop, 800);
                
                // Add ripple effect if it's a button
                if (this.classList.contains('cta-button') || this.classList.contains('glass-button')) {
                    addRippleEffect(this, e);
                }
            }
        });
    });
}

// Enhanced smooth scroll function with easing
function smoothScrollTo(target, duration) {
    const start = window.pageYOffset;
    const distance = target - start;
    let startTime = null;
    
    function easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
    }
    
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = easeInOutCubic(progress);
        
        window.scrollTo(0, start + distance * ease);
        
        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        }
    }
    
    requestAnimationFrame(animation);
}

// Enhanced intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        const animateElements = document.querySelectorAll('.glass-panel, .scenario-card, .recommendation-category, .action-item');
        
        animateElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'all 0.6s ease';
            observer.observe(el);
        });
    }, 100);
});

// Enhanced utility functions
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Optimized scroll handler with glassmorphism enhancements
const optimizedScrollHandler = debounce(function() {
    updateActiveNavLink();
    updateGlassmorphismEffects();
}, 10);

function updateGlassmorphismEffects() {
    const scrollY = window.scrollY;
    const glassPanels = document.querySelectorAll('.glass-panel:not(.navbar)');
    
    glassPanels.forEach(panel => {
        const rect = panel.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isVisible) {
            const opacity = Math.max(0.05, Math.min(0.1, (window.innerHeight - rect.top) / window.innerHeight * 0.1));
            panel.style.background = `rgba(255, 255, 255, ${opacity})`;
        }
    });
}

window.addEventListener('scroll', optimizedScrollHandler);

// Enhanced keyboard navigation support
document.addEventListener('keydown', function(e) {
    // Timeline navigation with arrow keys
    if (e.target.classList.contains('timeline-btn')) {
        const buttons = Array.from(document.querySelectorAll('.timeline-btn'));
        const currentIndex = buttons.indexOf(e.target);
        
        if (e.key === 'ArrowLeft' && currentIndex > 0) {
            e.preventDefault();
            buttons[currentIndex - 1].click();
            buttons[currentIndex - 1].focus();
        } else if (e.key === 'ArrowRight' && currentIndex < buttons.length - 1) {
            e.preventDefault();
            buttons[currentIndex + 1].click();
            buttons[currentIndex + 1].focus();
        }
    }
    
    // Tab navigation with arrow keys
    if (e.target.classList.contains('tab-btn')) {
        const tabs = Array.from(document.querySelectorAll('.tab-btn'));
        const currentIndex = tabs.indexOf(e.target);
        
        if (e.key === 'ArrowLeft' && currentIndex > 0) {
            e.preventDefault();
            tabs[currentIndex - 1].click();
            tabs[currentIndex - 1].focus();
        } else if (e.key === 'ArrowRight' && currentIndex < tabs.length - 1) {
            e.preventDefault();
            tabs[currentIndex + 1].click();
            tabs[currentIndex + 1].focus();
        }
    }
});

// Enhanced accessibility improvements
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        // Add ARIA labels to interactive elements
        const timelineButtons = document.querySelectorAll('.timeline-btn');
        timelineButtons.forEach((btn, index) => {
            btn.setAttribute('aria-label', `View ${btn.textContent} timeline`);
            btn.setAttribute('role', 'tab');
            btn.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
        });
        
        const tabButtons = document.querySelectorAll('.tab-btn');
        tabButtons.forEach((btn, index) => {
            btn.setAttribute('aria-label', `View ${btn.textContent}`);
            btn.setAttribute('role', 'tab');
            btn.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
        });
        
        console.log('Enhanced accessibility attributes added');
    }, 200);
});

// Enhanced error handling
window.addEventListener('error', function(e) {
    console.error('Glassmorphism AI Report error:', e.error);
});

// Performance monitoring with glassmorphism metrics
if ('performance' in window) {
    window.addEventListener('load', function() {
        setTimeout(function() {
            const perfData = performance.getEntriesByType('navigation')[0];
            if (perfData) {
                console.log('Glassmorphism AI Report loaded in:', perfData.loadEventEnd - perfData.fetchStart, 'ms');
                
                // Log glassmorphism-specific metrics
                const glassPanels = document.querySelectorAll('.glass-panel');
                console.log('Glass panels rendered:', glassPanels.length);
            }
        }, 0);
    });
}

// Export functions for potential testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeNavigation,
        initializeProgressBar,
        initializeTimeline,
        initializeImpactAnalysis,
        loadImpactData,
        initializeGlassmorphismEffects,
        addRippleEffect
    };
}

console.log('Fixed Glassmorphism AI Future Report JavaScript loaded successfully');