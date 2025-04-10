/*
-No usar atributos onclick en HTML.
-Asigna eventos por ID, lo cual permite mayor control y claridad.
-Es más fácil de leer, mantener y debugear.
*/

document.addEventListener("DOMContentLoaded", function () {
    const pantalla = document.getElementById("pantalla");

    function agregar(valor) {
        if (pantalla.value === "0" && valor !== ".") pantalla.value = "";
        pantalla.value += valor;
    }

    function calcular() {
        try {
            pantalla.value = eval(pantalla.value);
        } catch {
            pantalla.value = "Error";
        }
    }

    function borrar() {
        pantalla.value = "0";
    }

  
    document.getElementById("btn0").onclick = () => agregar("0");
    document.getElementById("btn1").onclick = () => agregar("1");
    document.getElementById("btn2").onclick = () => agregar("2");
    document.getElementById("btn3").onclick = () => agregar("3");
    document.getElementById("btn4").onclick = () => agregar("4");
    document.getElementById("btn5").onclick = () => agregar("5");
    document.getElementById("btn6").onclick = () => agregar("6");
    document.getElementById("btn7").onclick = () => agregar("7");
    document.getElementById("btn8").onclick = () => agregar("8");
    document.getElementById("btn9").onclick = () => agregar("9");

    document.getElementById("btnPunto").onclick = () => agregar(".");
    document.getElementById("btnSuma").onclick = () => agregar("+");
    document.getElementById("btnResta").onclick = () => agregar("-");
    document.getElementById("btnMultiplica").onclick = () => agregar("*");
    document.getElementById("btnDivide").onclick = () => agregar("/");

    document.getElementById("btnIgual").onclick = calcular;
    document.getElementById("btnBorrar").onclick = borrar;
});
