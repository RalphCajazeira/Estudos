const enderecos = [
  { cep: 00111222, rua: "Rua dos Artistas" },
  { cep: 00111333, rua: "Rua Augusta" },
  { cep: 00222444, rua: "Avenida Paralela" },
  { cep: 11222333, rua: "Rua Carlos Gomes" },
];

const enderecoCep = 11222333;

const buscarRua = enderecos.find((endereco) => {
  return endereco.cep === enderecoCep;
});

console.log(buscarRua.rua);
