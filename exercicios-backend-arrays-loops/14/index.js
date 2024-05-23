// const arrayA = [5, 32, 3, 44, 1];
// const arrayB = [57, 4, 21, 2, 13];
const arrayA = [1, 3, 3, 44, 11];
const arrayB = [57, 4, 21, 32, 13];

for (let index = 0; index < (arrayA.length || arrayB.length); index++) {
  const numeroA = arrayA[index];
  const numeroB = arrayB[index];
  if (numeroA < numeroB) {
    console.log(numeroA);
  } else {
    console.log(numeroB);
  }
}
