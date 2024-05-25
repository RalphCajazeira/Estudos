const arquivos = [
  "teste.txt",
  "foto.png",
  "contrato.doc",
  "instalador.exe",
  "foto.bat",
];

const extensaoComVirus = ".bat";

const antiVirus = (array, string) => {
  const resltado = array.some((arquivo) => arquivo.includes(string));

  if (resltado) {
    console.log("Virus Detectado");
  } else {
    console.log("Nenhum Virus Detectado");
  }
};

antiVirus(arquivos, extensaoComVirus);
