"use strict";

app.directive('alert', function ($timeout) {
  return {
    restrict:'EA',
    scope:{
      title:'@',
      body:'@',
      button:'@',
      show:'=',
      onClose:'&'
    },
    replace:true,
    template:'<div class="modal hide">' +
      '<div class="modal-header"><h3 ng-bind="title"></h3></div>' +
      '<div class="modal-body">{{body}}</div>' +
      '<div class="modal-footer"><button class="btn btn-primary" ng-click="close()">{{button}}</button></div>' +
      '</div>',
    link:function (scope, elm, attrs, ctrl) {
      scope.$watch('show', function (v) {
        v ? elm.modal('show') : null;
      });

      scope.close = function () {
        elm.modal('hide');
      };

      elm.on('hide', function () {
        $timeout(function () {
          scope.show = false;
          scope.onClose();
          scope.$apply();
        });
      });

      function close() {
      }
    }
  }
});
