const nomes = ["Ana", "Joana", "Carlos", "amanda"];

const letraInicial = "A";

const nomesFiltrados = [];

for (const iterator of nomes) {
  if (iterator[0].toLowerCase() === letraInicial.toLowerCase()) {
    nomesFiltrados.push(iterator);
  }
}

console.log(nomesFiltrados);
