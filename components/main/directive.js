(function(){
    'use strict';

    var app = angular.module('myApp.directives', []);

    app.directive("laDirective", function(Entity) {
        return {
            scope: {
            },
            templateUrl: 'app/components/main/html/ladirecitve.html',
            link: function (scope) {
                Entity.list().$promise.then(function(data){
                    scope.entities_list = data;
                });
            }
        };
    });

})();
