const precos = [30, 10, 54, 76, 1, 4, 35];

let menorPerda = Infinity;

for (let x = 0; x < precos.length; x++) {
  for (let y = x + 1; y < precos.length; y++) {
    if (precos[x] > precos[y] && precos[x] - precos[y] < menorPerda) {
      menorPerda = precos[x] - precos[y];
    }
  }
}

console.log(menorPerda);
