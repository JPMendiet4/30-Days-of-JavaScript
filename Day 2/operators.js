// Operadores


// Operadores ariotmeticos 

// Suma
console.log(10 + 20); // 30

// Resta
console.log(20 - 10); // 10

// Multiplicacion
console.log(10 * 20); // 200

// Division
console.log(20 / 10); // 2

// Modulo (reisiduo)
console.log(10 % 3); // 1

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Operadores de asignacion (asignación aumentada)

let x = 10;
x += 5; // x = x + 5
console.log(x); // 15

x -= 5; // x = x - 5
console.log(x); // 10

x *= 5; // x = x * 5
console.log(x); // 50

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Operadores de comparacion

console.log(1 < 2); // true
console.log(2 > 1); // true
console.log(1 <= 2); // true
console.log(2 >= 1); // true
console.log(1 != 2); // true

/* 
Entre estos se destacan == y ===, el primero compara el valor de las variables y el segundo compara el valor y el tipo de las variables
*/

console.log(1 == '1'); // true
console.log(1 === '1') // false

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Operadores logicos

// AND
let edad = 25;
let isAdult = edad > 18;

if (edad >= 18 && isAdult) {
    console.log('Eres mayor de edad')
} else {
    console.log('Aun no eres mayor de edad')
}

// OR
let edad2 = 24; 
let tieneIdentificacion = edad2 > 18;

if (edad >= 18 || tieneIdentificacion) {
    console.log('Eres mayor de edad')
} else {
    console.log('Aun no eres mayor de edad')
}

// NOT
let esFinDeSemana = true;

if (!esFinDeSemana) {
    console.log('No es fin de semana, a trabajar')
} else {
    console.log('Disfruta tu fin de semana')
}

