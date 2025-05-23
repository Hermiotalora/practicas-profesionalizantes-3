class Auto {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = 0;
    this.velocidad = 2;
  }

  avanzar() {
    this.x += Math.cos(this.angle) * this.velocidad;
    this.y += Math.sin(this.angle) * this.velocidad;
  }

  retroceder() {
    this.x -= Math.cos(this.angle) * this.velocidad;
    this.y -= Math.sin(this.angle) * this.velocidad;
  }

  girarHorario() {
    this.angle += 0.05;
  }

  girarAntihorario() {
    this.angle -= 0.05;
  }

  dibujar(ctx) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.rotate(this.angle);
    ctx.fillStyle = "blue";
    ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);
    ctx.restore();
  }
}
