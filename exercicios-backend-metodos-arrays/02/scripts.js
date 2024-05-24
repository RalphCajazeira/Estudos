const nomes = [
  "Juninho",
  "Vidal",
  "Guido",
  "Dani",
  "Ruli",
  "Diego",
  "Ralph",
  "Lennon",
  "Rafael",
];
const tamanhoDoGrupo = 4;

function separarGrupos(nomes, tamanhoDoGrupo) {
  let contador = 0;
  while (nomes.length) {
    contador++;
    if (nomes.length) {
      const grupo = nomes.splice(0, tamanhoDoGrupo).join(", ");
      console.log(`Grupo ${contador}: ${grupo}`);
    }
  }
}

separarGrupos(nomes, tamanhoDoGrupo);
