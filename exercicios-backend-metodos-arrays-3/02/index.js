const cidades = [
  "Salvador",
  "São Paulo",
  "Brasilia",
  "Recife",
  "Rio de Janeiro",
];

const maiorString = cidades.reduce((a, b) => {
  let resultado = a;
  if (a.length < b.length) {
    resultado = b;
  }
  return resultado;
});

console.log(maiorString);
