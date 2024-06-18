try {
    //Código que podría generar un error
  } catch (error) {
    //Código que se ejecuta si ocurre un error
    console.log(error);
  }


  try {
    const num = 100;
    if (num > 50) {
      throw new Error("El número es mayor a 50");
    }
  } catch (error) {
    console.error(error.message);
  }


  let numero = 5;
debugger;
let resultado = numero / 2;