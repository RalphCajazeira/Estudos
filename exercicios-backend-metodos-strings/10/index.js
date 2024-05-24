const nomeArquivo = "Foto da Familia.pdf";

function validarExtencao(nomeArquivo) {
  const extensoesPermitidas = ["jpg", "jpeg", "gif", "png"];

  const pegarExtensao = nomeArquivo.slice(-3, nomeArquivo.length);

  if (extensoesPermitidas.includes(pegarExtensao)) {
    return "Arquivo válido";
  } else {
    return "Arquivo inválido";
  }
}

console.log(validarExtencao(nomeArquivo));
