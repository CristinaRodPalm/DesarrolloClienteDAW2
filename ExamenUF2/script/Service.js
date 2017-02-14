// Métodos
app.service('service', function () {

    this.equipos = [];
    
    function Campeonato(){
        this.ano;
        this.posicion;
    }

    function Equipo() {
        this.nombre;
        this.victorias;
        this.derrotas;
        this.juego;
        this.jugadores = [];
        this.campeonatos = [];
        
        this.firstLast = function(){
            var primerCampeonato = this.campeonatos[0];
            this.campeonatos.splice(0, 1);
            this.campeonatos.push(primerCampeonato);
        }
        
        this.addCampeonato = function(ano, victorias){
            var campeonato = new Campeonato;
            campeonato.ano = ano;
            campeonato.posicion = victorias;
            this.campeonatos.push(campeonato);
        }
        
        this.showCampeonato = function(){
            var div = "";
            for(var i = 0; i < this.campeonatos.length; i++){
                var ano = this.campeonatos[i].ano;
                var posicion = this.campeonatos[i].posicion;
                div += "Año: "+ano+", posicion: "+posicion+"<br/>";
            }
            return div;  
        }
        
        this.remCampeonato = function(){
            
        }

        this.addPlayer = function (jugador) {
            this.jugadores.push(jugador);
        }
        this.getPlayer = function (nick) {
            for (var i = 0; i < this.jugadores.length; i++) {
                if (this.jugadores[i].nick == nick) {
                    return this.jugadores[i];
                }
            }
        }
        this.delPlayer = function (nick) {
            for (var i = 0; i < this.jugadores.length; i++) {
                if (this.jugadores[i].nick === nick) {
                    this.jugadores.splice(i, 1);
                }
            }
            return this.jugadores;
        }
        this.getPlayerMaxPuntos = function () {
            var max = Number.MIN_VALUE;
            var playMax;
            for (var i = 0; i < this.jugadores.length; i++) {
                if (this.jugadores[i].puntos > max) {
                    max = this.jugadores[i].puntos;
                    playMax = this.jugadores[i];
                }
            }
            return playMax;

        }
        this.toString = function () {
            return "Nombre: " + this.nombre + ", victorias: " + this.victorias +
                    ", derrotas: " + this.derrotas + ", tipo de juego: " + this.juego;
        }
        this.toStringPlayers = function () {
            return this.jugadores.toString();
        }
    }
    function Jugador() {
        this.nick;
        this.nombre;
        this.funcion;
        this.puntos;
        this.minutosJugados;

        this.updatePlayer = function (nombre, funcion, puntos) {
            if (this.nombre !== nombre)
                this.nombre = nombre;
            if (this.funcion !== funcion)
                this.funcion = funcion;
            if (this.puntos !== puntos)
                this.puntos = puntos;
            return this;
        }
        this.toString = function () {
            return "</br>Nick: " + this.nick + ", nombre: " + this.nombre +
                    ", función: " + this.funcion + ", puntos: " + this.puntos;
        }
    }

this.crearEquipo = function(nombre, victorias, derrotas, juego){
    var aux = new Equipo();
    aux.nombre = nombre;
    aux.victorias = victorias;
    aux.derrotas = derrotas;
    aux.juego = juego;
    this.equipos.push(aux);
    return aux;
}

this.crearJugador = function(nick, nombre, funcion, puntos, minutos){
    var aux = new Jugador();
    aux.nick = nick;
    aux.nombre = nombre;
    aux.funcion = funcion;
    aux.puntos = puntos;
    aux.minutosJugados = minutos;
    return aux;
}

this.updateJugador = function (equipo, nick, nombre, funcion, puntos, minutos) {
    var aux = new Jugador();
    var pos;
    var equipo = this.equipos[equipo];
    for(var i = 0; i < equipo.jugadores.length; i++){
        if(equipo.jugadores[i].nick === nick){
            aux = equipo.jugadores[i];
            var pos = i;
        }
    }
    if(aux.nombre  !== nombre) aux.nombre = nombre;
    if(aux.funcion  !== funcion) aux.funcion = funcion;
    if(aux.puntos !== puntos) aux.puntos = puntos;
    if(aux.minutosJugados !== minutos) aux.minutosJugados = minutos;
}

this.crearJugadorEquipo = function(equipo, nick, nombre, funcion, puntos, minutos){
    var aux = new Jugador();
    aux.nick = nick;
    aux.nombre = nombre;
    aux.funcion = funcion;
    aux.puntos = puntos;
    aux.minutosJugados = minutos;
    this.equipos[equipo].jugadores.push(aux);
}


});



