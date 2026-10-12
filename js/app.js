/**
 * InternNova Homepage Redesign - Interactive Core Logic
 * High performance, modular, accessible vanilla JavaScript
 */

document.addEventListener('DOMContentLoaded', () => {
  // =========================================================================
  // 1. Data Store: Internship Domains & Detailed Curricula
  // =========================================================================
  const domainsData = [
    {
      id: 'web-dev',
      code: '01',
      category: 'web',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
      title: 'Web Development',
      badge: 'Most Popular',
      summary: 'HTML5, CSS3, JavaScript ES6+, React & Live Deployment.',
      overview: 'Master responsive UI, modern JavaScript interactivity, API integration, and launch production web apps.',
      duration: '4-6 Weeks',
      level: 'Beginner to Intermediate',
      tags: ['HTML5/CSS3', 'JavaScript ES6+', 'React.js', 'Git & GitHub', 'REST APIs', 'Vercel Deployment'],
      project: {
        title: 'Full-Stack Portfolio & Interactive Web Platform',
        desc: 'Build and deploy a responsive high-performance web platform featuring live APIs and modern state management.'
      },
      roadmap: [
        {
          week: 'Week 1-2: Frontend Fundamentals & Modern Layouts',
          items: ['HTML5 Semantic Structure & Modern Accessibility', 'CSS3 Modern Styling, Flexbox & CSS Grid Mastery', 'Mobile-First Responsive Web Design Systems']
        },
        {
          week: 'Week 3: JavaScript Programming & DOM Manipulation',
          items: ['JavaScript ES6+ Syntax, Arrays, Objects & Logic', 'DOM Manipulation, Event Listeners & Async/Await', 'Version Control with Git & GitHub Collaborations']
        },
        {
          week: 'Week 4-5: Advanced Frontend & API Integration',
          items: ['Component Architecture & Modern UI Frameworks', 'Consuming Third-Party REST APIs & Error Handling', 'State Management & Form Validations']
        },
        {
          week: 'Week 6: Capstone Project & Production Deployment',
          items: ['Building Production-Ready Portfolio Platform', 'Performance Optimization & Lighthouse 95+ Audit', 'Live Cloud Deployment on Vercel/GitHub Pages & Evaluation']
        }
      ]
    },
    {
      id: 'data-analytics',
      code: '02',
      category: 'data',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></svg>`,
      title: 'Data Analytics',
      badge: 'High Demand',
      summary: 'Excel Analytics, SQL Queries, Power BI & Executive Dashboards.',
      overview: 'Extract actionable business insights, write complex relational queries, and build interactive Power BI dashboards.',
      duration: '4-6 Weeks',
      level: 'All Levels',
      tags: ['Advanced Excel', 'SQL Relational DB', 'Power BI', 'DAX Formulas', 'Data Cleaning', 'Storytelling'],
      project: {
        title: 'Enterprise Business Intelligence Dashboard',
        desc: 'Ingest raw multi-table datasets, clean anomalies, and construct an interactive executive Power BI dashboard.'
      },
      roadmap: [
        {
          week: 'Week 1-2: Advanced Excel & Data Wrangling',
          items: ['Formulas, XLOOKUP, Pivot Tables & Data Analysis Toolpak', 'Data Cleaning, Handling Missing Values & Data Hygiene', 'Exploratory Data Analysis (EDA) Techniques']
        },
        {
          week: 'Week 3: SQL Relational Databases & Querying',
          items: ['Relational Database Concepts, SELECT, WHERE & GROUP BY', 'Advanced Multi-Table JOINs, Subqueries & Aggregations', 'Database Indexing & Performance Query Optimization']
        },
        {
          week: 'Week 4-5: Power BI & Visual Business Intelligence',
          items: ['Power Query ETL pipelines & Data Modeling', 'DAX Measures, Calculated Columns & Time Intelligence', 'Designing Clean, Intuitive Executive Dashboard UI']
        },
        {
          week: 'Week 6: Final Capstone & Business Report',
          items: ['End-to-End Analytics on Real Retail/Fintech Dataset', 'Executive Presentation Deck & Insights Summary', 'Project Submission & Industry Mentor Review']
        }
      ]
    },
    {
      id: 'cyber-security',
      code: '03',
      category: 'security',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>`,
      title: 'Cyber Security',
      badge: 'Industry Critical',
      summary: 'Network Defense, Ethical Hacking, OWASP Top 10 & Security Audits.',
      overview: 'Learn defensive & offensive cybersecurity fundamentals, packet inspection, and penetration testing methodologies.',
      duration: '4-6 Weeks',
      level: 'Intermediate',
      tags: ['Network Security', 'Wireshark', 'Linux CLI', 'OWASP Top 10', 'Penetration Testing', 'Security Audits'],
      project: {
        title: 'Web Application Vulnerability Assessment & Security Audit',
        desc: 'Audit a vulnerable web application, identify exploit vectors, and formulate enterprise mitigation guidelines.'
      },
      roadmap: [
        {
          week: 'Week 1-2: Networking & Security Foundations',
          items: ['OSI Model, TCP/IP, DNS, Protocols & Architecture', 'Linux Security Fundamentals & Command Line Operations', 'Packet Analysis with Wireshark & Network Mapping (Nmap)']
        },
        {
          week: 'Week 3: Cyber Threats & Web Vulnerabilities',
          items: ['Malware Analysis, Phishing Mechanisms & Social Engineering', 'OWASP Top 10 Deep Dive (SQLi, XSS, CSRF, Auth Bypass)', 'Cryptography Basics, SSL/TLS & Public Key Infrastructure']
        },
        {
          week: 'Week 4-5: Ethical Hacking & Defensive Hardening',
          items: ['Vulnerability Scanning with Burp Suite & OpenVAS', 'System Hardening, Firewalls & Intrusion Detection Systems', 'Incident Response Playbooks & Threat Intelligence']
        },
        {
          week: 'Week 6: Security Audit Report & Submission',
          items: ['Simulated Penetration Testing on Lab Environment', 'Authoring Formal Enterprise Vulnerability Assessment Report', 'Mentor Evaluation & Verified Certificate Grant']
        }
      ]
    },
    {
      id: 'ai-ml',
      code: '04',
      category: 'data',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a4 4 0 0 0-4 4v1H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2V6a4 4 0 0 0-4-4z"></path></svg>`,
      title: 'Artificial Intelligence & ML',
      badge: 'Next-Gen',
      summary: 'Python for AI, Machine Learning Models, ChatGPT APIs & GenAI Apps.',
      overview: 'Build machine learning pipelines, fine-tune models, and integrate generative AI APIs into practical modern software.',
      duration: '4-6 Weeks',
      level: 'Intermediate',
      tags: ['Python AI', 'NumPy & Pandas', 'Scikit-Learn', 'OpenAI APIs', 'Prompt Engineering', 'Model Deployment'],
      project: {
        title: 'Intelligent AI Knowledge Assistant & Document Chatbot',
        desc: 'Create an AI assistant using LLM APIs, vector embeddings, and an intuitive UI to query documents in real time.'
      },
      roadmap: [
        {
          week: 'Week 1-2: Python Foundations for Data & AI',
          items: ['Python Data Structures, Functional Programming & OOP', 'NumPy for Tensor/Matrix operations & Pandas DataFrames', 'Data Preprocessing, Cleaning & Feature Engineering']
        },
        {
          week: 'Week 3: Core Machine Learning Algorithms',
          items: ['Supervised Learning: Linear Regression, Logistic, Trees', 'Unsupervised Learning: K-Means Clustering, PCA', 'Model Evaluation, Cross-Validation & Hyperparameter Tuning']
        },
        {
          week: 'Week 4-5: Generative AI, APIs & Prompt Engineering',
          items: ['LLM Architectures & OpenAI API Integration', 'Prompt Engineering Patterns, Structured JSON Outputs', 'Vector Embeddings, Semantic Search & Retrieval Basics']
        },
        {
          week: 'Week 6: Production Capstone Project',
          items: ['Building End-to-End Generative AI Web Tool', 'FastAPI Backend & Interactive Frontend Integration', 'Evaluation & Submission Review']
        }
      ]
    },
    {
      id: 'python-dev',
      code: '05',
      category: 'programming',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>`,
      title: 'Python Programming & Automation',
      badge: 'Essential',
      summary: 'Core Python, Object Oriented Design, Web Scraping & Automation Bots.',
      overview: 'From fundamental syntax to writing high-efficiency automation scripts, web scrapers, and REST API microservices.',
      duration: '4-6 Weeks',
      level: 'Beginner Friendly',
      tags: ['Python 3.12', 'OOP Architecture', 'Web Scraping', 'Requests & APIs', 'Automation Scripts', 'FastAPI'],
      project: {
        title: 'Automated Multi-Source Data Scraper & Notification Bot',
        desc: 'Develop an automated script that extracts dynamic web data, validates it, and triggers instant alerts.'
      },
      roadmap: [
        {
          week: 'Week 1-2: Core Python & Algorithmic Logic',
          items: ['Variables, Types, Conditionals, Loops & Comprehensions', 'Functions, Lambdas, Error & Exception Handling', 'Working with File I/O, JSON, CSV & System Modules']
        },
        {
          week: 'Week 3: Object-Oriented Programming (OOP)',
          items: ['Classes, Objects, Constructors, Inheritance', 'Encapsulation, Polymorphism & Design Patterns in Python', 'Unit Testing & Modular Code Structure']
        },
        {
          week: 'Week 4-5: Automation, Scraping & APIs',
          items: ['Web Scraping with Beautiful Soup & Requests', 'Task Automation, Scheduling & Cron Integration', 'Consuming and Building Lightweight REST APIs']
        },
        {
          week: 'Week 6: Standalone Python Application',
          items: ['Building Feature-Complete Automation Solution', 'CLI / GUI Packaging & Git Versioning', 'Final Code Review & Certificate Issuance']
        }
      ]
    },
    {
      id: 'java-dev',
      code: '06',
      category: 'programming',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>`,
      title: 'Java Enterprise Development',
      badge: 'Enterprise',
      summary: 'Core Java 21, OOP Concepts, Collections Framework & JDBC Integration.',
      overview: 'Learn robust enterprise programming practices, memory architecture, multi-threading, and relational database connectivity.',
      duration: '4-6 Weeks',
      level: 'Beginner to Intermediate',
      tags: ['Java 21', 'OOP Concepts', 'Collections Framework', 'JDBC & MySQL', 'Exception Handling', 'Design Patterns'],
      project: {
        title: 'Enterprise Banking & Management System',
        desc: 'Construct a modular Java application backed by MySQL relational persistence, secure authentication, and transaction logging.'
      },
      roadmap: [
        {
          week: 'Week 1-2: Core Java Syntax & Control Structures',
          items: ['JVM, JRE, JDK Architecture & Compilation Lifecycle', 'Data Types, Operators, Conditionals & Loops', 'Methods, Arrays & Memory Management Basics']
        },
        {
          week: 'Week 3: Robust Object-Oriented Programming',
          items: ['Classes, Objects, Encapsulation & Abstraction', 'Inheritance, Interfaces, Abstract Classes & Polymorphism', 'Exception Handling, Custom Exceptions & Best Practices']
        },
        {
          week: 'Week 4-5: Java Collections & Database Connectivity (JDBC)',
          items: ['List, Set, Map, Generics & Iterators in Collections', 'Database Connectivity with JDBC & MySQL Drivers', 'PreparedStatements, Transactions & CRUD Operations']
        },
        {
          week: 'Week 6: Full Application Capstone',
          items: ['Building Multitier Enterprise Console Application', 'Database Schema Design & Connection Pooling', 'Code Quality Review & Credential Dispatch']
        }
      ]
    },
    {
      id: 'ui-ux',
      code: '07',
      category: 'web',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="m4.93 4.93 4.24 4.24"></path><path d="m14.83 9.17 4.24-4.24"></path><path d="m14.83 14.83 4.24 4.24"></path><path d="m9.17 14.83-4.24 4.24"></path></svg>`,
      title: 'UI/UX Design & Product Prototyping',
      badge: 'Creative',
      summary: 'Figma Mastery, User Journey Mapping, Wireframing & Design Systems.',
      overview: 'Craft delightful user experiences from empathy maps to high-fidelity clickable Figma prototypes and design tokens.',
      duration: '4-6 Weeks',
      level: 'All Levels',
      tags: ['Figma Masterclass', 'Design Systems', 'Wireframing', 'User Research', 'Auto-Layout', 'Interactive Prototyping'],
      project: {
        title: 'Fintech Mobile Application Design System & Interactive Prototype',
        desc: 'Research user pain points, design 20+ screens in Figma with auto-layout, components, and interactive micro-animations.'
      },
      roadmap: [
        {
          week: 'Week 1-2: UX Research & Information Architecture',
          items: ['User Personas, Empathy Mapping & Journey Frameworks', 'Information Architecture, Sitemaps & User Flows', 'Low-Fidelity Wireframing & Paper Prototyping']
        },
        {
          week: 'Week 3: Figma Foundations & Visual Design Principles',
          items: ['Typography, Color Harmony, Spacing & Visual Hierarchy', 'Figma Vector Tools, Frames & Auto-Layout 5.0', 'Iconography, Imagery & Accessibility (WCAG standards)']
        },
        {
          week: 'Week 4-5: Design Systems & Advanced Prototyping',
          items: ['Component Variants, Design Tokens & Reusable Atoms', 'Micro-Interactions, Smart Animate & State Transitions', 'Usability Testing & Feedback Synthesis']
        },
        {
          week: 'Week 6: High-Fidelity Portfolio Showcase',
          items: ['Interactive Clickable Prototype Presentation', 'Behance / Dribbble Case Study Documentation', 'Mentor Evaluation & Certificate Grant']
        }
      ]
    },
    {
      id: 'cloud-devops',
      code: '08',
      category: 'security',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>`,
      title: 'Cloud & DevOps Engineering',
      badge: 'Fast Track',
      summary: 'Linux Shell, Docker Containers, AWS Core & CI/CD Pipelines.',
      overview: 'Learn containerization, automated build/deployment pipelines, and provisioning resilient cloud infrastructure on AWS.',
      duration: '4-6 Weeks',
      level: 'Intermediate',
      tags: ['Docker', 'AWS Cloud', 'Linux Shell', 'GitHub Actions', 'CI/CD Pipelines', 'Nginx Reverse Proxy'],
      project: {
        title: 'Containerized Microservice Deployment Pipeline with GitHub Actions',
        desc: 'Dockerize a multi-tier application, automate CI/CD testing with GitHub Actions, and host on AWS cloud.'
      },
      roadmap: [
        {
          week: 'Week 1-2: Linux Administration & Cloud Fundamentals',
          items: ['Linux Command Line, File Permissions & SSH Hardening', 'Introduction to Cloud Computing & AWS Core Services (EC2, S3)', 'Virtual Private Cloud (VPC), Subnets & Security Groups']
        },
        {
          week: 'Week 3: Docker & Containerization',
          items: ['Container Fundamentals, Docker Architecture & Images', 'Writing Production Dockerfiles & Multi-Stage Builds', 'Docker Compose for Multi-Container Environments']
        },
        {
          week: 'Week 4-5: CI/CD Pipelines & Web Servers',
          items: ['Continuous Integration / Continuous Deployment Concepts', 'GitHub Actions Automation: Build, Test & Deploy Workflows', 'Configuring Nginx Reverse Proxy & SSL Certificates']
        },
        {
          week: 'Week 6: Live Production Infrastructure',
          items: ['Full End-to-End Automated Deployment', 'Monitoring, Logging & Health Checks', 'Capstone Presentation & Final Evaluation']
        }
      ]
    }
  ];

  // Sample Verified Certificates Database
  const sampleCertificates = {
    'IN-2024-WEB-8849': {
      id: 'IN-2024-WEB-8849',
      recipient: 'Aarav Sharma',
      domain: 'Web Development',
      track: 'Premium Mentorship Track',
      duration: '6 Weeks (Cohort 04)',
      issueDate: 'October 04, 2026',
      status: 'VERIFIED ACTIVE',
      grade: 'Grade A+ (Distinction)',
      skills: 'HTML5, CSS3, JavaScript ES6+, React, Git, REST APIs',
      verificationHash: '0x8f9c1b74a3e2109fdc5598',
      score: '96%'
    },
    'IN-2024-AIML-9402': {
      id: 'IN-2024-AIML-9402',
      recipient: 'Sneha Patel',
      domain: 'Artificial Intelligence & ML',
      track: 'Premium Mentorship Track',
      duration: '6 Weeks (Cohort 04)',
      issueDate: 'October 08, 2026',
      status: 'VERIFIED ACTIVE',
      grade: 'Grade A (Outstanding)',
      skills: 'Python AI, Scikit-Learn, Pandas, OpenAI APIs, Prompt Engineering',
      verificationHash: '0x447e098cbef2a3911c4721',
      score: '94%'
    },
    'IN-2024-DATA-7721': {
      id: 'IN-2024-DATA-7721',
      recipient: 'Rohan Deshmukh',
      domain: 'Data Analytics',
      track: 'Foundation Track',
      duration: '4 Weeks (Cohort 03)',
      issueDate: 'September 28, 2026',
      status: 'VERIFIED ACTIVE',
      grade: 'Grade A (Excellence)',
      skills: 'Advanced Excel, SQL Queries, Power BI, DAX Modeling',
      verificationHash: '0x12a884bf99d10e543bc887',
      score: '91%'
    }
  };

  // =========================================================================
  // 2. Dynamic Greeting Badge (Based on User's Current Local Time)
  // =========================================================================
  const heroGreetingElem = document.getElementById('heroGreetingText');
  if (heroGreetingElem) {
    const currentHour = new Date().getHours();
    let greeting = 'Good Morning ☀️';
    if (currentHour >= 12 && currentHour < 17) {
      greeting = 'Good Afternoon 🌤️';
    } else if (currentHour >= 17 && currentHour < 22) {
      greeting = 'Good Evening 🌙';
    } else if (currentHour >= 22 || currentHour < 5) {
      greeting = 'Working Late Night? 🦉';
    }
    heroGreetingElem.textContent = greeting;
  }

  // =========================================================================
  // 3. Header Scroll Glassmorphic Effect & Back-to-Top Button
  // =========================================================================
  const header = document.querySelector('.header');
  const backToTopBtn = document.getElementById('backToTopBtn');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    if (scrollPos > 40) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }

    if (scrollPos > 400) {
      backToTopBtn?.classList.add('show');
    } else {
      backToTopBtn?.classList.remove('show');
    }
  });

  backToTopBtn?.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // =========================================================================
  // 4. Dark / Light Theme Toggle
  // =========================================================================
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const currentTheme = localStorage.getItem('internnova_theme') || 'dark';

  if (currentTheme === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
    updateThemeIcon('light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    updateThemeIcon('dark');
  }

  themeToggleBtn?.addEventListener('click', () => {
    const active = document.documentElement.getAttribute('data-theme');
    const newTheme = active === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('internnova_theme', newTheme);
    updateThemeIcon(newTheme);
    showToast(`Switched to ${newTheme.toUpperCase()} theme`);
  });

  function updateThemeIcon(theme) {
    if (!themeToggleBtn) return;
    if (theme === 'light') {
      themeToggleBtn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
      themeToggleBtn.setAttribute('title', 'Switch to Dark Mode');
    } else {
      themeToggleBtn.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
      themeToggleBtn.setAttribute('title', 'Switch to Light Mode');
    }
  }

  // =========================================================================
  // 5. Mobile Drawer Navigation
  // =========================================================================
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const closeMobileMenuBtn = document.getElementById('closeMobileMenuBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  mobileMenuBtn?.addEventListener('click', () => {
    mobileDrawer?.classList.add('open');
  });

  closeMobileMenuBtn?.addEventListener('click', () => {
    mobileDrawer?.classList.remove('open');
  });

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileDrawer?.classList.remove('open');
    });
  });

  // =========================================================================
  // 6. Hero Showcase Interactive Window Tabs
  // =========================================================================
  const windowTabs = document.querySelectorAll('.window-tab');
  const tabPanels = document.querySelectorAll('.tab-content-panel');

  windowTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetTab = tab.getAttribute('data-tab');
      windowTabs.forEach(t => t.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));

      tab.classList.add('active');
      const activePanel = document.getElementById(`panel-${targetTab}`);
      if (activePanel) activePanel.classList.add('active');
    });
  });

  // =========================================================================
  // 7. Render Internship Domains Grid with Real-time Filters & Search
  // =========================================================================
  const domainsContainer = document.getElementById('domainsContainer');
  const domainFilterBtns = document.querySelectorAll('.domain-filter-btn');
  const domainSearchInput = document.getElementById('domainSearchInput');

  let activeCategory = 'all';
  let searchQuery = '';

  function renderDomains() {
    if (!domainsContainer) return;

    const filtered = domainsData.filter(item => {
      const matchesCategory = (activeCategory === 'all') || (item.category === activeCategory);
      const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            item.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      domainsContainer.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: var(--text-muted);">
          <svg style="margin: 0 auto 1rem auto; color: var(--text-dim);" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
          <h4 style="font-size: 1.2rem; color: var(--text-main); margin-bottom: 0.5rem;">No Internship Domains Found</h4>
          <p>Try searching for a different keyword like "Web", "Python", "Data", or "Security".</p>
        </div>
      `;
      return;
    }

    domainsContainer.innerHTML = filtered.map(d => `
      <div class="domain-card" data-domain-id="${d.id}">
        <div class="domain-top">
          <div class="domain-icon-circle">${d.icon}</div>
          <div style="display: flex; gap: 0.4rem; align-items: center;">
            <span style="font-size: 0.72rem; font-weight: 700; color: #a855f7; background: rgba(168, 85, 247, 0.12); padding: 0.2rem 0.6rem; border-radius: 99px; border: 1px solid rgba(168, 85, 247, 0.3);">${d.badge}</span>
            <span class="domain-badge-code">Track #${d.code}</span>
          </div>
        </div>
        <h3 class="domain-title">${d.title}</h3>
        <p class="domain-overview">${d.overview}</p>
        
        <div class="domain-tags">
          ${d.tags.slice(0, 4).map(t => `<span class="tech-tag">${t}</span>`).join('')}
          ${d.tags.length > 4 ? `<span class="tech-tag">+${d.tags.length - 4} more</span>` : ''}
        </div>

        <div class="domain-project-preview">
          <div class="project-label">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            Capstone Project
          </div>
          <div class="project-title-name">${d.project.title}</div>
        </div>

        <div class="domain-actions">
          <button class="btn btn-outline btn-sm view-syllabus-btn" data-domain-id="${d.id}">
            Curriculum
          </button>
          <button class="btn btn-primary btn-sm apply-domain-btn" data-domain-id="${d.id}" data-domain-title="${d.title}">
            Apply Now
          </button>
        </div>
      </div>
    `).join('');

    // Attach Event Listeners to rendered cards
    document.querySelectorAll('.view-syllabus-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const domainId = btn.getAttribute('data-domain-id');
        openCurriculumModal(domainId);
      });
    });

    document.querySelectorAll('.apply-domain-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const domainTitle = btn.getAttribute('data-domain-title');
        openApplyModal(domainTitle);
      });
    });
  }

  // Filter Buttons Handler
  domainFilterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      domainFilterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeCategory = btn.getAttribute('data-category') || 'all';
      renderDomains();
    });
  });

  // Search Input Handler
  domainSearchInput?.addEventListener('input', (e) => {
    searchQuery = e.target.value.trim();
    renderDomains();
  });

  // Initial render
  renderDomains();

  // =========================================================================
  // 8. Curriculum / Syllabus Modal Logic
  // =========================================================================
  const curriculumModal = document.getElementById('curriculumModal');
  const closeCurriculumModalBtn = document.getElementById('closeCurriculumModalBtn');
  const curriculumModalContent = document.getElementById('curriculumModalContent');
  const curriculumModalTitle = document.getElementById('curriculumModalTitle');

  function openCurriculumModal(domainId) {
    const domain = domainsData.find(d => d.id === domainId);
    if (!domain || !curriculumModal) return;

    if (curriculumModalTitle) {
      curriculumModalTitle.textContent = `${domain.title} • Syllabus & Roadmap`;
    }

    if (curriculumModalContent) {
      curriculumModalContent.innerHTML = `
        <div style="margin-bottom: 1.5rem; padding-bottom: 1.2rem; border-bottom: 1px solid var(--border-subtle);">
          <div style="display: flex; gap: 0.8rem; flex-wrap: wrap; margin-bottom: 0.8rem;">
            <span style="font-size: 0.8rem; font-weight: 700; color: #38bdf8; background: rgba(56, 189, 248, 0.15); padding: 0.2rem 0.7rem; border-radius: 99px;">Duration: ${domain.duration}</span>
            <span style="font-size: 0.8rem; font-weight: 700; color: #10b981; background: rgba(16, 185, 129, 0.15); padding: 0.2rem 0.7rem; border-radius: 99px;">Level: ${domain.level}</span>
            <span style="font-size: 0.8rem; font-weight: 700; color: #a855f7; background: rgba(168, 85, 247, 0.15); padding: 0.2rem 0.7rem; border-radius: 99px;">Verified Credential Included</span>
          </div>
          <p style="font-size: 0.95rem; color: var(--text-muted); line-height: 1.6;">${domain.overview}</p>
        </div>

        <h4 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 1rem; color: var(--text-main);">Weekly Task Breakdown & Milestones</h4>
        
        <div class="syllabus-weeks-list">
          ${domain.roadmap.map(r => `
            <div class="syllabus-week-item">
              <div class="syllabus-week-title">${r.week}</div>
              <ul class="syllabus-tasks-list">
                ${r.items.map(it => `<li>${it}</li>`).join('')}
              </ul>
            </div>
          `).join('')}
        </div>

        <div style="margin-top: 1.5rem; padding: 1.2rem; background: rgba(99, 102, 241, 0.1); border: 1px solid var(--border-glow); border-radius: var(--radius-md);">
          <div style="font-size: 0.8rem; font-weight: 800; text-transform: uppercase; color: #818cf8; letter-spacing: 0.5px; margin-bottom: 0.3rem;">Evaluated Capstone Project</div>
          <div style="font-size: 1.05rem; font-weight: 700; margin-bottom: 0.4rem; color: #fff;">${domain.project.title}</div>
          <p style="font-size: 0.88rem; color: var(--text-muted);">${domain.project.desc}</p>
        </div>

        <div style="margin-top: 2rem; display: flex; justify-content: flex-end; gap: 0.8rem;">
          <button class="btn btn-outline" id="syllabusCloseInner">Close Window</button>
          <button class="btn btn-primary" id="syllabusApplyInner" data-domain="${domain.title}">Apply for This Track</button>
        </div>
      `;

      document.getElementById('syllabusCloseInner')?.addEventListener('click', () => {
        curriculumModal.classList.remove('open');
      });

      document.getElementById('syllabusApplyInner')?.addEventListener('click', (e) => {
        curriculumModal.classList.remove('open');
        const domName = e.target.getAttribute('data-domain');
        openApplyModal(domName);
      });
    }

    curriculumModal.classList.add('open');
  }

  closeCurriculumModalBtn?.addEventListener('click', () => {
    curriculumModal?.classList.remove('open');
  });

  // =========================================================================
  // 9. Application Modal & Form Submission Simulation
  // =========================================================================
  const applyModal = document.getElementById('applyModal');
  const closeApplyModalBtn = document.getElementById('closeApplyModalBtn');
  const applyForm = document.getElementById('applyForm');
  const applyDomainSelect = document.getElementById('applyDomainSelect');
  const applySuccessView = document.getElementById('applySuccessView');

  // Populate Domain Options in Select
  if (applyDomainSelect) {
    applyDomainSelect.innerHTML = domainsData.map(d => `<option value="${d.title}">${d.title} (Track #${d.code})</option>`).join('');
  }

  function openApplyModal(preselectedDomain) {
    if (!applyModal) return;
    if (preselectedDomain && applyDomainSelect) {
      applyDomainSelect.value = preselectedDomain;
    }
    if (applyForm) applyForm.style.display = 'block';
    if (applySuccessView) applySuccessView.style.display = 'none';
    applyModal.classList.add('open');
  }

  // Trigger from top navbar or buttons with .trigger-apply
  document.querySelectorAll('.trigger-apply').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openApplyModal();
    });
  });

  closeApplyModalBtn?.addEventListener('click', () => {
    applyModal?.classList.remove('open');
  });

  // Handle Application Submit
  applyForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const fullName = document.getElementById('applyName')?.value.trim();
    const email = document.getElementById('applyEmail')?.value.trim();
    const domain = applyDomainSelect?.value;
    const track = document.getElementById('applyTrackSelect')?.value;

    const simulatedAppId = 'IN-APP-' + Math.floor(100000 + Math.random() * 900000);

    if (applyForm) applyForm.style.display = 'none';
    if (applySuccessView) {
      applySuccessView.style.display = 'block';
      applySuccessView.innerHTML = `
        <div style="text-align: center; padding: 1.5rem 0;">
          <div style="width: 64px; height: 64px; border-radius: 50%; background: rgba(16, 185, 129, 0.2); border: 2px solid #10b981; color: #10b981; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.2rem auto;">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
          </div>
          <h3 style="font-size: 1.4rem; font-weight: 800; margin-bottom: 0.5rem; color: #fff;">Application Submitted Successfully!</h3>
          <p style="font-size: 0.92rem; color: var(--text-muted); margin-bottom: 1.5rem;">
            Congratulations <strong style="color: #fff;">${fullName}</strong>! Your application for <strong style="color: #38bdf8;">${domain}</strong> (${track}) has been received.
          </p>
          
          <div style="background: rgba(7, 9, 19, 0.6); border: 1px solid var(--border-glow); border-radius: var(--radius-md); padding: 1.2rem; margin-bottom: 1.5rem; font-family: var(--font-mono); font-size: 0.88rem; text-align: left;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
              <span style="color: var(--text-dim);">Application ID:</span>
              <span style="color: #a855f7; font-weight: 700;">${simulatedAppId}</span>
            </div>
            <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
              <span style="color: var(--text-dim);">Registered Email:</span>
              <span style="color: #fff;">${email}</span>
            </div>
            <div style="display: flex; justify-content: space-between;">
              <span style="color: var(--text-dim);">Batch Onboarding:</span>
              <span style="color: #34d399; font-weight: 700;">Monday, Next Cohort</span>
            </div>
          </div>

          <p style="font-size: 0.84rem; color: var(--text-dim); margin-bottom: 1.8rem;">
            We have sent an offer letter & onboarding guide to your email address. Join the official WhatsApp group for instant announcements!
          </p>

          <div style="display: flex; gap: 0.8rem; justify-content: center; flex-wrap: wrap;">
            <a href="https://wa.me/919534196255?text=Hello%20InternNova,%20I%20applied%20with%20ID%20${simulatedAppId}" target="_blank" class="btn btn-primary btn-sm">
              Join WhatsApp Community
            </a>
            <button class="btn btn-outline btn-sm" id="closeSuccessModalBtn">
              Done
            </button>
          </div>
        </div>
      `;

      document.getElementById('closeSuccessModalBtn')?.addEventListener('click', () => {
        applyModal?.classList.remove('open');
      });
    }

    showToast('Application submitted successfully! Offer details dispatched.');
  });

  // =========================================================================
  // 10. Interactive Certificate Verification Portal
  // =========================================================================
  const verifyInput = document.getElementById('verifyCertificateInput');
  const verifyBtn = document.getElementById('verifyCertificateBtn');
  const verifyResultCard = document.getElementById('verifyResultCard');
  const sampleIdPills = document.querySelectorAll('.sample-id-pill');

  sampleIdPills.forEach(pill => {
    pill.addEventListener('click', () => {
      const idText = pill.textContent.trim();
      if (verifyInput) verifyInput.value = idText;
      runCertificateVerification(idText);
    });
  });

  verifyBtn?.addEventListener('click', () => {
    const val = verifyInput?.value.trim();
    if (!val) {
      showToast('Please enter a valid Certificate ID');
      return;
    }
    runCertificateVerification(val);
  });

  verifyInput?.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      verifyBtn?.click();
    }
  });

  function runCertificateVerification(certId) {
    if (!verifyResultCard) return;

    let certData = sampleCertificates[certId.toUpperCase()];

    // If ID is not in preset sample dictionary, simulate a valid dynamically generated credential verification
    if (!certData) {
      certData = {
        id: certId.toUpperCase(),
        recipient: 'Certified Student',
        domain: 'Computer Science & Software Development',
        track: 'Verified Internship Track',
        duration: '4 Weeks Cohort',
        issueDate: 'October 2026',
        status: 'VERIFIED ACTIVE',
        grade: 'Grade A',
        skills: 'Software Architecture, Problem Solving, Capstone Project',
        verificationHash: '0x' + Math.random().toString(16).substring(2, 14),
        score: '92%'
      };
    }

    verifyResultCard.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1rem; margin-bottom: 1.5rem;">
        <div>
          <div class="cert-badge-status">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"></polyline></svg>
            ${certData.status}
          </div>
          <h3 style="font-size: 1.45rem; font-weight: 800; color: #fff; margin-bottom: 0.3rem;">Official Certificate of Completion</h3>
          <p style="font-size: 0.88rem; color: var(--text-muted);">InternNova Virtual Internship Program • Credential ID: <strong style="color: #38bdf8; font-family: var(--font-mono);">${certData.id}</strong></p>
        </div>
        <div style="background: rgba(255, 255, 255, 0.05); padding: 0.5rem; border-radius: 8px; border: 1px solid var(--border-subtle); text-align: center;">
          <svg width="70" height="70" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="1.5"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect><path d="M14 14h3v3h-3z"></path><path d="M19 14h2v2h-2z"></path><path d="M14 19h2v2h-2z"></path><path d="M18 18h3v3h-3z"></path></svg>
          <div style="font-size: 0.65rem; color: var(--text-dim); margin-top: 0.2rem;">QR VERIFIED</div>
        </div>
      </div>

      <div class="cert-details-grid">
        <div class="cert-detail-item">
          <span class="cert-item-label">Candidate Name</span>
          <span class="cert-item-value">${certData.recipient}</span>
        </div>
        <div class="cert-detail-item">
          <span class="cert-item-label">Internship Track</span>
          <span class="cert-item-value">${certData.domain}</span>
        </div>
        <div class="cert-detail-item">
          <span class="cert-item-label">Program Type</span>
          <span class="cert-item-value">${certData.track}</span>
        </div>
        <div class="cert-detail-item">
          <span class="cert-item-label">Issue Date</span>
          <span class="cert-item-value">${certData.issueDate}</span>
        </div>
        <div class="cert-detail-item">
          <span class="cert-item-label">Performance & Grade</span>
          <span class="cert-item-value" style="color: #34d399;">${certData.grade} (${certData.score})</span>
        </div>
        <div class="cert-detail-item">
          <span class="cert-item-label">Cryptographic Hash</span>
          <span class="cert-item-value" style="font-family: var(--font-mono); font-size: 0.8rem; color: #a855f7;">${certData.verificationHash}</span>
        </div>
      </div>

      <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); border-radius: var(--radius-sm); padding: 0.9rem 1.2rem; margin-bottom: 1.5rem;">
        <span class="cert-item-label" style="display: block; margin-bottom: 0.3rem;">Evaluated Competencies</span>
        <span style="font-size: 0.88rem; color: #e2e8f0;">${certData.skills}</span>
      </div>

      <div style="display: flex; gap: 0.8rem; align-items: center; flex-wrap: wrap;">
        <button class="btn btn-primary btn-sm" id="copyCertLinkBtn">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
          Share Verification Link
        </button>
        <button class="btn btn-outline btn-sm" id="downloadCertBtn">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
          Download PDF Proof
        </button>
      </div>
    `;

    verifyResultCard.classList.add('show');
    verifyResultCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    document.getElementById('copyCertLinkBtn')?.addEventListener('click', () => {
      navigator.clipboard?.writeText(window.location.origin + '?verify=' + certData.id);
      showToast('Verification URL copied to clipboard!');
    });

    document.getElementById('downloadCertBtn')?.addEventListener('click', () => {
      showToast('Downloading verified certificate package...');
    });
  }

  // =========================================================================
  // 11. Animated Stats Counter (Triggered via IntersectionObserver)
  // =========================================================================
  const statNumbers = document.querySelectorAll('.stat-number');
  let statsAnimated = false;

  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !statsAnimated) {
        statsAnimated = true;
        statNumbers.forEach(elem => {
          const target = parseFloat(elem.getAttribute('data-target'));
          const suffix = elem.getAttribute('data-suffix') || '';
          const isDecimal = target % 1 !== 0;
          let current = 0;
          const duration = 2000;
          const stepTime = 30;
          const steps = duration / stepTime;
          const increment = target / steps;

          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              elem.textContent = (isDecimal ? target.toFixed(1) : Math.floor(target).toLocaleString()) + suffix;
              clearInterval(timer);
            } else {
              elem.textContent = (isDecimal ? current.toFixed(1) : Math.floor(current).toLocaleString()) + suffix;
            }
          }, stepTime);
        });
      }
    });
  }, { threshold: 0.3 });

  const statsSection = document.querySelector('.stats-section');
  if (statsSection) statsObserver.observe(statsSection);

  // =========================================================================
  // 12. Pricing / Track Switcher (4-Week Intensive vs 8-Week Advanced)
  // =========================================================================
  const planToggleSwitch = document.getElementById('planToggleSwitch');
  const planToggleLabels = document.querySelectorAll('.plans-toggle-label');
  const proPriceAmount = document.getElementById('proPriceAmount');
  const proPricePeriod = document.getElementById('proPricePeriod');

  let isTwoMonth = false;

  function togglePlanDuration() {
    isTwoMonth = !isTwoMonth;
    planToggleSwitch?.classList.toggle('active', isTwoMonth);
    planToggleLabels.forEach((lbl, idx) => {
      lbl.classList.toggle('active', (idx === 1 && isTwoMonth) || (idx === 0 && !isTwoMonth));
    });

    if (proPriceAmount) {
      proPriceAmount.textContent = isTwoMonth ? '₹799' : '₹499';
    }
    if (proPricePeriod) {
      proPricePeriod.textContent = isTwoMonth ? '/ 8-Week Cohort' : '/ 4-Week Cohort';
    }
    showToast(`Showing ${isTwoMonth ? '8-Week Advanced' : '4-Week Intensive'} track plans`);
  }

  planToggleSwitch?.addEventListener('click', togglePlanDuration);
  planToggleLabels.forEach(lbl => lbl.addEventListener('click', togglePlanDuration));

  // =========================================================================
  // 13. Interactive FAQ Accordion
  // =========================================================================
  const faqItems = document.querySelectorAll('.faq-item');
  const faqSearchInput = document.getElementById('faqSearchInput');

  faqItems.forEach(item => {
    const btn = item.querySelector('.faq-question-btn');
    btn?.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');
      faqItems.forEach(f => f.classList.remove('active'));
      if (!isOpen) {
        item.classList.add('active');
      }
    });
  });

  faqSearchInput?.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase().trim();
    faqItems.forEach(item => {
      const text = item.textContent.toLowerCase();
      item.style.display = text.includes(q) ? 'block' : 'none';
    });
  });

  // =========================================================================
  // 14. Live Workshops Countdown Timer & Registration
  // =========================================================================
  function initCountdownTimers() {
    const timerElements = document.querySelectorAll('.workshop-timer-box');
    timerElements.forEach(box => {
      const targetDate = new Date(Date.now() + (parseInt(box.getAttribute('data-hours-left') || '48')) * 3600 * 1000);
      
      const updateTimer = () => {
        const diff = targetDate - new Date();
        if (diff <= 0) {
          box.innerHTML = `<span style="color: #34d399; font-size: 0.85rem; font-weight: 700;">Registration Closing Soon!</span>`;
          return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        const daysElem = box.querySelector('.time-days');
        const hoursElem = box.querySelector('.time-hours');
        const minElem = box.querySelector('.time-mins');
        const secElem = box.querySelector('.time-secs');

        if (daysElem) daysElem.textContent = String(days).padStart(2, '0');
        if (hoursElem) hoursElem.textContent = String(hours).padStart(2, '0');
        if (minElem) minElem.textContent = String(minutes).padStart(2, '0');
        if (secElem) secElem.textContent = String(seconds).padStart(2, '0');
      };

      updateTimer();
      setInterval(updateTimer, 1000);
    });

    document.querySelectorAll('.register-workshop-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const title = btn.getAttribute('data-workshop-title');
        showToast(`Pass Reserved for "${title}"! Check your email.`);
      });
    });
  }
  initCountdownTimers();

  // =========================================================================
  // 15. Newsletter Subscription Handling
  // =========================================================================
  const newsletterForm = document.getElementById('newsletterForm');
  newsletterForm?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('newsletterEmail')?.value;
    if (email) {
      showToast('Thank you! You are now subscribed to InternNova Weekly.');
      newsletterForm.reset();
    }
  });

  // =========================================================================
  // 16. Global Quick Search Dialog (Ctrl+K or trigger)
  // =========================================================================
  const searchModal = document.getElementById('searchModal');
  const searchModalInput = document.getElementById('searchModalInput');
  const searchModalResults = document.getElementById('searchModalResults');
  const searchTriggers = document.querySelectorAll('.trigger-global-search');
  const closeSearchModalBtn = document.getElementById('closeSearchModalBtn');

  function openSearchModal() {
    if (!searchModal) return;
    searchModal.classList.add('open');
    searchModalInput?.focus();
  }

  function closeSearchModal() {
    searchModal?.classList.remove('open');
  }

  searchTriggers.forEach(t => t.addEventListener('click', openSearchModal));
  closeSearchModalBtn?.addEventListener('click', closeSearchModal);

  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      openSearchModal();
    }
    if (e.key === 'Escape') {
      closeSearchModal();
      curriculumModal?.classList.remove('open');
      applyModal?.classList.remove('open');
    }
  });

  searchModalInput?.addEventListener('input', (e) => {
    const val = e.target.value.toLowerCase().trim();
    if (!val) {
      if (searchModalResults) searchModalResults.innerHTML = `<div style="text-align: center; color: var(--text-dim); padding: 1.5rem;">Start typing to search domains, skills, or curriculum...</div>`;
      return;
    }

    const matches = domainsData.filter(d => 
      d.title.toLowerCase().includes(val) || 
      d.summary.toLowerCase().includes(val) || 
      d.tags.some(t => t.toLowerCase().includes(val))
    );

    if (matches.length === 0) {
      if (searchModalResults) searchModalResults.innerHTML = `<div style="text-align: center; color: var(--text-dim); padding: 1.5rem;">No results found for "${val}"</div>`;
      return;
    }

    if (searchModalResults) {
      searchModalResults.innerHTML = matches.map(m => `
        <div class="search-result-item" style="padding: 0.8rem 1rem; border-bottom: 1px solid var(--border-subtle); display: flex; justify-content: space-between; align-items: center; cursor: pointer; transition: background 0.2s;" data-domain-id="${m.id}">
          <div>
            <div style="font-weight: 700; color: #fff;">${m.title}</div>
            <div style="font-size: 0.8rem; color: var(--text-muted);">${m.summary}</div>
          </div>
          <span style="font-size: 0.75rem; color: #38bdf8; font-weight: 600;">View Details &rarr;</span>
        </div>
      `).join('');

      document.querySelectorAll('.search-result-item').forEach(item => {
        item.addEventListener('click', () => {
          const domId = item.getAttribute('data-domain-id');
          closeSearchModal();
          openCurriculumModal(domId);
        });
      });
    }
  });

  // =========================================================================
  // 17. Toast Notification Helper
  // =========================================================================
  function showToast(message) {
    let container = document.querySelector('.toast-container');
    if (!container) {
      container = document.createElement('div');
      container.className = 'toast-container';
      document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10b981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
      <span>${message}</span>
    `;

    container.appendChild(toast);
    setTimeout(() => {
      toast.remove();
    }, 3000);
  }

  // Check URL query parameters for ?verify=
  const urlParams = new URLSearchParams(window.location.search);
  const verifyParam = urlParams.get('verify');
  if (verifyParam) {
    if (verifyInput) verifyInput.value = verifyParam;
    runCertificateVerification(verifyParam);
  }
});
