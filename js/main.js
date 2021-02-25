//VARIABLES
let nav = document.getElementById('nav');
let menu = document.getElementById('enlaces');

//FUNCION PARA CAMBIAR DE FORMA EL NAV-MENU
function menus() {
    let desplazamiento_actual = window.pageYOffset;

    if(desplazamiento_actual <= 600) {
        nav.classList.remove('nav2');
        nav.className = ('nav_hero');
    } else {
        nav.classList.remove('nav_hero');
        nav.className = ('nav2');
    }
}

window.addEventListener('scroll', function() {
    console.log(window.pageYOffset);
    menus();
});