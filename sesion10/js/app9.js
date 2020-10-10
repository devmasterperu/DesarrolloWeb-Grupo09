$(document).ready(function(){
    $('#btnAgregar').on('click', function(){
        // Debemos agregar una clase
        $('.box').addClass('box-change');
    });

    $('#btnQuitar').on('click', function(){
        // Debemos quitar la clase
        $('.box').removeClass('box-change');
    });

    $('#btnInterruptor').on('click', function(){
        $('.box').toggleClass('box-change');
    })
});