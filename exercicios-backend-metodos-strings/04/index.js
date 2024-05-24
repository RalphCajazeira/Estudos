let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

function transformarObj(identificador, nome, email) {
  identificador = identificador.padStart(6, 0);

  nome = nome.split(" ");
  let nomeFormatado = "";
  for (const item of nome) {
    nomeFormatado += item[0].toUpperCase() + item.slice(1) + " ";
  }

  email.trim();

  const obj = {
    identificador,
    nome: nomeFormatado.trim(),
    email: email.trim(),
  };

  return obj;
}

console.log(transformarObj(identificador, nome, email));
