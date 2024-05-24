const frutas = ["Banana", "Maçã", "Abacaxi", "Pêra", "Uva"];

frutas.reverse();

const converterString = frutas.join(", ");

console.log(converterString);

frutas.reverse();
frutas.splice(0, 1);
frutas.splice(frutas.length - 1, 1, "Melão");

console.log(frutas);
