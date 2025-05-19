class Ventilador {
  constructor() {
    this.velocidadActual = "apagado";
    this.estaOscilando = false;
  }

  encender() {
    this.velocidadActual = "baja";
    this.mostrarEstado();
  }

  apagar() {
    this.velocidadActual = "apagado";
    this.mostrarEstado();
  }

  cambiarVelocidad() {
    if (this.velocidadActual === "apagado") {
      this.velocidadActual = "baja";
    } else if (this.velocidadActual === "baja") {
      this.velocidadActual = "media";
    } else if (this.velocidadActual === "media") {
      this.velocidadActual = "alta";
    } else {
      this.velocidadActual = "baja";
    }
    this.mostrarEstado();
  }

  alternarOscilacion() {
    this.estaOscilando = !this.estaOscilando;
    this.mostrarEstado();
  }

  mostrarEstado() {
    const estado = `Velocidad: ${this.velocidadActual} | Oscilando: ${this.estaOscilando ? "si" : "no"}`;
    document.getElementById("estado").innerText = estado;
  }
}

const ventilador = new Ventilador();

function encender() { ventilador.encender(); }
function apagar() { ventilador.apagar(); }
function cambiarVelocidad() { ventilador.cambiarVelocidad(); }
function alternarOscilacion() { ventilador.alternarOscilacion(); }
