class Helicoptero {
  constructor(modelo) {
    this.modelo = modelo;
    this.municion = 10;
    this.combustible = 100;
    this.vida = 100;
    this.posX = 200;
    this.posY = 150;
  }

  mover(direccion) {
    if (this.combustible <= 0) return;
    this.combustible -= 1;
    switch (direccion) {
      case 'arriba': this.posY -= 10; break;
      case 'abajo': this.posY += 10; break;
      case 'izquierda': this.posX -= 10; break;
      case 'derecha': this.posX += 10; break;
    }
    this.dibujar();
    this.mostrarEstado();
  }

  disparar() {
    if (this.municion > 0) {
      this.municion--;
      alert("Pew! Disparo realizado");
    } else {
      alert("Sin municion");
    }
    this.mostrarEstado();
  }

  recargar() {
    this.municion = 10;
    this.mostrarEstado();
  }

  recargarCombustible() {
    this.combustible = 100;
    this.mostrarEstado();
  }

  recibirDanio() {
    this.vida -= 10;
    if (this.vida < 0) this.vida = 0;
    this.mostrarEstado();
  }

  mostrarEstado() {
    document.getElementById("estado").innerText =
      `Modelo: ${this.modelo} | Vida: ${this.vida} | Combustible: ${this.combustible} | Municion: ${this.municion}`;
  }

  dibujar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "lime";
    ctx.fillRect(this.posX - 15, this.posY - 10, 30, 20);
    ctx.fillStyle = "white";
    ctx.fillText("H", this.posX - 5, this.posY + 5);
  }
}

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const heli = new Helicoptero("AH-64 Apache");
heli.dibujar();
heli.mostrarEstado();

function mover(dir) { heli.mover(dir); }
function disparar() { heli.disparar(); }
function recargar() { heli.recargar(); }
function recargarCombustible() { heli.recargarCombustible(); }
function recibirDanio() { heli.recibirDanio(); }
