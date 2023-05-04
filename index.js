let entrada = document.querySelector("#entrada");
let salida = document.querySelector("#salida");
let encriptador = document.querySelector("#encriptar");
let desencriptador = document.querySelector("#desencriptar");
let limpiar = document.querySelector("#limpiar");
let copiar = document.querySelector("#copiar");
let pegar = document.querySelector("#pegar");
let muñeco = document.getElementById("muñeco");
let msj = document.getElementById("mensaje");
let alerta = document.getElementById("validacion");
let notificacion = document.getElementsByClassName("notificacion")[0];
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

let ancho = document.documentElement.clientWidth + 17;
console.log(ancho);

function mostrar() {
  if (ancho > 1007) {
    muñeco.style.display = "block";
    msj.style.display = "block";
  } else {
    msj.style.display = "block";
  }
}

function ocultar() {
  muñeco.style.display = "none";
  msj.style.display = "none";
  salida.style.position = "relative";
  salida.style.top = 1000;
}

function cifrar() {
  //Válida mayúsculas y  con acentos
  if (!/[A-ZÀ-ÿ\u00f1\u00d1]/g.test(entrada.value)) {
    op = 0;
    check();
    ocultar();
    alerta.style.display = "none";

    if (entrada.value == "") {
      mostrar();
    }
  } else {
    mostrar();
    salida.value = "";
    alerta.style.display = "flex";
  }
}

function decifrar() {
  if (!/[A-ZÀ-ÿ\u00f1\u00d1]/g.test(entrada.value)) {
    op = 1;
    check();
    ocultar();
    alerta.style.display = "none";

    if (entrada.value == "") {
      mostrar();
    }
  } else {
    mostrar();
    salida.value = "";
    alerta.style.display = "flex";
  }
}

function borrar() {
  mostrar();
  salida.value = "";
  entrada.value = "";
  alerta.style.display = "none";
}

function copiarTexto() {
  if (salida.value != "") {
    navigator.clipboard.writeText(salida.value);
    notificacion.style.display = "flex";
    setTimeout(() => {
    notificacion.style.display = "none";
    }, 3000);
  }
}

encriptador.onclick = cifrar;
desencriptador.onclick = decifrar;
limpiar.onclick = borrar;
copiar.onclick = copiarTexto; //Agregar función que copie el contenido al portapapeles
