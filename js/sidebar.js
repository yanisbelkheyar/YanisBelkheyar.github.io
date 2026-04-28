// 1. Le contenu HTML de ton menu
const menuHTML = `
  <nav id="sidebar">
    <h2 id="title">Menu</h2>
    <ul>
      <li><a id="link-home" href="../index.html">🏠 Accueil</a></li>
      <li><a id="link-p1" href="../html_pages/recettes.html">📄 Recettes</a></li>
      <li><a id="link-p3" href="../html_pages/publication.html">📰 Publication</a></li>
      <li><a id="link-p4" href="../html_pages/cours.html">📚 Cours</a></li>
      <li><a id="link-p5" href="../html_pages/autres.html"> Autres</a></li>
    </ul>
  </nav>
  <button class="menu-toggle" onclick="toggleMenu()">☰</button>
`;

// 2. La fonction pour mettre en couleur le lien de la page actuelle
function setActivePage() {
  const sidebarLinks = document.querySelectorAll("#sidebar ul li a");
  // On récupère le nom du fichier actuel (ex: index.html)
  let currentPath = window.location.pathname.split("/").pop();
  
  // Si on est à la racine, on considère que c'est index.html
  if (currentPath === "" || currentPath === "mon-site") currentPath = "index.html";

  sidebarLinks.forEach(link => {
    const href = link.getAttribute("href");
    
    // On vérifie si le chemin du lien se termine par le nom du fichier actuel
    // Exemple : "../html_pages/page1.html" se termine bien par "page1.html"
    if (href && href.endsWith(currentPath)) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// 3. La fonction pour ouvrir/fermer le menu sur mobile
function toggleMenu() {
  const sidebar = document.getElementById("sidebar");
  if (sidebar) {
    sidebar.classList.toggle("open");
  }
}

// 4. L'exécution automatique au chargement
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("sidebar-container");
  if (container) {
    // A. On injecte le HTML
    container.innerHTML = menuHTML;
    // B. On attend un tout petit peu que le navigateur valide l'injection 
    // et on active le lien
    setActivePage();
  }
});
