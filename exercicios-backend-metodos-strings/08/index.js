const cpf = "011.022.033-44";

function formatarCPF(cpf) {
  const cpfSemPontuacao = cpf.replace(/\D/g, "");

  return cpfSemPontuacao;
}

console.log(formatarCPF(cpf));
