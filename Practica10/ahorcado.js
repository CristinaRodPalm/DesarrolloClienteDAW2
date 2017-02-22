var app = angular.module('ahorcado', []);
app.controller('controlador', ['$scope', '$http',
    function ($scope, $http) {
        
        var palabraEscondida = "";
        var palabra = "";
        
        $scope.getLongPalabra = function(){
            $http.get("palabras.php").then(
            function(response){
                var respuesta = response.data.cantidad;
                $scope.palabra = response.data.palabra;
                var cantidad = $scope.palabra.length;
                for(var i = 0; i < cantidad; i++){
                    palabraEscondida += "_ ";
                }
                $scope.palabraEscondida = palabraEscondida;
                palabra = new Array();
                
                for(var i = 0; i < $scope.palabra.length; i++){
                    palabra.push("_");
                }                
            },
            function(response){
                $scope.message = "Error:" + response.status +
                 " " + response.statusText;
            });
        }
       
        $scope.comprobar = function(){
            $http.get("palabras.php?letra="+$scope.letra).then(
            function(response){
                var posiciones = eval(response.data.arrayPosiciones);
                
                console.log(palabra);
                for(var i = 0; i < posiciones.length; i++){
                    if(palabra[posiciones[i]] == "_"){
                        palabra[posiciones[i]]= $scope.letra;
                    }
                }
                console.log(palabra);
                
                $scope.palabraEscondida = palabra.toString();
                
                $scope.comprobarResultado();
            },
            function(response){
                console.log("ERROR");
                $scope.message = "Error:" + response.status +
                 " " + response.statusText;
            });           
        }
        
        $scope.comprobarResultado = function(){
            var contador = 0;
            var palabraOK = new Array();
            
            for(var i = 0; i < $scope.palabra.length; i++){
                palabraOK.push($scope.palabra.substr(i, 1));
            }  
            for(var i = 0; i < $scope.palabra.length; i++){
                if(palabraOK[i] == palabra[i]){
                    contador++;
                }
            }
            if(contador == $scope.palabra.length){
                alert("HAS GANADO!!");
            }
            console.log(palabraOK);
        }
    }
]);
