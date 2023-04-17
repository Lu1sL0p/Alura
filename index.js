let frase = "caisai";
let arreglo = frase.split("");
let op = "b";

switch (op) {
  case "a":
    let i = 0;
    while (i < arreglo.length) {
      if (arreglo[i] == "a") {
        arreglo[i] = "ai";
      }
      if (arreglo[i] == "e") {
        arreglo[i] = "enter";
      }
      if (arreglo[i] == "i") {
        arreglo[i] = "imes";
      }
      if (arreglo[i] == "o") {
        arreglo[i] = "ober";
      }
      if (arreglo[i] == "u") {
        arreglo[i] = "ufat";
      }
      frase = arreglo.join("");
      i++;
    }
    console.log(frase);
    break;
  case "b":
    let j = 0;
    while (j < arreglo.length) {
      if (arreglo[j] == "a") {
        arreglo.splice(j + 1, 1);
      }
      if (arreglo[j] == "e") {
        arreglo.splice(j + 1, 4);
      }
      if (arreglo[j] == "i") {
        arreglo.splice(j + 1, 3);
      }
      if (arreglo[j] == "o") {
        arreglo.splice(j + 1, 3);
      }
      if (arreglo[j] == "u") {
        arreglo.splice(j + 1, 3);
      }
      frase = arreglo.join("");
      j++;
    }
    console.log(frase);
    break;
  default:
    console.log("Escoga una opción válida");
    break;
}
