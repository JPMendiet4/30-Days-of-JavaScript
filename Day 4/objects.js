// Objetos

// Sintaixis de objeto
const miObjeto = {
	clave1: valor1, 
	clave2: valor2, 
	clave3: valor3
};
// Un objeto con otro objeto como valor
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


// Acceder a las propiedades de un objeto
console.log(curso.nombre); // "30 días de JS"
console.log(curso["nombre"]); // "30 días de JS"


// Un objeto con un método
let carro = {
    marca: "Toyota",
    encender: function() {
      console.log("El carro ha sido encendido");
    }
  };

  // Llamar al método del objeto
  carro.encender(); // "El carro ha sido encendido"
