const texto = "Aprenda programar do zero na Cubos Academy";

function replaceAll(conteudo, substituir, substituto) {
  while (conteudo.includes(substituir)) {
    conteudo = conteudo.replace(substituir, substituto);
  }
  return conteudo.toLowerCase();
}

console.log(replaceAll(texto, " ", "-"));
