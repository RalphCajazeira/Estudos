const nomes = [
  "Ford Ká",
  "Ranger",
  "Hilux",
  "Corola",
  "Fusca",
  "Chevete",
  "Brasilia",
];
const posicao = 3;

function filtrarCarros(nomes, posicao) {
  const filtro = nomes.slice(posicao, posicao + 3).join(" - ");

  console.log(filtro);
}

filtrarCarros(nomes, posicao);
