var controlador;

window.onload = function() {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  controlador = new Controlador(ctx);

  document.getElementById("btnRect").addEventListener("click", function() {
    crearFigura("rectangulo");
  });
  document.getElementById("btnCirc").addEventListener("click", function() {
    crearFigura("circulo");
  });
  document.getElementById("btnTri").addEventListener("click", function() {
    crearFigura("triangulo");
  });
  document.getElementById("btnDel").addEventListener("click", eliminarFiguraActiva);

  document.addEventListener("keydown", function(e) {
    var movimientos = {
      ArrowUp: [0, -10],
      ArrowDown: [0, 10],
      ArrowLeft: [-10, 0],
      ArrowRight: [10, 0]
    };
    if (movimientos[e.key]) {
      controlador.moverFiguraActiva(movimientos[e.key][0], movimientos[e.key][1]);
    }
  });
};

function crearFigura(tipo) {
  var nombre = prompt("ID unico de la figura:");
  var x = parseInt(prompt("Posicion X:"));
  var y = parseInt(prompt("Posicion Y:"));
  var color = document.getElementById("colorPicker").value;
  var figura = null;

  if (tipo === "rectangulo") {
    var ancho = parseInt(prompt("Ancho:"));
    var alto = parseInt(prompt("Alto:"));
    figura = new Rectangulo(nombre, x, y, ancho, alto, color);
  } else if (tipo === "circulo") {
    var radio = parseInt(prompt("Radio:"));
    figura = new Circulo(nombre, x, y, radio, color);
  } else if (tipo === "triangulo") {
    var lado = parseInt(prompt("Lado del triangulo:"));
    figura = new Triangulo(nombre, x, y, lado, color);
  }

  if (figura) controlador.agregar(figura);
}

function eliminarFiguraActiva() {
  if (!controlador.activa) {
    alert("No hay figura seleccionada.");
    return;
  }
  controlador.eliminarPorNombre(controlador.activa.nombre);
}