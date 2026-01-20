document.addEventListener('DOMContentLoaded', () => {
    // Initialize particle background
    initParticles();

    // Typing Effect for Hero Subtitle
    const subtitle = document.querySelector('.hero-subtitle');
    if (subtitle) {
        typeEffect(subtitle, "Computer Science Student | Aspiring Software Developer");
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
            this.color = 'rgba(210, 196, 158, 0.4)'; // Sand color from Earthy Harmony palette
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


const projectData = [
    {
        "title": "PyFlow",
        "description": "Logic-focused programming project emphasizing structured flow and visual algorithm representation.",
        "concepts": ["Python", "Algorithms", "Flow Control"]
    },
    {
        "title": "To-Do List Application",
        "description": "Web-based task management application demonstrating frontend logic, DOM manipulation, and efficient state management.",
        "concepts": ["HTML5", "CSS3", "JavaScript"]
    },
    {
        "title": "Financial AI Chatbot",
        "description": "AI-based chatbot focusing on conversational prompt logic and financial data processing.",
        "concepts": ["AI/LLM", "Python", "Prompt Engineering"]
    },
    {
        "title": "Sudoku Puzzle Solver",
        "description": "High-performance backtracking and recursion-based solver for complex Sudoku grids.",
        "concepts": ["C++", "Recursion", "Backtracking"]
    },
    {
        "title": "CGPA Calculator",
        "description": "Academic calculation tool with robust input validation and precise grading logic.",
        "concepts": ["C++", "Input Validation", "Math Logic"]
    },
    {
        "title": "Banking System Application",
        "description": "Console-based banking system demonstrating Object-Oriented Programming principles including inheritance and encapsulation.",
        "concepts": ["C++", "Java", "OOP", "System Design"]
    }
];

function loadProjects() {
    const projectsContainer = document.querySelector('.projects-grid');
    if (!projectsContainer) return;

    projectsContainer.innerHTML = projectData.map(project => `
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
