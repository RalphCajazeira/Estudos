const prova = {
  aluno: "João",
  materia: "Português",
  valor: 10,
  questoes: [
    {
      resposta: "a",
      correta: "b",
    },
    {
      resposta: "c",
      correta: "c",
    },
    {
      resposta: "e",
      correta: "b",
    },
    {
      resposta: "b",
      correta: "b",
    },
    {
      resposta: "c",
      correta: "c",
    },
  ],
};

function corrigirProva(prova) {
  let contPontos = 0;
  for (const questao of prova.questoes) {
    if (questao.resposta === questao.correta) {
      contPontos++;
    }
  }
  console.log(
    `O aluno(a) ${prova.aluno} acertou ${contPontos} questões e obteve nota ${
      contPontos * 2
    }`
  );
}

corrigirProva(prova);
