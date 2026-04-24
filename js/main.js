// ==========================================
// OPEN ENTREPRENEURSHIP CENTER - SOGANG UNIVERSITY
// Main JavaScript File
// ==========================================

// ========== NAVIGATION ===========
const navbar = document.getElementById('navbar');
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger
    const spans = hamburger.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(8px, 8px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(8px, -8px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = hamburger.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Smooth scroll for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Active nav link on scroll
function setActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + 150;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.style.color = 'var(--primary-red)';
                } else {
                    link.style.color = '';
                }
            });
        }
    });
}

window.addEventListener('scroll', setActiveNavLink);

// ========== HERO SECTION - PARTICLE ANIMATION ===========
const particleContainer = document.getElementById('particles');

function createParticles() {
    const particleCount = 100;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random position
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        // Random size
        const size = Math.random() * 3 + 1;
        
        // Random animation duration
        const duration = Math.random() * 20 + 10;
        
        particle.style.cssText = `
            position: absolute;
            left: ${x}%;
            top: ${y}%;
            width: ${size}px;
            height: ${size}px;
            background: radial-gradient(circle, rgba(200, 16, 46, 0.8), transparent);
            border-radius: 50%;
            animation: float ${duration}s infinite ease-in-out;
            animation-delay: ${Math.random() * 5}s;
        `;
        
        particleContainer.appendChild(particle);
    }
    
    // Add CSS animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% {
                transform: translate(0, 0);
                opacity: 0.2;
            }
            25% {
                transform: translate(20px, -30px);
                opacity: 0.6;
            }
            50% {
                transform: translate(-15px, 20px);
                opacity: 0.3;
            }
            75% {
                transform: translate(30px, 10px);
                opacity: 0.8;
            }
        }
    `;
    document.head.appendChild(style);
}

createParticles();

// ========== PARALLAX EFFECT ===========
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-content, .particle-container');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ========== PROJECT MODAL ===========
const modal = document.getElementById('projectModal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalClose = document.querySelector('.modal-close');

const projectData = {
    webtoon: {
        title: '웹툰 IP 자동 변환 시스템',
        description: '더그림엔터테인먼트와 협력하여 개발한 웹툰 IP 자동 변환 시스템입니다. 컴퓨터 비전과 스타일 변환 기술을 활용하여 웹툰을 다양한 미디어 포맷(애니메이션, 게임, 영화 등)으로 자동 변환합니다. 기계학습 기반 알고리즘을 통해 원작의 스타일을 유지하면서도 각 미디어에 최적화된 콘텐츠를 생성합니다. 이를 통해 웹툰 IP의 확장 가능성을 극대화하고, 콘텐츠 제작 시간과 비용을 획기적으로 절감할 수 있습니다.',
        image: 'https://i.namu.wiki/i/47TvA76bcQ4fMDnu115Fx8wBPS-CtLSj6Q3UWtQiwqFkLCln0fpVq95Rh9oUv2q-TDxPNt1vwaLhtd3MPgtPLQ.webp'
    },
    medical: {
        title: '의료 기록 지능형 분석 시스템',
        description: '히포크랏랩스와 함께 개발한 의료 기록 자동 요약 및 분석 시스템입니다. 자연어 처리 기술을 활용하여 방대한 양의 진료 기록을 자동으로 분석하고 핵심 정보를 추출합니다. 의료진의 업무 효율성을 극대화하고, 환자 진료의 질을 향상시키는 것을 목표로 합니다. HIPAA 및 국내 의료 데이터 보안 규정을 준수하며, 의료 전문 용어와 맥락을 정확히 이해하는 특화된 머신러닝 모델을 사용합니다.',
        image: 'https://pimg.mk.co.kr/news/cms/202507/16/news-p.v1.20250716.f19278ba60484b0cb7d2ad12f81976e1_P1.png'
    },
    smartfarm: {
        title: '스마트팜 관리 자동화 솔루션',
        description: '인피버티와 협력하여 개발한 차세대 농업 자동화 시스템입니다. IoT 센서를 통해 수집된 환경 데이터를 지능형 시스템이 실시간으로 분석하여 최적의 재배 환경을 자동으로 제어합니다. 온도, 습도, 조도, CO2 농도 등을 종합적으로 고려한 지능형 제어로 작물의 수확량과 품질을 극대화합니다. 또한 데이터 기반 수확량 예측 모델을 통해 생산 계획 수립을 지원하고, 병충해 조기 감지 시스템으로 농작물 피해를 최소화합니다.',
        image: 'https://sspark.genspark.ai/cfimages?u1=iMhQeAyS%2F0oFeN39xLifXzmw89h5jtoppaTAMRYLQy%2Bh%2F%2FLGBPNIk7YyavUcE6B%2FVsTpDU4HuYttTi6D1%2FjMwQEvIg8715GJDic90A152fD9PZfAx0TpDsuhp1V%2FIOyW6ehbflqttiePzWoWTzPFW%2Bg8dkFAMRyZPSHIA8ZrJmI6jfhn&u2=aACXysZdfqZ0KYEw&width=2560'
    },
    agentic: {
        title: '지능형 인재 평가 시스템',
        description: 'LG CNS와 공동 개발한 차세대 지능형 인사 평가 시스템입니다. 고도화된 알고리즘을 통해 다각도로 인재를 평가합니다. 기술 역량, 소프트 스킬, 리더십, 협업 능력 등을 종합적으로 분석하고, 객관적이고 공정한 평가 결과를 제공합니다. 자연어 처리와 감정 분석 기술을 활용하여 면접 내용을 분석하고, 과거 업무 성과 데이터를 기반으로 미래 성과를 예측합니다.',
        image: 'https://cursor.com/docs-static/images/webagent/cursor-web-2.png'
    },
    neural: {
        title: '모델 최적화 연구',
        description: '차세대 머신러닝 모델의 경량화 및 효율성 향상을 위한 알고리즘 연구 프로젝트입니다. 자동화된 탐색 기술을 활용하여 작업별로 최적화된 모델 구조를 탐색합니다. 모델 압축, 양자화, 프루닝 등의 기법을 결합하여 모바일 및 엣지 디바이스에서도 고성능 시스템을 구동할 수 있는 경량 모델을 개발합니다. 이를 통해 클라우드 의존도를 낮추고, 실시간 서비스의 가능성을 확장합니다.',
        image: 'https://sspark.genspark.ai/cfimages?u1=yyKVWAQRUHpTdxA%2FdvSeUB2%2B%2FvzSDAhlkiX6Fb%2BBp%2F7JRpzvJhIRlrRpUb40KA%2FsCgU5G1h84cD%2FvozM7lHqrD4OZtcMj%2B5YPimNCLFcbvOctB8YZYV8xg71Upgtxhez1tSyZXY2SlqxQvWQbyU3HolidADXQ%2Fd5OU76H91KF9QjFzDa23fUSeiOL7uLXvLm9nxX%2BmJ7JYgzJZRKk%2FjA2AVgKWjV7L513noJstn4ssuO7VhRp%2FKl9axNhbPB&u2=7uRLTxzJqOuyx4y3&width=2560'
    },
    collaboration: {
        title: '산학 협력 기술 플랫폼',
        description: '기업, 대학, 연구소를 연결하는 오픈 이노베이션 기술 협업 플랫폼입니다. 클라우드 기반 협업 환경에서 기술 개발, 데이터 공유, 공동 연구를 수행할 수 있습니다. 다양한 산업 분야의 실제 문제를 학계와 연구소가 함께 해결하며, 기술 이전과 상용화를 촉진합니다. 플랫폼 내에서 기술 마켓플레이스, 데이터셋 공유, 협업 도구, 프로젝트 관리 등의 기능을 제공하여 개방형 혁신 생태계를 구축합니다.',
        image: 'https://sspark.genspark.ai/cfimages?u1=XEY9T8E7CwY9wkv6MTMBg8tKFJdHNxIzOP87iDMaieu2sQ215G8%2FlJl3Bmv%2Bm8G6y%2BXWaYgrf7k7Kk8siAJBBK8ZOW7xw7BxhCwq%2FbUxddGsalUVSEL8wDcRIzjXPQo8ZhyezjPunmqA5p3A4MOYPlkwjKUbX9MBZoUeS6k5X8CgdUe0WAd2021oOyGCSrm4vo5eiQCqwjJt9Wsq&u2=GuMizS0PNKpZSfRH&width=2560'
    }
};

// Open modal when project card is clicked
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
        const projectKey = card.getAttribute('data-project');
        const project = projectData[projectKey];
        
        if (project) {
            modalImage.src = project.image;
            modalTitle.textContent = project.title;
            modalDescription.textContent = project.description;
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    });
});

// Close modal
modalClose.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal with ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// ========== COUNTER ANIMATION ===========
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + '+';
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Intersection Observer for counter animation
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            const target = parseInt(entry.target.getAttribute('data-target'));
            animateCounter(entry.target, target);
            entry.target.classList.add('counted');
        }
    });
}, observerOptions);

document.querySelectorAll('.stat-number').forEach(counter => {
    counterObserver.observe(counter);
});

// ========== SCROLL ANIMATIONS (AOS-like) ===========
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('[data-aos]');
    
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(element => {
        scrollObserver.observe(element);
    });
}

initScrollAnimations();

// ========== BACK TO TOP BUTTON ===========
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTopBtn.classList.add('visible');
    } else {
        backToTopBtn.classList.remove('visible');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ========== TYPING EFFECT FOR HERO TITLE ===========
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            if (text.charAt(i) === '<') {
                // Handle HTML tags
                const closingTag = text.indexOf('>', i);
                element.innerHTML += text.substring(i, closingTag + 1);
                i = closingTag + 1;
            } else {
                element.innerHTML += text.charAt(i);
                i++;
            }
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Optional: Activate typing effect on page load
// Uncomment the following lines to enable typing effect
/*
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    const originalText = heroTitle.innerHTML;
    typeWriter(heroTitle, originalText, 50);
});
*/

// ========== CURSOR GLOW EFFECT ===========
function createCursorGlow() {
    const glow = document.createElement('div');
    glow.className = 'cursor-glow';
    glow.style.cssText = `
        position: fixed;
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background: radial-gradient(circle, rgba(200, 16, 46, 0.35), rgba(200, 16, 46, 0.15) 50%, transparent 70%);
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.2s ease;
        display: none;
    `;
    document.body.appendChild(glow);
    
    let mouseX = 0, mouseY = 0;
    let glowX = 0, glowY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        glow.style.display = 'block';
    });
    
    function animateGlow() {
        glowX += (mouseX - glowX) * 0.1;
        glowY += (mouseY - glowY) * 0.1;
        
        glow.style.left = glowX - 100 + 'px';
        glow.style.top = glowY - 100 + 'px';
        
        requestAnimationFrame(animateGlow);
    }
    
    animateGlow();
}

// Activate cursor glow on desktop only
if (window.innerWidth > 768) {
    createCursorGlow();
}

// ========== LAZY LOADING IMAGES ===========
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.getAttribute('data-src');
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

lazyLoadImages();

// ========== PERFORMANCE OPTIMIZATION ===========
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll-heavy functions
const debouncedSetActiveNav = debounce(setActiveNavLink, 100);
window.addEventListener('scroll', debouncedSetActiveNav);

// ========== CONSOLE MESSAGE ===========
console.log('%c오픈앙트레프레너십센터', 'font-size: 24px; font-weight: bold; color: #C8102E;');
console.log('%cCentre for Open Entrepreneurship - Sogang University', 'font-size: 14px; color: #666;');
console.log('%c기술과 혁신을 통한 창업·연구·산업의 경계를 허물다', 'font-size: 12px; color: #999;');

// ========== PAGE LOAD ANIMATION ===========
window.addEventListener('load', () => {
    // Fade in page content
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
    
    // Trigger initial animations
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.style.animation = 'fadeInUp 1s ease forwards';
    }
    
    // Add fadeInUp animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
});

// ========== PREVENT HORIZONTAL SCROLL ===========
document.addEventListener('DOMContentLoaded', () => {
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.overflowX = 'hidden';
});

// ========== ERROR HANDLING ===========
window.addEventListener('error', (e) => {
    console.error('Page error:', e.message);
});

// Prevent context menu on images (optional)
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('contextmenu', (e) => {
        // e.preventDefault(); // Uncomment to disable right-click on images
    });
});
