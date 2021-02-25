$(function() {
    let inicio = $('#inicio').offset().top,
        servicio = $('#servicio').offset().top,
        proyecto = $('#proyecto').offset().top,
        cliente = $('#cliente').offset().top,
        contacto = $('#contacto').offset().top;
        info = $('#info').offset().top;

    window.addEventListener('resize', function(){
        let inicio = $('#einicio').offset().top,
        servicio = $('#servicio').offset().top,
        proyecto = $('#proyecto').offset().top,
        cliente = $('#cliente').offset().top,
        contacto = $('#contacto').offset().top;
    });

    $('#enlace_inicio').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        },600);
    });
    $('#enlace_servicio').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: servicio
        },600);
    });
    $('#enlace_proyecto').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: proyecto 
        },600);
    });
    $('#enlace_cliente').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: cliente 
        },600);
    });
    $('#enlace_contacto').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: contacto 
        },600);
    });

    $('#enlace_info').on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: info 
        },600);
    });
});