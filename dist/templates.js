angular.module('atom.superalert').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('/directives/superAlert/superAlert.html',
    "<button ng-click=\"click()\">Alert!</button>"
  );

}]);
