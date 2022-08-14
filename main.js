// set initial count
let count = 0;
// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function (patito) {
  patito.addEventListener("click", function (e) { // Paso 1 Escucha el Clicl
    const styles = e.currentTarget.classList; // Paso 2. determina la variable segun las clases del btn pulsado.
    if (styles.contains("decrease")) { // Paso 3.1 Si estilo contiene "Decrease"  en sus clases ->
      count--; // restar 1
    }
    else if (styles.contains("increase")) { // Paso 3.2 Si estilo contiene "Increase"  en sus clases ->
      count++; // suma 1
    } else { // si no es ninguno
      count = 0; // regresa a 0
    }
    if (count > 0) { // Si esta por encima de 0 es verde
      value.style.color = "green"
    }
    if (count < 0) { // si esta por debajo de 0 es rojo
      value.style.color = "red"
    }
    if (count === 0) { // si es igual a 0 es negro
      value.style.color = "black"
    }
    value.textContent = count; // pinta el valor en el texto
  })
});