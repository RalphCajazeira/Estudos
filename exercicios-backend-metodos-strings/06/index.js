const celular = 7199918888;

function formatarNumeroCelular(celular) {
  let celularTexto = String(celular);

  if (celularTexto.length === 10) {
    celularTexto = `(${celularTexto.slice(0, 2)}) 9 ${celularTexto.slice(
      2,
      6
    )}-${celularTexto.slice(6, 10)}`;
    return celularTexto;
  } else if (celularTexto.length === 8) {
    celularTexto = `9 ${celularTexto.slice(0, 4)}-${celularTexto.slice(4, 8)}`;
    return celularTexto;
  } else {
    return "Numero Invalido";
  }
}

console.log(formatarNumeroCelular(celular));
