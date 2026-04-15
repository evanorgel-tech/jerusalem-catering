/* ============================================================
   Jerusalem Catering — main.js
   ============================================================ */

(function () {
  'use strict';

  /* ---------- Hamburger menu ---------- */
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', function () {
      const isOpen = navLinks.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Close menu when a nav link is clicked
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });

    // Close menu on outside click
    document.addEventListener('click', function (e) {
      if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }


  /* ---------- Active nav link on scroll ---------- */
  const sections = document.querySelectorAll('section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

  function updateActiveLink() {
    let current = '';
    sections.forEach(function (section) {
      const top = section.offsetTop - 90;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });

    navAnchors.forEach(function (a) {
      a.style.color = '';
      if (a.getAttribute('href') === '#' + current && !a.classList.contains('nav-cta')) {
        a.style.color = 'var(--orange)';
      }
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });


  /* ---------- Scroll reveal ---------- */
  const revealTargets = [
    '.hero-inner',
    '.about-intro',
    '.service-card',
    '.menu-card',
    '.photo-row',
    '.kosher-seal-wrap',
    '.kosher-text',
    '.contact-info-row',
    '.contact-form',
  ];

  revealTargets.forEach(function (selector) {
    document.querySelectorAll(selector).forEach(function (el) {
      el.classList.add('reveal');
    });
  });

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach(function (el) {
    observer.observe(el);
  });




})();
