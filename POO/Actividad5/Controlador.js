function Controlador(ctx) {
  this.ctx = ctx;
  this.figuras = [];
  this.activa = null;
}

Controlador.prototype.agregar = function(figura) {
  this.figuras.push(figura);
  this.redibujar();
  this.actualizarTabla();
};

Controlador.prototype.seleccionar = function(nombre) {
  var self = this;
  this.activa = this.figuras.find(function(f) {
    return f.nombre === nombre;
  });
  document.getElementById("figuraActiva").innerText =
    "Figura activa seleccionada: " + (this.activa ? this.activa.nombre : "Ninguna");
  this.actualizarTabla();
};

Controlador.prototype.moverFiguraActiva = function(dx, dy) {
  if (this.activa) {
    this.activa.mover(dx, dy);
    this.redibujar();
  }
};

Controlador.prototype.eliminarPorNombre = function(nombre) {
  this.figuras = this.figuras.filter(function(f) {
    return f.nombre !== nombre;
  });
  if (this.activa && this.activa.nombre === nombre) {
    this.activa = null;
  }
  this.redibujar();
  this.actualizarTabla();
  document.getElementById("figuraActiva").innerText = "Figura activa seleccionada: Ninguna";
};

Controlador.prototype.redibujar = function() {
  this.ctx.clearRect(0, 0, 500, 300);
  var self = this;
  this.figuras.forEach(function(f) {
    f.dibujar(self.ctx);
  });
};

Controlador.prototype.actualizarTabla = function() {
  var tabla = document.getElementById("tablaFiguras");
  tabla.innerHTML = "<tr><th>Tipo</th><th>ID</th></tr>";
  var self = this;
  this.figuras.forEach(function(f) {
    var fila = document.createElement("tr");
    if (self.activa === f) fila.classList.add("activo");
    fila.innerHTML = "<td>" + f.obtenerTipo() + "</td><td>" + f.nombre + "</td>";
    fila.onclick = function() {
      self.seleccionar(f.nombre);
    };
    tabla.appendChild(fila);
  });
};