const numeros = [0, 122, 4, 6, 7, 8, 44];

const validarNumerosPares = numeros.every((numero) => numero % 2 === 0);

if (validarNumerosPares) {
  console.log("array válido");
} else {
  console.log("array inválido");
}
