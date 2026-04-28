// ====== lang.js ======
const supportedLangs = ["fr", "en"];

function detectBrowserLang() {
  const lang = navigator.language.slice(0,2);
  return supportedLangs.includes(lang) ? lang : "fr";
}

function applyLang(lang) {
  const btn = document.querySelector(".lang-toggle");

  if (!btn) return; // sécurité si pas de bouton sur la page

  if (lang === "en") {
    btn.innerText = "FR";

    document.getElementById("title")?.innerText && (document.getElementById("title").innerText = "My Site");
    document.getElementById("main-title")?.innerText && (document.getElementById("main-title").innerText = "Welcome");
    document.getElementById("main-text")?.innerText && (document.getElementById("main-text").innerText = "Modern interface with animated menu and auto dark mode.");

    document.getElementById("link-home")?.innerText && (document.getElementById("link-home").innerText = "🏠 Home");
    document.getElementById("link-home")?.href && (document.getElementById("link-home").href = "index-en.html");

    document.getElementById("link-p1")?.innerText && (document.getElementById("link-p1").innerText = "📄 Recipes");
    document.getElementById("link-p1")?.href && (document.getElementById("link-p1").href = "page1-en.html");

    document.getElementById("link-p3")?.innerText && (document.getElementById("link-p3").innerText = "📰 Publication");
    document.getElementById("link-p3")?.href && (document.getElementById("link-p3").href = "publication-en.html");

  
  } else {
    btn.innerText = "EN";

    document.getElementById("title")?.innerText && (document.getElementById("title").innerText = "Mon Site");
    document.getElementById("main-title")?.innerText && (document.getElementById("main-title").innerText = "Bonjour");
    document.getElementById("main-text")?.innerText && (document.getElementById("main-text").innerText = "Interface moderne avec menu animé et mode sombre automatique.");

    document.getElementById("link-home")?.innerText && (document.getElementById("link-home").innerText = "🏠 Accueil");
    document.getElementById("link-home")?.href && (document.getElementById("link-home").href = "index.html");

    document.getElementById("link-p1")?.innerText && (document.getElementById("link-p1").innerText = "📄 Recettes");
    document.getElementById("link-p1")?.href && (document.getElementById("link-p1").href = "page1.html");

    document.getElementById("link-p3")?.innerText && (document.getElementById("link-p3").innerText = "📰 Publication");
    document.getElementById("link-p3")?.href && (document.getElementById("link-p3").href = "publication.html");

  }

  localStorage.setItem("lang", lang);
}

function toggleLang() {
  const current = localStorage.getItem("lang") || "fr";
  const newLang = current === "fr" ? "en" : "fr";
  applyLang(newLang);
}

// Init
(function initLang(){
  let saved = localStorage.getItem("lang");
  if (!saved) {
    saved = detectBrowserLang();
  }
  applyLang(saved);
})();