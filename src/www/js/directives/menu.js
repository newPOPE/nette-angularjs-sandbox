"use strict";

app.directive('menu', function () {
  return {
    restrict:'EA',
    scope:{
      items:'='
    },
    templateUrl:'js/directives/menu.html',
  };
});
