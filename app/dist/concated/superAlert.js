(function () {
	'use strict';

	angular.module('atom.superalert', []);

	angular.module('atom', ['atom.superalert']);    
})();
angular.module('atom.superalert').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('/directives/superAlert/superTemplate.html',
    "<button ng-click=\"click()\">Alert!</button>"
  );

}]);

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
//# sourceMappingURL=superAlert.js.map