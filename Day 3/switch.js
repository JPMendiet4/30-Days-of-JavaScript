// Switch

const dia = 'martes'

switch (dia) {
    case 'lunes':
        console.log('Lunes');
        break
    case 'martes':
        console.log('Martes');
        break
    case 'miercoles':
        console.log('Miercoles');
        break
    default: 
    console.log('Los demas dias');
}

// Un caso mas complejo: 
let numero = "12";
switch (true) {
  case numero > 100:
    console.log("El valor es mayor a 100");
    break;
  case numero % 2 === 0:
    console.log("El valor es multiplo de 2");
    break;
  default:
    console.log("El valor no cumple con ninguna de las características");
}