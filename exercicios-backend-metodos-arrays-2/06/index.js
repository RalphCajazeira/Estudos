const cidades = [
  "Salvador",
  "São Paulo",
  "Brasilia",
  "Recife",
  "Rio de Janeiro",
];

const filtrarCidade = cidades.filter((cidade) => {
  return cidade.length <= 8;
});

console.log(filtrarCidade);
