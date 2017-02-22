angular.module('confusionApp')
        .service('myService', ['$http', function ($http) {
                this.getMessage = function () {
                    return $http.get("resp.php");
                };
            }]);


