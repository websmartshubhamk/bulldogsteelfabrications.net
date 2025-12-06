function initNav() {
  const path = location.pathname.split('/').pop() || 'index.html';
  const targets = document.querySelectorAll('[data-nav-target]');
  targets.forEach(node => {
    const target = node.getAttribute('data-nav-target');
    if (target === path) {
      node.classList.add('active');
    }
  });
}

function initDropdowns() {
  const dropdowns = Array.from(document.querySelectorAll('[data-dropdown]'));
  if (!dropdowns.length) return;

  const closeAll = () => {
    dropdowns.forEach(drop => {
      drop.classList.remove('open');
      const toggle = drop.querySelector('.dropdown-toggle');
      if (toggle) toggle.setAttribute('aria-expanded', 'false');
    });
  };

  dropdowns.forEach(drop => {
    const toggle = drop.querySelector('.dropdown-toggle');
    const menu = drop.querySelector('.dropdown-menu');
    if (!toggle || !menu) return;

    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      const isOpen = drop.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      if (!isOpen) return;
      dropdowns.forEach(other => {
        if (other !== drop) {
          other.classList.remove('open');
          const otherToggle = other.querySelector('.dropdown-toggle');
          if (otherToggle) otherToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });

    drop.addEventListener('mouseleave', () => {
      drop.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  document.addEventListener('click', (event) => {
    if (![...dropdowns].some(drop => drop.contains(event.target))) {
      closeAll();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeAll();
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initDropdowns();

  // Back to Top FAB appears near page bottom
  const fab = document.createElement('button');
  fab.className = 'back-to-top-fab';
  fab.setAttribute('type', 'button');
  fab.setAttribute('aria-label', 'Back to top');
  fab.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"></polyline><line x1="12" y1="9" x2="12" y2="21"></line></svg><span>Back to Top</span>';
  document.body.appendChild(fab);

  const toggleFab = () => {
    const nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 200;
    fab.classList.toggle('visible', nearBottom);
  };

  fab.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  window.addEventListener('scroll', toggleFab, { passive: true });
  toggleFab();
});
