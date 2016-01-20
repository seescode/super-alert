(function () {
    'use strict';
    

    function superAlert() {
        return {
            restrict: 'E',
            //scope: {
            //},
            replace: false,
            templateUrl: '/directives/superAlert/superTemplate.html',
            link: function (scope, element, attrs) {
                scope.click = function() {
                    alert('abc');
                };
            }
        };
    };
    angular.module('atom.superalert').directive('superAlert', superAlert);
})();