//Declaración y ejecución
function nombreDeLaFuncion(parametros) {
    //Aquí va la lógica de la función
    return resultado
}

nombreDeLaFuncion(argumentos);

//Parámetros y argumentos -> No hay diferencia teórica

//Hoisting -> Es cambiar el orden de las funciones pero no importa porque al leerlas se "reordenan"


//Tipos de funciones


    //Anonymous function
    const anon = function (parametro) {
        return 'Soy anónima bebé'
    }
    anon();

    //Function expression
    function nonAnon(parametros) {
        //Aquí va la lógica de la función
        return resultado
    }

    nonAnon();

    // Arrow function ES6
    const por2 = parametro => parametro * 2

    const por3 = numero => {
        return numero * 3
    }

    //IIFE - Immediately Invoked Function Expression
    (function () {
        console.log('Hola bebé')
    }) ();


// Métodos
console.log

'hola'.replace('h','')

//Callbacks
.array.forEach(element => {
    console.log(element)
});


const mostrar = element => {
    console.log(element);
}
array.forEach(mostrar);
