$(document).ready(function(){
    $('div').on('mouseenter', function(){
        $('p').show(500);
    });

    $('div').on('mouseleave', function(){
        $('p').hide(1000);
    });
});