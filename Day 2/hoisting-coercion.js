// Hoisting y coercion

// Hoisting
console.log(x);
var x = 5;

// Se interpreta de esta manera: 
var x;
console.log(x)
x = 5; // al inicio x es undefined pero luego se asigna el valor de 5

// Por otro lado esto genera un error ya que sera interpretada como indefinida
console.log(x);
x = 5;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Coercion
console.log(1 == '1'); // true porque js convierte el string a numero
console.log(true == 1) // true, el true se convierte en 1
