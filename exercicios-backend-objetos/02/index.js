const carros = [
  {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2023,
    cor: "Preto",
    quantidade_portas: 4,
    automatico: true,
  },
  {
    marca: "Honda",
    modelo: "Civic",
    ano: 2022,
    cor: "Branco",
    quantidade_portas: 4,
    automatico: false,
  },
  {
    marca: "Chevrolet",
    modelo: "Onix",
    ano: 2021,
    cor: "Prata",
    quantidade_portas: 4,
    automatico: true,
  },
  {
    marca: "Fiat",
    modelo: "Argo",
    ano: 2020,
    cor: "Vermelho",
    quantidade_portas: 4,
    automatico: false,
  },
  {
    marca: "Volkswagen",
    modelo: "T-Cross",
    ano: 2019,
    cor: "Azul",
    quantidade_portas: 4,
    automatico: true,
  },
];

for (const carro of carros) {
  console.log(carro);
}
