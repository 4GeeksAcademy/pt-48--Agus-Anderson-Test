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

  document.querySelector(
    "#promedio"
  ).innerHTML = `<div class="fw-bold text-light pt-4" id="media">${promedio}</div>
  <p class="fw-light pt-1" style="color: lightgray;">of 100</p>`;

  function mostrarMensaje() {
    promedio >= 75
      ? (document.querySelector(
          "#mensaje"
        ).innerHTML = `<h4 class="fw-bold text-light pe-1">Great</h4>
        <div class="fw-light" style="color: lightgrey;">You scored higher than 65% of the people to have taken these test.</div>`)
      : promedio >= 50
      ? (document.querySelector(
          "#mensaje"
        ).innerHTML = `<h4 class="fw-bold text-light pe-1">Keep it up!</h4>
        <div class="fw-light" style="color: lightgrey;">You scored higher than 45% of the people to have taken these test.</div>`)
      : promedio >= 25
      ? (document.querySelector(
          "#mensaje"
        ).innerHTML = `<h4 class="fw-bold text-light pe-1">Just a little more work</h4>
        <div class="fw-light" style="color: lightgrey;">You scored higher than 15% of the people to have taken these test.</div>`)
      : (document.querySelector(
          "#mensaje"
        ).innerHTML = `<h4 class="fw-bold text-light pe-1">Cannot believe this</h4>
        <div class="fw-light" style="color: lightgrey;">You just got the worst note among all the students. Well done, champion.</div>`);
  }
  mostrarMensaje();
}

window.obtenerPromedio = obtenerPromedio;
