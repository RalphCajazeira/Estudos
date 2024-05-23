// const filaDePedidos = ["pedido 12", "pedido 13", "pedido 14"];

const controleDaFila = {
  filaDePedidos: ["pedido 12", "pedido 13", "pedido 14"],
  contador: 15,
  adicionar() {
    this.filaDePedidos.push(`Pedido ${this.contador}`);
    this.contador++;
  },
  remover() {
    this.filaDePedidos.shift();
  },
  resetar() {
    this.filaDePedidos = [];
    this.contador = 1;
  },
};

controleDaFila.adicionar();
console.log(controleDaFila.filaDePedidos);
controleDaFila.remover();
console.log(controleDaFila.filaDePedidos);
controleDaFila.resetar();
console.log(controleDaFila.filaDePedidos);
controleDaFila.adicionar();
console.log(controleDaFila.filaDePedidos);
controleDaFila.adicionar();
console.log(controleDaFila.filaDePedidos);
controleDaFila.remover();
console.log(controleDaFila.filaDePedidos);
