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
            $http.get("ajax.php?respuesta="+value+"").then(
            function(response){
                $scope.si = "";
                if(response.data.respuesta === "acertado"){
                    console.log("ok");
                    $("#si").css("color", "green");
                }else{
                    $("#si").css("color", "red");
                }
            },
            function(response){
                $scope.message = "Error:" + response.status +
                 " " + response.statusText;
            });
        }
    }
]);