var app = angular.module('appPkm', ['ngResource']);
app.controller('controllerPkm', ['$scope', 'servicePkm',
    function ($scope, servicePkm) {
        servicePkm.consultaAjax().get({id: "Bulbasaur"}).$promise.then(
            //funciona
            function(response){
                console.log(response);
                $scope.nombre = response.nombre;
                $scope.nick = response.nick;
                $scope.tipo = response.tipo;
            },
            //error
            function(response){
                console.log("ERROR");
            }
        );
        servicePkm.consultaAjax().get().$promise.then(
            function(response){
                console.log(response);
                $scope.pokemon = response;
            },
            function(response){
                console.log(response);
            }
        );

        $scope.getPlanta = function () {
            servicePkm.consultaAjax().get();
        }
    }
]);
