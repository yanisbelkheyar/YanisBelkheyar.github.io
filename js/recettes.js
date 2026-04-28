const baseDeRecettes = {
  "link-compote": `<div class="recettes">
        <h1>Compote de pomme</h1>
        <p>Recette détaillée...</p></div>`,
  "link-bananabread": `<div class="recettes">
        <h1>Banana Bread</h1>
        <p>Recette détaillée...</p></div>`,
  "link-pain": `<div class="recettes">
        <h1>Pain</h1>
        <p>Recette détaillée...</p></div>`
};

document.addEventListener("click", (event) => {
  const list_recette = document.getElementById("recettes-content");
  const idClique = event.target.id;

  if (list_recette && baseDeRecettes[idClique]) {
    // 1. Injection du contenu
    list_recette.innerHTML = baseDeRecettes[idClique];

    // 2. Optionnel : Gérer l'état visuel des boutons
    document.querySelectorAll("#recipe-list button").forEach(btn => {
      btn.style.background = "transparent";
      btn.style.color = "var(--text)";
    });
    event.target.style.background = "var(--orange)";
    event.target.style.color = "white";
  }
});