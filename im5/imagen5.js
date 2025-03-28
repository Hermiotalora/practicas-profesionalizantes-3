const autosVendidos = {
    titulo: "Numero de autos vendidos",
    ejeX: "Mes",
    ejeY: "Cantidad de autos",
    datos: [
        { mes: "Enero", cantidad: 400 },
        { mes: "Febrero", cantidad: 200 },
        { mes: "Marzo", cantidad: 300 },
        { mes: "Abril", cantidad: 600 }
    ]
};

document.getElementById("titulo").innerText = autosVendidos.titulo;
document.getElementById("ejeX").innerText = autosVendidos.ejeX;
document.getElementById("ejeY").innerText = autosVendidos.ejeY;

const tablaDatos = document.getElementById("tabla-datos");
autosVendidos.datos.forEach(dato => {
    let fila = `<tr><td>${dato.mes}</td><td>${dato.cantidad}</td></tr>`;
    tablaDatos.innerHTML += fila;
});

const chart = document.getElementById("chart");

autosVendidos.datos.forEach(dato => {
    const bar = document.createElement("div");
    bar.classList.add("bar");
    bar.style.height = (dato.cantidad / 6) + "%"; 
    bar.textContent = `${dato.mes} (${dato.cantidad})`;
    chart.appendChild(bar);
});
