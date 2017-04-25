var app = angular.module('app', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
            .state('app', {
                url: '/',
                views: {
                    'navbar@': {
                            templateUrl: 'navbar/misListas.html'
                        //controller: 'navbarCtrl'
                    },
                    'content@': {
                        templateUrl: 'vistas/misListas.html'
                    },
                    'footer@': {
                        templateUrl: 'footer/misListas.html'
                    }
                }
            })
            
    $urlRouterProvider.otherwise('/');
});