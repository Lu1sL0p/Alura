let entrada = document.querySelector("#entrada");
let salida = document.querySelector("#salida");
let encriptador = document.querySelector("#encriptar");
let desencriptador = document.querySelector("#desencriptar");
let limpiar = document.querySelector("#limpiar");
let copiar = document.querySelector("#copiar");
let pegar = document.querySelector('#pegar')
let muñeco = document.getElementById("muñeco");
let fondo = document.getElementById("fondo");
let diamante = document.getElementById("diamante");
let msj = document.getElementById("mensaje");
let op;

function check() {
  let frase = entrada.value;
  let arreglo = frase.split("");
  let i = 0;
  switch (op) {
    case 0:
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
      salida.value = frase;
      break;
    case 1:
      i = 0;
      while (i < arreglo.length) {
        if (arreglo[i] == "a") {
          arreglo.splice(i + 1, 1);
        }
        if (arreglo[i] == "e") {
          arreglo.splice(i + 1, 4);
        }
        if (arreglo[i] == "i") {
          arreglo.splice(i + 1, 3);
        }
        if (arreglo[i] == "o") {
          arreglo.splice(i + 1, 3);
        }
        if (arreglo[i] == "u") {
          arreglo.splice(i + 1, 3);
        }
        frase = arreglo.join("");
        i++;
      }
      salida.value = frase;
      break;
    default:
      muñeco.style.display = "block";
      msj.style.display = "block";
      break;
  }
}

function cifrar() {
  op = 0;
  check();
  muñeco.style.display = "none";
  fondo.style.display = "none";
  diamante.style.display = "none";
  msj.style.display = "none";

  if (entrada.value == "") {
    muñeco.style.display = "block";
    fondo.style.display = "block";
    diamante.style.display = "block";
    msj.style.display = "block";
  }
}

function decifrar() {
  op = 1;
  check();
  muñeco.style.display = "none";
  fondo.style.display = "none";
  diamante.style.display = "none";
  msj.style.display = "none";

  if (entrada.value == "") {
    muñeco.style.display = "block";
    fondo.style.display = "block";
    diamante.style.display = "block";
    msj.style.display = "block";
  }
}

function borrar() {
  salida.value = "";
  entrada.value = "";
  muñeco.style.display = "block";
  fondo.style.display = "block";
  diamante.style.display = "block";
  msj.style.display = "block";
}

function copiarTexto() {
  if (entrada.value != "") {
    navigator.clipboard.writeText(salida.value);
    alert("Texto copiado")
  }
}

function pegarTexto(){
  
}

encriptador.onclick = cifrar;
desencriptador.onclick = decifrar;
limpiar.onclick = borrar;
copiar.onclick = copiarTexto; //Agregar función que copie el contenido al portapapeles
