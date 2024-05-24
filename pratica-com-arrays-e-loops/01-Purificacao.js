const stringCorrompida = "*Canis %lupus )familiaris";

const regex = /^[a-zA-Z]$/;

let stringCorrigida = "";
for (const letra of stringCorrompida) {
  if (regex.test(letra)) {
    stringCorrigida += letra;
  } else if (letra === " ") {
    stringCorrigida += letra;
  }
}

console.log(stringCorrigida);
