const numeroCartao = "1111222233334444";

function ocultarNumeroCartao(numeroCartao) {
  const numeroOculto = `${numeroCartao.slice(0, 4)}********${numeroCartao.slice(
    12,
    16
  )}`;

  return numeroOculto;
}

console.log(ocultarNumeroCartao(numeroCartao));
