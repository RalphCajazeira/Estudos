const livros = [
  "Guerra e Paz",
  "A Montanha Mágica",
  "Cem Anos de Solidão",
  "Dom Quixote",
  "A Divina Comédia",
];

const nomeDoLivro = "A Montanha Mágica";

const posicaoLivro = livros.findIndex((livro) => livro === nomeDoLivro);

console.log(`O livro está na posição ${posicaoLivro + 1}`);
