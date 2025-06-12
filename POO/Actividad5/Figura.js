function Figura(nombre, x, y, color) {
  this.nombre = nombre;
  this.x = x;
  this.y = y;
  this.color = color;
}
Figura.prototype.mover = function(dx, dy) {
  this.x += dx;
  this.y += dy;
};
Figura.prototype.dibujar = function(ctx) {
  throw "Metodo abstracto";
};
Figura.prototype.obtenerTipo = function() {
  return "Figura";
};