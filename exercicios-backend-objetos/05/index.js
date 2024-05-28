const curso = {
  id: 1234,
  nome: "Lógica de programação",
  aulas: [],
};

const aulas = [
  {
    id: 1,
    nome_da_aula: "Introdução a programação",
  },
  {
    id: 2,
    nome_da_aula: "Variáveis",
  },
  {
    id: 3,
    nome_da_aula: "Condicionais",
  },
  {
    id: 4,
    nome_da_aula: "Arrays",
  },
];

for (const aula of aulas) {
  curso.aulas.push(aula);
}

console.log(curso);
