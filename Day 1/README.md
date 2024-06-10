# Día 1

## Variables, funciones y sintaxis básica

### Variables
La estructura básica de un leguaje de programación es el uso de variables y la logica, en este caso vamos a ir avanzando progresivamente partiendo desde las variables y las formas de declararalas usando las palabras reservadas `var`, `let` y `const`:

- Declaracion e inicialización 

```javascript
var edad = 24;
let hora = 12;
const nombre = 'Juan';
```

- Declaración de variables sin inicialización (no se puede hacer con ```const```)

```javascript
var hijos;
let mascotas;
```

- Inicialización de de varaibles declaradas previamente 
    
```javascript
hijos = 0;
mascotas = 10;
```

### Funciones

Al igual que en muchos otros lenguajes de programación las funciones son un bloque de código encargado de realizar una tarea y/o retornar un valor

- Declaración de una función

```javascript
function miFuncion(parametro1, parametro2) {
    //Código de la función
}
```

- Llamar una función 

```javascript 
miFuncion(valor1, valor2)
```

- Retornar un valor desde una función, asignarlo a una variable e imprimirlo 

```javascript
function suma(a, b) {
    return a + b;
}

let resultado = suma(2, 3);
console.log(resultado); // Imprime 5
```

La función anterior fue escrita siguiendo el metodo conocido como funcion declarativa tambien existen otras tres formas de declarar funciones en JavaScript: 

- IIFE (Immediately Invoked Function Expression): una función que se autoejecuta inmediatamente después de ser definida. Esta función es anónima y no se puede reutilizar.

```javascript 
(function() {
    console.log('Soy una IIFE')
})();
```

- Función expresión: una función que se define como una expresión y puede ser asignada a una variable. Esta función también puede ser llamada y reutilizada.

```javascript 
let saluda = function() {
    concole.log('Hola');
}

saluda();
```

- Arrow function: una función que se define utilizando la sintaxis () =>. Esta función es una forma más concisa de escribir funciones y es útil  para funciones de una sola línea.

```javascript
let saluda = () => console.log('Hola');

saluda();
```

### Sintaxis básica

En esta sección vamos a hablar sobre el uso del `;` que aunque no siempre es necesario es recomendable usarlo para evitar errores.

- Un código así 👇

```javascript
const saludo = "Hola"
const nombre = "Platzi"
const saludoCompleto = saludo + " " + nombre
console.log(saludoCompleto) // "Hola Platzi"
```
- Hace exactamente lo mismo que el siguiente 👇

```javascript 
const saludo = "Hola";
const nombre = "Platzi";
const saludoCompleto = saludo + " " + nombre;
console.log(saludoCompleto); // "Hola Platzi"
```

Por otro lado tenemos tenemos el uso de llaves o corchetes `{}` las cuales se utilizan para agrupar bloques de código y definir objetos y arreglos en JavaScript

```javascript
const carro = {
    color: "rojo",
    llantas: 4,
    marca: "Audi"
  }
```


## Tipos de datos en JavaScript

### Numbers

- Los numbers es el conjutno de todos los numeros, este tipo de dato no discrimina entre numeros enteros y decimales, los trata por igual así que acepta la notacion clasica y el . como separador decimal e inclusive acepta notación cientifica

```javascript
let edad = 24;
let precio = 12.5;
const c = 300000;

const numeroGrande = 1e6; // 1 millón
const numeroPequeño = 1e-6; // 0.000001
```

### Strings

Los strings son las cadenas de texto que se pueden declarar usando ' o " y todo lo que este dentro de estas sera interpretado como un texto 

```javascript
const nombre = 'Platzi';
const apellido = "Academy";
```

- Concatenación de strings

```javascript
const nombreCompleto = nombre + ' ' + apellido
```

- Notación template literal para crear strings que incluyen variables y expresiones

```javascript
const nombre = `${nombre} ${apellido}`;
```

#### Metodos para manejar strings:

  -  length: Devuelve la longitud de un string.
  -  toUpperCase(): Devuelve el string en mayúsculas.
  -  toLowerCase(): Devuelve el string en minúsculas.
  -  substring(): Devuelve una parte del string.

```javascript
const nombre = "Platzi";

console.log(nombre.length) // 6
console.log(nombre.toUpperCase()) // PLATZI
console.log(nombre.toLowerCase()) // platzi
console.log(nombre.substring(0, 5)) // Platz
```

### Objects

En el caso de JavaScript los objetos lo que en el desarrollo se conoce como JSON y son bastante utiles para almacenar informacion usando su estructura de clave : valor dentro de {}

```javascript
const persona = {
    nombre: "Fulanita",
    platziRank: 9567,
      cursoFavorito: {
          nombre: "Básico de JavaScript",
          clases: 30,
          duración: "2 horas"
      }
  };
  ```

- Para acceder a las propiedades de un objetode JavaScript se puede usar la sintaxis de `.` o `[]`

```javascript
console.log(persona.nombre); // "Fulanita"
 console.log(persona.cursoFavorito.nombre); // "Básico de JavaScript"
 console.log(persona["platziRank"]); // 9567
 ```

### Booleanos

Este tipo de dato al igual que en los demas solo acepta dos opciones, `true` y `false` 

```javascript
let cursoCompletado = true;
let lecturaCompletada = false;
```

En caso de que olvidemso cual es el tipo de una variable con la que estemos trabajando podemso usar la funcion `typeof`

```javascript
typeof "#PlatziChallenge" // "string"
typeof 30 // number
typeof true // boolean
typeof {} // "object"
typeof [] // "object"
```

👀 con los arrays nos devuelve que son un objeto, más adelante descubriremos la razón

### Null 

A menudo, utilizamos null para representar un valor que aún no ha sido inicializado o para representar un valor que no tiene sentido en el contexto actual

```javascript
const nombre = null;
console.log(nombre); // imprime "null"
```

### Undefined

Undefined representa un valor que no ha sido definido. Si declaramos una variable y no le asignamos un valor, su valor será undefined.

```javascript
let nombre;
console.log(nombre); // imprime "undefined"
```

### Diferencias entre Null y Undefined:

Null es un valor que representa la ausencia de valor, mientras que Undefined es un tipo de dato que representa la ausencia de valor.

- Ejemplo gatito sin dueño

```javascript
let gatito = {
    nombre: "Michi",
    edad: 3,
    dueño: null
  };

  console.log(gatito.dueño); // "null", se usa null para indicar que no tiene dueño pero el valor existe
  ```

- Por otro lado, podríamos utilizar undefined para representar que un gato aún no ha sido adoptado:

```javascript
let gato;
console.log(gato); // "undefined", su estilo es undefined porque no ha sido definido ningun valor para la variable gato 
```

### Symbol 

Los símbolos son un tipo de dato único en JavaScript que se utiliza para crear identificadores únicos. Cada vez que se crea un símbolo, se genera un nuevo identificador único, lo que lo hace ideal para usar como claves de objetos o para identificar elementos de manera única en  una aplicación.

```javascript
const simbolo = Symbol();

let perrito = {
  nombre: "Firulais",
  edad: 3,
  [simbolo]: "Identificador único"
};

console.log(perrito[simbolo]); // "Identificador único"
```

También puedes proporcionar una descripción opcional al crear un símbolo, lo que puede ser útil para depurar y mantener el código:

```javascript
const simbolo = Symbol("Identificador único de gatitos");
```

### BigInt

BigInt es un tipo de dato numérico que se utiliza para representar números enteros grandes. Se crean añadiendo la letra n al final de un número entero.

```javascript
const numeroGrande = 12345678901234567890n;

console.log(numeroGrande + 1n); // 12345678901234567891n
console.log(numeroGrande * 2n); // 2469135780246913578n
console.log(numeroGrande / 3n); // 411218936707805260n
```

Es importante tener en cuenta que los bigint solo pueden ser usados para operaciones matemáticas y no pueden ser usados con operadores de comparación, como `==` o `===`. En su lugar, debes usar los métodos `BigInt.asIntN` y `BigInt.asUintN` para hacer comparaciones entre bigint y números normales.

También es importante tener en cuenta que los bigInt no son compatibles con todas las funciones y métodos de JavaScript que aceptan números, por lo que debes asegurarte de verificar la documentación de la función o método que quieres usar antes de intentar usar bigInt con ellos.