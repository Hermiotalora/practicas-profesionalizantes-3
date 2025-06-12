function Circulo(nombre, x, y, radio, color) {
  Figura.call(this, nombre, x, y, color);
  this.radio = radio;
}
Circulo.prototype = Object.create(Figura.prototype);
Circulo.prototype.constructor = Circulo;

Circulo.prototype.dibujar = function(ctx) {
  ctx.beginPath();
  ctx.arc(this.x, this.y, this.radio, 0, Math.PI * 2);
  ctx.fillStyle = this.color;
  ctx.fill();
};
Circulo.prototype.obtenerTipo = function() {
  return "Circulo";
};