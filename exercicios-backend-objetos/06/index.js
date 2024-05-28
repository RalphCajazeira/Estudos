const usuarios = [
  {
    nome: "João",
    idade: 25,
  },
  {
    nome: "Ana",
    idade: 18,
  },
  {
    nome: "Beatriz",
    idade: 15,
  },
  {
    nome: "Carlos",
    idade: 16,
  },
  {
    nome: "Antonio",
    idade: 32,
  },
];

// const jovens = [];

// const adultos = [];

// for (const usuario of usuarios) {
//   if (usuario.idade > 17) {
//     adultos.push(usuario);
//   } else {
//     jovens.push(usuario);
//   }
// }

const jovens = [];
let indiceJovens = 0;
const adultos = [];
let indiceAdulto = 0;

for (const usuario of usuarios) {
  if (usuario.idade < 18) {
    jovens[indiceJovens] = usuario;
    indiceJovens++;
  } else {
    adultos[indiceAdulto] = usuario;
    indiceAdulto++;
  }
}

console.log(jovens);
console.log(adultos);
