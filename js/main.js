// TOTA site interactions: language toggle, mobile nav, scroll reveal.
(function () {
  var STORAGE_KEY = 'tota-lang';

  function applyLang(lang) {
    var isEn = lang === 'en';
    document.body.classList.toggle('show-en', isEn);
    document.documentElement.setAttribute('lang', isEn ? 'en' : 'zh-Hant');
    var btnZh = document.querySelector('[data-lang-btn="zh"]');
    var btnEn = document.querySelector('[data-lang-btn="en"]');
    if (btnZh && btnEn) {
      btnZh.classList.toggle('is-active', !isEn);
      btnEn.classList.toggle('is-active', isEn);
      btnZh.setAttribute('aria-pressed', String(!isEn));
      btnEn.setAttribute('aria-pressed', String(isEn));
    }
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  function initLang() {
    var saved = null;
    try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) {}
    applyLang(saved === 'en' ? 'en' : 'zh');

    document.querySelectorAll('[data-lang-btn]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyLang(btn.getAttribute('data-lang-btn'));
      });
    });
  }

  function initNav() {
    var burger = document.querySelector('.nav-burger');
    var links = document.querySelector('.nav-links');
    if (!burger || !links) return;
    burger.addEventListener('click', function () {
      var open = links.classList.toggle('is-open');
      burger.setAttribute('aria-expanded', String(open));
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('is-open'); });
    });
  }

  function initReveal() {
    var items = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window) || items.length === 0) {
      items.forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    items.forEach(function (el) { io.observe(el); });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initLang();
    initNav();
    initReveal();
  });
})();
