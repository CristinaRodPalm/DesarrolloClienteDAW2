// Métodos
app.service('servicePkm', ['$resource', function ($resource) {

        this.consultaAjax = function () {
            return $resource('crud.php/pokem/:id/:nick', null, {
                'get': {method:'GET'},
                'save': {method:'POST'},
                'query': {method:'GET', isArray:true},
                'delete': {method:'DELETE'},
                'update': {method: 'PUT'}
            });
        };   
        
}]);


