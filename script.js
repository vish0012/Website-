// Simple mobile nav toggle and small helpers
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('nav-toggle');
  const mobileNav = document.getElementById('mobile-nav');
  if (toggle && mobileNav) {
    toggle.addEventListener('click', () => {
      mobileNav.classList.toggle('hidden');
    });
  }

  // Close mobile menu when clicking on a link
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  mobileNavLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileNav) {
        mobileNav.classList.add('hidden');
      }
    });
  });

  // Replace scholar link if you want to provide your Google Scholar URL
  const scholarLink = document.getElementById('scholar-link');
  // Example: scholarLink.href = 'https://scholar.google.com/citations?user=YOUR_ID';
});
