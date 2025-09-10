/* ============================================
   WEBSITE KARTU UCAPAN DIGITAL - MAIN JAVASCRIPT
   Interaktivitas dan Animasi untuk Pengalaman Menyentuh
============================================ */

document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize AOS (Animate On Scroll) Library
    AOS.init({
        duration: 1000,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });

    // ============================================
    // SMOOTH SCROLLING FOR NAVIGATION
    // ============================================
    const scrollIndicator = document.querySelector('.scroll-indicator');
    
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            document.querySelector('#prologue').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // ============================================
    // PARALLAX EFFECT FOR HERO SECTION
    // ============================================
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallax = document.querySelector('.hero-background');
        const speed = scrolled * 0.5;
        
        if (parallax) {
            parallax.style.transform = `translateY(${speed}px)`;
        }
    });

    // ============================================
    // TYPEWRITER EFFECT FOR HERO TITLE
    // ============================================
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        }
        type();
    }

    // Apply typewriter effect to hero title after a delay
    setTimeout(() => {
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle) {
            const originalText = heroTitle.textContent;
            typeWriter(heroTitle, originalText, 80);
        }
    }, 1000);

    // ============================================
    // INTERACTIVE TIMELINE HOVER EFFECTS
    // ============================================
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    timelineItems.forEach(item => {
        const image = item.querySelector('.timeline-image img');
        const content = item.querySelector('.timeline-content');
        
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'all 0.3s ease';
            
            if (image) {
                image.style.filter = 'brightness(1.1) contrast(1.1)';
            }
            
            if (content) {
                content.style.transform = 'translateY(-5px)';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            
            if (image) {
                image.style.filter = 'brightness(1) contrast(1)';
            }
            
            if (content) {
                content.style.transform = 'translateY(0)';
            }
        });
    });

    // ============================================
    // GALLERY LIGHTBOX EFFECT
    // ============================================
    const galleryItems = document.querySelectorAll('.gallery-item img');
    
    // Create lightbox overlay
    const lightboxOverlay = document.createElement('div');
    lightboxOverlay.className = 'lightbox-overlay';
    lightboxOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.9);
        display: none;
        justify-content: center;
        align-items: center;
        z-index: 10000;
        cursor: pointer;
    `;
    
    const lightboxImage = document.createElement('img');
    lightboxImage.style.cssText = `
        max-width: 90%;
        max-height: 90%;
        object-fit: contain;
        border-radius: 10px;
        box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    `;
    
    lightboxOverlay.appendChild(lightboxImage);
    document.body.appendChild(lightboxOverlay);
    
    // Add click event to gallery items
    galleryItems.forEach(img => {
        img.addEventListener('click', function() {
            lightboxImage.src = this.src;
            lightboxOverlay.style.display = 'flex';
            lightboxOverlay.style.animation = 'fadeIn 0.3s ease';
            document.body.style.overflow = 'hidden';
        });
    });
    
    // Close lightbox
    lightboxOverlay.addEventListener('click', function() {
        this.style.display = 'none';
        document.body.style.overflow = 'auto';
    });

    // ============================================
    // FLOATING HEARTS ANIMATION TRIGGER
    // ============================================
    function createFloatingHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = ['💕', '💖', '💝', '💗', '💞'][Math.floor(Math.random() * 5)];
        heart.style.cssText = `
            position: fixed;
            font-size: ${Math.random() * 1 + 1}rem;
            left: ${Math.random() * 100}%;
            bottom: -50px;
            pointer-events: none;
            z-index: 1000;
            animation: floatUp 4s ease-out forwards;
        `;
        
        document.body.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 4000);
    }

    // Add CSS for floating animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes floatUp {
            0% {
                opacity: 0;
                transform: translateY(0) scale(0) rotate(0deg);
            }
            10% {
                opacity: 1;
                transform: translateY(-20px) scale(1) rotate(5deg);
            }
            90% {
                opacity: 1;
                transform: translateY(-100vh) scale(1) rotate(360deg);
            }
            100% {
                opacity: 0;
                transform: translateY(-110vh) scale(0) rotate(360deg);
            }
        }
        
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
    `;
    document.head.appendChild(style);

    // Trigger hearts periodically
    setInterval(createFloatingHeart, 3000);

    // ============================================
    // SCROLL PROGRESS INDICATOR
    // ============================================
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 0%;
        height: 3px;
        background: linear-gradient(90deg, #d4a574, #cc6b49);
        z-index: 10000;
        transition: width 0.1s ease;
    `;
    document.body.appendChild(progressBar);
    
    window.addEventListener('scroll', function() {
        const scrollTop = document.documentElement.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercentage = (scrollTop / scrollHeight) * 100;
        progressBar.style.width = scrollPercentage + '%';
    });

    // ============================================
    // SECTION FADE IN ON SCROLL
    // ============================================
    const sections = document.querySelectorAll('section');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const sectionObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        sectionObserver.observe(section);
    });

    // ============================================
    // GRATITUDE QUOTE HIGHLIGHT ANIMATION
    // ============================================
    const gratitudeQuote = document.querySelector('.gratitude-quote');
    
    if (gratitudeQuote) {
        const words = gratitudeQuote.textContent.split(' ');
        const importantWords = ['kekuatanmu', 'memilih', 'tinggal', 'berjuang', 'menyelamatkan', 'pejuang', 'terhebatku'];
        
        gratitudeQuote.innerHTML = words.map(word => {
            const cleanWord = word.replace(/[.,!?";]/g, '');
            if (importantWords.includes(cleanWord.toLowerCase())) {
                return `<span class="highlight-word">${word}</span>`;
            }
            return word;
        }).join(' ');
        
        // Add CSS for highlight animation
        const highlightStyle = document.createElement('style');
        highlightStyle.textContent = `
            .highlight-word {
                color: #d4a574;
                font-weight: 600;
                position: relative;
                display: inline-block;
                animation: glow 2s ease-in-out infinite alternate;
            }
            
            @keyframes glow {
                from {
                    text-shadow: 0 0 5px rgba(212, 165, 116, 0.5);
                }
                to {
                    text-shadow: 0 0 20px rgba(212, 165, 116, 0.8);
                }
            }
        `;
        document.head.appendChild(highlightStyle);
    }

    // ============================================
    // BIRTHDAY SECTION SPECIAL EFFECTS
    // ============================================
    const birthdaySection = document.getElementById('birthday-wish');
    
    const birthdayObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Create celebration particles
                createCelebrationParticles();
                
                // Add special glow to birthday image
                const birthdayImage = entry.target.querySelector('.birthday-image img');
                if (birthdayImage) {
                    birthdayImage.style.boxShadow = '0 0 30px rgba(212, 165, 116, 0.6)';
                    birthdayImage.style.animation = 'pulse 2s ease-in-out infinite';
                }
            }
        });
    }, { threshold: 0.5 });
    
    if (birthdaySection) {
        birthdayObserver.observe(birthdaySection);
    }
    
    function createCelebrationParticles() {
        const particles = ['🎉', '🎊', '✨', '🌟', '💫'];
        
        for (let i = 0; i < 20; i++) {
            setTimeout(() => {
                const particle = document.createElement('div');
                particle.innerHTML = particles[Math.floor(Math.random() * particles.length)];
                particle.style.cssText = `
                    position: fixed;
                    font-size: ${Math.random() * 1.5 + 1}rem;
                    left: ${Math.random() * 100}%;
                    top: ${Math.random() * 100}%;
                    pointer-events: none;
                    z-index: 10000;
                    animation: celebrate 3s ease-out forwards;
                `;
                
                document.body.appendChild(particle);
                
                setTimeout(() => {
                    particle.remove();
                }, 3000);
            }, i * 100);
        }
    }
    
    // Add celebration animation
    const celebrationStyle = document.createElement('style');
    celebrationStyle.textContent = `
        @keyframes celebrate {
            0% {
                opacity: 1;
                transform: scale(0) rotate(0deg);
            }
            50% {
                opacity: 1;
                transform: scale(1) rotate(180deg);
            }
            100% {
                opacity: 0;
                transform: scale(0) rotate(360deg);
            }
        }
        
        @keyframes pulse {
            0%, 100% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.05);
            }
        }
    `;
    document.head.appendChild(celebrationStyle);

    // ============================================
    // LAZY LOADING FOR IMAGES
    // ============================================
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.addEventListener('load', function() {
                    this.classList.add('loaded');
                });
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));

    // ============================================
    // TOUCH GESTURES FOR MOBILE
    // ============================================
    let touchStartY = 0;
    
    document.addEventListener('touchstart', function(e) {
        touchStartY = e.touches[0].clientY;
    });
    
    document.addEventListener('touchend', function(e) {
        const touchEndY = e.changedTouches[0].clientY;
        const diff = touchStartY - touchEndY;
        
        // If swipe up gesture detected on hero section
        if (diff > 50 && window.scrollY < 100) {
            document.querySelector('#prologue').scrollIntoView({
                behavior: 'smooth'
            });
        }
    });

    // ============================================
    // CONSOLE MESSAGE FOR DEVELOPER
    // ============================================
    console.log(`
    ❤️ Website Kartu Ucapan Digital ❤️
    
    Dibuat dengan cinta untuk menceritakan perjalanan
    dari Februari hingga September.
    
    Terima kasih telah mengunjungi kartu ucapan ini.
    Semoga pesan cinta ini sampai ke hati yang tepat.
    
    Happy Birthday! 🎉
    `);

});

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================

// Preload critical images
function preloadImages() {
    const criticalImages = [
        'https://images.unsplash.com/photo-1518837695005-2083093ee35b',
        'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2',
        'https://images.unsplash.com/photo-1522673607200-164d1b6ce486'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Call preload when page loads
window.addEventListener('load', preloadImages);

// Throttle scroll events for better performance
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Apply throttling to scroll events
const throttledScroll = throttle(function() {
    // Scroll-based animations will be handled here
}, 16); // ~60fps

window.addEventListener('scroll', throttledScroll);