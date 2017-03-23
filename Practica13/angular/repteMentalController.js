// controller
var app = angular.module('retoMental', []);
app.controller('controlador', ['$scope', '$http',
    function ($scope, $http) {
        $("#pistaLbl").hide();
        $("#preguntaLbl").hide();
        $("#respuestasLbl").hide();
        $(".respuestas").hide();
        $scope.getImagen = function(){
            $http.get("ajax.php?ruta=si").then(
            function(response){
                $scope.ruta = "../img/"+response.data.ruta; 
                $("#imagen").mouseover($scope.getPista);
                $("#imagen").mouseout($scope.getPregunta);
            },
            function(response){
                $scope.message = "Error:" + response.status +
                 " " + response.statusText;
            });
        }
        $scope.getPista = function(){
            $("#imagen").unbind("mouseover");
            console.log("GET PISTA");
            $http.get("ajax.php?pista=si").then(
            function(response){
                $("#pistaLbl").show();
                $scope.pista = response.data.pista;
            },
            function(response){
                $scope.message = "Error:" + response.status +
                 " " + response.statusText;
            });
        }
        $scope.getPregunta = function(){
            $("#imagen").unbind("mouseout");
            console.log("GET PREGUNTA");
            $http.get("ajax.php?pregunta=si").then(
            function(response){
                $("#preguntaLbl").show();
                $(".respuestas").show();
                $("#respuestasLbl").show();
                $("#imagen").hide();
                $scope.pregunta = response.data.pregunta;
            },
            function(response){
                $scope.message = "Error:" + response.status +
                 " " + response.statusText;
            });
        }
        $scope.checkRespuesta = function(value){
            $scope.disabled = false;
            $http.get("ajax.php?respuesta="+value+"").then(
            function(response){
                var pos = response.data.posicion;
                var respuesta = response.data.respuesta;
                if(respuesta === "acertado"){
                    $("#"+value).css("color", "#7CFC00");
                }else if(respuesta == "fallado"){
                    $("#"+value).css("color", "red");
                    /*if(pos == "si"){
                        $("#no").css("color", "#7CFC00");
                        $("#si").css("color", "red"); 
                    }else if(pos == "no"){
                       $("#si").css("color", "#7CFC00");
                       $("#no").css("color", "red");
                    }*/
                }
                $scope.disabled = true;
            },
            function(response){
                $scope.message = "Error:" + response.status +
                 " " + response.statusText;
            });
        }
    }
]);