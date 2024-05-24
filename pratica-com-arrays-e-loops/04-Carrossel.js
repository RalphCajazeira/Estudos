const sequencia = ">>>>>>>";

const imagens = 7;
let indice = 0;

for (const direcao of sequencia) {
  if (direcao === ">") {
    indice = (indice + 1) % imagens;
  } else if (direcao === "<") {
    indice = (indice - 1 + imagens) % imagens;
  }
}

console.log(indice);

console.log((-1 + 7) % 7);
