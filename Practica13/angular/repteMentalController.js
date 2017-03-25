// controller
app = angular.module('retoMental', ['ngResource']);
app.controller('controlador', ['$scope', 'service', '$http', 
    function ($scope, service, $http) {
        $("#pistaLbl").hide();
        $("#preguntaLbl").hide();
        $("#respuestasLbl").hide();
        $(".respuestas").hide();
        $("#hide").hide();
        $("#ranking").hide();
        
        $scope.getUserInfo = function(id){
            console.log("info "+id);
        }
        
        $scope.getRanking = function(){
            $("#ranking").show();
            $("#hide").show();
            $("#showRanking").hide();
            $scope.show = true;
            $scope.noshow = false;
            service.consultaAjax().get({nick: $scope.nick, edad:$scope.edad}).$promise.then(
                    function(response){
                        console.log(response);
                        $scope.ranking = response;
                    }, function(response){
                        alert("Ha habido un error al recibir los usuarios");
                    }
            );
        }
        $scope.hideRanking = function(){
            $("#ranking").hide();
            $("#showRanking").show();
            $("#hide").hide();
        }
        $scope.getImagen = function(){
            service.consultaAjax().get({nick: $scope.nick, edad:$scope.edad, puntuacion:0}).$promise.then(
                    function(response){
                        $("#login").hide();
                        console.log(response);
                    }, function (response){
                        alert("Ha habido un error con el login, intenta volver a acceder!!");
                    }
            );
            
            
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