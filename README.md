# Odin-Project-Homepage
Responsive homepage project — part of The Odin Project curriculum

# 🏠 RbsDeveloper — Personal Homepage

A responsive personal portfolio homepage built as part of The Odin Project — Advanced HTML and CSS curriculum.

**HTML** **CSS** **JavaScript**
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-f7df1e?style=flat&logo=javascript&logoColor=black)
![CSS](https://img.shields.io/badge/CSS3-Custom_Properties-1572b6?style=flat&logo=css3)
![HTML5](https://img.shields.io/badge/HTML5-Semantic_Elements-e34f26?style=flat&logo=html5&logoColor=white)

🌐 [View live site](https://rbsdeveloper.github.io/Odin-Project-Homepage/)

---

## Introduction

This project is the capstone of The Odin Project's Advanced HTML and CSS section. The goal was to build a fully responsive personal homepage applying advanced CSS techniques — Grid, Flexbox, custom properties, animations, and transitions — alongside a clean vanilla JavaScript architecture using native ES Modules.

Rather than a simple static page, the project was structured as a modular JavaScript application where each section of the page is built and rendered by its own dedicated module, keeping concerns cleanly separated throughout.

---

## Technologies Used

- **Vanilla JavaScript (ES Modules)** — modular architecture, DOM construction entirely in JS
- **CSS3** — custom properties, Grid, Flexbox, keyframe animations, transitions, `clamp()` for fluid typography
- **HTML5** — semantic markup, accessibility attributes, native form elements
- **Font Awesome** — iconography across all sections
- **Google Fonts** — Inter (main) + Fira Code (monospace, tech tags)
- **EmailJS / FormSubmit** — contact form email delivery without a backend
- **IntersectionObserver API** — scroll-triggered reveal animations

---

## Features

- **Mobile-first responsive design** — fluid layout across all screen sizes using CSS Grid and Flexbox
- **Dark / Light mode toggle** - A smooth theme switcher with icon animations.
- **Hero section with load animations** — staggered `fadeInUp` entrance animations and a continuous floating avatar
- **Project cards grid** — six featured projects with unique gradient headers, tech stack tags, and hover spring lift effect
- **Dynamic card gradient** — the Code button on each card uses the card's own gradient via a CSS custom property set in JS
- **Contact form with validation** — real-time field validation with visual feedback icons and error messages
- **Scroll-triggered animations** — sections reveal using `IntersectionObserver` as they enter the viewport
- **Animated mobile menu** — hamburger toggle with icon spin animation
- **Smooth scroll navigation** — anchor links scroll to sections with native `scroll-behavior: smooth`
- **Hover effects** — lift on project cards, gradient social icons, gradient border on code buttons, slide-in contact items

---

## The Process

### 1. Architecture first
Rather than writing static HTML, the project was structured around native ES Modules from the start. Each page section — header, hero, projects, contact, footer — lives in its own module responsible for building and returning its DOM subtree. A shared `utils.js` provides a `createCompleteElement` factory function used throughout.

### 2. Mobile-first layout
All base styles target mobile. Media queries at `480px`, `768px` and `1024px`, progressively enhance the layout — switching from single column to multi-column grids, revealing the desktop nav, increasing spacing and font sizes.

### 3. CSS custom properties as a design system
All colours, spacing, typography, shadows and transitions are defined as CSS variables in `:root`. The dark mode variant overrides only the colour tokens, leaving layout and structural values untouched. This made theming a matter of toggling a single class on the root element.

### 4. Interactions and animations
Hover effects were added last, wrapped in `@media (hover: hover)` to prevent sticky states on touch devices. Load animations use staggered CSS keyframes on the hero elements. Scroll animations use `IntersectionObserver` to add a `visible` class when elements enter the viewport, triggering CSS transitions.

### 5. Form validation
Real-time validation runs on each `input` event, checking against a validators object keyed by field name. Visual feedback — green/red border, check/cross icon, inline error message — updates instantly. All fields are validated again on submit before the form is allowed to proceed.

---

## What I Learned

- **Native ES Modules** — structuring a vanilla JS project with proper separation of concerns, no bundler required
- **Mobile-first CSS** — writing base styles for small screens and building up, rather than overriding desktop styles downward
- **CSS custom properties as a design token system** — how a well-structured `:root` makes theming, dark mode, and responsive spacing trivial to manage
- **IntersectionObserver API** — a performant, framework-free approach to scroll-triggered animations
- **`clamp()` for fluid typography** — eliminating breakpoint-specific font sizes in favour of continuous scaling
- **Animation vs transition tradeoffs** — when keyframes are necessary (multi-step spring effects, icon spins) vs when a simple transition suffices
- **Form UX** — real-time validation feedback, accessibility with `aria-label` and `autocomplete`, and preventing layout shift with `visibility` instead of `display: none`

---

## Potential Improvements

- **GSAP animations** — replace CSS keyframes with GSAP for true spring physics and scroll-driven timelines
- **React rebuild** — rebuild as a React + Tailwind application as the real portfolio after completing the React curriculum
- **Success popup** — replace FormSubmit's thank-you page redirect with a custom animated in-page confirmation
- **Skeleton loaders** — show placeholder content while project images load
- **Accessibility audit** — keyboard navigation, focus management on the mobile menu, and improved screen reader support
- **Performance** — lazy load project images, convert to WebP format, add `loading="lazy"` attribute

---

## How to Run

**Clone the repository:**
   ```bash
   git clone [https://github.com/yourusername/Odin-Project-Homepage.git](https://github.com/yourusername/Odin-Project-Homepage.git)

---

## Project Structure
odin-homepage/
├── index.html
├── styles.css
├── images/
└── src/
├── index.js           # Entry point — orchestrates page, event listeners
├── main.js            # Creates <main>, composes hero + projects + contact
├── header.js          # Header and navigation
├── hero.js            # Hero section with avatar and social links
├── projects.js        # Projects grid and card builder
├── contact.js         # Contact info panel and form
├── footer.js          # Footer with dynamic copyright year
├── formValidation.js  # Real-time form validation and submit handler
└── utils.js           # createCompleteElement factory function

---

Built as part of [The Odin Project](https://www.theodinproject.com/) — Full Stack JavaScript path.