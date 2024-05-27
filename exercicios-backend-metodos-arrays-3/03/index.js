const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44];

const filtroMaiorNumero = numeros.reduce((a, b) => {
  let resultado = a;
  if (b > a) {
    resultado = b;
  }
  return resultado;
});

console.log(filtroMaiorNumero);
