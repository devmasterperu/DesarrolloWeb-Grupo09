$(document).ready(function(){

    console.log($('section')); // length: 0
    console.log($('header')); // lenght: 0
    console.log($('h1')); // length: 1

    console.log($('.parrafo')); // length: 1
    console.log($('a#link')) // length: 1
    console.log($('[href="#"]')); // length: 1

    console.log($('h1').html());
    $('h1').html('Es un valor asignado por jQuery');

    $('.parrafo').html('<em> Hey! Soy un nuevo valor asignado desde <span style="color: red">jQuery</span> </em>')
    $('.parrafo').before('<h2> Hola! desde el método before </h2>');
    $('.parrafo').after('<h2> Hola! desde el método after </h2>');

    $('div').append('<h3>Hey! desde el método append </h3>');
    $('div').prepend('<h3>Hey! desde el método prepend </h3>');
});