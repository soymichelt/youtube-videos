let mensaje = document.getElementById("mensaje");
let nombre = document.getElementById("nombre");
let btnSaludar = document.getElementById("btnSaludar");

btnSaludar.addEventListener("click", saludar);

function saludar (event) {
    mensaje = document.getElementById("mensaje2");
    event.preventDefault();
    let nombreUsuario = nombre.value;
    mensaje.innerHTML = `Hola, ${nombreUsuario}`;
}