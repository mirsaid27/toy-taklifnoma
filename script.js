document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
    
    initConfig();
    initCustomCursor();
    initLoadingScreen();
    initParticles();
    initRosePetals();
    initFireflies();
    initMusicButton();
    initBismillahScreen();
    initEnvelopeScreen();
    initCountdown();
    initScrollAnimations();
    initGallery();
    initRSVP();
});

function initConfig() {
    document.getElementById('groomName').textContent = CONFIG.couple.groom;
    document.getElementById('brideName').textContent = CONFIG.couple.bride;
    document.getElementById('invitationMessage').textContent = CONFIG.wedding.invitationText;
    document.getElementById('dateDay').textContent = CONFIG.wedding.dateDay;
    document.getElementById('dateMonth').textContent = CONFIG.wedding.dateMonth;
    document.getElementById('dateYear').textContent = CONFIG.wedding.dateYear;
    document.getElementById('locationBtn').href = CONFIG.location.googleMapsUrl;
    document.getElementById('locationBtn').textContent = CONFIG.location.buttonText;
    document.getElementById('finalText').textContent = CONFIG.wedding.finalText;
    document.getElementById('finalGroom').textContent = CONFIG.couple.groom;
    document.getElementById('finalBride').textContent = CONFIG.couple.bride;
}

function initCustomCursor() {
    const cursor = document.querySelector('.custom-cursor');
    
    if (cursor && window.innerWidth > 768) {
        document.addEventListener('mousemove', function(e) {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
        
        const interactiveElements = document.querySelectorAll('button, a, .gallery-item, input, textarea');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
            });
            el.addEventListener('mouseleave', () => {
                cursor.style.transform = 'translate(-50%, -50%) scale(1)';
            });
        });
    }
}

function initLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    
    setTimeout(() => {
        loadingScreen.style.opacity = '0';
        loadingScreen.style.transition = 'opacity 1s ease';
        setTimeout(() => {
            loadingScreen.style.display = 'none';
            showBismillah();
        }, 1000);
    }, 2500);
}

function showBismillah() {
    const screenBismillah = document.getElementById('screenBismillah');
    screenBismillah.style.display = 'flex';
}

function initBismillahScreen() {
    setTimeout(() => {
        hideBismillah();
    }, 5000);
}

function hideBismillah() {
    const screenBismillah = document.getElementById('screenBismillah');
    const screenEnvelope = document.getElementById('screenEnvelope');
    
    screenBismillah.style.opacity = '0';
    screenBismillah.style.transition = 'opacity 1s ease';
    
    setTimeout(() => {
        screenBismillah.style.display = 'none';
        screenEnvelope.classList.add('active');
    }, 1000);
}

function initEnvelopeScreen() {
    const openBtn = document.getElementById('openInvitationBtn');
    openBtn.addEventListener('click', openEnvelope);
}

function openEnvelope() {
    const envelope = document.getElementById('envelope');
    const seal = document.getElementById('envelopeSeal');
    const letter = document.getElementById('envelopeLetter');
    const screenEnvelope = document.getElementById('screenEnvelope');
    const invitationSections = document.getElementById('invitationSections');
    
    const envelopeFlap = envelope.querySelector('.envelope-flap');
    
    seal.style.transition = 'all 0.5s ease';
    seal.style.transform = 'translate(-50%, -50%) scale(0) rotate(45deg)';
    seal.style.opacity = '0';
    
    setTimeout(() => {
        envelopeFlap.style.transition = 'transform 0.8s ease';
        envelopeFlap.style.transform = 'rotateX(-180deg)';
        
        setTimeout(() => {
            letter.style.transition = 'all 1s ease';
            letter.style.opacity = '1';
            letter.style.transform = 'translate(-50%, -150%)';
            
            setTimeout(() => {
                screenEnvelope.style.transition = 'opacity 1s ease';
                screenEnvelope.style.opacity = '0';
                
                setTimeout(() => {
                    screenEnvelope.style.display = 'none';
                    invitationSections.classList.add('active');
                    animateHero();
                    createConfetti();
                }, 1000);
            }, 1000);
        }, 800);
    }, 500);
}

function animateHero() {
    const groomName = document.getElementById('groomName');
    const brideName = document.getElementById('brideName');
    const heartDivider = document.querySelector('.heart-divider');
    const invitationMessage = document.getElementById('invitationMessage');
    
    setTimeout(() => {
        groomName.style.transition = 'all 1s ease';
        groomName.style.opacity = '1';
        groomName.style.transform = 'translateY(0)';
    }, 300);
    
    setTimeout(() => {
        heartDivider.style.transition = 'all 0.8s ease';
        heartDivider.style.opacity = '1';
        heartDivider.style.transform = 'scale(1)';
    }, 800);
    
    setTimeout(() => {
        brideName.style.transition = 'all 1s ease';
        brideName.style.opacity = '1';
        brideName.style.transform = 'translateY(0)';
    }, 1300);
    
    setTimeout(() => {
        invitationMessage.style.transition = 'all 1s ease';
        invitationMessage.style.opacity = '1';
        invitationMessage.style.transform = 'translateY(0)';
    }, 1800);
}

function initCountdown() {
    const weddingDate = new Date(CONFIG.wedding.date).getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = weddingDate - now;
        
        if (distance > 0) {
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            
            animateNumber('days', days);
            animateNumber('hours', hours);
            animateNumber('minutes', minutes);
            animateNumber('seconds', seconds);
        }
    }
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
}

function animateNumber(id, value) {
    const element = document.getElementById(id);
    const newValue = String(value).padStart(2, '0');
    
    if (element.textContent !== newValue) {
        element.style.transform = 'scale(1.2)';
        element.style.transition = 'transform 0.2s ease';
        
        setTimeout(() => {
            element.textContent = newValue;
            element.style.transform = 'scale(1)';
        }, 100);
    }
}

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('timeline-content')) {
                    entry.target.style.transition = 'all 0.8s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateX(0)';
                }
                if (entry.target.classList.contains('gallery-item')) {
                    entry.target.style.transition = 'all 0.6s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'scale(1)';
                }
                if (entry.target.classList.contains('date-day')) {
                    entry.target.style.transition = 'all 0.8s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'scale(1)';
                }
                if (entry.target.classList.contains('date-month')) {
                    entry.target.style.transition = 'all 0.8s ease 0.3s';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
                if (entry.target.classList.contains('date-year')) {
                    entry.target.style.transition = 'all 0.8s ease 0.6s';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'scale(1)';
                }
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.timeline-content').forEach(el => observer.observe(el));
    document.querySelectorAll('.gallery-item').forEach((el, index) => {
        el.style.transitionDelay = (index * 0.1) + 's';
        observer.observe(el);
    });
    observer.observe(document.getElementById('dateDay'));
    observer.observe(document.getElementById('dateMonth'));
    observer.observe(document.getElementById('dateYear'));
}

function initGallery() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const lightboxClose = document.getElementById('lightboxClose');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            lightbox.classList.add('active');
        });
    });
    
    lightboxClose.addEventListener('click', () => {
        lightbox.classList.remove('active');
    });
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
        }
    });
}

function initRSVP() {
    const form = document.getElementById('rsvpForm');
    const successMessage = document.getElementById('successMessage');
    
    const savedRSVP = localStorage.getItem('weddingRSVP');
    if (savedRSVP) {
        form.classList.add('hide');
        successMessage.classList.add('show');
    }
    
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('rsvpName').value,
            phone: document.getElementById('rsvpPhone').value,
            attend: document.querySelector('input[name="attend"]:checked').value,
            message: document.getElementById('rsvpMessage').value,
            timestamp: new Date().toISOString()
        };
        
        localStorage.setItem('weddingRSVP', JSON.stringify(formData));
        
        form.classList.add('hide');
        successMessage.classList.add('show');
        
        createConfetti();
    });
}

function initParticles() {
    const container = document.getElementById('particlesContainer');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        createParticle(container);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 8 + 's';
    particle.style.animationDuration = (5 + Math.random() * 10) + 's';
    
    container.appendChild(particle);
}

function initRosePetals() {
    const container = document.getElementById('rosePetals');
    const petalCount = 15;
    
    for (let i = 0; i < petalCount; i++) {
        createPetal(container);
    }
}

function createPetal(container) {
    const petal = document.createElement('div');
    petal.className = 'petal';
    
    petal.style.left = Math.random() * 100 + '%';
    petal.style.top = -20 + 'px';
    petal.style.animationDelay = Math.random() * 10 + 's';
    petal.style.animationDuration = (8 + Math.random() * 7) + 's';
    petal.style.opacity = 0.3 + Math.random() * 0.4;
    
    container.appendChild(petal);
}

function initFireflies() {
    const container = document.getElementById('fireflies');
    const fireflyCount = 20;
    
    for (let i = 0; i < fireflyCount; i++) {
        createFirefly(container);
    }
}

function createFirefly(container) {
    const firefly = document.createElement('div');
    firefly.className = 'firefly';
    
    firefly.style.left = Math.random() * 100 + '%';
    firefly.style.top = Math.random() * 100 + '%';
    firefly.style.animationDelay = Math.random() * 3 + 's';
    
    container.appendChild(firefly);
}

function initMusicButton() {
    const button = document.getElementById('musicButton');
    const music = document.getElementById('backgroundMusic');
    let isPlaying = false;
    
    button.addEventListener('click', () => {
        if (isPlaying) {
            music.pause();
            button.classList.remove('active');
        } else {
            music.play().catch(() => {});
            button.classList.add('active');
        }
        isPlaying = !isPlaying;
    });
}

function createConfetti() {
    const container = document.getElementById('confetti');
    const colors = ['#d4af37', '#e6c79c', '#f4ede4', '#ffffff'];
    const confettiCount = 100;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti-piece';
        
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = -20 + 'px';
        confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.animationDelay = Math.random() * 2 + 's';
        confetti.style.animationDuration = (2 + Math.random() * 2) + 's';
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        
        container.appendChild(confetti);
        
        setTimeout(() => {
            confetti.remove();
        }, 5000);
    }
}