const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const auto = new Auto(250, 250, 80, 40);
const control = new Controlador(auto);

function animar() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  control.actualizar();
  auto.dibujar(ctx);
  requestAnimationFrame(animar);
}

animar();
