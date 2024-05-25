const carros = [
  {
    nome: "Gol",
    marca: "Volkswagen",
    ano: 2024,
    cor: "Branco",
  },
  {
    nome: "Onix",
    marca: "Chevrolet",
    ano: 2023,
    cor: "Prata",
  },
  {
    nome: "Fiat Argo",
    marca: "Fiat",
    ano: 2022,
    cor: "Preto",
  },
  {
    nome: "Kwid",
    marca: "Renault",
    ano: 2021,
    cor: "Vermelho",
  },
  {
    nome: "Sandero",
    marca: "Renault",
    ano: 2022,
    cor: "Azul",
  },
];

const marca = "Fiat";

const buscarCarro = (marca, arraycarros) => {
  return arraycarros.find((carro) => {
    return carro.marca === marca;
  });
};

console.log(buscarCarro(marca, carros));
