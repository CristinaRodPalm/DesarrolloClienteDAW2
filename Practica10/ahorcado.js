var app = angular.module('ahorcado', []);
app.controller('controlador', ['$scope', '$http',
    function ($scope, $http) {
        
        var palabraEscondida = "";
        var palabra = "";
        var intentos = 4;
        
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
                alert("HAS GANADO!! Intentos restantes: "+intentos+" de 4");
            }else if(contador == 0){
                intentos--;
                
                var source = document.getElementById('imagen').src;
                console.log(source);
                var ruta1 = "http://localhost:8080/ProyDAW2/Practica10/img/f1.png";
                var ruta2 = "http://localhost:8080/ProyDAW2/Practica10/img/f2.png";
                var ruta3 = "http://localhost:8080/ProyDAW2/Practica10/img/f3.png";
                var ruta4 = "http://localhost:8080/ProyDAW2/Practica10/img/fallo.png";
                switch(source){
                    case ruta1: 
                        document.getElementById('imagen').src = ruta2;
                        break;
                    case ruta2: 
                        document.getElementById('imagen').src = ruta3;
                        break;
                    case ruta3: 
                        document.getElementById('imagen').src = ruta4;
                        alert("HAS PERDIDO!!! Intentos restantes: "+contador+" de 4"); 
                        break;
                    default: document.getElementById('imagen').src = ruta1; 
                        break;
                }
                
            }
            console.log(palabraOK);
        }
    }
]);
