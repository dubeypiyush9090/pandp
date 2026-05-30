// Basic JavaScript to add interactivity to the P&P site.
// Handles accordion toggles and could be extended for more features.

document.addEventListener('DOMContentLoaded', () => {
  // Set active nav link based on current URL
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add('active');
    }
  });

  // Accordion functionality
  const headers = document.querySelectorAll('.accordion-header');
  headers.forEach(header => {
    header.addEventListener('click', () => {
      const open = header.classList.contains('active');
      // Close all accordions
      document.querySelectorAll('.accordion-header.active').forEach(h => {
        h.classList.remove('active');
        h.nextElementSibling.style.display = 'none';
      });
      if (!open) {
        header.classList.add('active');
        const content = header.nextElementSibling;
        if (content) {
          content.style.display = 'block';
        }
      }
    });
  });
});