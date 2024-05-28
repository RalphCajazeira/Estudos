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

const jovens = [];

const adultos = [];

for (const usuario of usuarios) {
  if (usuario.idade > 17) {
    adultos.push(usuario);
  } else {
    jovens.push(usuario);
  }
}

console.log(adultos);
console.log(jovens);