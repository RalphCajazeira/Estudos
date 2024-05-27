const carros = [
  { nome: "corola", marca: "toyota", ano: "2020", cor: "prata" },
  { nome: "argo", marca: "fiat", ano: "2021", cor: "preto" },
  { nome: "ranger", marca: "ford", ano: "2021", cor: "prata" },
  { nome: "hilux", marca: "toyota", ano: "2018", cor: "branco" },
];

const campoOrdenacaoPadrao = "nome";

const ordenarCarros = (arraycarros, campoOrdenacao) => {
  return arraycarros.sort((primeiro, segundo) => {
    return primeiro[campoOrdenacao].localeCompare(segundo[campoOrdenacao]);
  });
};

console.log(ordenarCarros(carros, campoOrdenacao));
