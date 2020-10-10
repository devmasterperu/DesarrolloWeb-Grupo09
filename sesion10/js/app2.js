/**
 * Tipos de Datos: Compuestos
 *  */

// Array - Las posiciones dentro de un arreglo inician en su posicion cero
var listadoAlumnos = [
    'Jose',
    'Marleni',
    'Brahan',
    'XXX',
    'XXXX',
    'XXXXX',
    'XXXXXX'
];

console.log(listadoAlumnos);
console.log(listadoAlumnos[0]); // Jose
console.log(listadoAlumnos[1]); // Marleni
console.log(listadoAlumnos[2]); // Brahan

// Objecto - { propiedad: valor }
var docente = {
    nombre: 'Jesús Alexander',
    apellido: 'Gonzales Manrique',
    edad: 29,
    hobby: 'Juegos en Linea',
    saludar: function() {
        console.log('Hola! Que tal?');
    }
}
console.log(docente);
console.log(docente.edad); // 'Jesús Alexander'
console.log(docente['hobby']); // 'Juegos en Linea'

// Funciones - Nueva forma de escribir una función "Arrow function"
function prueba() {
    console.log('Hey! Estoy ejecutandome desde la funcion prueba');
}
prueba();

function suma(a, b) {
    console.log(a + b);
}
suma(10, 5);

var nuevaFuncion = () => {
    console.log('Hey! Estoy ejecutandome desde un Arrow Function!');
}
nuevaFuncion();

var listadoAlumnos = [
    { 
        nombre: 'Jesús Alexander',
        apellido: 'Gonzales Manrique',
        curso: 'Desarrollo Web Frontend'
    },
    {
        nombre: 'Mathieu Joao',
        apellido: 'Gonzales Diaz',
        curso: 'Base de Datos con SQL Server'
    }
];
console.log(listadoAlumnos);
console.log(listadoAlumnos[1].curso);