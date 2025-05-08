class Rociador {
    constructor(material = "plastico") {
        this.capacidadEnML = 750.0;
        this.porcentajeCarga = 0.0;
        this.sustancia = "";
        this.material = material;
        this.tapaPuesta = true;
    }

    rociar() {
        if (this.tapaPuesta) {
            alert("Destapa el rociador antes de usarlo");
            return;
        }
        if (this.porcentajeCarga <= 0) {
            alert("El rociador esta vacio");
        } else {
            this.porcentajeCarga -= 5;
            if (this.porcentajeCarga < 0) this.porcentajeCarga = 0;
            alert(`Rociaste un poco de ${this.sustancia}. Carga restante: ${this.porcentajeCarga.toFixed(1)}%`);
        }
    }

    cargar(sustancia, porcentaje) {
        if (porcentaje < 0 || porcentaje > 100) {
            alert("Porcentaje invalido. Debe estar entre 0 y 100.");
            return;
        }
        this.sustancia = sustancia;
        this.porcentajeCarga = porcentaje;
        alert(`Cargado con ${porcentaje}% de ${sustancia}.`);
    }

    vaciar() {
        this.porcentajeCarga = 0;
        this.sustancia = "";
        alert("El rociador fue vaciado.");
    }

    tapar() {
        this.tapaPuesta = true;
        alert("La tapa fue puesta.");
    }

    destapar() {
        this.tapaPuesta = false;
        alert("La tapa fue retirada. Listo para rociar ue");
    }
}
