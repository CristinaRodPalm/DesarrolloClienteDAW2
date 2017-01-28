angular.module('app', [])
        .controller('controller', ['$scope', function ($scope) {
                var arrayNumeros = [];
                var numero;
        
                for(var i = 0; i < 5; i++){
                    arrayNumeros[i]= Math.floor((Math.random() * 10) + 1);
                }

                $scope.arrayNumeros = arrayNumeros;
                $scope.primero = "";
                $scope.ultimo = "";
                $scope.resultado = "";
                
                $scope.primerUltimoNumero = function () {
                    $scope.primero = arrayNumeros[0];
                    $scope.ultimo = arrayNumeros[arrayNumeros.length - 1];
                    $scope.resultado = $scope.primero+", "+$scope.ultimo;
                }
                
                $scope.calcular = function () {
                    var operador;
                    var resultado = "";
                    do {
                        operador = prompt("Indique el símbolo de la operación deseada (+, -, *, /)");
                    } while (!isNaN(operador) || operador === null || operador === "");
                    
                    for(var i = 0; i < 5; i++){
                        resultado += arrayNumeros[i];
                        if(i!=4) resultado += operador;
                    }
                    var total = eval(resultado);
                    $scope.resultado = total;
                }

                $scope.addNumeroFinal = function () {
                    do {
                        numero = window.prompt("Introduce el número:");
                    } while (isNaN(numero) || numero == null || numero == "");
                    arrayNumeros.push(numero);
                }

                $scope.addNumeroInicio = function () {
                    do {
                        numero = window.prompt("Introduce el número:");
                    } while (isNaN(numero) || numero == null || numero == "");
                    arrayNumeros.unshift(numero);
                }

                $scope.deleteNumeroFinal = function () {
                    arrayNumeros.pop();
                }

                $scope.deleteNumeroInicio = function () {
                    arrayNumeros.shift();
                }

                $scope.borrarPosicion = function () {
                    do {
                        numero = window.prompt("Introduce el número:");
                    } while (isNaN(numero) || numero === null || numero === "");
                    if (numero > arrayNumeros.length) {
                        alert("Número no válido.");
                    } else{
                        arrayNumeros.splice((numero-1), 1);
                    }
                }

                $scope.borrarNumero = function () {
                    do {
                        numero = window.prompt("Introduce el número:");
                    } while (isNaN(numero) || numero == null || numero == "");
                    
                    for(var i = 0; i < arrayNumeros.length; i++){
                        if(numero == arrayNumeros[i]) arrayNumeros.splice(i, 1);
                    }
                }
                
            }]);