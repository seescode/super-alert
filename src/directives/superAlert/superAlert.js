(function () {
    'use strict';
    

    function superAlert($scope) {
        return {
            restrict: 'E',
            //scope: {
            //},
            replace: false,
            template: '/directives/superAlert/superTemplate.html',
            link: function (scope, element, attrs) {
                scope.click = function() {
                    alert('abc');
                };
            }
        };
    };
    angular.module('atom.superalert').directive('superAlert', superAlert);
})();