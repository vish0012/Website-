// Modern JavaScript for enhanced website functionality
document.addEventListener('DOMContentLoaded', function () {
  
  // ========================================
  // Mobile Navigation Toggle
  // ========================================
  const toggle = document.getElementById('nav-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => {
      mobileNav.classList.toggle('hidden');
      
      // Animate toggle button
      const toggleSpan = toggle.querySelector('span');
      if (toggleSpan) {
        if (!mobileNav.classList.contains('hidden')) {
          toggleSpan.textContent = '✕';
        } else {
          toggleSpan.textContent = '☰';
        }
      }
    });
  }

  // Close mobile menu when clicking on a link
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileNav) {
        mobileNav.classList.add('hidden');
        const toggleSpan = toggle?.querySelector('span');
        if (toggleSpan) toggleSpan.textContent = '☰';
      }
    });
  });

  // ========================================
  // Smooth Scroll with Offset for Fixed Header
  // ========================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#' || href === '#home') return;
      
      e.preventDefault();
      const target = document.querySelector(href);
      
      if (target) {
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ========================================
  // Scroll to Top Button
  // ========================================
  const scrollToTopBtn = document.createElement('button');
  scrollToTopBtn.innerHTML = '↑';
  scrollToTopBtn.className = 'fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-primary to-secondary text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 opacity-0 pointer-events-none z-50 text-2xl font-bold';
  scrollToTopBtn.id = 'scroll-to-top';
  scrollToTopBtn.setAttribute('aria-label', 'Scroll to top');
  document.body.appendChild(scrollToTopBtn);
  
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      scrollToTopBtn.classList.remove('opacity-0', 'pointer-events-none');
    } else {
      scrollToTopBtn.classList.add('opacity-0', 'pointer-events-none');
    }
  });
  
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  // ========================================
  // Dynamic Copyright Year
  // ========================================
  const copyrightYear = document.getElementById('copyright-year');
  if (copyrightYear) {
    copyrightYear.textContent = new Date().getFullYear();
  }

  // ========================================
  // Google Scholar Link (Update with your actual ID)
  // ========================================
  const scholarLink = document.getElementById('scholar-link');
  // Replace scholar link if you want to provide your Google Scholar URL
  // Example: scholarLink.href = 'https://scholar.google.com/citations?user=YOUR_ID';

  // ========================================
  // Console Welcome Message
  // ========================================
  console.log(
    '%c👋 Welcome to Vishal Chauhan\'s Portfolio!',
    'color: #6366f1; font-size: 24px; font-weight: bold;'
  );
  console.log(
    '%cInterested in collaboration? Reach out at vishalchauhan@outlook.sg',
    'color: #8b5cf6; font-size: 14px;'
  );
});
