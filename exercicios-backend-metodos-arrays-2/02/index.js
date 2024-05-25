const palavras = ["livro", "caneta", "sol", "carro", "orelha"];

const verificarPalavras = (arrayPalavras) => {
  const liberarArray = arrayPalavras.every((palavra) => palavra.length <= 5);

  if (liberarArray) {
    console.log("Todas palavras são permitidas");
  } else {
    console.log("existe palavra inválida");
  }
};

verificarPalavras(palavras);
