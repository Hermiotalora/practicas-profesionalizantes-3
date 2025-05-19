class ProductoImpresora {
  constructor(nombre, marca, modelo, precio, stock, descripcion) {
    this.nombre = nombre;
    this.marca = marca;
    this.modelo = modelo;
    this.precio = precio;
    this.stock = stock;
    this.descripcion = descripcion;
  }

  mostrarDetalle() {
    return (
      this.nombre + " - " + this.marca + " " + this.modelo + "\n" +
      "Precio: $" + this.precio + "\n" +
      "Stock: " + this.stock + " unidades\n" +
      this.descripcion
    );
  }

  actualizarStock(cantidad) {
    this.stock += cantidad;
    if (this.stock < 0) this.stock = 0;
  }
}

const producto = new ProductoImpresora(
  "Impresora Laser Monocromatica",
  "Brother",
  "HL-1210W",
  65999,
  10,
  "Ideal para oficinas que imprimen en blanco y negro con alta eficiencia."
);

function verDetalles() {
  document.getElementById("producto").innerText = producto.mostrarDetalle();
}

function actualizarStock(cantidad) {
  producto.actualizarStock(cantidad);
  verDetalles();
}

verDetalles();
