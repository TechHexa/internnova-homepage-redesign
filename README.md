<<<<<<< HEAD
# 🚀 InternNova Official Homepage Redesign (v2.0)

> **Mandatory Web Development Internship Project Task**  
> **Student / Intern**: Raj Kumar  
> **Submission Requirements**: Live Website Link + GitHub Repository + Screenshots  
> **Reference Platform**: [InternNova Official](https://internnova.co.in)

---

## 📌 Executive Summary & Project Objective

This project is a complete, ground-up **homepage redesign and functional web application** for **InternNova**, a premier virtual internship and experiential learning platform. 

The goal of this redesign is not simply to copy the original website, but to:
1. **Analyze UX/UI shortcomings** of the existing platform (spacing, visual hierarchy, mobile responsiveness, accessibility, interactivity).
2. **Elevate InternNova's brand identity** into a modern, high-tech, and conversion-optimized web experience (cosmic dark theme, subtle glassmorphism, glowing accents, and typography).
3. **Engineer interactive, production-grade features** that provide real value to students, mentors, and corporate recruiters.

---

## ✨ Key Features & Improvements Over the Original Platform

| Feature | Original InternNova Site | Our Redesign (v2.0) |
|---|---|---|
| **Theme & Visual Aesthetics** | Flat dark colors, standard gradients, minimal depth | Cosmic dark theme (`#070913`), subtle ambient glow orbs, frosted glassmorphism (`backdrop-filter: blur(16px)`), modern typography (Plus Jakarta Sans & JetBrains Mono), and animated shine effects |
| **Theme Customization** | Dark mode only | **Dark / Light Mode Toggle** with smooth transitions and `localStorage` persistence |
| **Personalized Hero Section** | Static greeting | **Dynamic Time-of-Day Greeting** (e.g., *"Good Morning ☀️"*, *"Good Evening 🌙"*, *"Working Late Night? 🦉"*) with live admission dot |
| **Hero Showcase Sandbox** | Static imagery/marquee | **Interactive 3-Tab Sandbox Card** with Live Terminal (`internnova init`), Weekly Tasks checklist, and Credential Seal preview |
| **Domain Exploration** | Static cards | **Real-Time Category Filters** (*Web & UI/UX*, *AI & Data*, *Security & Cloud*, *Core Programming*) + **Instant Live Search** |
| **Curriculum & Syllabus** | External or static links | **Interactive Modal Window** displaying complete week-by-week task breakdowns, tools learned, and evaluated capstone projects |
| **Certificate Verification** | External form / text only | **Live On-Page Verification Engine**: Enter any certificate ID (or click sample IDs like `IN-2024-WEB-8849`) to render a cryptographically verified certificate with QR badge, candidate details, grade, and download/share actions |
| **Application Process** | External Google Form | **Built-in Application Modal**: Validates student info, domain selection, and outputs an instant simulated **Offer Letter & Unique Application ID** |
| **Learning Tracks & Pricing** | Basic pricing cards | **Interactive 4-Week vs 8-Week Switcher** with comparative pricing (₹0 Foundation vs ₹499 Pro Mentorship) |
| **Live Workshops** | Static notices | **Live Workshops Card Grid** with active countdown timers (`Days:Hours:Mins:Secs`) and one-click seat reservations |
| **Stats & Achievements** | Static numbers | **Smooth Animated Counter** powered by `IntersectionObserver` triggered when scrolled into view |
| **Global Search** | None | **Global Quick Search Dialog** triggered via button or keyboard shortcut (`Ctrl + K` / `Cmd + K`) |
| **FAQ System** | Basic list | **Interactive Accordion** with smooth animated height transitions + search filter input |
| **Mobile Responsiveness** | Basic mobile layout | **Fully Responsive Mobile Drawer Navigation**, touch-friendly hit areas, and adaptive CSS Grid |

---

## 📂 All 13 Mandatory Sections Implemented

1. **Top Announcement Bar**: Infinite marquee ticker highlighting admissions, verified certificates, and ambassador applications.
2. **Navigation Bar**: Sticky glassmorphic navbar with logo, nav links, global search (`Ctrl+K`), theme switcher, and pulse CTA.
3. **Hero Section**: Time-based greeting, value proposition, dual CTAs, trust metric badges, and interactive terminal tab switcher.
4. **Statistics & Achievements**: Animated counter for 15,000+ interns, 98.4% completion, 150+ partners, and 4.9/5 rating.
5. **About InternNova**: Mission, philosophy, traditional courses vs InternNova comparison card, and 4 core engineering pillars.
6. **Internship Domains**: 8 complete industry domains with tech tags, difficulty badges, capstone preview, curriculum modal, and application triggers.
7. **Internship Programs & Tracks**: Interactive Foundation Track (₹0) vs Premium Pro Mentorship (₹499) with 4-week/8-week toggle.
8. **Why Choose InternNova**: 6 USP tiles highlighting real production repos, ISO/MSME verification, flexible schedule, and mentor reviews.
9. **Learning & Mentorship Roadmap**: 4-step progressive timeline (`Choose Domain` &rarr; `Weekly Tasks` &rarr; `Code Review` &rarr; `Get Certified`) plus Featured Mentors showcase.
10. **Live Workshops & Masterclasses**: 3 live masterclasses with active countdown timers and seat reservation.
11. **Certificate Verification Portal**: Functional credential verification simulator with sample certificate IDs and QR badge preview.
12. **Student & Intern Testimonials**: High-credibility reviews with ratings, student avatars, and placed company badges.
13. **Frequently Asked Questions (FAQ)**: Filterable accordion covering prerequisites, certificates, mentorship, and eligibility.
14. **Call-to-Action (CTA) Banner**: High-conversion cosmic banner with WhatsApp chat and intake reminder.
15. **Comprehensive Footer**: Brand info, quick links, domain tracks, newsletter form, WhatsApp support, and legal policies.

---

## 🛠️ Technology Stack & Architecture

- **Markup**: Semantic HTML5 (ARIA attributes, accessible forms, meta SEO tags, Open Graph tags)
- **Styling**: Modern CSS3 (Custom Properties / CSS Variables, Fluid Typography with `clamp()`, Flexbox, CSS Grid, Glassmorphism, Keyframe animations)
- **Scripting**: Modular Vanilla JavaScript (ES6+, `IntersectionObserver`, `localStorage`, Event Delegation, zero external runtime bloat)
- **Icons & Graphics**: Embedded vector SVGs and authentic InternNova rocket branding (`assets/images/logo.png`)
- **Compatibility**: Fully cross-browser compatible (Chrome, Edge, Firefox, Safari, Mobile WebKit)

---

## 🚀 How to Run and Preview the Website

### Option 1: Direct Browser Opening (No Server Needed)
Simply double-click `index.html` or right-click `index.html` &rarr; **Open with** &rarr; **Google Chrome** (or Edge/Firefox). All CSS, JS, and assets are local and self-contained.

### Option 2: Using Node.js / npm
```bash
# Navigate to the project directory
cd "d:\Internship Task\Internnova\WD_Week4_Raj_Kumar\clone project"

# Run local preview server on http://localhost:3000
npm start
```

### Option 3: Using Python
```bash
python -m http.server 3000
# Open http://localhost:3000 in your browser
```

---

## 🌐 Deployment Instructions (For Live Submission Link)

### GitHub Pages:
1. Initialize a git repository:
   ```bash
   git init
   git add .
   git commit -m "feat: complete InternNova homepage redesign v2.0"
   git branch -M main
   git remote add origin https://github.com/<your-username>/internnova-homepage-redesign.git
   git push -u origin main
   ```
2. In your GitHub repository settings, go to **Pages** &rarr; select `main` branch / `root` folder &rarr; click **Save**.
3. Your live link will be: `https://<your-username>.github.io/internnova-homepage-redesign/`

### Vercel / Netlify (1-Click Deployment):
- Drag and drop the `clone project` folder into [vercel.com](https://vercel.com) or [netlify.com](https://netlify.com) for instant deployment and custom live link.

---

## 🏆 Project Author
**Raj Kumar**  
Web Development Intern @ InternNova  
Project: Real-World Mandatory Task - InternNova Official Homepage Redesign
=======
# internnova-homepage-redesign
>>>>>>> 7a85fb69fb7f2bd0aca8893516adfd0d3a2e9241
