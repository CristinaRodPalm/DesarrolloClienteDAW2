// Para poner las cosas en scope
var app = angular.module('appEquipos', []);
app.controller('controller', ['$scope', 'service',
    function ($scope, service) {

        $scope.equipo1 = service.crearEquipo("equipo1", -1, 2, "petanca");
        $scope.equipo2 = service.crearEquipo("equipo2", 9, 3, "basket");

        $scope.jugador1 = service.crearJugador("jugador1", "jugador1", "ala", 88);
        $scope.jugador2 = service.crearJugador("jugador2", "jugador2", "lateral", 3);

        $scope.equipo1.addPlayer($scope.jugador1);
        $scope.equipo1.addPlayer($scope.jugador2);

        $scope.equipos = service.equipos;


        $scope.eliminar = function (equipoSel, jug) {
            $scope.jugadoresEq = $scope.equipos[equipoSel].jugadores.splice(jug, 1);

        }
        $scope.crearEquipo = function () {
            service.crearEquipo($scope.nombreEq, $scope.victoria, $scope.derrotas, $scope.juego);
        }
        $scope.crearJugador = function (equipoSel) {
            service.crearJugadorEquipo(equipoSel, $scope.nick, $scope.nombreJug, $scope.funcion, $scope.puntos);
        }
        $scope.editarJugador = function (equipoSel) {
            service.updateJugador(equipoSel, $scope.nick, $scope.nombreJug, $scope.funcion, $scope.puntos);
        }
        $scope.llenarFormulario = function (equipo, jugador) {
            $scope.jugador = $scope.equipos[equipo].jugadores[jugador];

            $scope.nombreJug = $scope.jugador.nombre;
            $scope.puntos = $scope.jugador.puntos;
            $scope.nick = $scope.jugador.nick;
            $scope.funcion = $scope.jugador.funcion;
        }


        $scope.orden = false;

        $scope.ordenar = function (objeto) {
            $scope.objeto = objeto;
            if ($scope.orden === true) $scope.orden = false;
            else $scope.orden = true;
        }
    }
]);
