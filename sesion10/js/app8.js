$(document).ready(function(){
    $('div').on('mouseenter', function(){
        $('p').css({
            // "opacity": "1"
            "display": "block"
        });
    });

    $('div').on('mouseleave', function(){
        $('p').css({
            "display": "none"
        });
    });
});