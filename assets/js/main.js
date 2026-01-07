let currentLang = "es";

async function loadLanguage(lang) {
  const response = await fetch(`i18n/${lang}.json`);
  const translations = await response.json();

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    el.textContent = translations[key];
  });

  currentLang = lang;
}

document.addEventListener("DOMContentLoaded", () => {
  loadLanguage("es");
});
