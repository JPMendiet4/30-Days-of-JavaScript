// Variables 

/*
En JavaScript, existen tres formas de declarar una variable: var, let y const. Las variables declaradas con cosnt no pueden ser modificadas,
 mientras que las variables declaradas con var y let pueden ser modificadas.
*/

// Ejemplo de declaración e inicialización de variables
var edad = 24;
let hora = 10;
const nombre = "Juan";

// Declaracion de variables sin inicializar (No se puede hacer con const)
var hijos;
let mascotas;

// Inicialización de variables declaradas previamente
hijos = 0;
mascotas = 10;

// Declaracion e inicializacion
const name = "Platzi"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* Funciones: para declarar una función en JavaScript, se utiliza la palabra reservada function seguida del nombre de la función y los
parámetros que recibe. */

function miFuncion(parametro1, parametro2) {
    // Código de la función
  }

// Llamar una funcion:
miFuncion(valor1, valor2);

// LaS funciones pueden retornar valores usanado la palabra reservada return, tambien se puede asiganr a una variable e imprimir
function suma(a, b) {
    return a + b;
}

let resultado = suma(2, 3);
console.log(resultado); // Imprime 5

/*
Lo anterior es conocido como funcion declarativa tambien existen otras tres formas de declarar funciones en JavaScript: 
 */

/* 
IIFE (Immediately Invoked Function Expression): una función que se autoejecuta inmediatamente después de ser definida. Esta función es anónima
y no se puede reutilizar.
*/
(function () {
    console.log("Soy una IIFE");
  })();

/* 
Función expresión: una función que se define como una expresión y puede ser asignada a una variable. Esta función también puede ser llamada y 
reutilizada.
*/

let saluda = function () {
    console.log("Hola");
  };
  
  saluda();

/* 
Arrow function: una función que se define utilizando la sintaxis () =>. Esta función es una forma más concisa de escribir funciones y es útil 
para funciones de una sola línea.
*/

let saluda = () => console.log("Hola");

saluda();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Sintaxis basica 

// Punto y coma: su uso es opcional en JavaScript, pero se recomienda utilizarlo para evitar errores.
// Un código así 👇

const saludo = "Hola"
const nombre = "Platzi"
const saludoCompleto = saludo + " " + nombre
console.log(saludoCompleto) // "Hola Platzi"

//Hace exactamente lo mismo que el siguiente 👇

const saludo = "Hola";
const nombre = "Platzi";
const saludoCompleto = saludo + " " + nombre;
console.log(saludoCompleto); // "Hola Platzi"


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Corchetes o llaves: se utilizan para agrupar bloques de código y definir objetos y arreglos en JavaScript.

const carro = {
    color: "rojo",
    llantas: 4,
    marca: "Audi"
  }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////