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

const donoDoPet = "Beatriz";
let usuarioNaoEncontrado = true;

for (const usuario of usuarios) {
  const { nome, pets } = usuario;
  if (nome === donoDoPet) {
    usuarioNaoEncontrado = false;
    if (pets.length > 1) {
      console.log(`Sou ${nome} e tenho ${pets.length} pets`);
    } else if (pets.length === 1) {
      console.log(`Sou ${nome} e tenho 1 pet`);
    } else {
      console.log(`Sou ${nome} e não tenho pets`);
    }
    break;
  }
}

if (usuarioNaoEncontrado) {
  console.log("Usuario não encontrado");
}
