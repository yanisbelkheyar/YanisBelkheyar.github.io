// Example DBLP citation data
var citationData = `@inproceedings{DBLP:conf/icml/SmithN17,
  author    = {Leslie N. Smith and
               Nicholay Topin},
  title     = {Super-Convergence: Very Fast Training of Neural Networks Using Large Learning Rates},
  booktitle = {Proceedings of the 34th International Conference on Machine Learning},
  pages     = {3448--3456},
  year      = {2017}
}`;

// Parse the citation data
var citation = bibtexParse.toJSON(citationData)[0];

// Format the citation as HTML
var html = '<p>' + citation.entryTags.author + '. (' + citation.entryTags.year + '). '
