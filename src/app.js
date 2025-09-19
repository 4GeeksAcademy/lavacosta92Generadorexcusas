import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
const subjects = ["My dog aura -.-", "My son liam -.-", "My cousin >.<", "My little sister -.-"];
const verbs    = ["smash", "broke", "hid", "delete"];
const objects  = ["The homework", "the computer", "the presentation", "the car"];
const places   = ["in the librery", "at home", "at school", "on Mars"];

function getRandom(arr) {
  const idx= Math.floor(Math.random()* arr.length)
  return arr[idx];
}

function generateExcuse() {
  const s = getRandom(subjects);
  const v = getRandom(verbs);
  const o = getRandom(objects);
  const p = getRandom(places);

  const excuse = `${s} ${v} ${o} ${p}.`;
  const parrafo =document.getElementById("excusa");
  parrafo.innerHTML = excuse;
}
  generateExcuse();
}


