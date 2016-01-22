(function () {
    'use strict';
    

    function superAlert() {
        return {
            restrict: 'E',
            //scope: {
            //},
            replace: false,
            templateUrl: '/directives/superAlert/superAlert.html',
            link: function (scope, element, attrs) {
                scope.click = function() {
                    alert('super alert 3');
                };
            }
        };
    };
    angular.module('atom.superalert').directive('superAlert', superAlert);
})();