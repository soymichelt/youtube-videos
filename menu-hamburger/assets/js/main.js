function openMenu() {
    const menu = document.getElementById('menu');
    menu.classList.add('is-active');
}

function closeMenu() {
    const menu = document.getElementById('menu');
    menu.classList.remove('is-active');
}

const elementosAbrirMenu = document.getElementsByClassName("open-menu");
if(elementosAbrirMenu) {
    for(let i = 0; i < elementosAbrirMenu.length; i++) {
        elementosAbrirMenu[i].addEventListener('click', openMenu);
    }
}

const elementosCerrarMenu = document.getElementsByClassName("close-menu");
if(elementosCerrarMenu) {
    for(let j = 0; j < elementosCerrarMenu.length; j++) {
        elementosCerrarMenu[j].addEventListener('click', closeMenu);
    }
}