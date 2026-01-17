document.addEventListener('DOMContentLoaded', () => {
    // Initialize particle background
    initParticles();

    // Typing Effect for Hero Subtitle
    const subtitle = document.querySelector('.hero-subtitle');
    if (subtitle) {
        typeEffect(subtitle, "Computer Science Student | Software Developer");
    }

    // Load Projects
    loadProjects();

    // Scroll Animations
    setupScrollAnimations();

    // Contact Form Handling
    setupContactForm();

    // Smooth Scroll for Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});


function initParticles() {
    const canvas = document.createElement('canvas');
    canvas.id = 'particles-canvas';
    document.body.prepend(canvas);

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particlesArray;

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2 + 0.1; // Small delicate particles
            this.speedX = (Math.random() * 1 - 0.5) * 0.5; // Slow movement
            this.speedY = (Math.random() * 1 - 0.5) * 0.5;
            this.color = 'rgba(169, 146, 112, 0.3)'; // Gold color
        }
        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x > canvas.width || this.x < 0) this.speedX = -this.speedX;
            if (this.y > canvas.height || this.y < 0) this.speedY = -this.speedY;
        }
        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function init() {
        particlesArray = [];
        let numberOfParticles = (canvas.width * canvas.height) / 15000;
        for (let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle());
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
        }
        requestAnimationFrame(animate);
    }

    // Handle Window Resize
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        init();
    });

    init();
    animate();
}

function typeEffect(element, text) {
    element.innerText = "";
    let i = 0;
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, 50); // Typing speed
        }
    }
    typing();
}


async function loadProjects() {
    const projectsContainer = document.querySelector('.projects-grid');
    if (!projectsContainer) return;

    try {
        const response = await fetch('./data/projects.json');
        if (!response.ok) throw new Error('Failed to load projects');

        const projects = await response.json();

        projectsContainer.innerHTML = projects.map(project => `
            <div class="project-card fade-in">
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-desc">${project.description}</p>
                    <div class="project-tags">
                        ${project.concepts.map(concept => `<span class="tag">${concept}</span>`).join('')}
                    </div>
                </div>
            </div>
        `).join('');

        // Re-trigger animation setup for new elements
        setupScrollAnimations();

    } catch (error) {
        console.error('Error:', error);
        projectsContainer.innerHTML = '<p>Unable to load projects at this time.</p>';
    }
}

function setupScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('section, .project-card, .cert-card, .stat-card').forEach(el => {
        observer.observe(el);
    });
}

function setupContactForm() {
    const form = document.querySelector('.contact-form');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Simulate form submission
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerText;

        submitBtn.disabled = true;
        submitBtn.innerText = "Sending...";

        setTimeout(() => {
            alert('Thank you! Your message has been sent successfully.');
            form.reset();
            submitBtn.disabled = false;
            submitBtn.innerText = originalText;
        }, 1500);
    });
}
