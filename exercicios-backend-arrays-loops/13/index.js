// const disjuntores = [false, false, true, false, false, true, false, false];
const disjuntores = [
  false,
  true,
  true,
  false,
  false,
  true,
  false,
  false,
  true,
  true,
];

for (let index = 0; index < disjuntores.length; index++) {
  const disjuntor = disjuntores[index];
  if (disjuntor) {
    console.log(index);
  }
}
