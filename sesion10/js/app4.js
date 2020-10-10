var cursos = [
    'Desarrollo Web Frontend',
    'Desarrollo Web Backend',
    'Base de Datos'
];

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

for (var index = 0; index < listadoAlumnos.length; index++) {
    console.log(listadoAlumnos[index].curso);
}

console.log(cursos.length);
for (var i = 0; i < cursos.length; i++) {
    console.log(cursos[i]);
}