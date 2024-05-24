const comentario = "Esse COVID é muito perigoso!";

const palavrasProibidas = ["pandemia", "covid"];

function verificarComentarioProibido(comentario, palavrasProibidas) {
  let palavraProibidaEncontrada = false;
  for (let index = 0; index < palavrasProibidas.length; index++) {
    const palavra = palavrasProibidas[index];
    if (comentario.toUpperCase().includes(palavra.toUpperCase())) {
      palavraProibidaEncontrada = true;
      break;
    }
  }
  if (palavraProibidaEncontrada) {
    return "Comentário bloqueado por conter palavras proibidas";
  } else {
    return "Comentário autorizado";
  }
}

console.log(verificarComentarioProibido(comentario, palavrasProibidas));
