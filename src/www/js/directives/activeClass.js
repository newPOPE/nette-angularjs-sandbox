"use strict";

app.directive('activeClass', ['$location', '$route', function ($location, $route) {
  return {
    link: function (scope, elm, attrs) {
      scope.$on('$routeChangeSuccess',function() {
        $location.path() === attrs.activeClass ? elm.addClass('active') : elm.removeClass('active');
      });
    }
  }
}]);