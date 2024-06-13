# Día 4

En el día 4 trabajamos lo que son Arrays y Objetos en JavaScript, a continaución un resumen de lo que se vio:

## Array 

Los Arrays son estructuras de datos que permiten almacenar varios valores de diferentes tipos, veamos algunos ejemplos:

- Como declarar un Array:

```javascript
let my_array = [valor1, valor2, valor3, valor4, valor5];
```
- Añadir elementos a un array

```javascript
countries.push(valor6);
```

- Eliminar el último elemento de un array

```javascript
countries.pop();
```

- Metodo map, permite recorrer un array y modificar sus elementos

```javascript
const numbers = [1, 2, 3, 4, 5];
const squareNumbers = numbers.map(function (number) {
    return number * number;
});
```

- Metodo reduce permite recorrer un array y devolver un solo valor

```javascript
const suma = numeros.reduce(function(acumulador, numero) {
    return acumulador + numero;
  }, 0);
```

## Objetos

Los objetos son otra estructura de datos muy importante que permite almacenar valores siguiendo el patron clave valor, veamos algunas utilidades

- Como declarar un objeto:

```javascript
const miObjeto = {
	clave1: valor1, 
	clave2: valor2, 
	clave3: valor3
};
```

- Declarar un objeto con otro objeto como valor

```javascript
const curso = {
	nombre: "30 días de JS", 
	duración: "20 horas", 
	clases: 100,
	detalles: {
		tecnologias: ["js", "node", "web browser"],
		calificacion: 5,	
	},
	comentarios: ["¡Excelente curso!", "Javscript no es lo mismo que Java", "hola"]
};
```

- Acceder a las propiedades de un objeto

```javascript
curso.nombre; // "30 días de JS"
curso["nombre"]; // "30 días de JS"
```

- Un objeto con un método

```javascript
let carro = {
    marca: "Toyota",
    encender: function() {
      console.log("El carro ha sido encendido");
    }
  };
```

- Llamar al método del objeto

```javascript
  carro.encender(); // "El carro ha sido encendido"
```