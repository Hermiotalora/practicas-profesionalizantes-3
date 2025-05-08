class Semaforo {
    constructor() {
      this.estados = ['rojo', 'amarillo', 'verde'];
      this.indice = 0;
      this.iniciar();
    }
  
    iniciar() {
      this.cambiarEstado();
      setInterval(() => this.cambiarEstado(), 3000);
    }
  
    cambiarEstado() {
      document.querySelectorAll('.luz').forEach(luz => luz.classList.remove('encendido'));
      const color = this.estados[this.indice];
      document.getElementById(color).classList.add('encendido');
      this.indice = (this.indice + 1) % this.estados.length;
    }
  }
  
  const semaforo = new Semaforo();
  