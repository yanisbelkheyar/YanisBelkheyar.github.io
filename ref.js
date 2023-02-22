var bibtexData = `@article{example-article,
  author = {Doe, John},
  title = {Example article},
  journal = {Journal of Examples},
  volume = {1},
  number = {1},
  pages = {1--10},
  year = {2022}
}`;

var bibtex = new BibTex();
bibtex.content = bibtexData;

var html = bibtex.toHTML();

var references = document.getElementById("ref");
references.innerHTML = html;
