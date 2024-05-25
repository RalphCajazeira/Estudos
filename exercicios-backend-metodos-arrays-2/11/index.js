const nomes = [
  "Maria",
  "João",
  "José",
  "Antonio",
  "Beatriz",
  "Camila",
  "amanda",
];

const letra = "c";

const filtrarNomes = nomes.filter(
  (nome) => nome[0] === letra.toUpperCase() || nome[0] === letra.toLowerCase()
);

console.log(filtrarNomes);
