/**
 * EcoFolio - Main JavaScript
 * Handles navigation, animations, and interactive features
 */

document.addEventListener('DOMContentLoaded', () => {
  // Initialize all components
  initMobileMenu();
  initScrollAnimations();
  initProjectFilter();
  initFormValidation();
  initSmoothScroll();
});

/**
 * Mobile Navigation Menu
 */
function initMobileMenu() {
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  
  if (!navToggle || !navMenu) return;
  
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Animate hamburger menu
    const spans = navToggle.querySelectorAll('span');
    navToggle.classList.toggle('active');
  });
  
  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
      navMenu.classList.remove('active');
    }
  });
  
  // Close menu when clicking a link
  const navLinks = navMenu.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
    });
  });
}

/**
 * Scroll Animations
 */
function initScrollAnimations() {
  // Intersection Observer for fade-in animations
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        
        // Add scroll-triggered class for project cards
        if (entry.target.classList.contains('project-card')) {
          entry.target.classList.add('scroll-triggered');
        }
        
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe elements with animation classes
  const animatedElements = document.querySelectorAll('.timeline-item, .plant-tag, .project-card, .value-card, .preview-card');
  animatedElements.forEach(el => observer.observe(el));
  
  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > 50) {
        navbar.style.boxShadow = '0 4px 20px rgba(45, 90, 39, 0.15)';
      } else {
        navbar.style.boxShadow = '';
      }
      
      lastScroll = currentScroll;
    });
  }
}

/**
 * Projects Filter
 */
function initProjectFilter() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  
  if (filterButtons.length === 0 || projectCards.length === 0) return;
  
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      // Remove active class from all buttons
      filterButtons.forEach(b => b.classList.remove('active'));
      // Add active class to clicked button
      btn.classList.add('active');
      
      const filter = btn.dataset.filter;
      
      projectCards.forEach(card => {
        const category = card.dataset.category;
        
        if (filter === 'all' || category.includes(filter)) {
          card.classList.remove('hidden');
          card.classList.add('show');
        } else {
          card.classList.add('hidden');
          card.classList.remove('show');
        }
      });
    });
  });
}

/**
 * Form Validation
 */
function initFormValidation() {
  const contactForm = document.getElementById('contactForm');
  
  if (!contactForm) return;
  
  const formGroups = contactForm.querySelectorAll('.form-group');
  
  formGroups.forEach(group => {
    const input = group.querySelector('.form-input');
    
    if (!input) return;
    
    // Focus effects
    input.addEventListener('focus', () => {
      group.classList.add('focused');
    });
    
    input.addEventListener('blur', () => {
      group.classList.remove('focused');
      
      // Validation
      if (input.checkValidity()) {
        group.classList.remove('error');
        group.classList.add('success');
      } else if (input.value !== '') {
        group.classList.add('error');
        group.classList.remove('success');
      }
    });
    
    // Input validation
    input.addEventListener('input', () => {
      if (input.checkValidity()) {
        group.classList.remove('error');
        group.classList.add('success');
      } else {
        group.classList.remove('success');
      }
    });
  });
  
  // Form submission
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());
    
    // Show success message (simulated)
    const submitBtn = contactForm.querySelector('.submit-btn');
    const originalText = submitBtn.innerHTML;
    
    submitBtn.innerHTML = '<span class="btn-text">Message Sent! 🌿</span>';
    submitBtn.style.background = 'linear-gradient(135deg, #4A7C59, #2D5A27)';
    
    // Reset form after delay
    setTimeout(() => {
      contactForm.reset();
      
      // Reset success classes
      formGroups.forEach(group => {
        group.classList.remove('success');
      });
      
      submitBtn.innerHTML = originalText;
    }, 3000);
  });
}

/**
 * Smooth Scroll for anchor links
 */
function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');
  
  links.forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      
      if (href === '#') return;
      
      const target = document.querySelector(href);
      
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

/**
 * Navbar Active State Handler
 * Sets the active class based on current page
 */
function setActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    
    if (linkPage === currentPage) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
}

// Run on load
setActiveNavLink();

