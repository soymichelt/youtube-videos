const btnTemaOscuro = document.getElementById("btnTemaOscuro");
btnTemaOscuro.addEventListener("click", TemaOscuro);


function TemaOscuro(event) {
    const main = document.getElementById("contenido");
    main.classList.add("tema-oscuro");
}