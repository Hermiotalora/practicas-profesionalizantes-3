document.addEventListener("DOMContentLoaded", function () {
    const pantalla = document.getElementById("pantalla");
    const botones = document.querySelectorAll(".btn-num, .btn-op");
    const botonIgual = document.querySelector(".btn-eq");
    const botonBorrar = document.querySelector(".vestimenta-boton-borrar");

    botones.forEach(boton => {
        boton.addEventListener("click", () => {
            if (pantalla.value === "0") pantalla.value = "";
            pantalla.value += boton.textContent;
        });
    });

    botonIgual.addEventListener("click", () => {
        try {
            pantalla.value = eval(pantalla.value);
        } catch {
            pantalla.value = "Error";
        }
    });

    botonBorrar.addEventListener("click", () => {
        pantalla.value = "0";
    });
});
