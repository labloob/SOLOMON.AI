document.addEventListener('DOMContentLoaded', () => {
  const langButtons = document.querySelectorAll('.lang-btn');
  const englishEls = document.querySelectorAll('.en');
  const arabicEls = document.querySelectorAll('.ar');

  function applyLanguage(lang) {
    const isArabic = lang === 'ar';

    englishEls.forEach((el) => el.classList.toggle('hidden', isArabic));
    arabicEls.forEach((el) => el.classList.toggle('hidden', !isArabic));

    langButtons.forEach((btn) => btn.classList.toggle('active', btn.dataset.lang === lang));

    // set direction for Arabic pages that are shown
    document.documentElement.lang = lang;
    if (isArabic) document.documentElement.dir = 'rtl'; else document.documentElement.dir = 'ltr';
  }

  langButtons.forEach((btn) => {
    btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
  });

  applyLanguage('en');
});
