(function(){
    'use strict';

    var app = angular.module('myApp.factory', ['ngResource',]);

    app.factory("Entity", function($resource) {
        return $resource("http://localhost/entities/:id", {'id': '@id'},{
            get: {method: 'GET', isArray: false},
            list: {method: 'GET', isArray: true},
            get_data: {method: 'GET', url:"http://localhost/entities/:id/data", isArray: false},
        });
    });
})();
