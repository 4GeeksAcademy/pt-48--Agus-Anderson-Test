/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function obtenerPromedio() {
  let reaction = document.querySelector("#reaction").value;
  let memory = document.querySelector("#memory").value;
  let verbal = document.querySelector("#verbal").value;
  let visual = document.querySelector("#visual").value;

  let total = [
    parseInt(reaction),
    parseInt(memory),
    parseInt(verbal),
    parseInt(visual)
  ];

  const sumTotal = total.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );

  let promedio = parseInt(sumTotal) / total.length;

  document.querySelector("#promedio").innerHTML = promedio;

  function mostrarMensaje() {
    promedio >= 75
      ? (document.querySelector("#mensaje").innerHTML =
          "Great You scored higher than 65% of the people to have taken these test.")
      : (document.querySelector("#mensaje").innerHTML = "Trabaja mejor");
  }
  mostrarMensaje();
}

window.obtenerPromedio = obtenerPromedio;
