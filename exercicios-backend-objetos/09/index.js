const participantes = [
  { nome: "João" },
  { nome: "Ana" },
  { nome: "Beatriz" },
  { nome: "Maria" },
  { nome: "Ana Clara" },
  { nome: "Joana" },
  { nome: "Augusto" },
  { nome: "Renan" },
  { nome: "Patricia" },
  { nome: "Carlos" },
  { nome: "Renato" },
  { nome: "José" },
  { nome: "Roberto" },
  { nome: "Sara" },
  { nome: "Junior" },
  { nome: "Pedro" },
  { nome: "Vitor" },
  { nome: "Antonio" },
];

const encontrarParticipante = "João";

for (let i = 0; i < participantes.length; i++) {
  const participante = participantes[i];
  if (participante.nome === encontrarParticipante) {
    console.log(
      `Galera... O ${participante.nome} está na posição ${i}, corre lá!`
    );
  }
}

// const encontrarParticipante = "Carlos";
// let contator = -1;
// let encontrato = false;

// for (const participante of participantes) {
//   contator++;
//   if (participante.nome === encontrarParticipante) {
//     console.log(
//       `Galera... O ${encontrarParticipante} está na posição ${contator}, corre lá!`
//     );
//   }
// }
