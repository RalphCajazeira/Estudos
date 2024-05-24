const pacientes = [
  "José",
  "Pedro",
  "Ana Beatriz",
  "Maria",
  "João",
  "Ana",
  "Bárbara",
  "Joana",
];

const operacao = "atender";
const nome = "Ralph";

function agendarPaciente(pacientes, nome) {
  pacientes.push(nome);
  console.log(pacientes.join(", "));
}

function atenderPaciente(pacientes) {
  pacientes.shift();
  console.log(pacientes.join(", "));
}

function cancelarAtendimento(pacientes, nome) {
  const idexPaciente = pacientes.indexOf(nome);
  pacientes.splice(idexPaciente, 1);
  console.log(pacientes.join(", "));
}

agendarPaciente(pacientes, nome);
atenderPaciente(pacientes);
cancelarAtendimento(pacientes, "Ana Beatriz");
cancelarAtendimento(pacientes, nome);
