const lista = ["José", "Pedro", "Maria", "João", "Ana", "Bárbara", "Joana"];
// const pacientes = {
//   lista: ["José", "Pedro", "Maria", "João", "Ana", "Bárbara", "Joana"],
//   atender() {
//     console.log(`O paciente  ${this.lista[0]} foi removido da Fila`);
//     this.lista.splice(0, 1);
//   },
//   agendar(nome) {
//     this.lista.splice(this.lista.length, 0, nome);
//   },
// };

// pacientes.atender();
// pacientes.agendar("Ralph");
// console.log(pacientes.lista.join(", "));

function controleAttendimento(fila, operacao, nome) {
  if (operacao === "agendar" && nome) {
    fila.push(nome);
    console.log(fila.join(", "));
  } else if (operacao === "atender") {
    fila.shift();
    console.log(fila.join(", "));
  } else {
    console.log("Operação Inválida");
  }
}

const operacao = "atender";
const nome = "Ralph";

controleAttendimento(lista, operacao, nome);
