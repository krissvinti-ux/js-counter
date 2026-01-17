import {add, reset, decrease} from './counter.js'


const btnDecrease = document.getElementById("decrease");
const btnReset = document.getElementById("reset");
const btnAdd = document.getElementById("add");

if (btnDecrease) btnDecrease.addEventListener("click", decrease);
if (btnReset) btnReset.addEventListener("click", reset);
if (btnAdd) btnAdd.addEventListener("click", add);

