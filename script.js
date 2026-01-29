// Simple mobile nav toggle and small helpers
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('nav');
  
  // Mobile navigation toggle
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('show');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    
    // Close nav when clicking outside
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && !toggle.contains(e.target)) {
        if (nav.classList.contains('show')) {
          nav.classList.remove('show');
          toggle.setAttribute('aria-expanded', 'false');
        }
      }
    });
    
    // Close nav when clicking a link
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('show');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Update scholar link with actual Google Scholar URL
  const scholarLink = document.getElementById('scholar-link');
  if (scholarLink) {
    // Placeholder - replace with actual Google Scholar URL when available
    scholarLink.href = 'https://scholar.google.com/';
    scholarLink.setAttribute('aria-label', 'Visit Google Scholar profile');
  }
  
  // Update all other Google Scholar links
  const scholarLinks = document.querySelectorAll('a[href="#"]');
  scholarLinks.forEach(link => {
    const linkText = link.textContent.toLowerCase();
    if (linkText.includes('google scholar') || linkText.includes('scholar')) {
      link.href = 'https://scholar.google.com/';
      link.setAttribute('aria-label', 'Visit Google Scholar for full publication list');
    }
  });
  
  // Smooth scroll is handled by CSS scroll-behavior: smooth
  // This code is intentionally removed to avoid conflicts
  
  // Add intersection observer for fade-in animations on scroll
  if ('IntersectionObserver' in window) {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);
    
    // Observe sections for scroll animations (skip hero section to avoid animation conflicts)
    document.querySelectorAll('.section:not(.hero)').forEach(section => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(20px)';
      section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      observer.observe(section);
    });
  }
});
