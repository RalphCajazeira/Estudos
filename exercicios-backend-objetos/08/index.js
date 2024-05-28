const usuarios = [
  {
    nome: "João",
    pets: [],
  },
  {
    nome: "Tiago",
    pets: [],
  },
  {
    nome: "Ana",
    pets: ["Pingo", "Lulu"],
  },
  {
    nome: "Beatriz",
    pets: ["Lessie"],
  },
  {
    nome: "Carlos",
    pets: ["Farofa", "Salsicha", "Batata"],
  },
  {
    nome: "Antonio",
    pets: ["Naninha"],
  },
];

const donoDoPet = "Carlos";
let usuarioNaoEncontrado = true;

for (const usuario of usuarios) {
  if (usuario.nome === donoDoPet) {
    usuarioNaoEncontrado = false;
    if (usuario.pets.length > 1) {
      console.log(`Sou ${usuario.nome} e tenho ${usuario.pets.length} pets`);
    } else if (usuario.pets.length === 1) {
      console.log(`Sou ${usuario.nome} e tenho 1 pet`);
    } else {
      console.log(`Sou ${usuario.nome} e não tenho pets`);
    }
    break;
  }
}

if (usuarioNaoEncontrado) {
  console.log("Usuario não encontrado");
}
