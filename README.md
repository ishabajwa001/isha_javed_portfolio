# 🌟 Isha Javed | Professional Portfolio
A premium, interactive, and high-performance portfolio website built for **Isha Javed**, a Computer Science student and Software Developer. This project showcases a blend of modern web aesthetics with clean, efficient code, featuring a bespoke **Golden Luxe** design system.

---

## ✨ Features and User Experience

### 🏆 Golden Luxe Theme
A sophisticated visual identity using a deep charcoal and metallic gold palette. The design balances professional elegance with high-tech interactivity.

- **Dynamic Particle Background**: A custom-coded HTML5 Canvas system creating a celestial, golden floating effect.
- **Interactive Typing Logic**: A smooth, character-by-character typing effect in the hero section.
- **Custom Precision Cursor**: A custom-designed cursor that adapts to user interactions across the site.
- **Glassmorphism UI**: High-end frosted glass effects on project cards and navigation headers.
- **Smooth Transitions**: GPU-accelerated animations for a fluid browsing experience.

---

## 🚀 Live Demo
Experience the full portfolio at:  
👉 **[ishajaved-portfolio.netlify.app](https://ishajaved-portfolio.netlify.app)**

---

## 📂 Project Architecture

The project is structured for high performance and maintainability:

```text
isha_javed_portfolio/
├── css/
│   ├── style.css          # Core Design System (Layout, Colors, Typography)
│   └── interactive.css    # Interactive Layer (Animations, Particles, Cursor)
├── js/
│   └── script.js          # Logic (Typing effect, Canvas Particles, Dynamic Loading)
├── data/
│   └── projects.json      # Centralized Data for easy management
├── images/                # Optimized Visual Assets
├── index.html             # Homepage / Hero
├── about.html             # Professional Bio
├── skills.html            # Technical Proficiency
├── projects.html          # Dynamic Project Showcase
├── certifications.html    # Academic & Professional Honors
└── contact.html           # Functional Contact Experience
```

---

## 🛠️ Technical Stack

- **Modern Web**: Semantic HTML5 & CSS3 (Flexbox/Grid).
- **Core Logic**: Vanilla JavaScript (ES6+).
- **Interactivity**: HTML5 Canvas API for background simulation.
- **Data Model**: JSON-based dynamic rendering for project showcases.
- **Performance**: Optimized for fast load times and clean SEO.

---

## ⚙️ Running Locally

1. **Clone/Download** this repository.
2. **Start a local server**:
   Since the project loads `projects.json` via Fetch API, it requires a local server. You can use:
   ```bash
   # Using npx (Node.js)
   npx serve .
   
   # Or using VS Code 'Live Server' extension
   ```
3. Open `http://localhost:3000` (or the provided port) in your browser.

---

## 📬 Contact Functionality

The contact page features a robust UI system including:
1. **Input Validation**: Ensures data integrity before submission.
2. **User Feedback**: Dynamic button states (e.g., "Sending...") to reflect process status.
3. **Success Logic**: Automatic UI reset and confirmation upon successful interaction.

---

## ⚖️ License
This project is the portfolio of **Isha Javed**. It is intended for professional showcase and personal use. Feel free to use the code structure as inspiration for your own digital home.

---
*Created with care by Isha Javed*
