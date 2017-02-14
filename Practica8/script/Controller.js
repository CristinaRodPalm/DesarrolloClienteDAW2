// Para poner las cosas en scope
var app = angular.module('appEquipos', []);
app.controller('controller', ['$scope', 'service',
    function ($scope, service) {
        
        $scope.algo = "algo";

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
            var nombreRepetido = false;
            for(var i = 0; i <$scope.equipos.length; i++){
                var nombreEquipo = $scope.equipos[i].nombre;
                if(nombreEquipo === $scope.nombreEq) nombreRepetido = true;
            }
            if(!nombreRepetido) service.crearEquipo($scope.nombreEq, $scope.victoria, $scope.derrotas, $scope.juego);
            else console.log("Nombre de equipo repetido");
        }
        $scope.crearJugador = function (equipoSel) {
            var editar = false;
            for(var i = 0; i <$scope.equipos[equipoSel].jugadores.length; i++){
                var jugador = $scope.equipos[equipoSel].jugadores[i];
                    if(jugador.nick === $scope.nick) editar = true;
            }
            if(editar){
                service.updateJugador(equipoSel, $scope.nick, $scope.nombreJug, $scope.funcion, $scope.puntos);
            }else{
                service.crearJugadorEquipo(equipoSel, $scope.nick, $scope.nombreJug, $scope.funcion, $scope.puntos);
            }
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
