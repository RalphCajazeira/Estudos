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

// for (let index = 0; index < usuarios.length; index++) {
//   const usuario = usuarios[index];
//   if (usuario.idade >= 18) {
//     usuarios[index] = {
//       ...usuario,
//       maior_idade: "true",
//     };
//   } else {
//     usuarios[index] = {
//       ...usuario,
//       maior_idade: "false",
//     };
//   }
// }

// usuarios.forEach((usuario) => {
//   usuario.maior_idade = usuario.idade > 17;
// });

for (const usuario of usuarios) {
  usuario.maior_idade = usuario.idade > 17;
}

console.log(usuarios);
