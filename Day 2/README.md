# Día 2

## Operadores, hosting, coercion y scope

### Operadores

Los operadores son los elementos básicos para poder realizar operaiones con variables puesto que hay de varios tipos

#### Operadores aritemeticos





- Suma
```javascript
console.log(10 + 20); // 30
```


- Resta
```javascript
console.log(20 - 10); // 10
```

- Multiplicacion
```javascript
console.log(10 * 20); // 200
```

- Division
```javascript
console.log(20 / 10); // 2
```

- Modulo (reisiduo)
```javascript
console.log(10 % 3); // 1
```

#### Operadores de asignacion (asignación aumentada)

Los operadores de asignación o asignación aumentada son aquellos que permiten simplificar el codigo y hacerlo más corto pero con la misma funcionalidad

```javascript
let x = 10;
x += 5; // x = x + 5
console.log(x); // 15

x -= 5; // x = x - 5
console.log(x); // 10

x *= 5; // x = x * 5
console.log(x); // 50
```


#### Operadores de comparacion

Los operadores de comparacion son bastanet utiles ya que permiten realizar operaciones de comparacion entre variables 

```javascript
console.log(1 < 2); // true
console.log(2 > 1); // true
console.log(1 <= 2); // true
console.log(2 >= 1); // true
console.log(1 != 2); // true
```
*Entre estos se destacan `==` y `===`, el primero compara el valor de las variables y el segundo compara el valor y el tipo de las variables*

```javascript
console.log(1 == '1'); // true
console.log(1 === '1') // false
```

#### Operadores logicos

- AND
```javascript
let edad = 25;
let isAdult = edad > 18;

if (edad >= 18 && isAdult) {
    console.log('Eres mayor de edad')
} else {
    console.log('Aun no eres mayor de edad')
}
```

- OR
```javascript
let edad2 = 24; 
let tieneIdentificacion = edad2 > 18;

if (edad >= 18 || tieneIdentificacion) {
    console.log('Eres mayor de edad')
} else {
    console.log('Aun no eres mayor de edad')
}
```

- NOT
```javascript
let esFinDeSemana = true;

if (!esFinDeSemana) {
    console.log('No es fin de semana, a trabajar')
} else {
    console.log('Disfruta tu fin de semana')
}
```

## Hoisting y coercion

El Hoisting hace referencia al orden en como el navegador interepreta el código JavaScript 

```javascript
console.log(x);
var x = 5;

// Se interpreta de esta manera: 
var x;
console.log(x)
x = 5; // al inicio x es undefined pero luego se asigna el valor de 5
```
Por otro lado si bien es posible que se regrese el valor de una variable aunque se llame antes de ser inicializada si se llama una variable sin declarar generara un error ya que sera interpretada como indefinida

```javascript
console.log(x);
x = 5;
```


## Coercion

Por otro lado es la conversion forzada de tipos que hace JavaScript para poder hacer desarrollar su flujo de trabajo.

```javascript
console.log(1 == '1'); // true porque js convierte el string a numero
console.log(true == 1) // true, el true se convierte en 1
```

## Alcance de las variables 

El alcance de las variables hace referencia a los lugares donde existe una variable y donde no, es decir donde podemos acceder a su valor o no, en JavaScript existen dos tipos de alcance, el global que es donde yo puedo acceder a una variable desde cualquier lugar y el cocal que hace que solo pueda acceder a una variable en el bloque donde fue declarada

```javascript
var alcanceGlobal = 'Existo en todas partes'

function miFuncion(condicion) {
    let alcanceLocal1 = 'Solo existo aqui'
    const alcanceLocal2 = 'Solo existo aqui'
    var alcanceGlobal2 = 'Solo existo aqui'

    console.log(alcanceGlobal, alcanceLocal1, alcanceLocal2)
}
```