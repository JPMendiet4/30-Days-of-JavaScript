// Arrays

let my_array = [1, 2, 3, 4, 5];
console.log(my_array);

let mixed_data = [1, 'Bob', 'Now is', 5, true];
console.log(mixed_data);

let countries = ['Finland', 'Sweden', 'Norway'];
console.log(countries);

// Añadir elementos a un array
countries.push('Denmark');

// Eliminar el último elemento de un array
countries.pop();

// metodo map permite recorrer un array y modificar sus elementos
const numbers = [1, 2, 3, 4, 5];
const squareNumbers = numbers.map(function (number) {
    return number * number;
});

console.log(squareNumbers);

// metodo reduce permite recorrer un array y devolver un solo valor
const suma = numeros.reduce(function(acumulador, numero) {
    return acumulador + numero;
  }, 0);
  console.log(suma);
