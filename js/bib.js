fetch("../publication.bib")
  .then(response => response.text())
  .then(data => {
    const textarea = document.createElement("textarea");
    textarea.id = "bibtex_input";
    textarea.style.display = "none";
    textarea.value = data;
    document.body.appendChild(textarea);

    // relancer le parser bibtex
    bibtex_js_draw();
    
  })
  .catch(error => {
    console.error("Erreur chargement .bib :", error);
  });