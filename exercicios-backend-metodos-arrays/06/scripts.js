const usuarios = [
  {
    nome: "João",
    pets: ["Max"],
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

const petPerdido = "Max";

function encontrarDono(usuarios, petPerdido) {
  let donoDoPet = "";
  for (const item of usuarios) {
    if (item.pets.includes(petPerdido)) {
      donoDoPet = item.nome;
      break;
    }
  }
  if (donoDoPet) {
    console.log(`O dono(a) do(a) ${petPerdido} é o(a) ${donoDoPet}`);
  } else {
    console.log(`Que pena ${petPerdido}, não encontramos seu dono(a)`);
  }
}

encontrarDono(usuarios, petPerdido);
