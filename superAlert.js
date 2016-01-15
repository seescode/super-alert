(function () {
    'use strict';
    angular.module('atom.superalert', []);

    function superAlert() {
        return {
            restrict: 'E',
            //scope: {
            //},
            replace: false,
            template: '<button ng-click="click()">Alert!</button>',
            link: function (scope, element, attrs) {
                scope.click = function() {
                    alert('abc');
                };
            }
        };
    };
    angular.module('atom.superalert').directive('superAlert', superAlert);
})();