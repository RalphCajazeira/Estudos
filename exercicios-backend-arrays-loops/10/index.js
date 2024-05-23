const numeros = [8, 11, 4, 3, 15, -2];

let menorNumero = numeros[0];
let maiorNumero = numeros[0];

for (const numero of numeros) {
  if (menorNumero > numero) {
    menorNumero = numero;
  }
  if (maiorNumero < numero) {
    maiorNumero = numero;
  }
}

console.log(menorNumero);
console.log(maiorNumero);

console.log(maiorNumero - menorNumero);
