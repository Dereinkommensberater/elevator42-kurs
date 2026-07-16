/* BaumImmo 13 – Interaktion: Reveal-Animationen + Cookie-Hinweis */
(function () {
  'use strict';

  /* Aktuelles Jahr im Footer */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* Scroll-Reveal */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('visible'); });
  }

  /* Cookie-Hinweis
     Diese Seite setzt keine Cookies. Gespeichert wird ausschließlich die
     Auswahl zu diesem Hinweis (localStorage, technisch notwendig). */
  var STORAGE_KEY = 'bi13-consent';
  var banner = document.getElementById('cookie-banner');
  if (!banner) return;

  function getConsent() {
    try { return localStorage.getItem(STORAGE_KEY); } catch (e) { return null; }
  }
  function setConsent(value) {
    try { localStorage.setItem(STORAGE_KEY, value); } catch (e) { /* Speicherung nicht möglich */ }
  }
  function showBanner() { banner.hidden = false; }
  function hideBanner() { banner.hidden = true; }

  if (!getConsent()) showBanner();

  var acceptBtn = document.getElementById('cookie-accept');
  var essentialBtn = document.getElementById('cookie-essential');
  if (acceptBtn) acceptBtn.addEventListener('click', function () {
    setConsent('all');
    hideBanner();
  });
  if (essentialBtn) essentialBtn.addEventListener('click', function () {
    setConsent('essential');
    hideBanner();
  });

  /* Cookie-Einstellungen im Footer erneut öffnen */
  var settingsLink = document.getElementById('cookie-settings-link');
  if (settingsLink) settingsLink.addEventListener('click', function (ev) {
    ev.preventDefault();
    showBanner();
  });
})();
