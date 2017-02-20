
/*$(document).ready(function(){
    $("#start").click(getLongPalabra);
});

function getLongPalabra(){
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open("GET", "palabras.php", true);
            xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xmlHttp.onreadystatechange = function(){
                if(xmlHttp.readyState === 4){
                    recibirLongPalabra(xmlHttp);
                }
            }
            xmlHttp.send(null);
        }
function recibirLongPalabra(xmlHttp){
    if(xmlHttp.status === 200){
        var respuesta = xmlHttp.responseText;
        var respuestaJSON = JSON.parse(respuesta);
        
        numero = respuestaJSON.longitud;
        console.log(numero);
        $("#start").attr("disabled", "disabled").off('click');
    }
}

*/
var app = angular.module('ahorcado', []);
app.controller('controlador', ['$scope',
    function ($scope) {
      
        $scope.getLongPalabra = function(){
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open("GET", "palabras.php", true);
            xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xmlHttp.onreadystatechange = function(){
                if(xmlHttp.readyState === 4){
                    $scope.recibirLongPalabra(xmlHttp);
                }
            }
            xmlHttp.send(null);
        }
        
        $scope.recibirLongPalabra = function(xmlHttp){
            if(xmlHttp.status === 200){
                var respuesta = xmlHttp.responseText;
                
                var respuestaJSON = JSON.parse(respuesta);

                $scope.palabra = respuestaJSON.palabra;
                
                //$("#start").attr("disabled", "disabled").off('click');
                // NO LO PUEDO DESHABILITAR, TENGO Q HACER 2 CLICKS
               
            }
        }
        
        $scope.comprobar = function(){
            var xmlHttp = new XMLHttpRequest();
            var ruta = "palabras.php?letra="+$scope.letra;
            xmlHttp.open("GET", ruta, true);
            xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xmlHttp.onreadystatechange = function(){
                if(xmlHttp.readyState === 4){
                    $scope.letraEncontrada(xmlHttp);
                }
            }
            xmlHttp.send(null);
        }
        
        $scope.letraEncontrada = function(xmlHttp){
            if(xmlHttp.status === 200){
                var respuesta = xmlHttp.responseText;
                
                var respuestaJSON = JSON.parse(respuesta);

                console.log(respuestaJSON.iguales);
               
            }
        }
       
        
    }
]);
