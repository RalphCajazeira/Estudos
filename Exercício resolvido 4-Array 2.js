const professores = [
  { nome: "Guido", stack: "backend" },
  { nome: "Vidal", stack: "backend" },
  { nome: "Dani", stack: "frontend" },
  { nome: "Diego", stack: "frontend" },
  { nome: "Léo", stack: "backend" },
  { nome: "Ruli", stack: "frontend" },
];

const stack = "frontend";

const filtroProfessores = (arrayProfessores, curso) => {
  return arrayProfessores.filter((professor) => professor.stack === curso);
};

console.log(filtroProfessores(professores, stack));
