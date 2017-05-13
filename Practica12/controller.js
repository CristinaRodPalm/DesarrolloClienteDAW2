var app = angular.module('appPkm', ['ngResource']);
app.controller('controllerPkm', ['$scope', 'servicePkm',
    function ($scope, servicePkm) {
        // GET ALL
        servicePkm.consultaAjax().get().$promise.then(
                function (response) {
                    $scope.pokemon = response;
                },
                function (response) {
                    alert("Pokemon no encontrado!");
                }
        );

        $scope.llenarFormulario = function (pokemon) {
            servicePkm.consultaAjax().get({nick: pokemon.nick}).$promise.then(
                    function (response) {
                        $scope.nom = response.nombre;
                        $scope.nick = response.nick;
                        $scope.evolucio = response.evolucion;
                        $scope.tipus = response.tipo;
                    },
                    function (response) {
                        alert("Pokemon no encontrado!!");
                    }
            );

        }

        $scope.eliminar = function (pokemon) {
            servicePkm.consultaAjax().delete({nick: pokemon.nick}).$promise.then(
                    function (response) {
                        alert("Pokemon eliminado");
                        $scope.pokemon = response;
                    }, function (response) {
                alert("Algo ha salido mal!!");
            });
        }

        $scope.addEditPkm = function () {
            if ($scope.nombre == null && $scope.nick == null && $scope.evolucio == null && $scope.tipus == null) {
                alert("No puedes crear un Pokémon sin datos");
            }
            console.log(typeof $scope.tipus);
            if(typeof $scope.tipus == "string"){
                var tipo = $scope.tipus.split(",");
            }else if(typeof $scope.tipus == "object"){
                var tipo = $scope.tipus;
            }
            var pokemon = {nombre: $scope.nom, nick: $scope.nick, evolucion: $scope.evolucio, tipo: tipo};

            servicePkm.consultaAjax().get({nick: $scope.nick}).$promise.then(
                    function (response) {
                        // put
                        servicePkm.consultaAjax().update(pokemon).$promise.then(
                                function (response) {
                                    $scope.pokemon = response;
                                },
                                function (response) {
                                    $scope.messError = "Error: " + response.status + " " + response.statusText;
                                });
                    }, function (response) {
                // add
                servicePkm.consultaAjax().save(pokemon).$promise.then(
                        function (response) {
                            $scope.pokemon = response;
                        },
                        function (response) {
                            $scope.messError = "Error: " + response.status + " " + response.statusText;
                        });
            });
        }
            
        // El punto de ordenar no funciona!!
        /*$scope.orden = false;

        $scope.ordenar = function (objeto) {
            console.log(objeto);
            $scope.objeto = objeto;
            if ($scope.orden === true) $scope.orden = false;
            else $scope.orden = true;
        }*/
    }
]);
