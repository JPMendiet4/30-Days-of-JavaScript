// Reasignación y redeclaración

let numero = 5;
numero = 10;

const numero = 5;
numero = 10; // Uncaught TypeError: invalid assignment to const

let numero = 5;
let numero = 10;

// Uncaught SyntaxError: redeclaration of let numero


var numero = 5;
var numero = 10;

// Esto funciona sin problema ✅