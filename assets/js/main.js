function agregarNuevo(event) {
    event.preventDefault();

    const nombreNodo = document.getElementById("nombre");
    const tareaNodo = document.getElementById("tarea");
    const listadoNodo = document.getElementById("todo");

    const itemId = Date.now();

    listadoNodo.innerHTML = `
        ${listadoNodo.innerHTML}
        <article id="todo-item-${itemId}" class="todo-item">
            <div class="todo-item-contenido">
                <h2>${nombreNodo.value}</h2>
                <p>
                    ${tareaNodo.value}
                </p>
            </div>
            <button id="btn-${itemId}" data-id="${itemId}" class="btn">
                ✔
            </button>
        </article>
    `;

    const btnTerminar = document.getElementById(`btn-${itemId}`);
    btnTerminar.addEventListener("click", terminarTarea);

    nombreNodo.value = '';
    tareaNodo.value = '';
    nombreNodo.focus();
}

function terminarTarea(event) {
    const btnTerminarNodo = event.target;
    const itemId = btnTerminarNodo.dataset.id;

    const todoItem = document.getElementById(`todo-item-${itemId}`);
    todoItem.classList.add("tarea-terminada");
}

const btnAgregar = document.getElementById("btnAgregar");
btnAgregar.addEventListener("click", agregarNuevo);

function agregarTema() {
    const bodyNode = document.body;
    bodyNode.classList.toggle("tema-oscuro");
}

const btnTema = document.getElementById("btnTema");
btnTema.addEventListener("click", agregarTema);