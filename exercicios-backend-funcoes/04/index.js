function centavosParaMoedaBrasil(centavos) {
  const valorEmReais = (centavos / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return valorEmReais;
}

const contaBancaria = {
  nome: "Ralph",
  saldo: 0,
  historicos: [],
  depositar(valor) {
    this.saldo += valor;
    this.historicos.push({
      tipo: "Deposito",
      valor,
    });
    return `Deposito de ${centavosParaMoedaBrasil(
      valor
    )} realizado para o cliente: ${this.nome}`;
  },
  sacar(valor) {
    if (valor > this.saldo) {
      return `Saldo insuficiente para o saque de: ${this.nome}`;
    } else {
      this.saldo -= valor;
      this.historicos.push({
        tipo: "Saque",
        valor,
      });
      return `Saque de ${centavosParaMoedaBrasil(
        valor
      )} realizado para o cliente: ${this.nome}`;
    }
  },
  extrato() {
    let textoExtrato = `Extrato de ${this.nome} - ${centavosParaMoedaBrasil(
      this.saldo
    )}\nHistórico\n`;
    for (const historico of this.historicos) {
      textoExtrato += `${historico.tipo} de ${centavosParaMoedaBrasil(
        historico.valor
      )}\n`;
    }
    return textoExtrato;
  },
};

console.log(contaBancaria.depositar(10000));
console.log(contaBancaria.sacar(50000));
console.log(contaBancaria.sacar(5000));
console.log(contaBancaria.extrato());
