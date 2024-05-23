const letras = ["A", "a", "B", "C", "E", "e"];

const encontrarLetra = "f";

function encontrarLetras(letras, encontrarLetra) {
  let contadorLetra = 0;
  for (const iterator of letras) {
    if (iterator.toLowerCase() === encontrarLetra.toLowerCase()) {
      contadorLetra++;
    }
  }

  if (contadorLetra === 0) {
    return `Nenhuma letra ${encontrarLetra.toUpperCase()} ou ${encontrarLetra.toLowerCase()} foi encontrada.`;
  } else {
    return `Foram encontradas ${contadorLetra} letras ${encontrarLetra.toUpperCase()} ou ${encontrarLetra.toLowerCase()}.`;
  }
}

console.log(encontrarLetras(letras, encontrarLetra));
