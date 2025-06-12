function Rectangulo(nombre, x, y, ancho, alto, color) {
  Figura.call(this, nombre, x, y, color);
  this.ancho = ancho;
  this.alto = alto;
}
Rectangulo.prototype = Object.create(Figura.prototype);
Rectangulo.prototype.constructor = Rectangulo;

Rectangulo.prototype.dibujar = function(ctx) {
  ctx.fillStyle = this.color;
  ctx.fillRect(this.x, this.y, this.ancho, this.alto);
};
Rectangulo.prototype.obtenerTipo = function() {
  return "Rectangulo";
};