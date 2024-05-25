const pessoas = [
  { nome: "Ana", idade: 28 },
  { nome: "Bruno", idade: 34 },
  { nome: "Carlos", idade: 23 },
  { nome: "Daniela", idade: 31 },
  { nome: "Eduardo", idade: 45 },
  { nome: "Fernanda", idade: 19 },
  { nome: "Gustavo", idade: 27 },
  { nome: "Helena", idade: 18 },
  { nome: "Isabel", idade: 22 },
  { nome: "João", idade: 17 },
];

const fiscalizaPessoas = () => {
  const todosMaiorDeIdade = pessoas.every((pessoa) => pessoa.idade >= 18);

  if (todosMaiorDeIdade) {
    console.log("Festa Liperada!");
  } else {
    console.log("Possui Menor de Idade");
  }
};

fiscalizaPessoas(pessoas);
