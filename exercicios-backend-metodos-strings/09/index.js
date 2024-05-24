const nome = "Guido Cerqueira";

function criarNickname(nome) {
  const nickname = `@${nome
    .replace(/\s+/g, "")
    .toLowerCase()
    .substring(0, 12)}`;
  return nickname;
}

console.log(criarNickname(nome));
