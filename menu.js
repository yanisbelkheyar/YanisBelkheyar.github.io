// ===== menu.js =====

// Toggle sidebar mobile
function toggleMenu() {
  document.getElementById("sidebar").classList.toggle("open");
}

// Mettre la page courante en focus (active) automatiquement
function setActivePage() {
  const sidebarLinks = document.querySelectorAll("#sidebar ul li a");
  const currentPath = window.location.pathname.split("/").pop(); // nom du fichier actuel

  sidebarLinks.forEach(link => {
    if (link.href.includes(currentPath)) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// Appel au chargement
document.addEventListener("DOMContentLoaded", setActivePage);