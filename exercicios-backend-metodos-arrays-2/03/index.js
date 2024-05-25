const palavras = ["arroz", "feijão", "carne", "vodka", "macarrão"];

const bebidasProibidas = ["cerveja", "vodka"];

const verificarBebidas = palavras.some((palavra) => {
  return bebidasProibidas.includes(palavra);
});

if (verificarBebidas) {
  console.log("revise sua lista, joão. possui bebida com venda proibida!");
} else {
  console.log("tudo certo, vamos as compras!");
}
