// Para poner las cosas en scope

var app = angular.module('appCoches', []);
app.controller('controllerCoches', ['$scope', 'concesionario',
    function ($scope, concesionario) {

        $scope.concesionarios = concesionario.concesionarios;

        //Creamos los concesionarios
        $scope.concesionario1 = concesionario.crearConcesionario("paco", "calle florecilla");
        $scope.concesionario2 = concesionario.crearConcesionario("pepe", "calle abejita");
        $scope.concesionario3 = concesionario.crearConcesionario("lenteja", "calle perrico");


        //Creamos los coches
        $scope.coche1 = concesionario.crearCoche("opel", "corsa", "12000€", ["ok", "ki"]);
        $scope.coche2 = concesionario.crearCoche("opel1", "aaasd", "12000€", ["ex1", "ex2", "ex0"]);
        $scope.coche3 = concesionario.crearCoche("apel", "uiouio", "12000€", ["extra1", "extra9"]);

        concesionario.addComanda(1, $scope.coche1);
        concesionario.addComanda(0, $scope.coche2);
        concesionario.addComanda(1, $scope.coche3);
 
        $scope.addCoche = function () {
            $scope.extra = $scope.extras.split(",");
            concesionario.crearCocheConcesionario($scope.conSelect, $scope.marca, $scope.precio, $scope.precio, $scope.extra);
        }

        $scope.orden = true;

        $scope.ordenar = function (objeto) {
            $scope.objeto = objeto;
            if ($scope.orden === true)
                $scope.orden = false;
            else
                $scope.orden = true;
        }
    }
]);
