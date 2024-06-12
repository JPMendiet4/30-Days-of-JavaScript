# Día 3

En el día dos trabajamos todo lo que son los condicionales y los cilos Python. En este caso voy a resumir un poco del contenido aqui: 

## Condicionales 

Los condicionales se encargan de decirle al leguaje que pasa si se cumple una condición u otra, en este caso hablaremos del `if`

### if

Este condicional le dice al la maquina si se cumple la condición haga esto, sino esto otro, veamos como declarar un `if` en Python

```javascript
if (condicion) {
    // codigo si se cumpel la condicion
} else {
    // codigo si no se cumople la condicion
}
```

Si bien es util el tener palabras reservadas como `if` y `else` para hacer validaciones a estas se les agrega una tercera que expande la posibilidad de más de dos comparaciones

```javascript
if (condicion1) {
    // codigo si se cumple la condicion1
} else if (condicion2) {
    // codigo si se cumple la condicion2
} else {
    // codigo si no se cumple ninguna condicion
}
```

## Switch

El `switch` se encarga de evaluar una variable y dependiendo del valor que tenga esta hacer algo, su comportamiento es un poco parecido al `if` salvo que con `switch` no se recorren todas las opciones sino que simplemente se ejecuta el caso que corresponda segun el valor de la variable, y si este valor no esta se entra al caso por *default*

```javascript
switch (variable) {
    case valor1:
        // codigo que se ejecuta si variable = valor1;
        break
    case valor2:
        // codigo que se ejecuta si variable = valor2;
        break
    case valor3:
        // codigo que se ejecuta si variable = valor3;
        break
    default:
        // codigo que se ejecuta si variable es diferente a todas las opciones contempladas
}
```

Ademas de funcionar segun  el valor de una variable tambien se pueden hacer comparaciones para crear un caso (`case variable > 2:`)

## Ciclos

Los ciclos son estrcuturas que se encargan de hacer una tarea repetitiva meintras se cumpla una condición

### For

El ciclo `for` le indica a la maquina que para un elemento dentro de otro que se pueda recorrer como una lista, un rango o un string haga una accion

```javascript
for (inicialización; condición; actualización) {
  // código a ejecutar
}
```

#### for in

Los for in son una variación del clasico `for` y se usa para recorrer las propiedades de un objeto

```javascript
const user = {
	name: "Pepito",
  age: 20,
  role: "JavaScript developer"
}

for (const prop in user) {
	console.log(user[prop])
}

// "Pepito"
// 20
// "JavaScript developer"
}
```

#### for of

Se utiliza para recorrer los elementos de una colección como un array por ejemplo

```javascript
const technologies = ["js", "html", "node", "php"]

for (const element of technologies) {
  console.log(element)
}

// "js"
// "html"
// "node"
// "php"
```

### While

El ciclo `while` le indica a la maquina que mientras algo se cumpla puede haga una tarea

```javascript 
while (condición) {
  // código a ejecutar
}
```

#### do-while

Existe una extensión del while en javascript llamado do-while que tiene una pequeña diferencia, el código dentro del ciclo se ejecutará al menos una vez antes de evaluar la condición.

```javascript
let i = 1;
do {
	console.log(i);
	i++;
	} while (i <= 10);
```


A  la hora de usar ciclos es importante estar atentos para no caer en bucles infinitos como puede sucerder con `while True` el cual siempre va a ser verdad por lo que nunca va a parar de ejecutarse el codigo

