class Impresora {
  constructor() {
    this.estado = "apagada";
    this.nivelToner = 50;
    this.cantidadHojas = 10;
  }

  encender() {
    this.estado = "encendida";
    this.mostrarEstado();
  }

  apagar() {
    this.estado = "apagada";
    this.mostrarEstado();
  }

  imprimir() {
    if (this.estado !== "encendida") {
      alert("La impresora esta apagada");
      return;
    }
    if (this.nivelToner <= 0 || this.cantidadHojas <= 0) {
      alert("No hay toner o papel suficiente");
      return;
    }
    this.nivelToner -= 5;
    this.cantidadHojas--;
    alert("Imprimiendo...");
    this.mostrarEstado();
  }

  recargarToner() {
    this.nivelToner = 100;
    this.mostrarEstado();
  }

  agregarHojas() {
    this.cantidadHojas += 10;
    this.mostrarEstado();
  }

  mostrarEstado() {
    document.getElementById("estado").innerText =
      "Estado: " + this.estado + ", Toner: " + this.nivelToner + "%, Hojas: " + this.cantidadHojas;
  }
}

const impresora = new Impresora();

function encender() { impresora.encender(); }
function apagar() { impresora.apagar(); }
function imprimir() { impresora.imprimir(); }
function recargarToner() { impresora.recargarToner(); }
function agregarHojas() { impresora.agregarHojas(); }

