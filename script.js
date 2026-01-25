// Simple mobile nav toggle and small helpers
document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }

  // Replace scholar link if you want to provide your Google Scholar URL
  const scholarLink = document.getElementById('scholar-link');
  // Example: scholarLink.href = 'https://scholar.google.com/citations?user=YOUR_ID';
});
