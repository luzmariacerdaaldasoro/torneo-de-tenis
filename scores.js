class Jugador {
    /**
     * Crea una instancia de jugador con nombre definido.
     * @param {string} nombre Nombre del jugador.
     */
    constructor(nombre) {
      this.nombre = nombre;
    }
    
    setPuntajes(puntajes) {
      this.set1 = puntajes.set1;
      this.set2 = puntajes.set2;
      this.set3 = puntajes.set3;
    }
  }
  
  // Nombre del primer jugador.
  let nombreJugador1 = "";
  
  // Nombre del segundo jugador.
  let nombreJugador2 = "";
  
  // Pide el nombre del jugador1 hasta que introduce un caracter por lo menos.
  do {
      nombreJugador1 = prompt('Ingresa el nombre del primer jugador');
  } while (nombreJugador1 === "" || nombreJugador1 === null);
  
  // Crea una instancia de Jugador para el jugador1
  jugador1 = new Jugador(nombreJugador1);
  
  // Pide el nombre del jugador2 hasta que introduce un caracter por lo menos.
  do {
      nombreJugador2 = prompt('Ingresa el nombre del segundo jugador');
  } while (nombreJugador2 === "" || nombreJugador2 === null);
  
  // Crea una instancia de Jugador para el jugador2
  jugador2 = new Jugador(nombreJugador2);
  
  // Variables donde se guardaran los marcadores del jugador1
  const marcadorJugador1 = {
    set1: 0,
    set2: 0,
    set3: 0,
  }
  
  // Variables donde se guardaran los marcadores del jugador2
  const marcadorJugador2 = {
    set1: 0,
    set2: 0,
    set3: 0,
  }
  
  // Variable temporal para guardar la entrada del prompt.
  let puntajePrompt = null;
  
  // Variable temporal para convertir la entrada del prompt a int.
  let puntajeInt = 0;
  
  // Pide el marcador de los jugadores en tres sets. Ya es conocido de antemano cuántas veces voy a repetir el ciclo.
  for (let set = 1; set <= 3; set++) {
    do {
      puntajePrompt = prompt('Marcador de ' + jugador1.nombre + ' en el set ' + set);
      puntajeInt = parseInt(puntajePrompt);
    } while(isNaN(puntajeInt) || puntajePrompt === "" || puntajePrompt === null);
    
    switch(set) {
      case 1:
        marcadorJugador1.set1 = puntajeInt;
        break;
      case 2:
        marcadorJugador1.set2 = puntajeInt;
        break;
      case 3:
        marcadorJugador1.set3 = puntajeInt;
        break;
    }
    
    do {
      puntajePrompt = prompt('Marcador de ' + jugador2.nombre + ' en el set ' + set);
      puntajeInt = parseInt(puntajePrompt);
    } while(isNaN(puntajeInt) || puntajePrompt === "" || puntajePrompt === null);
    
    switch(set) {
      case 1:
        marcadorJugador2.set1 = puntajeInt;
        break;
      case 2:
        marcadorJugador2.set2 = puntajeInt;
        break;
      case 3:
        marcadorJugador2.set3 = puntajeInt;
        break;
    }
    
  }
  
  jugador1.setPuntajes(marcadorJugador1);
  
  jugador2.setPuntajes(marcadorJugador2);
  
  console.log('Marcadores de ' + jugador1.nombre + ':');
  console.log('Set 1: ' + jugador1.set1);
  console.log('Set 2: ' + jugador1.set2);
  console.log('Set 3: ' + jugador1.set3);
  
  console.log('Marcadores de ' + jugador2.nombre + ':');
  console.log('Set 1: ' + jugador2.set1);
  console.log('Set 2: ' + jugador2.set2);
  console.log('Set 3: ' + jugador2.set3);