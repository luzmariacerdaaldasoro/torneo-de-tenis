function Jugador(id, nombre, apellidos, categoría, rama, puntosRanking) {
    this.id = id;
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.categoría = categoría;
    this.rama = rama;
    this.puntosRanking = puntosRanking;

}
let id = 0;
let jugadores = [];
function crearJugador() {
    id++;
    let jugadorId = id;
    let jugadorNombre = prompt('Nombre del jugador');
    while(!isNaN(jugadorNombre) || !jugadorNombre) {
        jugadorNombre=prompt('Ingresa un nombre válido')
    }
    let jugadorApellido = prompt('Apellidos del Jugador');
    while(!isNaN(jugadorApellido) || !jugadorApellido) {
        jugadorApellido=prompt('Ingresa un apellido válido')
    }
    let jugadorCategoria = prompt('Categorías: A,B,C,D o Novatos');
    while (jugadorCategoria !='A' && jugadorCategoria !='B'&& jugadorCategoria !='C' && jugadorCategoria !='D' && jugadorCategoria!='Novatos') {
        jugadorCategoria = prompt('Ingresa una categoría válida: A,B,C,D o Novatos')
    }
    let jugadorRama = prompt('Rama V o F');
    while( jugadorRama !='V' & jugadorRama!='F') {
        jugadorRama=prompt('Ingresa una rama válida V o F')
    }
    let jugadorPuntosRanking = prompt('Puntos Ranking');
    while(isNaN(jugadorPuntosRanking)) {
        jugadorPuntosRanking = prompt('Ingresa correctamente los puntos de ranking')
    }

    let jugador = new Jugador(jugadorId, jugadorNombre, jugadorApellido, jugadorCategoria, jugadorRama, jugadorPuntosRanking)
    console.log(jugador);
    return jugador;
}

let seguirAgregando = prompt('¿Deseas agregar un jugador? S / N')
while(seguirAgregando === 'S'){
    jugadores.push(crearJugador())
    seguirAgregando = prompt('¿Deseas agregar otro jugador? S / N')
}

console.log('Lista de jugadores: \n ', jugadores)




const CategoriaAV = jugadores.filter(jugadorCategoria == "A" & jugadorRama == 'V');
    /* return {
       id : jugadorId,
       nombre: jugadorNombre,
       apellido: jugadorApellido,
       rama: jugadorRama,
       puntosRanking : jugadorPuntosRanking,
    } */


    console.log ('Lista de jugadores categoría' (jugadorCategoria) (jugadorRama) \n + (CategoriaAV));

