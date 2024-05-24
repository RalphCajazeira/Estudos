const precos = [100, 500, 100, 200, 50];

let soma = 0;
let menorPreco = precos[0];

for (const preco of precos) {
  if (precos.length >= 5) {
    soma += preco;
    if (menorPreco > preco) {
      menorPreco = preco;
    }
  } else {
    soma += preco;
  }
}

if (precos.length >= 5) {
  console.log(soma - menorPreco);
} else {
  console.log(soma);
}
