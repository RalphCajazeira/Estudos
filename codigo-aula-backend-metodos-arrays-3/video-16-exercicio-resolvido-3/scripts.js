const usuarios = [
  { id: 11, nome: "joao", idade: 23 },
  { id: 2, nome: "maria", idade: 18 },
  { id: 4, nome: "ana", idade: 30 },
  { id: 1, nome: "rodrigo", idade: 17 },
  { id: 123, nome: "rodrigo", idade: 50 },
];

const filtroMaiorIdade = usuarios.reduce(
  (acumulador, elementoAtual, index, array) => {
    //não precisa deixar o indice e o array, deixei so para saber que tem
    let resultado = acumulador;
    if (elementoAtual.idade > acumulador.idade) {
      resultado = elementoAtual;
    }
    return resultado;
  }
);

console.log(
  `Dessa lista o(a)${filtroMaiorIdade.nome} é o mais velho(a) com ${filtroMaiorIdade.idade} de Idade`
);
