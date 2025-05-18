function tick() {
  postMessage("tick");
  setTimeout(tick, 2000);
  document.getElementById("red").classList.toggle("encendida", state.red);
  document.getElementById("yellow").classList.toggle("encendida", state.yellow);
  document.getElementById("green").classList.toggle("encendida", state.green);

}
tick();
