$(document).ready(function () {
    $("#ejecutar").click(ejecutarExamen);
    $("#pedir").click(pedir);
});

var anoEliminar;

function pedir(){
    anoEliminar = prompt("Indica qué año quieres eliminar");
}


function ejecutarExamen() {
    var equipos = [];

// CREAMOS LOS EQUIPOS Y AÑADIMOS AL ARRAY
    var equipo1 = new Equipo();
    equipo1.nombre = "equipo1";
    equipo1.victorias = 2;
    equipo1.derrotas = 1;
    equipo1.juego = "petanca";
    equipos.push(equipo1);

// CREAMOS LOS JUGADORES
    var jugador1 = new Jugador();
    jugador1.nick = "jack";
    jugador1.nombre = "javier";
    jugador1.funcion = "delantero";
    jugador1.puntos = 3;
    var jugador2 = new Jugador();
    jugador2.nick = "sparrow";
    jugador2.nombre = "piratilla";
    jugador2.funcion = "portero";
    jugador2.puntos = 0;
    var jugador3 = new Jugador();
    jugador3.nick = "juan";
    jugador3.nombre = "cuesta";
    jugador3.funcion = "lateral derecho";
    jugador3.puntos = 7;
    var jugador4 = new Jugador();
    jugador4.nick = "manuela";
    jugador4.nombre = "carmena";
    jugador4.funcion = "lateral izquierdo";
    jugador4.puntos = 16;
    
// EXAMEN
// Añadir 4 campeonatos a un equipo
    equipos[0].addCampeonato("1992", "77");
    equipos[0].addCampeonato("1993", "2");
    equipos[0].addCampeonato("2016", "1");
    equipos[0].addCampeonato("2004", "5");
// Mostrar los campeonatos
    document.getElementById("infoCampeonatos").innerHTML = equipos[0].showCampeonato();
// Poner el primero como el último
    equipos[0].firstLast();
// Pedir un año y eliminar ese campeonato -> otro botón
    equipos[0].remCampeonato(anoEliminar);
// Mostramos los cambios
document.getElementById("infoCampeonatos").innerHTML = equipos[0].showCampeonato();


    function Campeonato() {
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

        this.firstLast = function () {
            var primerCampeonato = this.campeonatos[0];
            this.campeonatos.splice(0, 1);
            this.campeonatos.push(primerCampeonato);
        }

        this.addCampeonato = function (ano, victorias) {
            var campeonato = new Campeonato;
            campeonato.ano = ano;
            campeonato.posicion = victorias;
            this.campeonatos.push(campeonato);
        }

        this.showCampeonato = function () {
            var div = "";
            for (var i = 0; i < this.campeonatos.length; i++) {
                var ano = this.campeonatos[i].ano;
                //var posicion = this.campeonatos[i].posicion;
                div += "Año: " + ano + ", posicion: " + i + "</br> ";
            }
            return div;
        }

        this.remCampeonato = function (ano) {
            for (var i = 0; i < this.campeonatos.length; i++) {
                if (this.campeonatos[i].ano === ano) {
                    this.campeonatos.splice(i, 1);
                }
            }
        }

        this.addPlayer = function (jugador) {
            this.jugadores.push(jugador);
        }
        this.getPlayer = function (nick) {
            for (var i = 0; i < this.jugadores.length; i++) {
                if (this.jugadores[i].nick === nick) {
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
}