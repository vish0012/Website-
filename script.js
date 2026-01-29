// Simple mobile nav toggle and small helpers
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('nav');
  
  // Mobile navigation toggle
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
    
    // Close nav when clicking outside
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && !toggle.contains(e.target)) {
        nav.classList.remove('show');
      }
    });
    
    // Close nav when clicking a link
    const navLinks = nav.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        nav.classList.remove('show');
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
    if (link.textContent.includes('Google Scholar')) {
      link.href = 'https://scholar.google.com/';
      link.setAttribute('aria-label', 'Visit Google Scholar for full publication list');
    }
  });
  
  // Smooth scroll behavior for anchor links (fallback for older browsers)
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId !== '#') {
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
  
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
    
    // Observe sections for scroll animations
    document.querySelectorAll('.section').forEach(section => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(20px)';
      section.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
      observer.observe(section);
    });
  }
});
