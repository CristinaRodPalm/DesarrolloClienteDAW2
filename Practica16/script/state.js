var app = angular.module('app', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
            .state('app', {
                url: '/',
                views: {
                    'navbar@': {
                            templateUrl: 'navbar/misListas.html'
                    },
                    'content@': {
                        templateUrl: 'vistas/misListas.html'
                    },
                    'footer@': {
                        templateUrl: 'footer.html'
                    }
                }
            })
            .state('misListas', {
                url: '/',
                views: {
                    'navbar@': {
                            templateUrl: 'navbar/misListas.html'
                    },
                    'content@': {
                        templateUrl: 'vistas/misListas.html'
                    },
                    'footer@': {
                        templateUrl: 'footer.html'
                    }
                }
            })
            .state('suscritas', {
                url: '/suscritas',
                views: {
                    'navbar@': {
                            templateUrl: 'navbar/suscritas.html'
                    },
                    'content@': {
                        templateUrl: 'vistas/suscritas.html'
                    },
                    'footer@': {
                        templateUrl: 'footer.html'
                    }
                }
            })
            .state('buscar', {
                url: '/buscar',
                views: {
                    'navbar@': {
                            templateUrl: 'navbar/buscar.html'
                    },
                    'content@': {
                        templateUrl: 'vistas/buscar.html'
                    },
                    'footer@': {
                        templateUrl: 'footer.html'
                    }
                }
            })
            .state('listaCompra', {
                url: '/lista/listaCompra',
                views: {
                    'navbar@': {
                            templateUrl: 'navbar/listaCompra.html'
                    },
                    'content@': {
                        templateUrl: 'vistas/listaCompra.html'
                    },
                    'footer@': {
                        templateUrl: 'footer.html'
                    }
                }
            }).state('misDatos', {
                url: '/misDatos',
                views: {
                    'navbar@': {
                            templateUrl: 'navbar/misDatos.html'
                    },
                    'content@': {
                        templateUrl: 'vistas/misDatos.html'
                    },
                    'footer@': {
                        templateUrl: 'footer.html'
                    }
                }
            })
            
    $urlRouterProvider.otherwise('/');
});