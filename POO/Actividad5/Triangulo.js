function Triangulo(nombre, x, y, lado, color) {
  Figura.call(this, nombre, x, y, color);
  this.lado = lado;
}
Triangulo.prototype = Object.create(Figura.prototype);
Triangulo.prototype.constructor = Triangulo;

Triangulo.prototype.dibujar = function(ctx) {
  var altura = Math.sqrt(3) / 2 * this.lado;
  ctx.beginPath();
  ctx.moveTo(this.x, this.y);
  ctx.lineTo(this.x + this.lado / 2, this.y + altura);
  ctx.lineTo(this.x - this.lado / 2, this.y + altura);
  ctx.closePath();
  ctx.fillStyle = this.color;
  ctx.fill();
};
Triangulo.prototype.obtenerTipo = function() {
  return "Triangulo";
};