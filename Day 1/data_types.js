// Tipos de datos en JavaScript

// Numbers (Números): Enteros o decimales todos son tratados de la misma manera
// Notacion calsica, .como separador de decimales
let edad = 25;
let precio = 12.5;
const c = 300000;

// Notacion cientifica
const numeroGrande = 1e6; // 1 millón
const numeroPequeño = 1e-6; // 0.000001

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Strings (Cadenas de texto): Son secuencias de caracteres que se utilizan para representar texto y pueden ser creadas usando ' y/o "".
const nombre = "Platzi";
const apellido = 'Academy';

// Concatenación de strings
const nombreCompleto = nombre + " " + apellido;

// Notación template literal para crear strings que incluyen variables y expresiones
const nombreCompleto2 = `${nombre} ${apellido}`;

/* 
Metodos para manejar strings:

  -  length: Devuelve la longitud de un string.
  -  toUpperCase(): Devuelve el string en mayúsculas.
  -  toLowerCase(): Devuelve el string en minúsculas.
  -  substring(): Devuelve una parte del string.
*/

const nombre = "Platzi";

console.log(nombre.length) // 6
console.log(nombre.toUpperCase()) // PLATZI
console.log(nombre.toLowerCase()) // platzi
console.log(nombre.substring(0, 5)) // Platz

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Objetcs (Objetos): Son estructuras de datos que permiten almacenar múltiples valores y métodos. Se definen utilizando llaves {} (JSON).
const persona = {
    nombre: "Fulanita",
    platziRank: 9567,
      cursoFavorito: {
          nombre: "Básico de JavaScript",
          clases: 30,
          duración: "2 horas"
      }
  };

 // Acceder a las propiedades de un objeto se puede hacer mediante notación de . o [].
 console.log(persona.nombre); // "Fulanita"
 console.log(persona.cursoFavorito.nombre); // "Básico de JavaScript"
 console.log(persona["platziRank"]); // 9567


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Boolean (Booleanos): Son un tipo de dato que puede tener uno de dos valores: true o false.
let cursoCompletado = true;
let lecturaCompletada = false;

// Saber el tipo de dato de una variable
typeof "#PlatziChallenge" // "string"
typeof 30 // number
typeof true // boolean
typeof {} // "object"

// 👀 con los arrays nos devuelve que son un objeto
// Más adelante descubriremos la razón
typeof [] // "object"

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* 
Boolean (Booleanos): Son un tipo de dato que puede tener uno de dos valores: true o false. A menudo, utilizamos null para representar un valor 
que aún no ha sido inicializado o para representar un valor que no tiene sentido en el contexto actual
*/
const nombre = null;
console.log(nombre); // imprime "null"

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* 
Undefined: Representa un valor que no ha sido definido. Si declaramos una variable y no le asignamos un valor, su valor será undefined.
*/
let nombre;
console.log(nombre); // imprime "undefined"

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* 
Diferencias entre Null y Undefined: Null es un valor que representa la ausencia de valor, mientras que Undefined es un tipo de dato que 
representa la ausencia de valor.
*/

// Ejemplo gatito sin dueño
let gatito = {
    nombre: "Michi",
    edad: 3,
    dueño: null
  };
  
  console.log(gatito.dueño); // "null", se usa null para indicar que no tiene dueño pero el valor existe

// Por otro lado, podríamos utilizar undefined para representar que un gato aún no ha sido adoptado:

let gato;
console.log(gato); // "undefined", su estilo es undefined porque no ha sido definido ningun valor para la variable gato 

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* 
Symbol: Los símbolos son un tipo de dato único en JavaScript que se utiliza para crear identificadores únicos. Cada vez que se crea un símbolo, 
se genera un nuevo identificador único, lo que lo hace ideal para usar como claves de objetos o para identificar elementos de manera única en 
una aplicación.
*/
const simbolo = Symbol();

let perrito = {
  nombre: "Firulais",
  edad: 3,
  [simbolo]: "Identificador único"
};

console.log(perrito[simbolo]); // "Identificador único"

// También puedes proporcionar una descripción opcional al crear un símbolo, lo que puede ser útil para depurar y mantener el código:

const simbolo = Symbol("Identificador único de gatitos");
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* 
BigInt: BigInt es un tipo de dato numérico que se utiliza para representar números enteros grandes. Se crean añadiendo la letra n al final de un 
número entero.
*/

const numeroGrande = 12345678901234567890n;

console.log(numeroGrande + 1n); // 12345678901234567891n
console.log(numeroGrande * 2n); // 2469135780246913578n
console.log(numeroGrande / 3n); // 411218936707805260n

/* 
Es importante tener en cuenta que los bigint solo pueden ser usados para operaciones matemáticas y no pueden ser usados con operadores de 
comparación, como == o ===. En su lugar, debes usar los métodos BigInt.asIntN y BigInt.asUintN para hacer comparaciones entre bigint y 
números normales.

También es importante tener en cuenta que los bigInt no son compatibles con todas las funciones y métodos de JavaScript que aceptan 
números, por lo que debes asegurarte de verificar la documentación de la función o método que quieres usar antes de intentar usar bigInt 
con ellos.
*/