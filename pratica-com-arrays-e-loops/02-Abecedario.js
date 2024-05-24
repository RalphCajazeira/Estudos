const letra = "m";
const palavras = ["mamao", "maca", "melao", "melancia", "laranja"];

let perdedores = 0;
for (const palavra of palavras) {
  if (palavra[0] !== letra) {
    perdedores++;
  }
}
console.log(perdedores);
