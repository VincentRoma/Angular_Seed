(function(){
    'use strict';

    angular.module('myApp', [
        'ngRoute',
        'myApp.main'
    ]).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/main'});
    }]);
})();
