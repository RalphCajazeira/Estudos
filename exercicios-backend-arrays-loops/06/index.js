const numeros = [3, 4, 7, 8, 1, 6, 5, 10];

let somaPares = 0;

for (const iterator of numeros) {
  if (iterator % 2 === 0) {
    somaPares += iterator;
  }
}

console.log(somaPares);
