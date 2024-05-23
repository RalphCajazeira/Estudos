const original = [1, 4, 12, 21, 53, 88, 112];

const numerosPares = [];

for (const iterator of original) {
  if (iterator % 2 !== 1) {
    numerosPares.push(iterator);
  }
}

console.log(numerosPares);
