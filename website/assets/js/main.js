function initNav() {
  const links = document.querySelectorAll('nav a');
  const path = location.pathname.split('/').pop();
  links.forEach(link => {
    const href = link.getAttribute('href');
    if (href === path || (!path && href === 'index.html')) {
      link.classList.add('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', initNav);
