// Enhanced Professional AI Report JavaScript with Fixed Navigation and Timeline

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

// Enhanced animation and interaction tracking
let interactionCount = 0;

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 AI Future Report - Enhanced Glassmorphism Version Loading...');
    
    // Initialize all functionality with enhanced error handling
    try {
        initializeNavigation();
        initializeProgressBar();
        initializeTimeline();
        initializeImpactAnalysis();
        initializeMobileNav();
        initializeSmoothScrolling();
        initializeSourcesSection();
        initializeGlassmorphismEffects();
        initializeAccessibilityFeatures();
        
        // Load initial impact data
        setTimeout(() => {
            loadImpactData('positive');
        }, 100);
        
        console.log('✅ Application initialized successfully');
        
    } catch (error) {
        console.error('❌ Initialization error:', error);
        displayErrorMessage('Application initialization failed. Please refresh the page.');
    }
});

// Fixed Navigation functionality
function initializeNavigation() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    
    console.log('🧭 Initializing navigation with', navLinks.length, 'nav links');
    
    // Add scroll effect to navbar with glassmorphism
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Update active nav link based on scroll position
        updateActiveNavLink();
    });
    
    // Fixed click handlers to nav links
    navLinks.forEach((link, index) => {
        const href = link.getAttribute('href');
        console.log(`🔗 Setting up nav link ${index}: ${href}`);
        
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Track interaction
            interactionCount++;
            
            const targetId = this.getAttribute('href').substring(1);
            console.log('🎯 Navigation clicked, target ID:', targetId);
            
            const targetElement = document.getElementById(targetId);
            console.log('Target element found:', !!targetElement);
            
            if (targetElement) {
                // Calculate offset with better precision
                const navbarHeight = navbar ? navbar.offsetHeight : 80;
                const offsetTop = targetElement.offsetTop - navbarHeight - 10;
                
                console.log('📍 Scrolling to position:', offsetTop);
                
                // Fixed smooth scroll implementation
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Update active state
                updateActiveNavLink();
                
                // Close mobile menu if open
                closeMobileNavigation();
                
                // Add visual feedback
                addGlassPulseEffect(targetElement);
                
            } else {
                console.error('❌ Target element not found:', targetId);
            }
        });
    });
    
    console.log('✅ Navigation initialized');
}

// Update active navigation link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// Enhanced progress bar functionality
function initializeProgressBar() {
    const progressBar = document.getElementById('progressBar');
    
    if (progressBar) {
        window.addEventListener('scroll', function() {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
            const clampedPercent = Math.min(100, Math.max(0, scrollPercent));
            
            progressBar.style.width = clampedPercent + '%';
        });
        
        console.log('📊 Progress bar initialized');
    }
}

// Fixed timeline functionality
function initializeTimeline() {
    const timelineButtons = document.querySelectorAll('.timeline-btn');
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    console.log('⏰ Timeline buttons found:', timelineButtons.length);
    console.log('📋 Timeline items found:', timelineItems.length);
    
    timelineButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const year = this.getAttribute('data-year');
            console.log('📅 Timeline button clicked for year:', year);
            
            // Remove active class from all buttons
            timelineButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-selected', 'false');
            });
            
            // Add active class to clicked button
            this.classList.add('active');
            this.setAttribute('aria-selected', 'true');
            
            // Hide all timeline items
            timelineItems.forEach(item => {
                item.classList.remove('active');
            });
            
            // Show selected timeline item
            const targetItem = document.querySelector(`.timeline-item[data-year="${year}"]`);
            console.log('Target timeline item:', !!targetItem);
            
            if (targetItem) {
                targetItem.classList.add('active');
                addGlassPulseEffect(targetItem);
                console.log('✨ Timeline item activated for year:', year);
            } else {
                console.error('❌ Timeline item not found for year:', year);
                // Fallback: show first item if target not found
                if (timelineItems.length > 0) {
                    timelineItems[0].classList.add('active');
                }
            }
        });
    });
    
    // Initialize first timeline item as active
    if (timelineItems.length > 0 && timelineButtons.length > 0) {
        timelineItems[0].classList.add('active');
        timelineButtons[0].classList.add('active');
    }
    
    console.log('✅ Timeline initialized');
}

// Enhanced Impact Analysis functionality
function initializeImpactAnalysis() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.impact-tab-content');
    
    console.log('📊 Impact tab buttons found:', tabButtons.length);
    console.log('📈 Impact tab contents found:', tabContents.length);
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const tab = this.getAttribute('data-tab');
            console.log('🔄 Impact tab clicked:', tab);
            
            // Update current tab
            currentImpactTab = tab;
            
            // Remove active class from all tab buttons
            tabButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.setAttribute('aria-selected', 'false');
            });
            
            // Add active class to clicked button
            this.classList.add('active');
            this.setAttribute('aria-selected', 'true');
            
            // Hide all tab contents
            tabContents.forEach(content => {
                content.classList.remove('active');
            });
            
            // Show selected tab content
            const targetContent = document.querySelector(`.impact-tab-content[data-tab="${tab}"]`);
            console.log('Target tab content:', !!targetContent);
            
            if (targetContent) {
                targetContent.classList.add('active');
                console.log('✨ Tab content activated for:', tab);
            }
            
            // Load data for selected tab
            setTimeout(() => {
                loadImpactData(tab, true);
            }, 50);
        });
    });
    
    // Initialize first tab as active
    if (tabContents.length > 0 && tabButtons.length > 0) {
        tabContents[0].classList.add('active');
        tabButtons[0].classList.add('active');
    }
    
    console.log('✅ Impact analysis initialized');
}

// Enhanced load impact data with animations
function loadImpactData(type, animated = false) {
    console.log('📊 Loading impact data for type:', type);
    
    const containerId = type === 'positive' ? 'positiveImpacts' : 'negativeImpacts';
    const container = document.getElementById(containerId);
    
    if (!container) {
        console.error('❌ Impact container not found:', containerId);
        return;
    }
    
    // Clear existing content
    container.innerHTML = '';
    
    const data = impactData[type];
    
    if (!data) {
        console.error('❌ No impact data found for type:', type);
        return;
    }
    
    const fragment = document.createDocumentFragment();
    
    Object.keys(data).forEach((year, index) => {
        const impactCard = document.createElement('div');
        impactCard.className = 'impact-card';
        
        impactCard.innerHTML = `
            <div class="year">${year}</div>
            <h3>${data[year].title}</h3>
            <ul>
                ${data[year].impacts.map(impact => `<li>${impact}</li>`).join('')}
            </ul>
        `;
        
        fragment.appendChild(impactCard);
        console.log('✨ Added impact card for year:', year);
    });
    
    container.appendChild(fragment);
    console.log('✅ Impact data loaded successfully for type:', type);
}

// Enhanced sources section functionality
function initializeSourcesSection() {
    const sourceCards = document.querySelectorAll('.source-card');
    const sourceCategories = document.querySelectorAll('.source-category');
    const sourceLinks = document.querySelectorAll('.source-link');
    
    console.log('📚 Sources section initialization:');
    console.log('- Source cards:', sourceCards.length);
    console.log('- Source categories:', sourceCategories.length);
    console.log('- Source links:', sourceLinks.length);
    
    // Add enhanced hover effects and animations to source cards
    sourceCards.forEach((card, index) => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.02)';
            addGlowEffect(this);
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
            removeGlowEffect(this);
        });
        
        // Add click analytics
        card.addEventListener('click', function() {
            const title = this.querySelector('.source-title');
            if (title) {
                console.log('📄 Source card interaction:', title.textContent);
            }
            addClickRippleEffect(this);
        });
    });
    
    // Enhanced external link handling
    sourceLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const sourceCard = this.closest('.source-card');
            if (sourceCard) {
                const sourceTitle = sourceCard.querySelector('.source-title');
                if (sourceTitle) {
                    console.log('🔗 Source link clicked:', this.href);
                    console.log('📊 Source accessed:', sourceTitle.textContent);
                }
            }
            
            // Ensure the link opens in a new tab with security measures
            this.setAttribute('target', '_blank');
            this.setAttribute('rel', 'noopener noreferrer');
            
            // Add click effect
            addClickRippleEffect(this);
        });
        
        // Add hover effects for source links
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    console.log('✅ Sources section initialized successfully');
}

// Enhanced glassmorphism effects
function initializeGlassmorphismEffects() {
    console.log('✨ Initializing glassmorphism effects...');
    
    // Add floating animation to glassmorphism elements
    const glassElements = document.querySelectorAll('.source-card, .timeline-content, .impact-card, .scenario-card, .recommendation-category');
    
    glassElements.forEach((element, index) => {
        // Add mouse parallax effect
        element.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;
            
            this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        });
    });
    
    console.log('✅ Glassmorphism effects initialized');
}

// Enhanced accessibility features
function initializeAccessibilityFeatures() {
    console.log('♿ Initializing accessibility features...');
    
    // Add comprehensive ARIA labels
    setTimeout(() => {
        const timelineButtons = document.querySelectorAll('.timeline-btn');
        timelineButtons.forEach((btn, index) => {
            btn.setAttribute('aria-label', `View ${btn.textContent} AI development timeline`);
            btn.setAttribute('role', 'tab');
            btn.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
        });
        
        const tabButtons = document.querySelectorAll('.tab-btn');
        tabButtons.forEach((btn, index) => {
            btn.setAttribute('aria-label', `View ${btn.textContent} of AI development`);
            btn.setAttribute('role', 'tab');
            btn.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
        });
        
        const sourceLinks = document.querySelectorAll('.source-link');
        sourceLinks.forEach(link => {
            const sourceCard = link.closest('.source-card');
            if (sourceCard) {
                const sourceTitle = sourceCard.querySelector('.source-title');
                const organization = sourceCard.querySelector('.source-organization');
                if (sourceTitle && organization) {
                    link.setAttribute('aria-label', `Visit external source: ${sourceTitle.textContent} from ${organization.textContent}`);
                }
            }
        });
        
        console.log('✅ Accessibility attributes added');
    }, 100);
    
    // Add keyboard navigation enhancements
    document.addEventListener('keydown', function(e) {
        // Enhanced timeline navigation
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
        
        // Enhanced tab navigation
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
    
    console.log('✅ Accessibility features initialized');
}

// Enhanced mobile navigation functionality
function initializeMobileNav() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            console.log('📱 Mobile nav toggled');
        });
        
        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                closeMobileNavigation();
                console.log('📱 Mobile nav closed via link click');
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                closeMobileNavigation();
            }
        });
        
        console.log('✅ Mobile navigation initialized');
    }
}

function closeMobileNavigation() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    if (navToggle && navMenu) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }
}

// Enhanced smooth scrolling for all internal links
function initializeSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    console.log('🔄 Initializing smooth scrolling for', links.length, 'links');
    
    links.forEach(link => {
        if (link.classList.contains('nav-link')) {
            return; // Skip nav links as they're handled elsewhere
        }
        
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const navbar = document.getElementById('navbar');
                const navbarHeight = navbar ? navbar.offsetHeight : 80;
                const offsetTop = targetElement.offsetTop - navbarHeight - 10;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                addGlassPulseEffect(targetElement);
            }
        });
    });
}

// Enhanced visual effects
function addGlassPulseEffect(element) {
    if (!element) return;
    
    element.style.animation = 'glassPulse 0.6s ease-out';
    setTimeout(() => {
        element.style.animation = '';
    }, 600);
}

function addClickRippleEffect(element) {
    if (!element) return;
    
    const ripple = document.createElement('div');
    ripple.style.cssText = `
        position: absolute;
        border-radius: 50%;
        background: rgba(50, 130, 184, 0.3);
        transform: scale(0);
        animation: ripple 0.6s linear;
        pointer-events: none;
        top: 50%;
        left: 50%;
        width: 50px;
        height: 50px;
        margin: -25px 0 0 -25px;
    `;
    
    element.style.position = 'relative';
    element.appendChild(ripple);
    
    setTimeout(() => {
        if (ripple.parentNode) {
            ripple.remove();
        }
    }, 600);
}

function addGlowEffect(element) {
    if (!element) return;
    element.style.filter = 'drop-shadow(0 0 20px rgba(50, 130, 184, 0.3))';
}

function removeGlowEffect(element) {
    if (!element) return;
    element.style.filter = '';
}

// Enhanced utility functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            func.apply(context, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function displayErrorMessage(message) {
    console.error('⚠️ Error:', message);
    
    // Create error notification
    const errorDiv = document.createElement('div');
    errorDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: rgba(255, 84, 89, 0.9);
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        z-index: 10000;
        backdrop-filter: blur(10px);
        font-family: var(--font-family-base);
        font-weight: 500;
    `;
    errorDiv.textContent = message;
    
    document.body.appendChild(errorDiv);
    
    setTimeout(() => {
        if (errorDiv.parentNode) {
            errorDiv.remove();
        }
    }, 5000);
}

// Enhanced error handling
window.addEventListener('error', function(e) {
    console.error('💥 Application error:', e.error);
});

// Add CSS animations for enhanced effects
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes glassPulse {
        0% { transform: scale(1); }
        50% { transform: scale(1.02); box-shadow: 0 0 30px rgba(50, 130, 184, 0.3); }
        100% { transform: scale(1); }
    }
    
    @keyframes ripple {
        to { transform: scale(4); opacity: 0; }
    }
`;

document.head.appendChild(styleSheet);

// Debug function
function debugSections() {
    const sections = document.querySelectorAll('section[id]');
    console.log('🔍 Available sections:');
    sections.forEach(section => {
        console.log(`- ${section.id}: ${section.offsetTop}px`);
    });
}

// Call debug function on load
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        debugSections();
        console.log('🎉 Enhanced AI Future Report fully loaded and interactive!');
    }, 1000);
});

// Export functions for potential testing
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeNavigation,
        initializeProgressBar,
        initializeTimeline,
        initializeImpactAnalysis,
        initializeSourcesSection,
        loadImpactData
    };
}