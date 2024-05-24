const cpf = "12345678900";
const cnpj = "12345678900112";

if (cpf.length === 11) {
  let cpfFormatado = `${cpf.slice(0, 3)}.${cpf.slice(3, 6)}.${cpf.slice(
    6,
    9
  )}-${cpf.slice(9, 11)}`;
  console.log(cpfFormatado);
} else {
  console.log("CPF Inválido");
}

if (cnpj.length === 14) {
  let cnpjFormatado = `${cnpj.slice(0, 2)}.${cnpj.slice(2, 5)}.${cnpj.slice(
    5,
    8
  )}/${cnpj.slice(8, 12)}-${cnpj.slice(12, 14)}`;
  console.log(cnpjFormatado);
} else {
  console.log("CNPJ Inválido");
}
