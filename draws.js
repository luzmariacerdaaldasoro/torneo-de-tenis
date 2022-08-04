// Puntos del jugador 1
let pts1 = 0;
// Puntos del jugador 2
let pts2 = 0;

// Nombre del primer jugador.
let jugador1 = "";

// Nombre del segundo jugador.
let jugador2 = "";

// Pide el nombre del jugador1 hasta que introduce un caracter por lo menos.
while (jugador1 === "" || jugador1 == null) {
    jugador1 = prompt('Ingresa el nombre del primer jugador');
}

// Pide el nombre del jugador2 hasta que introduce un caracter por lo menos.
while (jugador2 === "" || jugador2 == null) {
    jugador2 = prompt('Ingresa el nombre del segundo jugador');
}

// Objeto jugadorx con juegos ganados en cada set 
function jugador (set1, set2, set3){
    this.set1 = set1;
    this.set2 = set2;
    this.set3 = set3;}


// Función para pedir marcadores de ambos jugadores
/* function ingresarMarcador (set1,set2,set3){ */
     jugador = parseInt(prompt(`Ingresa el marcador de `${jugador1} + ` de cada set seguido por comas`)); 
  

    let jugador2 = parseInt(prompt(`Ingresa el marcador de `${jugador2} + ` de cada set seguido por comas`));
}
    // Pedir los marcadores de cada set del jugador 1.
    ingresarMarcador () 
      // Pedir los marcadores de cada set del jugador 2.
    ingresarMarcador ()     


    if {
        jugador1.set1>jugador2.set1
        console.log (jugador1.set1+'/'+jugador2.set1)}
        else {
            console.log (jugador2.set1+'/'+jugador1.set1)    
        }
    if {
        jugador1.set2>jugador2.set2
        console.log (jugador1.set2+'/'+jugador2.set2)}
        else {
            console.log (jugador2.set2+'/'+jugador1.set2)
}

    if {
        jugador1.set3>jugador2.set3
        console.log (jugador1.set3+'/'+jugador2.set3)}
        else {
        console.log (jugador2.set3+'/'+jugador1.set3    )