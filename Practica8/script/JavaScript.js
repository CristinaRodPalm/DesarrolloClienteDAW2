var equipos = [];

// CREAMOS LOS EQUIPOS Y AÑADIMOS AL ARRAY
var equipo1 = new Equipo();
equipo1.nombre = "equipo1";     equipo1.victorias = 2;
equipo1.derrotas = 1;           equipo1.juego = "petanca";
equipos.push(equipo1);

// CREAMOS LOS JUGADORES
var jugador1 = new Jugador();
jugador1.nick = "jack";             jugador1.nombre = "javier";
jugador1.funcion = "delantero";     jugador1.puntos = 3;
var jugador2 = new Jugador();
jugador2.nick = "sparrow";          jugador2.nombre = "piratilla";
jugador2.funcion = "portero";       jugador2.puntos = 0;
var jugador3 = new Jugador();
jugador3.nick = "juan";                     jugador3.nombre = "cuesta";
jugador3.funcion = "lateral derecho";       jugador3.puntos = 7;
var jugador4 = new Jugador();
jugador4.nick = "manuela";                    jugador4.nombre = "carmena";
jugador4.funcion = "lateral izquierdo";       jugador4.puntos = 16;

console.log(jugador2.updatePlayer("piratilla", "portero", 55));

// Mostrar el equipo creado
document.write("<strong>Mostramos el equipo que hemos creado:</strong></br>");
document.write(equipo1.toString());
equipo1.addPlayer(jugador1);
equipo1.addPlayer(jugador2);
equipo1.addPlayer(jugador3);
equipo1.addPlayer(jugador4);

// MOSTRAR LA INFORMACIÓN DE TODOS LOS JUGADORES DE UN EQUIPO
document.write("</br></br><strong>Mostramos los jugadores del equipo:</strong>");
document.write(equipo1.toStringPlayers());

// MOSTRAR LA INFORMACIÓN DE UN JUGADOR POR NICK
document.write("</br></br><strong>Mostramos la información de un jugador de nick Jack:</strong>");
document.write(equipo1.getPlayer("jack"));

// MOSTRAR JUGADOR MÁXIMA PUNTUACIÓN
document.write("</br></br><strong>Mostramos la información del jugador con más puntos:</strong>");
document.write(equipo1.getPlayerMaxPuntos());

// EDITAR JUGADOR MÁXIMA PUNTUACIÓN Y COMPROBAR
document.write("</br></br><strong>Editamos la información del jugador con más puntos:</strong>");
equipo1.getPlayerMaxPuntos().updatePlayer("sparrowete", "portero", 59);
document.write(equipo1.getPlayerMaxPuntos());

function Equipo() {
    this.nombre;
    this.victorias;
    this.derrotas;
    this.juego;
    this.jugadores = [];

    this.addPlayer = function (jugador) {
        this.jugadores.push(jugador);
    }
    this.getPlayer = function(nick){
        for(var i = 0; i < this.jugadores.length; i++){
            if(this.jugadores[i].nick === nick){
                return this.jugadores[i];
            }
        }
    }
    this.delPlayer = function (nick) {
        for(var i = 0; i < this.jugadores.length; i++){
            if(this.jugadores[i].nick === nick){
                this.jugadores.splice(i, 1);
            }
        }
        return this.jugadores;
    }
    this.getPlayerMaxPuntos = function () {
        var max = Number.MIN_VALUE;
        var playMax;
        for(var i = 0; i < this.jugadores.length; i++){
            if(this.jugadores[i].puntos > max){
                max = this.jugadores[i].puntos;
                playMax = this.jugadores[i];
            }
        }
        return playMax;
        
    }
    this.toString = function(){
        return "Nombre: "+this.nombre +", victorias: "+this.victorias+
                ", derrotas: "+this.derrotas+", tipo de juego: "+this.juego;
    }
    this.toStringPlayers = function(){
        return this.jugadores.toString();
    }
}
function Jugador() {
    this.nick;
    this.nombre;
    this.funcion;
    this.puntos;

    this.updatePlayer = function (nombre, funcion, puntos) {
        if(this.nombre !== nombre) this.nombre = nombre;
        if(this.funcion !== funcion) this.funcion = funcion;
        if(this.puntos !== puntos) this.puntos = puntos;
        return this;
    }
    this.toString = function(){
        return "</br>Nick: "+this.nick +", nombre: "+this.nombre+
                ", función: "+this.funcion+", puntos: "+this.puntos;
    }
}