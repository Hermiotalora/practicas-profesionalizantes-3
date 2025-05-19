class Auto {
  constructor(marca, modelo, anio) {
    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
    this.velocidadActual = 0;
  }

  arrancar() {
    this.velocidadActual = 0;
    this.mostrarEstado();
  }

  acelerar() {
    this.velocidadActual += 10;
    this.mostrarEstado();
  }

  frenar() {
    this.velocidadActual -= 10;
    if (this.velocidadActual < 0) {
      this.velocidadActual = 0;
    }
    this.mostrarEstado();
  }

  detener() {
    this.velocidadActual = 0;
    this.mostrarEstado();
  }

  mostrarEstado() {
    const estado = `Marca: ${this.marca}.
    Modelo: ${this.modelo}. 
    Año: ${this.anio}.

    Velocidad actual: ${this.velocidadActual} km/h`;

    document.getElementById("estado").innerText = estado;
  }
}

const auto = new Auto("Toyota", "Corolla", 2025);

function arrancar() { auto.arrancar(); }
function acelerar() { auto.acelerar(); }
function frenar() { auto.frenar(); }
function detener() { auto.detener(); }
