class Controlador {
  constructor(auto) {
    this.auto = auto;
    this.teclas = {};

    document.addEventListener("keydown", e => this.teclas[e.key] = true);
    document.addEventListener("keyup", e => this.teclas[e.key] = false);
  }

  actualizar() {
    if (this.teclas["ArrowUp"]) this.auto.avanzar();
    if (this.teclas["ArrowDown"]) this.auto.retroceder();
    if (this.teclas["ArrowLeft"]) this.auto.girarAntihorario();
    if (this.teclas["ArrowRight"]) this.auto.girarHorario();
  }
}
