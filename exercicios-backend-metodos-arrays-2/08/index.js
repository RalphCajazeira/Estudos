const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];

const corrigirNomes = frutas.map((fruta, index) => {
  const frutaFormatada = fruta[0].toUpperCase() + fruta.slice(1).toLowerCase();
  return `${index} - ${frutaFormatada}`;
});

const formatarNomes = corrigirNomes.indexOf();

// for (let fruta of frutas) {
//   const resultado = fruta[0].toUpperCase() + fruta.slice(1).toLowerCase();
//   console.log(resultado);
// }

// console.log(frutas);

console.log(corrigirNomes);
