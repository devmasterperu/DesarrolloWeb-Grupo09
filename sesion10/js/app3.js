/**
 * Operadores
 */

 /**
  * Operadores de asignación: +=, -=, *=, /=
  * */
 var numero = 10;
//  numero = numero + 5;
//  console.log(numero);

 numero += 5;
 console.log(numero);

 numero -= 5;
 console.log(numero);

 numero *= 2;
 console.log(numero);

 numero /= 2;
 console.log(numero);

 /**
  * Operadores de Comparación: <, >, <=, >=, ==, ===, !=, !==
  */
  var cajita1 = 40;
  var cajita2 = 20;

  console.log(cajita1 < cajita2);
  console.log(cajita1 > cajita2);
  console.log(cajita1 <= cajita2);
  console.log(cajita1 >= cajita2);
  console.log(cajita1 == cajita2); // == valor
  console.log(cajita1 === cajita2); // valor y tipo
  console.log(cajita1 != cajita2);
  console.log(cajita1 !== cajita2);

/**
  * Operadores lógicos: && || !
  * &&: Quiere decir que las 2 condiciones deben cumplirse
  * ||: Al menos 1 condicion debe cumplirse
  * !: Invierto estado. True => false / false => true 
  * */
    // var usuario = prompt('Ingrese el usuario');
    // var estado = prompt('Ingrese el estado');
    // var codigo = prompt('Ingrese el código');

    // if( usuario == 'admin' && estado == 1 ) {
    //     console.log('Bienvenido administrador del sistema');
    // } else {
    //     console.log('Bienvenido Operario');
    // }

    // if( usuario == 'admin' || codigo == 15 ) {
    //     console.log('Bienvenido administrador del sistema');
    // } else {
    //     console.log('Bienvenido Operario');
    // }
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
    console.log(listadoAlumnos.length);

    if(listadoAlumnos.length) {
        console.log('Listando Registros...');
    } else {
        console.log('Registro Vacío');
    }

/**
  * Operadores de cadena
  * */  
    var cadena1 = 'Hola! que tal?';
    var cadena2 = ', como te llamas';

    console.log(cadena1 + cadena2);

/**
  * Operadores typeof
  * */
    console.log(typeof(true));