// Alcance de las variables

// Alcance global y alcance local

var alcanceGlobal = 'Existo en todas partes'

function miFuncion(condicion) {
    let alcanceLocal1 = 'Solo existo aqui'
    const alcanceLocal2 = 'Solo existo aqui'
    var alcanceGlobal2 = 'Solo existo aqui'

    console.log(alcanceGlobal, alcanceLocal1, alcanceLocal2)
}