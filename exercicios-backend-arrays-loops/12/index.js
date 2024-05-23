// const filaDeDentro = ["Jose", "Maria", "Joao"];
// const filaDeFora = ["Joana", "Roberta", "Marcos", "Felipe"];

const filaDeDentro = ["Jose", "Joao"];
const filaDeFora = ["Joana", "Roberta"];

const limiteFilaDentro = 5;

// filaDeFora.push("Ralph");
// filaDeFora.push("Lennon");

// while (filaDeDentro.length < limiteFilaDentro && filaDeFora.length > 0) {
//   filaDeDentro.push(filaDeFora[0]);
//   filaDeFora.shift();
// }

// console.log(filaDeDentro);
// console.log(filaDeFora);

const controleDaFila = {
  filaDeDentro,
  filaDeFora,
  limiteFilaDentro,
  adiciona(nome) {
    filaDeFora.push(nome);
    this.atualizarFila();
  },
  atender() {
    filaDeDentro.shift();
    this.atualizarFila();
  },
  atualizarFila() {
    while (filaDeDentro.length < limiteFilaDentro && filaDeFora.length > 0) {
      filaDeDentro.push(filaDeFora[0]);
      filaDeFora.shift();
    }
  },
};

controleDaFila.adiciona("Ralph");
controleDaFila.adiciona("Lennon");
controleDaFila.adiciona("Marcos");
controleDaFila.atender();
controleDaFila.atender();
controleDaFila.atender();
controleDaFila.adiciona("Erico");

console.log(filaDeDentro);
console.log(filaDeFora);
