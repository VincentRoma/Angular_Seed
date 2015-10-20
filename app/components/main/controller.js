(function(){
    'use strict';

    var app = angular.module('myApp.main', ['ngRoute']);

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/main', {
            templateUrl: 'components/main/template.html',
            controller: 'MainController'
        });
    }]);

    app.controller('MainController', [function() {

    }]);
})();
