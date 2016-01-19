(function () {
    'use strict';
    angular.module('atom.superalert', []);

    function superAlert() {
        return {
            restrict: 'E',
            //scope: {
            //},
            replace: false,
            template: 'superTemplate.html',
            link: function (scope, element, attrs) {
                scope.click = function() {
                    alert('abc');
                };
            }
        };
    };
    angular.module('atom.superalert').directive('superAlert', superAlert);
})();