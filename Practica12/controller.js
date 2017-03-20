var app = angular.module('appPkm', ['ngResource']);
app.controller('controllerPkm', ['$scope', 'servicePkm',
    function ($scope, servicePkm) {
        // GET ID BULBASUR
        servicePkm.consultaAjax().get({id: "Bulbasaur"}).$promise.then(
            function(response){
                console.log(response);
            },
            function(response){
                console.log("ERROR");
            }
        );
        // GET ID PLANTI
        servicePkm.consultaAjax().get({id: "planti"}).$promise.then(
            function(response){
                console.log(response);
            },
            function(response){
                console.log("ERROR");
            }
        );

        // GET ALL
        /*servicePkm.consultaAjax().get().$promise.then(
            function(response){
                console.log(response);
                $scope.pokemon = response;
            },
            function(response){
                console.log(response);
            }
        );*/
        
        var newPokemon = {nombre: 'pikachu', nick: 'pika', evolucion: 'raichu', tipo: ''};
        servicePkm.consultaAjax().save(newPokemon).$promise.then(    
            function (response) {       
                console.log(response);
                $scope.pokemon = response;
            },
            function (response) {
                $scope.messError= "Error: " + response.status + " " + response.statusText;
         });
         
       
    }
]);
