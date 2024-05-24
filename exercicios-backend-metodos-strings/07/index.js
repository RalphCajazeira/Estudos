const email = "aluno@cubos.academy";

function validarEmail(email) {
  if (
    email.includes("@") &&
    email.includes(".") &&
    email[0] !== "." &&
    email[email.length - 1] !== "."
  ) {
    return "E-mail válido";
  } else {
    return "E-mail inválido";
  }
}

console.log(validarEmail(email));
