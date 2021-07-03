const API_URL = 'https://rickandmortyapi.com/api/character/';

function descargarPersonajes(nombreABuscar) {
    const url = !nombreABuscar
                    ? API_URL
                    : `${API_URL}?name=${nombreABuscar}`;
    
    fetch(url)
    .then( (res) => res.json() )
    .then( (datos) => {
        renderizarPersonajes(datos.results);
    } )
    .catch( (error) => console.log(error) );
}

function renderizarPersonajes(listado) {
    let personajesHTML = '';
    if(listado && listado.length > 0) {
        for(let i = 0; i < listado.length; i++) {
            personajesHTML = `
                ${personajesHTML}
                <article class="item">
                    <img src="${listado[i].image}" alt="${listado[i].name}" />
                </article>
            `;
        }
    }
    const articulosNodo = document.getElementById('articulos');
    articulosNodo.innerHTML = personajesHTML;
}

descargarPersonajes();

function buscar(event) {
    if(event.keyCode === 13) {
        const textoABuscar = event.target.value;
        descargarPersonajes(textoABuscar);
    }
}

const buscadorNodo = document.getElementById('buscadorInput');
buscadorNodo.addEventListener('keyup', buscar);